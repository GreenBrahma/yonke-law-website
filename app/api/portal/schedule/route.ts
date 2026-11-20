/**
 * POST /api/portal/schedule   { type: "call" | "meeting", days: string[], timeOfDay: string, note?: string }
 *
 * A request for a call or a meeting. The firm confirms the time; nothing is
 * booked automatically. The request only counts as sent when the email to the
 * firm goes through, so a mail failure is reported to the person.
 */
import { NextRequest, NextResponse } from "next/server";
import { portalUser } from "@/lib/portal/session";
import { personPrefix, portalStore } from "@/lib/portal/store";
import { notifyFirm } from "@/lib/portal/mail";
import { getCaseFor } from "@/lib/portal/source";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const TIMES = ["Morning", "Afternoon", "Either"];

export async function POST(req: NextRequest) {
  const user = await portalUser();
  if (!user) return NextResponse.json({ error: "Please sign in." }, { status: 401 });

  const body = await req.json().catch(() => null);
  const type = body?.type === "meeting" ? "meeting" : body?.type === "call" ? "call" : null;
  const days = Array.isArray(body?.days) ? DAYS.filter((d) => (body.days as unknown[]).includes(d)) : [];
  const timeOfDay = TIMES.includes(body?.timeOfDay) ? (body.timeOfDay as string) : null;
  const note = typeof body?.note === "string" ? body.note.trim().slice(0, 1000) : "";
  if (!type || days.length === 0 || !timeOfDay) {
    return NextResponse.json({ error: "Choose call or meeting, at least one day, and a time of day." }, { status: 400 });
  }

  const portalCase = await getCaseFor(user.email);
  const at = new Date().toISOString();
  try {
    await notifyFirm(
      `${portalCase.person.name} asked for a ${type}${portalCase.isSample ? " (sample case)" : ""}`,
      [
        `${portalCase.person.name} (${user.email}) asked to schedule a ${type} through People First.`,
        "",
        `Good days: ${days.join(", ")}`,
        `Time of day: ${timeOfDay}`,
        note ? `What it is about: ${note}` : "",
        "",
        `Matter: ${portalCase.matterName}`,
        "",
        "Reply to this email to confirm a time with them.",
      ]
        .filter((l, i, a) => l !== "" || a[i - 1] !== "")
        .join("\n"),
      user.email
    );
  } catch (err) {
    console.error("[people-first] scheduling request not delivered:", err);
    return NextResponse.json(
      { error: "We could not send your request just now. Please call us at 816-221-6400." },
      { status: 502 }
    );
  }

  const store = await portalStore();
  await store.put(
    `${personPrefix(user.id)}schedule-requests/${at}.json`,
    JSON.stringify({ at, type, days, timeOfDay, note }),
    "application/json"
  );
  return NextResponse.json({ ok: true });
}
