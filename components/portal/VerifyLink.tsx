"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * Step 2 of signing in. The person presses Continue, so that an email
 * program previewing the link cannot use it up before they do.
 */
export function VerifyLink({ token }: { token: string }) {
  const router = useRouter();
  const [state, setState] = useState<"ready" | "working" | "failed">(token ? "ready" : "failed");

  async function go() {
    setState("working");
    const res = await signIn("credentials", { token, redirect: false });
    if (res?.error || !res?.ok) {
      setState("failed");
      return;
    }
    router.replace("/people-first-login/home");
    router.refresh();
  }

  if (state === "failed") {
    return (
      <div role="alert" className="text-center">
        <h2 className="font-display text-xl text-white mb-3">This link can no longer be used</h2>
        <p className="text-white/80 text-sm leading-relaxed">
          Sign-in links work once and last 15 minutes. Ask for a fresh one and you will be right in.
        </p>
        <Link
          href="/people-first-login"
          className="mt-5 inline-block rounded-xl bg-muted-gold text-[#1C1C1E] font-semibold px-6 py-3 text-sm"
        >
          Get a new link
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h2 className="font-display text-xl text-white mb-3">You are almost in</h2>
      <p className="text-white/80 text-sm leading-relaxed mb-5">Press continue to open People First.</p>
      <button
        type="button"
        onClick={go}
        disabled={state === "working"}
        className="w-full rounded-xl bg-muted-gold text-[#1C1C1E] font-semibold px-6 py-3.5 text-base hover:brightness-110 transition disabled:opacity-50"
      >
        {state === "working" ? "Opening…" : "Continue to People First"}
      </button>
    </div>
  );
}
