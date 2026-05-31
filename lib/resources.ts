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
];
