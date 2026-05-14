import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Offer Review — Is the Offer Fair?",
  description:
    "Not sure if the insurance company's offer is fair? Yonke Law provides a free, no-obligation evaluation of your settlement offer.",
};

export default function OfferReviewPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <p className="text-sm uppercase tracking-widest text-steel-silver mb-4">
        Offer Review
      </p>
      <h1 className="font-display text-4xl font-bold text-chrome-highlight mb-6">
        Have someone look at it before you sign.
      </h1>
      <p className="text-lg text-steel-silver max-w-xl">
        Placeholder — high-intent insurance offer evaluation page.
      </p>
      {/* TODO: Build offer review intake form */}
    </div>
  );
}
