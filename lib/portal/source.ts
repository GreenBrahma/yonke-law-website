/**
 * People First portal — where case facts come from.
 *
 * Every screen asks this one function for the signed-in person's case. Today
 * it answers with the demonstration case. When Filevine is connected, the
 * Filevine lookup goes here and no screen changes.
 *
 * INTEGRATION POINT (Filevine): replace the body of getCaseFor with a lookup
 * of the open Filevine project whose client contact has this email, mapped
 * into PortalCase (see types.ts for which Filevine record feeds each field).
 * The firm's Filevine service account must exist first.
 */
import { sampleCase } from "./sample-case";
import type { PortalCase, PrepVideo } from "./types";

export async function getCaseFor(email: string): Promise<PortalCase> {
  return sampleCase(email);
}

/** Preparation videos. These are the firm's own and the same for everyone. */
export const PREP_VIDEOS: PrepVideo[] = [
  {
    id: "deposition-prep",
    title: "Preparing for your deposition",
    description: "What a deposition is, what to expect in the room, and how to get ready.",
    youtubeId: "q-_tGOFkYjs",
  },
  {
    id: "playbook",
    title: "Watch first: how a case moves",
    description: "A short overview of the steps in a personal injury case.",
    src: "/media/resources/universal-playbook.mp4",
    poster: "/media/resources/universal-playbook-poster.jpg",
  },
];

/**
 * The file behind one shared document, for the signed-in person only.
 * INTEGRATION POINT (Filevine): fetch the real document here.
 */
export async function getLegalDocumentFile(
  email: string,
  documentId: string
): Promise<{ bytes: Uint8Array; contentType: string; fileName: string } | null> {
  const portalCase = await getCaseFor(email);
  const doc = portalCase.legalDocuments.find((d) => d.id === documentId);
  if (!doc) return null;
  if (!portalCase.isSample) return null;
  const { samplePdf } = await import("./sample-pdf");
  return {
    bytes: samplePdf(doc.title, [
      doc.summary,
      "",
      "This page stands in for the real document.",
      "Once Filevine is connected, the actual document opens here.",
    ]),
    contentType: "application/pdf",
    fileName: `${doc.title.replace(/[^\w ()-]/g, "")} (sample).pdf`,
  };
}

/** Dates still ahead of us, soonest first. */
export function upcomingDates<T extends { when: string }>(dates: T[], now: Date = new Date()): T[] {
  return dates.filter((d) => new Date(d.when) >= now).sort((a, b) => a.when.localeCompare(b.when));
}
