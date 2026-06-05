import type { Metadata } from "next";
import Link from "next/link";

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
          Section 1 — Situation Grid (flush under nav)
          =========================================== */}
      <section
        id="situations"
        className="bg-charcoal-slate pt-12 pb-24 px-4 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="space-y-16">
            {CATEGORIES.map((category) => (
              <div key={category.title}>
                <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-6 border-b border-steel-silver/10 pb-4">
                  {category.title}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {category.topics.map((slug) => (
                    <Link
                      key={slug}
                      href={`/just-happened/${slug}`}
                      className="bg-obsidian-graphite p-6 rounded border border-steel-silver/10 hover:border-muted-gold transition-colors duration-200 group flex items-center justify-between"
                    >
                      <span className="font-display text-lg text-chrome-highlight group-hover:text-muted-gold transition-colors pr-4">
                        {TOPIC_LABELS[slug]}
                      </span>
                      <span
                        className="text-muted-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
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
              href="/"
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

          {/* TODO: Wire to /api/intake → Mike's MS365 (credentials held by Geoff).
              Endpoint is not yet wired. */}
          <form
            method="POST"
            action="/api/intake?topic=general"
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
                Briefly, what happened?{" "}
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
