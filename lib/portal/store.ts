/**
 * People First portal — private storage.
 *
 * Everything a person adds (their documents, their check-ins, their contact
 * preferences, their scheduling requests) is kept in the private R2 bucket
 * "yonke-law-media" under portal/<person id>/. Nothing here is reachable by a
 * public URL; every read goes through a signed-in route that checks the
 * person id first.
 *
 * On a developer machine there is no R2, so the same calls write to the
 * git-ignored folder .portal-dev/ instead. That fallback never runs in
 * production: there, a missing bucket is an error.
 */
import { getCloudflareContext } from "@opennextjs/cloudflare";

type R2ObjectBody = {
  size: number;
  uploaded?: Date;
  body: ReadableStream;
  httpMetadata?: { contentType?: string };
  customMetadata?: Record<string, string>;
  arrayBuffer(): Promise<ArrayBuffer>;
  text(): Promise<string>;
};
type R2Listed = { key: string; size: number; uploaded: Date; customMetadata?: Record<string, string> };
type R2 = {
  get(key: string): Promise<R2ObjectBody | null>;
  head(key: string): Promise<R2Listed | null>;
  put(
    key: string,
    body: ArrayBuffer | string,
    opts?: { httpMetadata?: { contentType?: string }; customMetadata?: Record<string, string> }
  ): Promise<unknown>;
  delete(key: string): Promise<void>;
  list(opts: { prefix: string; limit?: number; include?: string[] }): Promise<{ objects: R2Listed[] }>;
};

export type StoredItem = {
  key: string;
  size: number;
  uploaded: string;
  meta: Record<string, string>;
};
export type StoredBody = StoredItem & { contentType: string; bytes: ArrayBuffer };

export interface PortalStore {
  put(key: string, body: ArrayBuffer | string, contentType: string, meta?: Record<string, string>): Promise<void>;
  get(key: string): Promise<StoredBody | null>;
  exists(key: string): Promise<boolean>;
  list(prefix: string): Promise<StoredItem[]>;
  delete(key: string): Promise<void>;
}

function r2Store(bucket: R2): PortalStore {
  return {
    async put(key, body, contentType, meta = {}) {
      await bucket.put(key, body, { httpMetadata: { contentType }, customMetadata: meta });
    },
    async get(key) {
      const o = await bucket.get(key);
      if (!o) return null;
      return {
        key,
        size: o.size,
        uploaded: (o.uploaded ?? new Date()).toISOString(),
        meta: o.customMetadata ?? {},
        contentType: o.httpMetadata?.contentType ?? "application/octet-stream",
        bytes: await o.arrayBuffer(),
      };
    },
    async exists(key) {
      return (await bucket.head(key)) !== null;
    },
    async list(prefix) {
      const res = await bucket.list({ prefix, limit: 500, include: ["customMetadata"] });
      return res.objects.map((o) => ({
        key: o.key,
        size: o.size,
        uploaded: new Date(o.uploaded).toISOString(),
        meta: o.customMetadata ?? {},
      }));
    },
    async delete(key) {
      await bucket.delete(key);
    },
  };
}

/** Developer-machine fallback: files on disk under .portal-dev/. */
async function devStore(): Promise<PortalStore> {
  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  const root = path.join(process.cwd(), ".portal-dev");
  const file = (key: string) => path.join(root, encodeURIComponent(key));
  await fs.mkdir(root, { recursive: true });
  return {
    async put(key, body, contentType, meta = {}) {
      const bytes = typeof body === "string" ? Buffer.from(body) : Buffer.from(body);
      await fs.writeFile(file(key), bytes);
      await fs.writeFile(file(key) + ".meta", JSON.stringify({ contentType, meta, uploaded: new Date().toISOString() }));
    },
    async get(key) {
      try {
        const bytes = await fs.readFile(file(key));
        const info = JSON.parse(await fs.readFile(file(key) + ".meta", "utf8"));
        return {
          key,
          size: bytes.byteLength,
          uploaded: info.uploaded,
          meta: info.meta ?? {},
          contentType: info.contentType,
          bytes: bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer,
        };
      } catch {
        return null;
      }
    },
    async exists(key) {
      try {
        await fs.access(file(key));
        return true;
      } catch {
        return false;
      }
    },
    async list(prefix) {
      const names = await fs.readdir(root);
      const out: StoredItem[] = [];
      for (const n of names) {
        if (n.endsWith(".meta")) continue;
        const key = decodeURIComponent(n);
        if (!key.startsWith(prefix)) continue;
        const stat = await fs.stat(path.join(root, n));
        const info = JSON.parse(await fs.readFile(path.join(root, n) + ".meta", "utf8"));
        out.push({ key, size: stat.size, uploaded: info.uploaded, meta: info.meta ?? {} });
      }
      return out;
    },
    async delete(key) {
      await fs.rm(file(key), { force: true });
      await fs.rm(file(key) + ".meta", { force: true });
    },
  };
}

export async function portalStore(): Promise<PortalStore> {
  let bucket: R2 | undefined;
  try {
    bucket = (getCloudflareContext().env as unknown as { YL_MEDIA?: R2 }).YL_MEDIA;
  } catch {
    bucket = undefined;
  }
  if (bucket) return r2Store(bucket);
  if (process.env.NODE_ENV !== "production") return devStore();
  throw new Error("Portal storage is not available: the YL_MEDIA bucket binding is missing.");
}

/** Folder that belongs to one person. Every portal key must start with this. */
export const personPrefix = (userId: string) => `portal/${userId}/`;

/**
 * Marks a sign-in link as used. Returns false when it was used before, so a
 * link works exactly once.
 */
export async function consumeLinkId(linkId: string): Promise<boolean> {
  if (!/^[0-9a-f-]{36}$/.test(linkId)) return false;
  const store = await portalStore();
  const key = `portal/_used-links/${linkId}`;
  if (await store.exists(key)) return false;
  await store.put(key, new Date().toISOString(), "text/plain");
  return true;
}
