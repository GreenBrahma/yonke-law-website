"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setIsSubmitted(true);
    setMessage("");

    // The message could be sent to an API here.
    // For now, we simulate success as requested.
    
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
    }, 2500);
  };

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        className="fixed bottom-6 right-6 z-[9999] w-3 h-3 bg-muted-gold rounded-full opacity-30 hover:opacity-100 transition-opacity"
        aria-label="Bring back Help Representative"
      />
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* The Card */}
      <div 
        className={`mb-4 w-80 bg-obsidian-graphite border border-steel-silver/20 rounded-xl shadow-2xl overflow-hidden flex flex-col transform transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-95 opacity-0 pointer-events-none absolute bottom-full right-0"
        }`}
      >
        <div className="p-5 flex flex-col items-center border-b border-steel-silver/10 bg-charcoal-slate">
          <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-muted-gold mb-3 shadow-md">
            <Image
              src="/images/retro_operator.png"
              alt="Help Representative"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-display text-xl text-chrome-highlight">
            How can I help?
          </h3>
          <p className="text-sm text-steel-silver text-center mt-1">
            Describe your situation or ask a question.
          </p>
        </div>

        <div className="p-5 bg-obsidian-graphite">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 opacity-100 animate-in fade-in duration-500">
              <div className="text-muted-gold text-3xl mb-3">✓</div>
              <p className="text-chrome-highlight text-sm text-center font-medium">
                Got it, we'll look into it.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 animate-in fade-in duration-300">
              <textarea
                ref={inputRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question..."
                rows={3}
                className="w-full bg-charcoal-slate border border-steel-silver/20 rounded-lg px-3 py-2 text-sm text-chrome-highlight placeholder:text-steel-silver/50 focus:outline-none focus:border-muted-gold/50 resize-none transition-colors"
                required
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="bg-muted-gold text-obsidian-graphite font-semibold py-2.5 rounded-lg text-sm hover:bg-muted-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="bg-charcoal-slate p-2 flex justify-end border-t border-steel-silver/10">
          <button
            onClick={() => {
              setIsOpen(false);
              setIsDismissed(true);
            }}
            className="text-steel-silver/60 hover:text-signal-red transition-colors p-1"
            title="Dismiss"
            aria-label="Dismiss chatbot"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
              <line x1="12" y1="2" x2="12" y2="12" />
            </svg>
          </button>
        </div>
      </div>

      {/* The Avatar Bubble */}
      <div className="group relative flex items-center justify-end">
        {/* Slide-out text */}
        <div
          className={`absolute right-full mr-4 whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0 translate-x-4 pointer-events-none" : "opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
          }`}
        >
          <span className="bg-charcoal-slate text-chrome-highlight text-sm font-medium px-4 py-2 rounded-full border border-steel-silver/10 shadow-lg block">
            Help
          </span>
        </div>

        {/* Avatar */}
        <div className="relative flex flex-col items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative w-16 h-16 rounded-full overflow-hidden border-[3px] border-muted-gold shadow-[0_0_15px_rgba(184,155,94,0.3)] transition-transform hover:scale-105 z-10 ${
              isOpen ? "scale-105" : ""
            }`}
            aria-label="Toggle Help Representative"
          >
            {/* Pulsing halo behind the image */}
            {!isOpen && (
              <div className="absolute inset-0 rounded-full animate-ping bg-white/40" style={{ animationDuration: '3s' }} />
            )}
            <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
            <Image
              src="/images/retro_operator.png"
              alt="Help Representative"
              fill
              className="object-cover relative z-10"
            />
          </button>
          
          <span className={`text-[10px] font-semibold text-muted-gold mt-1 uppercase tracking-wider transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}>
            Help Representative
          </span>
        </div>
      </div>
    </div>
  );
}
