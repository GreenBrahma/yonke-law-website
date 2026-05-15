"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* -------------------------------------------------------
   ConciergeHero — Section 2 of homepage-spec.md

   Behavior:
   1. Full-viewport dark hero with the concierge text input
   2. Background images cycle every 6s (crossfade)
   3. Placeholder rotates every ~4.5s to help cold-start users
   4. On submit:
       - Client-side keyword classification → topic ID
       - Reveal the four-panel response below the input
       - Preserve the user's typed text above the panels
   5. Empty submit → show the four quick-pick doors prominently
   6. Quick-pick doors are always visible as a fallback

   The classifier is a temporary client-side keyword match.
   When the Nucleus Concierge backend ships, swap classifyTopic()
   for an API call. Visual / UX layer does not change.
   ------------------------------------------------------- */

const HERO_IMAGES = [
  "/images/YL client 1.png",
  "/images/YL client 2.png",
  "/images/yl-client-3.png",
  "/images/yl-client-4.png",
  "/images/YL client 5.png",
  "/images/YL client 6.png",
  "/images/YL client 7.png",
  "/images/YL client 8.png",
  "/images/YL-client-10.png",
  "/images/YL client 11.png",
  "/images/YL client 12.png",
  "/images/YL client 13.png",
  "/images/YL client 14.png",
  "/images/yl-client-19.jpg",
  "/images/yl-client21.png",
  "/images/yl-client-22.png",
  "/images/yl-client-23.png",
  "/images/yl-client-24.jpg",
  "/images/yl-client-25.jpg",
  "/images/yl-client-26.jpg",
  "/images/Mike Yonke - with client.png",
] as const;

type TopicId =
  | "car-accident"
  | "truck-accident"
  | "medical-error"
  | "wrongful-death"
  | "nursing-home"
  | "slip-and-fall"
  | "motorcycle"
  | "have-offer"
  | "researching"
  | "general";

const PLACEHOLDER_EXAMPLES = [
  "I was rear-ended on Ward Parkway yesterday…",
  "My dad fell in a nursing home and broke his hip…",
  "I got a settlement offer from State Farm and I'm not sure it's fair…",
  "I'm just researching — not sure if I need a lawyer…",
  "What happened to me at the hospital was preventable…",
] as const;

const TOPIC_KEYWORDS: Record<Exclude<TopicId, "general">, string[]> = {
  "car-accident": [
    "car",
    "rear-ended",
    "rear ended",
    "t-boned",
    "tboned",
    "fender bender",
    "totaled",
    "crash",
    "collision",
    "wreck",
  ],
  "truck-accident": [
    "truck",
    "semi",
    "18-wheeler",
    "big rig",
    "commercial truck",
    "tractor trailer",
    "fedex",
    "ups",
  ],
  "medical-error": [
    "hospital",
    "doctor",
    "surgery",
    "misdiagnosis",
    "malpractice",
    "wrong medication",
    "medical",
    "surgeon",
    "er ",
    "emergency room",
  ],
  "wrongful-death": [
    "died",
    "killed",
    "passed away",
    "lost my husband",
    "lost my wife",
    "lost my child",
    "lost my mother",
    "lost my father",
    "wrongful death",
  ],
  "nursing-home": [
    "nursing home",
    "assisted living",
    "elder",
    "facility",
    "mom in",
    "dad in",
    "memory care",
  ],
  "slip-and-fall": [
    "fell",
    "slip",
    "slipped",
    "store",
    "warehouse",
    "premises",
    "hazard",
  ],
  motorcycle: ["motorcycle", "bike", "helmet"],
  "have-offer": [
    "settlement",
    "offer",
    "check",
    "signed",
    "state farm offered",
    "geico offered",
    "allstate offered",
  ],
  researching: [
    "researching",
    "looking for",
    "considering",
    "not sure if i need",
    "just want to know",
  ],
};

const TOPIC_TO_JUST_HAPPENED: Record<TopicId, string> = {
  "car-accident": "/just-happened/car-accident",
  "truck-accident": "/just-happened/truck-accident",
  "medical-error": "/just-happened/medical-malpractice",
  "wrongful-death": "/just-happened/wrongful-death",
  "nursing-home": "/just-happened/nursing-home-abuse",
  "slip-and-fall": "/just-happened/slip-and-fall",
  motorcycle: "/just-happened/motorcycle-accident",
  "have-offer": "/resources/offer-review",
  researching: "/people-first",
  general: "/just-happened",
};

const TOPIC_LABELS: Record<TopicId, string> = {
  "car-accident": "car accident",
  "truck-accident": "truck or commercial vehicle crash",
  "medical-error": "medical situation",
  "wrongful-death": "loss of someone you love",
  "nursing-home": "nursing home or facility situation",
  "slip-and-fall": "premises injury",
  motorcycle: "motorcycle crash",
  "have-offer": "settlement offer situation",
  researching: "research",
  general: "situation",
};

function classifyTopic(text: string): TopicId {
  const lower = text.toLowerCase();
  for (const [topic, keywords] of Object.entries(TOPIC_KEYWORDS)) {
    if (keywords.some((kw) => lower.includes(kw))) {
      return topic as TopicId;
    }
  }
  return "general";
}

const QUICK_PICK_DOORS = [
  { label: "I was just in an accident", href: "/just-happened" },
  {
    label: "Someone I love was hurt",
    href: "/just-happened/family-perspective",
  },
  { label: "I'm researching my options", href: "/people-first" },
  {
    label: "I have an offer I'm not sure about",
    href: "/resources/offer-review",
  },
] as const;

export function ConciergeHero() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [submittedText, setSubmittedText] = useState<string | null>(null);
  const [detectedTopic, setDetectedTopic] = useState<TopicId | null>(null);

  // Rotate placeholder examples
  useEffect(() => {
    if (submittedText) return;
    const id = setInterval(() => {
      setPlaceholderIndex((i) => (i + 1) % PLACEHOLDER_EXAMPLES.length);
    }, 4500);
    return () => clearInterval(id);
  }, [submittedText]);

  // Cycle background images
  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = typedText.trim();
    if (!trimmed) {
      setSubmittedText("");
      setDetectedTopic(null);
      return;
    }
    const topic = classifyTopic(trimmed);
    setSubmittedText(trimmed);
    setDetectedTopic(topic);
  }

  function handleReset() {
    setSubmittedText(null);
    setDetectedTopic(null);
    setTypedText("");
  }

  return (
    <section
      className="relative min-h-[85vh] flex flex-col justify-center py-20 px-4 lg:px-8 overflow-hidden"
      aria-label="What happened? Tell us in plain words."
    >
      {/* Background images — cycle with crossfade */}
      {HERO_IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={`object-cover transition-opacity duration-[2000ms] ease-in-out ${
            i === bgIndex ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
          priority={i === 0}
          aria-hidden="true"
        />
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-obsidian-graphite/75" aria-hidden="true" />

      {/* Content layer */}
      <div className="relative z-10 mx-auto max-w-4xl w-full">
        {/* Headline */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-chrome-highlight text-center leading-[1.15] mb-6">
          We represent people hurt by someone else&apos;s negligence.
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-steel-silver text-center mb-12 max-w-2xl mx-auto leading-relaxed">
          With clarity. With strategy. Without compromise.
          <br />
          Tell us what happened — we&apos;ll help you find your way.
        </p>

        {!submittedText && submittedText !== "" ? (
          <>
            {/* Concierge input */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <label htmlFor="concierge-input" className="sr-only">
                Tell us what happened
              </label>
              <input
                id="concierge-input"
                type="text"
                value={typedText}
                onChange={(e) => setTypedText(e.target.value)}
                placeholder={PLACEHOLDER_EXAMPLES[placeholderIndex]}
                className="w-full bg-charcoal-slate border border-steel-silver/30 rounded-lg px-6 py-5 text-lg text-chrome-highlight placeholder:text-steel-silver/60 focus:outline-none focus:border-muted-gold transition-colors duration-200"
                autoComplete="off"
              />
              <button
                type="submit"
                className="w-full md:w-auto md:mx-auto md:block bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded-lg hover:bg-muted-gold/90 transition-colors duration-200"
              >
                Help me understand →
              </button>
            </form>

            {/* Fallback row: quick-pick doors */}
            <div className="mt-16">
              <div className="text-xs uppercase tracking-wider text-steel-silver text-center mb-4">
                Or pick a starting point —
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {QUICK_PICK_DOORS.map((door) => (
                  <Link
                    key={door.href}
                    href={door.href}
                    className="bg-charcoal-slate border border-steel-silver/15 hover:border-muted-gold rounded p-4 text-sm text-chrome-highlight text-center transition-colors duration-200"
                  >
                    {door.label}
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (
          <ConciergePanels
            typedText={submittedText ?? ""}
            topic={detectedTopic}
            onReset={handleReset}
          />
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   ConciergePanels — Section 2.5 of homepage-spec.md
   Four panels appear after the user submits text.
   ------------------------------------------------------- */

function ConciergePanels({
  typedText,
  topic,
  onReset,
}: {
  typedText: string;
  topic: TopicId | null;
  onReset: () => void;
}) {
  const isEmpty = !typedText;
  const topicLabel = topic ? TOPIC_LABELS[topic] : "situation";
  const topicLink = topic ? TOPIC_TO_JUST_HAPPENED[topic] : "/just-happened";

  return (
    <div className="space-y-8">
      {/* Echo back what was typed */}
      {!isEmpty && (
        <div className="bg-charcoal-slate border-l-2 border-muted-gold p-4 rounded">
          <div className="text-xs uppercase tracking-wider text-steel-silver mb-2">
            Based on what you told us
          </div>
          <p className="text-chrome-highlight italic">
            &ldquo;{typedText}&rdquo;
          </p>
          <button
            type="button"
            onClick={onReset}
            className="mt-3 text-xs text-steel-silver hover:text-muted-gold underline underline-offset-2 transition-colors"
          >
            Start over
          </button>
        </div>
      )}

      {isEmpty && (
        <div className="bg-charcoal-slate p-6 rounded text-center">
          <p className="text-chrome-highlight mb-4">
            Not sure where to start? Pick a starting point.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mt-4">
            {QUICK_PICK_DOORS.map((door) => (
              <Link
                key={door.href}
                href={door.href}
                className="bg-obsidian-graphite border border-steel-silver/15 hover:border-muted-gold rounded p-4 text-sm text-chrome-highlight text-center transition-colors duration-200"
              >
                {door.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={onReset}
            className="mt-6 text-xs text-steel-silver hover:text-muted-gold underline underline-offset-2 transition-colors"
          >
            Or type what happened →
          </button>
        </div>
      )}

      {!isEmpty && (
        <div className="grid gap-4 md:grid-cols-2">
          {/* Panel 1 — Take a breath (universal) */}
          <div className="bg-charcoal-slate p-6 rounded border border-steel-silver/10">
            <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
              First things first
            </div>
            <h2 className="font-display text-2xl text-chrome-highlight mb-3">
              Take a breath.
            </h2>
            <p className="text-sm text-steel-silver leading-relaxed mb-4">
              What you&apos;re feeling right now is real and reasonable. People
              in your situation often describe shock, confusion, fear about
              money, and uncertainty about who to trust. That&apos;s not
              weakness — that&apos;s an honest response to a hard moment.
            </p>
            <p className="text-sm text-steel-silver leading-relaxed">
              You don&apos;t have to figure everything out tonight. There&apos;s
              a path forward, and most of it isn&apos;t urgent in the way it
              feels.
            </p>
          </div>

          {/* Panel 2 — What to do (topic-specific) */}
          <div className="bg-charcoal-slate p-6 rounded border border-steel-silver/10">
            <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
              Practical steps
            </div>
            <h2 className="font-display text-2xl text-chrome-highlight mb-3">
              Here&apos;s what&apos;s generally useful.
            </h2>
            <p className="text-sm text-steel-silver leading-relaxed italic mb-4">
              I can&apos;t give you legal advice about your specific situation —
              only an attorney can do that. But here&apos;s information that
              tends to help people in a {topicLabel} sort it out.
            </p>
            <Link
              href={topicLink}
              className="inline-flex items-center gap-2 text-chrome-highlight hover:text-muted-gold transition-colors"
            >
              See the {topicLabel} guide{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Panel 3 — What's the process (universal) */}
          <div className="bg-charcoal-slate p-6 rounded border border-steel-silver/10">
            <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
              How these cases move
            </div>
            <h2 className="font-display text-2xl text-chrome-highlight mb-3">
              The general path, in plain English.
            </h2>
            <p className="text-sm text-steel-silver leading-relaxed mb-4">
              I can&apos;t evaluate your case — but here&apos;s how cases like
              this typically move through the legal process, from start to
              resolution.
            </p>
            <Link
              href="/people-first"
              className="inline-flex items-center gap-2 text-chrome-highlight hover:text-muted-gold transition-colors"
            >
              See the full process <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Panel 4 — Talk to someone (universal) */}
          <div className="bg-charcoal-slate p-6 rounded border border-steel-silver/10">
            <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
              If you&apos;d like
            </div>
            <h2 className="font-display text-2xl text-chrome-highlight mb-3">
              We&apos;re here when you&apos;re ready.
            </h2>
            <p className="text-sm text-steel-silver leading-relaxed mb-4">
              If you&apos;d like Yonke Law to look at what happened, send us
              the basics. Mike or someone on the team will respond — usually
              the same business day. Consultations are free. No pressure. If
              we don&apos;t think you need a lawyer, we&apos;ll tell you
              straight.
            </p>
            <Link
              href={`/talk-to-us?topic=${topic ?? "general"}`}
              className="inline-flex items-center gap-2 text-chrome-highlight hover:text-muted-gold transition-colors"
            >
              Start the conversation <span aria-hidden="true">→</span>
            </Link>
            <div className="mt-3 text-xs text-steel-silver">
              Or call{" "}
              <a
                href="tel:+18162216400"
                className="text-chrome-highlight hover:text-muted-gold transition-colors"
              >
                816-221-6400
              </a>
              {" "}— same response either way.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
