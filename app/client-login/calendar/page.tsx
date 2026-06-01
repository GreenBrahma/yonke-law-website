"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/people-first/auth-context";
import { MessageBoard } from "@/components/people-first/MessageBoard";
import { FileUpload } from "@/components/people-first/FileUpload";
import { Pulse } from "@/components/people-first/Pulse";
import { CALENDAR_DATA } from "@/components/people-first/demo-data";

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
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [showUpload, setShowUpload] = useState(false);

  if (!isAuthenticated) {
    if (typeof window !== "undefined") router.replace("/client-login");
    return null;
  }

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const cells = getMonthGrid(year, month);
  const today = now.getDate();
  const eventDates = new Set(CALENDAR_DATA.events.map((e) => new Date(e.date).getDate()));

  return (
    <>
      <div className="min-h-screen bg-[var(--obsidian-graphite)] px-4 py-8 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Link href="/client-login/dashboard" className="text-xs text-[var(--muted-gold)] hover:text-white transition-colors mb-6 inline-block">
            ← Back to home
          </Link>

          <p className="text-xs uppercase tracking-widest text-[var(--muted-gold)] mb-2">Your Calendar &amp; Messages</p>
          <h1 className="font-[family-name:var(--font-libre-baskerville)] text-2xl text-white mb-6">{MONTHS[month]} {year}</h1>

          <div className="bg-[var(--charcoal-slate)] rounded-xl p-4 mb-4">
            <div className="grid grid-cols-7 gap-px mb-2">
              {WEEKDAYS.map((d) => (<div key={d} className="text-center text-[10px] text-white/40 font-semibold py-1">{d}</div>))}
            </div>
            <div className="grid grid-cols-7 gap-px">
              {cells.map((day, i) => {
                if (day === null) return <div key={`empty-${i}`} className="py-2" />;
                const isToday = day === today;
                const hasEvent = eventDates.has(day);
                return (
                  <div key={day} className={`relative text-center py-2 text-sm rounded-lg transition-colors ${isToday ? "bg-[var(--muted-gold)] text-[var(--obsidian-graphite)] font-bold" : hasEvent ? "bg-[var(--affirmative-green)]/20 text-[var(--affirmative-green)] font-semibold" : "text-white/50"}`}>
                    {day}
                    {hasEvent && !isToday && (<span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--affirmative-green)]" />)}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-[var(--charcoal-slate)] rounded-xl p-6 mb-4">
            <h2 className="text-sm font-semibold text-white mb-3">Upcoming</h2>
            <div className="space-y-3">
              {CALENDAR_DATA.events.map((event) => (
                <div key={event.id} className="flex items-start gap-3 bg-[var(--obsidian-graphite)] rounded-lg p-3">
                  <div className="bg-[var(--affirmative-green)]/15 rounded-lg px-2.5 py-1.5 text-center shrink-0">
                    <p className="text-[10px] text-[var(--affirmative-green)] font-semibold">{new Date(event.date).toLocaleDateString("en-US", { month: "short" })}</p>
                    <p className="text-lg text-white font-bold leading-tight">{new Date(event.date).getDate()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-white font-semibold">{event.title}</p>
                    <p className="text-xs text-white/40">{event.time}</p>
                    {event.note && <p className="text-xs text-white/50 mt-1">{event.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--charcoal-slate)] rounded-xl p-6 mb-4">
            <h2 className="text-sm font-semibold text-white mb-3">Messages with Mike</h2>
            <MessageBoard initialMessages={CALENDAR_DATA.thread} placeholder="Reply to Mike…" />
          </div>

          <div className="bg-[var(--charcoal-slate)] rounded-xl p-6">
            {!showUpload ? (
              <button onClick={() => setShowUpload(true)} className="text-sm text-[var(--muted-gold)] hover:text-white transition-colors">📎 Attach a file</button>
            ) : (
              <>
                <h2 className="text-sm font-semibold text-white mb-3">Attach a file</h2>
                <FileUpload />
              </>
            )}
          </div>
        </div>
      </div>
      <Pulse />
    </>
  );
}
