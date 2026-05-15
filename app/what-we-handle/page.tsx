import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";


export const metadata: Metadata = {
  title: "What We Handle — Practice Areas | Yonke Law",
  description:
    "Yonke Law handles personal injury, medical malpractice, wrongful death, vehicle accidents, premises liability, and more in Kansas City, Missouri and Kansas.",
  alternates: { canonical: "https://yonke.law/what-we-handle/" },
};

const AREAS = [
  {
    slug: "car-accidents",
    name: "Car Accidents",
    desc: "Rear-end collisions, intersection crashes, highway pile-ups, distracted and drunk driving cases.",
    image: "/images/pa-car-accidents.png",
  },
  {
    slug: "truck-accidents",
    name: "Truck Accidents",
    desc: "18-wheelers, FMCSA violations, jackknife crashes, cargo spills, and multi-party commercial vehicle cases.",
    image: "/images/pa-truck-accidents.png",
  },
  {
    slug: "medical-malpractice",
    name: "Medical Malpractice",
    desc: "Surgical errors, diagnostic failures, medication mistakes, birth injuries, and hospital negligence.",
    image: "/images/pa-medical-malpractice.png",
  },
  {
    slug: "wrongful-death",
    name: "Wrongful Death",
    desc: "When negligence, recklessness, or intentional conduct takes a life. Claims for surviving family members.",
    image: "/images/pa-wrongful-death.png",
  },
  {
    slug: "nursing-home-abuse",
    name: "Nursing Home Abuse & Neglect",
    desc: "Physical abuse, neglect, bedsores, falls, medication errors, and financial exploitation in long-term care.",
    image: "/images/pa-nursing-home.png",
  },
  {
    slug: "workplace-injuries",
    name: "Workplace Injuries",
    desc: "Construction accidents, defective equipment, industrial incidents, and third-party claims beyond workers' comp.",
    image: "/images/pa-workplace-injuries.png",
  },
  {
    slug: "motorcycle-accidents",
    name: "Motorcycle Accidents",
    desc: "Left-turn collisions, lane-change crashes, road hazards, and the unique challenges riders face after a crash.",
    image: "/images/pa-motorcycle-accidents.png",
  },
  {
    slug: "premises-liability",
    name: "Premises Liability",
    desc: "Slip and fall, trip hazards, inadequate security, swimming pool accidents, and dangerous property conditions.",
    image: "/images/pa-premises-liability.png",
  },
  {
    slug: "product-liability",
    name: "Product Liability",
    desc: "Defective vehicles, medical devices, dangerous drugs, consumer products, and industrial equipment failures.",
    image: "/images/pa-product-liability.png",
  },
  {
    slug: "pedestrian-bicycle",
    name: "Pedestrian & Bicycle Accidents",
    desc: "Crosswalk collisions, hit-and-run, cyclist right-hooks, dooring incidents, and backing accidents.",
    image: "/images/pa-pedestrian-bicycle.png",
  },
  {
    slug: "rideshare-accidents",
    name: "Rideshare Accidents",
    desc: "Uber, Lyft, and app-based driver crashes with multi-policy insurance disputes.",
    image: "/images/pa-car-accidents.png",
  },
  {
    slug: "surgical-error",
    name: "Surgical Error",
    desc: "Wrong-site surgery, anesthesia mistakes, retained objects, and post-operative complications from negligent care.",
    image: "/images/pa-medical-malpractice.png",
  },
  {
    slug: "diagnostic-error",
    name: "Diagnostic Error",
    desc: "Missed cancer, delayed stroke diagnosis, misread imaging, and failures to refer to the right specialist.",
    image: "/images/pa-medical-malpractice.png",
  },
  {
    slug: "medication-error",
    name: "Medication Error",
    desc: "Wrong drug, wrong dose, dangerous interactions, and pharmacy or hospital medication mix-ups.",
    image: "/images/pa-medical-malpractice.png",
  },
  {
    slug: "birth-injury",
    name: "Birth Injury",
    desc: "Oxygen deprivation, delayed C-section, improper use of delivery tools, and maternal injury from negligent care.",
    image: "/images/pa-medical-malpractice.png",
  },
  {
    slug: "dog-bite",
    name: "Dog Bite",
    desc: "Dog attacks, facial scarring, child bite cases, knockdown injuries, and owner liability claims.",
    image: "/images/pa-premises-liability.png",
  },
  {
    slug: "construction-injury",
    name: "Construction Injury",
    desc: "Falls, struck-by accidents, equipment failures, electrical injuries, and third-party claims beyond workers' comp.",
    image: "/images/pa-workplace-injuries.png",
  },
  {
    slug: "sexual-abuse",
    name: "Sexual Abuse",
    desc: "Civil claims for abuse, assault, or exploitation — including institutional failure and cover-up cases.",
    image: "/images/pa-nursing-home.png",
  },
  {
    slug: "active-shooter",
    name: "Active Shooter Incident",
    desc: "Negligent security, ignored warnings, emergency response failures, and wrongful death claims.",
    image: "/images/pa-premises-liability.png",
  },
  {
    slug: "family-perspective",
    name: "When Someone You Love Was Hurt",
    desc: "Guidance for spouses, parents, and family members helping a loved one after a serious injury.",
    image: "/images/pa-wrongful-death.png",
  },
];

export default function WhatWeHandlePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian-graphite py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-gold mb-6">
            What We Handle
          </p>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl text-chrome-highlight leading-[1.15] mb-6"
            aria-label="Yonke, pronounced YONK-ee, Law practice areas"
          >
            Where we focus. Where we know what to do.
          </h1>
          <p className="text-lg md:text-xl text-steel-silver leading-relaxed max-w-2xl mx-auto">
            Practice areas we handle. Decades of focused experience in each.
            Every case is personal injury — and every case is personal.
          </p>
        </div>
      </section>

      {/* Practice Area Grid */}
      <section className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/what-we-handle/${area.slug}`}
                className="group relative bg-obsidian-graphite border border-steel-silver/10 rounded-lg overflow-hidden hover:border-muted-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-muted-gold/5"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-graphite via-obsidian-graphite/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6 -mt-12">
                  <h2 className="font-display text-xl text-chrome-highlight mb-2 group-hover:text-muted-gold transition-colors duration-300">
                    {area.name}
                  </h2>
                  <p className="text-steel-silver text-sm leading-relaxed mb-4">
                    {area.desc}
                  </p>
                  <span className="text-muted-gold text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian-graphite py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-4">
            Not sure where your situation fits?
          </h2>
          <p className="text-steel-silver mb-8">
            Tell us what happened. We&apos;ll help you understand your options.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/talk-to-us"
              className="bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded hover:bg-muted-gold/90 transition-colors"
            >
              Talk to Us
            </Link>
            <a
              href="tel:8162216400"
              className="text-steel-silver hover:text-chrome-highlight transition-colors"
            >
              or call 816-221-6400
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
