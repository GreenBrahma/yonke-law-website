/**
 * GET — open one document the firm has shared with the signed-in person.
 */
import { NextResponse } from "next/server";
import { portalUser } from "@/lib/portal/session";
import { getLegalDocumentFile } from "@/lib/portal/source";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await portalUser();
  if (!user) return NextResponse.json({ error: "Please sign in." }, { status: 401 });
  const { id } = await params;
  const file = await getLegalDocumentFile(user.email, id);
  if (!file) return NextResponse.json({ error: "Not found." }, { status: 404 });
  return new Response(file.bytes as BodyInit, {
    headers: {
      "Content-Type": file.contentType,
      "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(file.fileName)}`,
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
