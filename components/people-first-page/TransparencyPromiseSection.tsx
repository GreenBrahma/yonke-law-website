export function TransparencyPromiseSection() {
  return (
    <section className="bg-charcoal-slate py-16 md:py-24 px-4 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-chrome-highlight leading-[1.15] mb-12 text-center">
          The Transparency Promise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* You always have access to */}
          <div>
            <h3 className="text-lg font-semibold text-muted-gold mb-6">
              You always have access to:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-steel-silver leading-relaxed">
                <span className="text-deep-forest mt-1 shrink-0">✓</span>
                Every document in your case file, with its current status
              </li>
              <li className="flex items-start gap-3 text-steel-silver leading-relaxed">
                <span className="text-deep-forest mt-1 shrink-0">✓</span>
                Every calendar event Mike has scheduled on your behalf
              </li>
              <li className="flex items-start gap-3 text-steel-silver leading-relaxed">
                <span className="text-deep-forest mt-1 shrink-0">✓</span>
                Every message thread with the firm
              </li>
              <li className="flex items-start gap-3 text-steel-silver leading-relaxed">
                <span className="text-deep-forest mt-1 shrink-0">✓</span>
                Every journal entry you have made
              </li>
              <li className="flex items-start gap-3 text-steel-silver leading-relaxed">
                <span className="text-deep-forest mt-1 shrink-0">✓</span>
                Your full well-being history
              </li>
              <li className="flex items-start gap-3 text-steel-silver leading-relaxed">
                <span className="text-deep-forest mt-1 shrink-0">✓</span>
                A direct phone number, a direct email, and a one-click meeting
                request
              </li>
            </ul>
          </div>

          {/* You will never have to */}
          <div>
            <h3 className="text-lg font-semibold text-muted-gold mb-6">
              You will never have to:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-steel-silver leading-relaxed">
                <span className="text-signal-red mt-1 shrink-0">✕</span>
                Wonder if your email was received
              </li>
              <li className="flex items-start gap-3 text-steel-silver leading-relaxed">
                <span className="text-signal-red mt-1 shrink-0">✕</span>
                Call to ask &quot;what is happening with my case&quot;
              </li>
              <li className="flex items-start gap-3 text-steel-silver leading-relaxed">
                <span className="text-signal-red mt-1 shrink-0">✕</span>
                Pay for a copy of your own file
              </li>
              <li className="flex items-start gap-3 text-steel-silver leading-relaxed">
                <span className="text-signal-red mt-1 shrink-0">✕</span>
                Find out about a court date from somewhere else
              </li>
              <li className="flex items-start gap-3 text-steel-silver leading-relaxed">
                <span className="text-signal-red mt-1 shrink-0">✕</span>
                Sit in silence with how you are feeling
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
