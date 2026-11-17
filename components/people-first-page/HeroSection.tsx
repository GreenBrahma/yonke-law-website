import Link from "next/link";
import { PageHero } from "@/components/PageHero";

// People First explainer video (self-hosted).
const PEOPLE_FIRST_VIDEO = {
  src: "/media/people-first/people-first-portal.mp4",
  poster: "/media/people-first/people-first-portal-poster.jpg",
};

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

      {/* People First video. Self-hosted (public/media/people-first; public/videos is git-ignored) because the
          original YouTube video was removed from YouTube. The file is
          compressed to stay under Cloudflare's 25 MB static-asset limit. */}
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
          <div className="aspect-video rounded-xl overflow-hidden border border-steel-silver/10 bg-obsidian-graphite">
            <video
              controls
              preload="none"
              playsInline
              poster={PEOPLE_FIRST_VIDEO.poster}
              aria-label="People First: what to expect"
              className="w-full h-full"
            >
              <source src={PEOPLE_FIRST_VIDEO.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
