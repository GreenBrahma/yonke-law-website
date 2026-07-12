import type { Metadata } from "next";
import ValuesStatement from "@/components/ValuesStatement";

/* ===========================================================
   /about/i-stand-for — Michael T. Yonke
   Renders the "Relentless. Devoted. Unyielding." values statement
   as a live-HTML editorial contour-wrap (not an image).
   Spec: public/images/YL-TEC-IP-Values-Poster-Build-Prompt.md
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
    <section className="bg-obsidian-graphite">
      {/* Accessible page title — the statement below carries the visible copy */}
      <h1 className="sr-only">I Stand For</h1>
      <ValuesStatement />
    </section>
  );
}
