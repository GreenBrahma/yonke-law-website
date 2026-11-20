/**
 * Campaign media list.
 *   GET    /command/api/media?campaign=YL-001       the photos and videos for a campaign
 *   POST   /command/api/media  {id,campaign,name,type,size,chunks}   finish an upload
 *   DELETE /command/api/media?campaign=YL-001&id=<uuid>             remove one
 */
import { NextRequest, NextResponse } from "next/server";
import { CAMPAIGN, CHUNK, ID, MAX_SIZE, Media, chunkKey, kv, listKey, metaKey, readList } from "./kv";

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
  const id = String(b.id || "");
  const campaign = String(b.campaign || "");
  const type = String(b.type || "");
  const size = Number(b.size);
  const chunks = Number(b.chunks);
  const name = String(b.name || "upload").slice(0, 120);
  if (!ID.test(id) || !CAMPAIGN.test(campaign)) return NextResponse.json({ ok: false, error: "Invalid upload" }, { status: 400 });
  if (!/^(image|video)\/[\w.+-]+$/.test(type)) return NextResponse.json({ ok: false, error: "Only photos and videos" }, { status: 400 });
  if (!Number.isInteger(size) || size < 1 || size > MAX_SIZE || chunks !== Math.ceil(size / CHUNK)) {
    return NextResponse.json({ ok: false, error: "File is too large (250 MB limit)" }, { status: 400 });
  }
  const store = kv();
  // Every piece must have arrived before the file is listed.
  for (let n = 0; n < chunks; n++) {
    if (!(await store.get(chunkKey(id, n), "arrayBuffer"))) {
      return NextResponse.json({ ok: false, error: "Upload incomplete, please try again" }, { status: 409 });
    }
  }
  const media: Media = { id, campaign, name, type, size, chunks, by: who(req), at: new Date().toISOString() };
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
  const gone = list.find((m) => m.id === id);
  await store.put(listKey(campaign), JSON.stringify(list.filter((m) => m.id !== id)));
  if (gone) {
    for (let n = 0; n < gone.chunks; n++) await store.delete(chunkKey(id, n));
    await store.delete(metaKey(id));
  }
  return NextResponse.json({ ok: true });
}
