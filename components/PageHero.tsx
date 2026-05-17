"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  images: readonly string[];
  eyebrow?: string;
  imagePosition?: string;
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, images, eyebrow, imagePosition = "object-center", children }: PageHeroProps) {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setBgIndex((i) => (i + 1) % images.length);
    }, 6000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="relative min-h-[50vh] flex flex-col justify-center py-20 px-4 lg:px-8 overflow-hidden">
      {/* Background images */}
      {images.length > 0 && images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={`object-cover ${imagePosition} transition-opacity duration-[2000ms] ease-in-out ${
            i === bgIndex ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
          priority={i === 0}
          aria-hidden="true"
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-obsidian-graphite/75" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl w-full text-center">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.2em] text-muted-gold mb-6">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-chrome-highlight leading-[1.15] mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-steel-silver leading-relaxed max-w-2xl mx-auto mb-10">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
