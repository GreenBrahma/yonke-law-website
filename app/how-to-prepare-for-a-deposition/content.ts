/* -------------------------------------------------------
   /how-to-prepare-for-a-deposition — shared content

   One source for both the rendered HTML and the JSON-LD,
   so the schema can never drift from what's on the page.

   REVIEW BEFORE PUBLISH (Michael T. Yonke):
   - All copy on this page
   - Missouri Supreme Court Rule 57.03 and K.S.A. 60-230 citations
   - VIDEO_UPLOAD_DATE (confirm in YouTube Studio)
   - PUBLISHED date (set to the actual go-live date)
   ------------------------------------------------------- */

export const PAGE_URL = "https://yonke.law/how-to-prepare-for-a-deposition";

export const PUBLISHED = "2026-10-11"; // go-live date, approved by Geoff 2026-10-11
export const MODIFIED = "2026-10-11";

/* ---- Video ---- */

export const VIDEO_ID = "z4UjzdCjVaU";
export const VIDEO_TITLE = "How to Prepare for Your Deposition";
export const VIDEO_DESCRIPTION =
  "What a deposition is, why it is defense and not offense, the four rules (Listen, Pause, Answer, Stop), the five safe answers, the three phases of a deposition, and how we prepare together.";
export const VIDEO_DURATION_ISO = "PT4M19S"; // measured from the source file: 4:19
export const VIDEO_DURATION_SECONDS = 259;
export const VIDEO_UPLOAD_DATE = "2026-10-11"; // approved 2026-10-11
export const YOUTUBE_CHANNEL = "https://www.youtube.com/@YonkeLaw";

export type Chapter = { start: number; label: string };

/* Chapter times taken from the video's own audio. */
export const CHAPTERS: Chapter[] = [
  { start: 0, label: "What a deposition is" },
  { start: 31, label: "Why we prepare you" },
  { start: 50, label: "Defense, not offense" },
  { start: 100, label: "The 4 rules: Listen, Pause, Answer, Stop" },
  { start: 140, label: "The five safe answers" },
  { start: 150, label: "Never guess" },
  { start: 179, label: "The 3 phases of your deposition" },
  { start: 212, label: "Your prep package" },
  { start: 242, label: "You're ready" },
];

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function watchUrl(start = 0): string {
  return start > 0
    ? `https://www.youtube.com/watch?v=${VIDEO_ID}&t=${start}s`
    : `https://www.youtube.com/watch?v=${VIDEO_ID}`;
}

/* ---- The four rules (signature framework) ---- */

export const FOUR_RULES = [
  {
    word: "Listen",
    text: "Let the attorney finish the whole question before you start thinking about your answer.",
  },
  {
    word: "Pause",
    text: "Take a breath before every answer. It gives you time to understand the question and gives your attorney time to object.",
  },
  {
    word: "Answer",
    text: "Answer only what was asked, literally. If the question is yes or no, the answer is yes or no.",
  },
  {
    word: "Stop",
    text: "Then stop talking. The silence will feel uncomfortable. Let it sit. Filling it is how people overshare.",
  },
] as const;

/* ---- The five safe answers (matches the video) ---- */

export const SAFE_ANSWERS = [
  "Yes.",
  "No.",
  "I don't know.",
  "I don't fully understand the question.",
  "I'd like to take a break.",
] as const;

/* ---- The three phases ---- */

export const THREE_PHASES = [
  {
    title: "Background",
    tag: "Keep it short",
    text: "Where you've lived, worked, and gone to school, and your medical history. Short, factual answers.",
  },
  {
    title: "What happened",
    tag: "Keep it short",
    text: "The incident itself. Stick to the facts you know firsthand.",
  },
  {
    title: "Life after",
    tag: "Tell it fully",
    text: "The one part where you open up. Your pain, your limits, what you can't do anymore, and how this changed your work and your daily life. Say all of it.",
  },
] as const;

/* ---- FAQ (rendered in HTML and as FAQPage JSON-LD) ---- */

export const FAQS = [
  {
    q: "How long does a deposition take?",
    a: "Often a few hours, though it depends on the case. We'll give you a realistic estimate for yours before the day.",
  },
  {
    q: "Where does a deposition happen?",
    a: "Usually in a law office conference room, sometimes by video call. Not in a courtroom.",
  },
  {
    q: "Will my lawyer be there?",
    a: "Yes. Mike or your attorney sits with you the whole time and can object to unfair questions.",
  },
  {
    q: "Can I bring notes?",
    a: "Generally, don't bring notes unless we tell you to. Anything you bring may be shown to the other side. We'll review what you need beforehand.",
  },
  {
    q: "What if I don't know or can't remember?",
    a: "Say so. \"I don't know\" means you never had the information. \"I don't recall\" means you may have known once but can't remember now. Both are truthful answers. Never guess.",
  },
  {
    q: "Can I take a break?",
    a: "Yes, just not while a question is waiting for an answer. Answer first, then ask for the break.",
  },
  {
    q: "What should I wear?",
    a: "Clean and simple, like a job interview.",
  },
  {
    q: "Can I fix a mistake afterward?",
    a: "You'll usually have a chance to read the transcript and note corrections. We'll walk you through it.",
  },
  {
    q: "Will my deposition be on video?",
    a: "Many are. Assume the camera is on and a jury may see it.",
  },
  {
    q: "What if I'm nervous?",
    a: "That's normal. We practice together until you feel ready. You won't walk in alone.",
  },
] as const;

/* ---- Video transcript (spoken lines only, verbatim) ----
   Transcribed from the source video. The narration itself contains
   "every client we represent" and "guarantees" (4:02-4:13); these are
   kept verbatim because a transcript must match the audio. Changing
   them requires re-cutting the video. Flagged for Mike's review. */

export const TRANSCRIPT: { start: number; heading: string; paragraphs: string[] }[] = [
  {
    start: 0,
    heading: "What a deposition is",
    paragraphs: [
      "Welcome to Yonke Law. If you are watching this, you are preparing for a deposition. A deposition is sworn testimony taken outside of court in front of a court reporter. Every question asked and every answer given is officially recorded and permanent. Every word you say in that room can be read back to a judge or jury at trial.",
      "The opposing attorney asking the questions has a specific job today: looking for gaps in your memory, inconsistencies in your timeline, and any detail that weakens your case.",
    ],
  },
  {
    start: 31,
    heading: "Why we prepare you",
    paragraphs: [
      "We do not let you walk into that environment blind. We require rigorous, disciplined preparation before you ever sit down, using a specific strategic framework to turn a high-pressure interrogation into a controlled, manageable process. Entering that room with a systematic plan is how you protect the rightful outcome of your case.",
    ],
  },
  {
    start: 50,
    heading: "Defense, not offense",
    paragraphs: [
      "To execute this plan, you have to adopt a specific mindset for the day: playing a game of pure defense. This split-screen model shows the difference between the two main arenas. On the right is trial, where we play offense to build your claims. On the left is the deposition, where you play defense to minimize risk. You cannot win a deposition, but you can easily lose it.",
      "Opposing counsel will use prolonged silence, leading questions, and friendly conversation to breach your defenses. They want to pull out long stories, unnecessary context, and guesses to use against you later. Your counter-strategy is simple: you answer only the exact question asked. If they do not ask the right question, you do not volunteer the answer. Embracing this restricted defensive posture prevents you from accidentally handing them information that damages your case.",
    ],
  },
  {
    start: 100,
    heading: "The 4 rules: Listen, Pause, Answer, Stop",
    paragraphs: [
      "To maintain that defense, there are exactly four rules for answering any question. Four, not ten. Rule one: Listen. Wait for the attorney to completely finish speaking. Second: pause before every answer, giving you time to comprehend and your attorney time to object. Third: answer with a literal response. Nothing else. Fourth: stop.",
      "The silence will feel uncomfortable. You will feel a natural human urge to keep talking just to fill the quiet room. Let it sit. Listen. Pause. Answer. Stop. Executing that exact sequence on every question is your tactical shield.",
    ],
  },
  {
    start: 140,
    heading: "The five safe answers",
    paragraphs: [
      "This checklist outlines the five safe answers. Yes. No. I don't know. I don't fully understand the question. And, I'd like to take a break.",
    ],
  },
  {
    start: 150,
    heading: "Never guess",
    paragraphs: [
      "Now look at this warning. The absolute golden rule of depositions is to never guess. If you offer a well-intentioned but incorrect guess, it reads as a false statement on the permanent transcript. If you are unsure, saying \"I don't know\" or \"I don't fully understand\" are not signs of ignorance. They are highly precise protective tools.",
      "Sticking strictly to this restricted menu forces the opposing attorney to do the work, ensuring you do not volunteer long, unhelpful stories.",
    ],
  },
  {
    start: 179,
    heading: "The 3 phases of your deposition",
    paragraphs: [
      "This timeline maps out the three chronological phases. Phase one covers your background, and phase two covers the incident. Both initial segments maintain extreme brevity and stick to the cold facts.",
      "Phase three covers life after the incident. This is your strategic pivot. This is the only phase where you drop your brevity. Elaborate fully on your pain, your physical limitations, and how it disrupted your life. Knowing the exact boundaries of what you will say and understanding these chronological phases strips opposing counsel of the element of surprise.",
    ],
  },
  {
    start: 212,
    heading: "Your prep package",
    paragraphs: [
      "By internalizing the defensive mindset, executing the four rules, and utilizing the five safe answers, you have secured your perimeter. Before your deposition date, you will receive a comprehensive prep package from Yonke Law. This package includes a review of the key facts in your case, specific documents you need to be familiar with, and a checklist of exactly what to expect.",
      "This is a collaborative process. We review the package together, ensuring you are completely comfortable and confident before you ever step into the room.",
    ],
  },
  {
    start: 242,
    heading: "You're ready",
    paragraphs: [
      "At Yonke Law, disciplined preparation is the foundational standard for every client we represent. Relentless commitment guarantees clarity in the moment and protects the rightful outcome of your case.",
    ],
  },
];
