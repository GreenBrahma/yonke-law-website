import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ConciergeHero } from "@/components/ConciergeHero";
import { MoodMonitor } from "@/components/MoodMonitor";
import { YouTubeFacade } from "@/components/YouTubeFacade";

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
              title="What Is a Personal Injury Case?"
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
          Section 4 — What You See Inside People First
          =========================================== */}
      <section className="bg-obsidian-graphite py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl text-chrome-highlight leading-tight">
              What You See Inside People First
            </h2>
            <p className="mt-4 text-lg text-steel-silver max-w-2xl mx-auto">
              Three panels — with these types of activities in an easy to use
              interface — we strive for total transparency.
            </p>
          </div>

          {/* People First portal image — constrained to 70% for clarity */}
          <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-steel-silver/10">
            <Image
              src="/images/yl-people-first-portal.jpg"
              alt="People First portal — Journal, Messages, Calendar &amp; Events, Roadmap to Justice, Documents, and Well-Being Check"
              width={1400}
              height={2400}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/people-first"
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
          {/* Section banner image */}
          <div className="relative w-full aspect-[21/9] mb-16 rounded overflow-hidden border border-steel-silver/10">
            <Image
              src="/images/yl-where-we-focus.jpg"
              alt="People gathered together reviewing legal documents — the moment when understanding begins."
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-graphite via-obsidian-graphite/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
              <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
                What we handle
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-chrome-highlight leading-tight">
                Where we focus. Where we know what to do.
              </h2>
            </div>
          </div>

          {/* Featured: Deposition prep — doorway to /how-to-prepare-for-a-deposition.
              Embedded by single video ID (never a playlist) via a click-to-load
              facade so no YouTube requests fire until the visitor presses play.
              Layout: desktop = video left, text + button right;
                      mobile  = text, video, button (stacked). */}
          <div className="mb-8">
            <div className="bg-charcoal-slate rounded-xl border border-muted-gold/30 overflow-hidden">
              <div className="grid gap-8 p-8 md:grid-cols-[minmax(0,300px)_1fr] md:gap-12 md:p-10 md:items-center">
                {/* Text */}
                <div className="order-1 md:col-start-2 md:row-start-1 md:self-end">
                  <p className="text-xs uppercase tracking-widest text-muted-gold mb-3">
                    Deposition Prep
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-4">
                    Got a deposition coming up? Start here.
                  </h3>
                  <p className="text-steel-silver leading-relaxed">
                    A deposition can feel intimidating. Mike walks you through
                    exactly what to expect, the four rules to follow, and the
                    answers that protect your case.
                  </p>
                </div>

                {/* Video (vertical Short) */}
                <figure className="order-2 mx-auto w-full max-w-[300px] md:col-start-1 md:row-start-1 md:row-span-2">
                  <YouTubeFacade
                    videoId="q-_tGOFkYjs"
                    title="How to prepare for your deposition"
                    alt="Mike explains how to prepare for your deposition."
                    orientation="vertical"
                    className="border border-steel-silver/10"
                  />
                  <figcaption className="mt-2 text-xs text-steel-silver/80 text-center">
                    Dramatization. Actors portray people in this video.
                  </figcaption>
                </figure>

                {/* Button */}
                <div className="order-3 md:col-start-2 md:row-start-2 md:self-start">
                  <Link
                    href="/how-to-prepare-for-a-deposition"
                    className="inline-flex items-center gap-2 rounded bg-muted-gold px-6 py-3 font-semibold text-obsidian-graphite hover:bg-muted-gold/90 transition-colors duration-200"
                  >
                    Read the full deposition guide <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
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
          <div className="md:col-span-2 aspect-[4/5] bg-obsidian-graphite border border-steel-silver/20 rounded overflow-hidden relative">
            <Image
              src="/images/Mike Yonke - Headshot Clean.jpg"
              alt="Michael T. Yonke — founding partner of Yonke Law in Kansas City"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
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
              Per AGENTS.md, this is the People First account creation
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
