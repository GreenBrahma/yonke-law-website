/** POST /command/api/media/start {campaign, type, size} — opens an upload; returns {id, uploadId}. */
import { NextRequest, NextResponse } from "next/server";
import { CAMPAIGN, MAX_SIZE, TYPE, bucket, objectKey } from "../kv";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  const campaign = String(b.campaign || "");
  const type = String(b.type || "");
  const size = Number(b.size);
  if (!CAMPAIGN.test(campaign)) return NextResponse.json({ ok: false, error: "Unknown campaign" }, { status: 400 });
  if (!TYPE.test(type)) return NextResponse.json({ ok: false, error: "Only photos and videos" }, { status: 400 });
  if (!Number.isInteger(size) || size < 1 || size > MAX_SIZE) {
    return NextResponse.json({ ok: false, error: "File is too large (500 MB limit)" }, { status: 400 });
  }
  const id = crypto.randomUUID();
  const up = await bucket().createMultipartUpload(objectKey(campaign, id), { httpMetadata: { contentType: type } });
  return NextResponse.json({ ok: true, id, uploadId: up.uploadId });
}
