/** The eight check-in choices. People may pick any that fit. */
export const FEELINGS = [
  "Uncertain",
  "Confused",
  "Concerned",
  "Frustrated",
  "Angry",
  "Hopeful",
  "Calm",
  "Curious",
] as const;
export type Feeling = (typeof FEELINGS)[number];

/** Feelings the firm hears about right away. */
export const TELL_THE_FIRM: Feeling[] = ["Concerned", "Frustrated", "Angry"];
