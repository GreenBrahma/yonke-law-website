/**
 * One of the signed-in person's own files.
 *   GET     download
 *   DELETE  remove
 * The storage key is built from the signed-in person's id, so one person can
 * never reach another person's file, whatever id they send.
 */
import { NextResponse } from "next/server";
import { portalUser } from "@/lib/portal/session";
import { portalStore } from "@/lib/portal/store";
import { DOC_ID, docKey } from "@/lib/portal/my-documents";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Ctx) {
  const user = await portalUser();
  if (!user) return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  const { id } = await params;
  if (!DOC_ID.test(id)) return NextResponse.json({ error: "Not found." }, { status: 404 });

  const item = await (await portalStore()).get(docKey(user.id, id));
  if (!item) return NextResponse.json({ error: "Not found." }, { status: 404 });

  let name = "document";
  try {
    name = decodeURIComponent(item.meta.name || "document");
  } catch {
    /* keep the fallback */
  }
  return new Response(item.bytes, {
    headers: {
      "Content-Type": item.contentType,
      "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(name)}`,
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  const user = await portalUser();
  if (!user) return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  const { id } = await params;
  if (!DOC_ID.test(id)) return NextResponse.json({ error: "Not found." }, { status: 404 });
  await (await portalStore()).delete(docKey(user.id, id));
  return NextResponse.json({ ok: true });
}
