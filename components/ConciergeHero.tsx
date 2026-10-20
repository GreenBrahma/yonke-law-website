"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { SmsConsent } from "@/components/SmsConsent";
import { sendToLeadDocket } from "@/lib/lead-docket";

/* -------------------------------------------------------
   ConciergeHero — Section 2 of homepage-spec.md

   Behavior:
   1. Full-viewport dark hero with the concierge text input
   2. Background images cycle every 6s (crossfade)
   3. Placeholder rotates every ~4.5s to help cold-start users
   4. On submit:
       - Client-side keyword classification → topic ID
       - Reveal the four-panel response below the input
       - Preserve the user's typed text above the panels
   5. Empty submit → show the four quick-pick doors prominently
   6. Quick-pick doors are always visible as a fallback

   The classifier is a temporary client-side keyword match.
   When the Nucleus Concierge backend ships, swap classifyTopic()
   for an API call. Visual / UX layer does not change.
   ------------------------------------------------------- */

const HERO_IMAGES = [
  "/images/YL client 1.png",
  "/images/YL client 2.png",
  "/images/yl-client-3.png",
  "/images/yl-client-4.png",
  "/images/YL client 5.png",
  "/images/YL client 6.png",
  "/images/YL client 7.png",
  "/images/YL client 8.png",
  "/images/YL-client-10.png",
  "/images/YL client 11.png",
  "/images/YL client 12.png",
  "/images/YL client 13.png",
  "/images/YL client 14.png",
  "/images/yl-client-19.jpg",
  "/images/yl-client21.png",
  "/images/yl-client-22.png",
  "/images/yl-client-23.png",
  "/images/yl-client-24.jpg",
  "/images/yl-client-25.jpg",
  "/images/yl-client-26.jpg",
  "/images/Mike Yonke - with people.png",
] as const;

type TopicId =
  | "car-accident"
  | "truck-accident"
  | "medical-error"
  | "wrongful-death"
  | "nursing-home"
  | "slip-and-fall"
  | "motorcycle"
  | "have-offer"
  | "researching"
  | "general";

const PLACEHOLDER_EXAMPLES = [
  "I was rear-ended on Ward Parkway yesterday…",
  "My dad fell in a nursing home and broke his hip…",
  "I got a settlement offer from State Farm and I'm not sure it's fair…",
  "I'm just researching — not sure if I need a lawyer…",
  "What happened to me at the hospital was preventable…",
] as const;

const TOPIC_KEYWORDS: Record<Exclude<TopicId, "general">, string[]> = {
  "car-accident": [
    "car",
    "rear-ended",
    "rear ended",
    "t-boned",
    "tboned",
    "fender bender",
    "totaled",
    "crash",
    "collision",
    "wreck",
  ],
  "truck-accident": [
    "truck",
    "semi",
    "18-wheeler",
    "big rig",
    "commercial truck",
    "tractor trailer",
    "fedex",
    "ups",
  ],
  "medical-error": [
    "hospital",
    "doctor",
    "surgery",
    "misdiagnosis",
    "malpractice",
    "wrong medication",
    "medical",
    "surgeon",
    "er ",
    "emergency room",
  ],
  "wrongful-death": [
    "died",
    "killed",
    "passed away",
    "lost my husband",
    "lost my wife",
    "lost my child",
    "lost my mother",
    "lost my father",
    "wrongful death",
  ],
  "nursing-home": [
    "nursing home",
    "assisted living",
    "elder",
    "facility",
    "mom in",
    "dad in",
    "memory care",
  ],
  "slip-and-fall": [
    "fell",
    "slip",
    "slipped",
    "store",
    "warehouse",
    "premises",
    "hazard",
  ],
  motorcycle: ["motorcycle", "bike", "helmet"],
  "have-offer": [
    "settlement",
    "offer",
    "check",
    "signed",
    "state farm offered",
    "geico offered",
    "allstate offered",
  ],
  researching: [
    "researching",
    "looking for",
    "considering",
    "not sure if i need",
    "just want to know",
  ],
};

const TOPIC_TO_JUST_HAPPENED: Record<TopicId, string> = {
  "car-accident": "/just-happened/car-accident",
  "truck-accident": "/just-happened/truck-accident",
  "medical-error": "/just-happened/medical-malpractice",
  "wrongful-death": "/just-happened/wrongful-death",
  "nursing-home": "/just-happened/nursing-home-abuse",
  "slip-and-fall": "/just-happened/slip-and-fall",
  motorcycle: "/just-happened/motorcycle-accident",
  "have-offer": "/resources/offer-review",
  researching: "/people-first",
  general: "/just-happened",
};

const TOPIC_LABELS: Record<TopicId, string> = {
  "car-accident": "car accident",
  "truck-accident": "truck or commercial vehicle crash",
  "medical-error": "medical situation",
  "wrongful-death": "loss of someone you love",
  "nursing-home": "nursing home or facility situation",
  "slip-and-fall": "premises injury",
  motorcycle: "motorcycle crash",
  "have-offer": "settlement offer situation",
  researching: "research",
  general: "situation",
};

/* Topic → YouTube video IDs (only topics with videos) */
const TOPIC_VIDEO_IDS: Partial<Record<TopicId, string>> = {
  "car-accident": "F5c6P4bQamw",
  "truck-accident": "v1XTlj4plGg",
  "medical-error": "w8Z1u0Hn9x4",
  motorcycle: "7dsFP4EIiQo",
};

/* Topic → slug for /what-we-handle/{slug} checklist links */
const TOPIC_SLUGS: Partial<Record<TopicId, string>> = {
  "car-accident": "car-accidents",
  "truck-accident": "truck-accidents",
  "medical-error": "medical-malpractice",
  "wrongful-death": "wrongful-death",
  "nursing-home": "nursing-home-abuse",
  "slip-and-fall": "premises-liability",
  motorcycle: "motorcycle-accidents",
};

function classifyTopic(text: string): TopicId {
  const lower = text.toLowerCase();
  for (const [topic, keywords] of Object.entries(TOPIC_KEYWORDS)) {
    if (keywords.some((kw) => lower.includes(kw))) {
      return topic as TopicId;
    }
  }
  return "general";
}



export function ConciergeHero() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Contact form state
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [contactSending, setContactSending] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", phone: "", email: "", description: "" });
  const [smsConsent, setSmsConsent] = useState(false);

  // Detected topic from the conversation
  const [detectedTopic, setDetectedTopic] = useState<TopicId | null>(null);

  // Whether resource cards have been shown (show only once, after first assistant reply)
  const [resourceCardsShown, setResourceCardsShown] = useState(false);

  // Rotate placeholder examples
  useEffect(() => {
    if (isChatOpen) return;
    const id = setInterval(() => {
      setPlaceholderIndex((i) => (i + 1) % PLACEHOLDER_EXAMPLES.length);
    }, 4500);
    return () => clearInterval(id);
  }, [isChatOpen]);

  // Scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, showContactForm]);

  // Cycle background images
  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = typedText.trim();
    if (!trimmed || isTyping) return;

    const userMsg = { role: "user" as const, text: trimmed };
    const updatedMessages = [...messages, userMsg];

    // Classify topic on first message
    if (!detectedTopic) {
      const topic = classifyTopic(trimmed);
      setDetectedTopic(topic);
    }
    
    setMessages(updatedMessages);
    setIsChatOpen(true);
    setTypedText("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessages((prev) => [...prev, { role: "assistant", text: data.text }]);
        // Show resource cards after first assistant response
        if (!resourceCardsShown) setResourceCardsShown(true);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", text: "I'm having trouble connecting right now. Please call us at 816-221-6400." }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", text: "Something went wrong. Please call us at 816-221-6400." }]);
    } finally {
      setIsTyping(false);
    }
  }

  function handleReset() {
    setIsChatOpen(false);
    setMessages([]);
    setTypedText("");
    setShowContactForm(false);
    setContactSent(false);
    setContactSending(false);
    setContactForm({ name: "", phone: "", email: "", description: "" });
    setSmsConsent(false);
    setDetectedTopic(null);
    setResourceCardsShown(false);
  }

  const handleContactSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactSending(true);

    const topicLabel = detectedTopic ? TOPIC_LABELS[detectedTopic] : "General";
    const chatHistoryHtml = messages
      .map((m) => `<p><strong>${m.role === "user" ? "Visitor" : "Assistant"}:</strong> ${m.text}</p>`)
      .join("");

    const bodyHtml = `
      <h2>Concierge Inquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ccc;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ccc;">${contactForm.name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ccc;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ccc;">${contactForm.phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ccc;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ccc;">${contactForm.email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ccc;font-weight:bold;">SMS consent</td><td style="padding:8px;border:1px solid #ccc;">${smsConsent ? "Yes, opted in to customer care texts" : "No"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ccc;font-weight:bold;">Description</td><td style="padding:8px;border:1px solid #ccc;">${contactForm.description}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ccc;font-weight:bold;">Detected Topic</td><td style="padding:8px;border:1px solid #ccc;">${topicLabel}</td></tr>
      </table>
      <h3 style="margin-top:20px;">Chat History</h3>
      <div style="background:#f5f5f5;padding:16px;border-radius:8px;">${chatHistoryHtml}</div>
    `;

    const leadDocket = sendToLeadDocket({
      name: contactForm.name,
      phone: contactForm.phone,
      email: contactForm.email,
      caseType: detectedTopic ? topicLabel : "",
      message: contactForm.description,
      smsConsent,
      source: "Homepage chat assistant",
    });

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: ["mike@yonke.law", "jyonke@yonke.law", "michelle@yonke.law"],
          subject: `Concierge Inquiry: ${contactForm.name} — ${topicLabel}`,
          body: bodyHtml,
        }),
      });

      if (res.ok || (await leadDocket)) {
        setContactSent(true);
        setShowContactForm(false);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text: "Your information has been sent to Mike and Janell. They'll review it — usually the same business day. If it's urgent, call 816-221-6400.",
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: "There was a problem sending your information. Please try again or call 816-221-6400." },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Something went wrong sending your info. Please call 816-221-6400." },
      ]);
    } finally {
      setContactSending(false);
    }
  }, [contactForm, detectedTopic, messages, smsConsent]);

  function renderMarkdown(text: string): string {
    return text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/_(.+?)_/g, "<em>$1</em>")
      .replace(
        /\[(.+?)\]\((https:\/\/www\.youtube\.com\/embed\/[A-Za-z0-9_-]+)\)/g,
        '<div class="mt-3 aspect-video rounded overflow-hidden border border-steel-silver/10"><iframe src="$2?rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-full"></iframe></div>'
      )
      .replace(
        /\[(.+?)\]\((.+?)\)/g,
        '<a href="$2" class="text-muted-gold underline hover:text-chrome-highlight transition-colors" target="_blank" rel="noopener noreferrer">$1</a>'
      )
      .replace(/\n---\n/g, '<hr class="border-steel-silver/20 my-3" />')
      .replace(/\n/g, "<br />");
  }

  return (
    <section
      className="relative min-h-[60vh] flex flex-col justify-center py-14 px-4 lg:px-8 overflow-hidden"
      aria-label="What happened? Tell us in plain words."
    >
      {/* Background images — cycle with crossfade */}
      {HERO_IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={`object-cover object-top transition-opacity duration-[2000ms] ease-in-out ${
            i === bgIndex ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
          priority={i === 0}
          aria-hidden="true"
        />
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-obsidian-graphite/75" aria-hidden="true" />

      {/* Content layer */}
      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Headline row: text left + congrats card right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8 items-center mb-8">
          <div>
            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-chrome-highlight leading-[1.15] mb-6">
              We represent people hurt by someone else&apos;s negligence.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-steel-silver leading-relaxed max-w-2xl">
              With clarity. With strategy. Without compromise.
              <br />
              Tell us what happened — we&apos;ll help you find your way.
            </p>
          </div>

          {/* Congratulations card — links to recognition page */}
          <Link
            href="/about/recognition"
            className="hidden lg:block group rounded-lg overflow-hidden border-2 border-muted-gold/40 shadow-xl shadow-muted-gold/15 hover:shadow-muted-gold/30 hover:border-muted-gold/70 transition-all duration-300"
          >
            <Image
              src="/images/top100-congrats-card.jpg"
              alt="Congratulations Mike Yonke — Top 100 Lawyers by The National Trial Lawyers, Spring 2026. Click to explore recognitions."
              width={1024}
              height={571}
              className="w-full h-auto"
              sizes="480px"
            />
          </Link>
        </div>

        {!isChatOpen ? (
          <>
            {/* Concierge input — single row */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="concierge-input" className="sr-only">
                  Tell us what happened
                </label>
                <input
                  id="concierge-input"
                  type="text"
                  value={typedText}
                  onChange={(e) => setTypedText(e.target.value)}
                  placeholder={PLACEHOLDER_EXAMPLES[placeholderIndex]}
                  className="flex-1 bg-charcoal-slate border border-steel-silver/30 rounded-lg px-6 py-5 text-lg text-chrome-highlight placeholder:text-steel-silver/60 focus:outline-none focus:border-muted-gold transition-colors duration-200"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="sm:w-auto bg-muted-gold text-obsidian-graphite font-semibold px-8 py-5 rounded-lg hover:bg-muted-gold/90 transition-colors duration-200 whitespace-nowrap"
                >
                  Help me understand →
                </button>
              </div>
            </form>

            {/* Recognition card — mobile only (desktop version is in the headline grid) */}
            <Link
              href="/about/recognition"
              className="block lg:hidden mt-8 rounded-lg overflow-hidden border-2 border-muted-gold/40 shadow-lg shadow-muted-gold/10 max-w-md mx-auto"
            >
              <Image
                src="/images/top100-congrats-card.jpg"
                alt="Congratulations Mike Yonke — Top 100 Lawyers by The National Trial Lawyers, Spring 2026. Tap to explore recognitions."
                width={1024}
                height={571}
                className="w-full h-auto"
                sizes="(max-width: 768px) 90vw, 448px"
              />
            </Link>

            {/* Explainer video */}
            <div className="mt-10 mx-auto max-w-3xl">
              <div className="aspect-video rounded-xl overflow-hidden border border-steel-silver/10">
                <iframe
                  src="https://www.youtube.com/embed/lcxuwZ_R3lE?rel=0"
                  title="The Standard — Yonke Law"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="bg-charcoal-slate border border-steel-silver/30 rounded-xl overflow-hidden flex flex-col mx-auto w-full max-w-4xl shadow-2xl transition-all duration-500 ease-in-out" style={{ height: "500px" }}>
            {/* Chat header */}
            <div className="bg-obsidian-graphite px-6 py-4 flex items-center justify-between border-b border-steel-silver/20 shrink-0">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/retro_operator.png"
                  alt="Assistant"
                  width={36}
                  height={36}
                  className="rounded-full border border-muted-gold"
                />
                <div>
                  <div className="text-chrome-highlight font-semibold">Help Representative</div>
                  <div className="text-steel-silver text-xs">Yonke Law Assistant</div>
                </div>
              </div>
              <button onClick={handleReset} className="text-steel-silver hover:text-chrome-highlight text-sm underline underline-offset-2 transition-colors">
                Start Over
              </button>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {messages.map((msg, idx) => {
                // Show resource cards after the first assistant response
                const isFirstAssistantReply =
                  msg.role === "assistant" &&
                  idx === messages.findIndex((m) => m.role === "assistant");

                return (
                  <div key={idx}>
                    <div className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      {msg.role === "assistant" && (
                        <div className="mr-3 shrink-0">
                          <Image
                            src="/images/retro_operator.png"
                            alt="Assistant"
                            width={28}
                            height={28}
                            className="rounded-full border border-muted-gold/50"
                          />
                        </div>
                      )}
                      <div
                        className={`max-w-[85%] rounded-xl px-5 py-3.5 text-[15px] leading-relaxed shadow-sm ${
                          msg.role === "user"
                            ? "bg-muted-gold/15 text-chrome-highlight rounded-br-sm border border-muted-gold/20"
                            : "bg-obsidian-graphite text-steel-silver rounded-bl-sm border border-steel-silver/10"
                        }`}
                        dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.text) }}
                      />
                    </div>

                    {/* Resource cards — shown after the first assistant reply when a topic is detected */}
                    {isFirstAssistantReply && detectedTopic && resourceCardsShown && (
                      <div className="mt-4 ml-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Video card */}
                        {TOPIC_VIDEO_IDS[detectedTopic] && (
                          <div className="bg-obsidian-graphite border border-steel-silver/10 rounded-xl p-4 shadow-sm">
                            <div className="text-xs uppercase tracking-wider text-muted-gold mb-2">Related Video</div>
                            <div className="aspect-video rounded overflow-hidden">
                              <iframe
                                src={`https://www.youtube.com/embed/${TOPIC_VIDEO_IDS[detectedTopic]}?rel=0`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                                title={`Video about ${TOPIC_LABELS[detectedTopic]}`}
                              />
                            </div>
                          </div>
                        )}

                        {/* Checklist card */}
                        {TOPIC_SLUGS[detectedTopic] && (
                          <Link
                            href={`/what-we-handle/${TOPIC_SLUGS[detectedTopic]}`}
                            className="bg-obsidian-graphite border border-steel-silver/10 rounded-xl p-4 shadow-sm hover:border-muted-gold transition-colors group block"
                          >
                            <div className="text-xs uppercase tracking-wider text-muted-gold mb-2">Checklist</div>
                            <p className="text-chrome-highlight text-sm leading-relaxed mb-3">
                              See what to know about your {TOPIC_LABELS[detectedTopic]}.
                            </p>
                            <span className="text-steel-silver group-hover:text-muted-gold text-sm transition-colors">
                              View guide →
                            </span>
                          </Link>
                        )}

                        {/* Personal Injury Checklist PDF */}
                        <a
                          href="/resources/yl-personal-injury-checklist.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-obsidian-graphite border border-steel-silver/10 rounded-xl p-4 shadow-sm hover:border-muted-gold transition-colors group block"
                        >
                          <div className="text-xs uppercase tracking-wider text-muted-gold mb-2">Download</div>
                          <p className="text-chrome-highlight text-sm leading-relaxed mb-3">
                            Personal Injury Checklist — essential steps to protect your claim.
                          </p>
                          <span className="text-steel-silver group-hover:text-muted-gold text-sm transition-colors">
                            Get the checklist (PDF) ↓
                          </span>
                        </a>

                        {/* Share info card */}
                        {!contactSent && (
                          <button
                            type="button"
                            onClick={() => setShowContactForm(true)}
                            className="bg-obsidian-graphite border border-steel-silver/10 rounded-xl p-4 shadow-sm hover:border-muted-gold transition-colors text-left"
                          >
                            <div className="text-xs uppercase tracking-wider text-muted-gold mb-2">Get in Touch</div>
                            <p className="text-chrome-highlight text-sm leading-relaxed mb-3">
                              Share your info so Mike and Janell can review your situation.
                            </p>
                            <span className="text-steel-silver text-sm">Share your info →</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Inline contact form — appears below messages */}
              {showContactForm && !contactSent && (
                <div className="bg-obsidian-graphite border border-steel-silver/10 rounded-xl px-5 py-5 shadow-sm ml-10">
                  <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">Share Your Information</div>
                  <form onSubmit={handleContactSubmit} className="space-y-3">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm((f) => ({ ...f, name: e.target.value }))}
                        className="bg-charcoal-slate border border-steel-silver/20 rounded-lg px-4 py-2.5 text-sm text-chrome-highlight placeholder:text-steel-silver/50 focus:outline-none focus:border-muted-gold transition-colors"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Phone number"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm((f) => ({ ...f, phone: e.target.value }))}
                        className="bg-charcoal-slate border border-steel-silver/20 rounded-lg px-4 py-2.5 text-sm text-chrome-highlight placeholder:text-steel-silver/50 focus:outline-none focus:border-muted-gold transition-colors"
                      />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Email address"
                      value={contactForm.email}
                      onChange={(e) => setContactForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full bg-charcoal-slate border border-steel-silver/20 rounded-lg px-4 py-2.5 text-sm text-chrome-highlight placeholder:text-steel-silver/50 focus:outline-none focus:border-muted-gold transition-colors"
                    />
                    <SmsConsent id="concierge_sms_consent" checked={smsConsent} onChange={setSmsConsent} compact />
                    <textarea
                      required
                      rows={2}
                      placeholder="Brief description of what happened"
                      value={contactForm.description}
                      onChange={(e) => setContactForm((f) => ({ ...f, description: e.target.value }))}
                      className="w-full bg-charcoal-slate border border-steel-silver/20 rounded-lg px-4 py-2.5 text-sm text-chrome-highlight placeholder:text-steel-silver/50 focus:outline-none focus:border-muted-gold transition-colors resize-none"
                    />
                    <div className="flex items-center gap-3">
                      <button
                        type="submit"
                        disabled={contactSending}
                        className="bg-muted-gold text-obsidian-graphite font-semibold px-5 py-2.5 rounded-lg hover:bg-muted-gold/90 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {contactSending ? "Sending…" : "Send to Mike & Janell"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowContactForm(false)}
                        className="text-steel-silver hover:text-chrome-highlight text-sm underline underline-offset-2 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="mr-3 shrink-0">
                    <Image
                      src="/images/retro_operator.png"
                      alt="Assistant"
                      width={28}
                      height={28}
                      className="rounded-full border border-muted-gold/50"
                    />
                  </div>
                  <div className="bg-obsidian-graphite rounded-xl px-5 py-4 rounded-bl-sm border border-steel-silver/10 flex items-center shadow-sm">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 bg-steel-silver/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-steel-silver/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-steel-silver/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="bg-obsidian-graphite p-4 border-t border-steel-silver/20 shrink-0">
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="text"
                  value={typedText}
                  onChange={(e) => setTypedText(e.target.value)}
                  placeholder="Type your response..."
                  className="flex-1 bg-charcoal-slate border border-steel-silver/30 rounded-lg px-5 py-3 text-chrome-highlight placeholder:text-steel-silver/50 focus:outline-none focus:border-muted-gold transition-colors"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={!typedText.trim() || isTyping}
                  className="bg-muted-gold text-obsidian-graphite font-semibold px-6 py-3 rounded-lg hover:bg-muted-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   ConciergePanels — Section 2.5 of homepage-spec.md
   Four panels appear after the user submits text.
   ------------------------------------------------------- */

function ConciergePanels({
  typedText,
  topic,
  onReset,
}: {
  typedText: string;
  topic: TopicId | null;
  onReset: () => void;
}) {
  const isEmpty = !typedText;
  const topicLabel = topic ? TOPIC_LABELS[topic] : "situation";
  const topicLink = topic ? TOPIC_TO_JUST_HAPPENED[topic] : "/just-happened";

  return (
    <div className="space-y-8">
      {/* Echo back what was typed */}
      {!isEmpty && (
        <div className="bg-charcoal-slate border-l-2 border-muted-gold p-4 rounded">
          <div className="text-xs uppercase tracking-wider text-steel-silver mb-2">
            Based on what you told us
          </div>
          <p className="text-chrome-highlight italic">
            &ldquo;{typedText}&rdquo;
          </p>
          <button
            type="button"
            onClick={onReset}
            className="mt-3 text-xs text-steel-silver hover:text-muted-gold underline underline-offset-2 transition-colors"
          >
            Start over
          </button>
        </div>
      )}

      {isEmpty && (
        <div className="bg-charcoal-slate p-6 rounded text-center">
          <p className="text-chrome-highlight mb-4">
            Not sure where to start?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <Link
              href="/just-happened"
              className="bg-obsidian-graphite border border-steel-silver/15 hover:border-muted-gold rounded px-5 py-3 text-sm text-chrome-highlight text-center transition-colors duration-200"
            >
              Something just happened
            </Link>
            <Link
              href="/people-first"
              className="bg-obsidian-graphite border border-steel-silver/15 hover:border-muted-gold rounded px-5 py-3 text-sm text-chrome-highlight text-center transition-colors duration-200"
            >
              I&apos;m researching my options
            </Link>
          </div>
          <button
            type="button"
            onClick={onReset}
            className="mt-6 text-xs text-steel-silver hover:text-muted-gold underline underline-offset-2 transition-colors"
          >
            Or type what happened →
          </button>
        </div>
      )}

      {!isEmpty && (
        <div className="grid gap-4 md:grid-cols-2">
          {/* Panel 1 — Take a breath (universal) */}
          <div className="bg-charcoal-slate p-6 rounded border border-steel-silver/10">
            <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
              First things first
            </div>
            <h2 className="font-display text-2xl text-chrome-highlight mb-3">
              Take a breath.
            </h2>
            <p className="text-sm text-steel-silver leading-relaxed mb-4">
              What you&apos;re feeling right now is real and reasonable. People
              in your situation often describe shock, confusion, fear about
              money, and uncertainty about who to trust. That&apos;s not
              weakness — that&apos;s an honest response to a hard moment.
            </p>
            <p className="text-sm text-steel-silver leading-relaxed">
              You don&apos;t have to figure everything out tonight. There&apos;s
              a path forward, and most of it isn&apos;t urgent in the way it
              feels.
            </p>
          </div>

          {/* Panel 2 — What to do (topic-specific) */}
          <div className="bg-charcoal-slate p-6 rounded border border-steel-silver/10">
            <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
              Practical steps
            </div>
            <h2 className="font-display text-2xl text-chrome-highlight mb-3">
              Here&apos;s what&apos;s generally useful.
            </h2>
            <p className="text-sm text-steel-silver leading-relaxed italic mb-4">
              I can&apos;t give you legal advice about your specific situation —
              only an attorney can do that. But here&apos;s information that
              tends to help people in a {topicLabel} sort it out.
            </p>
            <Link
              href={topicLink}
              className="inline-flex items-center gap-2 text-chrome-highlight hover:text-muted-gold transition-colors"
            >
              See the {topicLabel} guide{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Panel 3 — What's the process (universal) */}
          <div className="bg-charcoal-slate p-6 rounded border border-steel-silver/10">
            <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
              How these cases move
            </div>
            <h2 className="font-display text-2xl text-chrome-highlight mb-3">
              The general path, in plain English.
            </h2>
            <p className="text-sm text-steel-silver leading-relaxed mb-4">
              I can&apos;t evaluate your case — but here&apos;s how cases like
              this typically move through the legal process, from start to
              resolution.
            </p>
            <Link
              href="/people-first"
              className="inline-flex items-center gap-2 text-chrome-highlight hover:text-muted-gold transition-colors"
            >
              See the full process <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Panel 4 — Talk to someone (universal) */}
          <div className="bg-charcoal-slate p-6 rounded border border-steel-silver/10">
            <div className="text-xs uppercase tracking-wider text-muted-gold mb-3">
              If you&apos;d like
            </div>
            <h2 className="font-display text-2xl text-chrome-highlight mb-3">
              We&apos;re here when you&apos;re ready.
            </h2>
            <p className="text-sm text-steel-silver leading-relaxed mb-4">
              If you&apos;d like Yonke Law to look at what happened, send us
              the basics. Mike or someone on the team will respond — usually
              the same business day. Consultations are free. No pressure. If
              we don&apos;t think you need a lawyer, we&apos;ll tell you
              straight.
            </p>
            <Link
              href={`/talk-to-us?topic=${topic ?? "general"}`}
              className="inline-flex items-center gap-2 text-chrome-highlight hover:text-muted-gold transition-colors"
            >
              Start the conversation <span aria-hidden="true">→</span>
            </Link>
            <div className="mt-3 text-xs text-steel-silver">
              Or call{" "}
              <a
                href="tel:+18162216400"
                className="text-chrome-highlight hover:text-muted-gold transition-colors"
              >
                816-221-6400
              </a>
              {" "}— same response either way.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
