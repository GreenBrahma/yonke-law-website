/**
 * Publisher for Add Activity posts.
 *
 * One place to wire the real connection (Zapier webhook, Metricool, or the
 * Meta and Google APIs directly). Until ACTIVITY_PUBLISH_WEBHOOK is set, every
 * platform is reported as "awaiting connection" and nothing is posted.
 */

export const PLATFORMS = ["facebook", "instagram", "google_business", "linkedin"] as const;
export type Platform = (typeof PLATFORMS)[number];

type Post = { id: string; created: string; by: string; doing: string; message: string; targets: Platform[] };

export async function publish(post: Post): Promise<Record<string, string>> {
  const hook = process.env.ACTIVITY_PUBLISH_WEBHOOK;
  const status: Record<string, string> = {};
  if (!hook) {
    post.targets.forEach((t) => (status[t] = "awaiting connection"));
    return status;
  }
  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: post.id,
        caption: post.message || post.doing,
        headline: post.doing,
        platforms: post.targets,
        image_url_base: `https://yonke.law/activity-image/${post.id}/`,
      }),
    });
    post.targets.forEach((t) => (status[t] = res.ok ? "sent" : "failed"));
  } catch {
    post.targets.forEach((t) => (status[t] = "failed"));
  }
  return status;
}
