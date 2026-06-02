"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/people-first/auth-context";
import { Panel } from "@/components/people-first/Panel";
import { Pulse } from "@/components/people-first/Pulse";
import Image from "next/image";

/* ──────────────────────────────────────────────────────────────
   People First — Three-Panel Home
   FR-HOME-01: Three panels + persistent pulse, no scroll.
   Real data from /api/people-first/case.
   ────────────────────────────────────────────────────────────── */

interface CaseData {
  id: string;
  currentStep: string;
  actionNeeded: boolean;
  actionTitle: string | null;
  actionBody: string | null;
  hasUnread: boolean;
}

const STEP_LABELS: Record<string, string> = {
  intake: "reviewing your intake information",
  consultation: "preparing for your consultation",
  retained: "setting up your case",
  investigation: "investigating the facts",
  demand: "preparing the demand package",
  call_preparation: "preparing for an upcoming call",
  medical_treatment: "gathering your medical records",
  negotiation: "in active negotiation",
  litigation: "preparing litigation filings",
  discovery: "in discovery",
  deposition: "preparing for depositions",
  trial_prep: "preparing for trial",
  trial: "at trial",
  settlement: "finalizing your settlement",
  testimonial: "case resolved — wrapping up",
};

export default function DashboardPage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  const [caseData, setCaseData] = useState<CaseData | null>(null);
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

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--obsidian-graphite)] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[var(--muted-gold)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  /* Map known email → display name; then extract first name */
  const EMAIL_NAME_MAP: Record<string, string> = {
    "myonke@yonke-law.com": "Mike Yonke",
  };
  const displayName =
    (user?.email && EMAIL_NAME_MAP[user.email.toLowerCase()]) ||
    user?.name ||
    null;
  const firstName = displayName ? displayName.split(/[\s.]/)[0] : null;
  const stepLabel =
    caseData && STEP_LABELS[caseData.currentStep]
      ? STEP_LABELS[caseData.currentStep]
      : "getting started";

  return (
    <>
      <div className="relative min-h-[calc(100vh-64px)] overflow-hidden">
        {/* Subtle background image */}
        <Image
          src="/images/yl-client-25.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-10"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--obsidian-graphite)] via-[var(--obsidian-graphite)]/95 to-[var(--obsidian-graphite)]" />

        <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-64px)] px-4 py-6 lg:px-8">
          {/* Lockup */}
          <div className="max-w-2xl mx-auto w-full mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted-gold)]">
                People First
              </span>
              <span className="flex-1 h-px bg-[var(--muted-gold)]/30" />
            </div>
            <p className="text-white/50 text-sm">
              {firstName
                ? `Hello ${firstName}, Welcome to the People First portal.`
                : "Welcome to the People First portal."}
            </p>
          </div>

          {/* Three Panels */}
          <div className="max-w-2xl mx-auto w-full flex flex-col gap-3">
            <Panel
              href="/people-first-login/where-you-are"
              title="Where You Are"
              variant="status"
            >
              {loading ? (
                <p className="text-white/30 text-sm">Loading…</p>
              ) : (
                <p>
                  Right now:{" "}
                  <span className="text-white">{stepLabel}.</span>
                </p>
              )}
            </Panel>

            <Panel
              href="/people-first-login/needed"
              title="Anything You Need To Do"
              variant={
                caseData?.actionNeeded ? "action-yes" : "action-no"
              }
            >
              {loading ? (
                <p className="text-white/30 text-sm">Loading…</p>
              ) : caseData?.actionNeeded ? (
                <p>
                  <span className="font-semibold text-[var(--affirmative-green)]">
                    Yes
                  </span>{" "}
                  — {caseData.actionTitle?.toLowerCase() || "we need something from you"}.
                </p>
              ) : (
                <p>Nothing for you right now. We&apos;ve got it.</p>
              )}
            </Panel>

            <Panel
              href="/people-first-login/calendar"
              title="Your Calendar & Messages"
              variant="calendar"
              hasUnread={caseData?.hasUnread}
            >
              <p>
                Messages with Mike and upcoming dates.
              </p>
            </Panel>
          </div>
        </div>
      </div>

      <Pulse />
    </>
  );
}
