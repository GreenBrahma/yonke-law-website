"use client";

import { useState } from "react";
import Link from "next/link";
import type { PulseState } from "./demo-data";
import { PULSE_STATES } from "./demo-data";

/* ──────────────────────────────────────────────────────────────
   Pulse — persistent emotional pulse (§7).
   Present on EVERY /people-first/* gated page.
   Five states, exact §7.1 decision tree. No extra states,
   no extra branches, no reworded options.
   FR-PULSE-01…06.
   ────────────────────────────────────────────────────────────── */

type PulsePhase =
  | "idle"
  | "picking"
  | "result"
  | "sad-q1"
  | "sad-q2"
  | "angry-q1"
  | "angry-q2";

const EMOJI_MAP: Record<PulseState, string> = {
  Good: "😊",
  "Doing OK": "🙂",
  Confused: "😕",
  Sad: "😔",
  Angry: "😠",
};

export function Pulse() {
  const [phase, setPhase] = useState<PulsePhase>("idle");
  const [resultText, setResultText] = useState("");

  function handlePick(state: PulseState) {
    switch (state) {
      case "Good":
        setResultText("Love to hear it. Keep going — you're doing great.");
        setPhase("result");
        break;
      case "Doing OK":
        setResultText("Sounds good. We're here if you need us.");
        setPhase("result");
        break;
      case "Confused":
        // Routed to help page via link — handled in render
        setPhase("result");
        setResultText("__confused__");
        break;
      case "Sad":
        setPhase("sad-q1");
        break;
      case "Angry":
        setPhase("angry-q1");
        break;
    }
  }

  function handleCallYes(emotional: "sad" | "angry") {
    setResultText(
      "We've let Mike know — he'll reach out to set up a call."
    );
    setPhase("result");
  }

  function handleCallNo(emotional: "sad" | "angry") {
    setPhase(emotional === "sad" ? "sad-q2" : "angry-q2");
  }

  function handleHelpYes() {
    setResultText(
      "We've let Mike know. He'll be in touch."
    );
    setPhase("result");
  }

  function handleHelpNo() {
    setResultText("OK. Take care.");
    setPhase("result");
  }

  function reset() {
    setPhase("idle");
    setResultText("");
  }

  // ── Idle: small prompt ──
  if (phase === "idle") {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setPhase("picking")}
          className="bg-[var(--charcoal-slate)] border border-white/15 rounded-full px-4 py-2 text-sm text-white/70 hover:text-white hover:border-[var(--muted-gold)]/40 transition-all shadow-lg"
        >
          How are you doing?
        </button>
      </div>
    );
  }

  // ── Picking: five states ──
  if (phase === "picking") {
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-[var(--obsidian-graphite)] border border-white/15 rounded-2xl p-4 shadow-2xl w-[280px]">
        <p className="text-sm text-white mb-3 font-semibold">
          How are you doing?
        </p>
        <div className="grid grid-cols-5 gap-1">
          {PULSE_STATES.map((state) => (
            <button
              key={state}
              onClick={() => handlePick(state)}
              className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <span className="text-2xl">{EMOJI_MAP[state]}</span>
              <span className="text-[10px] text-white/50 leading-tight text-center">
                {state}
              </span>
            </button>
          ))}
        </div>
        <button
          onClick={reset}
          className="mt-2 text-[10px] text-white/30 hover:text-white/50 transition-colors w-full text-center"
        >
          Close
        </button>
      </div>
    );
  }

  // ── Sad Q1: "Would you like to set up a call?" ──
  if (phase === "sad-q1") {
    return (
      <PulseModal
        text="Would you like to set up a call?"
        onYes={() => handleCallYes("sad")}
        onNo={() => handleCallNo("sad")}
        onClose={reset}
      />
    );
  }

  // ── Sad Q2: "Is there anything we can do to help?" ──
  if (phase === "sad-q2") {
    return (
      <PulseModal
        text="Is there anything we can do to help?"
        onYes={handleHelpYes}
        onNo={handleHelpNo}
        onClose={reset}
      />
    );
  }

  // ── Angry Q1: identical to Sad Q1 ──
  if (phase === "angry-q1") {
    return (
      <PulseModal
        text="Would you like to set up a call?"
        onYes={() => handleCallYes("angry")}
        onNo={() => handleCallNo("angry")}
        onClose={reset}
      />
    );
  }

  // ── Angry Q2: identical to Sad Q2 ──
  if (phase === "angry-q2") {
    return (
      <PulseModal
        text="Is there anything we can do to help?"
        onYes={handleHelpYes}
        onNo={handleHelpNo}
        onClose={reset}
      />
    );
  }

  // ── Result ──
  if (phase === "result") {
    if (resultText === "__confused__") {
      return (
        <div className="fixed bottom-4 right-4 z-50 bg-[var(--obsidian-graphite)] border border-white/15 rounded-2xl p-4 shadow-2xl w-[280px]">
          <p className="text-sm text-white mb-3">What&apos;s up?</p>
          <Link
            href="/client-login/help"
            onClick={reset}
            className="block text-center bg-[var(--muted-gold)] text-[var(--obsidian-graphite)] font-semibold px-4 py-2 rounded-lg text-sm hover:bg-[var(--muted-gold)]/90 transition-colors"
          >
            Get help →
          </Link>
          <button
            onClick={reset}
            className="mt-2 text-[10px] text-white/30 hover:text-white/50 transition-colors w-full text-center"
          >
            Close
          </button>
        </div>
      );
    }

    return (
      <div className="fixed bottom-4 right-4 z-50 bg-[var(--obsidian-graphite)] border border-white/15 rounded-2xl p-4 shadow-2xl w-[280px]">
        <p className="text-sm text-white leading-relaxed">{resultText}</p>
        <button
          onClick={reset}
          className="mt-3 text-xs text-[var(--muted-gold)] hover:text-white transition-colors"
        >
          Done
        </button>
      </div>
    );
  }

  return null;
}

// ── Yes/No modal helper ──
function PulseModal({
  text,
  onYes,
  onNo,
  onClose,
}: {
  text: string;
  onYes: () => void;
  onNo: () => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-[var(--obsidian-graphite)] border border-white/15 rounded-2xl p-4 shadow-2xl w-[280px]">
      <p className="text-sm text-white mb-3">{text}</p>
      <div className="flex gap-2">
        <button
          onClick={onYes}
          className="flex-1 bg-[var(--muted-gold)] text-[var(--obsidian-graphite)] font-semibold py-2 rounded-lg text-sm hover:bg-[var(--muted-gold)]/90 transition-colors"
        >
          Yes
        </button>
        <button
          onClick={onNo}
          className="flex-1 bg-white/10 text-white font-semibold py-2 rounded-lg text-sm hover:bg-white/15 transition-colors"
        >
          No
        </button>
      </div>
      <button
        onClick={onClose}
        className="mt-2 text-[10px] text-white/30 hover:text-white/50 transition-colors w-full text-center"
      >
        Close
      </button>
    </div>
  );
}
