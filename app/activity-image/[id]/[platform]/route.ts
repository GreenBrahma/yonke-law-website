/**
 * Public image for a published Add Activity post: /activity-image/<id>/<platform>
 *
 * Facebook, Instagram and Google fetch the post image from this URL when Zapier
 * publishes. The id carries a full random UUID, so it cannot be guessed; only
 * images for platforms Mike chose are ever stored.
 */
import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const dynamic = "force-dynamic";

type KV = { get(key: string): Promise<string | null> };

export async function GET(_req: Request, ctx: { params: Promise<{ id: string; platform: string }> }) {
  const { id, platform } = await ctx.params;
  if (!/^[0-9]{14}-[0-9a-f-]{36}$/.test(id) || !/^[a-z_]+$/.test(platform.replace(/\.jpg$/, ""))) {
    return new NextResponse("Not found", { status: 404 });
  }
  const { env } = getCloudflareContext();
  const data = await (env as unknown as { YL_ACTIVITY: KV }).YL_ACTIVITY.get(`img:${id}:${platform.replace(/\.jpg$/, "")}`);
  if (!data) return new NextResponse("Not found", { status: 404 });
  const m = data.match(/^data:(image\/[a-z]+);base64,(.+)$/);
  if (!m) return new NextResponse("Not found", { status: 404 });
  const bytes = Uint8Array.from(atob(m[2]), (c) => c.charCodeAt(0));
  return new NextResponse(bytes, {
    headers: { "Content-Type": m[1], "Cache-Control": "public, max-age=31536000, immutable", "X-Robots-Tag": "noindex" },
  });
}
