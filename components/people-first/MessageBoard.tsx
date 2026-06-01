"use client";

import { useState, type FormEvent } from "react";
import type { Message } from "./demo-data";
import { COMMS_RECIPIENT } from "./demo-data";

/* ──────────────────────────────────────────────────────────────
   MessageBoard — reusable chat thread (person ↔ Mike).
   Used in Panel 2 detail, Panel 3 detail, and Help page.
   FR-COMM-01: All comms person ↔ Mike only.
   ────────────────────────────────────────────────────────────── */

function formatTime(ts: string): string {
  const d = new Date(ts);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  }) + " at " + d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

interface MessageBoardProps {
  initialMessages: Message[];
  placeholder?: string;
}

export function MessageBoard({
  initialMessages,
  placeholder = "Type a message to Mike…",
}: MessageBoardProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  function handleSend(e: FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      from: "person",
      body: input.trim(),
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
  }

  return (
    <div className="flex flex-col">
      <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1 mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.from === "person" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                msg.from === "person"
                  ? "bg-[var(--muted-gold)] text-[var(--obsidian-graphite)]"
                  : "bg-[var(--charcoal-slate)] text-white"
              }`}
            >
              <p className="mb-1">{msg.body}</p>
              <p
                className={`text-[10px] ${
                  msg.from === "person"
                    ? "text-[var(--obsidian-graphite)]/60"
                    : "text-white/40"
                }`}
              >
                {msg.from === "firm" ? COMMS_RECIPIENT : "You"} · {formatTime(msg.timestamp)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-[var(--obsidian-graphite)] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--muted-gold)]/50 transition-colors"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="bg-[var(--muted-gold)] text-[var(--obsidian-graphite)] font-semibold px-4 py-2.5 rounded-lg text-sm hover:bg-[var(--muted-gold)]/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
        >
          Send
        </button>
      </form>
    </div>
  );
}
