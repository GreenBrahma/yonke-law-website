import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/db/client";
import { pfPulseResponses, pfCases } from "@/db/schema/people-first";
import { eq } from "drizzle-orm";
import { getGraphToken } from "@/lib/graph/client";

const MIKE_EMAIL = process.env.MS365_ATTORNEY_EMAIL || "mike@yonke.law";
const SENDER_EMAIL = process.env.MS365_SENDER_EMAIL || "noreply@yonke.law";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { state, followUpAction } = await req.json();
  if (!state) {
    return NextResponse.json({ error: "State required" }, { status: 400 });
  }

  const [userCase] = await db
    .select()
    .from(pfCases)
    .where(eq(pfCases.userId, session.user.id))
    .limit(1);

  if (!userCase) {
    return NextResponse.json({ error: "No case found" }, { status: 404 });
  }

  // Should we notify Mike?
  const shouldNotify =
    (state === "Sad" || state === "Angry") &&
    (followUpAction === "call_requested" || followUpAction === "help_requested");

  // Persist
  const [response] = await db
    .insert(pfPulseResponses)
    .values({
      caseId: userCase.id,
      state,
      followUpAction: followUpAction || null,
      notifiedMike: shouldNotify,
    })
    .returning();

  // Notify Mike via real email if needed
  if (shouldNotify) {
    try {
      const token = await getGraphToken();
      const userName = session.user.name || session.user.email || "A client";
      const action =
        followUpAction === "call_requested"
          ? "would like to set up a call"
          : "is asking for help";

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
              subject: `People First — ${userName} is feeling ${state.toLowerCase()}`,
              body: {
                contentType: "Text",
                content: `${userName} checked in via People First and is feeling ${state.toLowerCase()}.\n\nThey ${action}.\n\nPlease reach out.`,
              },
              toRecipients: [
                { emailAddress: { address: MIKE_EMAIL } },
              ],
              importance: "high",
            },
            saveToSentItems: true,
          }),
        }
      );
    } catch (err) {
      console.error("Pulse notification email failed:", err);
    }
  }

  return NextResponse.json({ response });
}
