/**
 * Conversational Chat API — Yonke Law
 *
 * Streams responses grounded in the site's knowledge base.
 * Uses Vertex AI Gemini when GOOGLE_AI_API_KEY is set,
 * falls back to enhanced keyword matching otherwise.
 *
 * Guardrails:
 * - Information only, never legal advice
 * - Person-first language
 * - Supportive, emotive, reassuring tone
 * - Can provide contact info, accept document upload intent
 * - Stays in the Yonke Law voice per brand doctrine
 */

import { NextRequest, NextResponse } from "next/server";
import { KNOWLEDGE_BASE, SYSTEM_DISCLAIMER } from "@/components/chatbot/knowledge";

// ─── System prompt for LLM mode ──────────────────────────────────────────────

const SYSTEM_PROMPT = `You are the Yonke (YONK-ee) Law conversational assistant on the firm's website. You help people who may have been hurt — or whose loved ones were hurt — understand their situation and feel supported.

IDENTITY AND TONE:
- You are warm, calm, direct, and genuinely caring
- You speak like a trusted friend who happens to understand the legal system
- You are emotionally present — acknowledge what the person is going through
- Use "you" and "your" — make it personal
- Be specific and concrete, never vague or corporate
- Reassure them that a path forward exists — whether with Yonke Law or through a personal referral
- You are collaborative — "let's figure this out together"

CRITICAL RULES:
1. You provide INFORMATION, never legal advice. Say this ONCE at the start of the conversation, then don't repeat it — just be helpful.
2. Never say "I'm just an AI" or "I'm a chatbot." You are the Yonke Law assistant.
3. Never use fear tactics, urgency pressure, or chest-thumping language.
4. Never promise outcomes or evaluate the strength of someone's case.
5. Always be honest when you don't know something.
6. If they want to move forward, offer to help them send their information to the team for review.

CONTACT INFORMATION (provide when relevant):
- Phone: 816-221-6400
- Address: 700 West 47th Street, Suite 550, Kansas City, MO 64112
- Hours: Monday–Friday, 9:00 AM – 5:00 PM
- Email: Through the Talk to Us page at /talk-to-us
- Free consultation. No fee unless we recover for you.

WHAT YOU CAN DO:
- Explain MO and KS personal injury law concepts
- Walk through filing deadlines, comparative fault rules, damage caps
- Explain what happens in different types of cases (car accidents, med mal, workplace, etc.)
- Provide emotional support and reassurance
- Help them organize their thoughts about what happened
- Offer to help them send documents/information to Yonke Law for review
- Refer them to specific pages on the site for more detail

PRACTICE AREAS YOU KNOW ABOUT:
Car accidents, truck accidents, medical malpractice, wrongful death, nursing home abuse, workplace/construction injuries, motorcycle accidents, premises liability, product liability, pedestrian/bicycle, rideshare accidents, dog bites, sexual abuse, birth injury, construction injury, active shooter incidents

KEY LEGAL FRAMEWORK:
- Missouri: Pure comparative fault (RSMo § 537.765) — can recover even if mostly at fault
- Kansas: Modified comparative fault (KSA § 60-258a) — barred at 50%+ fault
- Missouri PI SOL: 5 years | Med mal: 2 years | Wrongful death: 3 years
- Kansas PI SOL: 2 years | Med mal: 2 years | Wrongful death: 2 years
- Missouri med mal requires affidavit of merit (RSMo § 538.225)
- Kansas med mal requires screening panel (KSA § 65-4901)

WHEN THEY WANT TO MOVE FORWARD:
If someone indicates they want Yonke Law to review their situation, guide them to:
1. Use the Talk to Us page (/talk-to-us) to send their information
2. Or call 816-221-6400 directly
3. Let them know they can share documents, photos, medical records — anything that helps tell their story
4. Reassure them: "Every inquiry is reviewed personally by Mike or someone on the team — usually the same business day."

Remember: You are having a real conversation with a real person who may be scared, confused, or in pain. Be the person they need right now.`;

// ─── Types ────────────────────────────────────────────────────────────────────

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

// ─── Enhanced keyword fallback ────────────────────────────────────────────────

function findFallbackResponse(query: string, history: ChatMessage[]): string {
  const q = query.toLowerCase().trim();

  // Emotional / greeting responses
  const emotionalPatterns: Array<[string[], string]> = [
    [
      ["scared", "afraid", "terrified", "anxious", "worried", "nervous", "overwhelmed"],
      `That's a completely normal response to what you're going through. Most people in your situation feel exactly the same way — the uncertainty, the worry about what comes next. You don't have to have all the answers right now.

Here's what I want you to know: **there is a path forward.** Whether that's with Yonke Law or through someone we can connect you with, you're not stuck. Let's talk through what happened, and we'll figure out the next step together.

What would be most helpful right now — understanding the legal basics of your situation, or just talking through what happened?`,
    ],
    [
      ["hurt", "pain", "injured", "hospital", "surgery", "broken", "bleeding"],
      `I'm sorry you're dealing with that. Your health comes first — always. If you haven't already, make sure you're getting the medical attention you need. Everything else can wait.

Once you're in a stable place, here's what tends to help: document what happened (even just notes on your phone), keep copies of any medical records or bills, and don't sign anything from an insurance company without understanding what it means.

Would you like to walk through what happened? I can help you think through it.`,
    ],
    [
      ["thank", "thanks", "helpful", "appreciate"],
      `Of course. That's what we're here for. If anything else comes up — a question at 2 AM, a document you're not sure about, anything — come back and ask. Or call the team directly at **816-221-6400**. They're real people, not a call center.

Is there anything else on your mind?`,
    ],
    [
      ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
      `Hey — welcome. I'm glad you're here.

Whether something just happened or you're trying to figure out a situation from a while back, I can help you understand your options under Missouri and Kansas law.

**Quick note:** I provide general legal information — not advice specific to your situation. For that, you'd want to talk directly with the team. But let's start here. What's going on?`,
    ],
  ];

  for (const [patterns, response] of emotionalPatterns) {
    if (patterns.some((p) => q.includes(p))) return response;
  }

  // Upload / document intent
  if (q.match(/upload|document|send.*file|share.*record|photo|evidence|paperwork|medical record/)) {
    return `Absolutely — sharing documents is a great step. Here's how to get your information to the Yonke Law team:

**Option 1:** Use the [Talk to Us](/talk-to-us) page — you can describe your situation and the team will follow up to collect any documents.

**Option 2:** Call **816-221-6400** and let them know you have materials to share. They'll walk you through the best way to send them securely.

You can share anything that helps tell your story — medical records, bills, photos of the scene, police reports, insurance correspondence, notes you've written. Don't worry about organizing it perfectly. The team will sort through it with you.

Every submission is reviewed personally. Would you like to do that now?`;
  }

  // Ready to move forward
  if (q.match(/move forward|hire|retain|ready|want.*lawyer|need.*attorney|next step|get started|sign up/)) {
    return `That takes courage, and I respect that. Here's what the next step looks like:

**Call or reach out:**
📞 **816-221-6400** — Mike or someone on the team will pick up
🌐 [Talk to Us](/talk-to-us) — send a message anytime

**What to expect:**
- A real conversation, not a sales pitch
- They'll listen to what happened and give you an honest assessment
- Free consultation — no cost, no obligation
- If Yonke Law isn't the right fit, they'll tell you straight and point you to someone who is

**No fee unless they recover for you.** That's not a slogan — it's how the firm works.

Is there anything you'd like to know before reaching out?`;
  }

  // Knowledge base lookup
  const scored = KNOWLEDGE_BASE.map((entry) => {
    let score = 0;
    for (const kw of entry.keywords) {
      if (q.includes(kw.toLowerCase())) score += kw.length;
    }
    if (q.includes(entry.category.toLowerCase())) score += 10;
    return { entry, score };
  })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length > 0) {
    const best = scored[0].entry;
    let response = best.answer;
    if (best.statutes?.length) {
      response += `\n\n**Referenced statutes:** ${best.statutes.join(", ")}`;
    }
    response += `\n\nWould you like me to go deeper on any part of this? Or if you'd rather talk to someone directly, call **816-221-6400** — the consultation is free.`;
    return response;
  }

  // Conversational fallback
  return `I want to make sure I help you with the right thing. Could you tell me a bit more about your situation? For example:

- **What happened?** (car accident, medical issue, workplace injury, etc.)
- **When did it happen?**
- **Where?** (Missouri or Kansas — it matters for the law that applies)

Or if you'd rather talk to someone directly:
📞 **816-221-6400** — free consultation, no pressure
🌐 [Talk to Us](/talk-to-us)

I'm here either way.`;
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const messages: ChatMessage[] = body.messages ?? [];
    const lastMessage = messages[messages.length - 1];

    if (!lastMessage || lastMessage.role !== "user") {
      return NextResponse.json({ error: "No user message" }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_AI_API_KEY;

    if (apiKey) {
      // ── Gemini mode ──────────────────────────────────────────────
      const geminiMessages = messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.text }],
      }));

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: geminiMessages,
            generationConfig: {
              temperature: 0.7,
              topP: 0.9,
              maxOutputTokens: 1024,
            },
            safetySettings: [
              { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
              { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
              { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
              { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" },
            ],
          }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        const text =
          data?.candidates?.[0]?.content?.parts?.[0]?.text ??
          findFallbackResponse(lastMessage.text, messages);
        return NextResponse.json({ text });
      }

      // Gemini failed — fall through to fallback
      console.error("[chat] Gemini API error:", res.status, await res.text());
    }

    // ── Fallback mode ────────────────────────────────────────────
    const text = findFallbackResponse(lastMessage.text, messages);
    return NextResponse.json({ text });
  } catch (error) {
    console.error("[chat] Error:", error);
    return NextResponse.json(
      { text: findFallbackResponse("", []) },
      { status: 200 }
    );
  }
}
