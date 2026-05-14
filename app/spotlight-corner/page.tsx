import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spotlight Corner — Kansas City Legal Analysis",
  description:
    "Real-time analysis from Yonke Law on local cases, regulation changes, and what they mean for people in Kansas City.",
};

export default function SpotlightCornerPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <p className="text-sm uppercase tracking-widest text-steel-silver mb-4">
        Spotlight Corner
      </p>
      <h1 className="font-display text-4xl font-bold text-chrome-highlight mb-6">
        What&apos;s happening in Kansas City that matters.
      </h1>
      <p className="text-lg text-steel-silver max-w-xl">
        Placeholder — static content until Legal Pulse ships.
      </p>
      {/* TODO: Integration point — Legal Pulse content feed.
          Until Legal Pulse is built, this page shows static placeholder content.
          Content requires Mike's approval before going live. */}
    </div>
  );
}
