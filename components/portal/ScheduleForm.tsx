"use client";

import { useState } from "react";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const TIMES = ["Morning", "Afternoon", "Either"];

const chip = (on: boolean) =>
  `rounded-full px-4 py-2 text-sm font-medium border transition ${
    on ? "bg-muted-gold border-muted-gold text-[#1C1C1E]" : "bg-transparent border-white/30 text-white hover:border-muted-gold"
  }`;

export function ScheduleForm({ initialType }: { initialType: "call" | "meeting" }) {
  const [type, setType] = useState<"call" | "meeting">(initialType);
  const [days, setDays] = useState<string[]>([]);
  const [timeOfDay, setTimeOfDay] = useState("");
  const [note, setNote] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (days.length === 0 || !timeOfDay) {
      setError("Choose at least one day and a time of day.");
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/portal/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, days, timeOfDay, note }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "We could not send your request. Please call us at 816-221-6400.");
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "We could not send your request. Please call us at 816-221-6400.");
      setState("idle");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="rounded-2xl bg-[#2E2F33] border border-white/10 p-6">
        <h2 className="font-display text-xl text-white">Your request is with the firm</h2>
        <p className="mt-2 text-white/85">
          We will confirm a time for your {type} with you directly. If it is urgent, call 816-221-6400.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl bg-[#2E2F33] border border-white/10 p-6 space-y-6">
      <fieldset>
        <legend className="text-white font-semibold mb-3">What would you like?</legend>
        <div className="flex gap-2">
          {(["call", "meeting"] as const).map((t) => (
            <button key={t} type="button" aria-pressed={type === t} onClick={() => setType(t)} className={chip(type === t)}>
              {t === "call" ? "A call" : "A meeting"}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-white font-semibold mb-3">Which days work for you?</legend>
        <div className="flex flex-wrap gap-2">
          {DAYS.map((d) => {
            const on = days.includes(d);
            return (
              <button
                key={d}
                type="button"
                aria-pressed={on}
                onClick={() => setDays((p) => (on ? p.filter((x) => x !== d) : [...p, d]))}
                className={chip(on)}
              >
                {d}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-white font-semibold mb-3">What time of day?</legend>
        <div className="flex flex-wrap gap-2">
          {TIMES.map((t) => (
            <button key={t} type="button" aria-pressed={timeOfDay === t} onClick={() => setTimeOfDay(t)} className={chip(timeOfDay === t)}>
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="pf-schedule-note" className="block text-white font-semibold mb-2">
          What would you like to talk about? (optional)
        </label>
        <textarea
          id="pf-schedule-note"
          rows={3}
          maxLength={1000}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full rounded-xl bg-white text-[#1C1C1E] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-muted-gold"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-[#FFB4B4]">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={state === "sending"}
        className="rounded-xl bg-muted-gold text-[#1C1C1E] font-semibold px-6 py-3 text-base hover:brightness-110 transition disabled:opacity-50"
      >
        {state === "sending" ? "Sending…" : `Request a ${type}`}
      </button>
    </form>
  );
}
