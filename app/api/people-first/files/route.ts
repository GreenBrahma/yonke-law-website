import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/db/client";
import { pfFiles, pfCases } from "@/db/schema/people-first";
import { eq } from "drizzle-orm";
import { getGraphToken } from "@/lib/graph/client";

const MIKE_EMAIL = process.env.MS365_ATTORNEY_EMAIL || "mike@yonke.law";
const SENDER_EMAIL = process.env.MS365_SENDER_EMAIL || "noreply@yonke.law";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "File required" }, { status: 400 });
  }

  const [userCase] = await db
    .select()
    .from(pfCases)
    .where(eq(pfCases.userId, session.user.id))
    .limit(1);

  if (!userCase) {
    return NextResponse.json({ error: "No case found" }, { status: 404 });
  }

  // Read file into buffer for email attachment
  const arrayBuffer = await file.arrayBuffer();
  const base64Content = Buffer.from(arrayBuffer).toString("base64");

  // Persist metadata to DB
  const [fileRecord] = await db
    .insert(pfFiles)
    .values({
      caseId: userCase.id,
      fileName: file.name,
      fileSize: file.size,
      mimeType: file.type || "application/octet-stream",
      uploadedBy: "person",
    })
    .returning();

  // Send file to Mike as email attachment via Graph
  try {
    const token = await getGraphToken();
    const userName = session.user.name || session.user.email || "A client";

    await fetch(
      `https://graph.microsoft.com/v1.0/users/${SENDER_EMAIL}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject: `People First — File from ${userName}: ${file.name}`,
            body: {
              contentType: "Text",
              content: `${userName} uploaded a file via People First:\n\nFile: ${file.name}\nSize: ${(file.size / 1024).toFixed(1)} KB\nType: ${file.type}`,
            },
            toRecipients: [
              { emailAddress: { address: MIKE_EMAIL } },
            ],
            attachments: [
              {
                "@odata.type": "#microsoft.graph.fileAttachment",
                name: file.name,
                contentType: file.type || "application/octet-stream",
                contentBytes: base64Content,
              },
            ],
          },
          saveToSentItems: true,
        }),
      }
    );
  } catch (err) {
    console.error("File email failed:", err);
  }

  return NextResponse.json({ file: fileRecord });
}
