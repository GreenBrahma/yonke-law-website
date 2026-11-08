"use client";

/* -------------------------------------------------------
   Site analytics: Google Analytics 4 + Meta Pixel.

   Both are off unless their IDs are set in Netlify env vars:
     NEXT_PUBLIC_GA4_ID          e.g. G-XXXXXXXXXX
     NEXT_PUBLIC_META_PIXEL_ID   e.g. 1234567890

   Privacy rules (see specs/just-happened-_intake.md):
   - Nothing runs on login screens or the Just Happened intake.
   - The Meta Pixel never runs on any page with an intake form
     (/talk-to-us, homepage form screens are covered by GA4 only).
   - No form field values are ever sent. A lead event carries only
     the form's source label.
   ------------------------------------------------------- */

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/** No tracking of any kind on these paths. */
const NO_TRACKING = ["/just-happened", "/client-login", "/people-first-login"];
/** No advertising pixel on these paths (GA4 still allowed). */
const NO_PIXEL = [...NO_TRACKING, "/talk-to-us"];

const matches = (path: string, list: string[]) =>
  list.some((p) => path === p || path.startsWith(p + "/"));

type W = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  [k: string]: unknown;
};

export function Analytics() {
  const pathname = usePathname() || "/";
  const blocked = matches(pathname, NO_TRACKING);

  useEffect(() => {
    const w = window as unknown as W;
    // Official GA4 opt-out flag: blocks every hit while on a blocked page.
    if (GA4_ID) w[`ga-disable-${GA4_ID}`] = blocked;
    if (!blocked && GA4_ID && w.gtag) {
      w.gtag("event", "page_view", { page_path: pathname });
    }
    if (PIXEL_ID && w.fbq && !matches(pathname, NO_PIXEL) && pathname !== "/") {
      w.fbq("track", "PageView");
    }
  }, [pathname, blocked]);

  return (
    <>
      {GA4_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;gtag('js',new Date());
gtag('config','${GA4_ID}',{send_page_view:false,anonymize_ip:true});`}
          </Script>
        </>
      )}
      {PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${PIXEL_ID}');`}
        </Script>
      )}
    </>
  );
}

/** Call after a form is successfully submitted. Sends no personal data. */
export function trackLead(source: string) {
  const w = window as unknown as W;
  if (GA4_ID && w.gtag) w.gtag("event", "generate_lead", { form_source: source });
}
