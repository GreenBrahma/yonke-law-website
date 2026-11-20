/**
 * Campaign photos and videos that Mike uploads in Content Approval.
 *
 * Stored in the YL_ACTIVITY KV namespace (R2 is not turned on for this account).
 * A file is split into 8 MiB pieces, each its own KV value, so a phone video of
 * a few minutes fits under KV's 25 MiB per-value limit. Everything lives under
 * /command, so Cloudflare Access (email-code login) guards it.
 */
import { getCloudflareContext } from "@opennextjs/cloudflare";

export type KV = {
  get(key: string, type: "arrayBuffer"): Promise<ArrayBuffer | null>;
  get(key: string): Promise<string | null>;
  put(key: string, value: string | ArrayBuffer): Promise<void>;
  delete(key: string): Promise<void>;
};

export type Media = {
  id: string;
  campaign: string;
  name: string;
  type: string;
  size: number;
  chunks: number;
  by: string;
  at: string;
};

export const CHUNK = 8 * 1024 * 1024;
export const MAX_SIZE = 250 * 1024 * 1024;
export const MAX_CHUNKS = Math.ceil(MAX_SIZE / CHUNK);
export const ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
export const CAMPAIGN = /^YL-\d{3}$/;

export function kv(): KV {
  const { env } = getCloudflareContext();
  return (env as unknown as { YL_ACTIVITY: KV }).YL_ACTIVITY;
}

export const listKey = (campaign: string) => `media:list:${campaign}`;
export const metaKey = (id: string) => `media:meta:${id}`;
export const chunkKey = (id: string, n: number) => `media:chunk:${id}:${n}`;

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
