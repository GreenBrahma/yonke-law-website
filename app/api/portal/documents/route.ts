/**
 * My Documents — the signed-in person's own private files.
 *   GET   list
 *   POST  upload one file (multipart field "file")
 */
import { NextRequest, NextResponse } from "next/server";
import { portalUser } from "@/lib/portal/session";
import { portalStore } from "@/lib/portal/store";
import { ALLOWED_TYPES, MAX_UPLOAD_BYTES, docKey, listMyDocuments } from "@/lib/portal/my-documents";
import { notifyFirm } from "@/lib/portal/mail";
import { getCaseFor } from "@/lib/portal/source";

export async function GET() {
  const user = await portalUser();
  if (!user) return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  return NextResponse.json({ documents: await listMyDocuments(user.id) });
}

export async function POST(req: NextRequest) {
  const user = await portalUser();
  if (!user) return NextResponse.json({ error: "Please sign in." }, { status: 401 });

  let file: File | null = null;
  try {
    const form = await req.formData();
    const f = form.get("file");
    if (f instanceof File) file = f;
  } catch {
    /* handled below */
  }
  if (!file || file.size === 0) {
    return NextResponse.json({ error: "Choose a file to add." }, { status: 400 });
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    return NextResponse.json({ error: "That file is larger than 20 MB. Please call us and we will help." }, { status: 413 });
  }
  const kind = ALLOWED_TYPES[file.type];
  if (!kind) {
    return NextResponse.json(
      { error: "That file type is not accepted. Use a PDF, a photo, a Word document or a text file." },
      { status: 415 }
    );
  }

  const id = crypto.randomUUID();
  const name = file.name.replace(/[\\/]/g, " ").slice(0, 150) || "Document";
  const store = await portalStore();
  await store.put(docKey(user.id, id), await file.arrayBuffer(), file.type, {
    name: encodeURIComponent(name),
    kind,
  });

  // Let the firm know. The document is already saved; a mail hiccup does not undo that.
  let firmNotified = true;
  try {
    const portalCase = await getCaseFor(user.email);
    await notifyFirm(
      `${portalCase.person.name} added a document${portalCase.isSample ? " (sample case)" : ""}`,
      `${portalCase.person.name} (${user.email}) added "${name}" to My Documents in People First.\n\nMatter: ${portalCase.matterName}`,
      user.email
    );
  } catch (err) {
    firmNotified = false;
    console.error("[people-first] firm not notified of upload:", err);
  }

  return NextResponse.json({ document: { id, name, kind, size: file.size, addedOn: new Date().toISOString() }, firmNotified });
}
