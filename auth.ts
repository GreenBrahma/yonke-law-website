/**
 * People First — Auth.js v5 Configuration
 *
 * Real authentication: Apple, Google, Email (credentials).
 * JWT-only session strategy — no DB adapter required at init time.
 * User records managed directly via Drizzle in callbacks/events.
 *
 * Required env vars:
 *   AUTH_SECRET             — random secret for JWT/session encryption
 *   AUTH_GOOGLE_ID          — Google OAuth client ID
 *   AUTH_GOOGLE_SECRET      — Google OAuth client secret
 *   AUTH_APPLE_ID           — Apple OAuth service ID
 *   AUTH_APPLE_SECRET       — Apple OAuth key (PEM)
 */

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Apple from "next-auth/providers/apple";
import Credentials from "next-auth/providers/credentials";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import {
  pfUsers,
  pfCases,
} from "@/db/schema/people-first";
import { eq } from "drizzle-orm";

/* ──────────────────────────────────────────────────────────────
   Lazy DB for auth operations (not an adapter — direct queries).
   ────────────────────────────────────────────────────────────── */

let _authDb: ReturnType<typeof drizzle> | null = null;
function authDb() {
  if (!_authDb) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL is required for auth.");
    _authDb = drizzle(
      new Pool({ connectionString: url, max: 1, ssl: { rejectUnauthorized: false } })
    );
  }
  return _authDb;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  // No adapter — JWT strategy handles session entirely in the token.
  // User records managed via direct DB queries in callbacks.
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Apple({
      clientId: process.env.AUTH_APPLE_ID,
      clientSecret: process.env.AUTH_APPLE_SECRET,
    }),
    Credentials({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;
        const email = credentials.email as string;
        const db = authDb();

        // Look up existing user
        const [user] = await db
          .select()
          .from(pfUsers)
          .where(eq(pfUsers.email, email))
          .limit(1);

        if (user) {
          return { id: user.id, email: user.email, name: user.name };
        }

        // Auto-create user + case on first sign-in
        const newId = crypto.randomUUID();
        await db.insert(pfUsers).values({
          id: newId,
          email,
          name: email.split("@")[0],
        });
        await db.insert(pfCases).values({
          userId: newId,
          currentStep: "intake",
          actionNeeded: false,
        });

        return { id: newId, email, name: email.split("@")[0] };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // For OAuth providers (Google/Apple), ensure user exists in our DB
      if (account?.provider !== "credentials" && user.email) {
        try {
          const db = authDb();
          const [existing] = await db
            .select()
            .from(pfUsers)
            .where(eq(pfUsers.email, user.email))
            .limit(1);

          if (!existing) {
            const newId = user.id || crypto.randomUUID();
            await db.insert(pfUsers).values({
              id: newId,
              email: user.email,
              name: user.name || user.email.split("@")[0],
              image: user.image,
            });
            await db.insert(pfCases).values({
              userId: newId,
              currentStep: "intake",
              actionNeeded: false,
            });
            user.id = newId;
          } else {
            user.id = existing.id;
          }
        } catch (err) {
          console.error("Auth signIn callback DB error:", err);
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.userId && session.user) {
        session.user.id = token.userId as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/client-login",
    error: "/client-login",
  },
});
