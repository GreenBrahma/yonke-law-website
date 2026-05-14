import type { Metadata } from "next";

/* -------------------------------------------------------
   Dynamic route for /what-we-handle/[area]
   Practice areas: personal-injury, medical-malpractice,
   wrongful-death, motor-vehicle-accidents, truck-accidents,
   premises-liability, dangerous-drugs, nursing-homes,
   construction-accidents, motorcycle-accidents
   ------------------------------------------------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area } = await params;
  const formatted = area.replace(/-/g, " ");
  return {
    title: `${formatted} — What We Handle`,
    description: `How Yonke Law handles ${formatted} cases in Kansas City.`,
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area } = await params;
  const formatted = area.replace(/-/g, " ");

  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <p className="text-sm uppercase tracking-widest text-steel-silver mb-4">
        What We Handle
      </p>
      <h1 className="font-display text-4xl font-bold text-chrome-highlight mb-6 capitalize">
        {formatted}
      </h1>
      <p className="text-lg text-steel-silver max-w-xl">
        Placeholder — individual practice area page for <strong>{area}</strong>.
      </p>
      {/* TODO: Build practice area detail page */}
    </div>
  );
}
