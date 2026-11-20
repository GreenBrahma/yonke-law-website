import Link from "next/link";

/** Standard inner-page frame: a way back home, a title, one line of help. */
export function PortalPage({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Link
        href="/people-first-login/home"
        className="inline-flex items-center gap-2 text-sm text-muted-gold hover:underline underline-offset-4 mb-5"
      >
        <span aria-hidden="true">←</span> Back to People First home
      </Link>
      <h1 className="font-display text-2xl md:text-3xl text-white">{title}</h1>
      {lead && <p className="mt-2 text-white/85 max-w-2xl">{lead}</p>}
      <div className="mt-7">{children}</div>
    </div>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-[#2E2F33] border border-white/10 p-5 md:p-6 ${className}`}>{children}</div>
  );
}

export function Badge({ tone, children }: { tone: "gold" | "green" | "quiet"; children: React.ReactNode }) {
  const tones = {
    gold: "bg-muted-gold text-[#1C1C1E]",
    green: "bg-[#1F9D6B]/20 text-[#7FE0B8] border border-[#1F9D6B]/50",
    quiet: "bg-white/10 text-white/80",
  } as const;
  return (
    <span className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}
