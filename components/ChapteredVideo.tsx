"use client";

import { useState } from "react";
import { YouTubeFacade } from "@/components/YouTubeFacade";

/* -------------------------------------------------------
   ChapteredVideo — click-to-load YouTube player with a
   "Jump to a section" chapter list.

   Each chapter is a real link to the YouTube timestamp
   (works without JavaScript and is crawlable). With JS,
   clicking a chapter loads the inline player at that time
   instead of leaving the page.
   ------------------------------------------------------- */

type Chapter = { start: number; label: string };

type Props = {
  videoId: string;
  title: string;
  alt: string;
  chapters: Chapter[];
};

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function ChapteredVideo({ videoId, title, alt, chapters }: Props) {
  // seek.n forces a remount so repeated clicks on the same chapter still seek
  const [seek, setSeek] = useState<{ start: number; n: number } | null>(null);

  return (
    <div>
      <YouTubeFacade
        key={seek ? `${seek.start}-${seek.n}` : "initial"}
        videoId={videoId}
        title={title}
        alt={alt}
        orientation="wide"
        start={seek?.start}
        initiallyActive={seek !== null}
        className="border border-steel-silver/10"
      />

      <nav aria-label="Video chapters" className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-chrome-highlight mb-3">
          Jump to a section
        </p>
        <ol className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {chapters.map((c) => (
            <li key={c.start}>
              <a
                href={`https://www.youtube.com/watch?v=${videoId}${c.start > 0 ? `&t=${c.start}s` : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSeek((prev) => ({ start: c.start, n: (prev?.n ?? 0) + 1 }));
                }}
                className="group inline-flex gap-3 text-steel-silver hover:text-chrome-highlight transition-colors duration-200"
              >
                <span className="font-mono text-sm text-chrome-highlight/80 group-hover:text-muted-gold tabular-nums">
                  {formatTime(c.start)}
                </span>
                <span className="underline-offset-4 group-hover:underline">{c.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
