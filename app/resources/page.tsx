import type { Metadata } from "next";
import Image from "next/image";
import { RESOURCES } from "@/lib/resources";

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
        <div className="mx-auto max-w-5xl text-center">
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

      {/* Resource cards grid */}
      <section className="bg-charcoal-slate py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((resource) => (
              <div
                key={resource.slug}
                className="bg-obsidian-graphite border border-steel-silver/10 rounded-xl overflow-hidden hover:border-muted-gold/40 transition-colors duration-300 flex flex-col"
              >
                {/* Thumbnail */}
                {resource.thumbnailPath && (
                  <div className="relative aspect-[3/4] max-h-[280px] bg-charcoal-slate overflow-hidden">
                    <Image
                      src={resource.thumbnailPath}
                      alt={`${resource.title} — preview`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {resource.category && (
                    <p className="text-xs uppercase tracking-widest text-muted-gold mb-2">
                      {resource.category}
                    </p>
                  )}
                  <h2 className="font-display text-xl text-chrome-highlight mb-2">
                    {resource.title}
                  </h2>
                  <p className="text-steel-silver text-sm leading-relaxed mb-6 flex-1">
                    {resource.description}
                  </p>

                  {/* Download + QR row */}
                  <div className="flex items-end gap-5">
                    <a
                      href={resource.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-muted-gold text-obsidian-graphite font-semibold px-6 py-3 rounded text-sm hover:bg-muted-gold/90 transition-colors"
                    >
                      Download PDF ↓
                    </a>

                    {resource.qrCodePath && (
                      <div className="flex flex-col items-center gap-1">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={resource.qrCodePath}
                          alt={`QR code — scan to download ${resource.title}`}
                          width={80}
                          height={80}
                          className="rounded"
                        />
                        <p className="text-steel-silver text-[10px] text-center leading-tight max-w-[90px]">
                          Scan to save or share
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More resources coming */}
      <section className="bg-obsidian-graphite py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
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
