/**
 * People First portal — the shape of a person's case as the portal shows it.
 *
 * These types are deliberately small and are laid out the way Filevine holds
 * the same facts, so the Filevine connection can fill them without any screen
 * changing:
 *
 *   PortalCase       <- a Filevine project (one matter)
 *   PortalPerson     <- the project's client contact
 *   KeyDate          <- project deadlines and calendar events
 *   LegalDocument    <- project documents the firm chooses to share
 *   signature        <- the document's Vinesign status
 */

export type PortalPerson = {
  name: string;
  preferredName: string;
  email: string;
};

export type KeyDateKind = "call" | "meeting" | "deposition" | "deadline" | "court" | "medical";

export type KeyDate = {
  id: string;
  title: string;
  /** ISO date-time */
  when: string;
  kind: KeyDateKind;
  /** Where it happens, or how to join. */
  where: string;
  /** What the person should do or bring. Plain language. */
  note: string;
  /** Preparation video for this kind of event, when one exists. */
  prepVideoId?: string;
};

export type SignatureStatus = "signed" | "not_signed" | "not_required";

export type LegalDocument = {
  id: string;
  title: string;
  /** One line: what this document is and why it matters. */
  summary: string;
  /** ISO date the firm shared it. */
  sharedOn: string;
  signature: SignatureStatus;
  /** ISO date it was signed, when signed. */
  signedOn?: string;
  /** ISO date the firm would like it signed by, when not signed. */
  signBy?: string;
};

export type PortalCase = {
  /** True for the made-up demonstration case. The portal labels it on every screen. */
  isSample: boolean;
  /** Filevine project id once connected; a fixed label for the sample. */
  projectId: string;
  matterName: string;
  /** One or two plain sentences on where things stand. */
  whereThingsStand: string;
  person: PortalPerson;
  keyDates: KeyDate[];
  legalDocuments: LegalDocument[];
};

export type PrepVideo = {
  id: string;
  title: string;
  description: string;
  /** YouTube id, or a path to a self-hosted file. */
  youtubeId?: string;
  src?: string;
  poster?: string;
};
