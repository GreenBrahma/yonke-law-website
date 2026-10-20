import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Yonke Law LLC, including the terms of our customer care SMS text messaging program.",
  alternates: { canonical: "https://yonke.law/terms-and-conditions" },
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-obsidian-graphite pt-16 pb-12 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-muted-gold mb-4">
            Legal
          </p>
          <h1 className="font-display text-4xl text-chrome-highlight mb-2">
            Terms of Service
          </h1>
          <p className="text-steel-silver/60 text-sm">
            Last Updated: October 20, 2026
          </p>
        </div>
      </section>

      <section className="bg-charcoal-slate py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl prose-sm text-steel-silver leading-relaxed space-y-8">
          {/* SMS / Text Messaging Program */}
          <div id="sms">
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              SMS Text Messaging Program
            </h2>
            <div className="space-y-4">
              <p>
                <span className="text-chrome-highlight font-semibold">Program description:</span>{" "}
                Yonke Law, LLC may send text messages to individuals who provide
                their mobile phone number and opt in through a form on our
                website or otherwise give us express consent. Messages are
                customer care communications about your inquiry, consultation,
                or legal matter. They may include appointment scheduling and
                reminders, requests for information or documents, and case
                updates.
              </p>
              <p>
                <span className="text-chrome-highlight font-semibold">Message frequency:</span>{" "}
                Message frequency varies depending on your inquiry or matter.
              </p>
              <p>
                <span className="text-chrome-highlight font-semibold">Cost:</span>{" "}
                Message and data rates may apply. Contact your wireless carrier
                for details about your plan.
              </p>
              <p>
                <span className="text-chrome-highlight font-semibold">Opting out:</span>{" "}
                You can cancel at any time by replying STOP to any message from
                us. You&rsquo;ll get one final message confirming you&rsquo;ve
                been unsubscribed, and after that you won&rsquo;t receive more
                texts unless you opt in again.
              </p>
              <p>
                <span className="text-chrome-highlight font-semibold">Help:</span>{" "}
                Reply HELP to any message for assistance, or contact us at{" "}
                <a href="tel:+18162216400" className="text-muted-gold hover:text-chrome-highlight transition-colors">
                  816-221-6400
                </a>{" "}
                or{" "}
                <a href="mailto:mike@yonke.law" className="text-muted-gold hover:text-chrome-highlight transition-colors">
                  mike@yonke.law
                </a>
                .
              </p>
              <p>
                <span className="text-chrome-highlight font-semibold">Consent is not required:</span>{" "}
                Agreeing to receive text messages is not a condition of hiring
                our firm or using our services.
              </p>
              <p>
                <span className="text-chrome-highlight font-semibold">Carriers:</span>{" "}
                Wireless carriers are not liable for delayed or undelivered
                messages.
              </p>
              <p>
                <span className="text-chrome-highlight font-semibold">Privacy:</span>{" "}
                We will not share mobile phone numbers or SMS opt-in consent with
                third parties or affiliates for marketing or promotional
                purposes. For more about how we handle your information, see our{" "}
                <a href="/privacy-policy" className="text-muted-gold hover:text-chrome-highlight transition-colors">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-display text-xl text-chrome-highlight mb-3">
              Contact Us
            </h2>
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
