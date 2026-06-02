"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/people-first/auth-context";
import { MessageBoard } from "@/components/people-first/MessageBoard";
import { FileUpload } from "@/components/people-first/FileUpload";
import { Pulse } from "@/components/people-first/Pulse";
import Image from "next/image";

/* ──────────────────────────────────────────────────────────────
   Panel 2 — Anything You Need To Do
   Real data from API. Files sent to Mike via Graph.
   ────────────────────────────────────────────────────────────── */

interface CaseData {
  actionNeeded: boolean;
  actionTitle: string | null;
  actionBody: string | null;
}

export default function NeededPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [caseData, setCaseData] = useState<CaseData | null>(null);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/people-first-login");
    }
  }, [isAuthenticated, isLoading, router]);

  useEffect(() => {
    if (isAuthenticated) {
      fetch("/api/people-first/case")
        .then((r) => r.json())
        .then((data) => {
          setCaseData(data.case);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [isAuthenticated]);

  if (isLoading || loading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--obsidian-graphite)] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[var(--muted-gold)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/yl-client-26.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-8"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--obsidian-graphite)] via-[var(--obsidian-graphite)]/95 to-[var(--obsidian-graphite)]" />

        <div className="relative z-10 px-4 py-8 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Link href="/people-first-login/dashboard" className="text-xs text-[var(--muted-gold)] hover:text-white transition-colors mb-6 inline-block">
              ← Back to home
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted-gold)]">Action Needed</span>
              <span className="flex-1 h-px bg-[var(--muted-gold)]/30" />
            </div>

            {completed || !caseData?.actionNeeded ? (
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
                <p className="text-3xl mb-3">✓</p>
                <h1 className="font-[family-name:var(--font-libre-baskerville)] text-xl text-white mb-2">You&apos;re all set.</h1>
                <p className="text-sm text-white/50">Nothing for you right now. We&apos;ve got it.</p>
              </div>
            ) : (
              <>
                <h1 className="font-[family-name:var(--font-libre-baskerville)] text-2xl text-white mb-2">
                  {caseData.actionTitle || "We need something from you"}
                </h1>
                <p className="text-sm text-white/50 leading-relaxed mb-8">
                  {caseData.actionBody || "Please check below for details."}
                </p>

                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-4">
                  <h2 className="text-sm font-semibold text-white mb-3">Upload files</h2>
                  <FileUpload
                    apiEndpoint="/api/people-first/files"
                    onUpload={() => {
                      setTimeout(() => setCompleted(true), 1200);
                    }}
                  />
                </div>

                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h2 className="text-sm font-semibold text-white mb-3">Message Mike</h2>
                  <MessageBoard
                    apiEndpoint="/api/people-first/messages"
                    placeholder="Reply to Mike…"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Pulse />
    </>
  );
}
