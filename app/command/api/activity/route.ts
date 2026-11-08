/**
 * Add Activity — POST /command/api/activity, GET /command/api/activity
 *
 * Lives under /command so Cloudflare Access (email-code login) guards it.
 * Stores each post (text, rendered platform images, chosen platforms) in the
 * YL_ACTIVITY KV namespace and hands it to the publisher. Until a publishing
 * connection is configured, posts are saved with status "awaiting connection".
 */

import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { publish, PLATFORMS, type Platform } from "@/lib/activity/publish";

export const dynamic = "force-dynamic";

type KV = {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, opts?: { metadata?: unknown }): Promise<void>;
  list(opts?: { prefix?: string; limit?: number }): Promise<{ keys: { name: string; metadata?: unknown }[] }>;
};

function kv(): KV {
  const { env } = getCloudflareContext();
  return (env as unknown as { YL_ACTIVITY: KV }).YL_ACTIVITY;
}

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const MAX_IMAGE = 4_000_000; // characters of base64 data URL per image

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const doing = clean(body.doing, 300);
  const message = clean(body.message, 2200);
  const targets = (Array.isArray(body.targets) ? body.targets : [])
    .filter((t): t is Platform => typeof t === "string" && (PLATFORMS as readonly string[]).includes(t));
  const images = (body.images ?? {}) as Record<string, unknown>;

  if (!doing && !message) return NextResponse.json({ ok: false, error: "Add what you're doing or what you want to say." }, { status: 400 });
  if (!targets.length) return NextResponse.json({ ok: false, error: "Pick at least one place to post." }, { status: 400 });

  const id = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14) + "-" + crypto.randomUUID().slice(0, 8);
  const by = req.headers.get("cf-access-authenticated-user-email") || "unknown";
  const store = kv();

  // Images are stored separately so the post record stays small
  for (const t of targets) {
    const img = images[t];
    if (typeof img === "string" && img.startsWith("data:image/") && img.length < MAX_IMAGE) {
      await store.put(`img:${id}:${t}`, img);
    }
  }

  const post = { id, created: new Date().toISOString(), by, doing, message, targets, status: {} as Record<string, string> };
  post.status = await publish(post);
  await store.put(`post:${id}`, JSON.stringify(post), { metadata: { created: post.created, doing: doing.slice(0, 80) } });

  return NextResponse.json({ ok: true, id, status: post.status });
}

export async function GET() {
  const store = kv();
  const { keys } = await store.list({ prefix: "post:", limit: 50 });
  const posts = (await Promise.all(keys.map((k) => store.get(k.name))))
    .filter(Boolean)
    .map((s) => JSON.parse(s as string))
    .sort((a, b) => (a.created < b.created ? 1 : -1))
    .slice(0, 10);
  return NextResponse.json({ ok: true, posts });
}
