"use client";

import { useAuth } from "@/components/people-first/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

/* ──────────────────────────────────────────────────────────────
   Client Login — Real credential wall.
   Full-bleed cinematic photography, YONKE LAW · PEOPLE FIRST
   lockup. Real OAuth via Auth.js.
   ────────────────────────────────────────────────────────────── */

export default function ClientLoginPage() {
  const { isAuthenticated, isLoading, signIn } = useAuth();
  const router = useRouter();
  const [signingIn, setSigningIn] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/client-login/dashboard");
    }
  }, [isAuthenticated, router]);

  function handleSignIn(method: "apple" | "google" | "email") {
    setSigningIn(true);
    signIn(method);
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--obsidian-graphite)] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[var(--muted-gold)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full-bleed background */}
      <Image
        src="/images/yl-family-review.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-20 md:pt-28 px-4">
        {/* Lockup */}
        <div className="text-center mb-10">
          <h1 className="font-[family-name:var(--font-libre-baskerville)] text-3xl md:text-4xl tracking-wide text-white mb-1">
            YONKE LAW
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--muted-gold)]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted-gold)]">
              People First
            </span>
            <span className="w-8 h-px bg-[var(--muted-gold)]" />
          </div>
          <p className="text-white/50 text-sm max-w-xs mx-auto">
            Sign in to see where your case stands, message Mike directly, and
            stay connected at every step.
          </p>
          <p className="text-white/30 text-xs max-w-xs mx-auto mt-3">
            If you have not been notified by Yonke Law that your case has been
            set up, you cannot access this area.
          </p>
        </div>

        {/* Login card — glassmorphism */}
        <div className="w-full max-w-sm backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="space-y-3">
            <button
              onClick={() => handleSignIn("email")}
              disabled={signingIn}
              className="w-full flex items-center justify-center gap-3 bg-white text-[var(--obsidian-graphite)] font-semibold px-6 py-3.5 rounded-xl text-sm hover:bg-white/90 transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 4l-10 8L2 4"/>
              </svg>
              Sign in with Email
            </button>

            <button
              onClick={() => handleSignIn("google")}
              disabled={signingIn}
              className="w-full flex items-center justify-center gap-3 bg-white text-[var(--obsidian-graphite)] font-semibold px-6 py-3.5 rounded-xl text-sm hover:bg-white/90 transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            <button
              onClick={() => handleSignIn("apple")}
              disabled={signingIn}
              className="w-full flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-sm hover:bg-white/15 transition-colors backdrop-blur-sm disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Continue with Apple
            </button>
          </div>

          {signingIn && (
            <div className="mt-4 flex items-center justify-center gap-2 text-white/40 text-xs">
              <div className="w-3 h-3 border border-[var(--muted-gold)] border-t-transparent rounded-full animate-spin" />
              Connecting…
            </div>
          )}
        </div>

        <p className="text-white/20 text-xs mt-6 text-center max-w-xs">
          Private and secure. Everything you see is between you and Mike.
        </p>
      </div>
    </div>
  );
}
