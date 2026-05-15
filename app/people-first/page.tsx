import type { Metadata } from "next";
import { HeroSection } from "@/components/people-first-page/HeroSection";
import { TheStanceSection } from "@/components/people-first-page/TheStanceSection";
import { TransparencyPromiseSection } from "@/components/people-first-page/TransparencyPromiseSection";
import { GetStartedSection } from "@/components/people-first-page/GetStartedSection";
import { WhatYouSeeSection } from "@/components/people-first-page/WhatYouSeeSection";

export const metadata: Metadata = {
  title: "People First — How We Stay Connected | Yonke Law",
  description:
    "People First is how Yonke Law stays connected with the people we represent. Every file, every meeting, every step — visible in real time. See it in action.",
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

      {/* Section 4.5 — Mood Monitor — Phase 5 */}

      {/* Section 4.6 — The Transparency Promise */}
      <TransparencyPromiseSection />

      {/* Section 4.7 — Get Started */}
      <GetStartedSection />
    </>
  );
}
