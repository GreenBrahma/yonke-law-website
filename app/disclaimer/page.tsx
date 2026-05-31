import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Yonke Law",
  description:
    "Legal disclaimer for Yonke Law LLC — important information about the use of this website and the attorney-client relationship.",
  alternates: { canonical: "https://yonke.law/disclaimer/" },
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-obsidian-graphite pt-16 pb-12 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-muted-gold mb-4">
            Legal
          </p>
          <h1 className="font-display text-4xl text-chrome-highlight mb-2">
            Disclaimer
          </h1>
          <p className="text-steel-silver/60 text-sm">
            Please read this disclaimer carefully before using this website.
          </p>
        </div>
      </section>

      <section className="bg-charcoal-slate py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Primary Disclaimer */}
          <div className="bg-obsidian-graphite border border-muted-gold/30 rounded-xl p-8">
            <h2 className="font-display text-xl text-chrome-highlight mb-4">
              Attorney Advertising &amp; No Attorney-Client Relationship
            </h2>
            <div className="text-steel-silver leading-relaxed space-y-4">
              <p>
                The choice of a lawyer is an important decision and should not be
                based solely upon advertisements. The use of this website does
                not create an attorney-client relationship. The information you
                obtain on this site is not, nor is it intended to be, legal
                advice. You should consult an attorney for advice regarding your
                individual situation. We invite you to contact us and welcome
                your calls, letters, and electronic mail. Contacting us does not
                create an attorney-client relationship. Please do not send any
                confidential information to us until an attorney-client
                relationship has been established.
              </p>
              <p>
                No attorney-client relationship whatsoever is or may be formed by
                any use of this website or its facilities, including, without
                limitation, through any communications sent through this website.
                The Yonke Law Firm does not perform legal services outside of any
                jurisdiction(s) where our attorneys are properly authorized to do
                so.
              </p>
            </div>
          </div>

          {/* Additional Terms */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              No Guarantee of Results
            </h2>
            <p className="text-steel-silver leading-relaxed">
              Every legal matter is unique. Past results do not guarantee a
              similar outcome in your case. Any testimonials, case results, or
              case studies presented on this website are not a guarantee,
              warranty, or prediction of the outcome of your legal matter. The
              facts and circumstances of each case differ, and every case must be
              evaluated on its own merits.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              Website Content
            </h2>
            <p className="text-steel-silver leading-relaxed">
              The content of this website is provided for general informational
              purposes only. It is not intended as a substitute for professional
              legal advice. Laws are constantly changing, and the information on
              this website may not reflect the most current legal developments.
              We make no representations or warranties regarding the accuracy,
              completeness, or timeliness of any information on this website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              Jurisdiction
            </h2>
            <p className="text-steel-silver leading-relaxed">
              Yonke Law, LLC is licensed to practice law in the State of Missouri
              and the State of Kansas. We do not seek to represent anyone in any
              jurisdiction where this website does not comply with applicable
              laws and bar rules. This website is not intended to solicit clients
              for matters outside of our jurisdictions of licensure.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              External Links
            </h2>
            <p className="text-steel-silver leading-relaxed">
              This website may contain links to external websites. These links
              are provided for convenience and informational purposes only. Yonke
              Law does not endorse, control, or assume responsibility for the
              content or practices of any linked third-party sites.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              Contact Us
            </h2>
            <p className="text-steel-silver leading-relaxed mb-4">
              If you have questions about this disclaimer, please contact our
              office:
            </p>
            <div className="bg-obsidian-graphite border border-steel-silver/10 rounded-lg p-5 text-sm text-steel-silver space-y-1">
              <p className="text-chrome-highlight font-semibold">Yonke Law, LLC</p>
              <p>700 West 47th Street, Suite 550</p>
              <p>Kansas City, MO 64112</p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+18162216400"
                  className="text-muted-gold hover:text-chrome-highlight transition-colors"
                >
                  816-221-6400
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:mike@yonke.law"
                  className="text-muted-gold hover:text-chrome-highlight transition-colors"
                >
                  mike@yonke.law
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
