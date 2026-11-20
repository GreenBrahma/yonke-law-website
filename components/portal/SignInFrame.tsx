import Image from "next/image";

/** The full-bleed frame shared by the sign-in and link-confirmation screens. */
export function SignInFrame({ children, intro }: { children: React.ReactNode; intro?: React.ReactNode }) {
  return (
    <div className="relative min-h-[80vh] overflow-hidden">
      <Image src="/images/yl-family-review.jpg" alt="" fill className="object-cover object-center" priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />
      <div className="relative z-10 flex flex-col items-center px-4 pt-16 pb-20 md:pt-24">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl tracking-wide text-white mb-1">YONKE LAW</h1>
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-muted-gold" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-gold">People First</span>
            <span className="w-8 h-px bg-muted-gold" />
          </div>
          {intro}
        </div>
        <div className="w-full max-w-sm backdrop-blur-xl bg-black/50 border border-white/15 rounded-2xl p-7 shadow-2xl">
          {children}
        </div>
        <p className="text-white/50 text-xs mt-6 text-center max-w-xs">
          Private and secure. What you see here is between you and Yonke Law.
        </p>
      </div>
    </div>
  );
}
