import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources — Checklists, FAQ & Legal Reference",
  description:
    "Checklists, frequently asked questions, and jurisdiction-specific legal reference for Missouri and Kansas. From Yonke Law.",
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <p className="text-sm uppercase tracking-widest text-steel-silver mb-4">
        Resources
      </p>
      <h1 className="font-display text-4xl font-bold text-chrome-highlight mb-6">
        Practical tools. Straight answers.
      </h1>
      <p className="text-lg text-steel-silver max-w-xl">
        Placeholder — checklists, FAQ, and jurisdiction reference.
      </p>
      {/* TODO: Build resource hub with checklists, FAQ section, MO/KS law reference */}
    </div>
  );
}
