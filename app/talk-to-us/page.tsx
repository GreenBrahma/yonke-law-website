import type { Metadata } from "next";
import Link from "next/link";
import { GoogleMap } from "@/components/GoogleMap";
import { PageHero } from "@/components/PageHero";
import { TalkToUsFileInput } from "@/components/TalkToUsFileInput";

export const metadata: Metadata = {
  title: "Talk to Us — Free Consultation | Yonke Law",
  description:
    "Contact Yonke Law for a free consultation. No fee unless we win. Personal injury, medical malpractice, and wrongful death attorneys in Kansas City, Missouri.",
  alternates: { canonical: "https://yonke.law/talk-to-us/" },
};

export default function TalkToUsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Ready when you are."
        subtitle="Free consultation. No commitment. We listen, ask questions, and give you a straight read on your situation."
        eyebrow="Talk to Us"
        imagePosition="object-[center_25%]"
        images={[
          "/images/Mike Yonke - with people.png"
        ]}
      />

      {/* Contact form + Office info */}
      <section className="bg-charcoal-slate py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl grid md:grid-cols-[1fr_380px] gap-12">
          {/* Form */}
          <div>
            <h2 className="font-display text-2xl text-chrome-highlight mb-8">
              Send us a message
            </h2>
            {/* Form submissions route to Mike's MS365 email.
                TODO: Integration point — People First digital intake (not yet built). */}
            <form
              action="https://formsubmit.co/mike@yonke.law"
              method="POST"
              encType="multipart/form-data"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New inquiry from yonke.law" />
              <input type="hidden" name="_next" value="https://yonkelawwebsite.netlify.app/talk-to-us?sent=true" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-steel-silver mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors"
                    placeholder="First and last name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-steel-silver mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors"
                    placeholder="(xxx) xxx-xxxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-steel-silver mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="case-type" className="block text-sm text-steel-silver mb-2">
                  What happened?
                </label>
                <select
                  id="case-type"
                  name="case_type"
                  className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold/50 transition-colors"
                >
                  <option value="">Select a category</option>
                  <option value="car-accident">Car Accident</option>
                  <option value="truck-accident">Truck Accident</option>
                  <option value="motorcycle-accident">Motorcycle Accident</option>
                  <option value="medical-malpractice">Medical Malpractice</option>
                  <option value="wrongful-death">Wrongful Death</option>
                  <option value="nursing-home">Nursing Home Abuse/Neglect</option>
                  <option value="workplace-injury">Workplace Injury</option>
                  <option value="premises-liability">Slip and Fall / Premises</option>
                  <option value="product-liability">Defective Product</option>
                  <option value="pedestrian-bicycle">Pedestrian / Bicycle</option>
                  <option value="other">Other / Not sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-steel-silver mb-2">
                  Tell us what happened
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight placeholder:text-steel-silver/40 focus:outline-none focus:border-muted-gold/50 transition-colors resize-y"
                  placeholder="Share as much or as little as you're comfortable with. Everything is confidential."
                />
              </div>

              <TalkToUsFileInput />

              <button
                type="submit"
                className="bg-muted-gold text-obsidian-graphite font-semibold px-8 py-4 rounded hover:bg-muted-gold/90 transition-colors w-full sm:w-auto"
              >
                Send Message
              </button>

              <p className="text-steel-silver/60 text-xs leading-relaxed">
                By submitting this form, you are not establishing an attorney-client relationship.
                All information is kept confidential and used only to evaluate your inquiry.
              </p>
            </form>
          </div>

          {/* Office info sidebar */}
          <div className="space-y-8">
            <div className="bg-obsidian-graphite border border-steel-silver/10 rounded-lg p-8">
              <h3 className="text-chrome-highlight font-semibold text-lg mb-6">
                Office
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-muted-gold text-xs uppercase tracking-widest mb-1">Address</p>
                  <p className="text-chrome-highlight text-sm leading-relaxed">
                    700 West 47th Street<br />
                    Suite 550<br />
                    Kansas City, MO 64112
                  </p>
                </div>
                <div>
                  <p className="text-muted-gold text-xs uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+18162216400" className="text-chrome-highlight text-sm hover:text-muted-gold transition-colors">
                    816-221-6400
                  </a>
                </div>
                <div>
                  <p className="text-muted-gold text-xs uppercase tracking-widest mb-1">Hours</p>
                  <p className="text-steel-silver text-sm">
                    Monday – Friday<br />
                    9:00 AM – 5:00 PM
                  </p>
                </div>
                <div>
                  <p className="text-muted-gold text-xs uppercase tracking-widest mb-1">After Hours</p>
                  <p className="text-steel-silver text-sm">
                    Leave a message or use this form.<br />
                    We respond within one business day.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-obsidian-graphite border border-steel-silver/10 rounded-lg p-8">
              <h3 className="text-chrome-highlight font-semibold mb-3">No fee unless we recover.</h3>
              <p className="text-steel-silver text-sm leading-relaxed">
                Every case is handled on contingency. You pay nothing upfront and nothing out of pocket.
                If we don&apos;t win, you don&apos;t pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-obsidian-graphite py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl text-chrome-highlight mb-8 text-center">
            Find Us
          </h2>
          <GoogleMap />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-charcoal-slate py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-steel-silver mb-4">Prefer to call?</p>
          <a
            href="tel:8162216400"
            className="font-display text-3xl text-muted-gold hover:text-chrome-highlight transition-colors"
          >
            816-221-6400
          </a>
          <p className="text-steel-silver/60 text-sm mt-4">
            Every inquiry is reviewed personally by our team — not a call center.
          </p>
        </div>
      </section>
    </>
  );
}
