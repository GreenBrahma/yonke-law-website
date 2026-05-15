import type { Metadata } from "next";
import Link from "next/link";
import { db } from "@/db/client";
import { spotlightPublishes, spotlightDrafts } from "@/db/schema/spotlight";
import { eq, desc } from "drizzle-orm";

export const metadata: Metadata = {
  title: "Spotlight Corner — Kansas City Legal News | Yonke Law",
  description:
    "Source-verified reporting on Kansas City incidents, safety patterns, and civic accountability — grounded in public records and independent confirmation.",
  alternates: { canonical: "https://yonke.law/spotlight-corner/" },
};

// Force dynamic rendering — reads from DB at request time
export const dynamic = "force-dynamic";

interface PublishedArticle {
  slug: string;
  publishedAt: Date;
  jsonLd: Record<string, unknown>;
  headline: string;
  dek: string;
  topicTags: string[];
  isDemo: boolean;
}

async function getPublishedArticles(): Promise<PublishedArticle[]> {
  try {
    const rows = await db
      .select({
        slug: spotlightPublishes.slug,
        publishedAt: spotlightPublishes.publishedAt,
        jsonLd: spotlightPublishes.jsonLd,
        articleMarkdown: spotlightDrafts.articleMarkdown,
      })
      .from(spotlightPublishes)
      .innerJoin(
        spotlightDrafts,
        eq(spotlightPublishes.draftId, spotlightDrafts.id)
      )
      .orderBy(desc(spotlightPublishes.publishedAt));

    return rows.map((row) => {
      const ld = (row.jsonLd ?? {}) as Record<string, unknown>;
      const markdown = row.articleMarkdown ?? "";
      // Extract first paragraph as dek
      const lines = markdown.split("\n").filter((l) => l.trim() && !l.startsWith("#"));
      const dek = lines[0]?.replace(/\[.*?\]\(.*?\)/g, "").trim() ?? "";
      const about = (ld.about ?? []) as Array<{ name?: string }>;

      return {
        slug: row.slug,
        publishedAt: row.publishedAt,
        jsonLd: ld,
        headline: (ld.headline as string) ?? row.slug,
        dek: dek.length > 200 ? dek.slice(0, 197) + "…" : dek,
        topicTags: about.map((a) => a.name ?? "").filter(Boolean),
        isDemo: (ld.is_demo as boolean) ?? false,
      };
    });
  } catch {
    // DB not available — return empty (build-time or no DATABASE_URL)
    return [];
  }
}

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function SpotlightCornerPage() {
  const articles = await getPublishedArticles();
  const hasDemo = articles.some((a) => a.isDemo);

  return (
    <>
      {/* Demo Banner */}
      {hasDemo && (
        <div className="bg-signal-red/90 text-chrome-highlight text-center py-3 px-4 text-sm font-semibold tracking-wide">
          ⚠ PREVIEW — DEMO CONTENT — NOT REAL REPORTING ⚠
        </div>
      )}

      {/* Hero */}
      <section className="bg-obsidian-graphite py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-gold mb-6">
            Spotlight Corner
          </p>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl text-chrome-highlight leading-[1.15] mb-6"
            aria-label="Yonke, pronounced YONK-ee, Law Spotlight Corner"
          >
            What&apos;s happening in Kansas City that matters.
          </h1>
          <p className="text-lg md:text-xl text-steel-silver leading-relaxed max-w-2xl mx-auto mb-8">
            Source-verified reporting on local incidents, safety patterns, and
            civic accountability. Every claim is grounded in public records and
            confirmed by at least two independent sources.
          </p>
          <a
            href="/spotlight-corner/feed.xml"
            className="inline-flex items-center gap-2 text-sm text-muted-gold hover:text-chrome-highlight transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 11a9 9 0 0 1 9 9" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1" />
            </svg>
            RSS Feed
          </a>
        </div>
      </section>

      {/* Article Grid */}
      <section className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {articles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-steel-silver text-lg">
                No articles published yet. Check back soon.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/spotlight-corner/${article.slug}`}
                  className="group block bg-obsidian-graphite border border-steel-silver/10 rounded-lg p-6 md:p-8 hover:border-muted-gold/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-muted-gold/5"
                >
                  {article.isDemo && (
                    <span className="inline-block text-[10px] uppercase tracking-widest text-signal-red font-bold mb-2">
                      Demo Content
                    </span>
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h2 className="font-display text-xl md:text-2xl text-chrome-highlight mb-2 group-hover:text-muted-gold transition-colors duration-300">
                        {article.headline}
                      </h2>
                      <p className="text-steel-silver text-sm md:text-base leading-relaxed mb-4">
                        {article.dek}
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <time className="text-xs text-steel-silver/70">
                          {formatDate(article.publishedAt)}
                        </time>
                        {article.topicTags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase tracking-widest text-muted-gold/80 bg-muted-gold/10 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-muted-gold text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300 shrink-0 mt-1">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian-graphite py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-4">
            Something happen to you or someone you know?
          </h2>
          <p className="text-steel-silver mb-8">
            Tell us what happened. We&apos;ll help you understand your options.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/talk-to-us"
              className="bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded hover:bg-muted-gold/90 transition-colors"
            >
              Talk to Us
            </Link>
            <a
              href="tel:8162216400"
              className="text-steel-silver hover:text-chrome-highlight transition-colors"
            >
              or call 816-221-6400
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
