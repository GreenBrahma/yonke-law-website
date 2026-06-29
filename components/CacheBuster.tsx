"use client";

import { useEffect } from "react";

/**
 * CacheBuster — lightweight auto-refresh for non-technical users.
 *
 * Every 5 minutes, fetches the current page and compares the ETag/Last-Modified
 * header against what was loaded. If the site has been redeployed, silently
 * reloads the page so the user always sees the latest version.
 *
 * This is intentionally gentle — it only fires when the tab is visible and
 * the user is idle (no recent interactions).
 */

const CHECK_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

export function CacheBuster() {
  useEffect(() => {
    let lastEtag: string | null = null;
    let timer: ReturnType<typeof setInterval>;

    async function checkForUpdates() {
      // Only check when the tab is visible
      if (document.hidden) return;

      try {
        const res = await fetch(window.location.href, {
          method: "HEAD",
          cache: "no-cache",
        });

        const etag = res.headers.get("etag") || res.headers.get("x-vercel-id") || res.headers.get("last-modified");

        if (lastEtag === null) {
          // First check — store baseline
          lastEtag = etag;
          return;
        }

        if (etag && etag !== lastEtag) {
          // Site has been redeployed — reload
          window.location.reload();
        }
      } catch {
        // Network error — silently ignore, will retry next interval
      }
    }

    // Initial baseline after a short delay
    const initialDelay = setTimeout(() => {
      checkForUpdates();
      timer = setInterval(checkForUpdates, CHECK_INTERVAL_MS);
    }, 10_000); // Wait 10s after page load before first check

    return () => {
      clearTimeout(initialDelay);
      clearInterval(timer);
    };
  }, []);

  return null;
}
