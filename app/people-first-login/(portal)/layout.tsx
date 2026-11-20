import type { Metadata } from "next";
import Link from "next/link";
import { signOut } from "@/auth";
import { requirePortalUser } from "@/lib/portal/session";
import { getCaseFor } from "@/lib/portal/source";

export const metadata: Metadata = {
  title: "People First",
  robots: { index: false, follow: false },
};

// Everything in here is private to one person: never cache it.
export const dynamic = "force-dynamic";

async function signOutAction() {
  "use server";
  await signOut({ redirectTo: "/people-first-login" });
}

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const user = await requirePortalUser();
  const portalCase = await getCaseFor(user.email);

  return (
    <div className="bg-[#1C1C1E] min-h-[80vh]">
      <div className="border-b border-white/10 bg-[#161618]">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/people-first-login/home" className="flex items-baseline gap-3">
            <span className="font-display text-white tracking-wide">YONKE LAW</span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-gold">People First</span>
          </Link>
          <form action={signOutAction}>
            <button type="submit" className="text-sm text-white/80 hover:text-white underline underline-offset-4">
              Sign out
            </button>
          </form>
        </div>
      </div>

      {portalCase.isSample && (
        <div className="bg-muted-gold text-[#1C1C1E] text-sm text-center px-4 py-2 font-medium" data-testid="sample-banner">
          Sample case for demonstration. Jordan Avery is not a real person and none of this comes from a real file.
        </div>
      )}

      <div className="mx-auto max-w-5xl px-4 py-8 md:py-10">{children}</div>
    </div>
  );
}
