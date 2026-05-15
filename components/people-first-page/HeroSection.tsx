import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-obsidian-graphite py-16 md:py-24 px-4 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Copy — left column */}
        <div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-chrome-highlight leading-[1.15] mb-6">
            This is what it looks like to be seen.
          </h1>
          <p className="text-lg md:text-xl text-steel-silver leading-relaxed mb-10">
            Most law firms hand you a phone number and a folder. We hand you the
            whole machine — every file, every meeting, every step we are taking
            to prepare your case for trial. We call it People First.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
        </div>

        {/* Visual — right column */}
        <div className="relative aspect-[4/5] md:aspect-[3/4] rounded overflow-hidden">
          <Image
            src="/images/Yonke Law LLC Personal Injury.png"
            alt="Yonke Law LLC — personal injury attorneys in Kansas City"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
