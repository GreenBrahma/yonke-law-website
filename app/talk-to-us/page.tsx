import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talk to Us — Free Consultation",
  description:
    "Contact Yonke Law for a free consultation. No fee unless we win. Personal injury, medical malpractice, and wrongful death attorneys in Kansas City.",
};

export default function TalkToUsPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <p className="text-sm uppercase tracking-widest text-steel-silver mb-4">
        Talk to Us
      </p>
      <h1 className="font-display text-4xl font-bold text-chrome-highlight mb-6">
        Ready when you are.
      </h1>
      <p className="text-lg text-steel-silver max-w-xl">
        Placeholder — contact form + digital intake.
      </p>
      {/* TODO: Build contact form per homepage-spec.md Section 10.
          Form submission routes to Mike's MS365 email.
          Integration point: People Portal digital intake (not yet built). */}
    </div>
  );
}
