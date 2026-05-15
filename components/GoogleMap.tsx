"use client";

/* ===========================================================
   Google Map embed — Yonke Law office location
   700 West 47th Street, Suite 550, Kansas City, MO 64112
   
   Uses Maps Embed API with the key from NEXT_PUBLIC_GOOGLE_MAPS_KEY.
   Falls back to a static link if the key is missing.
   =========================================================== */

export function GoogleMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

  // Yonke Law office coordinates
  const address = encodeURIComponent(
    "700 West 47th Street, Suite 550, Kansas City, MO 64112"
  );

  if (!apiKey) {
    // Graceful fallback — link to Google Maps
    return (
      <div className="bg-charcoal-slate border border-steel-silver/10 rounded-lg p-12 text-center">
        <p className="text-steel-silver mb-4">
          700 West 47th Street, Suite 550, Kansas City, MO 64112
        </p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${address}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-gold hover:text-chrome-highlight transition-colors underline-offset-4 hover:underline"
        >
          Open in Google Maps →
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden border border-steel-silver/10" style={{ aspectRatio: "16/7" }}>
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${address}&zoom=15&maptype=roadmap`}
        width="100%"
        height="100%"
        style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(1.1)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Yonke Law office location — 700 West 47th Street, Suite 550, Kansas City, MO 64112"
      />
    </div>
  );
}
