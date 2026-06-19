import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ===========================================================
   /about/recognition — Awards, peer review, professional recognition
   Content sourced from yonke.law/best-lawyers and yonke.law/michael-t-yonke
   =========================================================== */

export const metadata: Metadata = {
  title: "Recognition — Awards and Peer Review",
  description:
    "Professional recognition for Yonke Law in Kansas City — Best Law Firms, Best Lawyers in America, Medical Malpractice Trial Lawyers Top 25, Martindale-Hubbell AV rated.",
  alternates: {
    canonical: "https://yonke.law/about/recognition",
  },
};

const AWARDS = [
  {
    title: "Best Law Firms®",
    organization: "U.S. News & World Report / Best Lawyers",
    year: "2024–2025",
    description:
      "Recognized through a rigorous, data-driven process combining confidential client feedback and peer evaluation from fellow legal professionals.",
    image: "/images/yl-best-law-firms.png",
    tier: "Tier 1",
  },
  {
    title: "Medical Malpractice Trial Lawyers — Top 25",
    organization: "Medical Malpractice Trial Lawyers Association",
    year: "Current Member",
    description:
      "Membership based on reputation among peers and the judiciary, achievements as a specialist in medical malpractice, and nominations from leading lawyers and Executive Committee members.",
    image: "/images/yl-top25-medmal-award.png",
    tier: null,
  },
  {
    title: "Best Lawyers in America®",
    organization: "Best Lawyers",
    year: "Listed Attorney",
    description:
      "Peer-reviewed recognition maintained for over 40 years. Mike Yonke is listed in Best Lawyers for his work in personal injury and medical malpractice litigation.",
    image: "https://www.bestlawyers.com/Logos/ListedLawyer/67207/US/32/O/Basic.png",
    tier: null,
    externalLink: "https://www.bestlawyers.com/lawyers/michael-t-mike-yonke/67207",
  },
  {
    title: "Best Lawyers — Listed Firm",
    organization: "Best Lawyers",
    year: "Yonke Law",
    description:
      "Yonke Law is recognized as a Best Lawyers listed firm — an independent, peer-reviewed distinction based on quality of practice and professional standing.",
    image: "https://www.bestlawyers.com/Logos/ListedFirm/39523/US/32/O/Basic.png",
    tier: null,
    externalLink: "https://www.bestlawyers.com/firms/yonke-law/39523/US",
  },
];

const CREDENTIALS = [
  {
    title: "Best Lawyers in America®",
    detail: "Listed since publication. Peer-reviewed recognition maintained for over 40 years using the same tried-and-tested process.",
  },
  {
    title: "Martindale-Hubbell AV Rating",
    detail: "The highest peer review rating for strong legal ability and high ethical standards — maintained for over 130 years of independent attorney evaluation.",
  },
  {
    title: "Avvo Rating",
    detail: "Top-rated on Avvo, the independent attorney rating platform founded on transparency and accessible legal information.",
  },
  {
    title: "Lawyers of Distinction",
    detail: "Selected member recognizing professional excellence in personal injury and medical malpractice litigation.",
  },
  {
    title: "Keenan Trial Institute — Faculty",
    detail: "Mike Yonke serves as faculty, training the next generation of trial attorneys in courtroom advocacy techniques.",
  },
  {
    title: "25+ Years of Trial Experience",
    detail: "Licensed since 1994. Founded Yonke Law in 2001. Exclusively representing people injured through no fault of their own.",
  },
];

export default function RecognitionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-obsidian-graphite py-24 px-4 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Mike Yonke - Headshot.png"
            alt=""
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-gold mb-6">
            Professional Recognition
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-chrome-highlight leading-[1.15] mb-6">
            Recognized by peers. Proven by results.
          </h1>
          <p className="text-lg md:text-xl text-steel-silver leading-relaxed max-w-2xl mx-auto">
            We don&apos;t chase awards. But we respect the ones that are earned through
            independent peer review, client feedback, and years of consistent results.
          </p>
        </div>
      </section>

      {/* Featured awards */}
      <section className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl text-chrome-highlight mb-12 text-center">
            Featured Recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {AWARDS.map((award) => {
              const isExternal = award.image.startsWith("http");
              const cardContent = (
                <>
                <div className="flex items-center justify-center py-10 bg-gradient-to-b from-charcoal-slate/50 to-obsidian-graphite">
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    {isExternal ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={award.image}
                        alt={award.title}
                        className="max-w-full max-h-full object-contain drop-shadow-lg"
                      />
                    ) : (
                      <Image
                        src={award.image}
                        alt={award.title}
                        fill
                        className="object-contain drop-shadow-lg"
                        sizes="160px"
                      />
                    )}
                  </div>
                </div>
                <div className="p-8">
                  {award.tier && (
                    <span className="inline-block bg-muted-gold/15 text-muted-gold text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                      {award.tier}
                    </span>
                  )}
                  <h3 className="font-display text-xl text-chrome-highlight mb-2">
                    {award.title}
                  </h3>
                  <p className="text-muted-gold text-sm font-semibold mb-3">
                    {award.organization} · {award.year}
                  </p>
                  <p className="text-steel-silver text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
                </>
              );

              return "externalLink" in award && award.externalLink ? (
                <a
                  key={award.title}
                  href={award.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-obsidian-graphite border border-muted-gold/20 rounded-lg overflow-hidden group hover:border-muted-gold/50 transition-colors duration-300"
                >
                  {cardContent}
                </a>
              ) : (
                <div
                  key={award.title}
                  className="bg-obsidian-graphite border border-muted-gold/20 rounded-lg overflow-hidden group hover:border-muted-gold/50 transition-colors duration-300"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials grid */}
      <section className="bg-obsidian-graphite py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl text-chrome-highlight mb-12 text-center">
            Credentials &amp; Affiliations
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.title}
                className="bg-charcoal-slate border border-steel-silver/10 rounded-lg p-8 hover:border-muted-gold/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 bg-muted-gold/10 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-muted-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-chrome-highlight font-semibold mb-2">
                  {cred.title}
                </h3>
                <p className="text-steel-silver text-sm leading-relaxed">
                  {cred.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-charcoal-slate py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="border-l-4 border-muted-gold pl-8">
            <p className="text-chrome-highlight text-lg leading-relaxed mb-4 font-display italic">
              &ldquo;We don&apos;t chase awards, but we deeply appreciate the ones that
              confirm our dedication to excellence. They reinforce our confidence that
              we are delivering the highest level of service to every person who
              entrusts us with their case.&rdquo;
            </p>
            <p className="text-muted-gold font-semibold">
              — Yonke Law, LLC
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian-graphite py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-chrome-highlight mb-6">
            Experience and recognition you can rely on.
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
