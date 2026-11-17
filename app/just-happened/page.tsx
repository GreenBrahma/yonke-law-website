import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TalkToUsForm } from "@/components/TalkToUsForm";

const TOPIC_LABELS: Record<string, string> = {
  "car-accident": "Car Accident",
  "truck-accident": "Truck or Commercial Vehicle Crash",
  "motorcycle-accident": "Motorcycle Accident",
  "pedestrian-accident": "Pedestrian Accident",
  "bicycle-accident": "Bicycle Accident",
  "rideshare-accident": "Rideshare Accident",
  "defective-vehicle": "Defective Vehicle",
  "medical-malpractice": "Medical Malpractice",
  "surgical-error": "Surgical Error",
  "diagnostic-error": "Diagnostic Error",
  "medication-error": "Medication Error",
  "birth-injury": "Birth Injury",
  "traumatic-brain-injury": "Traumatic Brain Injury",
  "slip-and-fall": "Slip and Fall",
  "dog-bite": "Dog Bite",
  "product-recall": "Product Recall Injury",
  "workplace-injury": "Workplace Injury",
  "construction-injury": "Construction Injury",
  "wrongful-death": "Wrongful Death",
  "nursing-home-abuse": "Nursing Home Abuse",
  "sexual-abuse": "Sexual Abuse",
  "active-shooter": "Active Shooter Incident",
  "family-perspective": "When Someone You Love Was Hurt",
};

const CATEGORIES = [
  {
    title: "Motor vehicle",
    topics: [
      "car-accident",
      "truck-accident",
      "motorcycle-accident",
      "pedestrian-accident",
      "bicycle-accident",
      "rideshare-accident",
      "defective-vehicle",
    ],
  },
  {
    title: "Medical",
    topics: [
      "medical-malpractice",
      "surgical-error",
      "diagnostic-error",
      "medication-error",
      "birth-injury",
      "traumatic-brain-injury",
    ],
  },
  {
    title: "Premises and property",
    topics: ["slip-and-fall", "dog-bite", "product-recall"],
  },
  {
    title: "Workplace and industrial",
    topics: ["workplace-injury", "construction-injury"],
  },
  {
    title: "Loss and harm",
    topics: [
      "wrongful-death",
      "nursing-home-abuse",
      "sexual-abuse",
      "active-shooter",
    ],
  },
  {
    title: "When it happened to someone you love",
    topics: ["family-perspective"],
  },
];

export const metadata: Metadata = {
  title: "Something just happened — find your situation",
  description:
    "Calm, plain-English guidance on what to do after an incident. Find your path forward with Yonke Law.",
  alternates: {
    canonical: "https://yonke.law/just-happened",
  },
  openGraph: {
    title: "Something just happened — find your situation",
    description:
      "Calm, plain-English guidance on what to do after an incident. Find your path forward with Yonke Law.",
    url: "https://yonke.law/just-happened",
    type: "website",
  },
};

function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://yonke.law/just-happened/#collection",
    name: "Something just happened — find your situation",
    description:
      "Calm, plain-English guidance on what to do after an incident. Find your path forward with Yonke Law.",
    hasPart: Object.keys(TOPIC_LABELS).map((slug) => ({
      "@type": "WebPage",
      "@id": `https://yonke.law/just-happened/${slug}/`,
      url: `https://yonke.law/just-happened/${slug}/`,
      name: TOPIC_LABELS[slug],
    })),
  };
}

export default function JustHappenedHubPage() {
  const jsonLd = buildJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===========================================
          Section 1 — Situation Grid (visual view)
          One image card per situation. Each image carries its own
          title, so the card is the image; the link text for screen
          readers and search engines comes from the alt text and the
          visually hidden label.
          Images: public/images/just-happened/<slug>.webp (1120x630)
          =========================================== */}
      <section
        id="situations"
        className="bg-charcoal-slate pt-12 pb-24 px-4 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 max-w-3xl">
            <h1 className="font-display text-3xl md:text-5xl text-chrome-highlight leading-tight">
              Something just happened. Find your situation.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-steel-silver">
              Pick the picture closest to what happened. Each one opens
              plain-English guidance on what to do next.
            </p>
          </header>

          <div className="space-y-14">
            {CATEGORIES.map((category) => (
              <div key={category.title}>
                <h2 className="font-display text-xl md:text-2xl text-chrome-highlight mb-5 border-b border-steel-silver/10 pb-3">
                  {category.title}
                </h2>
                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {category.topics.map((slug) => (
                    <li key={slug}>
                      <Link
                        href={`/just-happened/${slug}`}
                        className="group relative block overflow-hidden rounded-lg border border-steel-silver/10 bg-obsidian-graphite transition-colors duration-200 hover:border-muted-gold focus-visible:border-muted-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted-gold"
                      >
                        <Image
                          src={`/images/just-happened/${slug}.webp`}
                          alt={TOPIC_LABELS[slug]}
                          width={1120}
                          height={630}
                          sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
                          className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                        <span className="sr-only">
                          {TOPIC_LABELS[slug]}: what to do next
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================================
          Section 3 — Not-sure fallback
          =========================================== */}
      <section className="bg-obsidian-graphite py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-chrome-highlight leading-tight mb-6">
            Not sure where your situation fits?
          </h2>
          <p className="text-steel-silver text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            You don&apos;t have to figure it out alone. You can tell us what
            happened in your own words, or just call us directly. We&apos;re here
            to help you find your bearings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#consultation"
              className="bg-charcoal-slate text-chrome-highlight border border-steel-silver/20 px-8 py-4 rounded hover:border-muted-gold transition-colors duration-200"
            >
              Describe it in your own words →
            </Link>
            <a
              href="tel:+18162216400"
              className="text-steel-silver hover:text-chrome-highlight transition-colors duration-200 underline-offset-4 hover:underline"
            >
              Call 816-221-6400
            </a>
          </div>
        </div>
      </section>

      {/* ===========================================
          Section 4 — Final CTA / Talk to Us
          =========================================== */}
      <section
        id="consultation"
        className="bg-charcoal-slate py-24 px-4 lg:px-8 scroll-mt-20"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-chrome-highlight leading-tight mb-4">
            Ready when you are.
          </h2>
          <p className="text-lg text-steel-silver mb-12">
            Free consultation. No fee unless we recover. We respond fast —
            usually same business day.
          </p>

          <div className="text-left">
            <TalkToUsForm source="Just Happened" />
          </div>

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
