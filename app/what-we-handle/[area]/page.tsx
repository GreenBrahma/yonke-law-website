import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PRACTICE_AREAS } from "../practiceAreaData";
import { PRACTICE_AREAS_2 } from "../practiceAreaData2";
import { PRACTICE_AREAS_3 } from "../practiceAreaData3";
import { PRACTICE_AREAS_4 } from "../practiceAreaData4";

const ALL_AREAS = [...PRACTICE_AREAS, ...PRACTICE_AREAS_2, ...PRACTICE_AREAS_3, ...PRACTICE_AREAS_4];

function getArea(slug: string) {
  return ALL_AREAS.find((a) => a.slug === slug);
}

export function generateStaticParams() {
  return ALL_AREAS.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) return { title: "Practice Area" };
  return {
    title: `${area.name} Lawyers in Kansas City | Yonke Law`,
    description: `${area.definition[0].slice(0, 155)}… From Yonke (YONK-ee) Law.`,
    alternates: { canonical: `https://yonke.law/what-we-handle/${slug}/` },
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return (
    <>
      {/* S1: Hero */}
      <section className="relative bg-obsidian-graphite py-24 px-4 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={area.heroImage} alt="" fill className="object-cover opacity-12" sizes="100vw" priority />
        </div>
        <div className="relative z-10 mx-auto max-w-[900px] text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-steel-silver mb-6">What We Handle</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-chrome-highlight leading-[1.15] mb-4" aria-label={area.name.includes("Yonke") ? "Yonke, pronounced YONK-ee" : undefined}>
            {area.name}
          </h1>
          <p className="text-lg md:text-xl text-steel-silver mb-8">{area.subhead}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#consultation" className="bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded hover:bg-muted-gold/90 transition-colors">Talk to us →</a>
            <a href="#the-elements" className="text-steel-silver hover:text-chrome-highlight transition-colors underline-offset-4 hover:underline text-sm">Or jump to the legal basics →</a>
          </div>
        </div>
      </section>

      {/* S2: Definition */}
      <section id="what-is-it" className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-[800px]">
          <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-8">What {area.name.toLowerCase()} actually means</h2>
          {area.definition.map((p, i) => (
            <p key={i} className="text-steel-silver leading-relaxed mb-4 last:mb-0">{p}</p>
          ))}
        </div>
      </section>

      {/* S3: Elements */}
      <section id="the-elements" className="bg-obsidian-graphite py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-[800px]">
          <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-10">What it takes to have a case</h2>
          <div className="space-y-8">
            {area.elements.map((el, i) => (
              <div key={i}>
                <h3 className="text-muted-gold font-semibold text-lg mb-2">{i + 1}. {el.title}</h3>
                <p className="text-steel-silver leading-relaxed">{el.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S4: Subcategories */}
      <section id="subcategories" className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-4">What we handle within {area.name.toLowerCase()}</h2>
          <p className="text-steel-silver mb-10">Every situation is different. Here are the most common types we see.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {area.subcategories.map((sub) => (
              <div key={sub.name} className="bg-obsidian-graphite border border-steel-silver/10 rounded-lg p-6 hover:border-muted-gold/30 transition-colors duration-300">
                <h3 className="text-chrome-highlight font-semibold mb-2">{sub.name}</h3>
                <p className="text-steel-silver text-sm leading-relaxed">{sub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5: MO vs KS */}
      <section id="mo-vs-ks" className="bg-obsidian-graphite py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-4">Missouri vs. Kansas: the rules that matter</h2>
          <p className="text-steel-silver mb-10">Kansas City straddles the state line. Which state&apos;s law applies depends on where the incident occurred.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-charcoal-slate border border-steel-silver/10 rounded-lg p-8">
              <h3 className="text-muted-gold font-semibold text-lg mb-4">Missouri</h3>
              <ul className="space-y-3">
                {area.moRules.map((r, i) => (
                  <li key={i} className="text-steel-silver text-sm leading-relaxed flex gap-2">
                    <span className="text-muted-gold shrink-0">•</span>{r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-charcoal-slate border border-steel-silver/10 rounded-lg p-8">
              <h3 className="text-muted-gold font-semibold text-lg mb-4">Kansas</h3>
              <ul className="space-y-3">
                {area.ksRules.map((r, i) => (
                  <li key={i} className="text-steel-silver text-sm leading-relaxed flex gap-2">
                    <span className="text-muted-gold shrink-0">•</span>{r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center mt-8">
            <a href="#consultation" className="text-muted-gold hover:text-chrome-highlight transition-colors text-sm underline-offset-4 hover:underline">
              Not sure which state&apos;s rules apply? Tell us where it happened →
            </a>
          </p>
        </div>
      </section>

      {/* S6: Investigation */}
      <section id="investigation" className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-[800px]">
          <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-10">What an investigation looks like</h2>
          <div className="space-y-6">
            {area.investigation.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 shrink-0 rounded-full bg-muted-gold/15 flex items-center justify-center text-muted-gold font-semibold text-sm">{i + 1}</div>
                <p className="text-steel-silver leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S7: Cost */}
      <section id="what-it-costs" className="bg-obsidian-graphite py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-6">What it costs</h2>
          <p className="text-steel-silver leading-relaxed">
            Yonke Law works on a contingency basis. There is no fee unless we recover compensation for you.
            The percentage is agreed in writing before any work begins. Your initial consultation is always free.
            No hourly rates. No retainers. No surprise bills.
          </p>
        </div>
      </section>

      {/* S8: Damages */}
      <section id="what-its-worth" className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-[800px]">
          <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-4">What a {area.name.toLowerCase()} case is actually worth</h2>
          <p className="text-steel-silver mb-8">There&apos;s no honest one-line answer. Value depends on the facts of your situation.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-muted-gold font-semibold mb-4">Economic Damages</h3>
              <ul className="space-y-2">
                {area.damages.economic.map((d, i) => (
                  <li key={i} className="text-steel-silver text-sm flex gap-2"><span className="text-muted-gold">•</span>{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-muted-gold font-semibold mb-4">Non-Economic Damages</h3>
              <ul className="space-y-2">
                {area.damages.nonEconomic.map((d, i) => (
                  <li key={i} className="text-steel-silver text-sm flex gap-2"><span className="text-muted-gold">•</span>{d}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-steel-silver text-sm mt-8 italic">A consultation gives you a real assessment based on your situation — not a stock answer.</p>
        </div>
      </section>

      {/* S9: Mike */}
      <section id="mike-on-this" className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-[1000px]">
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image src="/images/Mike Yonke - Headshot.png" alt="Michael T. Yonke" fill className="object-cover" sizes="280px" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-steel-silver mb-3">Who You&apos;ll Work With</p>
              <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-2">Michael T. Yonke</h2>
              <p className="text-muted-gold font-semibold text-sm mb-6">{area.mikeCredential}</p>
              <p className="text-steel-silver leading-relaxed mb-4">
                Mike founded Yonke Law in 2001 after years of seeing how large firms treated the people they were supposed to protect.
                Every case at Yonke Law is handled directly by Mike and his team — not passed to associates or outsourced to contract attorneys.
              </p>
              <p className="text-steel-silver leading-relaxed mb-6">
                When it comes to {area.name.toLowerCase()}, Mike brings decades of focused trial experience, a network of trusted medical and technical experts,
                and a straightforward approach: understand the facts, build the case, and prepare for trial even if the goal is settlement.
              </p>
              <Link href="/about" className="text-muted-gold hover:text-chrome-highlight transition-colors text-sm underline-offset-4 hover:underline">
                More about Mike and the team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S10: FAQ */}
      <section id="faq" className="bg-obsidian-graphite py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-[800px]">
          <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-10">Common questions</h2>
          <div className="space-y-6">
            {area.faqs.map((faq, i) => (
              <div key={i} className="border-b border-steel-silver/10 pb-6 last:border-0">
                <h3 className="text-chrome-highlight font-semibold mb-3">{faq.q}</h3>
                <p className="text-steel-silver text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S11: Take this with you */}
      <section id="take-this" className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-[1000px]">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-obsidian-graphite border border-steel-silver/10 rounded-lg p-8 hover:border-muted-gold/30 transition-colors duration-300">
              <p className="text-xs uppercase tracking-[0.2em] text-steel-silver mb-3">Printable</p>
              <h3 className="font-display text-xl text-chrome-highlight mb-3">Evidence & Records Checklist</h3>
              <p className="text-steel-silver text-sm leading-relaxed mb-6">
                What to gather, who to contact, and the deadlines that matter for your {area.name.toLowerCase()} case.
              </p>
              <Link href="/resources" className="text-muted-gold hover:text-chrome-highlight transition-colors text-sm font-semibold">
                View Resources →
              </Link>
            </div>
            <div className="bg-obsidian-graphite border border-steel-silver/10 rounded-lg p-8 hover:border-muted-gold/30 transition-colors duration-300">
              <p className="text-xs uppercase tracking-[0.2em] text-steel-silver mb-3">Or — Walk Through It Digitally</p>
              <h3 className="font-display text-xl text-chrome-highlight mb-3">Start Your Case Review</h3>
              <p className="text-steel-silver text-sm leading-relaxed mb-6">
                Answer a few questions about your situation. Your responses are saved and become the start of your case file if you proceed.
              </p>
              <Link href={`/talk-to-us?intake=${area.slug}`} className="bg-muted-gold text-obsidian-graphite font-semibold px-6 py-3 rounded text-sm hover:bg-muted-gold/90 transition-colors inline-block">
                Start the digital intake →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S12: Final CTA */}
      <section id="consultation" className="bg-obsidian-graphite py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-chrome-highlight mb-6">Ready to talk about your {area.name.toLowerCase()} case?</h2>
          <p className="text-steel-silver mb-8">Free consultation. No fee unless we recover.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:8162216400" className="bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded hover:bg-muted-gold/90 transition-colors">
              Call 816-221-6400
            </a>
            <Link href="/talk-to-us" className="text-steel-silver hover:text-chrome-highlight transition-colors underline-offset-4 hover:underline">
              Or reach out online →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
