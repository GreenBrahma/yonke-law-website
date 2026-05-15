"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

/* ===========================================================
   ChatBot — Yonke Law conversational assistant

   Full conversational chat powered by /api/chat.
   Features:
   - Multi-turn conversation with memory
   - Document upload intent (guides to Talk to Us)
   - Emotional, supportive, person-first tone
   - Contact info always available
   - Falls back gracefully if API unavailable
   =========================================================== */

interface Message {
  role: "assistant" | "user";
  text: string;
}

const GREETING = `Hey — I'm glad you're here.

Whether something just happened or you've been carrying this for a while, I can help you understand your options and figure out a path forward.

**One thing upfront:** I share general legal information — not advice specific to your situation. For that, you'd talk directly with the team. But there's a lot we can work through together right here.

So — what's going on? Tell me in your own words.`;

/* Simple markdown-to-HTML for bold, italic, links, line breaks, lists */
function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/_(.+?)_/g, "<em>$1</em>")
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" class="text-muted-gold underline hover:text-chrome-highlight transition-colors">$1</a>'
    )
    .replace(/\n---\n/g, '<hr class="border-steel-silver/20 my-3" />')
    .replace(/\n/g, "<br />");
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  // Listen for ConciergeHero search → open chat with pre-loaded message
  useEffect(() => {
    function handleOpenChat(e: Event) {
      const detail = (e as CustomEvent).detail;
      if (detail?.message) {
        setIsOpen(true);
        // Send the message through the chat
        const userMsg: Message = { role: "user", text: detail.message };
        const updated = [...messages, userMsg];
        setMessages(updated);
        setIsTyping(true);

        fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: updated }),
        })
          .then((res) => (res.ok ? res.json() : null))
          .then((data) => {
            if (data?.text) {
              setMessages((prev) => [...prev, { role: "assistant", text: data.text }]);
            }
          })
          .catch(() => {
            setMessages((prev) => [
              ...prev,
              {
                role: "assistant",
                text: "I'm having trouble connecting. Call **816-221-6400** — the team is ready to help.",
              },
            ]);
          })
          .finally(() => setIsTyping(false));
      }
    }

    window.addEventListener("yonke:open-chat", handleOpenChat);
    return () => window.removeEventListener("yonke:open-chat", handleOpenChat);
  }, [messages]);

  const handleSend = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMsg: Message = { role: "user", text: trimmed };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: data.text },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text: "I'm having trouble connecting right now. You can reach the team directly at **816-221-6400** or through the [Talk to Us](/talk-to-us) page. I'm sorry about that.",
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong on my end. Please call **816-221-6400** or visit [Talk to Us](/talk-to-us) — the team will take care of you.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  }, [input, messages, isTyping]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  return (
    <>
      {/* Floating button — bottom right with white glow */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full bg-charcoal-slate border-2 border-steel-silver/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        style={{
          boxShadow: isOpen
            ? "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.2)"
            : "0 0 15px rgba(255,255,255,0.4), 0 0 30px rgba(255,255,255,0.15)",
        }}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6 text-chrome-highlight"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <Image
            src="/yl-logo.png"
            alt="Yonke Law assistant"
            width={40}
            height={40}
            className="rounded-full object-contain group-hover:brightness-125 transition-all"
          />
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-[9998] w-[400px] max-w-[calc(100vw-2rem)] bg-obsidian-graphite border border-steel-silver/20 rounded-xl shadow-2xl flex flex-col overflow-hidden"
          style={{
            maxHeight: "min(650px, calc(100vh - 8rem))",
            boxShadow:
              "0 0 30px rgba(0,0,0,0.5), 0 4px 60px rgba(0,0,0,0.3)",
          }}
        >
          {/* Header */}
          <div className="bg-charcoal-slate px-5 py-4 border-b border-steel-silver/15 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <Image
                src="/yl-logo.png"
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <div className="text-chrome-highlight font-semibold text-sm">
                  Yonke Law
                </div>
                <div className="text-steel-silver text-xs">
                  Here to help · Not legal advice
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="tel:+18162216400"
                className="text-[10px] text-muted-gold hover:text-chrome-highlight transition-colors px-2 py-1 border border-muted-gold/30 rounded"
                title="Call Yonke Law"
              >
                📞 Call
              </a>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
            style={{ minHeight: "200px" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-muted-gold/15 text-chrome-highlight rounded-br-sm"
                      : "bg-charcoal-slate text-steel-silver rounded-bl-sm"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: renderMarkdown(msg.text),
                  }}
                />
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-charcoal-slate rounded-lg px-4 py-3 rounded-bl-sm">
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 bg-steel-silver/50 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-steel-silver/50 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-steel-silver/50 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick actions */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {[
                "I was in an accident",
                "Someone I love was hurt",
                "I have a settlement offer",
                "I need to send documents",
              ].map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => {
                    setInput(prompt);
                    setTimeout(() => {
                      handleSend();
                    }, 50);
                  }}
                  className="text-xs bg-charcoal-slate border border-steel-silver/15 text-steel-silver hover:text-chrome-highlight hover:border-muted-gold/40 rounded-full px-3 py-1.5 transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-steel-silver/15 px-4 py-3 bg-charcoal-slate/50 shrink-0">
            <div className="flex gap-2 items-end">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tell me what happened…"
                rows={1}
                className="flex-1 bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-3 py-2 text-sm text-chrome-highlight placeholder:text-steel-silver/50 focus:outline-none focus:border-muted-gold/50 transition-colors resize-none"
                style={{ maxHeight: "120px" }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-muted-gold text-obsidian-graphite px-4 py-2 rounded-lg font-semibold text-sm hover:bg-muted-gold/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
              >
                Send
              </button>
            </div>
            <div className="mt-2 text-[10px] text-steel-silver/40 text-center">
              General information only · For your specific situation, call{" "}
              <a
                href="tel:+18162216400"
                className="text-steel-silver/60 hover:text-muted-gold transition-colors"
              >
                816-221-6400
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
