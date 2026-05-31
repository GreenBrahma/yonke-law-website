import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export function HeroSection() {
  return (
    <>
      <PageHero
        title="This is what it looks like to be seen."
        subtitle="Most law firms hand you a phone number and a folder. We hand you the whole machine — every file, every meeting, every step we are taking to prepare your case for trial. We call it People First."
        eyebrow="People First"
        images={[
          "/images/yl-client-19.jpg",
          "/images/yl-client-24.jpg",
          "/images/yl-client-25.jpg",
          "/images/yl-client-26.jpg"
        ]}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#interactive-demo"
            className="inline-flex items-center justify-center px-8 py-4 bg-muted-gold text-obsidian-graphite font-semibold rounded hover:brightness-110 transition-all duration-200"
          >
            Walk Through It
          </a>
          <Link
            href="/talk-to-us"
            className="inline-flex items-center justify-center px-8 py-4 border border-steel-silver/30 text-chrome-highlight font-semibold rounded hover:bg-charcoal-slate transition-all duration-200"
          >
            Talk to Us
          </Link>
        </div>
      </PageHero>

      {/* People First video */}
      <section className="bg-charcoal-slate py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-widest text-muted-gold mb-3">
              See It in Action
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight">
              This is what it looks like to be seen.
            </h2>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden border border-steel-silver/10">
            <video
              controls
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source
                src="/videos/YL_-_The_People_Portal_3 (1).mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
