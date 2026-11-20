/**
 * People First portal — one-time sign-in links.
 *
 * A link carries a token: the person's email, an expiry time and a random id,
 * signed with AUTH_SECRET so it cannot be forged or altered. Links last 15
 * minutes. The random id lets the sign-in step refuse a link that has already
 * been used (see consumeLinkId in store.ts).
 */

export const LINK_TTL_MS = 15 * 60 * 1000;

type Payload = { e: string; x: number; n: string };

const enc = new TextEncoder();

function b64url(bytes: Uint8Array): string {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromB64url(text: string): Uint8Array {
  const s = atob(text.replace(/-/g, "+").replace(/_/g, "/"));
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
  return out;
}

function secret(): string {
  const s = process.env.AUTH_SECRET;
  if (!s || s.length < 16) throw new Error("AUTH_SECRET is not set.");
  return s;
}

async function key(secretValue: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    enc.encode(`people-first-link:${secretValue}`),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function createLinkToken(
  email: string,
  opts: { now?: number; secret?: string } = {}
): Promise<string> {
  const payload: Payload = {
    e: email.trim().toLowerCase(),
    x: (opts.now ?? Date.now()) + LINK_TTL_MS,
    n: crypto.randomUUID(),
  };
  const body = b64url(enc.encode(JSON.stringify(payload)));
  const sig = await crypto.subtle.sign("HMAC", await key(opts.secret ?? secret()), enc.encode(body));
  return `${body}.${b64url(new Uint8Array(sig))}`;
}

export type VerifiedLink = { email: string; linkId: string; expires: number };

/** Returns the email and link id when the token is genuine and unexpired, otherwise null. */
export async function verifyLinkToken(
  token: string,
  opts: { now?: number; secret?: string } = {}
): Promise<VerifiedLink | null> {
  try {
    const [body, sig, extra] = token.split(".");
    if (!body || !sig || extra !== undefined) return null;
    const ok = await crypto.subtle.verify(
      "HMAC",
      await key(opts.secret ?? secret()),
      fromB64url(sig) as BufferSource,
      enc.encode(body)
    );
    if (!ok) return null;
    const p = JSON.parse(new TextDecoder().decode(fromB64url(body))) as Payload;
    if (typeof p.e !== "string" || typeof p.x !== "number" || typeof p.n !== "string") return null;
    if ((opts.now ?? Date.now()) > p.x) return null;
    return { email: p.e, linkId: p.n, expires: p.x };
  } catch {
    return null;
  }
}
