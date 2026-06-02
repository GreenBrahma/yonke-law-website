import { redirect } from "next/navigation";

/**
 * Permanent redirect: /client-login → /people-first-login
 * Preserves old bookmarks and external links.
 */
export default function ClientLoginRedirect() {
  redirect("/people-first-login");
}
