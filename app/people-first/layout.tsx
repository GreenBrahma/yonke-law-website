"use client";

import { type ReactNode } from "react";
import { AuthProvider } from "@/components/people-first/auth-context";

/* ──────────────────────────────────────────────────────────────
   Gated layout for /people-first/*.
   - Wraps all children in AuthProvider.
   - Auth gate + Pulse mount handled by the PeopleFirstShell
     (rendered inside the provider so it can read auth state).
   ────────────────────────────────────────────────────────────── */

export default function PeopleFirstLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
