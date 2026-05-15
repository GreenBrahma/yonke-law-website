import type { PracticeArea } from "./practiceAreaData";

export const PRACTICE_AREAS_3: PracticeArea[] = [
  {
    slug: "rideshare-accidents",
    name: "Rideshare Accidents",
    subhead: "After a crash involving Uber or Lyft.",
    heroImage: "/images/pa-car-accidents.png",
    mikeCredential:
      "AV Preeminent rated. Experienced in multi-policy motor vehicle cases involving rideshare and commercial app-based drivers.",
    definition: [
      "A rideshare accident case comes up when someone is hurt in a crash involving an Uber, Lyft, or other app-based driver. You may have a claim if you were a passenger, another driver, a pedestrian, or a cyclist and the rideshare driver or another careless driver caused the crash.",
      "These cases can be more complicated than a regular car wreck because there may be more than one insurance policy involved. The key question is usually what the rideshare driver was doing in the app at the time of the crash — whether they were waiting for a ride, on the way to pick someone up, or actively carrying a passenger.",
    ],
    elements: [
      {
        title: "Duty",
        text: "Every driver on the road has a duty to drive carefully and follow the rules of the road.",
      },
      {
        title: "Breach",
        text: "Speeding, distracted driving, unsafe lane changes, following too closely, and failing to yield are all common examples.",
      },
      {
        title: "Causation",
        text: "That careless driving must be what caused the crash and your injuries.",
      },
      {
        title: "Damages",
        text: "You must have actual harm — medical bills, lost wages, pain and suffering, or other measurable losses.",
      },
    ],
    subcategories: [
      {
        name: "Passenger Injuries",
        desc: "You were riding in an Uber or Lyft when the crash happened.",
      },
      {
        name: "Hit by a Rideshare Driver",
        desc: "You were in another car, on foot, or on a bike when the rideshare driver caused the wreck.",
      },
      {
        name: "Insurance Coverage Disputes",
        desc: "The companies and insurers argue about which policy applies.",
      },
      {
        name: "Uninsured / Underinsured Issues",
        desc: "The at-fault driver does not have enough coverage, so other policies may matter.",
      },
      {
        name: "Multi-Vehicle Crashes",
        desc: "More than one driver may share fault.",
      },
    ],
    moRules: [
      "Statute of limitations: 5 years — RSMo § 516.120",
      "Pure comparative fault — recover even if partly at fault, reduced proportionately — RSMo § 537.765",
      "Minimum liability insurance: $25,000 per person / $50,000 per accident",
    ],
    ksRules: [
      "Statute of limitations: 2 years — KSA § 60-513",
      "Modified comparative fault — no recovery if 50% or more at fault — KSA § 60-258a",
      "Minimum liability insurance: $25,000 per person / $50,000 per accident",
    ],
    investigation: [
      "Initial conversation — Free. No commitment. We listen and give you a straight read on what may apply.",
      "Evidence collection — Crash report, witness names, photos, app screenshots, trip records, and insurance details.",
      "Coverage review — We sort out what insurance policies may apply based on the driver's app status.",
      "Medical records review — We document your injuries, treatment, and how this affected your daily life.",
      "Demand or filing — We push for a fair settlement or file suit if needed.",
      "Resolution — Settlement, mediation, or trial.",
    ],
    damages: {
      economic: [
        "Medical expenses",
        "Lost wages",
        "Future treatment",
        "Out-of-pocket costs",
      ],
      nonEconomic: [
        "Pain and suffering",
        "Emotional distress",
        "Loss of enjoyment of life",
        "Lasting limitations",
      ],
    },
    faqs: [
      {
        q: "Does Uber or Lyft automatically pay my claim?",
        a: "No. Coverage depends on what the driver was doing in the app when the crash happened.",
      },
      {
        q: "What if I was a passenger?",
        a: "Passengers often have strong claims because they usually did not cause the wreck.",
      },
      {
        q: "Should I report the crash in the app?",
        a: "Yes, but keep it short and factual. Do not guess or give a recorded statement without legal advice.",
      },
    ],
  },
  {
    slug: "surgical-error",
    name: "Surgical Error",
    subhead: "After something went wrong in surgery.",
    heroImage: "/images/pa-medical-malpractice.png",
    mikeCredential:
      "Top 25 Medical Malpractice Trial Lawyer. Keenan Trial Institute faculty. Extensive experience with surgical error, anesthesia, and post-operative complication cases.",
    definition: [
      "A surgical error case arises when a patient is harmed because a surgeon, anesthesiologist, nurse, or hospital team made a preventable mistake. Not every bad outcome is malpractice. Surgery carries risks. But a preventable mistake is different from an accepted risk.",
      "These cases can involve errors during surgery, anesthesia problems, poor monitoring, or a failure to respond when complications show up afterward. Surgical error is a specific category within medical malpractice — for a broader overview, see our medical malpractice page.",
    ],
    elements: [
      {
        title: "Duty",
        text: "The medical team had a duty to provide care that met accepted medical standards.",
      },
      {
        title: "Breach",
        text: "A preventable mistake happened that a reasonably careful provider should not have made.",
      },
      {
        title: "Causation",
        text: "That mistake must have caused additional injury, complications, or a worse result.",
      },
      {
        title: "Damages",
        text: "You must have actual harm — more medical care, more pain, more time away from work, permanent injury, or worse.",
      },
    ],
    subcategories: [
      {
        name: "Wrong-Site Surgery",
        desc: "Operating on the wrong body part or performing the wrong procedure.",
      },
      {
        name: "Anesthesia Mistakes",
        desc: "Too much anesthesia, too little, failure to monitor, or delayed response.",
      },
      {
        name: "Retained Objects",
        desc: "Surgical tools or sponges left inside the body.",
      },
      {
        name: "Organ or Nerve Damage",
        desc: "Avoidable injury during the procedure.",
      },
      {
        name: "Failure to Monitor After Surgery",
        desc: "Complications were missed or ignored when warning signs were present.",
      },
    ],
    moRules: [
      "Statute of limitations: 2 years — RSMo § 516.105",
      "10-year absolute statute of repose",
      "Affidavit of merit required before filing — RSMo § 538.225",
      "Noneconomic damage cap: $400,000 standard / $700,000 catastrophic — RSMo § 538.210",
      "Caps increase by 1.7% annually for inflation",
    ],
    ksRules: [
      "Statute of limitations: 2 years — KSA § 60-513(c)",
      "4-year absolute statute of repose",
      "Pre-suit screening panel required — KSA § 65-4901",
      "Noneconomic damage cap: $350,000 — KSA § 60-19a02",
    ],
    investigation: [
      "Initial conversation — We hear the timeline and what changed after surgery.",
      "Records collection — Hospital records, operative notes, anesthesia records, follow-up care, imaging, and billing.",
      "Expert review — We evaluate whether the outcome points to negligence or a known medical risk.",
      "Damages review — We look at added treatment, time missed from work, disability, and long-term impact.",
      "Demand or filing — If the facts support it, we move the case forward.",
      "Resolution — Settlement, mediation, or trial.",
    ],
    damages: {
      economic: [
        "Additional medical expenses",
        "Corrective surgeries",
        "Lost wages and earning capacity",
        "Long-term rehabilitation",
      ],
      nonEconomic: [
        "Pain and suffering (subject to statutory caps)",
        "Permanent injury or disfigurement",
        "Loss of enjoyment of life",
        "Emotional distress",
      ],
    },
    faqs: [
      {
        q: "Does a bad surgical result mean I have a case?",
        a: "Not always. The key question is whether a preventable mistake caused the bad result.",
      },
      {
        q: "What if the doctor said this was just a known risk?",
        a: "Sometimes that is true. Sometimes it is not. The records and expert review matter.",
      },
      {
        q: "How soon should I act?",
        a: "As soon as you can. Medical malpractice cases are document-heavy and deadline-sensitive. Missouri requires filing within 2 years (RSMo § 516.105).",
      },
    ],
  },
  {
    slug: "diagnostic-error",
    name: "Diagnostic Error",
    subhead: "After a condition was missed or diagnosed too late.",
    heroImage: "/images/pa-medical-malpractice.png",
    mikeCredential:
      "Top 25 Medical Malpractice Trial Lawyer. Keenan Trial Institute faculty. Focused experience in missed and delayed diagnosis cases involving cancer, stroke, and infection.",
    definition: [
      "A diagnostic error case arises when a doctor, hospital, or other provider misses a serious condition, diagnoses it too late, or diagnoses the wrong problem. That lost time can matter a lot.",
      "These cases often involve cancer, stroke, heart attack, infection, internal bleeding, or other conditions where early treatment can make a major difference. Diagnostic error is a specific category within medical malpractice — for a broader overview, see our medical malpractice page.",
    ],
    elements: [
      {
        title: "Duty",
        text: "A provider had a duty to evaluate symptoms with reasonable care.",
      },
      {
        title: "Breach",
        text: "They failed to order the right tests, follow up on results, recognize warning signs, or refer you when they should have.",
      },
      {
        title: "Causation",
        text: "That failure must have led to a delayed diagnosis, wrong treatment, or a worse outcome.",
      },
      {
        title: "Damages",
        text: "You suffered actual harm — more invasive treatment, added medical costs, a lower chance of recovery, more pain, or lost income.",
      },
    ],
    subcategories: [
      {
        name: "Missed Cancer Diagnosis",
        desc: "Cancer was not found when it should have been.",
      },
      {
        name: "Delayed Stroke or Heart Attack Diagnosis",
        desc: "Warning signs were missed and treatment was delayed.",
      },
      {
        name: "Failure to Diagnose Infection",
        desc: "A serious infection, sepsis, or related issue was overlooked.",
      },
      {
        name: "Misread Imaging or Lab Results",
        desc: "Scans, tests, or pathology were read incorrectly or not followed up on.",
      },
      {
        name: "Failure to Refer",
        desc: "A provider did not send the patient to the right specialist in time.",
      },
    ],
    moRules: [
      "Statute of limitations: 2 years — RSMo § 516.105",
      "10-year absolute statute of repose",
      "Affidavit of merit required before filing — RSMo § 538.225",
      "Noneconomic damage cap: $400,000 standard / $700,000 catastrophic — RSMo § 538.210",
    ],
    ksRules: [
      "Statute of limitations: 2 years — KSA § 60-513(c)",
      "4-year absolute statute of repose",
      "Pre-suit screening panel required — KSA § 65-4901",
      "Noneconomic damage cap: $350,000 — KSA § 60-19a02",
    ],
    investigation: [
      "Initial conversation — We learn the timeline from first symptoms to correct diagnosis.",
      "Records collection — Office records, ER records, labs, imaging, pathology, and follow-up notes.",
      "Expert review — We assess whether the delay changed the outcome.",
      "Damages review — We document added treatment, lost time, and long-term harm.",
      "Demand or filing — If supported by the facts, we move forward.",
      "Resolution — Settlement, mediation, or trial.",
    ],
    damages: {
      economic: [
        "Additional medical expenses from delayed treatment",
        "More invasive procedures that earlier diagnosis would have avoided",
        "Lost wages and earning capacity",
        "Future treatment costs",
      ],
      nonEconomic: [
        "Pain and suffering (subject to statutory caps)",
        "Reduced chance of recovery",
        "Loss of enjoyment of life",
        "Emotional distress",
      ],
    },
    faqs: [
      {
        q: "Is a delayed diagnosis enough for a case by itself?",
        a: "Not always. The question is whether the delay caused added harm or made the outcome worse.",
      },
      {
        q: "What if another doctor later figured it out right away?",
        a: "That can be an important sign that something was missed earlier.",
      },
      {
        q: "How long do I have to file?",
        a: "Two years in both Missouri (RSMo § 516.105) and Kansas (KSA § 60-513(c)). These deadlines are strict.",
      },
    ],
  },
  {
    slug: "medication-error",
    name: "Medication Error",
    subhead: "After the wrong drug or wrong dose caused harm.",
    heroImage: "/images/pa-medical-malpractice.png",
    mikeCredential:
      "Top 25 Medical Malpractice Trial Lawyer. Keenan Trial Institute faculty. Experienced in pharmacy, hospital, and prescriber negligence cases.",
    definition: [
      "A medication error case arises when a patient is harmed because the wrong medicine was prescribed, dispensed, labeled, or given. These mistakes can happen in hospitals, clinics, nursing facilities, and pharmacies.",
      "Sometimes the error is the wrong drug. Sometimes it is the wrong dose, a dangerous drug interaction, or a medication given to the wrong patient. Medication error is a specific category within medical malpractice — for a broader overview, see our medical malpractice page.",
    ],
    elements: [
      {
        title: "Duty",
        text: "The doctor, nurse, pharmacist, or facility had a duty to handle medications safely.",
      },
      {
        title: "Breach",
        text: "A preventable error happened in prescribing, dispensing, labeling, or administration.",
      },
      {
        title: "Causation",
        text: "That error directly caused the injury or made the underlying condition worse.",
      },
      {
        title: "Damages",
        text: "You suffered actual harm — hospitalization, complications, more treatment, pain, missed work, or worse.",
      },
    ],
    subcategories: [
      {
        name: "Wrong Prescription",
        desc: "The wrong drug was prescribed.",
      },
      {
        name: "Wrong Pharmacy Fill",
        desc: "The pharmacy gave the wrong medication or wrong dose.",
      },
      {
        name: "Drug Interaction Cases",
        desc: "Dangerous combinations were missed.",
      },
      {
        name: "Allergy-Related Errors",
        desc: "Known allergies were overlooked.",
      },
      {
        name: "Hospital Medication Mix-Ups",
        desc: "The wrong medicine or dose was given during care.",
      },
    ],
    moRules: [
      "Statute of limitations: 2 years — RSMo § 516.105",
      "10-year absolute statute of repose",
      "Affidavit of merit required before filing — RSMo § 538.225",
      "Noneconomic damage cap: $400,000 standard / $700,000 catastrophic — RSMo § 538.210",
    ],
    ksRules: [
      "Statute of limitations: 2 years — KSA § 60-513(c)",
      "4-year absolute statute of repose",
      "Pre-suit screening panel required — KSA § 65-4901",
      "Noneconomic damage cap: $350,000 — KSA § 60-19a02",
    ],
    investigation: [
      "Initial conversation — We get the medication timeline and what happened next.",
      "Records collection — Prescription records, pharmacy logs, hospital charts, and follow-up treatment.",
      "Liability review — We determine who made the error and where the breakdown happened.",
      "Damages review — We document the medical and financial impact.",
      "Demand or filing — We move the case forward if the evidence supports it.",
      "Resolution — Settlement, mediation, or trial.",
    ],
    damages: {
      economic: [
        "Hospitalization and emergency treatment costs",
        "Corrective treatment expenses",
        "Lost wages",
        "Future medical monitoring",
      ],
      nonEconomic: [
        "Pain and suffering (subject to statutory caps)",
        "Organ damage or lasting side effects",
        "Loss of enjoyment of life",
        "Emotional distress",
      ],
    },
    faqs: [
      {
        q: "What if I did not realize right away it was a medication mistake?",
        a: "That is common. Many people only learn the truth after another doctor or pharmacist reviews what happened.",
      },
      {
        q: "Who can be responsible?",
        a: "It depends on the facts. It may be a doctor, nurse, pharmacy, hospital, or more than one party.",
      },
      {
        q: "How long do I have to file?",
        a: "Two years in both Missouri (RSMo § 516.105) and Kansas (KSA § 60-513(c)).",
      },
    ],
  },
  {
    slug: "birth-injury",
    name: "Birth Injury",
    subhead: "After a preventable injury during pregnancy, labor, or delivery.",
    heroImage: "/images/pa-medical-malpractice.png",
    mikeCredential:
      "Top 25 Medical Malpractice Trial Lawyer. Keenan Trial Institute faculty. Experienced in birth injury litigation involving delayed delivery, oxygen deprivation, and maternal harm.",
    definition: [
      "A birth injury case arises when a baby or mother is harmed because medical providers failed to respond properly during pregnancy, labor, delivery, or shortly after birth. These are some of the hardest cases a family can face.",
      "Not every difficult delivery is malpractice. But when warning signs are missed, treatment is delayed, or preventable mistakes happen, families deserve answers. Birth injury is a specific category within medical malpractice — for a broader overview, see our medical malpractice page.",
    ],
    elements: [
      {
        title: "Duty",
        text: "The medical team had a duty to provide competent care during pregnancy and delivery.",
      },
      {
        title: "Breach",
        text: "They failed to respond the way a reasonably careful provider should have under the circumstances.",
      },
      {
        title: "Causation",
        text: "That failure caused injury to the baby, the mother, or both.",
      },
      {
        title: "Damages",
        text: "The harm may include added medical bills, lifelong care needs, disability, pain, emotional trauma, or lost income.",
      },
    ],
    subcategories: [
      {
        name: "Lack of Oxygen Injuries",
        desc: "Delayed response to fetal distress or other warning signs.",
      },
      {
        name: "Delayed C-Section",
        desc: "Emergency delivery should have happened sooner.",
      },
      {
        name: "Improper Use of Delivery Tools",
        desc: "Forceps or vacuum devices caused avoidable injury.",
      },
      {
        name: "Nerve and Shoulder Injuries",
        desc: "Delivery complications led to physical harm.",
      },
      {
        name: "Maternal Injury Cases",
        desc: "Negligent care caused serious harm to the mother.",
      },
    ],
    moRules: [
      "Statute of limitations: 2 years — RSMo § 516.105",
      "10-year absolute statute of repose",
      "Affidavit of merit required before filing — RSMo § 538.225",
      "Noneconomic damage cap: $400,000 standard / $700,000 catastrophic — RSMo § 538.210",
      "Minor's statute may toll deadlines in some circumstances",
    ],
    ksRules: [
      "Statute of limitations: 2 years — KSA § 60-513(c)",
      "4-year absolute statute of repose",
      "Pre-suit screening panel required — KSA § 65-4901",
      "Noneconomic damage cap: $350,000 — KSA § 60-19a02",
    ],
    investigation: [
      "Initial conversation — We listen to what happened before, during, and after delivery.",
      "Records collection — Prenatal records, fetal monitoring strips, delivery records, NICU records, and follow-up care.",
      "Expert review — We evaluate whether warning signs were missed or the response came too late.",
      "Life-impact review — We look at future care, therapy, disability, family burden, and financial loss.",
      "Demand or filing — We proceed if the facts support a claim.",
      "Resolution — Settlement, mediation, or trial.",
    ],
    damages: {
      economic: [
        "Lifelong medical and care expenses",
        "Corrective surgeries and therapy",
        "Lost earning capacity",
        "Home modifications and adaptive equipment",
      ],
      nonEconomic: [
        "Pain and suffering (subject to statutory caps)",
        "Permanent disability",
        "Loss of enjoyment of life",
        "Emotional distress for the family",
      ],
    },
    faqs: [
      {
        q: "Is every difficult birth a legal case?",
        a: "No. The issue is whether avoidable medical mistakes caused avoidable harm.",
      },
      {
        q: "Can a case involve injuries to both mother and baby?",
        a: "Yes, depending on what happened.",
      },
      {
        q: "How long do I have to file?",
        a: "Two years in both Missouri (RSMo § 516.105) and Kansas (KSA § 60-513(c)). Timing rules may differ when the injured person is a minor.",
      },
    ],
  },
];
