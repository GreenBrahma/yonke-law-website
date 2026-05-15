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
    keywords: ["damage cap", "maximum", "how much", "compensation", "damages", "what can i get", "recover", "worth"],
    category: "Damage Caps",
    question: "Are there damage caps in Missouri and Kansas?",
    answer: `Damage caps vary by claim type and state:

**Missouri:**
• General personal injury noneconomic: **No cap**
• Med mal noneconomic (standard): $400,000 (RSMo § 538.210)
• Med mal noneconomic (catastrophic/death): $700,000 with 1.7% annual escalator
• Punitive damages: Greater of $500,000 or 5× net judgment (RSMo §§ 510.261, 510.265)
• Government claims: $300,000/person, $2M/occurrence, inflation-indexed (RSMo § 537.610)

**Kansas:**
• General PI noneconomic: **No cap** — the former $250,000 cap was struck as unconstitutional in *Hilburn v. Enerpipe Ltd.*, 309 Kan. 1127 (2019)
• Wrongful death nonpecuniary: $250,000 aggregate cap remains (KSA § 60-1903)
• Punitive damages: Lesser of highest gross income over 5 years (or 50% net worth) or $5 million (KSA § 60-3702)
• Government claims (KTCA): $500,000/occurrence, no punitives (KSA § 75-6105)

These caps apply to noneconomic damages only. There are generally no caps on economic damages (medical bills, lost wages) in either state.`,
    statutes: ["RSMo § 538.210", "RSMo § 537.610", "KSA § 60-19a02", "KSA § 60-1903", "KSA § 60-3702"],
  },
  {
    keywords: ["comparative fault", "fault", "percentage", "partial fault", "shared fault", "both at fault"],
    category: "Comparative Fault",
    question: "How does shared fault work?",
    answer: `**Missouri — Pure Comparative Fault (RSMo § 537.765):**
A person may recover damages even if largely at fault. Damages are reduced by their percentage of fault. Example: 80% at fault → recover 20% of damages. A defendant 51%+ at fault is jointly and severally liable (RSMo § 537.067); below 51% is severally liable only.

**Kansas — Modified Comparative Fault (KSA § 60-258a):**
Recovery is only allowed if fault is 49% or less. At 50% or more, recovery is completely barred. Kansas abolished joint-and-several liability — each defendant pays only its own share.

This distinction is one of the most important differences between the two states for personal injury claims.`,
    statutes: ["RSMo § 537.765", "RSMo § 537.067", "KSA § 60-258a"],
  },
  {
    keywords: ["motorcycle", "bike", "rider", "biker", "helmet"],
    category: "Motorcycle Accidents",
    question: "What about motorcycle accident cases?",
    answer: `Motorcycle accidents follow the same negligence framework as car accidents, but riders often face unique challenges:

• Injuries tend to be more severe due to lack of vehicle protection
• Insurance companies may argue rider behavior contributed to injuries

**Missouri:** Operating a motorcycle is specifically NOT evidence of comparative negligence (RSMo § 537.055). Seatbelt non-use may reduce damages by up to 1% only (RSMo § 307.178). Missouri's adult helmet requirement was largely repealed in 2020.

**Kansas:** Helmets required for riders under 18 (KSA § 8-1598). Helmet/seatbelt non-use admissibility is case-law-dependent.

**SOL:** 5 years (Missouri) / 2 years (Kansas).`,
    statutes: ["RSMo § 537.055", "RSMo § 307.178", "KSA § 8-1598"],
  },
  {
    keywords: ["uninsured", "underinsured", "um", "uim", "pip", "no fault", "insurance coverage", "no insurance"],
    category: "UM/UIM & PIP",
    question: "How do uninsured/underinsured motorist coverage and PIP work?",
    answer: `**Missouri UM/UIM:**
• Mandatory UM coverage at minimum BI limits (RSMo § 379.203)
• UIM is recognized within the UM framework by case law
• UM follows the insured personally — hit-and-run is covered without physical contact
• Stacking permitted absent enforceable policy exclusion
• **No PIP mandate** in Missouri

**Kansas PIP (No-Fault — KAIRA):**
• Mandatory PIP under KSA § 40-3107: $4,500 medical, $4,500 rehab, $900/month income (1 year)
• To sue for pain and suffering, the **tort threshold** must be met (KSA § 40-3117): medical bills over $2,000, permanent injury, fracture, or death
• UM/UIM mandatory unless rejected in writing (KSA § 40-284)
• PIP subrogation only for duplicative damages (KSA § 40-3113a)

If the at-fault driver is uninsured, your own UM/UIM coverage may apply in both states.`,
    statutes: ["RSMo § 379.203", "KSA § 40-3107", "KSA § 40-3117", "KSA § 40-284"],
  },
  {
    keywords: ["dram shop", "bar", "tavern", "alcohol", "drunk", "intoxicated", "served", "bartender"],
    category: "Dram Shop / Alcohol Liability",
    question: "Can a bar be held liable for serving an intoxicated person?",
    answer: `**Missouri — Limited Statutory Liability (RSMo § 537.053):**
A licensed seller of liquor by the drink (bars, restaurants) may be liable when they served alcohol to:
• A person **under 21**, or
• A **visibly intoxicated** person
Standard of proof: clear and convincing evidence. Persons over 21 cannot recover for their own voluntary intoxication.

**Kansas — No Civil Dram Shop Statute:**
KSA § 41-715 is **criminal only** — it prohibits serving visibly intoxicated persons but creates no civil remedy. The Kansas Supreme Court has declined to recognize a common-law civil dram shop cause of action. The injured party's civil recourse is typically against the intoxicated individual only.

This is a significant cross-border difference for Kansas City-area cases.`,
    statutes: ["RSMo § 537.053", "KSA § 41-715"],
  },
  {
    keywords: ["security", "assault", "attacked", "crime", "criminal", "parking", "robbery", "mugged"],
    category: "Negligent Security",
    question: "Can a business be liable for a criminal attack on its property?",
    answer: `**Missouri — Statutory Rule (RSMo § 537.787):**
A business has **no duty** to guard against third-party criminal acts unless it:
• Knew or had reason to know that criminal acts were being committed or were reasonably likely in that area, AND
• Had sufficient time to prevent the injury

Defenses include: reasonable security measures already in place, trespasser status, and the business being closed at the time.

**Kansas — Common Law:**
Duty arises only when the harm is reasonably foreseeable — most often shown by prior similar incidents on the premises or in the immediate area.

Evidence of prior crimes at the location, inadequate lighting, broken locks, and absence of security personnel can all support a negligent security claim.`,
    statutes: ["RSMo § 537.787"],
  },
  {
    keywords: ["lien", "hospital lien", "medicaid", "subrogation", "settlement", "disbursement", "payback"],
    category: "Liens & Subrogation",
    question: "What liens must be addressed in a personal injury settlement?",
    answer: `Before any settlement can be disbursed, several potential liens must be resolved:

**Missouri:**
• **Hospital lien** — RSMo § 430.230
• **Provider lien** (clinics, practitioners) — RSMo § 430.225, capped at 50% of net proceeds
• Hospital liens do **not** attach to wrongful-death settlements
• **Workers' comp** employer subrogation — RSMo § 287.150
• **Medicaid** reimbursement — RSMo § 208.215
• **Medicare** super-lien — 42 U.S.C. § 1395y(b)

**Kansas:**
• **Hospital lien** — KSA § 65-406 to 65-409; $5,000 fully enforceable, over $5,000 subject to equitable distribution
• Strict notice compliance required per *Via Christi v. Reed*, 290 Kan. 540 (2010)
• **Workers' comp** subrogation — KSA § 44-504
• **PIP subrogation** — only for duplicative damages (KSA § 40-3113a)

An attorney must identify and negotiate all liens before disbursement.`,
    statutes: ["RSMo § 430.230", "RSMo § 430.225", "KSA § 65-406"],
  },
  {
    keywords: ["government", "city", "state", "municipality", "public", "sovereign immunity", "government claim", "notice"],
    category: "Government Liability",
    question: "Can I sue a government entity for personal injury?",
    answer: `Government entities have limited immunity from lawsuits, but there are important exceptions:

**Missouri (RSMo § 537.600):**
Two principal waivers of sovereign immunity:
1. Negligent operation of motor vehicles by public employees
2. **Dangerous condition of public property** — requires proof of foreseeable risk and that the entity had notice with time to remedy

**Caps:** $300,000/person, $2,000,000/occurrence (inflation-indexed). No punitives.
**Notice:** 90-day notice may be required for municipal claims under RSMo § 82.210.

**Kansas (KTCA — KSA § 75-6101 et seq.):**
Government entities are liable like private persons, subject to broad exceptions (discretionary functions, failure to inspect, police/fire protection, snow/ice, etc.)

**Caps:** $500,000/occurrence, no punitives (KSA § 75-6105).
**Notice:** Pre-suit notice **required** for municipal claims under KSA § 12-105b — 120-day waiting period. Failure to comply strictly can result in dismissal.`,
    statutes: ["RSMo § 537.600", "RSMo § 537.610", "KSA § 75-6101", "KSA § 12-105b"],
  },
  {
    keywords: ["sexual abuse", "sexual assault", "child abuse", "childhood", "molestation"],
    category: "Sexual Abuse Civil Claims",
    question: "What civil remedies exist for sexual abuse survivors?",
    answer: `Both states recognize civil claims for battery, assault, and intentional infliction of emotional distress in sexual abuse cases, along with negligent hiring/retention/supervision against employers or institutions.

**Missouri (RSMo § 537.046):**
Extended statute of limitations for childhood sexual abuse — allows filing years after the abuse occurred. Civil claims are independent of any criminal proceedings.

**Kansas (KSA § 60-523):**
SOL extends to **three years after the person discovers or reasonably should have discovered the injury was caused by the abuse**, regardless of age. The KTCA includes a carve-back making certain government immunities unavailable in childhood sexual-abuse claims (KSA § 75-6104).

**Important:** SOL laws in this area are in active legislative motion in both states. Current statute text should always be verified before filing.`,
    statutes: ["RSMo § 537.046", "KSA § 60-523", "KSA § 75-6104"],
  },
  {
    keywords: ["product", "defective", "recall", "manufacturer", "dangerous product", "consumer"],
    category: "Product Liability",
    question: "What if a defective product caused my injury?",
    answer: `**Missouri — Strict Liability (RSMo §§ 537.760–537.765):**
You do NOT need to prove the manufacturer was negligent. The elements are:
1. Defendant transferred the product in commerce
2. Product was used as reasonably anticipated
3. Product was defective and **unreasonably dangerous**
4. The defect caused the injury

Defenses: innocent seller dismissal (§ 537.762), state-of-the-art defense (§ 537.764). Pure comparative fault applies. SOL: 5 years.

**Kansas — Product Liability Act (KSA § 60-3301 et seq.):**
Governs ALL product theories — strict liability, negligence, warranty. Key features:
• **10-year useful-safe-life repose** from delivery (KSA § 60-3303) with a latent-disease exception
• Seller-shield defense (KSA § 60-3306)
• Regulatory-compliance defense (KSA § 60-3304)
• Modified comparative fault, 50% bar applies. SOL: 2 years.

**Critical:** Preserve the defective product as evidence. Do not discard, repair, or return it.`,
    statutes: ["RSMo § 537.760", "RSMo § 537.765", "KSA § 60-3301"],
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
