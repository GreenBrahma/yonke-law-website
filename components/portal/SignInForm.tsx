"use client";

import { useState } from "react";

/** Step 1 of signing in: ask for the email, then tell the person to check it. */
export function SignInForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setState("sending");
    try {
      const res = await fetch("/api/portal/request-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please try again.");
        setState("idle");
        return;
      }
      setState("sent");
    } catch {
      setError("We could not reach the server. Check your connection and try again.");
      setState("idle");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="text-center">
        <h2 className="font-display text-xl text-white mb-3">Check your email</h2>
        <p className="text-white/80 text-sm leading-relaxed">
          If <span className="text-white font-semibold">{email}</span> is set up for People First, a sign-in
          link is on its way. It works once and lasts 15 minutes.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-5 text-sm text-muted-gold underline underline-offset-4"
        >
          Use a different email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <label htmlFor="pf-email" className="block text-sm text-white mb-2">
        Your email address
      </label>
      <input
        id="pf-email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-xl bg-white text-[#1C1C1E] px-4 py-3.5 text-base outline-none focus:ring-2 focus:ring-muted-gold"
        placeholder="you@example.com"
      />
      {error && (
        <p role="alert" className="mt-3 text-sm text-[#FFB4B4]">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={state === "sending" || !email}
        className="mt-4 w-full rounded-xl bg-muted-gold text-[#1C1C1E] font-semibold px-6 py-3.5 text-base hover:brightness-110 transition disabled:opacity-50"
      >
        {state === "sending" ? "Sending…" : "Email me a sign-in link"}
      </button>
      <p className="mt-4 text-xs text-white/60 leading-relaxed">
        No password needed. We email you a private link each time you sign in.
      </p>
    </form>
  );
}
