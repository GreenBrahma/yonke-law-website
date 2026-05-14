import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Michael T. Yonke & Team",
  description:
    "Meet Michael T. Yonke and the Yonke Law team. Kansas City personal injury, medical malpractice, and wrongful death attorneys since 1994.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <p className="text-sm uppercase tracking-widest text-steel-silver mb-4">
        About
      </p>
      <h1 className="font-display text-4xl font-bold text-chrome-highlight mb-6">
        Why we do this.
      </h1>
      <p className="text-lg text-steel-silver max-w-xl">
        Placeholder — Mike, team, outcomes, testimonials, recognition.
      </p>
      {/* TODO: Build about page with Mike's section per homepage-spec.md Section 8 */}
    </div>
  );
}
