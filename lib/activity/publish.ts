/**
 * Publisher for Add Activity posts.
 *
 * Sends each chosen platform's framed image and caption to Metricool, which
 * publishes to the networks connected on the brand. One Metricool brand per
 * client: the brand id, the connected networks and the mode come from Worker
 * vars, so the same code serves every client page.
 *
 *   METRICOOL_TOKEN      secret, set in Cloudflare (never in the repo)
 *   METRICOOL_USER_ID    Metricool account id
 *   METRICOOL_BLOG_ID    Metricool brand id for this client
 *   METRICOOL_NETWORKS   networks connected on that brand, e.g. "gmb,tiktok"
 *   ACTIVITY_PUBLISH_MODE "draft" (default: lands in Metricool for approval)
 *                         or "publish" (goes live a few minutes later)
 *
 * Without a token every platform is reported "awaiting connection".
 */

import { getCloudflareContext } from "@opennextjs/cloudflare";

export const PLATFORMS = ["facebook", "instagram", "google_business", "tiktok", "linkedin"] as const;
export type Platform = (typeof PLATFORMS)[number];

/** Our platform key -> Metricool network name */
const NETWORK: Record<Platform, string> = {
  facebook: "facebook",
  instagram: "instagram",
  google_business: "gmb",
  tiktok: "tiktok",
  linkedin: "linkedin",
};

type Post = { id: string; created: string; by: string; doing: string; message: string; targets: Platform[] };

const API = "https://app.metricool.com/api";

function env(name: string): string {
  try {
    const e = getCloudflareContext().env as unknown as Record<string, unknown>;
    if (typeof e[name] === "string" && e[name]) return e[name] as string;
  } catch {
    /* not on Workers */
  }
  return process.env[name] || "";
}

/** Platforms whose Metricool network is connected for this client. */
export function connectedPlatforms(): Platform[] {
  if (!env("METRICOOL_TOKEN")) return [];
  const nets = env("METRICOOL_NETWORKS").split(",").map((s) => s.trim()).filter(Boolean);
  return PLATFORMS.filter((p) => nets.includes(NETWORK[p]));
}

export function publishMode(): "draft" | "publish" {
  return env("ACTIVITY_PUBLISH_MODE") === "publish" ? "publish" : "draft";
}

/** Local wall-clock time in a time zone, as YYYY-MM-DDTHH:mm:ss */
function localTime(d: Date, tz: string): string {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23",
    }).formatToParts(d).map((x) => [x.type, x.value])
  );
  return `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}:${p.second}`;
}

/** Ask Metricool to copy the image to its own storage; returns the URL to attach. */
async function normalize(url: string, q: string, token: string): Promise<string> {
  const res = await fetch(`${API}/actions/normalize/image/url?url=${encodeURIComponent(url)}&${q}`, {
    headers: { "X-Mc-Auth": token },
  });
  if (!res.ok) throw new Error(`media ${res.status}`);
  const text = (await res.text()).trim();
  try {
    const j = JSON.parse(text);
    if (typeof j === "string") return j;
    return j.url || j.mediaUrl || j.data?.url || j.data || url;
  } catch {
    return text.replace(/^"|"$/g, "") || url;
  }
}

function networkData(net: string, post: Post): Record<string, unknown> {
  switch (net) {
    case "gmb": return { gmbData: { type: "publication" } };
    case "tiktok": return { tiktokData: { privacyOption: "PUBLIC_TO_EVERYONE", title: (post.doing || post.message).slice(0, 90) } };
    case "instagram": return { instagramData: { type: "POST" } };
    case "facebook": return { facebookData: { type: "POST" } };
    case "linkedin": return { linkedinData: { type: "post" } };
    default: return {};
  }
}

export async function publish(post: Post): Promise<Record<string, string>> {
  const status: Record<string, string> = {};
  const token = env("METRICOOL_TOKEN");
  const userId = env("METRICOOL_USER_ID");
  const blogId = env("METRICOOL_BLOG_ID");
  const live = connectedPlatforms();
  const draft = publishMode() === "draft";

  if (!token || !userId || !blogId) {
    post.targets.forEach((t) => (status[t] = "awaiting connection"));
    return status;
  }

  const q = `blogId=${encodeURIComponent(blogId)}&userId=${encodeURIComponent(userId)}`;
  const when = localTime(new Date(Date.now() + 10 * 60 * 1000), "America/Chicago");
  const text = post.message ? `${post.doing ? post.doing + "\n\n" : ""}${post.message}` : post.doing;

  // One Metricool post per platform, each with its own framed image
  for (const t of post.targets) {
    if (!live.includes(t)) {
      status[t] = "awaiting connection";
      continue;
    }
    const net = NETWORK[t];
    try {
      const media = await normalize(`https://yonke.law/activity-image/${post.id}/${t}.jpg`, q, token);
      const res = await fetch(`${API}/v2/scheduler/posts?${q}`, {
        method: "POST",
        headers: { "X-Mc-Auth": token, "Content-Type": "application/json" },
        body: JSON.stringify({
          publicationDate: { dateTime: when, timezone: "America/Chicago" },
          text: text.slice(0, net === "gmb" ? 1500 : 2200),
          providers: [{ network: net }],
          media: [media],
          draft,
          autoPublish: true,
          descendants: [],
          firstCommentText: "",
          hasNotReadNotes: false,
          shortener: false,
          smartLinkData: { ids: [] },
          ...networkData(net, post),
        }),
      });
      if (!res.ok) {
        console.error("[activity] metricool rejected", t, res.status, (await res.text()).slice(0, 400));
        status[t] = "failed";
      } else {
        status[t] = draft ? "sent for approval" : "scheduled";
      }
    } catch (err) {
      console.error("[activity] metricool error", t, err);
      status[t] = "failed";
    }
  }
  return status;
}
