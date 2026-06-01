// Demo data for the People First interactive preview.
// All strings are verbatim per People_First_Preview__Antigravity_Prompt.md Section 4.4.
// Components consume these exports directly — any copy change must happen here.

// ──────────────────────────────────────────────
// 1. Demo person profile
// ──────────────────────────────────────────────

export const DEMO_PERSON = {
  name: "Sarah M.",
  incident: "Rear-end collision, I-435 and Holmes, October 12, 2025",
  currentStage: 9,
  attorney: "Mike Yonke",
};

// ──────────────────────────────────────────────
// 2. The 14 stages (0-indexed array, 1-indexed display)
// ──────────────────────────────────────────────

export const STAGES = [
  "Application",
  "Attorney Review",
  "Schedule Call",
  "Dashboard",
  "Call Preparation",
  "Consultation",
  "Agreement",
  "Payment",
  "Case Preparation",
  "Depositions",
  "Resolution",
  "Closing",
  "Testimonial",
  "Referral",
] as const;

// ──────────────────────────────────────────────
// 3. Four demo documents
// ──────────────────────────────────────────────

export type DocumentStatus =
  | "Verified"
  | "Under Review"
  | "Flagged for Discussion";

export const DEMO_DOCUMENTS: { name: string; status: DocumentStatus }[] = [
  { name: "Police Report — Incident 10-12-2025", status: "Verified" },
  { name: "ER Discharge Summary — KU Med", status: "Verified" },
  { name: "MRI Imaging — Cervical", status: "Under Review" },
  { name: "Defendant Insurance Response", status: "Flagged for Discussion" },
];

// ──────────────────────────────────────────────
// 4. Three threaded messages (most recent first)
// ──────────────────────────────────────────────

export type Message = {
  from: "Mike Yonke" | "Sarah M.";
  timeAgo: string;
  body: string;
};

export const DEMO_MESSAGES: Message[] = [
  {
    from: "Mike Yonke",
    timeAgo: "2 days ago",
    body: "Sarah — got the updated MRI from KU Med. Reviewing tonight. Will call you tomorrow with the read.",
  },
  {
    from: "Sarah M.",
    timeAgo: "3 days ago",
    body: "Pain has been worse this week. I'm logging it in the journal.",
  },
  {
    from: "Mike Yonke",
    timeAgo: "5 days ago",
    body: "Deposition prep meeting is on the calendar for next Thursday. Prep packet attached to the event.",
  },
];

// ──────────────────────────────────────────────
// 5. Verbatim copy constants
// ──────────────────────────────────────────────

export const DOCUMENT_MODAL_TEXT =
  "Inside People First, this opens the file in a secure viewer. Demo only.";

export const MESSAGES_INPUT_PLACEHOLDER =
  "This is a demo. People First is where real conversations happen.";
