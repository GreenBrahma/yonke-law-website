import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ===========================================================
   /just-happened/[topic] — Dynamic route

   Per /specs/just-happened-car-accident.md (template-setter)
   and /specs/yonke-project-state.md.

   Status of each topic:
     - "car-accident" → FULLY BUILT per spec
     - All other valid topics → ComingSoonPage placeholder
       (built using the same chrome and shared CTAs;
       awaiting per-topic content data)
     - Anything not in KNOWN_TOPICS → 404

   The car-accident page is the pattern. To bring another topic
   to "built" status: add its content object to TOPIC_CONTENT
   and the switch in the page component renders it through the
   same template.
   =========================================================== */

const KNOWN_TOPICS = [
  "car-accident",
  "truck-accident",
  "motorcycle-accident",
  "pedestrian-accident",
  "bicycle-accident",
  "rideshare-accident",
  "medical-malpractice",
  "surgical-error",
  "diagnostic-error",
  "medication-error",
  "birth-injury",
  "traumatic-brain-injury",
  "wrongful-death",
  "nursing-home-abuse",
  "slip-and-fall",
  "workplace-injury",
  "construction-injury",
  "product-recall",
  "defective-vehicle",
  "dog-bite",
  "sexual-abuse",
  "active-shooter",
  "family-perspective",
] as const;

type TopicSlug = (typeof KNOWN_TOPICS)[number];

const TOPIC_LABELS: Record<TopicSlug, string> = {
  "car-accident": "Car Accident",
  "truck-accident": "Truck or Commercial Vehicle Crash",
  "motorcycle-accident": "Motorcycle Accident",
  "pedestrian-accident": "Pedestrian Accident",
  "bicycle-accident": "Bicycle Accident",
  "rideshare-accident": "Rideshare Accident",
  "medical-malpractice": "Medical Malpractice",
  "surgical-error": "Surgical Error",
  "diagnostic-error": "Diagnostic Error",
  "medication-error": "Medication Error",
  "birth-injury": "Birth Injury",
  "traumatic-brain-injury": "Traumatic Brain Injury",
  "wrongful-death": "Wrongful Death",
  "nursing-home-abuse": "Nursing Home Abuse",
  "slip-and-fall": "Slip and Fall",
  "workplace-injury": "Workplace Injury",
  "construction-injury": "Construction Injury",
  "product-recall": "Product Recall Injury",
  "defective-vehicle": "Defective Vehicle",
  "dog-bite": "Dog Bite",
  "sexual-abuse": "Sexual Abuse",
  "active-shooter": "Active Shooter Incident",
  "family-perspective": "When Someone You Love Was Hurt",
};

export function generateStaticParams() {
  return KNOWN_TOPICS.map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;

  if (!KNOWN_TOPICS.includes(topic as TopicSlug)) {
    return { title: "Page not found" };
  }

  if (topic === "car-accident") {
    return {
      title:
        "Just Had a Car Accident? What to Do in the First 24 Hours",
      description:
        "Clear, plain-English guidance on what to do in the first 24 hours after a car accident in Missouri or Kansas. No pressure, no fluff — just the steps that protect you. From Yonke (YONK-ee) Law.",
      alternates: {
        canonical: "https://yonke.law/just-happened/car-accident/",
      },
      openGraph: {
        title:
          "Just Had a Car Accident? What to Do in the First 24 Hours | Yonke Law",
        description:
          "Calm, clear guidance on what to do in the first 24 hours after a car accident.",
        url: "https://yonke.law/just-happened/car-accident/",
        type: "article",
      },
    };
  }

  const label = TOPIC_LABELS[topic as TopicSlug];
  return {
    title: `${label} — What to Do Now`,
    description: `Calm, plain-English guidance after a ${label.toLowerCase()}. From Yonke (YONK-ee) Law in Kansas City.`,
    alternates: {
      canonical: `https://yonke.law/just-happened/${topic}/`,
    },
  };
}

export default async function JustHappenedTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;

  if (!KNOWN_TOPICS.includes(topic as TopicSlug)) {
    notFound();
  }

  if (topic === "car-accident") {
    return <CarAccidentPage />;
  }

  return <ComingSoonPage topic={topic as TopicSlug} />;
}

/* ===========================================================
   CarAccidentPage — full build per spec
   =========================================================== */

const NEXT_24_HOURS = {
  intro:
    "Most people walk away from a car accident in shock. Adrenaline masks injuries. Memory of what happened gets fuzzy fast. And the choices you make in the first day will quietly shape every choice that comes after. Here's what matters, in order.",
  groups: [
    {
      title: "Right now (at the scene, if you're still there)",
      steps: [
        {
          name: "Get yourself safe",
          text: "Move off the roadway if you can. Hazard lights on.",
        },
        {
          name: "Call 911",
          text: "Even for a minor collision. A police report is one of the most important pieces of evidence you can have, and it costs you nothing.",
        },
        {
          name: "Get medical attention if there's any chance you're hurt",
          text: "Adrenaline hides injuries. If paramedics are on scene, let them check you.",
        },
        {
          name: "Take photos",
          text: "Damage to both vehicles, the scene from multiple angles, license plates, the other driver's insurance card, road conditions, any visible injuries. More is better.",
        },
        {
          name: "Exchange information",
          text: "Name, phone, insurance carrier and policy number, license plate. That's it. You are not required to discuss what happened, and you should not.",
        },
        {
          name: "Don't apologize. Don't admit fault. Don't speculate.",
          text: "This is not about being rude — it's about the fact that you genuinely don't know yet what happened, and anything you say can be quoted back later.",
        },
      ],
    },
    {
      title: "Within a few hours",
      steps: [
        {
          name: "See a doctor, even if you feel fine",
          text: "Soft-tissue injuries and concussions often don't show symptoms for 24–72 hours. The medical record from this visit becomes critical evidence later.",
        },
        {
          name: "Write down what you remember while it's fresh",
          text: "Where you were going, what you saw, what you heard, what the other driver said. Save it somewhere you won't lose it.",
        },
      ],
    },
    {
      title: "Within 24 hours",
      steps: [
        {
          name: "Notify your own insurance company",
          text: "Stick to facts. \"I was involved in an accident at [location] at [time]. I will follow up with details.\" Nothing more until you've talked to someone.",
        },
        {
          name: "Do not give a recorded statement to the other driver's insurance company",
          text: "They will call. You do not have to talk to them, and you almost always should not — at least not before you understand what you're agreeing to.",
        },
        {
          name: "Don't post anything about it on social media",
          text: "Insurance defense attorneys read your posts. A photo of you smiling at a birthday party becomes \"the plaintiff doesn't seem injured\" in court.",
        },
        {
          name: "Keep every receipt and document",
          text: "Medical bills, prescription receipts, towing, rental car, missed work — all of it.",
        },
      ],
    },
  ],
} as const;

const FAQ_ITEMS = [
  {
    q: "Do I need to see a doctor if I feel fine?",
    a: "Yes. Soft-tissue injuries — whiplash, muscle strain, concussion — often don't show symptoms for 24 to 72 hours. By the time you feel them, you've lost the medical record connecting them to the accident. A documented medical visit within 24 hours is one of the most valuable steps you can take for both your health and any future claim.",
  },
  {
    q: "What if the other driver was uninsured or underinsured?",
    a: "You may still have a claim — against your own policy. Most Missouri and Kansas drivers carry uninsured/underinsured motorist (UM/UIM) coverage even if they don't realize it. Don't assume there's no recovery just because the other driver had no insurance.",
  },
  {
    q: "How long do I have to file a claim?",
    a: "This is jurisdiction-specific. In Missouri, the statute of limitations for most personal injury claims is five years. In Kansas, it's two years. (These rules have exceptions — for example, claims against government entities have much shorter notice periods, sometimes as short as 90 days. Always verify with an attorney before assuming you have time.)",
  },
  {
    q: "Should I talk to the insurance adjuster?",
    a: "You can — but you don't have to give a recorded statement, and you generally shouldn't until you've spoken with a lawyer. Adjusters are trained interviewers. They ask questions in ways that can lock in answers you'd want to clarify later.",
  },
  {
    q: "Is it worth getting a lawyer for a car accident?",
    a: "It depends on the situation. If the accident was minor, no one was hurt, and the insurer is offering fair value quickly — probably not. If you were injured, the other driver's insurer is disputing fault, or the offer feels low compared to your medical bills and missed work — a free consultation is worth your time. A good firm will tell you straight-up if you don't have a case worth pursuing.",
  },
  {
    q: "How much does a car accident lawyer cost?",
    a: "At Yonke Law, personal injury cases are handled on contingency. That means no fee unless we win. The fee is a percentage of the recovery, agreed to in writing before we start. Consultation is free.",
  },
  {
    q: "What if I was partly at fault?",
    a: "You can still recover in both Missouri and Kansas, but the rules differ. Missouri uses \"pure comparative fault\" — your recovery is reduced by your percentage of fault, even if you were mostly at fault. Kansas uses \"modified comparative fault\" with a 51% rule — you can recover only if you were less than 51% at fault (so at exactly 50%, you can still recover), and your recovery is reduced by your percentage. Sorting out fault correctly is one of the most important things a personal injury attorney does.",
  },
  {
    q: "What's my case actually worth?",
    a: "There's no honest one-line answer. The value depends on your medical bills, lost wages, future treatment needs, pain and disruption, the other driver's policy limits, who was at fault and to what degree, and the jurisdiction. A consultation gets you a real assessment based on your situation — not a stock answer.",
  },
  {
    q: "Can I switch lawyers if I'm already with another firm and unhappy?",
    a: "Yes. Switching attorneys mid-case is common and procedurally clean. Most contingency-fee firms work out fee splits with prior counsel, so the change doesn't increase your overall cost. If your current firm isn't communicating with you, isn't preparing for trial, or is pressing you to accept an offer that doesn't feel right, you have options.",
  },
  {
    q: "What's different about working with Yonke Law?",
    a: "We optimize for outcome, not throughput. That means full preparation on every case worth taking, regular communication so you're never wondering where things stand, and a willingness to go to verdict when the alternative is shortchanging you. We're not a settlement mill.",
  },
] as const;

const MO_KS_RULES = {
  missouri: [
    { label: "Statute of limitations", value: "5 years for most personal injury claims" },
    {
      label: "Fault system",
      value: "Pure comparative fault — recovery reduced by your % of fault",
    },
    {
      label: "Minimum liability insurance",
      value: "$25,000 per person / $50,000 per accident / $25,000 property",
    },
    { label: "At-fault state", value: "The driver responsible pays" },
    {
      label: "UM/UIM coverage",
      value: "Required for uninsured motorist; optional for underinsured",
    },
  ],
  kansas: [
    { label: "Statute of limitations", value: "2 years for most personal injury claims" },
    {
      label: "Fault system",
      value:
        "Modified comparative fault — 51% rule (recover only if less than 51% at fault)",
    },
    {
      label: "Minimum liability insurance",
      value: "$25,000 per person / $50,000 per accident / $25,000 property",
    },
    {
      label: "No-fault state",
      value:
        "Personal Injury Protection (PIP) covers initial expenses; serious injuries can step outside no-fault",
    },
    { label: "UM coverage", value: "Required; UIM not mandatory" },
  ],
} as const;

function buildJsonLd() {
  const articleSchema = {
    "@type": "Article",
    "@id": "https://yonke.law/just-happened/car-accident/#article",
    headline: "Just Had a Car Accident? What to Do in the First 24 Hours",
    description:
      "Clear, plain-English guidance on what to do in the first 24 hours after a car accident in Missouri or Kansas.",
    author: {
      "@type": "Person",
      "@id": "https://yonke.law/#mike-yonke",
      name: "Michael T. Yonke",
    },
    publisher: { "@id": "https://yonke.law/#legalservice" },
    inLanguage: "en-US",
    isAccessibleForFree: true,
  };

  const howToSchema = {
    "@type": "HowTo",
    "@id": "https://yonke.law/just-happened/car-accident/#howto",
    name: "What to do in the first 24 hours after a car accident",
    description:
      "Step-by-step guidance for the first 24 hours after a car accident, from scene safety through insurance contact.",
    step: NEXT_24_HOURS.groups.flatMap((group) =>
      group.steps.map((step, idx) => ({
        "@type": "HowToStep",
        position: idx + 1,
        name: step.name,
        text: step.text,
      })),
    ),
  };

  const faqSchema = {
    "@type": "FAQPage",
    "@id": "https://yonke.law/just-happened/car-accident/#faq",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [articleSchema, howToSchema, faqSchema],
  };
}

function CarAccidentPage() {
  const jsonLd = buildJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===========================================
          Section 1 — Hero
          =========================================== */}
      <section className="bg-obsidian-graphite py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-steel-silver mb-6">
            Just Happened
          </div>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl text-chrome-highlight leading-[1.15] mb-6"
            aria-label="Yonke, pronounced YONK-ee, Law — You were just in a car accident. Take a breath."
          >
            You were just in a car accident. Take a breath.
          </h1>
          <p className="text-lg md:text-xl text-steel-silver leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether it was an hour ago or three days ago, this is the clearest
            path forward. No fluff. No pressure. Just what you need to know.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#next-24"
              className="bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded hover:bg-muted-gold/90 transition-colors duration-200"
            >
              Read the next 24 hours →
            </a>
            <a
              href="#consultation"
              className="text-steel-silver hover:text-chrome-highlight transition-colors duration-200 underline-offset-4 hover:underline"
            >
              Or talk to someone now →
            </a>
          </div>
        </div>
      </section>

      {/* ===========================================
          Section 2 — The next 24 hours (LLM citation engine)
          =========================================== */}
      <section
        id="next-24"
        className="bg-charcoal-slate py-24 px-4 lg:px-8 scroll-mt-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-chrome-highlight leading-tight mb-6">
            The next 24 hours
          </h2>
          <p className="text-steel-silver leading-relaxed mb-12">
            {NEXT_24_HOURS.intro}
          </p>

          {NEXT_24_HOURS.groups.map((group, gi) => {
            // Compute global step numbers across all groups
            const stepOffset = NEXT_24_HOURS.groups
              .slice(0, gi)
              .reduce((sum, g) => sum + g.steps.length, 0);
            return (
              <div key={group.title} className="mb-10 last:mb-0">
                <h3 className="font-display text-xl text-muted-gold mb-6">
                  {group.title}
                </h3>
                <ol className="space-y-5">
                  {group.steps.map((step, si) => {
                    const num = stepOffset + si + 1;
                    return (
                      <li
                        key={step.name}
                        className="flex gap-4 items-start"
                      >
                        <span className="font-display text-2xl text-muted-gold leading-none shrink-0 w-10">
                          {String(num).padStart(2, "0")}
                        </span>
                        <div>
                          <div className="font-semibold text-chrome-highlight mb-1">
                            {step.name}.
                          </div>
                          <p className="text-steel-silver leading-relaxed">
                            {step.text}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            );
          })}

          <div className="mt-12 pt-8 border-t border-steel-silver/20">
            <p className="text-steel-silver text-sm">
              Want a printable checklist version?{" "}
              <Link
                href="/resources/checklists/car-accident-response"
                className="text-chrome-highlight hover:text-muted-gold underline underline-offset-4 transition-colors"
              >
                Download the Accident Response Checklist →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ===========================================
          Section 3 — What insurance companies typically do
          =========================================== */}
      <section className="bg-obsidian-graphite py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-chrome-highlight leading-tight mb-8">
            What insurance companies typically do
          </h2>
          <div className="space-y-5 text-steel-silver leading-relaxed">
            <p>
              Insurance companies are not on your side. They&apos;re a
              business — and their business is to pay as little as possible on
              every claim.
            </p>
            <p>
              That doesn&apos;t make them villains. It makes them an
              organization with a different goal than yours. Knowing how they
              typically operate helps you protect yourself without becoming
              adversarial.
            </p>
            <p className="font-semibold text-chrome-highlight">
              Within the first few days, you should expect:
            </p>
            <ul className="space-y-4 pl-0">
              <li className="border-l-2 border-muted-gold pl-5">
                <span className="text-chrome-highlight font-semibold">
                  A call from the other driver&apos;s insurer.
                </span>{" "}
                Often within 24–48 hours. They&apos;ll be friendly. They&apos;ll
                ask if you&apos;re &ldquo;doing okay&rdquo; and request a
                &ldquo;quick statement.&rdquo; That statement is recorded, and
                pieces of it can later be presented out of context.
              </li>
              <li className="border-l-2 border-muted-gold pl-5">
                <span className="text-chrome-highlight font-semibold">
                  A quick settlement offer.
                </span>{" "}
                Sometimes within a week. Usually for less than your case is
                worth. Once accepted, you can&apos;t go back — even if your
                injuries turn out to be more serious than they first seemed.
              </li>
              <li className="border-l-2 border-muted-gold pl-5">
                <span className="text-chrome-highlight font-semibold">
                  A request to sign medical authorizations.
                </span>{" "}
                These are often written more broadly than they need to be. A
                blanket medical release can give the insurer access to your
                entire medical history, not just records related to the
                accident.
              </li>
            </ul>
            <p>
              None of this is necessarily malicious. But it&apos;s a process
              that&apos;s been optimized for the insurer&apos;s outcome, not
              yours. The earlier in that process you understand what&apos;s
              happening, the better positioned you are.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================================
          Section 4 — FAQ
          =========================================== */}
      <section className="bg-charcoal-slate py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-chrome-highlight leading-tight mb-12">
            Common questions after a car accident
          </h2>
          <div className="space-y-2">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.q}
                className="group bg-obsidian-graphite border border-steel-silver/10 rounded p-5 open:border-muted-gold/50"
              >
                <summary className="font-display text-lg text-chrome-highlight cursor-pointer list-none flex justify-between items-start gap-4">
                  <span>{item.q}</span>
                  <span
                    className="text-muted-gold transition-transform duration-200 group-open:rotate-45 text-2xl leading-none shrink-0"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="text-steel-silver leading-relaxed mt-4">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================================
          Section 5 — Missouri vs. Kansas
          =========================================== */}
      <section className="bg-obsidian-graphite py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-chrome-highlight leading-tight mb-4">
              Missouri and Kansas — the rules that actually matter
            </h2>
            <p className="text-steel-silver max-w-2xl mx-auto leading-relaxed">
              Most car accidents in our area cross between Missouri and Kansas.
              The rules differ, and which side of the line your accident
              happened on can change the outcome significantly.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-charcoal-slate p-8 rounded border border-steel-silver/10">
              <h3 className="font-display text-2xl text-muted-gold mb-6">
                Missouri
              </h3>
              <dl className="space-y-5">
                {MO_KS_RULES.missouri.map((rule) => (
                  <div key={rule.label}>
                    <dt className="text-xs uppercase tracking-wider text-steel-silver mb-1">
                      {rule.label}
                    </dt>
                    <dd className="text-chrome-highlight leading-relaxed">
                      {rule.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-charcoal-slate p-8 rounded border border-steel-silver/10">
              <h3 className="font-display text-2xl text-muted-gold mb-6">
                Kansas
              </h3>
              <dl className="space-y-5">
                {MO_KS_RULES.kansas.map((rule) => (
                  <div key={rule.label}>
                    <dt className="text-xs uppercase tracking-wider text-steel-silver mb-1">
                      {rule.label}
                    </dt>
                    <dd className="text-chrome-highlight leading-relaxed">
                      {rule.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <p className="text-center mt-10 text-steel-silver">
            Not sure where the accident happened or which rules apply?{" "}
            <a
              href="#consultation"
              className="text-chrome-highlight hover:text-muted-gold underline underline-offset-4 transition-colors"
            >
              Send us the basics and we&apos;ll tell you →
            </a>
          </p>

          {/* TODO: Mike to verify these jurisdictional facts per yonke-project-state.md outstanding items */}
        </div>
      </section>

      {/* ===========================================
          Section 6 — Inline trust signal
          =========================================== */}
      <section className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <figure className="border-l-2 border-muted-gold pl-6">
            <blockquote className="text-lg text-chrome-highlight leading-relaxed italic">
              &ldquo;I am a Kansas City Missouri Police officer who was injured
              in a car accident while on routine patrol. I was very delighted
              by the urgency, vigor and efficiency of my attorney Mike Yonke.
              He got the &lsquo;ball rolling&rsquo; right away. He was always
              there when I had any questions, and always had words of
              encouragement.&rdquo;
            </blockquote>
            <figcaption className="text-sm text-steel-silver mt-4">
              — Kansas City Police Officer, Yonke Law client
            </figcaption>
          </figure>

          <p className="text-steel-silver leading-relaxed mt-8">
            Notable vehicle-related outcomes have included recoveries against
            utility companies, commercial fleet operators, and uninsured-motorist
            claims with significant policy-limit and excess recoveries.{" "}
            <Link
              href="/about#outcomes"
              className="text-chrome-highlight hover:text-muted-gold underline underline-offset-4 transition-colors"
            >
              See outcomes →
            </Link>
          </p>
        </div>
      </section>

      {/* ===========================================
          Section 7 — When it's time to talk to a lawyer
          =========================================== */}
      <section className="bg-obsidian-graphite py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-chrome-highlight leading-tight mb-8">
            When it&apos;s worth having someone look at your situation
          </h2>
          <div className="space-y-5 text-steel-silver leading-relaxed">
            <p>
              You don&apos;t always need a lawyer after a car accident. Minor
              fender-bender with no injuries, clear fault, fair offer? You can
              probably handle it yourself.
            </p>
            <p className="font-semibold text-chrome-highlight">
              A free consultation is worth your time if any of the following
              are true:
            </p>
            <ul className="space-y-3 pl-0">
              {[
                "You were injured — even if symptoms didn't show up until later",
                "You're missing work or have lasting limitations",
                "The other driver was uninsured, underinsured, or disputing fault",
                "You've gotten a settlement offer and you're not sure it's fair",
                "The insurance adjuster is pressuring you to settle quickly",
                "You don't know how to interpret the paperwork they've sent you",
                "You're already with another firm and the communication has gone silent",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 items-start"
                >
                  <span
                    className="text-muted-gold mt-1.5 shrink-0"
                    aria-hidden="true"
                  >
                    ▸
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              A consultation is exactly what it sounds like — a conversation.
              No fee. No obligation. If we don&apos;t think you need a lawyer,
              we&apos;ll tell you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#consultation"
              className="bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded hover:bg-muted-gold/90 transition-colors duration-200 text-center"
            >
              Talk to us now
            </a>
            <Link
              href="/resources/offer-review"
              className="border border-steel-silver/40 text-chrome-highlight px-8 py-4 rounded hover:border-muted-gold transition-colors duration-200 text-center"
            >
              Or send us the basics first
            </Link>
          </div>
        </div>
      </section>

      {/* ===========================================
          Section 8 — The two checklists (conversion moment)
          =========================================== */}
      <section className="bg-charcoal-slate py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-chrome-highlight leading-tight">
              Take this with you
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-obsidian-graphite border border-steel-silver/10 p-8 rounded">
              <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
                Printable
              </div>
              <h3 className="font-display text-2xl text-chrome-highlight mb-4">
                The Accident Response Checklist
              </h3>
              <p className="text-steel-silver leading-relaxed mb-6">
                A one-page PDF you can save to your phone or print and keep in
                your glove compartment. Covers the 12 steps above plus the
                documents to collect and the people to call.
              </p>
              <Link
                href="/resources/checklists/car-accident-response"
                className="inline-flex items-center gap-2 text-chrome-highlight hover:text-muted-gold transition-colors"
              >
                Download the PDF <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="bg-obsidian-graphite border border-steel-silver/10 p-8 rounded">
              <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
                Or — turn your answers into an intake
              </div>
              <h3 className="font-display text-2xl text-chrome-highlight mb-4">
                Walk through it digitally
              </h3>
              <p className="text-steel-silver leading-relaxed mb-3">
                Walk through a guided version of the checklist and have your
                answers saved automatically. If you decide you want Yonke Law
                to review your situation, your responses become the start of
                your case file — no re-typing what just happened.
              </p>
              <p className="text-steel-silver leading-relaxed text-sm mb-6">
                Free. Takes 5–10 minutes. Your answers are private and
                encrypted.
              </p>
              <Link
                href="/talk-to-us?intake=car-accident"
                className="inline-flex items-center gap-2 text-chrome-highlight hover:text-muted-gold transition-colors"
              >
                Start the digital intake <span aria-hidden="true">→</span>
              </Link>
              {/* TODO: Wire digital intake to People Portal account creation when Nucleus ships.
                  Per AGENTS.md, intake submissions route to Mike's MS365 in the interim. */}
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================
          Section 9 — Related pages
          =========================================== */}
      <section className="bg-obsidian-graphite py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl text-chrome-highlight mb-8">
            Related guidance
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/just-happened/truck-accident"
              className="bg-charcoal-slate p-6 rounded border border-steel-silver/10 hover:border-muted-gold transition-colors duration-200 group"
            >
              <div className="font-display text-lg text-chrome-highlight group-hover:text-muted-gold transition-colors mb-2">
                Truck accidents
              </div>
              <p className="text-sm text-steel-silver">
                Why commercial truck cases are different.
              </p>
            </Link>
            <Link
              href="/resources/offer-review"
              className="bg-charcoal-slate p-6 rounded border border-steel-silver/10 hover:border-muted-gold transition-colors duration-200 group"
            >
              <div className="font-display text-lg text-chrome-highlight group-hover:text-muted-gold transition-colors mb-2">
                I have an offer I&apos;m not sure about
              </div>
              <p className="text-sm text-steel-silver">
                Have someone look at it before you sign.
              </p>
            </Link>
            <Link
              href="/what-we-handle/car-accidents"
              className="bg-charcoal-slate p-6 rounded border border-steel-silver/10 hover:border-muted-gold transition-colors duration-200 group"
            >
              <div className="font-display text-lg text-chrome-highlight group-hover:text-muted-gold transition-colors mb-2">
                Car accidents (full practice area)
              </div>
              <p className="text-sm text-steel-silver">
                How Yonke Law handles vehicle cases.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ===========================================
          Section 10 — Final CTA / Talk to Us
          (Anchor #consultation — reuse homepage pattern)
          =========================================== */}
      <section
        id="consultation"
        className="bg-charcoal-slate py-24 px-4 lg:px-8 scroll-mt-20"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-chrome-highlight leading-tight mb-4">
            Ready when you are.
          </h2>
          <p className="text-lg text-steel-silver mb-12">
            Free consultation. No fee unless we recover. We respond fast —
            usually same business day.
          </p>

          {/* TODO: Wire to /api/intake → Mike's MS365 (credentials held by Geoff).
              Pre-fill topic=car-accident on submission so Mike sees the context. */}
          <form
            method="POST"
            action="/api/intake?topic=car-accident"
            className="space-y-4 text-left"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first"
                  className="block text-sm text-steel-silver mb-2"
                >
                  First name
                </label>
                <input
                  id="first"
                  name="first"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="w-full bg-obsidian-graphite border border-steel-silver/30 rounded px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold"
                />
              </div>
              <div>
                <label
                  htmlFor="last"
                  className="block text-sm text-steel-silver mb-2"
                >
                  Last name
                </label>
                <input
                  id="last"
                  name="last"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="w-full bg-obsidian-graphite border border-steel-silver/30 rounded px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm text-steel-silver mb-2"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="w-full bg-obsidian-graphite border border-steel-silver/30 rounded px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-steel-silver mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full bg-obsidian-graphite border border-steel-silver/30 rounded px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm text-steel-silver mb-2"
              >
                Briefly, what happened?{" "}
                <span className="text-steel-silver/60">(optional)</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full bg-obsidian-graphite border border-steel-silver/30 rounded px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-muted-gold text-obsidian-graphite font-semibold py-4 rounded hover:bg-muted-gold/90 transition-colors duration-200"
            >
              Start the Conversation
            </button>
          </form>

          <div className="mt-12 space-y-2 text-steel-silver">
            <p>
              Or call{" "}
              <a
                href="tel:+18162216400"
                className="text-chrome-highlight hover:text-muted-gold transition-colors"
              >
                816-221-6400
              </a>
            </p>
            <p className="text-sm">
              700 West 47th Street, Suite 550 · Kansas City, MO 64112
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ===========================================================
   ComingSoonPage — placeholder for un-built topics

   Renders the same chrome (eyebrow, headline shape, Final CTA)
   as a built page so the site doesn't feel half-finished, but
   honestly says the full guide is being written. Routes the
   user to the homepage concierge and the Talk to Us form.
   =========================================================== */

function ComingSoonPage({ topic }: { topic: TopicSlug }) {
  const label = TOPIC_LABELS[topic];
  const lowerLabel = label.toLowerCase();

  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian-graphite py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-steel-silver mb-6">
            Just Happened
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-chrome-highlight leading-[1.15] mb-6">
            {label}
          </h1>
          <p className="text-lg md:text-xl text-steel-silver leading-relaxed mb-10 max-w-2xl mx-auto">
            We&apos;re writing the full guide for {lowerLabel} situations. In
            the meantime, if you or someone you love is dealing with this right
            now, you can talk to us directly — free consultation, same business
            day response.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#consultation"
              className="bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded hover:bg-muted-gold/90 transition-colors duration-200"
            >
              Talk to someone now →
            </a>
            <Link
              href="/just-happened"
              className="text-steel-silver hover:text-chrome-highlight transition-colors duration-200 underline-offset-4 hover:underline"
            >
              Or browse other situations →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="consultation"
        className="bg-charcoal-slate py-24 px-4 lg:px-8 scroll-mt-20"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-chrome-highlight leading-tight mb-4">
            Ready when you are.
          </h2>
          <p className="text-lg text-steel-silver mb-12">
            Free consultation. No fee unless we recover. We respond fast —
            usually same business day.
          </p>

          <form
            method="POST"
            action={`/api/intake?topic=${topic}`}
            className="space-y-4 text-left"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first"
                  className="block text-sm text-steel-silver mb-2"
                >
                  First name
                </label>
                <input
                  id="first"
                  name="first"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="w-full bg-obsidian-graphite border border-steel-silver/30 rounded px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold"
                />
              </div>
              <div>
                <label
                  htmlFor="last"
                  className="block text-sm text-steel-silver mb-2"
                >
                  Last name
                </label>
                <input
                  id="last"
                  name="last"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="w-full bg-obsidian-graphite border border-steel-silver/30 rounded px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm text-steel-silver mb-2"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="w-full bg-obsidian-graphite border border-steel-silver/30 rounded px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-steel-silver mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full bg-obsidian-graphite border border-steel-silver/30 rounded px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm text-steel-silver mb-2"
              >
                Briefly, what happened?{" "}
                <span className="text-steel-silver/60">(optional)</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full bg-obsidian-graphite border border-steel-silver/30 rounded px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-muted-gold text-obsidian-graphite font-semibold py-4 rounded hover:bg-muted-gold/90 transition-colors duration-200"
            >
              Start the Conversation
            </button>
          </form>

          <div className="mt-12 space-y-2 text-steel-silver">
            <p>
              Or call{" "}
              <a
                href="tel:+18162216400"
                className="text-chrome-highlight hover:text-muted-gold transition-colors"
              >
                816-221-6400
              </a>
            </p>
            <p className="text-sm">
              700 West 47th Street, Suite 550 · Kansas City, MO 64112
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
