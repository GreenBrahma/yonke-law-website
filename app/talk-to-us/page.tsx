import type { Metadata } from "next";
import Link from "next/link";
import { GoogleMap } from "@/components/GoogleMap";
import { PageHero } from "@/components/PageHero";
import { TalkToUsForm } from "@/components/TalkToUsForm";

export const metadata: Metadata = {
  title: "Talk to Us — Free Consultation | Yonke Law",
  description:
    "Contact Yonke Law for a free consultation. No fee unless we win. Personal injury, medical malpractice, and wrongful death attorneys in Kansas City, Missouri.",
  alternates: { canonical: "https://yonke.law/talk-to-us/" },
};

export default function TalkToUsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Ready when you are."
        subtitle="Free consultation. No commitment. We listen, ask questions, and give you a straight read on your situation."
        eyebrow="Talk to Us"
        imagePosition="center 25%"
        images={[
          "/images/Mike Yonke - with people.png"
        ]}
      />

      {/* Contact form + Office info */}
      <section className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl grid md:grid-cols-[1fr_380px] gap-12">
          {/* Form */}
          <div>
            <h2 className="font-display text-2xl text-chrome-highlight mb-8">
              Send us a message
            </h2>
            <TalkToUsForm />
          </div>

          {/* Office info sidebar */}
          <div className="space-y-8">
            <div className="bg-obsidian-graphite border border-steel-silver/10 rounded-lg p-8">
              <h3 className="text-chrome-highlight font-semibold text-lg mb-6">
                Office
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-muted-gold text-xs uppercase tracking-widest mb-1">Address</p>
                  <p className="text-chrome-highlight text-sm leading-relaxed">
                    700 West 47th Street<br />
                    Suite 550<br />
                    Kansas City, MO 64112
                  </p>
                </div>
                <div>
                  <p className="text-muted-gold text-xs uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+18162216400" className="text-chrome-highlight text-sm hover:text-muted-gold transition-colors">
                    816-221-6400
                  </a>
                </div>
                <div>
                  <p className="text-muted-gold text-xs uppercase tracking-widest mb-1">Hours</p>
                  <p className="text-steel-silver text-sm">
                    Monday – Friday<br />
                    9:00 AM – 5:00 PM
                  </p>
                </div>
                <div>
                  <p className="text-muted-gold text-xs uppercase tracking-widest mb-1">After Hours</p>
                  <p className="text-steel-silver text-sm">
                    Leave a message or use this form.<br />
                    We respond within one business day.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-obsidian-graphite border border-steel-silver/10 rounded-lg p-8">
              <h3 className="text-chrome-highlight font-semibold mb-3">No fee unless we recover.</h3>
              <p className="text-steel-silver text-sm leading-relaxed">
                Every case is handled on contingency. You pay nothing upfront and nothing out of pocket.
                If we don&apos;t win, you don&apos;t pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-obsidian-graphite py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl text-chrome-highlight mb-8 text-center">
            Find Us
          </h2>
          <GoogleMap />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-charcoal-slate py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-steel-silver mb-4">Prefer to call?</p>
          <a
            href="tel:8162216400"
            className="font-display text-3xl text-muted-gold hover:text-chrome-highlight transition-colors"
          >
            816-221-6400
          </a>
          <p className="text-steel-silver/60 text-sm mt-4">
            Every inquiry is reviewed personally by our team — not a call center.
          </p>
        </div>
      </section>
    </>
  );
}
