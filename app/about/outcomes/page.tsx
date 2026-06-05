import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ===========================================================
   /about/outcomes — Case outcomes and results
   =========================================================== */

export const metadata: Metadata = {
  title: "Outcomes — Real Results for Real People",
  description:
    "Verified case outcomes from Yonke Law in Kansas City. Personal injury, medical malpractice, and wrongful death results that changed lives.",
  alternates: {
    canonical: "https://yonke.law/about/outcomes",
  },
};

const OUTCOMES = [
  {
    amount: "$14.5M",
    type: "Medical Malpractice",
    detail: "Hospital negligence resulting in catastrophic injury. Multi-year litigation against a major healthcare system.",
    highlight: true,
  },
  {
    amount: "$8.2M",
    type: "Wrongful Death",
    detail: "Fatal trucking accident caused by driver fatigue and inadequate corporate safety protocols.",
    highlight: true,
  },
  {
    amount: "$5.7M",
    type: "Medical Malpractice",
    detail: "Surgical error leading to permanent disability. Case resolved through trial verdict.",
    highlight: false,
  },
  {
    amount: "$4.1M",
    type: "Trucking Accident",
    detail: "Multi-vehicle commercial truck collision on I-70. Multiple defendants, including the carrier and maintenance contractor.",
    highlight: false,
  },
  {
    amount: "$3.8M",
    type: "Workplace Injury",
    detail: "Construction site accident caused by defective equipment and inadequate safety oversight.",
    highlight: false,
  },
  {
    amount: "$2.9M",
    type: "Motor Vehicle Accident",
    detail: "Intersection collision caused by a distracted driver. Client required multiple reconstructive surgeries.",
    highlight: false,
  },
  {
    amount: "$2.4M",
    type: "Premises Liability",
    detail: "Dangerous property condition leading to severe fall injuries. Property owner failed to address known hazards.",
    highlight: false,
  },
  {
    amount: "$1.8M",
    type: "Nursing Home Negligence",
    detail: "Pattern of neglect at a long-term care facility resulting in preventable harm to a vulnerable resident.",
    highlight: false,
  },
];

export default function OutcomesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-obsidian-graphite py-24 px-4 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/yl-client-24.jpg"
            alt=""
            fill
            className="object-cover opacity-15"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-gold mb-6">
            Case Outcomes
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-chrome-highlight leading-[1.15] mb-6">
            Results that changed lives.
          </h1>
          <p className="text-lg md:text-xl text-steel-silver leading-relaxed max-w-2xl mx-auto">
            Every number here represents a person who was hurt, a family that was
            disrupted, and a fight that was worth having. These outcomes reflect
            cases resolved through settlement, mediation, or trial.
          </p>
        </div>
      </section>

      {/* Featured outcomes */}
      <section className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {OUTCOMES.filter((o) => o.highlight).map((outcome) => (
              <div
                key={outcome.amount}
                className="relative bg-obsidian-graphite border border-muted-gold/30 rounded-lg p-10 text-center group hover:border-muted-gold/60 transition-colors duration-300"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-muted-gold text-obsidian-graphite text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Featured
                </div>
                <div className="font-display text-5xl md:text-6xl text-muted-gold mb-4 mt-4">
                  {outcome.amount}
                </div>
                <div className="text-chrome-highlight font-semibold text-lg mb-3">
                  {outcome.type}
                </div>
                <p className="text-steel-silver text-sm leading-relaxed">
                  {outcome.detail}
                </p>
              </div>
            ))}
          </div>

          {/* All outcomes grid */}
          <h2 className="font-display text-2xl text-chrome-highlight mb-8 text-center">
            Additional Case Outcomes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OUTCOMES.filter((o) => !o.highlight).map((outcome) => (
              <div
                key={outcome.amount}
                className="bg-obsidian-graphite border border-steel-silver/10 rounded-lg p-8 hover:border-steel-silver/30 transition-colors duration-300"
              >
                <div className="font-display text-3xl text-muted-gold mb-3">
                  {outcome.amount}
                </div>
                <div className="text-chrome-highlight font-semibold mb-2">
                  {outcome.type}
                </div>
                <p className="text-steel-silver text-sm leading-relaxed">
                  {outcome.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer callout */}
      <section className="bg-obsidian-graphite py-12 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="border border-steel-silver/20 rounded-lg p-8 text-center">
            <p className="text-steel-silver text-sm leading-relaxed">
              <strong className="text-chrome-highlight">Important:</strong> Every case is different. Past results do not guarantee a similar
              outcome in future cases. The outcomes listed above are representative of
              cases handled by Yonke Law and are presented for informational purposes only.
              Specific dollar amounts are subject to confidentiality agreements where applicable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-chrome-highlight mb-6">
            Your situation deserves the same focus.
          </h2>
          <p className="text-steel-silver mb-8">
            Free consultation. No fee unless we recover.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8162216400"
              className="bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded hover:bg-muted-gold/90 transition-colors duration-200"
            >
              Call 816-221-6400
            </a>
            <Link
              href="/talk-to-us"
              className="text-steel-silver hover:text-chrome-highlight transition-colors duration-200 underline-offset-4 hover:underline"
            >
              Or reach out online →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
