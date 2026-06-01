"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { DEMO_PERSON } from "./demo-data";

/* ──────────────────────────────────────────────────────────────
   Simulated auth context for People First v2.0 (DEMO only).
   - Sets in-session state only; resets on page reload.
   - All three sign-in methods resolve to the same demo person.
   - FR-AUTH-04: No real OAuth, no account store.
   ────────────────────────────────────────────────────────────── */

type AuthMethod = "apple" | "google" | "email";

interface AuthState {
  isAuthenticated: boolean;
  method: AuthMethod | null;
  user: typeof DEMO_PERSON | null;
}

interface AuthContextValue extends AuthState {
  signIn: (method: AuthMethod) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    method: null,
    user: null,
  });

  const signIn = useCallback((method: AuthMethod) => {
    setAuth({
      isAuthenticated: true,
      method,
      user: DEMO_PERSON,
    });
  }, []);

  const signOut = useCallback(() => {
    setAuth({
      isAuthenticated: false,
      method: null,
      user: null,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...auth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
