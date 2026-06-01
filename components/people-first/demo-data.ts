/* ──────────────────────────────────────────────────────────────
   People First v2.0 — demo-data.ts
   All state seeded from this file. Zero persistence.
   ────────────────────────────────────────────────────────────── */

// ── Types ────────────────────────────────────────────────────

export type StepKey =
  | "intake"
  | "consultation"
  | "retained"
  | "investigation"
  | "demand"
  | "call_preparation"
  | "medical_treatment"
  | "negotiation"
  | "litigation"
  | "discovery"
  | "deposition"
  | "trial_prep"
  | "trial"
  | "settlement"
  | "testimonial";

export interface Step {
  key: StepKey;
  name: string;
  plainTitle: string;
  detailBody: string;
  whatHappensNext: string;
}

export interface Message {
  id: string;
  from: "person" | "firm";
  body: string;
  timestamp: string;
  attachments?: FileRef[];
}

export interface FileRef {
  name: string;
  size: string;
  type: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  note?: string;
}

export type PulseState = "Angry" | "Sad" | "Confused" | "Doing OK" | "Good";

export interface VideoRef {
  title: string;
  src: string;
  description: string;
}

export interface ChecklistRef {
  title: string;
  href: string;
  description: string;
}

// ── Demo Person ──────────────────────────────────────────────

export const DEMO_PERSON = {
  name: "Sarah M.",
  incident: "Rear-end collision",
  location: "I-435 & Holmes",
  incidentDate: "2025-10-12",
  currentStepKey: "medical_treatment" as StepKey,
};

// ── 15-Step Reference ────────────────────────────────────────

export const STEPS: Step[] = [
  {
    key: "intake",
    name: "Initial Intake",
    plainTitle: "Getting to know your situation",
    detailBody:
      "We're learning the facts of what happened to you — the who, what, where, and when. This is the foundation of everything that follows.",
    whatHappensNext:
      "Once we have a clear picture, we'll schedule a consultation to talk through your options.",
  },
  {
    key: "consultation",
    name: "Consultation Scheduled",
    plainTitle: "Your consultation is set",
    detailBody:
      "You have a consultation scheduled with Mike. This is a private conversation — no pressure, no commitment. Mike will listen, ask questions, and give you a straight read on your situation.",
    whatHappensNext:
      "After the consultation, Mike will let you know whether he believes we can help and what the next steps would be.",
  },
  {
    key: "retained",
    name: "Attorney Retained",
    plainTitle: "We're working for you now",
    detailBody:
      "You've retained Yonke Law. From this point forward, we handle everything — the paperwork, the phone calls, the insurance companies. You focus on getting better.",
    whatHappensNext:
      "We'll begin our investigation into what happened and start gathering the evidence we need.",
  },
  {
    key: "investigation",
    name: "Investigation",
    plainTitle: "Investigating what happened",
    detailBody:
      "We're gathering evidence — police reports, witness statements, photographs, video footage. We're building the factual record of what happened to you and who is responsible.",
    whatHappensNext:
      "Once the investigation is complete, we'll prepare a formal demand to the responsible party's insurance company.",
  },
  {
    key: "demand",
    name: "Demand Letter",
    plainTitle: "Sending the demand",
    detailBody:
      "We've sent a formal demand letter to the insurance company. This document lays out what happened, why their insured is responsible, and what fair compensation looks like.",
    whatHappensNext:
      "The insurance company has a window to respond. This part takes time — usually a few weeks. No news isn't bad news.",
  },
  {
    key: "call_preparation",
    name: "Call Preparation",
    plainTitle: "Preparing you for what's ahead",
    detailBody:
      "We're getting you ready for the conversations and decisions that are coming. Mike will walk you through what to expect so nothing catches you off guard.",
    whatHappensNext:
      "You'll continue medical treatment while we handle the legal side. Your health comes first.",
  },
  {
    key: "medical_treatment",
    name: "Medical Treatment & Documentation",
    plainTitle: "Gathering your medical records",
    detailBody:
      "Right now we're collecting your medical records, treatment notes, and bills. These documents are the backbone of your case — they prove what happened to your body and what it's costing you.",
    whatHappensNext:
      "Once your treatment stabilizes and we have complete records, we'll move into negotiation with the insurance company.",
  },
  {
    key: "negotiation",
    name: "Negotiation",
    plainTitle: "Negotiating with the insurance company",
    detailBody:
      "We're in active negotiation with the insurance company. This is where the back-and-forth happens — offers, counteroffers, and the push for fair compensation.",
    whatHappensNext:
      "If they offer a fair number, we settle. If they don't, we file a lawsuit. Either way, you'll know before anything happens.",
  },
  {
    key: "litigation",
    name: "Litigation Filed",
    plainTitle: "We've filed a lawsuit",
    detailBody:
      "The insurance company didn't offer what your case is worth, so we've filed a lawsuit. This is not unusual — it's how we get leverage to fight for what you deserve.",
    whatHappensNext:
      "The discovery phase begins. Both sides exchange information and evidence. We'll guide you through every step.",
  },
  {
    key: "discovery",
    name: "Discovery",
    plainTitle: "Exchanging evidence",
    detailBody:
      "Both sides are exchanging documents, answering written questions, and gathering evidence. This is the legal process working — it takes time, but it's building your case.",
    whatHappensNext:
      "Depositions are next. We'll prepare you thoroughly before you sit for yours.",
  },
  {
    key: "deposition",
    name: "Deposition Prep",
    plainTitle: "Preparing for your deposition",
    detailBody:
      "A deposition is sworn testimony — the other side's attorney asks you questions, and your answers are recorded. It sounds intimidating, but Mike will prepare you so you know exactly what to expect.",
    whatHappensNext:
      "After depositions, both sides have a clearer picture. This often leads to settlement talks, or we prepare for trial.",
  },
  {
    key: "trial_prep",
    name: "Trial Preparation",
    plainTitle: "Getting ready for trial",
    detailBody:
      "We're preparing your case for trial — organizing evidence, preparing witnesses, and building the presentation that tells your story to a jury.",
    whatHappensNext:
      "Trial. We present your case, and a jury decides. We've been building toward this from day one.",
  },
  {
    key: "trial",
    name: "Trial",
    plainTitle: "Your day in court",
    detailBody:
      "Your case is being presented to a jury. Mike is in the courtroom fighting for you. Everything we've built — every record, every witness, every fact — comes together now.",
    whatHappensNext:
      "The jury decides. Whatever the outcome, Mike will walk you through what it means and what comes next.",
  },
  {
    key: "settlement",
    name: "Settlement",
    plainTitle: "Settlement",
    detailBody:
      "Your case has resolved. This page shows you the breakdown — what you receive, what covers your medical expenses, and what the fee is. Clear. No surprises.",
    whatHappensNext:
      "You sign the settlement documents and receive your compensation. Then, if you're willing, we'd love to hear your story.",
  },
  {
    key: "testimonial",
    name: "Testimonial & Referral",
    plainTitle: "You made it",
    detailBody:
      "We're proud to have walked this with you. If you're willing, your words can help the next person who's standing where you were.",
    whatHappensNext:
      "Leave a testimonial, refer a friend, or simply log out knowing your case was handled the way it should be.",
  },
];

// ── Panel 2 — Action Needed ──────────────────────────────────

export const ACTION_NEEDED = {
  state: "yes" as "yes" | "no",
  title: "Upload your chiropractor visit summaries",
  body: "We need your most recent chiropractor visit summaries to complete the medical documentation for your case. You can upload them here or take a photo of the paperwork.",
  thread: [
    {
      id: "act-1",
      from: "firm" as const,
      body: "Sarah — when you get a chance, can you upload your chiropractor visit summaries from the last 3 months? We need them for the medical records package.",
      timestamp: "2026-05-28T10:15:00",
    },
  ] satisfies Message[],
};

// ── Panel 3 — Calendar & Messages ────────────────────────────

export const CALENDAR_DATA = {
  events: [
    {
      id: "cal-1",
      title: "Check-in call with Mike",
      date: "2026-06-06",
      time: "10:00 AM",
      note: "Brief update on medical records status.",
    },
    {
      id: "cal-2",
      title: "Chiropractor appointment",
      date: "2026-06-10",
      time: "2:30 PM",
    },
  ] satisfies CalendarEvent[],
  hasUnread: true,
  thread: [
    {
      id: "msg-1",
      from: "firm" as const,
      body: "Got your records — exactly what we needed. Nothing for you this week. I'll check in Friday.",
      timestamp: "2026-05-30T14:22:00",
    },
    {
      id: "msg-2",
      from: "person" as const,
      body: "Thanks Mike. Quick question — should I keep going to the chiropractor or wait?",
      timestamp: "2026-05-30T15:10:00",
    },
    {
      id: "msg-3",
      from: "firm" as const,
      body: "Keep going. Your treatment record is one of the most important parts of your case. Don't stop until your doctor says you're done.",
      timestamp: "2026-05-30T15:45:00",
    },
  ] satisfies Message[],
};

// ── Pulse States ─────────────────────────────────────────────

export const PULSE_STATES: PulseState[] = [
  "Good",
  "Doing OK",
  "Confused",
  "Sad",
  "Angry",
];

// ── Help Library (curated) ───────────────────────────────────

export const HELP_VIDEOS: VideoRef[] = [
  {
    title: "The People Portal — What to Expect",
    src: "https://www.youtube.com/embed/sLcrjRp8qPc?rel=0",
    description: "A walkthrough of how People First works and what you'll see.",
  },
  {
    title: "Preparing for a Deposition",
    src: "/videos/yl-preparing-for-a-deposition.mp4",
    description:
      "What a deposition is, what to expect, and how to prepare.",
  },
  {
    title: "The Universal Playbook — Rules of Survival",
    src: "/videos/The_Universal_Playbook__Rules_of_Survival.mp4",
    description:
      "Essential rules to protect your health, your rights, and your claim.",
  },
];

export const HELP_CHECKLISTS: ChecklistRef[] = [
  {
    title: "Personal Injury Checklist",
    href: "/resources/yl-personal-injury-checklist.pdf",
    description: "Essential steps after any injury.",
  },
  {
    title: "Car Accident Checklist",
    href: "/resources/Yonke-Law-Car-Accident-Checklist.pdf",
    description: "What to do after a car accident.",
  },
  {
    title: "Truck Accident Checklist",
    href: "/resources/Yonke-Law-Truck-Accident-Checklist.pdf",
    description: "Steps specific to truck accidents.",
  },
  {
    title: "Medical Malpractice Checklist",
    href: "/resources/Yonke-Law-Medical-Malpractice-Checklist.pdf",
    description: "Protecting your rights after medical error.",
  },
  {
    title: "Wrongful Death Checklist",
    href: "/resources/Yonke-Law-Wrongful-Death-Checklist.pdf",
    description: "Guidance for families after a wrongful death.",
  },
  {
    title: "Workers' Compensation Checklist",
    href: "/resources/Yonke-Law-Workers-Compensation-Checklist.pdf",
    description: "Steps after a workplace injury.",
  },
  {
    title: "Slip and Fall Checklist",
    href: "/resources/Yonke-Law-Slip-and-Fall-Premises-Checklist.pdf",
    description: "What to do after a premises injury.",
  },
  {
    title: "Catastrophic Injury Caregiver Checklist",
    href: "/resources/Yonke-Law-Catastrophic-Injury-Caregiver-Checklist.pdf",
    description: "A guide for caregivers of catastrophically injured people.",
  },
];

// ── Communication constant ───────────────────────────────────

export const COMMS_RECIPIENT = "Mike Yonke";
