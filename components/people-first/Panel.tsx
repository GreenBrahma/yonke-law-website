"use client";

import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Panel — composable panel primitive for People First home.
   Three typed instances via props. §6, §16.
   ────────────────────────────────────────────────────────────── */

interface PanelProps {
  href: string;
  title: string;
  children: React.ReactNode;
  variant?: "status" | "action-yes" | "action-no" | "calendar";
  hasUnread?: boolean;
}

export function Panel({
  href,
  title,
  children,
  variant = "status",
  hasUnread = false,
}: PanelProps) {
  const isActionYes = variant === "action-yes";
  const isActionNo = variant === "action-no";

  return (
    <Link
      href={isActionNo ? "#" : href}
      className={`
        relative block rounded-2xl p-5 transition-all duration-300
        ${isActionNo ? "cursor-default" : "hover:scale-[1.01] active:scale-[0.99]"}
        ${
          isActionYes
            ? "bg-[var(--affirmative-green)]/15 border-2 border-[var(--affirmative-green)]/40 pf-pulse"
            : "bg-[var(--charcoal-slate)] border border-white/10 hover:border-[var(--muted-gold)]/30"
        }
      `}
      onClick={isActionNo ? (e) => e.preventDefault() : undefined}
    >
      {/* Unread badge */}
      {hasUnread && (
        <span className="absolute top-3 right-3 w-3 h-3 rounded-full bg-[var(--muted-gold)] pf-flash" />
      )}

      <h2
        className={`font-[family-name:var(--font-libre-baskerville)] text-base mb-2 ${
          isActionYes ? "text-[var(--affirmative-green)]" : "text-white"
        }`}
      >
        {title}
      </h2>

      <div className="text-sm text-white/70 leading-relaxed">{children}</div>

      {!isActionNo && (
        <span className="inline-block mt-3 text-xs text-[var(--muted-gold)]">
          Tap to open →
        </span>
      )}
    </Link>
  );
}
