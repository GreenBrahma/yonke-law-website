"use client";

import { useState } from "react";
import { BEST_TIME, CONTACT_BY, type Profile } from "@/lib/portal/profile";

const field = "w-full rounded-xl bg-white text-[#1C1C1E] px-3 py-2.5 text-base outline-none focus:ring-2 focus:ring-muted-gold";
const chip = (on: boolean) =>
  `rounded-full px-4 py-2 text-sm font-medium border transition ${
    on ? "bg-muted-gold border-muted-gold text-[#1C1C1E]" : "bg-transparent border-white/30 text-white hover:border-muted-gold"
  }`;

export function AboutYouForm({ initial }: { initial: Profile }) {
  const [p, setP] = useState<Profile>(initial);
  const [state, setState] = useState<"idle" | "saving">("idle");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setMessage("");
    setState("saving");
    try {
      const res = await fetch("/api/portal/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(p),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "We could not save that. Please try again.");
      setMessage(
        data.firmNotified
          ? "Saved. We have passed this along to the firm."
          : "Saved. We could not email the firm just now, so mention any changes when you next speak with us."
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "We could not save that. Please try again.");
    } finally {
      setState("idle");
    }
  }

  return (
    <form onSubmit={submit} className="rounded-2xl bg-[#2E2F33] border border-white/10 p-6 space-y-6">
      <div>
        <label htmlFor="pf-name" className="block text-white font-semibold mb-2">
          What should we call you?
        </label>
        <input id="pf-name" maxLength={80} value={p.preferredName} onChange={(e) => setP({ ...p, preferredName: e.target.value })} className={field} />
      </div>
      <div>
        <label htmlFor="pf-phone" className="block text-white font-semibold mb-2">
          Best phone number
        </label>
        <input id="pf-phone" type="tel" autoComplete="tel" maxLength={30} value={p.phone} onChange={(e) => setP({ ...p, phone: e.target.value })} className={field} />
      </div>
      <fieldset>
        <legend className="text-white font-semibold mb-3">How do you prefer we reach you?</legend>
        <div className="flex flex-wrap gap-2">
          {CONTACT_BY.map((c) => (
            <button key={c} type="button" aria-pressed={p.contactBy === c} onClick={() => setP({ ...p, contactBy: c })} className={chip(p.contactBy === c)}>
              {c}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-white font-semibold mb-3">When is the best time?</legend>
        <div className="flex flex-wrap gap-2">
          {BEST_TIME.map((t) => (
            <button key={t} type="button" aria-pressed={p.bestTime === t} onClick={() => setP({ ...p, bestTime: t })} className={chip(p.bestTime === t)}>
              {t}
            </button>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="pf-notes" className="block text-white font-semibold mb-2">
          Anything we should know about you?
        </label>
        <p className="text-sm text-white/75 mb-2">
          For example: a work schedule, someone who helps you with appointments, or how you are getting around.
        </p>
        <textarea id="pf-notes" rows={4} maxLength={1500} value={p.notes} onChange={(e) => setP({ ...p, notes: e.target.value })} className={field} />
      </div>
      <div aria-live="polite">
        {message && <p className="text-sm text-[#7FE0B8]">{message}</p>}
        {error && (
          <p role="alert" className="text-sm text-[#FFB4B4]">
            {error}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={state === "saving"}
        className="rounded-xl bg-muted-gold text-[#1C1C1E] font-semibold px-6 py-3 text-base hover:brightness-110 transition disabled:opacity-50"
      >
        {state === "saving" ? "Saving…" : "Save"}
      </button>
    </form>
  );
}
