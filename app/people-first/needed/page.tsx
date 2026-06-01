"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/people-first/auth-context";
import { MessageBoard } from "@/components/people-first/MessageBoard";
import { FileUpload } from "@/components/people-first/FileUpload";
import { Pulse } from "@/components/people-first/Pulse";
import { ACTION_NEEDED } from "@/components/people-first/demo-data";

/* ──────────────────────────────────────────────────────────────
   Panel 2 Detail — Anything You Need To Do (§6.2).
   FR-P2-01…06. One action, message board, file upload.
   On completion → panel flips Yes → No.
   ────────────────────────────────────────────────────────────── */

export default function NeededPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [completed, setCompleted] = useState(false);

  if (!isAuthenticated) {
    if (typeof window !== "undefined") router.replace("/people-first/sign-in");
    return null;
  }

  return (
    <>
      <div className="min-h-screen bg-[var(--obsidian-graphite)] px-4 py-8 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/people-first"
            className="text-xs text-[var(--muted-gold)] hover:text-white transition-colors mb-6 inline-block"
          >
            ← Back to home
          </Link>

          <p className="text-xs uppercase tracking-widest text-[var(--muted-gold)] mb-2">
            Anything You Need To Do
          </p>

          {completed ? (
            <div className="bg-[var(--charcoal-slate)] rounded-xl p-6 text-center">
              <p className="text-2xl mb-3">✓</p>
              <h1 className="font-[family-name:var(--font-libre-baskerville)] text-xl text-white mb-2">
                You&apos;re all set.
              </h1>
              <p className="text-sm text-white/50">
                Nothing for you right now. We&apos;ve got it.
              </p>
            </div>
          ) : (
            <>
              <h1 className="font-[family-name:var(--font-libre-baskerville)] text-2xl text-white mb-2">
                {ACTION_NEEDED.title}
              </h1>
              <p className="text-sm text-white/50 leading-relaxed mb-8">
                {ACTION_NEEDED.body}
              </p>

              {/* File upload */}
              <div className="bg-[var(--charcoal-slate)] rounded-xl p-6 mb-4">
                <h2 className="text-sm font-semibold text-white mb-3">
                  Upload files
                </h2>
                <FileUpload
                  onUpload={() => {
                    // Simulate completion after upload
                    setTimeout(() => setCompleted(true), 1200);
                  }}
                />
              </div>

              {/* Message board */}
              <div className="bg-[var(--charcoal-slate)] rounded-xl p-6">
                <h2 className="text-sm font-semibold text-white mb-3">
                  Message Mike
                </h2>
                <MessageBoard
                  initialMessages={ACTION_NEEDED.thread}
                  placeholder="Reply to Mike…"
                />
              </div>
            </>
          )}
        </div>
      </div>
      <Pulse />
    </>
  );
}
