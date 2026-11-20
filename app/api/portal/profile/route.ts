/**
 * POST /api/portal/profile — save "Tell Us About You" and let the firm know.
 */
import { NextRequest, NextResponse } from "next/server";
import { portalUser } from "@/lib/portal/session";
import { BEST_TIME, CONTACT_BY, writeProfile, type Profile } from "@/lib/portal/profile";
import { notifyFirm } from "@/lib/portal/mail";
import { getCaseFor } from "@/lib/portal/source";

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: NextRequest) {
  const user = await portalUser();
  if (!user) return NextResponse.json({ error: "Please sign in." }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const profile: Profile = {
    preferredName: clean(body?.preferredName, 80),
    phone: clean(body?.phone, 30),
    contactBy: (CONTACT_BY as readonly string[]).includes(body?.contactBy) ? body.contactBy : "",
    bestTime: (BEST_TIME as readonly string[]).includes(body?.bestTime) ? body.bestTime : "",
    notes: clean(body?.notes, 1500),
  };
  const saved = await writeProfile(user.id, profile);

  let firmNotified = true;
  try {
    const portalCase = await getCaseFor(user.email);
    await notifyFirm(
      `${portalCase.person.name} updated their details${portalCase.isSample ? " (sample case)" : ""}`,
      [
        `${portalCase.person.name} (${user.email}) updated "Tell Us About You" in People First.`,
        "",
        `Likes to be called: ${saved.preferredName || "not given"}`,
        `Phone: ${saved.phone || "not given"}`,
        `Best way to reach them: ${saved.contactBy || "not given"}`,
        `Best time: ${saved.bestTime || "not given"}`,
        `Anything we should know: ${saved.notes || "nothing added"}`,
      ].join("\n"),
      user.email
    );
  } catch (err) {
    firmNotified = false;
    console.error("[people-first] firm not notified of profile update:", err);
  }
  return NextResponse.json({ profile: saved, firmNotified });
}
