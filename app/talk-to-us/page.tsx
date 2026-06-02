import type { Metadata } from "next";
import Image from "next/image";
import { GoogleMap } from "@/components/GoogleMap";
import { TalkToUsForm } from "@/components/TalkToUsForm";
import { TestimonialForm } from "@/components/TestimonialForm";

export const metadata: Metadata = {
  title: "Talk to Us — Free Consultation & Testimonials | Yonke Law",
  description:
    "Contact Yonke Law for a free consultation or share your testimonial. No fee unless we win. Personal injury, medical malpractice, and wrongful death attorneys in Kansas City.",
  alternates: { canonical: "https://yonke.law/talk-to-us/" },
};

export default function TalkToUsPage() {
  return (
    <>
      {/* Hero — Mike in court */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <Image
          src="/images/yl-person-laptop-kc.png"
          alt="Person on their laptop browsing Facebook from a studio apartment overlooking downtown Kansas City"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-graphite via-obsidian-graphite/60 to-transparent" />
        <div className="relative z-10 w-full px-4 lg:px-8 pb-12 pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-widest text-muted-gold mb-4">
              Talk to Us
            </p>
            <p className="text-lg text-steel-silver max-w-2xl mx-auto leading-relaxed">
              It&apos;s free. There&apos;s no commitment. We listen and get busy
              on your behalf.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          Intent Block 1 — New case
          ───────────────────────────────────────────────────────── */}
      <section className="bg-obsidian-graphite py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-4">
            Something just happened?
          </h2>
          <p className="text-steel-silver leading-relaxed">
            You want to talk to a lawyer — and you&apos;re in the right place. Tell us
            what happened below and attach any documents you have. We&apos;ll review it
            and get back to you. If it&apos;s not something we can take on, we&apos;ll
            point you to someone who can. Either way, we won&apos;t leave you stranded.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          Intent Block 2 — Past person / testimonial jump
          ───────────────────────────────────────────────────────── */}
      <section className="bg-charcoal-slate py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-4">
            Already been through it with us?
          </h2>
          <p className="text-steel-silver leading-relaxed mb-4">
            You&apos;re out the other side, and the hardest part is behind you. We&apos;d
            love to hear how we did.
          </p>
          <a
            href="#testimonial"
            className="inline-flex items-center gap-1 text-muted-gold hover:text-chrome-highlight transition-colors font-semibold scroll-smooth"
          >
            Share your story →
          </a>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          Section 1: Free Review / Consultation + Send a Message
          ───────────────────────────────────────────────────────── */}
      <section id="consultation" className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-muted-gold mb-3">
              Free Review (Prior to Consultation*)
            </p>
            <div className="flex items-center justify-center gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/qr-send-message.png"
                alt="QR code — Send us a message"
                width={120}
                height={120}
                className="rounded"
              />
              <h2 className="font-display text-3xl md:text-4xl text-chrome-highlight">
                Send us a message
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_360px] gap-12">
            {/* Form */}
            <div>
              <TalkToUsForm />
            </div>

            {/* Mike sidebar */}
            <div className="space-y-6">
              {/* Mike headshot — fills full column */}
              <div className="bg-obsidian-graphite border border-steel-silver/10 rounded-xl overflow-hidden">
                <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/Mike Yonke - Headshot Clean.jpg"
                    alt="Mike Yonke — Yonke Law"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <div className="p-6">
                  <p className="text-chrome-highlight font-display text-lg mb-3">
                    A note from Mike
                  </p>
                  <div className="text-steel-silver text-sm leading-relaxed space-y-3">
                    <p>
                      Your message will be reviewed within the next 36 hours.
                      You&apos;ll receive a response letting you know that
                      counsel has agreed to a 30-minute video conference call.
                    </p>
                    <p>
                      You&apos;ll be able to pick a time from my calendar —
                      available slots are weekdays between{" "}
                      <span className="text-muted-gold font-semibold">
                        9:00 AM – 12:00 PM
                      </span>.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-steel-silver/10">
                    <p className="text-chrome-highlight font-semibold text-sm">
                      Mike Yonke
                    </p>
                    <p className="text-steel-silver/60 text-xs">
                      Founder &amp; Trial Attorney
                    </p>
                  </div>
                </div>
              </div>

              {/* Checklist download */}
              <div className="bg-obsidian-graphite border border-muted-gold/30 rounded-lg p-6">
                <h3 className="text-chrome-highlight font-semibold mb-3">
                  While you wait
                </h3>
                <p className="text-steel-silver text-sm leading-relaxed mb-4">
                  Download our Personal Injury Checklist — essential steps to
                  protect your health, your rights, and your claim.
                </p>
                <a
                  href="/resources/yl-personal-injury-checklist.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-gold hover:text-chrome-highlight transition-colors text-sm font-semibold"
                >
                  Get the checklist (PDF) ↓
                </a>
              </div>

              {/* No fee card */}
              <div className="bg-obsidian-graphite border border-steel-silver/10 rounded-lg p-6">
                <h3 className="text-chrome-highlight font-semibold mb-3">
                  No fee unless we recover.
                </h3>
                <p className="text-steel-silver text-sm leading-relaxed">
                  Every case is handled on contingency. You pay nothing upfront
                  and nothing out of pocket. If we don&apos;t win, you
                  don&apos;t pay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          Section 2: Testimonial / Recommendation
          ───────────────────────────────────────────────────────── */}
      <section id="testimonial" className="bg-obsidian-graphite py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-muted-gold mb-3">
              Share Your Experience
            </p>
            <div className="flex items-center justify-center gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/qr-leave-recommendation.png"
                alt="QR code — Leave a recommendation"
                width={120}
                height={120}
                className="rounded"
              />
              <h2 className="font-display text-3xl md:text-4xl text-chrome-highlight">
                Leave a recommendation
              </h2>
            </div>
            <p className="text-steel-silver max-w-xl mx-auto leading-relaxed mt-4">
              Your words help the next person find the right team. Rate us,
              leave a note, and — if you&apos;re willing — share it so others
              know what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_380px] gap-12">
            {/* Form */}
            <div>
              <TestimonialForm />
            </div>

            {/* Celebration image sidebar */}
            <div className="space-y-6">
              <div className="bg-charcoal-slate border border-steel-silver/10 rounded-xl overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/yl-celebration.png"
                    alt="Mike Yonke celebrating a successful case outcome with a client at an outdoor table — Congratulations cake on the table"
                    fill
                    className="object-cover"
                    sizes="380px"
                  />
                </div>
                <div className="p-6">
                  <p className="font-display text-lg text-chrome-highlight mb-2">
                    This is what victory looks like.
                  </p>
                  <p className="text-steel-silver text-sm leading-relaxed">
                    Every case we take is a commitment to the person behind it.
                    When we win, we celebrate — because the outcome means
                    something real changed for someone who needed it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-charcoal-slate py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl text-chrome-highlight mb-8 text-center">
            Find Us
          </h2>
          <GoogleMap />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-obsidian-graphite py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-steel-silver mb-4">Prefer to call?</p>
          <a
            href="tel:8162216400"
            className="font-display text-3xl text-muted-gold hover:text-chrome-highlight transition-colors"
          >
            816-221-6400
          </a>
          <p className="text-steel-silver/60 text-sm mt-4">
            Every inquiry is reviewed personally by our team — not a call
            center.
          </p>
        </div>
      </section>
    </>
  );
}
