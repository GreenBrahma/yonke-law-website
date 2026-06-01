"use client";

import { useState, useRef, useEffect } from "react";

/* ──────────────────────────────────────────────────────────────
   MessageBoard — Real message thread (person ↔ Mike only).
   
   When apiEndpoint is provided, messages are persisted to DB
   and sent as real emails to Mike via MS365 Graph.
   ────────────────────────────────────────────────────────────── */

interface Message {
  id: string;
  from: "person" | "firm";
  body: string;
  createdAt?: string;
}

interface MessageBoardProps {
  initialMessages?: Message[];
  placeholder?: string;
  apiEndpoint?: string; // e.g. "/api/people-first/messages"
}

export function MessageBoard({
  initialMessages = [],
  placeholder = "Type a message…",
  apiEndpoint,
}: MessageBoardProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fetch real messages on mount if API endpoint is provided
  useEffect(() => {
    if (apiEndpoint) {
      fetch(apiEndpoint)
        .then((r) => r.json())
        .then((data) => {
          if (data.messages?.length) {
            setMessages(
              data.messages.map((m: Record<string, string>) => ({
                id: m.id,
                from: m.sender || m.from,
                body: m.body,
                createdAt: m.createdAt,
              }))
            );
          }
        })
        .catch(() => {});
    }
  }, [apiEndpoint]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  async function handleSend() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setSending(true);

    const optimisticMsg: Message = {
      id: `temp-${Date.now()}`,
      from: "person",
      body: text,
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, optimisticMsg]);

    if (apiEndpoint) {
      try {
        const res = await fetch(apiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ body: text }),
        });
        const data = await res.json();
        if (data.message) {
          // Replace optimistic message with real one
          setMessages((prev) =>
            prev.map((m) =>
              m.id === optimisticMsg.id
                ? { ...data.message, from: data.message.sender || data.message.from }
                : m
            )
          );
        }
      } catch {
        // Keep optimistic message on failure
      }
    }

    setSending(false);
  }

  return (
    <div>
      {/* Thread */}
      <div
        ref={scrollRef}
        className="max-h-[320px] overflow-y-auto space-y-3 mb-4 scrollbar-thin"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.from === "person" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.from === "person"
                  ? "bg-[var(--muted-gold)] text-[var(--obsidian-graphite)] rounded-br-sm"
                  : "bg-[var(--charcoal-slate)] text-white rounded-bl-sm"
              }`}
            >
              {msg.from === "firm" && (
                <p className="text-[10px] text-[var(--muted-gold)] font-semibold mb-1">
                  Mike Yonke
                </p>
              )}
              {msg.body}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
          placeholder={placeholder}
          className="flex-1 bg-[var(--obsidian-graphite)] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--muted-gold)]/50 transition-colors"
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={!input.trim() || sending}
          className="bg-[var(--muted-gold)] text-[var(--obsidian-graphite)] font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-[var(--muted-gold)]/90 transition-colors disabled:opacity-40"
        >
          {sending ? "…" : "Send"}
        </button>
      </div>
    </div>
  );
}
