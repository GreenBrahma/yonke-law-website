/** "Tell Us About You" — how a person wants the firm to reach and address them. */
import { personPrefix, portalStore } from "./store";

export type Profile = {
  preferredName: string;
  phone: string;
  contactBy: "Call" | "Text" | "Email" | "";
  bestTime: "Morning" | "Afternoon" | "Evening" | "Anytime" | "";
  notes: string;
  updatedOn?: string;
};

export const EMPTY_PROFILE: Profile = { preferredName: "", phone: "", contactBy: "", bestTime: "", notes: "" };
export const CONTACT_BY = ["Call", "Text", "Email"] as const;
export const BEST_TIME = ["Morning", "Afternoon", "Evening", "Anytime"] as const;

const key = (userId: string) => `${personPrefix(userId)}profile.json`;

export async function readProfile(userId: string): Promise<Profile> {
  const item = await (await portalStore()).get(key(userId));
  if (!item) return EMPTY_PROFILE;
  try {
    return { ...EMPTY_PROFILE, ...JSON.parse(new TextDecoder().decode(item.bytes)) };
  } catch {
    return EMPTY_PROFILE;
  }
}

export async function writeProfile(userId: string, profile: Profile): Promise<Profile> {
  const saved = { ...profile, updatedOn: new Date().toISOString() };
  await (await portalStore()).put(key(userId), JSON.stringify(saved), "application/json");
  return saved;
}
