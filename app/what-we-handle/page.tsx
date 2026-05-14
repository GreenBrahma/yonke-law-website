import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Handle — Practice Areas",
  description:
    "Yonke Law handles personal injury, medical malpractice, wrongful death, vehicle accidents, premises liability, and more in Kansas City.",
};

export default function WhatWeHandlePage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <p className="text-sm uppercase tracking-widest text-steel-silver mb-4">
        What We Handle
      </p>
      <h1 className="font-display text-4xl font-bold text-chrome-highlight mb-6">
        Where we focus. Where we know what to do.
      </h1>
      <p className="text-lg text-steel-silver max-w-xl">
        Placeholder — practice areas hub page.
      </p>
      {/* TODO: Build practice area grid per homepage-spec.md Section 6 */}
    </div>
  );
}
