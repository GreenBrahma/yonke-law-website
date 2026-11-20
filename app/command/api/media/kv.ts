/**
 * Campaign photos and videos that Mike uploads in Content Approval.
 *
 * Files live in the private R2 bucket "yonke-law-media" (binding YL_MEDIA).
 * Uploads go up in 8 MiB parts (an R2 multipart upload), so long phone videos
 * never hit the Worker's request-size limit. The list of files per campaign is a
 * small record in the YL_ACTIVITY KV namespace. Everything lives under /command,
 * so Cloudflare Access (email-code login) guards it.
 */
import { getCloudflareContext } from "@opennextjs/cloudflare";

export type KV = {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
  delete(key: string): Promise<void>;
};

type R2Range = { offset?: number; length?: number; suffix?: number };
export type R2Object = {
  size: number;
  range?: R2Range;
  body: ReadableStream;
  httpMetadata?: { contentType?: string };
};
type R2Multipart = {
  uploadId: string;
  uploadPart(n: number, body: ArrayBuffer): Promise<{ partNumber: number; etag: string }>;
  complete(parts: { partNumber: number; etag: string }[]): Promise<unknown>;
  abort(): Promise<void>;
};
export type R2 = {
  get(key: string, opts?: { range?: Headers }): Promise<R2Object | null>;
  delete(key: string): Promise<void>;
  createMultipartUpload(key: string, opts?: { httpMetadata?: { contentType?: string } }): Promise<R2Multipart>;
  resumeMultipartUpload(key: string, uploadId: string): R2Multipart;
};

export type Media = {
  id: string;
  campaign: string;
  name: string;
  type: string;
  size: number;
  by: string;
  at: string;
};

export const PART = 8 * 1024 * 1024;
export const MAX_SIZE = 500 * 1024 * 1024;
export const MAX_PARTS = Math.ceil(MAX_SIZE / PART);
export const ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
export const CAMPAIGN = /^YL-\d{3}$/;
export const TYPE = /^(image|video)\/[\w.+-]+$/;

function env() {
  return getCloudflareContext().env as unknown as { YL_ACTIVITY: KV; YL_MEDIA: R2 };
}
export const kv = () => env().YL_ACTIVITY;
export const bucket = () => env().YL_MEDIA;

export const objectKey = (campaign: string, id: string) => `campaigns/${campaign}/${id}`;
export const listKey = (campaign: string) => `media:list:${campaign}`;
export const metaKey = (id: string) => `media:meta:${id}`;

export async function readList(store: KV, campaign: string): Promise<Media[]> {
  const raw = await store.get(listKey(campaign));
  if (!raw) return [];
  try {
    const v = JSON.parse(raw);
    return Array.isArray(v) ? (v as Media[]) : [];
  } catch {
    return [];
  }
}
