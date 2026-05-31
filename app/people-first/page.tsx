import type { Metadata } from "next";
import { HeroSection } from "@/components/people-first-page/HeroSection";
import { TheStanceSection } from "@/components/people-first-page/TheStanceSection";
import { TransparencyPromiseSection } from "@/components/people-first-page/TransparencyPromiseSection";
import { GetStartedSection } from "@/components/people-first-page/GetStartedSection";
import { WhatYouSeeSection } from "@/components/people-first-page/WhatYouSeeSection";
import { PeopleFirstActions } from "@/components/people-first-page/PeopleFirstActions";

export const metadata: Metadata = {
  title: "People First — How We Stay Connected | Yonke Law",
  description:
    "People First Portal is how Yonke Law stays connected with the people we represent. Every file, every meeting, every step — visible in real time. See it in action.",
  alternates: { canonical: "https://yonke.law/people-first/" },
};

export default function PeopleFirstPage() {
  return (
    <>
      {/* Section 4.1 — Hero */}
      <HeroSection />

      {/* Section 4.2 — The Stance */}
      <TheStanceSection />

      {/* Section 4.3 — What You See (panels overview) */}
      <WhatYouSeeSection />

      {/* Section 4.4 — Contact & Schedule */}
      <PeopleFirstActions />

      {/* Checklist download — starting-point resource */}
      <section className="bg-charcoal-slate py-12 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <a
            href="/resources/yl-personal-injury-checklist.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-obsidian-graphite border border-muted-gold/30 rounded-lg p-6 hover:border-muted-gold transition-colors duration-200 group"
          >
            <span className="text-3xl shrink-0" aria-hidden="true">📋</span>
            <div>
              <p className="text-chrome-highlight font-semibold group-hover:text-muted-gold transition-colors">
                Start with the Personal Injury Checklist
              </p>
              <p className="text-steel-silver text-sm">
                Essential steps to protect your health, your rights, and your claim — download, print, and keep.
              </p>
            </div>
            <span className="text-muted-gold ml-auto shrink-0" aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* Section 4.5 — Mood Monitor — Phase 5 */}

      {/* Section 4.6 — The Transparency Promise */}
      <TransparencyPromiseSection />

      {/* Section 4.7 — Get Started */}
      <GetStartedSection />
    </>
  );
}
