import type { Metadata } from "next";
import { HeroSection } from "@/components/people-first-page/HeroSection";
import { TheStanceSection } from "@/components/people-first-page/TheStanceSection";
import { TransparencyPromiseSection } from "@/components/people-first-page/TransparencyPromiseSection";
import { GetStartedSection } from "@/components/people-first-page/GetStartedSection";
import { WhatYouSeeSection } from "@/components/people-first-page/WhatYouSeeSection";

export const metadata: Metadata = {
  title: "People First Portal — How We Stay Connected | Yonke Law",
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

      {/* Section 4.4 — Interactive Demo — Phase 4 */}
      <section id="interactive-demo" className="bg-obsidian-graphite py-20 px-4 lg:px-8 border-y border-steel-silver/10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-4">
            Walk Through It
          </h2>
          <p className="text-lg text-muted-gold mb-6 font-medium">
            A simulated walkthrough of the People First Portal is under construction.
          </p>
          <p className="text-steel-silver leading-relaxed">
            When it goes live, you will be able to click through each panel exactly as a person we represent would see it. Until then, the panel descriptions above show you what is inside.
          </p>
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
