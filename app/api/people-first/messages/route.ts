import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/db/client";
import { pfMessages, pfCases } from "@/db/schema/people-first";
import { eq } from "drizzle-orm";
import { getGraphToken } from "@/lib/graph/client";

const MIKE_EMAIL = process.env.MS365_ATTORNEY_EMAIL || "mike@yonke.law";
const SENDER_EMAIL = process.env.MS365_SENDER_EMAIL || "noreply@yonke.law";

// GET — fetch messages for the user's case
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [userCase] = await db
    .select()
    .from(pfCases)
    .where(eq(pfCases.userId, session.user.id))
    .limit(1);

  if (!userCase) {
    return NextResponse.json({ messages: [] });
  }

  const messages = await db
    .select()
    .from(pfMessages)
    .where(eq(pfMessages.caseId, userCase.id))
    .orderBy(pfMessages.createdAt);

  return NextResponse.json({ messages });
}

// POST — send a new message (person → Mike via Graph email)
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { body } = await req.json();
  if (!body || typeof body !== "string") {
    return NextResponse.json({ error: "Message body required" }, { status: 400 });
  }

  const [userCase] = await db
    .select()
    .from(pfCases)
    .where(eq(pfCases.userId, session.user.id))
    .limit(1);

  if (!userCase) {
    return NextResponse.json({ error: "No case found" }, { status: 404 });
  }

  // Persist to DB
  const [message] = await db
    .insert(pfMessages)
    .values({
      caseId: userCase.id,
      from: "person",
      body,
    })
    .returning();

  // Send real email to Mike via MS365 Graph
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
            subject: `People First — Message from ${userName}`,
            body: {
              contentType: "Text",
              content: `${userName} sent a message via People First:\n\n${body}`,
            },
            toRecipients: [
              { emailAddress: { address: MIKE_EMAIL } },
            ],
            replyTo: [
              { emailAddress: { address: session.user.email || MIKE_EMAIL } },
            ],
          },
          saveToSentItems: true,
        }),
      }
    );
  } catch (err) {
    console.error("Graph email failed:", err);
    // Message is still persisted — email delivery failure is non-fatal
  }

  return NextResponse.json({ message });
}
