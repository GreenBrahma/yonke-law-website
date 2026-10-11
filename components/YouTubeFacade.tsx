"use client";

import { useState } from "react";

/* -------------------------------------------------------
   YouTubeFacade — click-to-load YouTube player

   Why: a full YouTube iframe pulls ~1MB of script on page
   load and hurts Lighthouse scores. This renders a lazy
   thumbnail + play button and only creates the
   youtube-nocookie.com iframe after the visitor clicks.

   Always embed by single video ID (never a playlist URL)
   so the embed can't break when playlists change.

   Usage:
     <YouTubeFacade
       videoId="q-_tGOFkYjs"
       title="How to prepare for your deposition"
       alt="Mike explains how to prepare for your deposition."
       orientation="vertical"   // Shorts are 9:16
     />
   ------------------------------------------------------- */

type Props = {
  videoId: string;
  /** Accessible title for the iframe and the play button */
  title: string;
  /** Alt text for the thumbnail image */
  alt: string;
  /** "vertical" for Shorts (9:16), "wide" for standard video (16:9) */
  orientation?: "vertical" | "wide";
  /** Optional start time in seconds */
  start?: number;
  /** Mount with the iframe already loaded (used after a chapter click) */
  initiallyActive?: boolean;
  className?: string;
};

export function YouTubeFacade({
  videoId,
  title,
  alt,
  orientation = "wide",
  start,
  initiallyActive = false,
  className = "",
}: Props) {
  const [active, setActive] = useState(initiallyActive);

  const aspect = orientation === "vertical" ? "aspect-[9/16]" : "aspect-video";

  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    playsinline: "1",
    modestbranding: "1",
  });
  if (start && start > 0) params.set("start", String(Math.floor(start)));

  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
  const thumbSrc = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden rounded bg-obsidian-graphite ${className}`}
    >
      {active ? (
        <iframe
          src={embedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-muted-gold"
        >
          {/* External thumbnail; next/image would require remotePatterns config.
              Lazy-loaded so it never blocks first paint. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-obsidian-graphite/20 transition-colors duration-200 group-hover:bg-obsidian-graphite/5"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-muted-gold shadow-lg transition-transform duration-200 group-hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-obsidian-graphite">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
