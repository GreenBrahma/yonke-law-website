/** POST /command/api/media/chunk?campaign=&id=&uploadId=&n= — one 8 MiB part (raw bytes); returns its etag. */
import { NextRequest, NextResponse } from "next/server";
import { CAMPAIGN, ID, MAX_PARTS, PART, bucket, objectKey } from "../kv";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const q = req.nextUrl.searchParams;
  const campaign = q.get("campaign") || "", id = q.get("id") || "", uploadId = q.get("uploadId") || "";
  const n = Number(q.get("n"));
  if (!CAMPAIGN.test(campaign) || !ID.test(id) || !uploadId || !Number.isInteger(n) || n < 1 || n > MAX_PARTS) {
    return NextResponse.json({ ok: false, error: "Invalid part" }, { status: 400 });
  }
  const bytes = await req.arrayBuffer();
  if (!bytes.byteLength || bytes.byteLength > PART) {
    return NextResponse.json({ ok: false, error: "Part is empty or too large" }, { status: 400 });
  }
  const part = await bucket().resumeMultipartUpload(objectKey(campaign, id), uploadId).uploadPart(n, bytes);
  return NextResponse.json({ ok: true, partNumber: part.partNumber, etag: part.etag });
}
