"use client";

/**
 * People First — Auth Context (Real Mode)
 *
 * Wraps next-auth/react SessionProvider. Provides useAuth() hook
 * for backward-compatible access to auth state across all
 * People First pages.
 *
 * This is REAL auth — sessions persist across reloads,
 * backed by JWT + PostgreSQL.
 */

import { SessionProvider, useSession, signIn, signOut } from "next-auth/react";
import { type ReactNode } from "react";

export function AuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export function useAuth() {
  const { data: session, status } = useSession();

  return {
    isAuthenticated: status === "authenticated",
    isLoading: status === "loading",
    user: session?.user
      ? {
          id: session.user.id,
          name: session.user.name || "",
          email: session.user.email || "",
          image: session.user.image || "",
        }
      : null,
    signIn: (method: "apple" | "google" | "email") => {
      switch (method) {
        case "apple":
          return signIn("apple", { callbackUrl: "/client-login/dashboard" });
        case "google":
          return signIn("google", { callbackUrl: "/client-login/dashboard" });
        case "email":
          return signIn("credentials", {
            callbackUrl: "/client-login/dashboard",
          });
      }
    },
    signOut: () => signOut({ callbackUrl: "/client-login" }),
  };
}
