/* ===========================================================
   Chatbot Knowledge Base — Sourced from verified MO/KS legal catalog
   
   CRITICAL: This is INFORMATIONAL content only. The chatbot must
   NEVER present any of this as legal advice. Every response must
   include the disclaimer that this is general legal information
   and the user should consult an attorney.
   =========================================================== */

export interface KnowledgeEntry {
  keywords: string[];
  category: string;
  question: string;
  answer: string;
  statutes?: string[];
}

export const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    keywords: ["negligence", "elements", "prove", "personal injury", "what do i need"],
    category: "Foundational Law",
    question: "What are the elements of a negligence case?",
    answer: `In both Missouri and Kansas, a personal injury negligence case generally requires four elements:

1. **Duty of Care** — The other party owed a legal duty to act as a reasonably prudent person.
2. **Breach of Duty** — They failed to meet that standard.
3. **Causation** — The breach directly caused the injury.
4. **Damages** — There was actual, provable harm.

Missouri uses a *pure comparative fault* system (RSMo § 537.765) — a person may recover even if largely at fault, with damages reduced proportionately. Kansas uses a *modified comparative fault* rule (KSA § 60-258a) — recovery is barred if fault is 50% or more.`,
    statutes: ["RSMo § 537.765", "KSA § 60-258a"],
  },
  {
    keywords: ["statute of limitations", "deadline", "how long", "filing deadline", "time limit", "too late"],
    category: "Filing Deadlines",
    question: "What are the filing deadlines?",
    answer: `Filing deadlines vary by claim type and state. Key general deadlines:

**Missouri:**
• General personal injury: 5 years (RSMo § 516.120)
• Medical malpractice: 2 years (RSMo § 516.105)
• Wrongful death: 3 years (RSMo § 537.100)

**Kansas:**
• General personal injury: 2 years (KSA § 60-513)
• Medical malpractice: 2 years (KSA § 60-513(c))
• Wrongful death: 2 years (KSA § 60-513(a)(5))

These deadlines are strict. Missing them can permanently bar a claim. Specific situations (minors, discovery rule, government claims) may have different timelines.`,
    statutes: ["RSMo § 516.120", "RSMo § 516.105", "RSMo § 537.100", "KSA § 60-513"],
  },
  {
    keywords: ["car accident", "auto accident", "vehicle", "crash", "wreck", "fender bender", "hit", "collision"],
    category: "Motor Vehicle Accidents",
    question: "What should I know about car accident cases?",
    answer: `After a car accident in Missouri or Kansas, fault and recovery depend on the state:

**Missouri (Pure Comparative Fault — RSMo § 537.765):**
Even if partially at fault, a person may still recover damages reduced by their percentage of fault. There is no threshold that bars recovery.

**Kansas (Modified Comparative Fault — KSA § 60-258a):**
Recovery is only possible if fault is 49% or less. At 50% or more fault, recovery is barred entirely.

**Types of damages generally available:**
• Medical expenses (past and future)
• Lost wages and earning capacity
• Pain and suffering
• Property damage
• Emotional distress

**Filing deadlines:** 5 years in Missouri, 2 years in Kansas.`,
    statutes: ["RSMo § 537.765", "KSA § 60-258a"],
  },
  {
    keywords: ["medical malpractice", "doctor", "hospital", "surgery", "misdiagnosis", "surgical error", "medical error", "medical negligence"],
    category: "Medical Malpractice",
    question: "What are the basics of a medical malpractice claim?",
    answer: `Medical malpractice claims in both states require proof that a healthcare provider failed to meet the accepted standard of care, and that failure caused harm.

**Missouri (RSMo Chapter 538):**
• An affidavit of merit from a qualified provider is required before filing (RSMo § 538.225)
• Noneconomic damage caps: $400,000 standard / $700,000 catastrophic (adjusted for inflation)
• SOL: 2 years, with a 10-year statute of repose

**Kansas (KSA § 60-513):**
• A medical malpractice screening panel hearing is required before filing (KSA § 65-4901)
• Noneconomic damage cap: $350,000
• SOL: 2 years, with a 4-year statute of repose

Expert witnesses are typically required in both states.`,
    statutes: ["RSMo § 538.225", "RSMo § 538.210", "KSA § 60-513", "KSA § 65-4901"],
  },
  {
    keywords: ["wrongful death", "death", "died", "killed", "fatal", "family member died", "lost someone"],
    category: "Wrongful Death",
    question: "What are wrongful death claims?",
    answer: `A wrongful death action may be brought when someone dies due to another party's negligence or wrongful act.

**Missouri (RSMo § 537.080):**
• Who may file (priority): spouse, children, parents → siblings → court-appointed plaintiff
• Recoverable: lost income, funeral costs, loss of companionship, services, guidance
• NOT recoverable: grief and bereavement
• SOL: 3 years

**Kansas (KSA § 60-1901):**
• Any heir at law who sustained a loss may file
• Noneconomic damage cap: $250,000 (KSA § 60-1903)
• SOL: 2 years

Only one action may be brought per defendant per decedent in Missouri.`,
    statutes: ["RSMo § 537.080", "RSMo § 537.090", "KSA § 60-1901", "KSA § 60-1903"],
  },
  {
    keywords: ["truck", "trucking", "semi", "18 wheeler", "commercial vehicle", "big rig", "tractor trailer"],
    category: "Trucking Accidents",
    question: "How are truck accident cases different?",
    answer: `Commercial trucking accidents involve additional federal regulations (FMCSA — 49 CFR Parts 390–399) beyond state negligence law.

**Key federal regulations:**
• Hours of Service (Part 395): Max 11 hours driving after 10 off-duty
• Vehicle Maintenance (Part 396): Required systematic inspection
• Driver Qualifications (Part 391): CDL, medical certification
• Drug/Alcohol Testing (Part 382): Mandatory testing

FMCSA violations may constitute negligence per se in Missouri courts.

**Multiple potentially liable parties:** Driver, trucking company, maintenance provider, cargo loaders, truck/parts manufacturers.

**Critical evidence to preserve:** ELD data, black box/ECM data, GPS records, drug test results, maintenance logs, driver qualification files.

**SOL:** 5 years (Missouri) / 2 years (Kansas).`,
    statutes: ["49 CFR Parts 390-399", "RSMo § 537.765"],
  },
  {
    keywords: ["dog bite", "dog attack", "animal", "bitten", "dog"],
    category: "Dog Bites",
    question: "What are the dog bite laws?",
    answer: `**Missouri — Strict Liability (RSMo § 273.036):**
The owner is liable if the dog bit someone without provocation while the person was lawfully present. No prior history of aggression is required. A $1,000 fine is imposed on the owner in addition to compensable damages.

**Kansas — One-Bite Rule (Common Law):**
Kansas has no dog bite statute. Liability generally requires showing the owner knew or should have known the dog had aggressive tendencies, OR was negligent in controlling the dog. A prior bite is the most common evidence.

**SOL:** 5 years (Missouri) / 2 years (Kansas).`,
    statutes: ["RSMo § 273.036", "KSA § 60-513"],
  },
  {
    keywords: ["slip", "fall", "premises", "property", "tripped", "hazard", "unsafe", "store", "parking lot"],
    category: "Premises Liability",
    question: "What about slip and fall cases?",
    answer: `Property owners have a duty to maintain safe conditions or warn of known hazards.

**Missouri:**
The duty depends on visitor status — invitees (customers) are owed the highest duty. The owner must have caused, known about, or reasonably should have discovered the dangerous condition. Pure comparative fault applies.

**Kansas:**
The standard is whether the owner exercised reasonable care under all circumstances. Modified comparative fault applies — 50% or more fault bars recovery.

**Key elements:** Dangerous condition existed → owner had notice → failed to fix or warn → injury resulted.

**SOL:** 5 years (Missouri) / 2 years (Kansas).`,
    statutes: ["RSMo § 516.120", "KSA § 60-258a"],
  },
  {
    keywords: ["workers comp", "workplace", "construction", "on the job", "work injury", "injured at work"],
    category: "Workplace/Construction",
    question: "What claims are available for workplace injuries?",
    answer: `Injured workers may have two separate legal avenues:

**1. Workers' Compensation** (no-fault — provides medical benefits and wage replacement but excludes pain/suffering)

**2. Third-Party Lawsuit** (if someone other than the employer caused the injury — e.g., equipment manufacturer, general contractor, property owner). This allows full damages including pain and suffering.

**Missouri:** Workers' comp under RSMo § 287.120; third-party claims under RSMo § 287.150. OSHA violations may serve as evidence of negligence.

**Kansas:** Similar dual path under KSA § 44-504. Worker must file third-party action within 1 year of injury.`,
    statutes: ["RSMo § 287.120", "RSMo § 287.150", "KSA § 44-504"],
  },
  {
    keywords: ["nursing home", "elder", "elderly", "abuse", "neglect", "long term care", "assisted living"],
    category: "Nursing Home Abuse",
    question: "What about nursing home abuse or neglect?",
    answer: `Missouri RSMo Chapter 198 protects nursing home residents from abuse and neglect.

**Legal claims may include:**
• Personal injury negligence
• Medical malpractice (if licensed providers involved)
• Statutory elder abuse
• Punitive damages for willful or reckless conduct

**Types of abuse covered:** Physical, emotional, sexual, financial exploitation, and neglect (failure to feed, bathe, medicate, or prevent bedsores).

**Missouri reporting:** Department of Health and Senior Services — 1-800-392-0210.

**SOL:** 5 years (Missouri) / 2 years (Kansas).`,
    statutes: ["RSMo Chapter 198"],
  },
  {
    keywords: ["damage cap", "maximum", "how much", "compensation", "damages", "what can i get", "recover"],
    category: "Damage Caps",
    question: "Are there damage caps in Missouri and Kansas?",
    answer: `Damage caps vary by claim type:

**Missouri:**
• General personal injury noneconomic: No cap
• Med mal noneconomic (standard): $400,000
• Med mal noneconomic (catastrophic): $700,000
• Government claims: ~$517,306/person (inflation-adjusted)

**Kansas:**
• General PI noneconomic: $350,000
• Med mal noneconomic: $350,000
• Wrongful death noneconomic: $250,000

These caps apply to noneconomic damages only (pain and suffering, etc.). There are generally no caps on economic damages (medical bills, lost wages) in either state.

Caps are adjusted periodically. Confirm current amounts with an attorney.`,
    statutes: ["RSMo § 538.210", "KSA § 60-19a02", "KSA § 60-1903"],
  },
  {
    keywords: ["comparative fault", "fault", "percentage", "partial fault", "shared fault", "both at fault"],
    category: "Comparative Fault",
    question: "How does shared fault work?",
    answer: `**Missouri — Pure Comparative Fault (RSMo § 537.765):**
A person may recover damages even if largely at fault. Damages are reduced by their percentage of fault. Example: 80% at fault → recover 20% of damages.

**Kansas — Modified Comparative Fault (KSA § 60-258a):**
Recovery is only allowed if fault is 49% or less. At 50% or more, recovery is completely barred. Damages are reduced by the percentage of fault assigned.

This distinction is one of the most important differences between the two states for personal injury claims.`,
    statutes: ["RSMo § 537.765", "KSA § 60-258a"],
  },
  {
    keywords: ["motorcycle", "bike", "rider", "biker"],
    category: "Motorcycle Accidents",
    question: "What about motorcycle accident cases?",
    answer: `Motorcycle accidents follow the same negligence framework as car accidents, but riders often face unique challenges:

• Injuries tend to be more severe due to lack of vehicle protection
• Insurance companies may argue rider behavior contributed to injuries
• Helmet use (or non-use) may be raised as a comparative fault issue

The same comparative fault rules apply — pure in Missouri, modified 50% bar in Kansas.

**SOL:** 5 years (Missouri) / 2 years (Kansas).

Yonke Law has a dedicated video explaining motorcycle accident cases on our YouTube channel.`,
    statutes: ["RSMo § 537.765", "KSA § 60-258a"],
  },
  {
    keywords: ["contact", "call", "phone", "talk", "consultation", "free", "reach", "help", "lawyer", "attorney", "hire"],
    category: "Contact",
    question: "How can I reach Yonke Law?",
    answer: `**Yonke Law, LLC**
📞 816-221-6400
📍 700 West 47th Street, Suite 550, Kansas City, MO 64112
🕘 Monday–Friday, 9:00 AM – 5:00 PM

**Free consultation. No fee unless we recover for you.**

You can call directly or use the Talk to Us page on this website to send a message. Every inquiry is reviewed personally — not by a call center.`,
  },
];

export const SYSTEM_DISCLAIMER = `This is general legal information about Missouri and Kansas law — not legal advice. Every situation is different. For guidance specific to your circumstances, contact Yonke Law for a free consultation at 816-221-6400.`;

export const GREETING = `Hi — I'm the Yonke Law assistant. I can help you understand Missouri and Kansas personal injury law, explain legal concepts, or connect you with the firm.

**What can I help with?** Ask about car accidents, medical malpractice, filing deadlines, or anything else related to personal injury law.

_I provide general legal information only — not legal advice._`;
