import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The People Portal — How We Stay Connected | Yonke Law",
  description:
    "The People Portal is how Yonke Law stays connected with the people we represent. Real-time check-ins, visibility, and communication — not silence.",
  alternates: { canonical: "https://yonke.law/people-first/people-portal/" },
};

export default function PeoplePortalPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <p className="text-sm uppercase tracking-widest text-steel-silver mb-4">
        The People Portal
      </p>
      <h1 className="font-display text-4xl font-bold text-chrome-highlight mb-6">
        Most law firms never ask how you&apos;re actually doing.
      </h1>
      <p className="text-lg text-steel-silver max-w-xl">
        Placeholder — People Portal preview + Mood Monitor demo.
      </p>
      {/* TODO: Build Mood Monitor interactive demo per homepage-spec.md Section 5 */}
    </div>
  );
}
