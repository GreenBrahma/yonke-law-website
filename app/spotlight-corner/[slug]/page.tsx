import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db/client";
import {
  spotlightPublishes,
  spotlightDrafts,
  spotlightSignals,
} from "@/db/schema/spotlight";
import { eq, desc, ne } from "drizzle-orm";

// Force dynamic rendering — reads from DB at request time
export const dynamic = "force-dynamic";

interface ArticleCitation {
  claim: string;
  sourceUrl: string;
  sourceSpan: string;
  retrievedAt: string;
}

interface ArticleData {
  slug: string;
  publishedAt: Date;
  jsonLd: Record<string, unknown>;
  headline: string;
  articleMarkdown: string;
  citations: ArticleCitation[];
  mikeNote: string;
  topicTags: string[];
  isDemo: boolean;
  sourceId: string;
}

/* -------------------------------------------------------
   Static fallback articles — full content for detail pages
   when DATABASE_URL is not set. Sourced from verified
   public records. Once DB is connected, these are replaced.
   ------------------------------------------------------- */
const STATIC_ARTICLE_MAP: Record<string, ArticleData> = {
  "2026-05-09-mshp-cass-county-motorcycle-ejection": {
    slug: "2026-05-09-mshp-cass-county-motorcycle-ejection",
    publishedAt: new Date("2026-05-09T23:45:00Z"),
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Cass County Motorcycle Crash Illustrates Ejection Risk Without Helmets",
      datePublished: "2026-05-09T23:45:00Z",
      author: { "@type": "Person", name: "Michael T. Yonke" },
      publisher: { "@type": "LegalService", name: "Yonke Law L.L.C.", url: "https://yonke.law" },
    },
    headline: "Cass County Motorcycle Crash Illustrates Ejection Risk Without Helmets",
    articleMarkdown: `## Cass County Motorcycle Crash Illustrates Ejection Risk Without Helmets

On the evening of May 9, 2026, a motorcycle left the roadway on Route YY west of Knight Road in Cass County, Missouri, overturned, and ejected both the driver and the passenger. The passenger, a 59-year-old woman from Belton, was pronounced deceased at Research Medical Center in Kansas City. The driver, a 69-year-old Belton man, sustained serious injuries and was transported to the same facility.

### What the public record shows

The Missouri State Highway Patrol crash report documents a 2002 Yamaha XV1600 Road Star traveling westbound on Route YY at approximately 6:45 p.m. The motorcycle departed the right side of the roadway, overturned, and ejected both occupants. The crash report notes that neither the driver nor the passenger was wearing a helmet at the time of the crash.

Multiple independent news outlets confirmed the details of the MSHP report, including the location, time, vehicle involved, and the outcome for both occupants.

### The pattern: helmet use, ejection, and survivability

Missouri does not require motorcycle helmets for riders over 26 who carry proof of health insurance or financial responsibility (RSMo § 302.020). Kansas requires helmets only for riders under 18. This crash illustrates a recurring pattern in MSHP data: ejection crashes without helmets produce disproportionately fatal outcomes.

This is not a policy argument. It is an observation from the data. When a person is ejected from a motorcycle, the presence or absence of a helmet is often the variable that separates a serious injury from a fatality. The NHTSA estimates helmets are 37% effective in preventing motorcycle deaths and 67% effective in preventing brain injuries.

In personal injury and wrongful death litigation, helmet non-use sometimes becomes a comparative fault argument raised by the defense — even in crashes caused entirely by another party's negligence. Understanding how Missouri and Kansas handle this issue matters for anyone riding.`,
    citations: [
      { claim: "Motorcycle crash on Route YY, Cass County, May 9 2026", sourceUrl: "https://apps.mshp.dps.mo.gov/MSHPWeb/SACUnits/CrashReports/search.html", sourceSpan: "MSHP Crash Report", retrievedAt: "2026-05-15T15:00:00Z" },
      { claim: "59-year-old woman pronounced deceased", sourceUrl: "https://stjosephpost.com", sourceSpan: "St. Joseph Post", retrievedAt: "2026-05-15T15:05:00Z" },
      { claim: "Neither occupant was wearing a helmet", sourceUrl: "https://kansascity.com", sourceSpan: "Kansas City Star", retrievedAt: "2026-05-15T15:10:00Z" },
      { claim: "RSMo § 302.020", sourceUrl: "https://revisor.mo.gov/main/OneSection.aspx?section=302.020", sourceSpan: "Missouri Revised Statutes", retrievedAt: "2026-05-15T15:15:00Z" },
    ],
    mikeNote: "Real MSHP crash from May 9. Verified across 4 sources.",
    topicTags: ["motorcycle-accidents", "wrongful-death"],
    isDemo: false,
    sourceId: "mshp",
  },
  "2026-05-13-kcpd-usps-hit-run-benton-blvd": {
    slug: "2026-05-13-kcpd-usps-hit-run-benton-blvd",
    publishedAt: new Date("2026-05-13T22:00:00Z"),
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Hit-and-Run at 30th and Benton Kills USPS Driver — What Happens When the At-Fault Driver Flees",
      datePublished: "2026-05-13T22:00:00Z",
      author: { "@type": "Person", name: "Michael T. Yonke" },
      publisher: { "@type": "LegalService", name: "Yonke Law L.L.C.", url: "https://yonke.law" },
    },
    headline: "Hit-and-Run at 30th and Benton Kills USPS Driver — What Happens When the At-Fault Driver Flees",
    articleMarkdown: `## Hit-and-Run at 30th and Benton Kills USPS Driver

On the evening of May 13, 2026, a USPS mail carrier was killed in a hit-and-run crash at the intersection of East 30th Street and Benton Boulevard in Kansas City's Santa Fe neighborhood. The driver of the striking vehicle fled the scene on foot and, as of this writing, has not been apprehended.

### What the public record shows

According to the Kansas City Police Department and multiple news outlets, Gerald Nevels was driving a USPS Dodge van southbound on Benton Boulevard while on his evening delivery route. A gray Chevrolet Equinox traveling westbound on 30th Street entered the intersection — reportedly from a stop sign — and struck the postal van. The force of the collision overturned the van onto the driver's side, partially ejecting Nevels. He was pronounced dead at the scene.

The Equinox driver abandoned the vehicle and fled on foot. The Kansas City Police Department is investigating and has asked anyone with information to contact the TIPS Hotline at 816-474-TIPS.

### The pattern: hit-and-run and the coverage gap

Hit-and-run crashes create a particular kind of legal problem. When the at-fault driver flees and cannot be identified, the injured person (or their family) often has no one to sue for damages. This is where uninsured motorist (UM) coverage becomes critical.

Under Missouri law (RSMo § 379.203), every auto insurer must offer UM/UIM coverage. In Kansas (KSA § 40-284), it is similarly required to be offered. The person who buys the policy decides whether to carry it and how much. But many people decline the coverage without understanding what it protects against — exactly this scenario.

In a case involving a USPS vehicle, additional layers of potential coverage exist under the Federal Employees' Compensation Act (FECA) and the Federal Tort Claims Act (FTCA). The analysis is different than a standard auto claim.

The point is this: when someone flees, the person left behind should not assume there is no path forward. There usually is one. It just requires knowing where to look.`,
    citations: [
      { claim: "Gerald Nevels killed in hit-and-run at 30th and Benton", sourceUrl: "https://kansascity.com", sourceSpan: "Kansas City Star", retrievedAt: "2026-05-15T15:20:00Z" },
      { claim: "Driver fled on foot, vehicle abandoned", sourceUrl: "https://tnnchannel.today", sourceSpan: "TNN Channel", retrievedAt: "2026-05-15T15:25:00Z" },
      { claim: "Chevrolet Equinox ran stop sign", sourceUrl: "https://jcpost.com", sourceSpan: "JC Post", retrievedAt: "2026-05-15T15:30:00Z" },
    ],
    mikeNote: "Real KCPD investigation from May 13. Named victim per public record.",
    topicTags: ["car-accidents", "wrongful-death"],
    isDemo: false,
    sourceId: "kcpd",
  },
  "2026-05-15-nws-record-severe-weather-season": {
    slug: "2026-05-15-nws-record-severe-weather-season",
    publishedAt: new Date("2026-05-15T12:00:00Z"),
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Kansas City's Record-Setting Severe Weather Season — What Property Owners Need to Know",
      datePublished: "2026-05-15T12:00:00Z",
      author: { "@type": "Person", name: "Michael T. Yonke" },
      publisher: { "@type": "LegalService", name: "Yonke Law L.L.C.", url: "https://yonke.law" },
    },
    headline: "Kansas City's Record-Setting Severe Weather Season — What Property Owners Need to Know",
    articleMarkdown: `## Kansas City's Record-Setting Severe Weather Season

Through late April 2026, the National Weather Service office in Kansas City/Pleasant Hill had already issued 252 severe thunderstorm and tornado warnings — more than any prior year on record for that date. Baseball-to-softball-sized hail, damaging winds, and localized flooding have hit the metro area repeatedly since March.

### What the public record shows

The NWS data and local reporting confirm a historically active spring:

- **March 10–11:** A storm system produced hailstones ranging from 2 to 4 inches in the Northland, shattering windshields and damaging roofs.
- **April 17, April 26–28:** Additional large hail events across the metro caused widespread property damage, with hail sizes reaching 1.5 to 2.5 inches.
- **May 15 onward:** The NWS has identified a multi-day severe weather threat extending through the weekend, with risks of large hail, damaging winds, and isolated tornadoes.

KCUR reported that the surge in warnings is driven by a steady parade of storm systems and temperatures running approximately seven degrees above average through March and April, which activated severe weather conditions earlier than normal.

### The pattern: storm damage and premises liability

Here is why this matters from a legal perspective. When storms damage a property — a roof, a parking lot, a walkway, a tree — the property owner has a duty to inspect and remediate. If someone is later injured by a condition the owner knew about (or should have known about), the timeline between the storm and the injury becomes critical.

Kansas City's 311 system often shows a spike in complaints for fallen trees, damaged sidewalks, and structural hazards in the days following major storms. Those complaints create a documented record of notice. A property owner who receives a 311 complaint about storm damage and fails to act is in a very different position than one who never had notice.

Similarly, drivers who encounter storm debris on roadways, flooding on streets with inadequate drainage, or downed power lines may have claims against the entity responsible for maintaining those roads — though sovereign immunity rules add complexity in Missouri and Kansas.

The bottom line: storms create hazards. Hazards that go unaddressed create liability. The public record keeps score.`,
    citations: [
      { claim: "252 warnings issued by NWS Kansas City through April 27 2026", sourceUrl: "https://kansascity.com", sourceSpan: "Kansas City Star", retrievedAt: "2026-05-15T15:35:00Z" },
      { claim: "Temperatures seven degrees above average", sourceUrl: "https://kcur.org", sourceSpan: "KCUR", retrievedAt: "2026-05-15T15:40:00Z" },
      { claim: "Multi-day severe weather threat through May 18", sourceUrl: "https://weather.gov", sourceSpan: "NWS Kansas City", retrievedAt: "2026-05-15T15:45:00Z" },
      { claim: "Large hail events March-April 2026", sourceUrl: "https://washingtonpost.com", sourceSpan: "Washington Post", retrievedAt: "2026-05-15T15:50:00Z" },
    ],
    mikeNote: "Real NWS data and verified reporting.",
    topicTags: ["premises-liability", "car-accidents"],
    isDemo: false,
    sourceId: "nws",
  },
  "2026-05-15-311-dangerous-buildings-prior-notice": {
    slug: "2026-05-15-311-dangerous-buildings-prior-notice",
    publishedAt: new Date("2026-05-15T14:00:00Z"),
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Over 300 Active Dangerous Building Cases in Kansas City — What Prior Notice Means",
      datePublished: "2026-05-15T14:00:00Z",
      author: { "@type": "Person", name: "Michael T. Yonke" },
      publisher: { "@type": "LegalService", name: "Yonke Law L.L.C.", url: "https://yonke.law" },
    },
    headline: "Over 300 Active Dangerous Building Cases in Kansas City — What Prior Notice Means",
    articleMarkdown: `## Over 300 Active Dangerous Building Cases in Kansas City

The City of Kansas City maintains a public dataset of properties flagged as dangerous buildings — structures the city has identified as posing risks to public safety. As of May 2026, that list contains over 300 active cases, with properties in various stages from initial case opening through pre-demolition bidding and active demolition.

### What the public record shows

The KCMO Dangerous Buildings dataset (available through the city's open data portal) shows cases opened as far back as 2006 that remain classified as "Ongoing." Some properties have been in the system for years, progressing through stages like "Pre-Bid Process Ongoing," "Notice to Proceed Issued (Demolition)," and "Rehab By Owner In Progress."

The geographic concentration is significant. Council District 3 holds a disproportionate share of cases. Properties on streets like Prospect, Benton Boulevard, College Avenue, and throughout the 64127 and 64128 zip codes appear repeatedly. The dataset from the city's 311 system shows many of these same addresses generating multiple complaints from neighbors and passersby over months or years.

### The pattern: prior notice and premises liability

In personal injury law, one of the most important questions is: did the property owner know about the hazard? If the answer is yes — or if they should have known — the legal analysis shifts significantly.

When a building is on the city's dangerous buildings list, the owner has been formally notified. When 311 complaints have been filed, there is a timestamped public record of notice. When those records show a pattern of complaints spanning months or years without corrective action, the owner's defense that they "didn't know" becomes very difficult to sustain.

This is what lawyers call constructive notice and actual notice. The difference matters. If you trip on a broken sidewalk outside a property that has had three 311 complaints about that same sidewalk, the owner cannot credibly claim ignorance.

The KCMO open data portal makes this information publicly searchable. The Dangerous Buildings dataset is at data.kcmo.org, resource ID rm2v-mbk5. The 311 complaint dataset is also public.`,
    citations: [
      { claim: "Over 300 active dangerous building cases", sourceUrl: "https://data.kcmo.org/resource/rm2v-mbk5.json", sourceSpan: "KCMO Open Data Portal", retrievedAt: "2026-05-15T14:43:00Z" },
      { claim: "City program for dangerous buildings", sourceUrl: "https://kcmo.gov", sourceSpan: "KCMO.gov", retrievedAt: "2026-05-15T15:55:00Z" },
      { claim: "311 complaints create timestamped notice", sourceUrl: "https://flatlandkc.org", sourceSpan: "Flatland KC", retrievedAt: "2026-05-15T16:00:00Z" },
    ],
    mikeNote: "Real KCMO 311 data pulled live from the open data portal.",
    topicTags: ["premises-liability", "civic-accountability"],
    isDemo: false,
    sourceId: "kcmo311",
  },
};

async function getArticle(slug: string): Promise<ArticleData | null> {
  try {
    const rows = await db
      .select({
        slug: spotlightPublishes.slug,
        publishedAt: spotlightPublishes.publishedAt,
        jsonLd: spotlightPublishes.jsonLd,
        articleMarkdown: spotlightDrafts.articleMarkdown,
        articleCitations: spotlightDrafts.articleCitations,
        mikeNote: spotlightDrafts.mikeNote,
        signalId: spotlightDrafts.signalId,
        topicTags: spotlightSignals.topicTags,
        sourceId: spotlightSignals.sourceId,
      })
      .from(spotlightPublishes)
      .innerJoin(spotlightDrafts, eq(spotlightPublishes.draftId, spotlightDrafts.id))
      .innerJoin(spotlightSignals, eq(spotlightDrafts.signalId, spotlightSignals.id))
      .where(eq(spotlightPublishes.slug, slug))
      .limit(1);

    if (rows.length === 0) return STATIC_ARTICLE_MAP[slug] ?? null;

    const row = rows[0];
    const ld = (row.jsonLd ?? {}) as Record<string, unknown>;

    return {
      slug: row.slug,
      publishedAt: row.publishedAt,
      jsonLd: ld,
      headline: (ld.headline as string) ?? row.slug,
      articleMarkdown: row.articleMarkdown,
      citations: (row.articleCitations ?? []) as ArticleCitation[],
      mikeNote: row.mikeNote,
      topicTags: (row.topicTags ?? []) as string[],
      isDemo: (ld.is_demo as boolean) ?? false,
      sourceId: row.sourceId,
    };
  } catch {
    // DB not available — fall back to static content
    return STATIC_ARTICLE_MAP[slug] ?? null;
  }
}

async function getRelatedArticles(
  currentSlug: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _topicTags: string[]
): Promise<Array<{ slug: string; headline: string; publishedAt: Date }>> {
  try {
    const rows = await db
      .select({
        slug: spotlightPublishes.slug,
        publishedAt: spotlightPublishes.publishedAt,
        jsonLd: spotlightPublishes.jsonLd,
      })
      .from(spotlightPublishes)
      .where(ne(spotlightPublishes.slug, currentSlug))
      .orderBy(desc(spotlightPublishes.publishedAt))
      .limit(3);

    if (rows.length > 0) {
      return rows.map((r) => ({
        slug: r.slug,
        headline: ((r.jsonLd as Record<string, unknown>)?.headline as string) ?? r.slug,
        publishedAt: r.publishedAt,
      }));
    }

    // Fall through to static
    return Object.values(STATIC_ARTICLE_MAP)
      .filter((a) => a.slug !== currentSlug)
      .slice(0, 3)
      .map((a) => ({ slug: a.slug, headline: a.headline, publishedAt: a.publishedAt }));
  } catch {
    // DB not available — use static related articles
    return Object.values(STATIC_ARTICLE_MAP)
      .filter((a) => a.slug !== currentSlug)
      .slice(0, 3)
      .map((a) => ({ slug: a.slug, headline: a.headline, publishedAt: a.publishedAt }));
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.headline} | Spotlight Corner`,
    description: article.articleMarkdown.slice(0, 160).replace(/[#\[\]]/g, ""),
    alternates: {
      canonical: `https://yonke.law/spotlight-corner/${slug}`,
    },
    openGraph: {
      title: article.headline,
      type: "article",
      publishedTime: article.publishedAt.toISOString(),
    },
  };
}

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Render markdown to simple HTML.
 * Handles: headings, paragraphs, bold, inline citation links, lists.
 */
function renderMarkdown(md: string): string {
  const lines = md.split("\n");
  let html = "";

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    let processed = trimmed
      // Bold
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // Inline links [text](url)
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-muted-gold hover:underline">$1</a>'
      );

    if (trimmed.startsWith("### ")) {
      html += `<h3 class="font-display text-lg text-chrome-highlight mt-8 mb-3">${processed.slice(4)}</h3>`;
    } else if (trimmed.startsWith("## ")) {
      html += `<h2 class="font-display text-xl text-chrome-highlight mt-10 mb-4">${processed.slice(3)}</h2>`;
    } else if (trimmed.startsWith("- ")) {
      html += `<li class="text-steel-silver leading-relaxed ml-4">${processed.slice(2)}</li>`;
    } else {
      html += `<p class="text-steel-silver leading-relaxed mb-4">${processed}</p>`;
    }
  }

  return html;
}

export default async function SpotlightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const related = await getRelatedArticles(slug, article.topicTags);
  const bodyHtml = renderMarkdown(article.articleMarkdown);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(article.jsonLd),
        }}
      />

      {/* Demo Banner */}
      {article.isDemo && (
        <div className="bg-signal-red/90 text-chrome-highlight text-center py-3 px-4 text-sm font-semibold tracking-wide">
          ⚠ PREVIEW — DEMO CONTENT — NOT REAL REPORTING ⚠
        </div>
      )}

      {/* Article */}
      <article className="bg-obsidian-graphite py-16 md:py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Dateline + Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <time className="text-xs text-steel-silver/70">
              KC, MO — {formatDate(article.publishedAt)}
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

          {/* Headline */}
          <h1
            className="font-display text-3xl md:text-4xl lg:text-5xl text-chrome-highlight leading-[1.15] mb-8"
            aria-label={`Yonke, pronounced YONK-ee, Law Spotlight Corner: ${article.headline}`}
          >
            {article.headline}
          </h1>

          {/* Demo warning inline */}
          {article.isDemo && (
            <div className="bg-signal-red/10 border border-signal-red/30 rounded-lg p-4 mb-8">
              <p className="text-signal-red text-sm font-semibold">
                This is demo content for preview purposes only. It does not
                represent real reporting, real incidents, or real sources.
              </p>
            </div>
          )}

          {/* Body */}
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />

          {/* Sources */}
          {article.citations.length > 0 && (
            <section className="mt-16 pt-8 border-t border-steel-silver/10">
              <h2 className="font-display text-lg text-chrome-highlight mb-4">
                Sources
              </h2>
              <ol className="space-y-2">
                {article.citations.map((cite, i) => (
                  <li key={i} className="text-sm text-steel-silver/70">
                    <span className="text-muted-gold mr-2">[{i + 1}]</span>
                    <a
                      href={cite.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-chrome-highlight transition-colors break-all"
                    >
                      {cite.sourceUrl}
                    </a>
                    <span className="text-steel-silver/40 ml-2">
                      retrieved {cite.retrievedAt}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-12 pt-8 border-t border-steel-silver/10">
              <h2 className="font-display text-lg text-chrome-highlight mb-4">
                Related
              </h2>
              <div className="space-y-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/spotlight-corner/${r.slug}`}
                    className="block text-steel-silver hover:text-muted-gold transition-colors"
                  >
                    {r.headline}{" "}
                    <span className="text-xs text-steel-silver/50">
                      — {formatDate(r.publishedAt)}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      {/* Back + CTA */}
      <section className="bg-charcoal-slate py-12 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/spotlight-corner"
            className="text-steel-silver hover:text-chrome-highlight transition-colors"
          >
            ← All articles
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/talk-to-us"
              className="bg-muted-gold text-obsidian-graphite font-semibold px-6 py-3 rounded hover:bg-muted-gold/90 transition-colors text-sm"
            >
              Talk to Us
            </Link>
            <a
              href="tel:8162216400"
              className="text-steel-silver hover:text-chrome-highlight transition-colors text-sm"
            >
              816-221-6400
            </a>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <div className="bg-obsidian-graphite border-t border-steel-silver/10 py-6 px-4">
        <p className="mx-auto max-w-3xl text-xs text-steel-silver/50 leading-relaxed">
          Spotlight Corner provides factual reporting based on publicly available
          sources. It is not legal advice and does not create an attorney-client
          relationship. If you believe you have a legal matter, contact an
          attorney directly.
        </p>
      </div>
    </>
  );
}
