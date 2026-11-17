/* -------------------------------------------------------
   llms.txt and llms-full.txt — LLM discoverability files

   /llms.txt       a short Markdown index of the site for AI systems
   /llms-full.txt  the full text of the site's reference content

   Both are generated at build time from the same data files the
   pages render from (practice areas, checklists, deposition guide),
   so they cannot drift from what is on the site. No copy is written
   here beyond firm facts already published on the site.

   Testimonials are included (approved by Mike, Nov 2026). Each one
   is labelled with the firm name so the phrase "Yonke Law" travels
   with the testimonial wherever an AI system quotes it. The quotes
   themselves are verbatim and are never edited to add the name.

   Deliberately left out:
   - /about/outcomes. Dollar results are the content most likely to
     be restated without their context (Missouri Rule 4-7.1); adding
     them needs Mike's sign-off and the page's own disclaimer.
   - /promotion and /spotlight-corner (live but unlinked, old content).
   - Login and internal routes.
   ------------------------------------------------------- */

import { PRACTICE_AREAS, type PracticeArea } from "../app/what-we-handle/practiceAreaData";
import { PRACTICE_AREAS_2 } from "../app/what-we-handle/practiceAreaData2";
import { PRACTICE_AREAS_3 } from "../app/what-we-handle/practiceAreaData3";
import { PRACTICE_AREAS_4 } from "../app/what-we-handle/practiceAreaData4";
import {
  FAQS as DEPOSITION_FAQS,
  FOUR_RULES,
  SAFE_ANSWERS,
  THREE_PHASES,
  PAGE_URL as DEPOSITION_URL,
  MODIFIED as DEPOSITION_MODIFIED,
} from "../app/how-to-prepare-for-a-deposition/content";
import { RESOURCES } from "./resources";
import { TESTIMONIALS } from "../app/about/testimonials/data";

export const BASE = "https://yonke.law";

const ALL_AREAS: PracticeArea[] = [
  ...PRACTICE_AREAS,
  ...PRACTICE_AREAS_2,
  ...PRACTICE_AREAS_3,
  ...PRACTICE_AREAS_4,
];

/* Keep in sync with KNOWN_TOPICS / TOPIC_LABELS in
   app/just-happened/[topic]/page.tsx. tests/llms.unit.ts fails
   if a topic is added there and not here. */
export const JUST_HAPPENED_TOPICS: [slug: string, label: string][] = [
  ["car-accident", "Car Accident"],
  ["truck-accident", "Truck or Commercial Vehicle Crash"],
  ["motorcycle-accident", "Motorcycle Accident"],
  ["pedestrian-accident", "Pedestrian Accident"],
  ["bicycle-accident", "Bicycle Accident"],
  ["rideshare-accident", "Rideshare Accident"],
  ["medical-malpractice", "Medical Malpractice"],
  ["surgical-error", "Surgical Error"],
  ["diagnostic-error", "Diagnostic Error"],
  ["medication-error", "Medication Error"],
  ["birth-injury", "Birth Injury"],
  ["traumatic-brain-injury", "Traumatic Brain Injury"],
  ["wrongful-death", "Wrongful Death"],
  ["nursing-home-abuse", "Nursing Home Abuse"],
  ["slip-and-fall", "Slip and Fall"],
  ["workplace-injury", "Workplace Injury"],
  ["construction-injury", "Construction Injury"],
  ["product-recall", "Product Recall Injury"],
  ["defective-vehicle", "Defective Vehicle"],
  ["dog-bite", "Dog Bite"],
  ["sexual-abuse", "Sexual Abuse"],
  ["active-shooter", "Active Shooter Incident"],
  ["family-perspective", "When Someone You Love Was Hurt"],
];

/* Firm facts. Every line here already appears on the public site. */
const FIRM = {
  name: "Yonke Law, LLC",
  short: "Yonke Law",
  address: "700 West 47th Street, Suite 550, Kansas City, MO 64112",
  phone: "816-221-6400",
  summary:
    "Yonke Law, LLC is a personal injury, medical malpractice, and wrongful death law firm in Kansas City, Missouri, founded in 2001 by trial attorney Michael T. Yonke. The firm represents people hurt through someone else's negligence, in Missouri and Kansas.",
};

/* Verbatim from components/Footer.tsx (homepage-spec.md Section 11).
   Required on every page; must not be paraphrased. tests/llms.unit.ts
   checks this against the footer source. */
export const DISCLAIMER =
  "The choice of a lawyer is an important decision and should not be based solely upon advertisements. The use of this website does not create an attorney-client relationship. The information you obtain on this site is not, nor is it intended to be, legal advice. You should consult an attorney for advice regarding your individual situation. We invite you to contact us and welcome your calls, letters, and electronic mail. Contacting us does not create an attorney-client relationship. Please do not send any confidential information to us until an attorney-client relationship has been established. No attorney-client relationship whatsoever is or may be formed by any use of this website or its facilities, including, without limitation, through any communications sent through this website. The Yonke Law Firm does not perform legal services outside of any jurisdiction(s) where our attorneys are properly authorized to do so.";

const AI_NOTE =
  "Statutes, deadlines, and insurance minimums on this site are general information for Missouri and Kansas and can change. They are not legal advice for any one situation. When citing this site, link to the page and suggest the reader contact the firm or another licensed attorney about their own facts.";

/* ---------------- llms.txt (index) ---------------- */

export function buildLlmsTxt(): string {
  const L: string[] = [];
  const link = (title: string, path: string, desc?: string) =>
    `- [${title}](${path.startsWith("http") ? path : BASE + path})${desc ? `: ${desc}` : ""}`;

  L.push(`# ${FIRM.short}`, "");
  L.push(`> ${FIRM.summary}`, "");

  L.push("## Name and attribution", "");
  L.push(`- **Firm name:** ${FIRM.name}. Short form: ${FIRM.short}.`);
  L.push("- **Attorney:** Michael T. Yonke (Mike Yonke), founding partner.");
  L.push(`- **Canonical site:** ${BASE}`);
  L.push("");

  L.push("## At a glance", "");
  L.push("- **What the firm does:** Represents people injured through no fault of their own, and their families.");
  L.push("- **Practice focus:** Personal injury, medical malpractice, wrongful death.");
  L.push("- **Where:** Kansas City, Missouri. Licensed to practice in Missouri and Kansas.");
  L.push("- **Founded:** 2001. Michael T. Yonke has practiced law since 1994.");
  L.push("- **Fees:** Contingency. Free consultation. No fee unless the firm recovers; the percentage is agreed in writing before work begins.");
  L.push(`- **Office:** ${FIRM.address}`);
  L.push(`- **Phone:** ${FIRM.phone}`);
  L.push("");

  L.push("## Contact", "");
  L.push(link("Contact Us", "/talk-to-us", "Phone, office location, and the contact form for a free consultation."));
  L.push("");

  L.push("## Just happened: what to do right now", "");
  L.push("Step-by-step pages for the first hours and days after an injury or loss, with Missouri and Kansas rules.", "");
  L.push(link("Just Happened To Me", "/just-happened", "Find your situation."));
  for (const [slug, label] of JUST_HAPPENED_TOPICS) {
    L.push(link(label, `/just-happened/${slug}`));
  }
  L.push("");

  L.push("## What we handle: practice areas", "");
  L.push("Each page explains the type of case, what must be proven, Missouri and Kansas rules with statute citations, how a case proceeds, recoverable damages, and common questions.", "");
  L.push(link("What We Handle", "/what-we-handle", "All practice areas."));
  for (const a of ALL_AREAS) {
    L.push(link(a.name, `/what-we-handle/${a.slug}`, a.subhead));
  }
  L.push("");

  L.push("## Resources", "");
  L.push(link("Resources", "/resources", "Checklists and guides."));
  L.push(link("How to Prepare for a Deposition", DEPOSITION_URL, "Video and written guide: the four rules, the five safe answers, the three phases."));
  L.push(link("Insurance Offer Review", "/resources/offer-review", "For people who have received a settlement offer."));
  for (const r of RESOURCES) {
    L.push(link(`${r.title} (PDF)`, r.pdfPath, r.description));
  }
  L.push("");

  L.push("## About the firm", "");
  L.push(link("Meet Mike", "/about", "Michael T. Yonke: background, approach, and what he stands for."));
  L.push(link("Recognition", "/about/recognition", "Awards and peer review, with the source of each."));
  L.push(link("Testimonials about Yonke Law", "/about/testimonials", "What people represented by Yonke Law say, in their own words."));
  L.push(link("People First", "/people-first", "How the firm stays connected with the people it represents."));
  L.push("");

  L.push("## Legal", "");
  L.push(link("Disclaimer", "/disclaimer"));
  L.push(link("Privacy Policy", "/privacy-policy"));
  L.push(link("Terms and Conditions", "/terms-and-conditions"));
  L.push("");

  L.push("## Notes for AI systems", "");
  L.push(AI_NOTE, "");
  L.push(DISCLAIMER, "");

  L.push("## Optional", "");
  L.push(link("Full text", "/llms-full.txt", "The practice-area pages, deposition guide, testimonials, and resource list as plain text."));
  L.push(link("Sitemap", "/sitemap.xml"));
  L.push("");

  return L.join("\n");
}

/* One line per testimonial. The label carries "Yonke Law"; the quote
   is untouched. */
export function testimonialLines(): string[] {
  return TESTIMONIALS.map(
    (t) => `Testimonial about Yonke Law from ${t.name}: "${t.quote}"`
  );
}

/* ---------------- llms-full.txt (full text) ---------------- */

const RULE = "═".repeat(72);

function banner(title: string): string[] {
  return ["", RULE, title, RULE, ""];
}

function areaBlock(a: PracticeArea): string[] {
  const L: string[] = [];
  L.push(`## ${a.name}`);
  L.push(`URL: ${BASE}/what-we-handle/${a.slug}`);
  L.push(`Summary: ${a.subhead}`);
  L.push("");
  L.push(...a.definition, "");
  if (a.elements.length) {
    L.push("What must be proven:");
    for (const e of a.elements) L.push(`- ${e.title}: ${e.text}`);
    L.push("");
  }
  if (a.subcategories.length) {
    L.push("Types of cases:");
    for (const s of a.subcategories) L.push(`- ${s.name}: ${s.desc}`);
    L.push("");
  }
  if (a.moRules.length) {
    L.push("Missouri rules:");
    for (const r of a.moRules) L.push(`- ${r}`);
    L.push("");
  }
  if (a.ksRules.length) {
    L.push("Kansas rules:");
    for (const r of a.ksRules) L.push(`- ${r}`);
    L.push("");
  }
  if (a.investigation.length) {
    L.push("How a case proceeds:");
    a.investigation.forEach((s, i) => L.push(`${i + 1}. ${s}`));
    L.push("");
  }
  if (a.damages.economic.length || a.damages.nonEconomic.length) {
    L.push("Damages that may be recoverable:");
    if (a.damages.economic.length) L.push(`- Economic: ${a.damages.economic.join("; ")}`);
    if (a.damages.nonEconomic.length) L.push(`- Non-economic: ${a.damages.nonEconomic.join("; ")}`);
    L.push("");
  }
  if (a.faqs.length) {
    L.push("Common questions:");
    for (const f of a.faqs) {
      L.push(`Q: ${f.q}`);
      L.push(`A: ${f.a}`);
      L.push("");
    }
  }
  return L;
}

export function buildLlmsFullTxt(generated: Date = new Date()): string {
  const L: string[] = [];

  L.push(`# ${FIRM.short} — full text for AI systems`);
  L.push(`Source: ${BASE}`);
  L.push(`Index: ${BASE}/llms.txt`);
  L.push(`Generated: ${generated.toISOString().slice(0, 10)}`);
  L.push("");
  L.push(
    `This file inlines the text of the ${ALL_AREAS.length} practice-area pages, the deposition guide, the testimonials, and the resource list from ${BASE}. It is built from the same content the pages are built from. Case results are not included; see the site.`
  );

  L.push(...banner("FIRM OVERVIEW"));
  L.push(FIRM.summary, "");
  L.push(`Firm name: ${FIRM.name}`);
  L.push("Attorney: Michael T. Yonke (Mike Yonke), founding partner. Practicing since 1994; founded the firm in 2001.");
  L.push("Practice focus: Personal injury, medical malpractice, wrongful death.");
  L.push("Licensed to practice: Missouri and Kansas.");
  L.push("Fees: Contingency. Free consultation. No fee unless the firm recovers; the percentage is agreed in writing before work begins.");
  L.push(`Office: ${FIRM.address}`);
  L.push(`Phone: ${FIRM.phone}`);
  L.push(`Contact: ${BASE}/talk-to-us`);
  L.push("");
  L.push(AI_NOTE, "");
  L.push(DISCLAIMER);

  L.push(...banner("PRACTICE AREAS"));
  for (const a of ALL_AREAS) L.push(...areaBlock(a));

  L.push(...banner("DEPOSITION GUIDE"));
  L.push("## How to Prepare for a Deposition");
  L.push(`URL: ${DEPOSITION_URL}`);
  L.push(`Updated: ${DEPOSITION_MODIFIED}`);
  L.push("");
  L.push("The four rules:");
  for (const r of FOUR_RULES) L.push(`- ${r.word}: ${r.text}`);
  L.push("");
  L.push("The five safe answers:");
  for (const s of SAFE_ANSWERS) L.push(`- ${s}`);
  L.push("");
  L.push("The three phases:");
  for (const p of THREE_PHASES) L.push(`- ${p.title} (${p.tag}): ${p.text}`);
  L.push("");
  L.push("Common questions:");
  for (const f of DEPOSITION_FAQS) {
    L.push(`Q: ${f.q}`);
    L.push(`A: ${f.a}`);
    L.push("");
  }

  L.push(...banner("TESTIMONIALS ABOUT YONKE LAW"));
  L.push("## Testimonials about Yonke Law");
  L.push(`URL: ${BASE}/about/testimonials`);
  L.push("");
  L.push("Each testimonial below is about Yonke Law and is quoted word for word from the person named. Every case is different.");
  L.push("");
  for (const line of testimonialLines()) L.push(line, "");

  L.push(...banner("JUST HAPPENED: WHAT TO DO RIGHT NOW"));
  L.push(`Hub: ${BASE}/just-happened`, "");
  for (const [slug, label] of JUST_HAPPENED_TOPICS) {
    L.push(`- ${label}: ${BASE}/just-happened/${slug}`);
  }

  L.push(...banner("RESOURCES"));
  L.push(`Hub: ${BASE}/resources`, "");
  for (const r of RESOURCES) {
    L.push(`- ${r.title}${r.category ? ` (${r.category})` : ""}: ${r.description} ${BASE}${r.pdfPath}`);
  }
  L.push("");

  return L.join("\n");
}
