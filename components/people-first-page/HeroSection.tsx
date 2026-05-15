import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export function HeroSection() {
  return (
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
  );
}
