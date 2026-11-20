/**
 * GET /command/api/media/file?id=<uuid> — sends a stored photo or video from R2.
 * Passes byte ranges through, which iPhone Safari needs to play video.
 */
import { NextRequest } from "next/server";
import { ID, Media, bucket, kv, metaKey, objectKey } from "../kv";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id") || "";
  if (!ID.test(id)) return new Response("Not found", { status: 404 });
  const raw = await kv().get(metaKey(id));
  if (!raw) return new Response("Not found", { status: 404 });
  const meta = JSON.parse(raw) as Media;
  const wantsRange = req.headers.has("range");
  const obj = await bucket().get(objectKey(meta.campaign, id), wantsRange ? { range: req.headers } : undefined);
  if (!obj) return new Response("Not found", { status: 404 });

  const headers: Record<string, string> = {
    "Content-Type": obj.httpMetadata?.contentType || meta.type,
    "Accept-Ranges": "bytes",
    "Cache-Control": "private, max-age=3600",
  };
  const r = obj.range;
  if (wantsRange && r) {
    const start = r.suffix !== undefined ? obj.size - r.suffix : r.offset ?? 0;
    const length = r.suffix !== undefined ? r.suffix : r.length ?? obj.size - start;
    headers["Content-Range"] = `bytes ${start}-${start + length - 1}/${obj.size}`;
    headers["Content-Length"] = String(length);
    return new Response(obj.body, { status: 206, headers });
  }
  headers["Content-Length"] = String(obj.size);
  return new Response(obj.body, { status: 200, headers });
}
