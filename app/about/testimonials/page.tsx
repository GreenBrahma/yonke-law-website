import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* ===========================================================
   /about/testimonials — Client testimonials
   Content sourced from yonke.law/testimonials
   =========================================================== */

export const metadata: Metadata = {
  title: "Testimonials — What Our Clients Say | Yonke Law",
  description:
    "Real testimonials from people represented by Yonke Law in Kansas City. Personal injury, medical malpractice, and wrongful death cases.",
  alternates: {
    canonical: "https://yonke.law/about/testimonials/",
  },
};

const TESTIMONIALS = [
  {
    name: "Denise Hardy",
    quote:
      "After suffering a life-changing injury, I contacted Yonke Law. Mike was masterful in handling my matter, and the final result exceeded my expectations. If you are looking for someone who will fight for you, Mike Yonke is who you need to contact. I could not be happier with the way my matter was handled. Mike and his staff made me feel like part of the family.",
    image: "/images/YL client 1.png",
    featured: true,
  },
  {
    name: "Sharon N.",
    quote:
      "I had a vehicle accident two years ago. This accident changed my life, and Yonke Law Firm was the only one there for me every step of the way during my recovery. They explained each step and offered moral support during times when I was feeling pain and desperation from the accident. Thank you, you are an excellent lawyer, and I will recommend you and your firm to everyone.",
    image: "/images/YL client 2.png",
    featured: true,
  },
  {
    name: "Greg Sowers",
    quote:
      "Mike stuck my case out for 8 years while I was in and out of multiple surgeries. When all was said and done, he got me settled out with both the person who injured me and my employer. In the end, I was pleased with my results, and he also helped keep my claim open for life, so my employer has to cover all future medical expenses related to my injury.",
    image: "/images/yl-client-3.png",
    featured: false,
  },
  {
    name: "Patrick",
    quote:
      "Mike stayed focused and determined to do what was best for me over the 5 years it took to finish my work comp case. I really appreciated the job that he did for me.",
    image: "/images/YL client 5.png",
    featured: false,
  },
  {
    name: "Jason W.",
    quote:
      "Mike Yonke and his staff are the absolute best attorneys in the area. They are professional, helpful, and caring. It's abundantly clear that the welfare and satisfaction of their clients is their number one priority. If you want an attorney who cares and will fight for you, look no further.",
    image: "/images/YL client 6.png",
    featured: false,
  },
  {
    name: "Ashley Ricket",
    quote:
      "Mike is a great attorney who does not play any games. He is a great guy and is always straight to the point.",
    image: "/images/YL client 7.png",
    featured: false,
  },
  {
    name: "Tony Miller",
    quote:
      "Mike has helped numerous friends and family members of mine over the years with serious injury cases. He and his team do a good job and try to maximize the recovery for their clients.",
    image: "/images/YL client 8.png",
    featured: false,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-obsidian-graphite py-24 px-4 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Mike Yonke - with client.png"
            alt=""
            fill
            className="object-cover opacity-15"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-gold mb-6">
            Client Testimonials
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-chrome-highlight leading-[1.15] mb-6">
            Their words. Not ours.
          </h1>
          <p className="text-lg md:text-xl text-steel-silver leading-relaxed max-w-2xl mx-auto">
            The people we represent are the only measure that matters. Here is what
            they have to say about working with Yonke Law.
          </p>
        </div>
      </section>

      {/* Featured testimonials */}
      <section className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {TESTIMONIALS.filter((t) => t.featured).map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-obsidian-graphite border border-muted-gold/20 rounded-lg overflow-hidden group hover:border-muted-gold/50 transition-colors duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={`Client scene — ${testimonial.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-graphite via-obsidian-graphite/40 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="text-muted-gold text-4xl font-display mb-4">&ldquo;</div>
                  <blockquote className="text-chrome-highlight leading-relaxed mb-6 text-sm">
                    {testimonial.quote}
                  </blockquote>
                  <div className="text-muted-gold font-semibold">
                    — {testimonial.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All testimonials */}
      <section className="bg-obsidian-graphite py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl text-chrome-highlight mb-12 text-center">
            More from the people we represent
          </h2>
          <div className="space-y-8">
            {TESTIMONIALS.filter((t) => !t.featured).map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex gap-6 items-start bg-charcoal-slate border border-steel-silver/10 rounded-lg p-8 hover:border-steel-silver/25 transition-colors duration-300"
              >
                <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-muted-gold/30">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <blockquote className="text-chrome-highlight leading-relaxed mb-4 text-sm">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="text-muted-gold font-semibold text-sm">
                    — {testimonial.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-chrome-highlight mb-6">
            Your story matters too.
          </h2>
          <p className="text-steel-silver mb-8">
            Free consultation. No fee unless we recover.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8162216400"
              className="bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded hover:bg-muted-gold/90 transition-colors duration-200"
            >
              Call 816-221-6400
            </a>
            <Link
              href="/talk-to-us"
              className="text-steel-silver hover:text-chrome-highlight transition-colors duration-200 underline-offset-4 hover:underline"
            >
              Or reach out online →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
