import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Yonke Law LLC — how we collect, use, and protect your personal information when you visit yonke.law.",
  alternates: { canonical: "https://yonke.law/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-obsidian-graphite pt-16 pb-12 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-muted-gold mb-4">
            Legal
          </p>
          <h1 className="font-display text-4xl text-chrome-highlight mb-2">
            Privacy Policy
          </h1>
          <p className="text-steel-silver/60 text-sm">
            Effective Date: January 1, 2025 — Last Updated: May 31, 2026
          </p>
        </div>
      </section>

      <section className="bg-charcoal-slate py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl prose-sm text-steel-silver leading-relaxed space-y-8">
          {/* Introduction */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              Introduction
            </h2>
            <p>
              Yonke Law, LLC (&quot;Yonke Law,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website{" "}
              <span className="text-muted-gold">yonke.law</span> and any related
              services, including our People First portal. Please read this
              policy carefully. If you do not agree with the terms of this
              policy, please do not access the site.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              Information We Collect
            </h2>
            <h3 className="text-chrome-highlight font-semibold text-sm mb-2 mt-4">
              Personal Information You Provide
            </h3>
            <p className="mb-3">
              We may collect personal information that you voluntarily provide
              when you:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li>Submit a contact or consultation request form</li>
              <li>Send us an email or call our office</li>
              <li>Leave a testimonial or recommendation</li>
              <li>Download resources such as checklists or guides</li>
              <li>Subscribe to communications from our firm</li>
            </ul>
            <p className="mt-3">
              This information may include your name, email address, phone
              number, mailing address, case details, and any other information
              you choose to provide.
            </p>

            <h3 className="text-chrome-highlight font-semibold text-sm mb-2 mt-6">
              Information Collected Automatically
            </h3>
            <p>
              When you visit our website, we may automatically collect certain
              information about your device and usage, including:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm mt-2">
              <li>IP address and geographic location (city/state level)</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited, time spent, and referring URL</li>
              <li>Device identifiers</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              How We Use Your Information
            </h2>
            <p className="mb-3">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li>To respond to your inquiries and evaluate potential cases</li>
              <li>To provide legal services if an attorney-client relationship is established</li>
              <li>To communicate with you about your matter or our services</li>
              <li>To improve our website, services, and user experience</li>
              <li>To comply with legal obligations and professional rules of conduct</li>
              <li>To protect our rights and the safety of our users</li>
            </ul>
          </div>

          {/* Cookies and Tracking */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              Cookies and Tracking Technologies
            </h2>
            <p>
              We may use cookies, web beacons, and similar tracking technologies
              to collect information about your browsing activity. Cookies are
              small data files stored on your device. You can control cookies
              through your browser settings. Disabling cookies may affect your
              ability to use certain features of our website.
            </p>
            <p className="mt-3">
              We may use third-party analytics services (such as Google
              Analytics) that use cookies and similar technologies to collect and
              analyze information about the use of our website. These services
              may also collect information about your use of other websites, apps,
              and online resources.
            </p>
          </div>

          {/* Disclosure of Information */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              Disclosure of Your Information
            </h2>
            <p className="mb-3">
              We do not sell, trade, or rent your personal information. We may
              share information in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li>
                <span className="text-chrome-highlight font-semibold">With your consent</span> — when you have given us explicit permission
              </li>
              <li>
                <span className="text-chrome-highlight font-semibold">Service providers</span> — trusted third parties who assist us in operating our website, conducting our business, or servicing you (e.g., email delivery, hosting, analytics)
              </li>
              <li>
                <span className="text-chrome-highlight font-semibold">Legal requirements</span> — when required by law, regulation, legal process, or governmental request
              </li>
              <li>
                <span className="text-chrome-highlight font-semibold">Protection of rights</span> — when we believe disclosure is necessary to protect our rights, your safety, or the safety of others
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              Data Security
            </h2>
            <p>
              We use administrative, technical, and physical security measures to
              protect your personal information. While we strive to use
              commercially acceptable means to protect your data, no method of
              electronic transmission or storage is 100% secure. We cannot
              guarantee the absolute security of your information.
            </p>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as is
              necessary for the purposes set out in this Privacy Policy, or as
              required by law. When personal information is no longer needed, we
              will securely delete or anonymize it.
            </p>
            <p className="mt-3">
              For testimonial submissions: the email address you provide is used
              solely to notify you when your feedback is published. Once that
              notification is delivered, the email address is deleted and any
              uploaded files are erased.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              Your Rights
            </h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to opt out of certain data collection practices</li>
              <li>The right to withdraw consent where applicable</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:mike@yonke.law"
                className="text-muted-gold hover:text-chrome-highlight transition-colors"
              >
                mike@yonke.law
              </a>{" "}
              or call{" "}
              <a
                href="tel:+18162216400"
                className="text-muted-gold hover:text-chrome-highlight transition-colors"
              >
                816-221-6400
              </a>.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              Children&apos;s Privacy
            </h2>
            <p>
              Our website is not intended for individuals under the age of 18. We
              do not knowingly collect personal information from children. If you
              believe we have collected information from a minor, please contact
              us immediately so we can delete it.
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites or services
              that are not operated by us. We have no control over, and assume no
              responsibility for, the content, privacy policies, or practices of
              any third-party sites or services. We encourage you to review the
              privacy policy of every site you visit.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date. Your
              continued use of the website after any changes constitutes your
              acceptance of the updated policy.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              Contact Us
            </h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please
              contact us:
            </p>
            <div className="mt-3 bg-obsidian-graphite border border-steel-silver/10 rounded-lg p-5 text-sm space-y-1">
              <p className="text-chrome-highlight font-semibold">Yonke Law, LLC</p>
              <p>700 West 47th Street, Suite 550</p>
              <p>Kansas City, MO 64112</p>
              <p>
                Phone:{" "}
                <a href="tel:+18162216400" className="text-muted-gold hover:text-chrome-highlight transition-colors">
                  816-221-6400
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:mike@yonke.law" className="text-muted-gold hover:text-chrome-highlight transition-colors">
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
