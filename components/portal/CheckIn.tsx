"use client";

import { useState } from "react";
import { FEELINGS, type Feeling } from "@/lib/portal/feelings";

/** "How are you feeling about your case today?" Pick any that fit. */
export function CheckIn() {
  const [picked, setPicked] = useState<Feeling[]>([]);
  const [note, setNote] = useState("");
  const [wantsCall, setWantsCall] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [told, setTold] = useState(false);
  const [error, setError] = useState("");

  const toggle = (f: Feeling) =>
    setPicked((p) => (p.includes(f) ? p.filter((x) => x !== f) : [...p, f]));

  async function send() {
    setError("");
    setState("sending");
    try {
      const res = await fetch("/api/portal/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feelings: picked, note, wantsCall }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "We could not save that. Please try again.");
      setTold(Boolean(data.firmNotified));
      setState("done");
    } catch (e) {
      setError(e instanceof Error ? e.message : "We could not save that. Please try again.");
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <div role="status">
        <h2 className="font-display text-lg text-white">Thank you for telling us</h2>
        <p className="mt-2 text-white/85 text-sm">
          {told
            ? "We have let the firm know. Someone will reach out to you."
            : wantsCall
              ? "Your check-in is saved, but we could not reach the firm by email just now. Please call us at 816-221-6400."
              : "Your check-in is saved. You can check in again any time. Feelings can change."}
        </p>
        <button
          type="button"
          onClick={() => {
            setPicked([]);
            setNote("");
            setWantsCall(false);
            setState("idle");
          }}
          className="mt-4 text-sm text-muted-gold underline underline-offset-4"
        >
          Check in again
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-display text-lg text-white">How are you feeling about your case today?</h2>
      <p className="mt-1 text-sm text-white/75">Choose any that fit. Feelings can change.</p>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="How you are feeling">
        {FEELINGS.map((f) => {
          const on = picked.includes(f);
          return (
            <button
              key={f}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition ${
                on
                  ? "bg-muted-gold border-muted-gold text-[#1C1C1E]"
                  : "bg-transparent border-white/30 text-white hover:border-muted-gold"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {picked.length > 0 && (
        <div className="mt-5 space-y-4">
          <div>
            <label htmlFor="pf-checkin-note" className="block text-sm text-white mb-1.5">
              Anything you want us to know? (optional)
            </label>
            <textarea
              id="pf-checkin-note"
              rows={2}
              maxLength={1000}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full rounded-xl bg-white text-[#1C1C1E] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-muted-gold"
            />
          </div>
          <label className="flex items-center gap-3 text-sm text-white">
            <input
              type="checkbox"
              checked={wantsCall}
              onChange={(e) => setWantsCall(e.target.checked)}
              className="h-5 w-5 accent-[#D4A843]"
            />
            I would like someone to call me
          </label>
          {error && (
            <p role="alert" className="text-sm text-[#FFB4B4]">
              {error}
            </p>
          )}
          <button
            type="button"
            onClick={send}
            disabled={state === "sending"}
            className="rounded-xl bg-muted-gold text-[#1C1C1E] font-semibold px-6 py-3 text-sm hover:brightness-110 transition disabled:opacity-50"
          >
            {state === "sending" ? "Saving…" : "Send my check-in"}
          </button>
        </div>
      )}
    </div>
  );
}
