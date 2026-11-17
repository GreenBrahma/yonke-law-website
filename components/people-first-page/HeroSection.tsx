import Link from "next/link";
import { PageHero } from "@/components/PageHero";

// YouTube ID of the People First explainer. null = section hidden.
const PEOPLE_FIRST_VIDEO_ID: string | null = null;

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

      {/* Portal sign-in doorway. The separate "People First Login" nav item
          was removed in the Nov 2026 nav redesign; this page is now the one
          place people reach the portal from. Interim strip until the
          People First page redesign places the sign-in panel beside the
          explanation. */}
      <section className="bg-obsidian-graphite border-b border-steel-silver/10 py-5 px-4 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">
          <p className="text-sm text-steel-silver">
            Already working with Yonke Law?
          </p>
          <Link
            href="/people-first-login"
            className="rounded border border-muted-gold px-4 py-1.5 text-sm font-semibold text-muted-gold hover:bg-muted-gold hover:text-obsidian-graphite transition-colors duration-200"
          >
            Sign in to People First
          </Link>
        </div>
      </section>

      {/* People First video.
          The original YouTube video (sLcrjRp8qPc) was removed from YouTube
          and there is no People First video on the @YonkeLaw channel as of
          Nov 2026, so the section is hidden instead of showing a dead
          player. Set PEOPLE_FIRST_VIDEO_ID to the new YouTube ID to bring
          it back. */}
      {PEOPLE_FIRST_VIDEO_ID && (
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
              src={`https://www.youtube.com/embed/${PEOPLE_FIRST_VIDEO_ID}?rel=0`}
              title="People First — What to Expect"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
      )}
    </>
  );
}
