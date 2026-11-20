/**
 * Campaign media list.
 *   GET    /command/api/media?campaign=YL-001     the photos and videos for a campaign
 *   POST   /command/api/media  {id,uploadId,parts,campaign,name,type,size}   finish an upload
 *   DELETE /command/api/media?campaign=YL-001&id=<uuid>
 */
import { NextRequest, NextResponse } from "next/server";
import { CAMPAIGN, ID, MAX_SIZE, Media, TYPE, bucket, kv, listKey, metaKey, objectKey, readList } from "./kv";

export const dynamic = "force-dynamic";

const who = (req: NextRequest) => req.headers.get("cf-access-authenticated-user-email") || "unknown";

export async function GET(req: NextRequest) {
  const campaign = req.nextUrl.searchParams.get("campaign") || "";
  if (!CAMPAIGN.test(campaign)) return NextResponse.json({ ok: false, error: "Unknown campaign" }, { status: 400 });
  return NextResponse.json({ ok: true, media: await readList(kv(), campaign) });
}

export async function POST(req: NextRequest) {
  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  const id = String(b.id || ""), campaign = String(b.campaign || ""), uploadId = String(b.uploadId || "");
  const type = String(b.type || ""), size = Number(b.size), name = String(b.name || "upload").slice(0, 120);
  const parts = Array.isArray(b.parts)
    ? (b.parts as { partNumber: unknown; etag: unknown }[]).map((p) => ({ partNumber: Number(p.partNumber), etag: String(p.etag) }))
    : [];
  if (!ID.test(id) || !CAMPAIGN.test(campaign) || !uploadId || !TYPE.test(type) || !parts.length) {
    return NextResponse.json({ ok: false, error: "Invalid upload" }, { status: 400 });
  }
  if (!Number.isInteger(size) || size < 1 || size > MAX_SIZE) return NextResponse.json({ ok: false, error: "File is too large" }, { status: 400 });
  try {
    await bucket().resumeMultipartUpload(objectKey(campaign, id), uploadId).complete(parts);
  } catch {
    return NextResponse.json({ ok: false, error: "Upload incomplete, please try again" }, { status: 409 });
  }
  const store = kv();
  const media: Media = { id, campaign, name, type, size, by: who(req), at: new Date().toISOString() };
  await store.put(metaKey(id), JSON.stringify(media));
  const list = (await readList(store, campaign)).filter((m) => m.id !== id);
  list.push(media);
  await store.put(listKey(campaign), JSON.stringify(list));
  return NextResponse.json({ ok: true, media });
}

export async function DELETE(req: NextRequest) {
  const campaign = req.nextUrl.searchParams.get("campaign") || "";
  const id = req.nextUrl.searchParams.get("id") || "";
  if (!ID.test(id) || !CAMPAIGN.test(campaign)) return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  const store = kv();
  const list = await readList(store, campaign);
  await store.put(listKey(campaign), JSON.stringify(list.filter((m) => m.id !== id)));
  await bucket().delete(objectKey(campaign, id));
  await store.delete(metaKey(id));
  return NextResponse.json({ ok: true });
}
