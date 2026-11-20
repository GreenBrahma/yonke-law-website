/**
 * People First portal — "who is signed in" for pages and routes.
 */
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { isInvited } from "./invite";

export type PortalUser = { id: string; email: string; name: string };

/** The signed-in, still-invited person, or null. */
export async function portalUser(): Promise<PortalUser | null> {
  const session = await auth();
  const u = session?.user;
  if (!u?.id || !u.email) return null;
  // An invitation that has been withdrawn ends access at once, even mid-session.
  if (!isInvited(u.email)) return null;
  return { id: u.id, email: u.email, name: u.name || "" };
}

/** For pages: send anyone not signed in to the sign-in screen. */
export async function requirePortalUser(): Promise<PortalUser> {
  const user = await portalUser();
  if (!user) redirect("/people-first-login");
  return user;
}
