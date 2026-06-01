"use client";

import { type ReactNode } from "react";
import { AuthProvider } from "@/components/people-first/auth-context";

/* ──────────────────────────────────────────────────────────────
   Gated layout for /client-login/*.
   Wraps all children in AuthProvider.
   Auth gate + Pulse handled by individual pages.
   ────────────────────────────────────────────────────────────── */

export default function ClientLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
