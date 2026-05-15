/**
 * Spotlight Corner — RSS Feed
 *
 * Generates an RSS 2.0 feed of published Spotlight Corner articles.
 * Available at /spotlight-corner/feed.xml
 */

import { db } from "@/db/client";
import { spotlightPublishes, spotlightDrafts } from "@/db/schema/spotlight";
import { eq, desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  let items = "";

  try {
    const rows = await db
      .select({
        slug: spotlightPublishes.slug,
        publishedAt: spotlightPublishes.publishedAt,
        jsonLd: spotlightPublishes.jsonLd,
        articleMarkdown: spotlightDrafts.articleMarkdown,
      })
      .from(spotlightPublishes)
      .innerJoin(spotlightDrafts, eq(spotlightPublishes.draftId, spotlightDrafts.id))
      .orderBy(desc(spotlightPublishes.publishedAt))
      .limit(50);

    for (const row of rows) {
      const ld = (row.jsonLd ?? {}) as Record<string, unknown>;
      const headline = (ld.headline as string) ?? row.slug;
      const markdown = row.articleMarkdown ?? "";
      const lines = markdown
        .split("\n")
        .filter((l) => l.trim() && !l.startsWith("#"));
      const description = lines
        .slice(0, 3)
        .join(" ")
        .replace(/\[.*?\]\(.*?\)/g, "")
        .replace(/\*\*/g, "")
        .trim();

      items += `
    <item>
      <title><![CDATA[${headline}]]></title>
      <link>https://yonke.law/spotlight-corner/${row.slug}</link>
      <guid isPermaLink="true">https://yonke.law/spotlight-corner/${row.slug}</guid>
      <pubDate>${new Date(row.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${description}]]></description>
    </item>`;
    }
  } catch {
    // DB not available — return empty feed
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Spotlight Corner — Yonke Law</title>
    <link>https://yonke.law/spotlight-corner</link>
    <description>Source-verified reporting on Kansas City incidents, safety patterns, and civic accountability.</description>
    <language>en-us</language>
    <managingEditor>mike@yonke.law (Michael T. Yonke)</managingEditor>
    <atom:link href="https://yonke.law/spotlight-corner/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=600, s-maxage=600",
    },
  });
}
