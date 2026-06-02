"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/people-first/auth-context";
import { MessageBoard } from "@/components/people-first/MessageBoard";
import { Pulse } from "@/components/people-first/Pulse";
import Image from "next/image";

/* ──────────────────────────────────────────────────────────────
   Help Page — Ask Mike + curated library.
   Real messages via /api/people-first/messages.
   Videos: YouTube embeds. Checklists: PDF downloads.
   ────────────────────────────────────────────────────────────── */

const HELP_VIDEOS = [
  {
    title: "People Portal",
    description: "See how People First keeps you connected.",
    src: "https://www.youtube.com/embed/sLcrjRp8qPc?rel=0",
  },
  {
    title: "Deposition Prep",
    description: "What to expect and how to prepare.",
    src: "https://www.youtube.com/embed/om6L1RHfKic?rel=0",
  },
];

const HELP_CHECKLISTS = [
  { title: "Personal Injury Checklist", description: "Essential steps after an injury.", href: "/resources/yl-personal-injury-checklist.pdf" },
  { title: "Car Accident Checklist", description: "What to do at the scene and after.", href: "/resources/yl-car-accident-checklist.pdf" },
  { title: "Truck Accident Checklist", description: "Commercial vehicle accidents are different.", href: "/resources/yl-truck-accident-checklist.pdf" },
  { title: "Medical Malpractice Checklist", description: "Documenting a medical error.", href: "/resources/yl-medical-malpractice-checklist.pdf" },
  { title: "Wrongful Death Checklist", description: "First steps for surviving families.", href: "/resources/yl-wrongful-death-checklist.pdf" },
  { title: "Workers Compensation Checklist", description: "Injured on the job — know your rights.", href: "/resources/yl-workers-comp-checklist.pdf" },
  { title: "Slip and Fall Checklist", description: "Premises liability essentials.", href: "/resources/yl-slip-and-fall-checklist.pdf" },
  { title: "Catastrophic Injury Checklist", description: "Life-altering injuries require a different approach.", href: "/resources/yl-catastrophic-injury-checklist.pdf" },
];

export default function HelpPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/people-first-login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--obsidian-graphite)] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[var(--muted-gold)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/Mike Yonke - with people.png"
          alt=""
          fill
          className="object-cover object-top opacity-8"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--obsidian-graphite)] via-[var(--obsidian-graphite)]/95 to-[var(--obsidian-graphite)]" />

        <div className="relative z-10 px-4 py-8 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/people-first-login/dashboard" className="text-xs text-[var(--muted-gold)] hover:text-white transition-colors mb-6 inline-block">
              ← Back to home
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted-gold)]">Help &amp; Resources</span>
              <span className="flex-1 h-px bg-[var(--muted-gold)]/30" />
            </div>

            <h1 className="font-[family-name:var(--font-libre-baskerville)] text-2xl text-white mb-2">What&apos;s up?</h1>
            <p className="text-sm text-white/40 italic text-[var(--muted-gold)] mb-8">Mike is the only one who sees your messages.</p>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left: Ask Mike — real API */}
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h2 className="text-sm font-semibold text-white mb-3">Ask Mike</h2>
                <MessageBoard
                  apiEndpoint="/api/people-first/messages"
                  placeholder="Ask Mike a question…"
                />
              </div>

              {/* Right: Videos + Checklists */}
              <div className="space-y-4">
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h2 className="text-sm font-semibold text-white mb-4">Videos</h2>
                  <div className="space-y-4">
                    {HELP_VIDEOS.map((video) => (
                      <div key={video.title}>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-2">
                          <iframe
                            src={video.src}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                        <p className="text-sm text-white font-semibold">{video.title}</p>
                        <p className="text-xs text-white/40 italic text-[var(--muted-gold)]">{video.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h2 className="text-sm font-semibold text-white mb-4">Checklists</h2>
                  <div className="space-y-2">
                    {HELP_CHECKLISTS.map((cl) => (
                      <a key={cl.title} href={cl.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black/20 rounded-lg p-3 hover:border-[var(--muted-gold)]/30 border border-white/5 transition-colors group">
                        <span className="text-lg">📋</span>
                        <div className="min-w-0">
                          <p className="text-sm text-white group-hover:text-[var(--muted-gold)] transition-colors truncate">{cl.title}</p>
                          <p className="text-[10px] text-white/30 truncate">{cl.description}</p>
                        </div>
                        <span className="text-xs text-white/20 ml-auto shrink-0">PDF ↓</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pulse />
    </>
  );
}
