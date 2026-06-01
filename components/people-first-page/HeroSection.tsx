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
      />


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
            <iframe
              src="https://www.youtube.com/embed/sLcrjRp8qPc?rel=0"
              title="People First — What to Expect"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
