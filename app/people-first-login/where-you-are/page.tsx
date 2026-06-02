"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/people-first/auth-context";
import { Pulse } from "@/components/people-first/Pulse";
import Image from "next/image";

/* ──────────────────────────────────────────────────────────────
   Panel 1 — Where You Are
   Real case data from /api/people-first/case.
   ────────────────────────────────────────────────────────────── */

const STEPS = [
  { key: "intake", name: "Intake", plainTitle: "Reviewing your intake information", detailBody: "We're reviewing everything you've sent us — the accident details, insurance information, and any medical records so far. This is where we build the foundation of your file.", whatHappensNext: "Once we've reviewed your intake, we'll schedule a consultation to go over your case in person." },
  { key: "consultation", name: "Consultation", plainTitle: "Preparing for your consultation", detailBody: "We're getting ready to sit down with you. We'll go through the facts, answer your questions, and explain what the path forward looks like.", whatHappensNext: "After the consultation, if we're a fit, we'll move forward together." },
  { key: "retained", name: "Retained", plainTitle: "Setting up your case", detailBody: "You've signed on. We're opening your file, sending preservation letters, and putting the other side on notice.", whatHappensNext: "Investigation begins — we start gathering evidence and building the record." },
  { key: "investigation", name: "Investigation", plainTitle: "Investigating the facts", detailBody: "We're collecting police reports, witness statements, surveillance footage, and anything else that documents what happened. Communication with the other side shifts to us. You focus on recovery.", whatHappensNext: "Once the investigation is complete, we'll move to documenting your damages." },
  { key: "demand", name: "Demand", plainTitle: "Preparing the demand package", detailBody: "We're assembling the full picture — medical records, bills, lost wages, and the human impact — into a demand that tells your story clearly and completely.", whatHappensNext: "The demand goes to the other side. Then we wait for their response." },
  { key: "call_preparation", name: "Call Preparation", plainTitle: "Preparing for an upcoming call", detailBody: "We're getting ready for an important call related to your case. We'll make sure you know exactly what to expect and what we need from you.", whatHappensNext: "After the call, we'll regroup and decide the next move." },
  { key: "medical_treatment", name: "Medical Treatment", plainTitle: "Gathering your medical records", detailBody: "You're still treating, and we're tracking every visit, every referral, and every bill. This is the most important phase for your case — your medical records become the backbone of your claim.", whatHappensNext: "Once treatment stabilizes, we'll compile everything into a demand." },
  { key: "negotiation", name: "Negotiation", plainTitle: "In active negotiation", detailBody: "We've sent the demand and the other side has responded. We're evaluating offers, pushing back where needed, and making sure nothing is left on the table.", whatHappensNext: "If we reach an agreement, we settle. If not, we prepare for litigation." },
  { key: "litigation", name: "Litigation", plainTitle: "Preparing litigation filings", detailBody: "We've filed suit. The case is now in the court system. This doesn't mean trial is imminent — it means we're using the legal process to push for a fair resolution.", whatHappensNext: "Discovery comes next — both sides exchange information under oath." },
  { key: "discovery", name: "Discovery", plainTitle: "In discovery", detailBody: "Both sides are exchanging documents, answering written questions, and building their records. We're gathering everything we need to prepare for depositions or trial.", whatHappensNext: "Depositions may be scheduled, or the case may move toward resolution." },
  { key: "deposition", name: "Deposition", plainTitle: "Preparing for depositions", detailBody: "Depositions are sworn testimony taken outside of court. We'll prepare you thoroughly — you'll know every question type, every strategy, and every boundary.", whatHappensNext: "After depositions, cases often move toward mediation or trial." },
  { key: "trial_prep", name: "Trial Prep", plainTitle: "Preparing for trial", detailBody: "We're assembling exhibits, preparing witnesses, and building the presentation that will tell your story to a jury. This is where everything comes together.", whatHappensNext: "Trial. Your decision, our preparation." },
  { key: "trial", name: "Trial", plainTitle: "At trial", detailBody: "Your case is being presented. We're in the courtroom, making the arguments, examining witnesses, and fighting for the outcome you deserve.", whatHappensNext: "A verdict. Then resolution." },
  { key: "settlement", name: "Settlement", plainTitle: "Finalizing your settlement", detailBody: "We've reached an agreement. We're finalizing the paperwork, coordinating with lienholders, and making sure every dollar is accounted for before funds are distributed.", whatHappensNext: "You receive your settlement. The case closes." },
  { key: "testimonial", name: "Resolved", plainTitle: "Case resolved — wrapping up", detailBody: "Your case is complete. We're closing the file, but we're always here if you need us.", whatHappensNext: "Nothing further is needed. Welcome to the other side." },
];

export default function WhereYouArePage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [currentStepKey, setCurrentStepKey] = useState<string | null>(null);
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
          setCurrentStepKey(data.case?.currentStep || "intake");
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

  const currentStep = STEPS.find((s) => s.key === currentStepKey) || STEPS[0];
  const stepIndex = STEPS.findIndex((s) => s.key === currentStepKey);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/yl-client-24.jpg"
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
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted-gold)]">Where You Are</span>
              <span className="flex-1 h-px bg-[var(--muted-gold)]/30" />
            </div>

            <h1 className="font-[family-name:var(--font-libre-baskerville)] text-2xl text-white mb-2">{currentStep.plainTitle}</h1>
            <p className="text-white/30 text-xs mb-8">Step {stepIndex + 1} of {STEPS.length}</p>

            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-4">
              <h2 className="text-sm font-semibold text-white mb-3">What&apos;s happening</h2>
              <p className="text-sm text-white/70 leading-relaxed">{currentStep.detailBody}</p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h2 className="text-sm font-semibold text-white mb-3">What happens next</h2>
              <p className="text-sm text-white/70 leading-relaxed italic text-[var(--muted-gold)]">{currentStep.whatHappensNext}</p>
            </div>

            <div className="mt-8 flex items-center gap-1.5 justify-center">
              {STEPS.map((s, i) => (
                <div key={s.key} className={`w-2 h-2 rounded-full transition-colors ${i < stepIndex ? "bg-[var(--muted-gold)]" : i === stepIndex ? "bg-[var(--affirmative-green)]" : "bg-white/15"}`} title={s.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Pulse />
    </>
  );
}
