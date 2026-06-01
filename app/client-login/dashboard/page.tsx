"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/people-first/auth-context";
import { Panel } from "@/components/people-first/Panel";
import { Pulse } from "@/components/people-first/Pulse";
import {
  DEMO_PERSON,
  STEPS,
  ACTION_NEEDED,
  CALENDAR_DATA,
} from "@/components/people-first/demo-data";

/* ──────────────────────────────────────────────────────────────
   Client Dashboard — Three-Panel Home (§6).
   FR-HOME-01: Three panels, no scroll, fixed viewport.
   ────────────────────────────────────────────────────────────── */

export default function DashboardPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [actionState] = useState(ACTION_NEEDED.state);
  const [hasUnread] = useState(CALENDAR_DATA.hasUnread);

  if (!isAuthenticated) {
    if (typeof window !== "undefined") {
      router.replace("/client-login");
    }
    return (
      <div className="min-h-screen bg-[var(--obsidian-graphite)] flex items-center justify-center">
        <p className="text-white/30 text-sm">Redirecting…</p>
      </div>
    );
  }

  const currentStep = STEPS.find((s) => s.key === DEMO_PERSON.currentStepKey);

  return (
    <>
      <div className="min-h-[calc(100vh-64px)] bg-[var(--obsidian-graphite)] flex flex-col justify-center px-4 py-6 lg:px-8">
        <div className="max-w-2xl mx-auto w-full mb-6">
          <p className="text-xs uppercase tracking-widest text-[var(--muted-gold)] mb-1">
            People First
          </p>
          <p className="text-white/50 text-sm">
            Welcome back, {DEMO_PERSON.name.split(".")[0]}.
          </p>
        </div>

        <div className="max-w-2xl mx-auto w-full flex flex-col gap-3">
          <Panel
            href="/client-login/where-you-are"
            title="Where You Are"
            variant="status"
          >
            <p>
              Right now:{" "}
              <span className="text-white">
                {currentStep?.plainTitle.toLowerCase() || "gathering your medical records"}.
              </span>
            </p>
          </Panel>

          <Panel
            href="/client-login/needed"
            title="Anything You Need To Do"
            variant={actionState === "yes" ? "action-yes" : "action-no"}
          >
            {actionState === "yes" ? (
              <p>
                <span className="font-semibold text-[var(--affirmative-green)]">
                  Yes
                </span>{" "}
                — {ACTION_NEEDED.title.toLowerCase()}.
              </p>
            ) : (
              <p>Nothing for you right now. We&apos;ve got it.</p>
            )}
          </Panel>

          <Panel
            href="/client-login/calendar"
            title="Your Calendar & Messages"
            variant="calendar"
            hasUnread={hasUnread}
          >
            <p>
              {CALENDAR_DATA.events[0]
                ? `Next: ${CALENDAR_DATA.events[0].title} — ${new Date(CALENDAR_DATA.events[0].date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} at ${CALENDAR_DATA.events[0].time}`
                : "No upcoming events."}
            </p>
          </Panel>
        </div>
      </div>

      <Pulse />
    </>
  );
}
