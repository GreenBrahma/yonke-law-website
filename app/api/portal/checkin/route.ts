/**
 * POST /api/portal/checkin   { feelings: string[], note?: string, wantsCall?: boolean }
 *
 * "How are you feeling about your case today?" Every check-in is saved to the
 * person's private folder. The firm is emailed when the person picks
 * Concerned, Frustrated or Angry, or asks for a call.
 */
import { NextRequest, NextResponse } from "next/server";
import { portalUser } from "@/lib/portal/session";
import { personPrefix, portalStore } from "@/lib/portal/store";
import { FEELINGS, TELL_THE_FIRM, type Feeling } from "@/lib/portal/feelings";
import { notifyFirm } from "@/lib/portal/mail";
import { getCaseFor } from "@/lib/portal/source";

export async function POST(req: NextRequest) {
  const user = await portalUser();
  if (!user) return NextResponse.json({ error: "Please sign in." }, { status: 401 });

  const body = await req.json().catch(() => null);
  const feelings: Feeling[] = Array.isArray(body?.feelings)
    ? FEELINGS.filter((f) => (body.feelings as unknown[]).includes(f))
    : [];
  if (feelings.length === 0) {
    return NextResponse.json({ error: "Choose at least one." }, { status: 400 });
  }
  const note = typeof body?.note === "string" ? body.note.trim().slice(0, 1000) : "";
  const wantsCall = body?.wantsCall === true;
  const at = new Date().toISOString();

  const store = await portalStore();
  await store.put(
    `${personPrefix(user.id)}checkins/${at}.json`,
    JSON.stringify({ at, feelings, note, wantsCall }),
    "application/json"
  );

  const tellFirm = wantsCall || feelings.some((f) => TELL_THE_FIRM.includes(f));
  let firmNotified = false;
  if (tellFirm) {
    try {
      const portalCase = await getCaseFor(user.email);
      await notifyFirm(
        `${portalCase.person.name} checked in${wantsCall ? " and asked for a call" : ""}${portalCase.isSample ? " (sample case)" : ""}`,
        [
          `${portalCase.person.name} (${user.email}) checked in on People First.`,
          "",
          `Feeling: ${feelings.join(", ")}`,
          note ? `In their words: ${note}` : "",
          wantsCall ? "They asked for a call." : "",
          "",
          `Matter: ${portalCase.matterName}`,
        ]
          .filter((l, i, a) => l !== "" || a[i - 1] !== "")
          .join("\n"),
        user.email,
        true
      );
      firmNotified = true;
    } catch (err) {
      console.error("[people-first] firm not notified of check-in:", err);
    }
  }
  return NextResponse.json({ ok: true, tellFirm, firmNotified });
}
