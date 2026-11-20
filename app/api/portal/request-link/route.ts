/**
 * POST /api/portal/request-link   { email }
 *
 * Emails a one-time sign-in link when the address is on the firm's invited
 * list. The answer is the same whether or not the address is invited, so the
 * endpoint cannot be used to find out who the firm represents. It can only
 * ever send mail to invited addresses, and at most once a minute per address.
 */
import { NextRequest, NextResponse } from "next/server";
import { isInvited, normalizeEmail, userIdFor } from "@/lib/portal/invite";
import { createLinkToken } from "@/lib/portal/link-token";
import { sendPortalMail } from "@/lib/portal/mail";
import { portalStore } from "@/lib/portal/store";

const COOLDOWN_MS = 60 * 1000;
const SAME_ANSWER = { ok: true };

export async function POST(req: NextRequest) {
  let email = "";
  try {
    const body = await req.json();
    if (typeof body?.email === "string") email = normalizeEmail(body.email);
  } catch {
    /* fall through to the same answer */
  }
  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (!isInvited(email)) return NextResponse.json(SAME_ANSWER);

  try {
    const store = await portalStore();
    const stamp = `portal/_link-requests/${await userIdFor(email)}`;
    const last = await store.get(stamp);
    if (last && Date.now() - new Date(last.uploaded).getTime() < COOLDOWN_MS) {
      return NextResponse.json(SAME_ANSWER);
    }
    await store.put(stamp, new Date().toISOString(), "text/plain");

    const token = await createLinkToken(email);
    const origin = process.env.AUTH_URL || req.nextUrl.origin;
    const link = `${origin}/people-first-login/verify?token=${encodeURIComponent(token)}`;

    await sendPortalMail({
      to: email,
      subject: "Your Yonke Law People First sign-in link",
      text: [
        "Here is your sign-in link for People First at Yonke Law:",
        "",
        link,
        "",
        "The link works once and expires in 15 minutes.",
        "If you did not ask for it, you can ignore this email. Nobody can sign in without it.",
        "",
        "Yonke Law L.L.C.",
        "816-221-6400",
      ].join("\n"),
    });
  } catch (err) {
    console.error("[people-first] sign-in link could not be sent:", err);
    return NextResponse.json(
      { error: "We could not send the email just now. Please try again, or call us at 816-221-6400." },
      { status: 502 }
    );
  }
  return NextResponse.json(SAME_ANSWER);
}
