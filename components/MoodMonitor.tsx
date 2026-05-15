"use client";

import { useState } from "react";
import Link from "next/link";

/* -------------------------------------------------------
   MoodMonitor — Section 5 of homepage-spec.md

   The differentiator demo. Three buttons in doctrine colors;
   clicking reveals the reveal copy per doctrine §9.

   Green  → --deep-forest  → "We continue the normal cadence…"
   Gray   → --soft-gray    → "Explanatory update within 24 hours…"
   Red    → --signal-red   → "Mike is notified directly…"

   This is a UI demo only. The real Mood Monitor lives in the
   People Portal. Per AGENTS.md, this version must work — not
   just describe.
   ------------------------------------------------------- */

type Mood = "green" | "gray" | "red" | null;

const REVEAL_COPY: Record<Exclude<Mood, null>, string> = {
  green:
    "Good. We continue the normal cadence. Updates stay regular. Your case is in motion.",
  gray:
    "We've flagged this in the system. You'll get an explanatory update within 24 hours — plain-language clarification of what's pending and why.",
  red:
    "Mike is notified directly. A case-team member will reach out within hours, not days. You will not be left waiting.",
};

export function MoodMonitor() {
  const [selected, setSelected] = useState<Mood>(null);

  return (
    <section className="bg-charcoal-slate py-24 px-4 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
            The People Portal
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-chrome-highlight leading-tight mb-3">
            Most law firms never ask how you&apos;re actually doing.
          </h2>
          <h3 className="font-display text-2xl md:text-3xl text-muted-gold leading-tight">
            We do — and we built a tool for it.
          </h3>
        </div>

        <p className="text-center text-steel-silver leading-relaxed mb-12 max-w-2xl mx-auto">
          We check in on the people we represent. Not just on the case.
          Real-time visibility into how you&apos;re feeling shapes how your
          case is handled. Try it — pick a state below and see what happens.
        </p>

        {/* Three buttons */}
        <div
          className="grid gap-3 md:grid-cols-3"
          role="group"
          aria-label="Mood Monitor demo — pick how you're feeling"
        >
          <button
            type="button"
            onClick={() => setSelected("green")}
            aria-pressed={selected === "green"}
            className={`p-5 rounded text-left transition-all duration-200 border-2 ${
              selected === "green"
                ? "border-deep-forest bg-deep-forest/30"
                : "border-deep-forest/40 bg-obsidian-graphite hover:border-deep-forest"
            }`}
            style={{
              borderColor:
                selected === "green" ? "var(--deep-forest)" : undefined,
            }}
          >
            <div className="font-semibold text-chrome-highlight mb-1">
              Green
            </div>
            <div className="text-sm text-steel-silver leading-snug">
              I feel informed and steady.
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSelected("gray")}
            aria-pressed={selected === "gray"}
            className={`p-5 rounded text-left transition-all duration-200 border-2 ${
              selected === "gray"
                ? "border-soft-gray bg-soft-gray/10"
                : "border-steel-silver/40 bg-obsidian-graphite hover:border-steel-silver"
            }`}
          >
            <div className="font-semibold text-chrome-highlight mb-1">
              Gray
            </div>
            <div className="text-sm text-steel-silver leading-snug">
              I&apos;m processing. Some of this is confusing.
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSelected("red")}
            aria-pressed={selected === "red"}
            className={`p-5 rounded text-left transition-all duration-200 border-2 ${
              selected === "red"
                ? "border-signal-red bg-signal-red/20"
                : "border-signal-red/40 bg-obsidian-graphite hover:border-signal-red"
            }`}
          >
            <div className="font-semibold text-chrome-highlight mb-1">Red</div>
            <div className="text-sm text-steel-silver leading-snug">
              I&apos;m anxious or frustrated. I need attention.
            </div>
          </button>
        </div>

        {/* Reveal area */}
        <div
          className="mt-6 min-h-[100px] transition-all duration-300"
          aria-live="polite"
          aria-atomic="true"
        >
          {selected && (
            <div className="bg-obsidian-graphite p-6 rounded border-l-4 border-muted-gold">
              <p className="text-chrome-highlight leading-relaxed">
                {REVEAL_COPY[selected]}
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/people-first/people-portal"
            className="inline-flex items-center gap-2 text-chrome-highlight hover:text-muted-gold transition-colors duration-200"
          >
            See how the People Portal works{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
