"use client";

/* "From Mike" — Mike's latest approved posts on the Meet Mike page.
   Shows nothing until at least one post has been approved for the website. */

import { useEffect, useState } from "react";

type Post = { date: string; title: string; text: string; image: string };

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "America/Chicago" });

export default function FromMike() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("/api/mike-posts")
      .then((r) => r.json())
      .then((j) => setPosts(Array.isArray(j.posts) ? j.posts : []))
      .catch(() => setPosts([]));
  }, []);
  if (!posts.length) return null;
  return (
    <section className="bg-charcoal-slate py-20 px-4 lg:px-8" aria-labelledby="from-mike">
      <div className="mx-auto max-w-6xl">
        <h2 id="from-mike" className="font-display text-2xl md:text-3xl text-chrome-highlight mb-2 text-center">
          From Mike
        </h2>
        <p className="text-steel-silver text-center mb-10">What Mike is working on, thinking about and sharing.</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.image} className="bg-obsidian-graphite rounded overflow-hidden flex flex-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.title || "Post from Mike Yonke"} loading="lazy" className="w-full aspect-[4/5] object-cover" />
              <div className="p-5 flex flex-col gap-2">
                <time dateTime={p.date} className="text-sm text-muted-gold">{fmt(p.date)}</time>
                {p.title && <h3 className="text-chrome-highlight font-semibold">{p.title}</h3>}
                {p.text && <p className="text-steel-silver text-sm leading-relaxed whitespace-pre-line">{p.text}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
