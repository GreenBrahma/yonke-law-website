/** Dates the way a person reads them, always in Kansas City time. */
const TZ = "America/Chicago";

export const dayName = (iso: string) =>
  new Intl.DateTimeFormat("en-US", { timeZone: TZ, weekday: "long" }).format(new Date(iso));
export const monthShort = (iso: string) =>
  new Intl.DateTimeFormat("en-US", { timeZone: TZ, month: "short" }).format(new Date(iso));
export const dayNumber = (iso: string) =>
  new Intl.DateTimeFormat("en-US", { timeZone: TZ, day: "numeric" }).format(new Date(iso));
export const longDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", { timeZone: TZ, weekday: "long", month: "long", day: "numeric" }).format(new Date(iso));
export const shortDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", { timeZone: TZ, month: "short", day: "numeric", year: "numeric" }).format(new Date(iso));
export const clock = (iso: string) =>
  new Intl.DateTimeFormat("en-US", { timeZone: TZ, hour: "numeric", minute: "2-digit" }).format(new Date(iso));

export function daysAway(iso: string, now: Date = new Date()): string {
  const days = Math.round((new Date(iso).getTime() - now.getTime()) / 86_400_000);
  if (days <= 0) return "Today";
  if (days === 1) return "Tomorrow";
  return `In ${days} days`;
}

export function fileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
