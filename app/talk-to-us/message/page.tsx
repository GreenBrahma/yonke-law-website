import type { Metadata } from "next";
import { TalkToUsForm } from "@/components/TalkToUsForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Send Us a Message — Free Review",
  description:
    "Contact Yonke Law for a free case review. Your message will be reviewed within 36 hours.",
  alternates: { canonical: "https://yonke.law/talk-to-us/message" },
};

export default function MessagePage() {
  return (
    <section className="bg-charcoal-slate min-h-screen py-16 px-4 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-muted-gold mb-3">
            Free Review (Prior to Consultation*)
          </p>
          <h1 className="font-display text-3xl md:text-4xl text-chrome-highlight mb-4">
            Send us a message
          </h1>
          <p className="text-steel-silver leading-relaxed max-w-lg mx-auto">
            It&apos;s free. There&apos;s no commitment. We listen and get busy
            on your behalf.
          </p>
        </div>

        <TalkToUsForm />

        {/* Mike note */}
        <div className="mt-10 bg-obsidian-graphite border border-steel-silver/10 rounded-xl p-6 flex gap-5 items-start">
          <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-muted-gold/30">
            <Image
              src="/images/Mike Yonke - Headshot Clean.jpg"
              alt="Mike Yonke"
              fill
              className="object-cover object-top"
              sizes="64px"
            />
          </div>
          <div className="text-steel-silver text-sm leading-relaxed">
            <p className="text-chrome-highlight font-semibold mb-1">
              A note from Mike
            </p>
            <p>
              Your message will be reviewed within the next 36 hours.
              You&apos;ll receive a response letting you know that counsel has
              agreed to a 30-minute video conference call — weekdays between{" "}
              <span className="text-muted-gold font-semibold">
                9:00 AM – 12:00 PM
              </span>.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-steel-silver/50 text-xs">
            No fee unless we recover. Every case is handled on contingency.
          </p>
        </div>
      </div>
    </section>
  );
}
