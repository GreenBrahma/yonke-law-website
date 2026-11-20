/**
 * GET /command/api/media/file?id=<uuid> — sends a stored photo or video.
 * Supports byte ranges, which iPhone Safari needs to play video.
 */
import { NextRequest } from "next/server";
import { CHUNK, ID, Media, chunkKey, kv, metaKey } from "../kv";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id") || "";
  if (!ID.test(id)) return new Response("Not found", { status: 404 });
  const store = kv();
  const raw = await store.get(metaKey(id));
  if (!raw) return new Response("Not found", { status: 404 });
  const meta = JSON.parse(raw) as Media;

  let start = 0;
  let end = meta.size - 1;
  let partial = false;
  const range = req.headers.get("range");
  const m = range && /^bytes=(\d*)-(\d*)$/.exec(range.trim());
  if (m && (m[1] || m[2])) {
    if (m[1]) {
      start = Number(m[1]);
      if (m[2]) end = Math.min(Number(m[2]), meta.size - 1);
    } else {
      start = Math.max(0, meta.size - Number(m[2]));
    }
    if (start > end || start >= meta.size) {
      return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${meta.size}` } });
    }
    partial = true;
  }

  const first = Math.floor(start / CHUNK);
  const last = Math.floor(end / CHUNK);
  let n = first;
  const body = new ReadableStream<Uint8Array>({
    async pull(controller) {
      if (n > last) {
        controller.close();
        return;
      }
      const buf = await store.get(chunkKey(id, n), "arrayBuffer");
      if (!buf) {
        controller.error(new Error("Missing piece"));
        return;
      }
      const base = n * CHUNK;
      const from = Math.max(start - base, 0);
      const to = Math.min(end - base + 1, buf.byteLength);
      controller.enqueue(new Uint8Array(buf, from, to - from));
      n++;
    },
  });

  const headers: Record<string, string> = {
    "Content-Type": meta.type,
    "Content-Length": String(end - start + 1),
    "Accept-Ranges": "bytes",
    "Cache-Control": "private, max-age=3600",
  };
  if (partial) headers["Content-Range"] = `bytes ${start}-${end}/${meta.size}`;
  return new Response(body, { status: partial ? 206 : 200, headers });
}
