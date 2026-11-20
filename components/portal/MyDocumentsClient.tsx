"use client";

import { useRef, useState } from "react";
import type { MyDocument } from "@/lib/portal/my-documents";
import { fileSize, shortDate } from "@/lib/portal/format";

const ACCEPT = ".pdf,.jpg,.jpeg,.png,.heic,.heif,.webp,.doc,.docx,.txt";

export function MyDocumentsClient({ initial }: { initial: MyDocument[] }) {
  const [docs, setDocs] = useState(initial);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const input = useRef<HTMLInputElement>(null);

  async function upload(file: File) {
    setError("");
    setMessage("");
    setBusy(true);
    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch("/api/portal/documents", { method: "POST", body });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "We could not add that file. Please try again.");
      setDocs((d) => [data.document as MyDocument, ...d]);
      setMessage(
        data.firmNotified
          ? `"${data.document.name}" is saved, and we have let the firm know it is here.`
          : `"${data.document.name}" is saved. We could not email the firm just now, so mention it when you next speak with us.`
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "We could not add that file. Please try again.");
    } finally {
      setBusy(false);
      if (input.current) input.current.value = "";
    }
  }

  async function remove(doc: MyDocument) {
    if (!window.confirm(`Remove "${doc.name}"? This cannot be undone.`)) return;
    setError("");
    setMessage("");
    const res = await fetch(`/api/portal/documents/${doc.id}`, { method: "DELETE" });
    if (!res.ok) {
      setError("We could not remove that file. Please try again.");
      return;
    }
    setDocs((d) => d.filter((x) => x.id !== doc.id));
    setMessage(`"${doc.name}" was removed.`);
  }

  return (
    <div>
      <div className="rounded-2xl border border-dashed border-white/30 bg-[#2E2F33] p-6 text-center">
        <p className="text-white">Add a document or photo</p>
        <p className="mt-1 text-sm text-white/75">PDF, photo, Word document or text file. Up to 20 MB each.</p>
        <label className="mt-4 inline-block">
          <span className="sr-only">Choose a file to add</span>
          <input
            ref={input}
            type="file"
            accept={ACCEPT}
            disabled={busy}
            data-testid="doc-input"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) void upload(f);
            }}
            className="block w-full max-w-xs text-sm text-white file:mr-3 file:rounded-xl file:border-0 file:bg-muted-gold file:px-5 file:py-2.5 file:font-semibold file:text-[#1C1C1E] file:cursor-pointer"
          />
        </label>
        {busy && <p className="mt-3 text-sm text-white/80">Saving…</p>}
      </div>

      <div aria-live="polite">
        {message && <p className="mt-4 text-sm text-[#7FE0B8]">{message}</p>}
        {error && (
          <p role="alert" className="mt-4 text-sm text-[#FFB4B4]">
            {error}
          </p>
        )}
      </div>

      <h2 className="mt-8 mb-3 font-display text-xl text-white">Your documents</h2>
      {docs.length === 0 ? (
        <p className="text-white/80">You have not added anything yet.</p>
      ) : (
        <ul className="space-y-3" data-testid="doc-list">
          {docs.map((d) => (
            <li
              key={d.id}
              className="rounded-2xl bg-[#2E2F33] border border-white/10 p-4 flex flex-wrap items-center justify-between gap-3"
            >
              <div className="min-w-0">
                <p className="text-white font-semibold break-words">{d.name}</p>
                <p className="text-xs text-white/70 mt-0.5">
                  {d.kind} · {fileSize(d.size)} · Added {shortDate(d.addedOn)}
                </p>
              </div>
              <div className="flex gap-4 text-sm">
                <a href={`/api/portal/documents/${d.id}`} className="text-muted-gold underline underline-offset-4">
                  Download
                </a>
                <button type="button" onClick={() => remove(d)} className="text-white/80 underline underline-offset-4">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
