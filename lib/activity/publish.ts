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
      // One flat payload so each Zapier path can filter on its own yes/no field
      body: JSON.stringify({
        id: post.id,
        submitted_by: post.by,
        headline: post.doing,
        caption: post.message || post.doing,
        platforms: post.targets.join(","),
        ...Object.fromEntries(
          (["facebook", "instagram", "google_business", "linkedin"] as const).flatMap((p) => [
            [`post_to_${p}`, post.targets.includes(p) ? "yes" : "no"],
            [`${p}_image_url`, post.targets.includes(p) ? `https://yonke.law/activity-image/${post.id}/${p}.jpg` : ""],
          ])
        ),
      }),
    });
    post.targets.forEach((t) => (status[t] = res.ok ? "sent" : "failed"));
  } catch {
    post.targets.forEach((t) => (status[t] = "failed"));
  }
  return status;
}
