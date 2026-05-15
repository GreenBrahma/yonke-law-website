import {
  Map,
  FileText,
  BookOpen,
  MessageSquare,
  Calendar,
  Heart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PANELS: {
  name: string;
  description: string;
  why: string;
  icon: LucideIcon;
}[] = [
  {
    name: "Roadmap to Justice",
    description:
      "A visual tracker of all fourteen stages of your case, from application through resolution.",
    why: "You always know exactly where you are and what is next.",
    icon: Map,
  },
  {
    name: "Documents",
    description:
      "Every file related to your case — yours and ours — with a live status on each one.",
    why: "Nothing gets lost in an inbox. You see what is received, reviewed, verified, or flagged.",
    icon: FileText,
  },
  {
    name: "Journal",
    description:
      "A structured log for medical visits, pain levels, missed work, and daily impact.",
    why: "Your day-to-day becomes evidence. Categorized the way damages are categorized in a claim.",
    icon: BookOpen,
  },
  {
    name: "Messages",
    description:
      "A direct line to the Yonke Law team, threaded by case milestone.",
    why: "No more wondering if your email got through. You see it land and you see it answered.",
    icon: MessageSquare,
  },
  {
    name: "Calendar & Events",
    description:
      "Depositions, consultations, court dates, and scene walk-throughs — each one with prep notes attached.",
    why: "You walk into every meeting prepared, not guessing.",
    icon: Calendar,
  },
  {
    name: "Well-Being Check",
    description:
      "A simple way to tell us how you\u2019re doing emotionally at every stage.",
    why: "A personal injury case is not just a legal fight. We watch how you are holding up, and we act on it.",
    icon: Heart,
  },
];

export function WhatYouSeeSection() {
  return (
    <section className="bg-obsidian-graphite py-16 md:py-24 px-4 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-chrome-highlight leading-[1.15] mb-4">
            What You See Inside People First
          </h2>
          <p className="text-lg text-steel-silver max-w-2xl mx-auto">
            Six panels. Each one gives you visibility into a part of your case
            that most firms keep behind a desk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PANELS.map((panel) => (
            <div
              key={panel.name}
              className="bg-charcoal-slate rounded-lg p-6 border border-steel-silver/10 hover:border-muted-gold/30 transition-colors duration-200"
            >
              <div
                className="mb-4"
                role="img"
                aria-label={panel.name}
              >
                <panel.icon className="w-8 h-8 text-muted-gold" />
              </div>

              <h3 className="font-display text-xl text-chrome-highlight mb-3">
                {panel.name}
              </h3>

              <p className="text-steel-silver text-sm leading-relaxed mb-4">
                {panel.description}
              </p>

              <p className="text-muted-gold text-sm italic">
                {panel.why}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

