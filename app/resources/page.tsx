import type { Metadata } from "next";
import Image from "next/image";
import { RESOURCES } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources — Checklists, Guides & Legal Reference | Yonke Law",
  description:
    "Download checklists for car accidents, truck accidents, medical malpractice, wrongful death, and more. Practical tools from Yonke Law in Kansas City.",
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

      {/* Universal Playbook video */}
      <section className="bg-charcoal-slate py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="bg-obsidian-graphite border border-muted-gold/30 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Video */}
              <div className="aspect-video md:aspect-auto md:min-h-[340px]">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                  poster=""
                >
                  <source
                    src="/videos/The_Universal_Playbook__Rules_of_Survival.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Context */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-widest text-muted-gold mb-3">
                  Watch First
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-4">
                  The Universal Playbook: Rules of Survival
                </h2>
                <div className="space-y-3 text-steel-silver leading-relaxed text-sm">
                  <p>
                    Before you open any checklist, watch this. These are the
                    rules that apply to every situation — car accident, medical
                    error, workplace injury, wrongful death. The fundamentals
                    don&apos;t change.
                  </p>
                  <p>
                    What to say. What not to say. Who to call. What to document.
                    How to protect yourself from the moment something goes wrong.
                  </p>
                  <p>
                    Once you know the playbook, the checklists below become
                    situation-specific action plans built on the same foundation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist cards grid */}
      <section className="bg-obsidian-graphite py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl text-chrome-highlight mb-3">
              Downloadable Checklists
            </h2>
            <p className="text-steel-silver max-w-xl mx-auto">
              Print them. Save them to your phone. Keep one in your car. Each
              checklist covers the steps that matter most for that situation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {RESOURCES.map((resource) => (
              <div
                key={resource.slug}
                className="bg-charcoal-slate border border-steel-silver/10 rounded-xl overflow-hidden hover:border-muted-gold/40 transition-colors duration-300 flex flex-col group"
              >
                {/* Thumbnail or branded placeholder */}
                {resource.thumbnailPath ? (
                  <div className="relative aspect-[3/4] max-h-[220px] bg-obsidian-graphite overflow-hidden">
                    <Image
                      src={resource.thumbnailPath}
                      alt={`${resource.title} — preview`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                ) : (
                  <div className="aspect-[3/4] max-h-[220px] bg-obsidian-graphite flex flex-col items-center justify-center p-6 border-b border-steel-silver/10">
                    <span className="text-4xl mb-3" aria-hidden="true">
                      📋
                    </span>
                    <p className="text-xs uppercase tracking-widest text-muted-gold text-center">
                      {resource.category || "Resource"}
                    </p>
                  </div>
                )}

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  {resource.category && (
                    <p className="text-[10px] uppercase tracking-widest text-muted-gold mb-1.5">
                      {resource.category}
                    </p>
                  )}
                  <h3 className="font-display text-lg text-chrome-highlight mb-2 group-hover:text-muted-gold transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-steel-silver text-sm leading-relaxed mb-5 flex-1">
                    {resource.description}
                  </p>

                  {/* Download + QR */}
                  <div className="flex items-end gap-4">
                    <a
                      href={resource.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-muted-gold text-obsidian-graphite font-semibold px-5 py-2.5 rounded text-sm hover:bg-muted-gold/90 transition-colors"
                    >
                      Download PDF ↓
                    </a>

                    {resource.qrCodePath && (
                      <div className="flex flex-col items-center gap-1">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={resource.qrCodePath}
                          alt={`QR code — ${resource.title}`}
                          width={56}
                          height={56}
                          className="rounded"
                        />
                        <p className="text-steel-silver text-[9px] text-center leading-tight">
                          Scan
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
      <section className="bg-charcoal-slate py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl text-chrome-highlight mb-8 text-center">
            More Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-obsidian-graphite border border-steel-silver/10 rounded-lg p-6">
              <h3 className="font-display text-lg text-chrome-highlight mb-2">
                Frequently Asked Questions
              </h3>
              <p className="text-steel-silver text-sm leading-relaxed mb-4">
                Common questions about the legal process, timelines, costs, and
                what to expect when you have a personal injury case.
              </p>
              <span className="text-muted-gold text-sm">Coming soon</span>
            </div>
            <div className="bg-obsidian-graphite border border-steel-silver/10 rounded-lg p-6">
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
