import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources — Checklists, FAQ & Legal Reference | Yonke Law",
  description:
    "Download the Personal Injury Checklist and other practical tools from Yonke Law. Checklists, FAQs, and legal reference for Missouri and Kansas.",
  alternates: { canonical: "https://yonke.law/resources/" },
};

export default function ResourcesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-obsidian-graphite pt-16 pb-12 px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-widest text-muted-gold mb-4">
            Resources
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-chrome-highlight mb-6">
            Practical tools. Straight answers.
          </h1>
          <p className="text-lg text-steel-silver max-w-2xl mx-auto leading-relaxed">
            Checklists, guides, and reference materials to help you understand
            what to do after an injury. Download, print, and keep.
          </p>
        </div>
      </section>

      {/* Featured: Personal Injury Checklist */}
      <section className="bg-charcoal-slate py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-obsidian-graphite border border-muted-gold/30 rounded-xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="text-5xl shrink-0" aria-hidden="true">📋</div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-muted-gold mb-2">
                  Featured Download
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-3">
                  Personal Injury Checklist
                </h2>
                <p className="text-steel-silver leading-relaxed mb-6">
                  Essential steps to protect your health, your rights, and your
                  claim in Missouri and Kansas. Covers what to do at the scene,
                  how to document everything, when to seek medical care, and the
                  deadlines that matter. Print it. Keep it in your car.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex flex-col gap-4">
                    <a
                      href="/resources/yl-personal-injury-checklist.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded hover:bg-muted-gold/90 transition-colors"
                    >
                      Download Checklist (PDF) ↓
                    </a>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/pi-checklist-qr.png"
                      alt="QR code — scan to download or share the Personal Injury Checklist"
                      width={120}
                      height={120}
                      className="rounded"
                    />
                    <p className="text-steel-silver text-xs text-center max-w-[140px]">
                      Scan to download or text it to someone
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More resources coming */}
      <section className="bg-obsidian-graphite py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl text-chrome-highlight mb-8 text-center">
            More Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-charcoal-slate border border-steel-silver/10 rounded-lg p-6">
              <h3 className="font-display text-lg text-chrome-highlight mb-2">
                Frequently Asked Questions
              </h3>
              <p className="text-steel-silver text-sm leading-relaxed mb-4">
                Common questions about the legal process, timelines, costs, and
                what to expect when you have a personal injury case.
              </p>
              <span className="text-muted-gold text-sm">Coming soon</span>
            </div>
            <div className="bg-charcoal-slate border border-steel-silver/10 rounded-lg p-6">
              <h3 className="font-display text-lg text-chrome-highlight mb-2">
                Missouri & Kansas Legal Reference
              </h3>
              <p className="text-steel-silver text-sm leading-relaxed mb-4">
                Statute of limitations, comparative fault rules, and
                jurisdiction-specific guidance for cases in MO and KS.
              </p>
              <span className="text-muted-gold text-sm">Coming soon</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
