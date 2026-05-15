import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "People First — The Process | Yonke Law",
  description:
    "How a personal injury case moves from incident to resolution. Process transparency from Yonke Law in Kansas City.",
  alternates: { canonical: "https://yonke.law/people-first/" },
};

export default function PeopleFirstPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <p className="text-sm uppercase tracking-widest text-steel-silver mb-4">
        People First
      </p>
      <h1 className="font-display text-4xl font-bold text-chrome-highlight mb-6">
        The process, in plain English.
      </h1>
      <p className="text-lg text-steel-silver max-w-xl">
        Placeholder — process transparency + People Portal preview.
      </p>
      {/* TODO: Build 7-phase timeline per homepage-spec.md Section 4 */}
    </div>
  );
}
