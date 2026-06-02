"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/people-first/auth-context";
import { MessageBoard } from "@/components/people-first/MessageBoard";
import { FileUpload } from "@/components/people-first/FileUpload";
import { Pulse } from "@/components/people-first/Pulse";
import Image from "next/image";

/* ──────────────────────────────────────────────────────────────
   Panel 3 — Calendar & Messages
   Real messages via /api/people-first/messages.
   Real file uploads via /api/people-first/files.
   Calendar events read from the case record (admin-set).
   ────────────────────────────────────────────────────────────── */

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function getMonthGrid(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

export default function CalendarPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [showUpload, setShowUpload] = useState(false);

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

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const cells = getMonthGrid(year, month);
  const today = now.getDate();

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/yl-client-19.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-8"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--obsidian-graphite)] via-[var(--obsidian-graphite)]/95 to-[var(--obsidian-graphite)]" />

        <div className="relative z-10 px-4 py-8 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Link href="/people-first-login/dashboard" className="text-xs text-[var(--muted-gold)] hover:text-white transition-colors mb-6 inline-block">
              ← Back to home
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted-gold)]">Calendar &amp; Messages</span>
              <span className="flex-1 h-px bg-[var(--muted-gold)]/30" />
            </div>

            <h1 className="font-[family-name:var(--font-libre-baskerville)] text-2xl text-white mb-6">{MONTHS[month]} {year}</h1>

            {/* Calendar grid */}
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-4">
              <div className="grid grid-cols-7 gap-px mb-2">
                {WEEKDAYS.map((d) => (<div key={d} className="text-center text-[10px] text-white/40 font-semibold py-1">{d}</div>))}
              </div>
              <div className="grid grid-cols-7 gap-px">
                {cells.map((day, i) => {
                  if (day === null) return <div key={`empty-${i}`} className="py-2" />;
                  const isToday = day === today;
                  return (
                    <div key={day} className={`text-center py-2 text-sm rounded-lg transition-colors ${isToday ? "bg-[var(--muted-gold)] text-[var(--obsidian-graphite)] font-bold" : "text-white/50"}`}>
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Messages with Mike — real API */}
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-4">
              <h2 className="text-sm font-semibold text-white mb-3">Messages with Mike</h2>
              <MessageBoard
                apiEndpoint="/api/people-first/messages"
                placeholder="Message Mike…"
              />
            </div>

            {/* File attachment — real upload */}
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              {!showUpload ? (
                <button onClick={() => setShowUpload(true)} className="text-sm text-[var(--muted-gold)] hover:text-white transition-colors">
                  📎 Attach a file
                </button>
              ) : (
                <>
                  <h2 className="text-sm font-semibold text-white mb-3">Attach a file</h2>
                  <FileUpload apiEndpoint="/api/people-first/files" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Pulse />
    </>
  );
}
