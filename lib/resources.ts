/* ===========================================================
   Downloadable Resources — data config
   
   To add a new resource, append an entry to the RESOURCES array.
   The /resources page reads this file and renders a card for each.
   No layout changes needed.
   =========================================================== */

export interface Resource {
  /** Unique slug used as a key */
  slug: string;
  /** Display title */
  title: string;
  /** One-line description shown on the card */
  description: string;
  /** Path to the PDF in /public (served as a static asset) */
  pdfPath: string;
  /** Optional path to a QR code image in /public */
  qrCodePath?: string;
  /** Optional path to a thumbnail/preview image in /public */
  thumbnailPath?: string;
  /** Category label shown above the title */
  category?: string;
}

export const RESOURCES: Resource[] = [
  {
    slug: "personal-injury-checklist",
    title: "Personal Injury Checklist",
    description:
      "Essential steps to protect your health, your rights, and your claim in Missouri and Kansas.",
    pdfPath: "/resources/yl-personal-injury-checklist.pdf",
    qrCodePath: "/images/pi-checklist-qr.png",
    thumbnailPath: "/images/pi-checklist-thumb.png",
    category: "Checklist",
  },
  {
    slug: "car-accident-checklist",
    title: "Car Accident Checklist",
    description:
      "What to do at the scene, in the first 24 hours, and before you talk to insurance.",
    pdfPath: "/resources/Yonke-Law-Car-Accident-Checklist.pdf",
    qrCodePath: "/images/Yonke-Law-Car-Accident-Checklist-qr.png",
    category: "Checklist",
  },
  {
    slug: "truck-accident-checklist",
    title: "Truck Accident Checklist",
    description:
      "Special steps for commercial vehicle crashes — evidence that disappears fast and who to notify.",
    pdfPath: "/resources/Yonke-Law-Truck-Accident-Checklist.pdf",
    qrCodePath: "/images/Yonke-Law-Truck-Accident-Checklist-qr.png",
    category: "Checklist",
  },
  {
    slug: "medical-malpractice-checklist",
    title: "Medical Malpractice Checklist",
    description:
      "Records to gather, timelines that matter, and how to document what went wrong.",
    pdfPath: "/resources/Yonke-Law-Medical-Malpractice-Checklist.pdf",
    qrCodePath: "/images/Yonke-Law-Medical-Malpractice-Checklist-qr.png",
    category: "Checklist",
  },
  {
    slug: "wrongful-death-checklist",
    title: "Wrongful Death Checklist",
    description:
      "Guidance for families navigating a loss caused by someone else's negligence.",
    pdfPath: "/resources/Yonke-Law-Wrongful-Death-Checklist.pdf",
    qrCodePath: "/images/Yonke-Law-Wrongful-Death-Checklist-qr.png",
    category: "Checklist",
  },
  {
    slug: "workers-compensation-checklist",
    title: "Workers' Compensation Checklist",
    description:
      "Steps to protect your claim after a workplace or on-the-job injury.",
    pdfPath: "/resources/Yonke-Law-Workers-Compensation-Checklist.pdf",
    qrCodePath: "/images/Yonke-Law-Workers-Compensation-Checklist-qr.png",
    category: "Checklist",
  },
  {
    slug: "slip-and-fall-checklist",
    title: "Slip and Fall / Premises Checklist",
    description:
      "What to document after an injury on someone else's property — before evidence disappears.",
    pdfPath: "/resources/Yonke-Law-Slip-and-Fall-Premises-Checklist.pdf",
    qrCodePath: "/images/Yonke-Law-Slip-and-Fall-Premises-Checklist-qr.png",
    category: "Checklist",
  },
  {
    slug: "catastrophic-injury-caregiver-checklist",
    title: "Catastrophic Injury Caregiver Checklist",
    description:
      "For families managing a life-changing injury — what to track, who to talk to, and how to stay organized.",
    pdfPath: "/resources/Yonke-Law-Catastrophic-Injury-Caregiver-Checklist.pdf",
    qrCodePath: "/images/Yonke-Law-Catastrophic-Injury-Caregiver-Checklist-qr.png",
    category: "Checklist",
  },
];
