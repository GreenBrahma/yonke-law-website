"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/people-first/auth-context";
import { Pulse } from "@/components/people-first/Pulse";
import { DEMO_PERSON, STEPS } from "@/components/people-first/demo-data";

export default function WhereYouArePage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    if (typeof window !== "undefined") router.replace("/client-login");
    return null;
  }

  const currentStep = STEPS.find((s) => s.key === DEMO_PERSON.currentStepKey);
  const stepIndex = STEPS.findIndex((s) => s.key === DEMO_PERSON.currentStepKey);

  if (!currentStep) return null;

  return (
    <>
      <div className="min-h-screen bg-[var(--obsidian-graphite)] px-4 py-8 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Link href="/client-login/dashboard" className="text-xs text-[var(--muted-gold)] hover:text-white transition-colors mb-6 inline-block">
            ← Back to home
          </Link>

          <p className="text-xs uppercase tracking-widest text-[var(--muted-gold)] mb-2">Where You Are</p>
          <h1 className="font-[family-name:var(--font-libre-baskerville)] text-2xl text-white mb-2">{currentStep.plainTitle}</h1>
          <p className="text-white/30 text-xs mb-8">Step {stepIndex + 1} of {STEPS.length} — {currentStep.name}</p>

          <div className="bg-[var(--charcoal-slate)] rounded-xl p-6 mb-4">
            <h2 className="text-sm font-semibold text-white mb-3">What&apos;s happening</h2>
            <p className="text-sm text-white/70 leading-relaxed">{currentStep.detailBody}</p>
          </div>

          <div className="bg-[var(--charcoal-slate)] rounded-xl p-6">
            <h2 className="text-sm font-semibold text-white mb-3">What happens next</h2>
            <p className="text-sm text-white/70 leading-relaxed">{currentStep.whatHappensNext}</p>
          </div>

          <div className="mt-8 flex items-center gap-1.5 justify-center">
            {STEPS.map((s, i) => (
              <div key={s.key} className={`w-2 h-2 rounded-full transition-colors ${i < stepIndex ? "bg-[var(--muted-gold)]" : i === stepIndex ? "bg-[var(--affirmative-green)]" : "bg-white/15"}`} title={s.name} />
            ))}
          </div>
        </div>
      </div>
      <Pulse />
    </>
  );
}
