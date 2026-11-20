/**
 * People First portal — who may sign in.
 *
 * Only people the firm has invited can request a sign-in link. Until Filevine
 * is connected, the invited list is the PORTAL_INVITE_EMAILS setting (a
 * comma-separated list of email addresses, set on the Worker). When Filevine
 * is connected, this is the one function to change: an email is invited when
 * it matches a contact on an open Filevine project.
 */

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function invitedEmails(): string[] {
  return (process.env.PORTAL_INVITE_EMAILS || "")
    .split(",")
    .map(normalizeEmail)
    .filter(Boolean);
}

export function isInvited(email: string): boolean {
  const e = normalizeEmail(email);
  return e.length > 3 && invitedEmails().includes(e);
}

/** Stable, non-reversible id for a person, used as their private storage folder. */
export async function userIdFor(email: string): Promise<string> {
  const data = new TextEncoder().encode(`people-first:${normalizeEmail(email)}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  const hex = [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, "0")).join("");
  return `pf_${hex.slice(0, 32)}`;
}
