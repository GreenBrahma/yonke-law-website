import Link from "next/link";

export function GetStartedSection() {
  return (
    <section className="bg-obsidian-graphite py-16 md:py-24 px-4 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-chrome-highlight leading-[1.15] mb-6">
          Ready to see your own People First space?
        </h2>
        <p className="text-lg text-steel-silver leading-relaxed mb-10">
          Tell us what happened. If Yonke Law is the right fit, you will have a
          People First account before our first call ends.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/talk-to-us"
            className="inline-flex items-center justify-center px-8 py-4 bg-muted-gold text-obsidian-graphite font-semibold rounded hover:brightness-110 transition-all duration-200"
          >
            Start the Conversation
          </Link>
          <a
            href="tel:+18162216400"
            className="inline-flex items-center justify-center px-8 py-4 border border-steel-silver/30 text-chrome-highlight font-semibold rounded hover:bg-charcoal-slate transition-all duration-200"
          >
            Call 816-221-6400
          </a>
        </div>
      </div>
    </section>
  );
}
