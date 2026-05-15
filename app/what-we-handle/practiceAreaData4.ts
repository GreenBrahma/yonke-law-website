import type { PracticeArea } from "./practiceAreaData";

export const PRACTICE_AREAS_4: PracticeArea[] = [
  {
    slug: "dog-bite",
    name: "Dog Bite",
    subhead: "After a dog bite or dog attack.",
    heroImage: "/images/pa-premises-liability.png",
    mikeCredential:
      "AV Preeminent rated. Experienced in animal attack liability, homeowner insurance claims, and scarring injury cases.",
    definition: [
      "A dog bite case arises when someone is injured because a dog owner or handler failed to keep the animal under control. These cases can involve bites, knockdowns, chasing incidents, and serious scarring.",
      "Dog attacks can happen fast. The injuries can be physical, emotional, or both — especially when a child is involved.",
    ],
    elements: [
      {
        title: "Duty",
        text: "Dog owners have a duty to act responsibly and control their animals.",
      },
      {
        title: "Breach",
        text: "That duty may be broken by failing to leash the dog, secure the property, restrain a dangerous dog, or otherwise prevent the attack.",
      },
      {
        title: "Causation",
        text: "That failure caused the injury.",
      },
      {
        title: "Damages",
        text: "You suffered actual harm — medical treatment, infection, scarring, trauma, lost wages, or other losses.",
      },
    ],
    subcategories: [
      {
        name: "Child Dog Bite Cases",
        desc: "Children are often badly hurt in dog attacks.",
      },
      {
        name: "Facial Scarring",
        desc: "Injuries to the face can require long-term care and leave permanent scars.",
      },
      {
        name: "Unleashed or Uncontrolled Dogs",
        desc: "The owner failed to keep the dog under control.",
      },
      {
        name: "Apartment or Neighborhood Attacks",
        desc: "The bite happened in a shared living area or nearby property.",
      },
      {
        name: "Knockdown Injuries",
        desc: "The dog caused injury even without a direct bite.",
      },
    ],
    moRules: [
      "Statute of limitations: 5 years — RSMo § 516.120",
      "Strict liability for dog bites in some circumstances — RSMo § 273.036",
      "Pure comparative fault — RSMo § 537.765",
      "Homeowner or renter insurance often covers dog bite liability",
    ],
    ksRules: [
      "Statute of limitations: 2 years — KSA § 60-513",
      "Modified comparative fault — 50% bar — KSA § 60-258a",
      "Owner liability based on knowledge of dangerous propensity or negligent control",
    ],
    investigation: [
      "Initial conversation — We hear what happened and what treatment was needed.",
      "Evidence collection — Photos, animal control reports, witness statements, and medical records.",
      "Insurance review — We identify homeowners, renters, or other coverage.",
      "Damages review — We document treatment, scarring, emotional trauma, and time missed from work.",
      "Demand or filing — We move forward if the facts support a claim.",
      "Resolution — Settlement or trial.",
    ],
    damages: {
      economic: [
        "Medical treatment and surgery",
        "Scar revision procedures",
        "Lost wages",
        "Counseling costs",
      ],
      nonEconomic: [
        "Pain and suffering",
        "Permanent scarring and disfigurement",
        "Emotional trauma",
        "Fear and anxiety around animals",
      ],
    },
    faqs: [
      {
        q: "Do I still have a case if the dog never bit anyone before?",
        a: "Possibly. Liability depends on the facts and the law that applies. Missouri has a strict liability statute for certain dog bite situations (RSMo § 273.036).",
      },
      {
        q: "Should I get medical care even if the bite seems minor?",
        a: "Yes. Dog bites can become infected and may leave lasting scars.",
      },
      {
        q: "Who pays for my treatment?",
        a: "The dog owner's homeowner or renter insurance often covers dog bite claims. We identify all available coverage.",
      },
    ],
  },
  {
    slug: "construction-injury",
    name: "Construction Injury",
    subhead: "After an injury on a construction site.",
    heroImage: "/images/pa-workplace-injuries.png",
    mikeCredential:
      "AV Preeminent rated. Extensive experience with third-party construction site claims, OSHA violations, and multi-defendant liability.",
    definition: [
      "A construction injury case arises when someone is hurt because of unsafe conditions, unsafe equipment, poor supervision, or careless work on a construction site. These cases can involve workers' compensation, but they may also involve claims against other responsible companies.",
      "Construction work is dangerous. But that does not excuse preventable safety failures. If someone other than your direct employer caused or contributed to the injury, you may have a third-party claim for full damages beyond what workers' comp provides.",
    ],
    elements: [
      {
        title: "Duty",
        text: "A contractor, subcontractor, owner, or other responsible party had a duty to provide reasonably safe conditions and follow OSHA safety standards.",
      },
      {
        title: "Breach",
        text: "That duty was broken by unsafe practices, bad equipment, ignored hazards, or failure to follow safety rules.",
      },
      {
        title: "Causation",
        text: "That failure caused the accident and your injuries.",
      },
      {
        title: "Damages",
        text: "You suffered real harm — medical bills, time away from work, disability, pain, or long-term limitations.",
      },
    ],
    subcategories: [
      {
        name: "Falls from Height",
        desc: "Scaffold, ladder, roof, or platform falls.",
      },
      {
        name: "Struck-By Accidents",
        desc: "Workers hit by tools, debris, or equipment.",
      },
      {
        name: "Machinery and Equipment Failures",
        desc: "Unsafe or poorly maintained equipment caused injury.",
      },
      {
        name: "Electrical Injuries",
        desc: "Contact with live wires or unsafe site conditions.",
      },
      {
        name: "Collapse and Trench Cases",
        desc: "Structural failures or excavation incidents.",
      },
    ],
    moRules: [
      "Workers' comp: no-fault — RSMo § 287.120",
      "Third-party personal injury: 5 years — RSMo § 516.120",
      "Third-party claims allow full damages including pain/suffering — RSMo § 287.150",
      "OSHA violations treated as evidence of negligence",
    ],
    ksRules: [
      "Workers' comp under KSA § 44-504",
      "Third-party action must be filed within 1 year of injury",
      "Personal injury SOL: 2 years — KSA § 60-513",
      "Failure to file third-party claim within 1 year may assign claim to employer",
    ],
    investigation: [
      "Initial conversation — We get a clear picture of how the incident happened.",
      "Evidence collection — Incident reports, site photos, witness statements, safety records, and employer information.",
      "Liability review — We look at workers' comp issues and whether third-party claims may exist.",
      "Medical and wage review — We document treatment, work restrictions, and lost income.",
      "Demand or filing — We pursue the right path based on the facts.",
      "Resolution — Settlement, mediation, or trial.",
    ],
    damages: {
      economic: [
        "Medical expenses beyond workers' comp coverage",
        "Full lost wages and earning capacity",
        "Vocational rehabilitation",
        "Adaptive equipment and home modifications",
      ],
      nonEconomic: [
        "Pain and suffering (not available through workers' comp)",
        "Permanent disability",
        "Loss of enjoyment of life",
        "Emotional distress",
      ],
    },
    faqs: [
      {
        q: "Is this only a workers' comp case?",
        a: "Not always. Some construction injury cases involve separate claims against third parties — general contractors, equipment makers, or property owners.",
      },
      {
        q: "Who besides my employer might be responsible?",
        a: "Depending on the facts, it could include a general contractor, subcontractor, property owner, or equipment manufacturer.",
      },
      {
        q: "What if OSHA cited the worksite?",
        a: "OSHA violations are strong evidence of negligence. They can help establish that a third party failed to maintain safe conditions.",
      },
    ],
  },
  {
    slug: "sexual-abuse",
    name: "Sexual Abuse",
    subhead: "After abuse, assault, or exploitation.",
    heroImage: "/images/pa-nursing-home.png",
    mikeCredential:
      "AV Preeminent rated. Experienced in civil claims involving institutional failure, abuse by authority figures, and survivor advocacy.",
    definition: [
      "A sexual abuse civil case arises when someone is harmed by sexual abuse, assault, or exploitation and there may be a legal claim against the abuser, the institution that enabled it, or both. These cases are about accountability and safety.",
      "A civil case is separate from a criminal case. Even if no charges were filed or no conviction happened, that does not automatically end the civil side.",
    ],
    elements: [
      {
        title: "Duty",
        text: "A person or institution had a duty not to abuse, exploit, ignore complaints, or fail to protect someone in their care.",
      },
      {
        title: "Breach",
        text: "That duty was broken through abuse itself or by failing to supervise, report, investigate, or act.",
      },
      {
        title: "Causation",
        text: "That misconduct caused physical, emotional, or financial harm.",
      },
      {
        title: "Damages",
        text: "You suffered real harm — trauma, counseling costs, lost income, medical expenses, or other losses.",
      },
    ],
    subcategories: [
      {
        name: "Abuse by Trusted Adults",
        desc: "Teachers, clergy, coaches, care providers, supervisors, or others in positions of trust.",
      },
      {
        name: "Institutional Failure Cases",
        desc: "An organization ignored warnings, covered up misconduct, or failed to protect people.",
      },
      {
        name: "Facility and Care Cases",
        desc: "Abuse in nursing homes, treatment settings, schools, or youth programs.",
      },
      {
        name: "Adult Survivor Cases",
        desc: "Claims brought years later after someone is ready to come forward.",
      },
    ],
    moRules: [
      "Statute of limitations varies by circumstances — consult an attorney promptly",
      "Missouri has extended filing windows for childhood sexual abuse claims",
      "Civil claims do not require a criminal conviction",
      "Institutional liability may apply where organizations failed to protect",
    ],
    ksRules: [
      "Statute of limitations varies by circumstances — KSA § 60-523 may apply",
      "Extended filing windows for childhood sexual abuse claims under Kansas law",
      "Civil claims are independent of criminal proceedings",
    ],
    investigation: [
      "Private conversation — We listen carefully and explain options.",
      "Information review — Reports, records, witness accounts, employment or institutional files, and related documents.",
      "Liability review — We examine both the individual conduct and any institutional failure.",
      "Damages review — We document treatment, trauma, work impact, and other losses.",
      "Demand or filing — We take the next step only when you understand the path.",
      "Resolution — Settlement or litigation, depending on the case.",
    ],
    damages: {
      economic: [
        "Counseling and therapy costs",
        "Medical treatment",
        "Lost wages and career impact",
        "Relocation and safety expenses",
      ],
      nonEconomic: [
        "Emotional and psychological trauma",
        "Pain and suffering",
        "Loss of trust and personal security",
        "Loss of enjoyment of life",
      ],
    },
    faqs: [
      {
        q: "Do I have to go public right away?",
        a: "Not necessarily. Privacy concerns can often be discussed early.",
      },
      {
        q: "What if the abuse happened years ago?",
        a: "Possibly still worth reviewing. Both Missouri and Kansas have extended filing windows for childhood sexual abuse. Time limits can be complicated and fact-specific.",
      },
      {
        q: "Can I bring a case even if no criminal charges were filed?",
        a: "Yes. Civil cases are separate from criminal proceedings. The standard of proof is different.",
      },
    ],
  },
  {
    slug: "active-shooter",
    name: "Active Shooter Incident",
    subhead: "After a mass shooting or security failure.",
    heroImage: "/images/pa-premises-liability.png",
    mikeCredential:
      "AV Preeminent rated. Experienced in negligent security, premises liability, and catastrophic injury litigation.",
    definition: [
      "An active shooter civil case may arise when someone is injured or killed in a shooting and there is evidence that a business, property owner, security company, school, event organizer, or other institution failed to take reasonable safety steps.",
      "Not every shooting leads to a civil claim. But if there were known risks, ignored warnings, poor security, or preventable failures, there may be a case worth examining.",
    ],
    elements: [
      {
        title: "Duty",
        text: "A property owner or responsible organization had a duty to use reasonable care under the circumstances.",
      },
      {
        title: "Breach",
        text: "That duty was broken by failing to address known threats, provide reasonable security, or respond appropriately to warning signs.",
      },
      {
        title: "Causation",
        text: "That failure contributed to the injuries or deaths that followed.",
      },
      {
        title: "Damages",
        text: "Victims and families suffered physical injury, trauma, medical costs, lost income, or wrongful death losses.",
      },
    ],
    subcategories: [
      {
        name: "Negligent Security Claims",
        desc: "Security failures at businesses, venues, schools, apartments, or public spaces.",
      },
      {
        name: "Ignored Warning Signs",
        desc: "Known threats were not taken seriously.",
      },
      {
        name: "Emergency Response Failures",
        desc: "Policies, staffing, or planning were inadequate.",
      },
      {
        name: "Wrongful Death Cases",
        desc: "Families lost a loved one because of preventable failures.",
      },
    ],
    moRules: [
      "Statute of limitations: 5 years for negligence — RSMo § 516.120",
      "Wrongful death: 3 years — RSMo § 537.100",
      "Pure comparative fault — RSMo § 537.765",
      "Negligent security claims evaluated under premises liability standards",
    ],
    ksRules: [
      "Statute of limitations: 2 years — KSA § 60-513",
      "Wrongful death: 2 years — KSA § 60-513(a)(5)",
      "Modified comparative fault — 50% bar — KSA § 60-258a",
    ],
    investigation: [
      "Initial conversation — We talk through what happened and who may have been involved.",
      "Evidence review — Police reports, incident records, security footage, prior complaints, and site policies.",
      "Liability analysis — We assess whether a third party failed to take reasonable safety measures.",
      "Damages review — We document physical injuries, trauma care, lost income, and family losses.",
      "Demand or filing — If the facts support it, we move forward.",
      "Resolution — Settlement or litigation.",
    ],
    damages: {
      economic: [
        "Medical and trauma care expenses",
        "Lost wages and earning capacity",
        "Funeral and burial costs",
        "Ongoing counseling and therapy",
      ],
      nonEconomic: [
        "Pain and suffering",
        "Post-traumatic stress",
        "Loss of enjoyment of life",
        "Loss of companionship (wrongful death)",
      ],
    },
    faqs: [
      {
        q: "Is the shooter the only person who can be responsible?",
        a: "Not always. In some cases, other parties may share responsibility for preventable security failures.",
      },
      {
        q: "Can family members bring claims too?",
        a: "In wrongful death cases, certain family members may have legal rights under Missouri (RSMo § 537.080) or Kansas (KSA § 60-1902) law.",
      },
      {
        q: "What if the shooting happened at a school or government building?",
        a: "Claims against government entities involve special rules and shorter deadlines. Legal counsel should be engaged immediately.",
      },
    ],
  },
  {
    slug: "family-perspective",
    name: "When Someone You Love Was Hurt",
    subhead:
      "When you are trying to help someone you care about after a serious injury.",
    heroImage: "/images/pa-wrongful-death.png",
    mikeCredential:
      "AV Preeminent rated. Decades of working directly with families navigating serious injury and wrongful death cases.",
    definition: [
      "Sometimes the injured person is not the first one searching for answers. It is a spouse, parent, adult child, sibling, or partner trying to figure out what to do next.",
      "If someone you love was seriously hurt, you may be the one helping with hospital decisions, paperwork, bills, insurance calls, transportation, and daily care. That is a lot to carry. You do not have to sort it out alone.",
    ],
    elements: [
      {
        title: "Medical Care Comes First",
        text: "Make sure your loved one is getting the care and follow-up they need. Everything else can wait.",
      },
      {
        title: "Save the Paper Trail",
        text: "Keep discharge papers, bills, prescriptions, insurance letters, photos, and names of providers. These matter later.",
      },
      {
        title: "Be Careful with Insurance Calls",
        text: "The other side may want statements early, before the full picture is clear. You have no obligation to give a recorded statement without legal counsel.",
      },
      {
        title: "Watch the Daily Impact",
        text: "Keep track of what changed — pain, mobility, sleep, memory, mood, work, and home life. Your notes become evidence.",
      },
    ],
    subcategories: [
      {
        name: "Spouse or Partner Helping",
        desc: "You are managing the household, the bills, and the recovery at the same time.",
      },
      {
        name: "Parent of an Injured Child",
        desc: "Your child was hurt and you are navigating medical care, school disruption, and legal questions.",
      },
      {
        name: "Adult Child Helping a Parent",
        desc: "Your parent was injured and you are coordinating their care and legal options.",
      },
      {
        name: "Family After a Catastrophic Injury",
        desc: "The injury changed everything and your family is trying to understand the path forward.",
      },
    ],
    moRules: [
      "The injured person's statute of limitations applies to their claim",
      "Loss of consortium claims available to spouses — RSMo § 537.080",
      "Wrongful death: 3 years, specific priority rules for who may file — RSMo § 537.100",
      "Family members can initiate legal consultations on behalf of an injured person",
    ],
    ksRules: [
      "The injured person's statute of limitations applies to their claim",
      "Loss of consortium claims available under Kansas common law",
      "Wrongful death: 2 years — KSA § 60-513(a)(5)",
      "Any heir who sustained a loss may file a wrongful death claim — KSA § 60-1902",
    ],
    investigation: [
      "Initial conversation — We listen and help you understand what matters right now.",
      "Guidance on records and evidence — We tell you what to save and what to ignore.",
      "Insurance and claim review — We explain the pressure points before mistakes are made.",
      "Case building — If there is a case, we start organizing the facts and documents.",
      "Ongoing support — We stay focused on the legal side while your family focuses on care.",
    ],
    damages: {
      economic: [
        "Medical bills and future treatment costs",
        "Lost wages of the injured person",
        "Cost of family caregiving and household disruption",
        "Funeral and burial costs (wrongful death)",
      ],
      nonEconomic: [
        "Pain and suffering of the injured person",
        "Loss of companionship and consortium",
        "Emotional distress",
        "Loss of guidance and support",
      ],
    },
    faqs: [
      {
        q: "Can I call even if I am not the injured person?",
        a: "Yes. Family members often make the first call.",
      },
      {
        q: "What if my loved one is still in the hospital?",
        a: "That is often the right time to get guidance, especially if records, bills, or insurance issues are already starting.",
      },
      {
        q: "What if I am not sure there is a case?",
        a: "That is fine. A consultation is the place to sort that out. It is free and there is no obligation.",
      },
    ],
  },
];
