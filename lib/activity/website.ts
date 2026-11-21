/**
 * Mike's posts on the Meet Mike page (/about).
 *
 * Mike can pick "Yonke.law" as a place to post in My Updates. Nothing reaches the
 * site until an approver (WEBSITE_APPROVERS, default Geoff) approves it in /command.
 * Approved posts are kept as `site:<created>:<postId>:<target>` records in the
 * YL_ACTIVITY KV namespace; the public page reads only those.
 */
import { getCloudflareContext } from "@opennextjs/cloudflare";

export type KV = {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, opts?: { metadata?: unknown }): Promise<void>;
  delete(key: string): Promise<void>;
  list(opts?: { prefix?: string; limit?: number; cursor?: string }): Promise<{ keys: { name: string }[]; list_complete?: boolean; cursor?: string }>;
};

export type SitePost = { id: string; target: string; created: string; approved: string; approvedBy: string; doing: string; message: string };

export function store(): KV {
  return (getCloudflareContext().env as unknown as { YL_ACTIVITY: KV }).YL_ACTIVITY;
}

export function approvers(): string[] {
  let raw = "";
  try {
    raw = String((getCloudflareContext().env as unknown as Record<string, unknown>).WEBSITE_APPROVERS || "");
  } catch {
    /* not on Workers */
  }
  return (raw || "geoff@greenbrahma.com").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
}

export const siteKey = (created: string, id: string, target: string) => `site:${created}:${id}:${target}`;

/** Approved posts, newest first. */
export async function sitePosts(kv: KV, limit: number): Promise<SitePost[]> {
  const keys: string[] = [];
  let cursor: string | undefined;
  do {
    const page = await kv.list({ prefix: "site:", limit: 1000, cursor });
    keys.push(...page.keys.map((k) => k.name));
    cursor = page.list_complete === false ? page.cursor : undefined;
  } while (cursor);
  keys.sort().reverse();
  const out = await Promise.all(keys.slice(0, limit).map((k) => kv.get(k)));
  return out.filter(Boolean).map((s) => JSON.parse(s as string) as SitePost);
}
