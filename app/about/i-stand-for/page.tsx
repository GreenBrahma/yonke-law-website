import type { Metadata } from "next";
import Image from "next/image";

/* ===========================================================
   /about/i-stand-for — Michael T. Yonke
   Content: single image (natural ratio, no crop) + placeholder H1.
   Body copy intentionally omitted — authored by the client.
   =========================================================== */

export const metadata: Metadata = {
  title: "I Stand For",
  description:
    "I Stand For — Michael T. Yonke, founding partner of Yonke Law in Kansas City.",
  alternates: {
    canonical: "https://yonke.law/about/i-stand-for",
  },
};

export default function IStandForPage() {
  return (
    <section className="bg-obsidian-graphite py-20 md:py-28 px-4 lg:px-8">
      <div className="mx-auto max-w-2xl">
        {/* Accessible page title — the artwork carries the visible copy */}
        <h1 className="sr-only">I Stand For</h1>

        <div className="rounded-lg overflow-hidden border border-steel-silver/10 shadow-2xl shadow-black/40">
          <Image
            src="/images/Yonke-Law-Relentless-Devoted-Unyielding.png"
            alt="Mike Yonke standing in a sunlit forest beside his statement — Relentless. Devoted. Unyielding. A personal message on how he and Yonke Law stand beside every client with strength, focus, and purpose from beginning to end. Signed, Mike Yonke."
            width={1122}
            height={1402}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Verbatim transcription of the artwork's essay — visually hidden,
            present for screen readers and machine-readable body text.
            Do not edit: this must match the words baked into the image. */}
        <div className="sr-only">
          <h2>Relentless. Devoted. Unyielding.</h2>
          <p>
            I chose these three words because they mean everything to me, and I
            take them seriously. They are more than words on a website or a
            slogan beneath a logo—they are my commitment to you, and they
            represent how everyone at Yonke Law treats every case we handle.
            When someone comes to us after an injury, they are often dealing
            with pain, stress, uncertainty, and questions about what happens
            next. My job is not only to guide them through that process, but to
            stand beside them with strength, focus, and purpose from beginning
            to end.
          </p>
          <p>
            Relentless means I do not stop at the easiest answer or the fastest
            resolution. I prepare thoroughly, investigate deeply, and push for
            the full value of every case rather than accepting less simply to
            move on. Devoted means I never lose sight of the person behind the
            case. You are not a file, a claim number, or a case sitting on a
            desk—you are someone whose life has been disrupted, and you deserve
            to be heard, respected, and fully represented. Unyielding means that
            when I take your case, I stand firm. Whether in negotiation or in
            the courtroom, I do not back down from doing what is necessary to
            protect your rights and pursue the outcome you deserve.
          </p>
          <p>
            At Yonke Law, these words are not marketing language. They are a
            standard. They shape how we prepare, how we communicate, how we
            advocate, and how we show up for the people who place their trust in
            us. If you choose Yonke Law, you can expect a team that takes your
            case personally, treats it with the seriousness it deserves, and
            fights for you with conviction every step of the way.
          </p>
          <p>— Mike Yonke</p>
        </div>
      </div>
    </section>
  );
}
