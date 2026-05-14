"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  KNOWLEDGE_BASE,
  SYSTEM_DISCLAIMER,
  GREETING,
  type KnowledgeEntry,
} from "./knowledge";

/* ===========================================================
   ChatBot — Yonke Law informational assistant

   Architecture: 100% client-side, zero API calls.
   Answers are pattern-matched against a pre-verified
   knowledge base sourced from the MO/KS legal catalog.
   
   GUARDRAILS:
   - Cannot hallucinate (no generative model — lookup only)
   - Cannot give legal advice (disclaimer on every response)
   - Cannot drift (no memory beyond current session)
   - Falls back to "contact us" for any unrecognized question
   =========================================================== */

interface Message {
  role: "assistant" | "user";
  text: string;
}

function scoreMatch(query: string, entry: KnowledgeEntry): number {
  const q = query.toLowerCase();
  let score = 0;
  for (const kw of entry.keywords) {
    if (q.includes(kw.toLowerCase())) {
      score += kw.length; // longer keyword matches score higher
    }
  }
  // Bonus for category match
  if (q.includes(entry.category.toLowerCase())) {
    score += 10;
  }
  return score;
}

function findBestAnswer(query: string): string {
  const q = query.toLowerCase().trim();

  // Guard: refuse to give specific legal advice
  const advicePatterns = [
    "should i sue",
    "how much can i get",
    "how much is my case worth",
    "what should i do",
    "am i going to win",
    "will i win",
    "do i have a case",
    "can i sue",
    "should i settle",
    "how much money",
    "what would you recommend",
    "give me legal advice",
  ];

  for (const pattern of advicePatterns) {
    if (q.includes(pattern)) {
      return `I can't evaluate specific situations or provide legal advice — that requires an attorney who understands the details of your case.

**What I can do:** Explain general legal concepts, filing deadlines, and how Missouri and Kansas law works.

**For your specific situation:** Contact Yonke Law for a free, confidential consultation.
📞 **816-221-6400**

${SYSTEM_DISCLAIMER}`;
    }
  }

  // Score all entries
  const scored = KNOWLEDGE_BASE.map((entry) => ({
    entry,
    score: scoreMatch(query, entry),
  }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length > 0) {
    const best = scored[0].entry;
    let response = best.answer;
    if (best.statutes && best.statutes.length > 0) {
      response += `\n\n**Referenced statutes:** ${best.statutes.join(", ")}`;
    }
    response += `\n\n---\n_${SYSTEM_DISCLAIMER}_`;
    return response;
  }

  // Fallback — no match
  return `I don't have specific information on that topic in my knowledge base, but the team at Yonke Law can help.

**Reach out directly:**
📞 **816-221-6400**
🌐 [Talk to Us](/talk-to-us)

Free consultation. No fee unless we recover for you.

_${SYSTEM_DISCLAIMER}_`;
}

/* Simple markdown-to-HTML for bold, italic, links, line breaks */
function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/_(.+?)_/g, "<em>$1</em>")
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" class="text-muted-gold underline hover:text-chrome-highlight">$1</a>'
    )
    .replace(/📞/g, "📞")
    .replace(/📍/g, "📍")
    .replace(/🕘/g, "🕘")
    .replace(/🌐/g, "🌐")
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
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate brief "thinking" delay for natural feel
    setTimeout(() => {
      const answer = findBestAnswer(trimmed);
      setMessages((prev) => [...prev, { role: "assistant", text: answer }]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  }, [input]);

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
          className="fixed bottom-24 right-6 z-[9998] w-[380px] max-w-[calc(100vw-2rem)] bg-obsidian-graphite border border-steel-silver/20 rounded-xl shadow-2xl flex flex-col overflow-hidden"
          style={{
            maxHeight: "min(600px, calc(100vh - 8rem))",
            boxShadow:
              "0 0 30px rgba(0,0,0,0.5), 0 4px 60px rgba(0,0,0,0.3)",
          }}
        >
          {/* Header */}
          <div className="bg-charcoal-slate px-5 py-4 border-b border-steel-silver/15 flex items-center gap-3 shrink-0">
            <Image
              src="/yl-logo.png"
              alt=""
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <div className="text-chrome-highlight font-semibold text-sm">
                Yonke Law Assistant
              </div>
              <div className="text-steel-silver text-xs">
                General legal information · Not legal advice
              </div>
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
                    <span className="w-2 h-2 bg-steel-silver/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-steel-silver/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-steel-silver/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-steel-silver/15 px-4 py-3 bg-charcoal-slate/50 shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about MO/KS injury law..."
                className="flex-1 bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-3 py-2 text-sm text-chrome-highlight placeholder:text-steel-silver/50 focus:outline-none focus:border-muted-gold/50 transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-muted-gold text-obsidian-graphite px-4 py-2 rounded-lg font-semibold text-sm hover:bg-muted-gold/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
