/**
 * People First — sign-in (Auth.js v5)
 *
 * One way in: a one-time link emailed to a person the firm has invited.
 * There are no passwords and no self sign-up. The link proves the person
 * controls the email address; the invited list proves the firm wants them in.
 *
 * Flow:
 *   1. /people-first-login           person types their email
 *   2. /api/portal/request-link      if invited, we email a link (15 minutes, one use)
 *   3. /people-first-login/verify    person presses Continue; the token is checked here
 *
 * Sessions are signed cookies (JWT). No database is involved.
 *
 * Required settings:
 *   AUTH_SECRET            signs sessions and sign-in links
 *   PORTAL_INVITE_EMAILS   comma-separated invited addresses (until Filevine is connected)
 */

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { isInvited, userIdFor } from "@/lib/portal/invite";
import { verifyLinkToken } from "@/lib/portal/link-token";
import { consumeLinkId } from "@/lib/portal/store";
import { getCaseFor } from "@/lib/portal/source";

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  session: { strategy: "jwt", maxAge: 12 * 60 * 60 },
  providers: [
    Credentials({
      name: "One-time link",
      credentials: { token: { label: "Token", type: "text" } },
      async authorize(credentials) {
        const token = typeof credentials?.token === "string" ? credentials.token : "";
        if (!token) return null;

        const link = await verifyLinkToken(token);
        if (!link) return null;
        if (!isInvited(link.email)) return null;
        if (!(await consumeLinkId(link.linkId))) return null;

        const portalCase = await getCaseFor(link.email);
        return {
          id: await userIdFor(link.email),
          email: link.email,
          name: portalCase.person.preferredName,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.userId = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token.userId && session.user) session.user.id = token.userId as string;
      return session;
    },
  },
  pages: {
    signIn: "/people-first-login",
    error: "/people-first-login",
  },
});
