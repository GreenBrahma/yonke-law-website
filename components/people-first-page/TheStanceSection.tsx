import Image from "next/image";

export function TheStanceSection() {
  return (
    <section className="bg-charcoal-slate py-16 md:py-24 px-4 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Visual — left column */}
        <div className="relative aspect-[16/10] rounded overflow-hidden order-2 md:order-1">
          <Image
            src="/images/Mike Yonke - with people.png"
            alt="Mike Yonke preparing a case with a person he represents"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Copy — right column */}
        <div className="order-1 md:order-2">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-chrome-highlight leading-[1.15] mb-8">
            We build every case as if it is going to trial.
          </h2>
          <p className="text-lg text-steel-silver leading-relaxed">
            Insurance companies count on the fact that most personal injury
            attorneys settle. We don&apos;t. From the day you sign with Yonke
            Law, we prepare your file, your evidence, your witnesses, and your
            timeline as if a jury is going to hear it. That changes what an
            insurer offers. It changes what you walk away with. And it changes
            what you should expect from your attorney — which is why we built
            People First.
          </p>
        </div>
      </div>
    </section>
  );
}
