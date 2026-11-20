/**
 * Website approvals for Mike's posts — GET/POST /command/api/website
 *
 * GET  -> posts waiting for the website and posts on it now, plus whether the
 *         signed-in person may approve.
 * POST {id, target, action: "approve" | "decline" | "remove"} — approvers only.
 */
import { NextRequest, NextResponse } from "next/server";
import { SitePost, approvers, siteKey, sitePosts, store } from "@/lib/activity/website";

export const dynamic = "force-dynamic";

type Post = { id: string; created: string; by: string; doing: string; message: string; targets: string[]; status: Record<string, string> };

const me = (req: NextRequest) => (req.headers.get("cf-access-authenticated-user-email") || "").toLowerCase();

async function recentPosts(): Promise<Post[]> {
  const kv = store();
  const { keys } = await kv.list({ prefix: "post:", limit: 200 });
  const posts = (await Promise.all(keys.map((k) => kv.get(k.name)))).filter(Boolean).map((s) => JSON.parse(s as string) as Post);
  return posts.sort((a, b) => (a.created < b.created ? 1 : -1));
}

export async function GET(req: NextRequest) {
  const posts = await recentPosts();
  const waiting = posts.flatMap((p) =>
    p.targets
      .filter((t) => t.startsWith("website") && p.status?.[t] === "awaiting website approval")
      .map((t) => ({ id: p.id, target: t, created: p.created, by: p.by, doing: p.doing, message: p.message }))
  );
  const live = await sitePosts(store(), 30);
  return NextResponse.json({ ok: true, canApprove: approvers().includes(me(req)), waiting, live });
}

export async function POST(req: NextRequest) {
  const who = me(req);
  if (!approvers().includes(who)) return NextResponse.json({ ok: false, error: "Only Geoff can approve website posts." }, { status: 403 });
  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  const id = String(b.id || ""), target = String(b.target || ""), action = String(b.action || "");
  if (!/^[0-9]{14}-[0-9a-f-]{36}$/.test(id) || !/^website(__[a-z]+)?$/.test(target) || !["approve", "decline", "remove"].includes(action)) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  const kv = store();
  const raw = await kv.get(`post:${id}`);
  if (!raw) return NextResponse.json({ ok: false, error: "Post not found" }, { status: 404 });
  const post = JSON.parse(raw) as Post;
  if (!post.targets.includes(target)) return NextResponse.json({ ok: false, error: "Not a website post" }, { status: 400 });

  const key = siteKey(post.created, id, target);
  if (action === "approve") {
    const rec: SitePost = { id, target, created: post.created, approved: new Date().toISOString(), approvedBy: who, doing: post.doing, message: post.message };
    await kv.put(key, JSON.stringify(rec));
    post.status[target] = "on website";
  } else {
    await kv.delete(key);
    post.status[target] = action === "decline" ? "not for website" : "removed from website";
  }
  await kv.put(`post:${id}`, JSON.stringify(post), { metadata: { created: post.created, doing: post.doing.slice(0, 80) } });
  return NextResponse.json({ ok: true, status: post.status[target] });
}
