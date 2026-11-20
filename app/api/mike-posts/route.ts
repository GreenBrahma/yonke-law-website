/** Public: Mike's approved posts for the Meet Mike page. Only approved posts exist here. */
import { NextResponse } from "next/server";
import { sitePosts, store } from "@/lib/activity/website";

export const dynamic = "force-dynamic";

export async function GET() {
  const posts = (await sitePosts(store(), 6)).map((p) => ({
    date: p.created,
    title: p.doing,
    text: p.message,
    image: `/activity-image/${p.id}/${p.target}.jpg`,
  }));
  return NextResponse.json({ posts }, { headers: { "Cache-Control": "public, max-age=60" } });
}
