import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ===========================================================
   /about — Michael T. Yonke
   Content sourced from yonke.law/michael-t-yonke
   Image: /images/Mike Yonke - Headshot Clean.jpg
   =========================================================== */

export const metadata: Metadata = {
  title: "About Michael T. Yonke — Founding Partner",
  description:
    "Michael T. Yonke is the founding partner of Yonke Law — a Kansas City trial attorney with over 25 years representing people injured through no fault of their own.",
  alternates: {
    canonical: "https://yonke.law/about",
  },
};

const PRACTICE_FOCUS = [
  "Personal Injury",
  "Medical Malpractice",
  "Wrongful Death",
  "Motor Vehicle Accidents",
  "Truck Accidents",
  "Workplace & Construction Injuries",
  "Premises Liability",
  "Nursing Home Abuse",
];

const CREDENTIALS = [
  "Best Lawyers in America® — listed since publication",
  "Martindale-Hubbell AV Rating — highest peer review rating",
  "Medical Malpractice Trial Lawyers — Top 25",
  "U.S. News Best Law Firms® — Tier 1 (2024–2025)",
  "Lawyers of Distinction — selected member",
  "Keenan Trial Institute — faculty member",
  "Avvo — top-rated attorney",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero with headshot */}
      <section className="relative bg-obsidian-graphite py-20 md:py-28 px-4 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Photo — left / top */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-72 h-96 md:w-full md:h-[480px] rounded-lg overflow-hidden border border-steel-silver/10">
              <Image
                src="/images/Mike Yonke - Headshot Clean.jpg"
                alt="Michael T. Yonke, founding partner of Yonke Law in Kansas City"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 288px, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-graphite/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Bio text — right */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-gold mb-4">
              Founding Partner
            </div>
            <h1
              className="font-display text-4xl md:text-5xl text-chrome-highlight leading-[1.15] mb-6"
              aria-label="Michael T. Yonke, attorney at Yonke, pronounced YONK-ee, Law"
            >
              Michael T. Yonke
            </h1>
            <p className="text-lg text-steel-silver leading-relaxed mb-6">
              Insurance companies, hospitals, and corporations have teams of
              lawyers working to protect their interests. So should you.
            </p>
            <p className="text-steel-silver leading-relaxed mb-6">
              Mike is the founding partner of Yonke Law and a trial attorney
              based in Kansas City, Missouri. Drawing on over 25 years of
              courtroom experience, he has dedicated his career to one clear
              mission: representing people harmed by others&apos; negligence with
              an uncompromising, client-centered approach.
            </p>
            <p className="text-steel-silver leading-relaxed mb-8">
              Mike was raised watching his father, Albert Yonke, build a
              distinguished legal advocacy legacy in Kansas City. He entered law
              practice in 1994, and in 2001, he founded Yonke Law to create a
              team aligned with his vision: that injured people deserve not just
              representation, but a steadfast attorney who will pursue the full
              compensation they are owed while treating them with dignity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+18162216400"
                className="inline-flex items-center justify-center bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded hover:bg-muted-gold/90 transition-colors"
              >
                Call 816-221-6400
              </a>
              <Link
                href="/talk-to-us"
                className="inline-flex items-center justify-center border border-steel-silver/30 text-chrome-highlight font-semibold px-8 py-4 rounded hover:bg-charcoal-slate transition-colors"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-8 text-center">
            High-stakes litigation. Personal commitment.
          </h2>
          <div className="space-y-6 text-steel-silver leading-relaxed">
            <p>
              A native of Kansas City and a graduate of UMKC Law, Mike brings
              relentless preparation to every case. The firm focuses exclusively
              on people who have been injured through no fault of their own —
              whether through motor vehicle or truck collisions, medical
              malpractice, wrongful death, or catastrophic workplace accidents.
            </p>
            <p>
              What sets Mike apart is the mindset: fierce advocacy combined with
              attentive, respectful client service. When the stakes are high, he
              believes every detail matters — from preserving evidence to
              crafting persuasive arguments in court.
            </p>
            <p>
              For Mike, each case is personal. When you choose Yonke Law, you
              choose a firm that views your story as the centerpiece. Mike&apos;s
              team will build your case, stand up to the insurance companies or
              corporations, and work toward the result you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Practice focus + credentials */}
      <section className="bg-obsidian-graphite py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-16">
          {/* Practice focus */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-6">
              Practice Focus
            </h2>
            <ul className="space-y-3">
              {PRACTICE_FOCUS.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 text-steel-silver"
                >
                  <span className="w-1.5 h-1.5 bg-muted-gold rounded-full shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Credentials */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-6">
              Recognition
            </h2>
            <ul className="space-y-3">
              {CREDENTIALS.map((cred) => (
                <li
                  key={cred}
                  className="flex items-start gap-3 text-steel-silver text-sm"
                >
                  <svg
                    className="w-4 h-4 text-muted-gold mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {cred}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.bestlawyers.com/lawyers/michael-t-mike-yonke/67207"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.bestlawyers.com/Logos/ListedLawyer/67207/US/32/O/Basic.png"
                  alt="Best Lawyers - Michael T. Yonke"
                  className="h-16 w-auto"
                />
              </a>
              <a
                href="https://www.bestlawyers.com/firms/yonke-law/39523/US"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.bestlawyers.com/Logos/ListedFirm/39523/US/32/O/Basic.png"
                  alt="Best Lawyers - Yonke Law Firm"
                  className="h-16 w-auto"
                />
              </a>
            </div>
            <Link
              href="/about/recognition"
              className="inline-block mt-6 text-muted-gold hover:text-chrome-highlight transition-colors text-sm"
            >
              See all recognition →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial pull quote */}
      <section className="bg-charcoal-slate py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="border-l-4 border-muted-gold pl-8">
            <div className="text-muted-gold text-4xl font-display mb-4">
              &ldquo;
            </div>
            <blockquote className="text-chrome-highlight text-lg leading-relaxed mb-4 font-display italic">
              Mike was masterful in handling my matter, and the final result
              exceeded my expectations. If you are looking for someone who will
              fight for you, Mike Yonke is who you need to contact. Mike and his
              staff made me feel like part of the family.
            </blockquote>
            <div className="text-muted-gold font-semibold">
              — Denise Hardy
            </div>
          </div>
          <div className="mt-6 text-right">
            <Link
              href="/about/testimonials"
              className="text-steel-silver hover:text-muted-gold transition-colors text-sm"
            >
              Read more testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian-graphite py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-chrome-highlight mb-6">
            Tell us what happened.
          </h2>
          <p className="text-steel-silver mb-8">
            Free consultation. No fee unless we recover for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8162216400"
              className="bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded hover:bg-muted-gold/90 transition-colors"
            >
              Call 816-221-6400
            </a>
            <Link
              href="/talk-to-us"
              className="text-steel-silver hover:text-chrome-highlight transition-colors underline-offset-4 hover:underline"
            >
              Or reach out online →
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Attorney",
            name: "Michael T. Yonke",
            jobTitle: "Founding Partner",
            worksFor: {
              "@type": "LegalService",
              name: "Yonke Law L.L.C.",
              url: "https://yonke.law",
              telephone: "+1-816-221-6400",
              address: {
                "@type": "PostalAddress",
                streetAddress: "700 West 47th Street, Suite 550",
                addressLocality: "Kansas City",
                addressRegion: "MO",
                postalCode: "64112",
              },
            },
            knowsAbout: [
              "Personal Injury Law",
              "Medical Malpractice",
              "Wrongful Death",
              "Trucking Accidents",
              "Missouri Law",
              "Kansas Law",
            ],
            alumniOf: "UMKC School of Law",
            award: [
              "Best Lawyers in America",
              "Martindale-Hubbell AV Rating",
              "U.S. News Best Law Firms Tier 1",
              "Medical Malpractice Trial Lawyers Top 25",
            ],
          }),
        }}
      />
    </>
  );
}
