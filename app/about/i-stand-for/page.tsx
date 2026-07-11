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
      </div>
    </section>
  );
}
