import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* -------------------------------------------------------
   Promotion — FIFA World Cup 2026 × Best Lawyers
   Joint sponsorship page celebrating Kansas City as a
   host city and welcoming visitors from around the world.
   ------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Welcome to Kansas City — FIFA World Cup 2026",
  description:
    "Yonke Law is proud to join Best Lawyers in sponsoring FIFA World Cup 2026 events in Kansas City. Welcome to one of America's best-kept secrets — and our hometown.",
  alternates: { canonical: "https://yonke.law/promotion" },
  openGraph: {
    title: "Welcome to Kansas City — FIFA World Cup 2026 | Yonke Law",
    description:
      "Kansas City is a FIFA World Cup 2026 host city. Yonke Law welcomes the world to our hometown.",
    type: "website",
  },
};

/* -------------------------------------------------------
   Promotional images — sourced from /public/promotions/
   ------------------------------------------------------- */
const PROMO_IMAGES = [
  {
    src: "/promotions/Yonke Law - Welcome.png",
    alt: "Yonke Law welcomes the world to Kansas City — diverse community gathered in front of the KC skyline mural",
    title: "Welcome",
  },
  {
    src: "/promotions/Yonke Law - Paris of the Plains.png",
    alt: "Paris of the Plains — Kansas City history featuring fountains, 18th and Vine jazz district, Negro Leagues Baseball Museum, and the National WWI Museum",
    title: "Paris of the Plains",
  },
  {
    src: "/promotions/Yonke Law - Survival Guide.png",
    alt: "The Official Unofficial Kansas City Survival Guide — humorous safety tips for visitors including BBQ advice and streetcar awareness",
    title: "Survival Guide",
  },
  {
    src: "/promotions/Yonke Law - We_ve Got Your Back.png",
    alt: "We've Got Your Back — Yonke Law transit and navigation guide for getting around Kansas City safely on game day",
    title: "We've Got Your Back",
  },
  {
    src: "/promotions/Yonke Law - Crosswalk.png",
    alt: "The Most Important Play Happens Before the Game — pedestrian crosswalk safety tips for families attending events",
    title: "Crosswalk Safety",
  },
  {
    src: "/promotions/Yonke Law - Plenty of Sunshine.png",
    alt: "Kansas City Has Plenty of Sunshine — Yonke Law sunscreen station with sun protection tips for outdoor events",
    title: "Plenty of Sunshine",
  },
  {
    src: "/promotions/Yonke Law - Scooter Safety.png",
    alt: "Did You Know KC — scooter safety tips for downtown Kansas City including helmet use and parking etiquette",
    title: "Scooter Safety",
  },
  {
    src: "/promotions/Yonke Law - Rather Not Meet.png",
    alt: "We'd Rather Not Meet You — Yonke Law's lighthearted safety advice for visitors enjoying Kansas City",
    title: "We'd Rather Not Meet",
  },
  {
    src: "/promotions/Yonke Law - No Joke.png",
    alt: "The Mispronunciation Joke — it's YONK-ee, rhymes with honky, welcome to Kansas City",
    title: "The Mispronunciation Joke",
  },
] as const;

export default function PromotionPage() {
  return (
    <>
      {/* ───── Hero ───── */}
      <section className="relative min-h-[32vh] flex flex-col justify-center py-8 px-4 lg:px-8 overflow-hidden">
        {/* Background — Welcome image */}
        <Image
          src="/promotions/Yonke Law - Welcome.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
          sizes="100vw"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-obsidian-graphite/80" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-4xl w-full text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-gold mb-5 font-semibold">
            FIFA World Cup 2026 &bull; Kansas City Host City
          </p>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl text-chrome-highlight leading-[1.1] mb-6"
            aria-label="Yonke, pronounced YONK-ee, Law — Welcome to Kansas City"
          >
            The World Is Coming to Kansas City.
            <span className="block text-muted-gold mt-2">We Couldn&apos;t Be Prouder.</span>
          </h1>
          <p className="text-base md:text-lg text-steel-silver leading-relaxed max-w-2xl mx-auto">
            A joint sponsorship with Best Lawyers celebrating the beautiful game,
            Team USA, and the city we&apos;re lucky enough to call home.
          </p>
        </div>
      </section>

      {/* ───── Main Editorial Section ───── */}
      <section className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Sponsorship Badge */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px flex-1 bg-muted-gold/30" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-gold font-semibold whitespace-nowrap">
              Yonke Law × Best Lawyers
            </span>
            <div className="h-px flex-1 bg-muted-gold/30" />
          </div>

          <div className="space-y-6 text-steel-silver leading-[1.85] text-base md:text-lg">
            <p>
              <span className="font-display text-chrome-highlight text-xl md:text-2xl leading-snug block mb-4">
                Kansas City has always been one of America&apos;s best-kept secrets.
                This summer, the secret is out.
              </span>
            </p>

            <p>
              As a FIFA World Cup 2026 host city, Kansas City takes its place on the
              global stage — and those of us who have called this city home already know
              what the world is about to discover. The fountains that rival Rome. The
              jazz legacy born at 18th &amp; Vine. The barbecue that ends arguments. The
              kind of community where strangers hold doors, remember your name, and mean
              it when they say <em>welcome</em>.
            </p>

            <p>
              Yonke (YONK-ee) Law is honored to participate in a joint sponsorship with
              {" "}<strong className="text-chrome-highlight">Best Lawyers</strong>{" "}
              to celebrate this historic moment. We are personal injury attorneys — it is
              what we do every day — but right now, what matters most is this: the world
              is coming to our town, and we want every single visitor to leave with
              nothing but great memories.
            </p>

            <p>
              We are proud of <strong className="text-chrome-highlight">Team USA</strong>.
              We are proud of Kansas City. And we are proud to welcome fans, families,
              and travelers from every corner of the globe to a place that has always
              known how to throw a party and take care of its people.
            </p>

            <p className="text-chrome-highlight font-display text-lg md:text-xl italic">
              Enjoy the games. Explore the city. Eat the burnt ends. And if you need
              anything at all — we&apos;re right here. We always have been.
            </p>
          </div>
        </div>
      </section>

      {/* ───── Featured Image — Paris of the Plains ───── */}
      <section className="bg-obsidian-graphite py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-3">
              Discover Kansas City
            </h2>
            <p className="text-steel-silver max-w-xl mx-auto">
              From the City of Fountains to the birthplace of bebop — there&apos;s
              a reason they call it the Paris of the Plains.
            </p>
          </div>
          <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] max-w-2xl mx-auto rounded-lg overflow-hidden shadow-2xl shadow-black/40">
            <Image
              src="/promotions/Yonke Law - Paris of the Plains.png"
              alt="Paris of the Plains — Kansas City history and landmarks including over 200 fountains, 18th and Vine jazz district, Negro Leagues Baseball Museum, and National WWI Museum"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </div>
      </section>

      {/* ───── Safety & Tips Gallery ───── */}
      <section className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-gold mb-3 font-semibold">
              From Your Neighbors at Yonke Law
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-4">
              Have Fun. Stay Safe. Be Legendary for the Right Reasons.
            </h2>
            <p className="text-steel-silver max-w-2xl mx-auto">
              We put together a few things to help visitors — and locals — enjoy
              everything Kansas City has to offer this summer. Because the best
              kind of adventure is one where everybody gets home safe.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROMO_IMAGES.filter((_, i) => i !== 0 && i !== 1).map((img) => (
              <div
                key={img.src}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-muted-gold/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay with title */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-chrome-highlight font-display text-lg">
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Closing CTA ───── */}
      <section className="bg-obsidian-graphite py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl md:text-3xl text-chrome-highlight mb-4">
            Welcome to Our City.
          </h2>
          <p className="text-steel-silver mb-8 leading-relaxed">
            Whether you&apos;re here for the World Cup, passing through, or you&apos;ve
            lived here your whole life — if you ever need us, we&apos;re here.
            We handle personal injury, medical malpractice, and wrongful death cases
            in Kansas City. No fee unless we win.
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

      {/* ───── JSON-LD ───── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Welcome to Kansas City — FIFA World Cup 2026",
            description:
              "Yonke Law is proud to join Best Lawyers in sponsoring FIFA World Cup 2026 events in Kansas City.",
            url: "https://yonke.law/promotion",
            publisher: {
              "@type": "LegalService",
              name: "Yonke Law L.L.C.",
              url: "https://yonke.law",
              telephone: "+1-816-221-6400",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kansas City",
                addressRegion: "MO",
              },
            },
            about: {
              "@type": "Event",
              name: "FIFA World Cup 2026",
              location: {
                "@type": "Place",
                name: "Kansas City",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Kansas City",
                  addressRegion: "MO",
                  addressCountry: "US",
                },
              },
            },
          }),
        }}
      />
    </>
  );
}
