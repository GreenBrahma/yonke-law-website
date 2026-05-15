export interface PracticeArea {
  slug: string;
  name: string;
  subhead: string;
  definition: string[];
  elements: { title: string; text: string }[];
  subcategories: { name: string; desc: string }[];
  moRules: string[];
  ksRules: string[];
  investigation: string[];
  damages: { economic: string[]; nonEconomic: string[] };
  faqs: { q: string; a: string }[];
  mikeCredential: string;
  heroImage: string;
  youtubeId?: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "car-accidents",
    name: "Car Accidents",
    subhead: "After a crash on the road.",
    heroImage: "/images/yl-client-24.jpg",
    youtubeId: "F5c6P4bQamw",
    mikeCredential: "AV Preeminent rated. 25+ years handling motor vehicle collision cases across Missouri and Kansas.",
    definition: [
      "A car accident case arises when someone is injured in a motor vehicle collision caused by another driver's negligence. This includes rear-end collisions, intersection crashes, highway pile-ups, and single-vehicle incidents caused by road defects or other drivers.",
      "Missouri follows a pure comparative fault system under RSMo § 537.765 — you may recover damages even if partially at fault, reduced by your percentage. Kansas uses modified comparative fault under KSA § 60-258a — recovery is barred at 50% or more fault.",
    ],
    elements: [
      { title: "Duty", text: "Every driver owes other motorists, passengers, and pedestrians a duty to operate their vehicle with reasonable care under the circumstances — obeying traffic laws, maintaining safe speeds, and staying attentive." },
      { title: "Breach", text: "Running a red light, texting while driving, following too closely, driving under the influence, or failing to yield are all common breaches of the duty of care." },
      { title: "Causation", text: "The breach must have directly caused the collision and resulting injuries. If the other driver ran a red light and struck your vehicle, that's direct causation." },
      { title: "Damages", text: "You must have suffered actual harm — medical bills, lost wages, vehicle damage, pain and suffering, or other measurable losses." },
    ],
    subcategories: [
      { name: "Rear-End Collisions", desc: "The most common type. The trailing driver is typically presumed at fault." },
      { name: "Intersection Crashes", desc: "Failure to yield, red-light violations, and left-turn accidents." },
      { name: "Highway / Interstate", desc: "High-speed collisions often involving multiple vehicles and severe injuries." },
      { name: "Distracted Driving", desc: "Texting, phone use, or other distractions that take attention from the road." },
      { name: "Drunk Driving", desc: "DUI/DWI collisions — may also involve dram shop liability in Missouri." },
      { name: "Uninsured/Underinsured", desc: "When the at-fault driver lacks adequate insurance coverage." },
    ],
    moRules: [
      "Statute of limitations: 5 years — RSMo § 516.120",
      "Pure comparative fault — recover even if 99% at fault, reduced proportionately — RSMo § 537.765",
      "Minimum liability insurance: $25,000 per person / $50,000 per accident",
      "Dram shop liability available — RSMo § 537.053",
    ],
    ksRules: [
      "Statute of limitations: 2 years — KSA § 60-513",
      "Modified comparative fault — 50% bar rule — KSA § 60-258a",
      "Minimum liability insurance: $25,000 per person / $50,000 per accident",
      "No dram shop statute",
    ],
    investigation: [
      "Initial conversation — Free. No commitment. We listen, review the facts, and give a straight read on your situation.",
      "Evidence collection — Police reports, witness statements, photos, traffic camera footage, insurance policies.",
      "Medical records review — Emergency records, follow-up care, rehabilitation, and future treatment projections.",
      "Demand or filing — Pre-suit demand if the case can settle reasonably; petition filed if it cannot.",
      "Discovery — Depositions, interrogatories, accident reconstruction experts if needed.",
      "Resolution — Settlement, mediation, or trial. Your decision; our preparation.",
    ],
    damages: {
      economic: ["Medical expenses (past and future)", "Lost wages and earning capacity", "Property damage", "Rehabilitation costs"],
      nonEconomic: ["Pain and suffering", "Emotional distress", "Loss of enjoyment of life", "Loss of consortium"],
    },
    faqs: [
      { q: "How long do I have to file a car accident claim?", a: "In Missouri, you have 5 years from the date of the accident (RSMo § 516.120). In Kansas, you have 2 years (KSA § 60-513). These deadlines are strict." },
      { q: "What if I was partly at fault?", a: "In Missouri, you can still recover damages even if mostly at fault — your award is reduced by your percentage of fault. In Kansas, if you're 50% or more at fault, you recover nothing." },
      { q: "What does a car accident lawyer cost?", a: "Yonke Law works on contingency. No fee unless we recover compensation for you. The percentage is agreed in writing before any work begins. Consultation is always free." },
      { q: "Should I talk to the other driver's insurance company?", a: "Be cautious. Insurance adjusters work for the other side. Anything you say can be used to reduce your claim. You have no obligation to give a recorded statement without legal counsel." },
      { q: "What if the other driver was uninsured?", a: "Your own uninsured/underinsured motorist (UM/UIM) coverage may apply. Missouri and Kansas both allow UM/UIM claims against your own policy." },
      { q: "How much is my car accident case worth?", a: "There's no honest one-line answer. Value depends on injury severity, medical costs, lost income, fault allocation, and insurance limits. A consultation gives you a real assessment." },
    ],
  },
  {
    slug: "truck-accidents",
    name: "Truck Accidents",
    subhead: "When a commercial vehicle causes the crash.",
    heroImage: "/images/yl-client-25.jpg",
    youtubeId: "v1XTlj4plGg",
    mikeCredential: "AV Preeminent rated. Extensive experience with FMCSA regulatory violations and multi-defendant trucking litigation.",
    definition: [
      "Truck accident cases involve collisions with commercial vehicles — 18-wheelers, tractor-trailers, delivery trucks, and other vehicles regulated by federal and state transportation law. These cases are fundamentally different from car accidents because of the additional layer of federal FMCSA regulations (49 CFR Parts 390–399).",
      "Multiple parties may be liable: the driver, the trucking company, the maintenance provider, cargo loaders, and even the truck or parts manufacturer. Evidence degrades quickly — electronic logging data, black box records, and drug test results must be preserved immediately.",
    ],
    elements: [
      { title: "Duty", text: "Truck drivers and carriers owe heightened duties under federal FMCSA regulations — hours-of-service limits, vehicle inspection requirements, CDL qualifications, and drug/alcohol testing compliance." },
      { title: "Breach", text: "Violations of FMCSA regulations — driving beyond hours-of-service limits, skipping mandatory inspections, falsifying logs, or operating under the influence — may constitute negligence per se in Missouri courts." },
      { title: "Causation", text: "The regulatory violation or negligent act must have directly caused the collision. Driver fatigue from exceeding hours-of-service limits that led to the crash is a common causation path." },
      { title: "Damages", text: "Truck accident injuries are often catastrophic due to the size and weight differential. Damages typically include extensive medical care, long-term rehabilitation, and significant lost earning capacity." },
    ],
    subcategories: [
      { name: "18-Wheeler Collisions", desc: "The most common commercial truck accident involving tractor-trailers." },
      { name: "Jackknife Accidents", desc: "When the trailer swings out from the cab, often caused by braking issues or driver error." },
      { name: "Underride Crashes", desc: "When a smaller vehicle slides beneath the trailer — often fatal." },
      { name: "Cargo Spill / Shift", desc: "Improperly loaded or secured cargo causing loss of control or road hazards." },
      { name: "Driver Fatigue", desc: "Hours-of-service violations leading to drowsy or impaired driving." },
      { name: "Defective Maintenance", desc: "Brake failures, tire blowouts, or mechanical defects from inadequate fleet maintenance." },
    ],
    moRules: [
      "Statute of limitations: 5 years — RSMo § 516.120",
      "Pure comparative fault — RSMo § 537.765",
      "FMCSA violations treated as negligence per se",
      "Employer vicarious liability for driver negligence within scope of employment",
    ],
    ksRules: [
      "Statute of limitations: 2 years — KSA § 60-513",
      "Modified comparative fault — 50% bar — KSA § 60-258a",
      "Federal FMCSA regulations apply equally",
      "Multiple defendant liability under Kansas joint and several liability rules",
    ],
    investigation: [
      "Initial conversation — Free. We assess the facts and identify all potentially liable parties.",
      "Evidence preservation — Immediate demand letters to preserve ELD data, black box/ECM data, GPS records, maintenance logs, and driver qualification files.",
      "FMCSA compliance audit — Review of the carrier's safety record, hours-of-service logs, drug/alcohol test results, and inspection history.",
      "Expert reconstruction — Accident reconstruction engineers, trucking industry experts, and medical specialists.",
      "Demand or filing — Pre-suit demand against all liable parties; petition filed if necessary.",
      "Resolution — Settlement, mediation, or trial. Multi-defendant cases require coordination across all parties.",
    ],
    damages: {
      economic: ["Medical expenses (often extensive)", "Lost wages and future earning capacity", "Property damage", "Long-term rehabilitation and adaptive equipment"],
      nonEconomic: ["Pain and suffering", "Permanent disability", "Loss of enjoyment of life", "Loss of consortium"],
    },
    faqs: [
      { q: "Who can I sue besides the truck driver?", a: "The trucking company (vicarious liability, negligent hiring), maintenance providers, cargo loaders, and truck/parts manufacturers may all be liable depending on the facts." },
      { q: "What federal regulations apply to truck accidents?", a: "FMCSA regulations under 49 CFR Parts 390–399 govern hours of service, vehicle maintenance, driver qualifications, and drug/alcohol testing. Violations can establish liability." },
      { q: "Why are truck accident cases different from car accidents?", a: "Federal regulations, multiple liable parties, catastrophic injuries, and critical evidence that degrades quickly (ELD data, black box records) all make these cases more complex." },
      { q: "How long do I have to file?", a: "5 years in Missouri (RSMo § 516.120), 2 years in Kansas (KSA § 60-513). But evidence must be preserved immediately — don't wait." },
      { q: "What is negligence per se?", a: "When a party violates a safety regulation (like FMCSA rules), the violation itself can establish negligence without requiring separate proof of unreasonableness." },
      { q: "What evidence should be preserved?", a: "ELD data, black box/ECM data, GPS records, drug/alcohol test results, maintenance logs, driver qualification files, and dashcam or surveillance footage." },
    ],
  },
  {
    slug: "medical-malpractice",
    name: "Medical Malpractice",
    subhead: "When something goes wrong in your medical care.",
    heroImage: "/images/yl-client-26.jpg",
    youtubeId: "w8Z1u0Hn9x4",
    mikeCredential: "Top 25 Medical Malpractice Trial Lawyer. Keenan Trial Institute faculty. Extensive experience with surgical errors, diagnostic failures, and hospital negligence.",
    definition: [
      "Medical malpractice occurs when a healthcare provider — doctor, surgeon, nurse, hospital, or clinic — fails to meet the standard of care expected of a qualified professional in their field, and that failure causes harm. The standard isn't perfection — it's what a reasonably competent peer would have done in the same situation.",
      "Not every bad medical outcome is malpractice. Medicine involves risk. But when a provider's negligence — not just bad luck — causes injury, the law provides a path to accountability. Both Missouri and Kansas have specific procedural requirements that must be followed before filing.",
    ],
    elements: [
      { title: "Duty", text: "A provider-patient relationship existed, establishing a duty of care. This arises when a doctor agrees to treat you, a hospital admits you, or a specialist accepts a referral." },
      { title: "Breach", text: "The provider failed to use the degree of skill and care ordinarily used by competent professionals in the same field. This is measured against the standard of care — what a qualified peer would have done." },
      { title: "Causation", text: "The provider's failure directly caused or substantially contributed to the injury. This often requires expert testimony linking the breach to the harm." },
      { title: "Damages", text: "Documented harm — physical injury, additional medical costs, lost income, pain and suffering, or wrongful death." },
    ],
    subcategories: [
      { name: "Surgical Errors", desc: "Wrong-site surgery, retained instruments, anesthesia errors, and post-operative complications from negligent care." },
      { name: "Diagnostic Errors", desc: "Missed, delayed, or incorrect diagnoses — cancer, heart attack, stroke, infection." },
      { name: "Medication Errors", desc: "Wrong drug, wrong dose, dangerous interactions, or failure to monitor side effects." },
      { name: "Birth Injuries", desc: "Injuries to mother or child during pregnancy, labor, or delivery caused by provider negligence." },
      { name: "Hospital Negligence", desc: "Systemic failures — understaffing, inadequate protocols, hospital-acquired infections, falls." },
      { name: "Emergency Room Errors", desc: "Misdiagnosis, delayed treatment, or premature discharge from emergency departments." },
    ],
    moRules: [
      "Statute of limitations: 2 years — RSMo § 516.105",
      "10-year absolute statute of repose",
      "Affidavit of merit required before filing — RSMo § 538.225",
      "Noneconomic damage cap: $400,000 standard / $700,000 catastrophic — RSMo § 538.210",
      "Caps increase by 1.7% annually for inflation",
      "Pure comparative fault applies — RSMo § 537.765",
    ],
    ksRules: [
      "Statute of limitations: 2 years — KSA § 60-513(c)",
      "4-year absolute statute of repose",
      "Pre-suit screening panel required — KSA § 65-4901",
      "Noneconomic damage cap: $350,000 — KSA § 60-19a02",
      "Expert must devote 50%+ of professional time to clinical practice in same field",
      "Modified comparative fault — 50% bar — KSA § 60-258a",
    ],
    investigation: [
      "Initial conversation — Free. We listen to what happened and assess whether the facts suggest a departure from the standard of care.",
      "Medical records collection — Complete records from all treating providers, including imaging, lab results, operative notes, and nursing charts.",
      "Expert medical review — A qualified physician in the same specialty reviews the records and provides a written opinion on whether the standard of care was met.",
      "Affidavit of merit / screening panel — Missouri requires an affidavit; Kansas requires a pre-suit screening panel hearing. Both must be completed before filing.",
      "Demand or filing — Pre-suit demand to the provider's malpractice insurer; petition filed if settlement cannot be reached.",
      "Resolution — Settlement, mediation, or trial. Medical malpractice trials require expert testimony and careful presentation of complex medical evidence.",
    ],
    damages: {
      economic: ["Past and future medical expenses", "Corrective surgeries and ongoing treatment", "Lost wages and earning capacity", "Life care planning for catastrophic injuries"],
      nonEconomic: ["Pain and suffering (subject to statutory caps)", "Loss of enjoyment of life", "Disfigurement", "Loss of consortium"],
    },
    faqs: [
      { q: "What is an affidavit of merit?", a: "In Missouri, before filing a medical malpractice lawsuit, your attorney must file a sworn statement that a qualified healthcare provider has reviewed the case and believes the standard of care was breached (RSMo § 538.225)." },
      { q: "What if the doctor said the complication was a known risk?", a: "Informed consent covers known risks — but only if the provider adequately explained them AND the injury resulted from the risk itself, not from negligence in performing the procedure." },
      { q: "Can I sue the hospital or just the doctor?", a: "Both may be liable. Hospitals can be directly liable for systemic failures (understaffing, inadequate protocols) and vicariously liable for the negligence of employed physicians." },
      { q: "Are there damage caps in medical malpractice cases?", a: "Yes. Missouri caps noneconomic damages at $400,000 (standard) or $700,000 (catastrophic) under RSMo § 538.210. Kansas caps them at $350,000 under KSA § 60-19a02. No caps on economic damages." },
      { q: "How long do I have to file?", a: "2 years in both Missouri and Kansas. Missouri has a 10-year statute of repose; Kansas has a 4-year repose. The clock starts from the date of the negligent act or discovery of the injury." },
      { q: "What if a VA hospital was involved?", a: "Claims against federal facilities like VA hospitals fall under the Federal Tort Claims Act (FTCA), which has its own notice requirements and shorter deadlines. Legal counsel should be engaged immediately." },
    ],
  },
  {
    slug: "wrongful-death",
    name: "Wrongful Death",
    subhead: "When negligence takes someone's life.",
    heroImage: "/images/yl-client-19.jpg",
    mikeCredential: "AV Preeminent rated. Decades of wrongful death litigation across motor vehicle, medical malpractice, and workplace contexts.",
    definition: [
      "A wrongful death claim arises when a person dies as a result of another party's negligence, recklessness, or intentional act. If the deceased would have had a valid personal injury claim had they survived, their family may pursue a wrongful death action.",
      "These cases carry unique procedural requirements — including who has legal standing to file, what damages are recoverable, and how claims are prioritized among family members. Missouri and Kansas differ significantly on these rules.",
    ],
    elements: [
      { title: "Duty", text: "The defendant owed a duty of care to the deceased — the same duty that applies in the underlying negligence context (driving, medical care, workplace safety, etc.)." },
      { title: "Breach", text: "The defendant failed to meet that duty through negligent, reckless, or intentional conduct." },
      { title: "Causation", text: "The breach directly caused or substantially contributed to the person's death." },
      { title: "Damages", text: "The surviving family members suffered measurable losses — financial support, funeral costs, loss of companionship, guidance, and services." },
    ],
    subcategories: [
      { name: "Vehicle Accident Deaths", desc: "Fatal car, truck, motorcycle, or pedestrian collisions caused by negligent drivers." },
      { name: "Medical Malpractice Deaths", desc: "Death resulting from provider negligence — surgical errors, diagnostic failures, medication errors." },
      { name: "Workplace Fatalities", desc: "Deaths on construction sites, in industrial settings, or from occupational hazards." },
      { name: "Product-Related Deaths", desc: "Fatalities caused by defective products, vehicles, or equipment." },
      { name: "Premises Deaths", desc: "Fatal injuries from dangerous property conditions — fires, structural failures, inadequate security." },
    ],
    moRules: [
      "Statute of limitations: 3 years — RSMo § 537.100",
      "Who may sue (priority): (1) Spouse, children, parents; (2) Siblings; (3) Court-appointed plaintiff — RSMo § 537.080",
      "Only one action per defendant per decedent",
      "Recoverable: lost income, funeral expenses, loss of companionship/services/guidance — RSMo § 537.090",
      "NOT recoverable: grief and bereavement",
      "Non-employed caregiver value presumed at 110% of state average weekly wage",
    ],
    ksRules: [
      "Statute of limitations: 2 years — KSA § 60-513(a)(5)",
      "Any heir at law who sustained a loss may file — KSA § 60-1902",
      "Noneconomic damage cap: $250,000 — KSA § 60-1903",
      "No separate cap on economic damages",
    ],
    investigation: [
      "Initial conversation — Free. We listen to the family, understand the circumstances, and assess who has standing to bring the claim.",
      "Records and evidence — Death certificates, autopsy reports, medical records, police/incident reports, employment and financial records.",
      "Expert review — Medical experts, accident reconstructionists, or workplace safety experts as needed to establish the cause of death.",
      "Demand or filing — Pre-suit demand to the responsible party's insurer; petition filed identifying all defendants.",
      "Discovery — Depositions, document production, and expert reports building the case for damages.",
      "Resolution — Settlement, mediation, or trial. Wrongful death trials require careful presentation of both liability and the human impact of the loss.",
    ],
    damages: {
      economic: ["Lost income and financial support the deceased would have provided", "Funeral and burial expenses", "Medical expenses incurred before death", "Value of household services and caregiving"],
      nonEconomic: ["Loss of companionship and consortium", "Loss of guidance, counsel, and training", "Loss of comfort and support", "Loss of services (subject to caps in Kansas)"],
    },
    faqs: [
      { q: "Who can file a wrongful death lawsuit in Missouri?", a: "Missouri law prioritizes: (1) spouse, children, surviving descendants, or parents; (2) siblings if no class 1 exists; (3) a court-appointed plaintiff if no class 1 or 2 — RSMo § 537.080." },
      { q: "How long do I have to file?", a: "3 years in Missouri (RSMo § 537.100), 2 years in Kansas (KSA § 60-513(a)(5)). These deadlines run from the date of death." },
      { q: "Can I recover for grief?", a: "In Missouri, grief and bereavement are specifically excluded from recoverable damages. Kansas has a $250,000 cap on noneconomic damages in wrongful death." },
      { q: "What if the death was caused by a workplace accident?", a: "Workers' compensation death benefits may apply, but a separate wrongful death claim against third parties (not the employer) may also be available." },
      { q: "What if criminal charges are pending?", a: "Civil wrongful death claims are independent of criminal proceedings. The civil standard of proof (preponderance of evidence) is lower than criminal (beyond reasonable doubt)." },
    ],
  },
  {
    slug: "nursing-home-abuse",
    name: "Nursing Home Abuse & Neglect",
    subhead: "When a facility fails the people in its care.",
    heroImage: "/images/YL client 5.png",
    mikeCredential: "AV Preeminent rated. Experienced in institutional negligence, elder abuse litigation, and regulatory compliance cases.",
    definition: [
      "Nursing home abuse and neglect cases arise when long-term care facilities — nursing homes, assisted living centers, memory care units — fail to provide the standard of care their residents are entitled to. Missouri RSMo Chapter 198 specifically protects nursing home residents from abuse and neglect.",
      "Abuse can be physical, emotional, sexual, or financial. Neglect includes failure to provide adequate nutrition, hydration, medication, hygiene, or supervision — leading to preventable conditions like bedsores, falls, infections, and malnutrition.",
    ],
    elements: [
      { title: "Duty", text: "Nursing homes accept a duty of care when they admit a resident. This includes providing adequate staffing, proper medical care, nutrition, hygiene, supervision, and a safe environment." },
      { title: "Breach", text: "Understaffing, failure to follow care plans, inadequate training, improper use of restraints, medication errors, or ignoring signs of declining health all constitute breaches." },
      { title: "Causation", text: "The facility's failure must have directly caused or contributed to the resident's injury — bedsores from inadequate repositioning, falls from insufficient supervision, infections from poor hygiene." },
      { title: "Damages", text: "Physical injury, pain and suffering, medical costs for treating preventable conditions, emotional distress, and in cases of willful or reckless conduct, punitive damages." },
    ],
    subcategories: [
      { name: "Physical Abuse", desc: "Hitting, improper restraints, rough handling, or excessive force by staff." },
      { name: "Neglect", desc: "Failure to feed, bathe, medicate, reposition, or supervise — leading to preventable harm." },
      { name: "Bedsores / Pressure Ulcers", desc: "Preventable skin breakdown from failure to reposition immobile residents." },
      { name: "Falls", desc: "Preventable falls from inadequate supervision, unaddressed hazards, or medication side effects." },
      { name: "Financial Exploitation", desc: "Theft, unauthorized use of funds, or coercion involving a resident's finances." },
      { name: "Medication Errors", desc: "Wrong medications, missed doses, or failure to monitor side effects in elderly residents." },
    ],
    moRules: [
      "Statute of limitations: 5 years for negligence/abuse — RSMo § 516.120",
      "Missouri RSMo Chapter 198 — statutory protections for nursing home residents",
      "Punitive damages available for willful or reckless conduct",
      "Report abuse: Missouri DHSS — 1-800-392-0210",
    ],
    ksRules: [
      "Statute of limitations: 2 years — KSA § 60-513",
      "Kansas Adult Protective Services Act applies",
      "Modified comparative fault — 50% bar — KSA § 60-258a",
    ],
    investigation: [
      "Initial conversation — Free. We listen to the family's concerns and assess what signs point to abuse or neglect.",
      "Records collection — Medical records, care plans, staffing logs, incident reports, state inspection reports, and facility complaint history.",
      "Expert review — Geriatric medicine specialists and nursing standards experts review whether the facility met accepted standards of care.",
      "Regulatory review — State inspection reports, deficiency citations, and prior complaints filed with DHSS.",
      "Demand or filing — Pre-suit demand to the facility and its insurer; petition filed if necessary.",
      "Resolution — Settlement, mediation, or trial. Cases involving patterns of neglect often reveal systemic issues across the facility.",
    ],
    damages: {
      economic: ["Medical expenses for treating preventable injuries", "Costs of transfer to adequate facility", "Past and future care needs"],
      nonEconomic: ["Pain and suffering", "Emotional distress", "Loss of dignity", "Punitive damages in cases of willful conduct"],
    },
    faqs: [
      { q: "What if my parent can't tell me what happened?", a: "Many nursing home residents have cognitive impairments. Physical signs (unexplained bruises, bedsores, weight loss, dehydration) and medical records can establish what occurred without the resident's testimony." },
      { q: "Can the facility retaliate against us for complaining?", a: "Retaliation against residents or families for filing complaints is prohibited by law. Document everything and report any retaliatory conduct to the state." },
      { q: "What's the difference between abuse and neglect?", a: "Abuse is an intentional act — hitting, restraining, exploiting. Neglect is a failure to act — not feeding, not medicating, not supervising. Both are actionable." },
      { q: "How do I report nursing home abuse in Missouri?", a: "Contact the Missouri Department of Health and Senior Services at 1-800-392-0210. Reports can also be filed online." },
      { q: "Can I sue for punitive damages?", a: "Yes, in cases where the facility's conduct was willful, wanton, or reckless — not just negligent. Punitive damages are designed to punish and deter." },
    ],
  },
];
