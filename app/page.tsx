import type { Metadata } from "next";
import Link from "next/link";
import { ConciergeHero } from "@/components/ConciergeHero";
import { MoodMonitor } from "@/components/MoodMonitor";

/* -------------------------------------------------------
   Yonke Law — Homepage
   Per /specs/homepage-spec.md and AGENTS.md

   Page structure (server component):
     - Metadata override
     - JSON-LD structured data (AEO requirement)
     - Section 2:   Hero (ConciergeHero — client component)
     - Section 3:   Non-mill promise
     - Section 4:   How It Works preview (7 phases)
     - Section 5:   Mood Monitor demo (MoodMonitor — client component)
     - Section 6:   What We Handle (practice areas grid)
     - Section 7:   Mike (compact intro)
     - Section 8:   Testimonials (restrained)
     - Section 10:  Final CTA / Talk to Us

   TopNav and Footer are rendered by app/layout.tsx — not here.
   ------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Help for people hurt by someone else's negligence",
  description:
    "Yonke Law represents people hurt by someone else's negligence — personal injury, medical malpractice, and wrongful death cases in Kansas City and across Missouri and Kansas.",
  alternates: {
    canonical: "https://yonke.law/",
  },
  openGraph: {
    title: "Yonke Law — Help for people hurt by someone else's negligence",
    description:
      "Clarity, strategy, and steady representation for people navigating a difficult legal moment.",
    url: "https://yonke.law/",
    type: "website",
  },
};

/* -------------------------------------------------------
   JSON-LD structured data (AEO requirement, per spec §5)
   ------------------------------------------------------- */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://yonke.law/#legalservice",
      name: "Yonke Law, LLC",
      alternateName: "Yonke Law",
      url: "https://yonke.law/",
      telephone: "+1-816-221-6400",
      email: "mike@yonke.law",
      areaServed: [
        { "@type": "State", name: "Missouri" },
        { "@type": "State", name: "Kansas" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "700 West 47th Street, Suite 550",
        addressLocality: "Kansas City",
        addressRegion: "MO",
        postalCode: "64112",
        addressCountry: "US",
      },
      description:
        "Yonke Law represents people hurt by someone else's negligence — personal injury, medical malpractice, and wrongful death cases in Kansas City and the surrounding region.",
      priceRange: "Contingency basis — no fee unless we recover",
      makesOffer: {
        "@type": "Offer",
        name: "Free initial consultation",
      },
    },
    {
      "@type": "Attorney",
      "@id": "https://yonke.law/#mike-yonke",
      name: "Michael T. Yonke",
      givenName: "Michael",
      familyName: "Yonke",
      jobTitle: "Founding Attorney",
      worksFor: { "@id": "https://yonke.law/#legalservice" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Missouri-Kansas City School of Law",
      },
      knowsAbout: [
        "Personal injury law",
        "Medical malpractice",
        "Wrongful death",
        "Trucking and commercial vehicle accidents",
        "Catastrophic injury",
      ],
      memberOf: [
        { "@type": "Organization", name: "Keenan Trial Institute (Faculty)" },
        { "@type": "Organization", name: "Missouri Association of Trial Attorneys" },
        { "@type": "Organization", name: "American Association for Justice" },
      ],
    },
    {
      "@type": "Place",
      "@id": "https://yonke.law/#place",
      name: "Yonke Law office",
      address: {
        "@type": "PostalAddress",
        streetAddress: "700 West 47th Street, Suite 550",
        addressLocality: "Kansas City",
        addressRegion: "MO",
        postalCode: "64112",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 39.0431,
        longitude: -94.5917,
      },
    },
  ],
};

/* -------------------------------------------------------
   Static content (kept inline so the server-rendered HTML
   is fully populated for LLM crawlers — doctrine §AEO)
   ------------------------------------------------------- */

const PRACTICE_AREAS = [
  {
    slug: "car-accidents",
    label: "Car accidents",
    blurb:
      "Crashes on Missouri and Kansas roads — including catastrophic injuries and uninsured drivers.",
  },
  {
    slug: "truck-accidents",
    label: "Truck accidents",
    blurb:
      "Commercial vehicle crashes. Different rules, different defendants, different stakes.",
  },
  {
    slug: "medical-malpractice",
    label: "Medical malpractice",
    blurb:
      "Preventable harm from hospitals, surgeons, doctors, and other healthcare providers.",
  },
  {
    slug: "wrongful-death",
    label: "Wrongful death",
    blurb:
      "Representation for families after a loss caused by someone else's negligence.",
  },
  {
    slug: "nursing-home-abuse",
    label: "Nursing home abuse",
    blurb:
      "Neglect, mistreatment, and preventable injuries in long-term care facilities.",
  },
  {
    slug: "workplace-injuries",
    label: "Workplace injuries",
    blurb:
      "Construction, industrial, and on-the-job injuries — including claims beyond workers' comp.",
  },
  {
    slug: "motorcycle-accidents",
    label: "Motorcycle accidents",
    blurb:
      "Riders face specific biases at the negotiating table. We know how to push back.",
  },
  {
    slug: "premises-liability",
    label: "Premises liability",
    blurb:
      "Falls, hazards, and injuries on property owned or controlled by someone else.",
  },
  {
    slug: "product-liability",
    label: "Product liability",
    blurb: "Defective vehicles, devices, and consumer products.",
  },
  {
    slug: "pedestrian-bicycle",
    label: "Pedestrian & bicycle",
    blurb:
      "Vulnerable road users hit by drivers. Liability questions are often complex.",
  },
] as const;

const SEVEN_PHASES = [
  {
    num: "01",
    name: "Incident & Aftermath",
    blurb: "Scene safety, evidence preservation, early guidance.",
  },
  {
    num: "02",
    name: "Medical Treatment",
    blurb: "Continuity of care, documentation of impact.",
  },
  {
    num: "03",
    name: "Investigation",
    blurb: "Communication shifts to us. You focus on recovery.",
  },
  {
    num: "04",
    name: "Valuing the Claim",
    blurb: "Economic and non-economic damages, fully accounted for.",
  },
  {
    num: "05",
    name: "Negotiation",
    blurb: "Demand package, disciplined offer evaluation.",
  },
  {
    num: "06",
    name: "Litigation",
    blurb:
      "Filings, discovery, depositions — explained clearly at every step.",
  },
  {
    num: "07",
    name: "Resolution",
    blurb: "Settlement, mediation, or trial. Your decision, our preparation.",
  },
] as const;

const TESTIMONIALS = [
  {
    quote:
      "I am a Kansas City Missouri Police officer who was injured in a car accident while on routine patrol. I was very delighted by the urgency, vigor and efficiency of my attorney Mike Yonke. He got the 'ball rolling' right away. He was always there when I had any questions, went to every courtroom with me, and always had words of encouragement.",
    attribution: "KCMO Police Officer",
  },
  {
    quote:
      "Your dedication to learning and understanding the very difficult medical information made it hard to know who had more expertise, you or the experts. That along with your knowledge of the law made for confidence that my family needed.",
    attribution: "Family of a medical malpractice client",
  },
  {
    quote:
      "Mike is one of the best trial attorneys in town. He's handled some of the biggest cases and unfailingly delivers tremendous results for his clients.",
    attribution: "Fellow trial attorney",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===========================================
          Section 2 — Hero (Concierge interface)
          =========================================== */}
      <ConciergeHero />

      {/* ===========================================
          Video — Personal Injury overview
          =========================================== */}
      <section className="bg-charcoal-slate py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="aspect-video rounded overflow-hidden border border-steel-silver/10">
            <iframe
              src="https://www.youtube.com/embed/wWMcW4GFbmk?rel=0"
              title="What Is a Personal Injury Case? | Yonke Law"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <p className="text-sm text-steel-silver mt-4 text-center">
            What Is a Personal Injury Case? — explained in plain English.
          </p>
        </div>
      </section>

      {/* ===========================================
          Section 3 — The Non-Mill Promise
          =========================================== */}
      <section className="bg-charcoal-slate py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-chrome-highlight leading-tight mb-8">
            We don&apos;t operate like a mill.
          </h2>
          <div className="space-y-4 text-lg text-steel-silver">
            <p>
              Most personal injury firms optimize for speed and settlement. We
              optimize for outcome.
            </p>
            <p>
              That means full preparation on every case worth taking — and the
              willingness to go to verdict when settling short would
              shortchange the person.
            </p>
            <p>
              No reflexive settlements. No silence between updates. No fee-grab
              tactics.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3 text-left">
            <div className="border-l-2 border-muted-gold pl-4">
              <div className="text-xs uppercase tracking-wider text-steel-silver mb-2">
                Most firms
              </div>
              <div className="text-chrome-highlight">Optimize for speed</div>
              <div className="text-xs uppercase tracking-wider text-steel-silver mt-3 mb-2">
                Yonke Law
              </div>
              <div className="text-chrome-highlight">
                Optimize for rightful outcome
              </div>
            </div>
            <div className="border-l-2 border-muted-gold pl-4">
              <div className="text-xs uppercase tracking-wider text-steel-silver mb-2">
                Most firms
              </div>
              <div className="text-chrome-highlight">
                Treat silence as normal
              </div>
              <div className="text-xs uppercase tracking-wider text-steel-silver mt-3 mb-2">
                Yonke Law
              </div>
              <div className="text-chrome-highlight">
                Treat communication as part of representation
              </div>
            </div>
            <div className="border-l-2 border-muted-gold pl-4">
              <div className="text-xs uppercase tracking-wider text-steel-silver mb-2">
                Most firms
              </div>
              <div className="text-chrome-highlight">
                Design firm-first processes
              </div>
              <div className="text-xs uppercase tracking-wider text-steel-silver mt-3 mb-2">
                Yonke Law
              </div>
              <div className="text-chrome-highlight">
                Design person-first experiences
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================
          Section 4 — How It Works preview
          =========================================== */}
      <section className="bg-obsidian-graphite py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
              How it works
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-chrome-highlight leading-tight">
              The path, in plain English.
            </h2>
            <p className="mt-4 text-lg text-steel-silver max-w-2xl mx-auto">
              Seven phases. Every case follows this shape in some form. We
              explain where you are at every step.
            </p>
          </div>

          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {SEVEN_PHASES.map((phase) => (
              <li
                key={phase.num}
                className="bg-charcoal-slate p-6 rounded border border-steel-silver/10"
              >
                <div className="font-display text-3xl text-muted-gold mb-2">
                  {phase.num}
                </div>
                <div className="font-display text-xl text-chrome-highlight mb-2">
                  {phase.name}
                </div>
                <p className="text-sm text-steel-silver leading-relaxed">
                  {phase.blurb}
                </p>
              </li>
            ))}
          </ol>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-chrome-highlight hover:text-muted-gold transition-colors duration-200"
            >
              See the full process <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===========================================
          Section 5 — Mood Monitor demo
          =========================================== */}
      <MoodMonitor />

      {/* ===========================================
          Section 6 — What We Handle (Practice Areas)
          =========================================== */}
      <section className="bg-obsidian-graphite py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
              What we handle
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-chrome-highlight leading-tight">
              Where we focus. Where we know what to do.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PRACTICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/what-we-handle/${area.slug}`}
                className="bg-charcoal-slate p-6 rounded border border-steel-silver/10 hover:border-muted-gold transition-colors duration-200 group"
              >
                <h3 className="font-display text-xl text-chrome-highlight mb-2 group-hover:text-muted-gold transition-colors duration-200">
                  {area.label}
                </h3>
                <p className="text-sm text-steel-silver leading-relaxed">
                  {area.blurb}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================================
          Section 7 — Mike (compact intro)
          =========================================== */}
      <section className="bg-charcoal-slate py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 aspect-[4/5] bg-obsidian-graphite border border-steel-silver/20 rounded flex items-center justify-center">
            {/* TODO: Replace with Mike's portrait — YONKE-MIKE-PORTRAIT-02 from Drive folder ID 1Sea3j5hCkU8xQLcVNqYjYMj8bjPj57XI */}
            <span className="text-steel-silver/40 text-sm">
              [ Mike portrait ]
            </span>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
                Who you&apos;ll work with
              </div>
              <h2 className="font-display text-4xl text-chrome-highlight leading-tight">
                Michael T. Yonke
              </h2>
              <p className="text-steel-silver mt-2">
                Founding attorney. Trial-prepared. AV Preeminent rated.
              </p>
            </div>

            <div className="space-y-4 text-steel-silver leading-relaxed">
              <p>
                Mike has been practicing law since 1994 and founded Yonke Law
                in 2001. He grew up in his father&apos;s Kansas City injury
                practice and learned trial work as a craft, not a sales
                process.
              </p>
              <p>
                He serves as faculty at the Keenan Trial Institute, training
                trial attorneys across the country. He has been recognized by
                Best Lawyers in America, Super Lawyers, and the Nation&apos;s
                Top One Percent. The recognition matters less than the work it
                represents.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-chrome-highlight hover:text-muted-gold transition-colors duration-200"
            >
              More about Mike and the team{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===========================================
          Section 8 — Testimonials (restrained)
          =========================================== */}
      <section className="bg-obsidian-graphite py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
              In their words
            </div>
            <h2 className="font-display text-3xl text-chrome-highlight leading-tight">
              People we&apos;ve represented.
            </h2>
          </div>

          <div className="space-y-12">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={i}
                className="border-l-2 border-muted-gold pl-6"
              >
                <blockquote className="text-lg text-chrome-highlight leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="text-sm text-steel-silver mt-3">
                  — {t.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================================
          Section 10 — Final CTA / Talk to Us
          =========================================== */}
      <section className="bg-charcoal-slate py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-chrome-highlight leading-tight mb-4">
            Ready when you are.
          </h2>
          <p className="text-lg text-steel-silver mb-12">
            Free consultation. No fee unless we recover. We respond fast —
            usually same business day.
          </p>

          {/* TODO: Wire form submission to /api/intake → Mike's MS365.
              Per AGENTS.md, this is the People Portal account creation
              fallback until the Portal is live. */}
          <form
            method="POST"
            action="/api/intake"
            className="space-y-4 text-left"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first"
                  className="block text-sm text-steel-silver mb-2"
                >
                  First name
                </label>
                <input
                  id="first"
                  name="first"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="w-full bg-obsidian-graphite border border-steel-silver/30 rounded px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold"
                />
              </div>
              <div>
                <label
                  htmlFor="last"
                  className="block text-sm text-steel-silver mb-2"
                >
                  Last name
                </label>
                <input
                  id="last"
                  name="last"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="w-full bg-obsidian-graphite border border-steel-silver/30 rounded px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm text-steel-silver mb-2"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="w-full bg-obsidian-graphite border border-steel-silver/30 rounded px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-steel-silver mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full bg-obsidian-graphite border border-steel-silver/30 rounded px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm text-steel-silver mb-2"
              >
                Brief description{" "}
                <span className="text-steel-silver/60">(optional)</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full bg-obsidian-graphite border border-steel-silver/30 rounded px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-muted-gold text-obsidian-graphite font-semibold py-4 rounded hover:bg-muted-gold/90 transition-colors duration-200"
            >
              Start the Conversation
            </button>
          </form>

          <div className="mt-12 space-y-2 text-steel-silver">
            <p>
              Or call{" "}
              <a
                href="tel:+18162216400"
                className="text-chrome-highlight hover:text-muted-gold transition-colors"
              >
                816-221-6400
              </a>
            </p>
            <p className="text-sm">
              700 West 47th Street, Suite 550 · Kansas City, MO 64112
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
