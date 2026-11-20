/** POST /command/api/media/chunk?id=<uuid>&n=<index> — one 8 MiB piece of an upload, raw bytes. */
import { NextRequest, NextResponse } from "next/server";
import { CHUNK, ID, MAX_CHUNKS, chunkKey, kv } from "../kv";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id") || "";
  const n = Number(req.nextUrl.searchParams.get("n"));
  if (!ID.test(id) || !Number.isInteger(n) || n < 0 || n >= MAX_CHUNKS) {
    return NextResponse.json({ ok: false, error: "Invalid piece" }, { status: 400 });
  }
  const bytes = await req.arrayBuffer();
  if (!bytes.byteLength || bytes.byteLength > CHUNK) {
    return NextResponse.json({ ok: false, error: "Piece is empty or too large" }, { status: 400 });
  }
  await kv().put(chunkKey(id, n), bytes);
  return NextResponse.json({ ok: true });
}
