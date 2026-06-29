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

      {/* Top 100 Lawyers Magazine — Spring 2026 Feature */}
      <section className="bg-obsidian-graphite py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-[320px_1fr] gap-12 items-start">
            {/* Magazine cover */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-full max-w-[300px] aspect-[3/4] rounded-lg overflow-hidden border border-muted-gold/30 shadow-lg shadow-muted-gold/10 bg-gradient-to-b from-[#1a3a2a] via-[#1a3a2a] to-[#0f2218] flex flex-col items-center justify-between p-8 text-center">
                <div>
                  <p className="text-chrome-highlight/80 text-[10px] uppercase tracking-[0.3em] mb-1">top100lawyers.com</p>
                  <h3 className="font-display text-chrome-highlight text-2xl leading-tight mb-1">
                    Top <span className="text-muted-gold text-3xl font-bold">100</span> Lawyers
                  </h3>
                  <p className="text-chrome-highlight/60 text-[10px] uppercase tracking-[0.2em]">Spring 2026</p>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-gold text-[9px] uppercase tracking-[0.2em]">2026 Lifetime Achievement Recipients</p>
                  <p className="text-muted-gold text-[9px] uppercase tracking-[0.2em]">America&apos;s Most Influential Attorneys</p>
                  <p className="text-chrome-highlight text-sm font-bold">Fearless 50 in Law</p>
                </div>
                <div className="border-t border-muted-gold/30 pt-4 w-full">
                  <p className="text-chrome-highlight font-display text-lg">Michael T. Yonke</p>
                  <p className="text-chrome-highlight/60 text-xs">Yonke Law, LLC — Kansas City</p>
                </div>
              </div>
              <a
                href="/resources/Top 100.pdf"
                download
                className="inline-flex items-center gap-2 bg-muted-gold text-obsidian-graphite font-semibold px-6 py-3 rounded hover:bg-muted-gold/90 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download the Full Article (PDF)
              </a>
            </div>

            {/* Article content */}
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-gold mb-4">
                Spring 2026
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight leading-[1.15] mb-6">
                Michael T. Yonke Featured in Top 100 Lawyers Magazine
              </h2>
              <div className="space-y-5 text-steel-silver leading-relaxed">
                <p>
                  Yonke Law founding attorney Michael T. Yonke has been featured in the Spring 2026 edition of{" "}
                  <em>Top 100 Lawyers</em>, a national publication profiling distinguished attorneys across the United States.
                </p>
                <p>
                  The feature traces Mike&apos;s path from the University of Missouri–Columbia, where he earned his Bachelor of Arts in political science and psychology in 1990, through the University of Missouri–Kansas City School of Law, where he was a member of the National Trial Advocacy Team. It follows his early courtroom experience at the Jackson County Prosecutor&apos;s Office — including work on first-degree murder and sexual assault prosecutions — through his time at his father&apos;s law firm and the founding of Yonke Law, LLC.
                </p>

                <h3 className="font-display text-lg text-chrome-highlight pt-2">
                  Practice and Recognition
                </h3>
                <p>
                  The profile highlights Mike&apos;s focus on personal injury and medical malpractice litigation, and his record of representation against powerful institutions in high-stakes matters. He is licensed to practice before the U.S. District Court for the District of Kansas and the U.S. District Court for the Western District of Missouri.
                </p>
                <p>Ongoing recognition referenced in the feature includes:</p>
                <ul className="list-none space-y-2 pl-1">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-muted-gold rounded-full shrink-0" />
                    Best Lawyers in America
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-muted-gold rounded-full shrink-0" />
                    Best of the Bar, Kansas City Business Journal
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-muted-gold rounded-full shrink-0" />
                    Missouri &amp; Kansas Super Lawyer
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-muted-gold rounded-full shrink-0" />
                    AV Preeminent Peer Review Rating, Martindale-Hubbell
                  </li>
                </ul>

                <h3 className="font-display text-lg text-chrome-highlight pt-2">
                  Contributions to the Legal Community
                </h3>
                <p>
                  The article notes Mike&apos;s active roles with the American Association for Justice and the Missouri Association of Trial Attorneys, where he serves on the Board of Governors. He has also lectured on medical malpractice for the Kansas City Metropolitan Bar Association and published legal scholarship — including{" "}
                  <em>High Stacked Merchandise – A Hazard in the Courtroom</em> (2006).
                </p>
                <p>
                  His philanthropic work includes founding the Derick Thomas Neil Smith Law Foundation, which supports local youth and creates opportunities for the next generation.
                </p>

                <h3 className="font-display text-lg text-chrome-highlight pt-2">
                  Beyond the Courtroom
                </h3>
                <p>
                  The feature closes on something the firm has always carried with it: outcomes in the courtroom matter, but so does the work that doesn&apos;t get reported. Mike coaches basketball and mentors young athletes — the same commitment he brings to the people he represents.
                </p>

                <div className="border-t border-steel-silver/10 pt-5 mt-6">
                  <p className="text-sm text-steel-silver/70">
                    <strong className="text-steel-silver">About Top 100 Lawyers:</strong>{" "}
                    <em>Top 100 Lawyers</em> is a national legal publication that profiles distinguished attorneys across the United States. The Spring 2026 edition spotlights lifetime achievement honorees, America&apos;s Most Influential Attorneys, and the publication&apos;s &ldquo;Fearless 50 in Law.&rdquo;{" "}
                    More at{" "}
                    <a
                      href="https://top100lawyers.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-gold hover:text-chrome-highlight transition-colors underline underline-offset-2"
                    >
                      top100lawyers.com
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
