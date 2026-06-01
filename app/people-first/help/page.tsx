"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/people-first/auth-context";
import { MessageBoard } from "@/components/people-first/MessageBoard";
import { Pulse } from "@/components/people-first/Pulse";
import {
  HELP_VIDEOS,
  HELP_CHECKLISTS,
  DEMO_PERSON,
  STEPS,
} from "@/components/people-first/demo-data";

/* ──────────────────────────────────────────────────────────────
   Help Page — Confused branch (§7, FR-PULSE-05).
   Chat wall with Mike + curated video/checklist library.
   Surface assets relevant to person's current step first.
   ────────────────────────────────────────────────────────────── */

export default function HelpPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    if (typeof window !== "undefined") router.replace("/people-first/sign-in");
    return null;
  }

  const currentStep = STEPS.find((s) => s.key === DEMO_PERSON.currentStepKey);

  return (
    <>
      <div className="min-h-screen bg-[var(--obsidian-graphite)] px-4 py-8 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/people-first"
            className="text-xs text-[var(--muted-gold)] hover:text-white transition-colors mb-6 inline-block"
          >
            ← Back to home
          </Link>

          <p className="text-xs uppercase tracking-widest text-[var(--muted-gold)] mb-2">
            Help &amp; Resources
          </p>
          <h1 className="font-[family-name:var(--font-libre-baskerville)] text-2xl text-white mb-2">
            What&apos;s up?
          </h1>
          {currentStep && (
            <p className="text-sm text-white/40 mb-8">
              You&apos;re currently in: {currentStep.plainTitle}
            </p>
          )}

          {/* Two-column layout: chat left, library right */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Chat wall with Mike */}
            <div className="bg-[var(--charcoal-slate)] rounded-xl p-6">
              <h2 className="text-sm font-semibold text-white mb-3">
                Ask Mike
              </h2>
              <p className="text-xs text-white/40 mb-4">
                Type your question — Mike is the only one who sees it.
              </p>
              <MessageBoard
                initialMessages={[
                  {
                    id: "help-welcome",
                    from: "firm",
                    body: "Hey Sarah — what's on your mind? Ask me anything about where things stand.",
                    timestamp: new Date().toISOString(),
                  },
                ]}
                placeholder="Ask Mike a question…"
              />
            </div>

            {/* Library: videos + checklists */}
            <div className="space-y-4">
              {/* Videos */}
              <div className="bg-[var(--charcoal-slate)] rounded-xl p-6">
                <h2 className="text-sm font-semibold text-white mb-4">
                  Videos
                </h2>
                <div className="space-y-3">
                  {HELP_VIDEOS.map((video) => {
                    const isYouTube = video.src.includes("youtube.com/embed");
                    return (
                      <div key={video.title}>
                        {isYouTube ? (
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-2">
                            <iframe
                              src={video.src}
                              title={video.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute inset-0 w-full h-full"
                            />
                          </div>
                        ) : (
                          <video
                            src={video.src}
                            controls
                            className="w-full rounded-lg aspect-video object-cover mb-2"
                          >
                            <track kind="captions" />
                          </video>
                        )}
                        <p className="text-sm text-white font-semibold">
                          {video.title}
                        </p>
                        <p className="text-xs text-white/40">
                          {video.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Checklists */}
              <div className="bg-[var(--charcoal-slate)] rounded-xl p-6">
                <h2 className="text-sm font-semibold text-white mb-4">
                  Checklists
                </h2>
                <div className="space-y-2">
                  {HELP_CHECKLISTS.map((cl) => (
                    <a
                      key={cl.title}
                      href={cl.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-[var(--obsidian-graphite)] rounded-lg p-3 hover:border-[var(--muted-gold)]/30 border border-white/5 transition-colors group"
                    >
                      <span className="text-lg">📋</span>
                      <div className="min-w-0">
                        <p className="text-sm text-white group-hover:text-[var(--muted-gold)] transition-colors truncate">
                          {cl.title}
                        </p>
                        <p className="text-[10px] text-white/30 truncate">
                          {cl.description}
                        </p>
                      </div>
                      <span className="text-xs text-white/20 ml-auto shrink-0">
                        PDF ↓
                      </span>
                    </a>
                  ))}
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
