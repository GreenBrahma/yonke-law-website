/**
 * People First portal — the demonstration case.
 *
 * This is a made-up person and a made-up matter. No part of it comes from a
 * real file. It exists so the firm can see every screen working before
 * Filevine is connected, and the portal says "Sample case" wherever it shows.
 *
 * Dates are set relative to today so the demonstration always has something
 * coming up.
 */
import type { PortalCase } from "./types";

const DAY = 24 * 60 * 60 * 1000;

/** A date n days from `now`, at a given Central-time hour (stored as UTC). */
function inDays(now: Date, days: number, hourCentral: number): string {
  const d = new Date(now.getTime() + days * DAY);
  d.setUTCHours(hourCentral + 6, 0, 0, 0);
  return d.toISOString();
}

export function sampleCase(email: string, now: Date = new Date()): PortalCase {
  return {
    isSample: true,
    projectId: "SAMPLE-0001",
    matterName: "Car accident on I-35, March 2026",
    whereThingsStand:
      "Your medical treatment is wrapping up and we are preparing for your deposition. Nothing is overdue. One document is waiting for your signature.",
    person: { name: "Jordan Avery", preferredName: "Jordan", email },
    keyDates: [
      {
        id: "date-call",
        title: "Check-in call with Mike",
        when: inDays(now, 5, 10),
        kind: "call",
        where: "Mike will call you at the number we have on file.",
        note: "A 15-minute call to go over where things stand. Bring any questions.",
      },
      {
        id: "date-prep",
        title: "Deposition preparation session",
        when: inDays(now, 12, 14),
        kind: "meeting",
        where: "Yonke Law, 700 West 47th Street, Suite 550, Kansas City, MO",
        note: "We walk through what a deposition is and practice together. Plan on about two hours. Watch the preparation video first.",
        prepVideoId: "deposition-prep",
      },
      {
        id: "date-depo",
        title: "Your deposition",
        when: inDays(now, 26, 9),
        kind: "deposition",
        where: "Yonke Law, 700 West 47th Street, Suite 550, Kansas City, MO",
        note: "Mike will be with you the whole time. Arrive 30 minutes early.",
        prepVideoId: "deposition-prep",
      },
      {
        id: "date-mediation",
        title: "Mediation",
        when: inDays(now, 61, 9),
        kind: "meeting",
        where: "Location to be confirmed. We will tell you as soon as it is set.",
        note: "A meeting where both sides try to reach an agreement. We will prepare you beforehand.",
      },
    ],
    legalDocuments: [
      {
        id: "doc-hipaa",
        title: "Medical Records Authorization",
        summary: "Lets us request your treatment records from your providers.",
        sharedOn: inDays(now, -3, 9),
        signature: "not_signed",
        signBy: inDays(now, 4, 17),
      },
      {
        id: "doc-depo-notice",
        title: "Notice of Deposition",
        summary: "The formal notice setting the date, time and place of your deposition.",
        sharedOn: inDays(now, -6, 9),
        signature: "not_required",
      },
      {
        id: "doc-demand",
        title: "Demand Letter (your copy)",
        summary: "The letter we sent to the insurance company setting out your claim.",
        sharedOn: inDays(now, -40, 9),
        signature: "not_required",
      },
      {
        id: "doc-agreement",
        title: "Representation Agreement",
        summary: "The agreement between you and Yonke Law.",
        sharedOn: inDays(now, -210, 9),
        signature: "signed",
        signedOn: inDays(now, -209, 15),
      },
    ],
  };
}
