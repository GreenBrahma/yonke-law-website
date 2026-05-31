import type { Metadata } from "next";
import Image from "next/image";
import { TestimonialForm } from "@/components/TestimonialForm";

export const metadata: Metadata = {
  title: "Leave a Recommendation — Share Your Experience | Yonke Law",
  description:
    "Rate your experience with Yonke Law. Leave a Google or Facebook recommendation and help others find the right team.",
  alternates: { canonical: "https://yonke.law/talk-to-us/recommendation/" },
};

export default function RecommendationPage() {
  return (
    <section className="bg-obsidian-graphite min-h-screen py-16 px-4 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-muted-gold mb-3">
            Share Your Experience
          </p>
          <h1 className="font-display text-3xl md:text-4xl text-chrome-highlight mb-4">
            Leave a recommendation
          </h1>
          <p className="text-steel-silver leading-relaxed max-w-lg mx-auto">
            Your words help the next person find the right team. Rate us,
            leave a note, and — if you&apos;re willing — share it so others
            know what to expect.
          </p>
        </div>

        <TestimonialForm />

        {/* Victory image */}
        <div className="mt-10 bg-charcoal-slate border border-steel-silver/10 rounded-xl overflow-hidden">
          <div className="relative aspect-[16/9]">
            <Image
              src="/images/yl-celebration.png"
              alt="Celebrating a successful case outcome"
              fill
              className="object-cover"
              sizes="(max-width: 672px) 100vw, 672px"
            />
          </div>
          <div className="p-6">
            <p className="font-display text-lg text-chrome-highlight mb-2">
              This is what victory looks like.
            </p>
            <p className="text-steel-silver text-sm leading-relaxed">
              Every case we take is a commitment to the person behind it.
              When we win, we celebrate — because the outcome means something
              real changed for someone who needed it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
