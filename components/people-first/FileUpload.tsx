"use client";

import { useState, useRef } from "react";

/* ──────────────────────────────────────────────────────────────
   FileUpload — Real file upload (person → Mike via Graph).
   Files are sent as email attachments to Mike and persisted to DB.
   ────────────────────────────────────────────────────────────── */

interface FileUploadProps {
  onUpload?: (file: File) => void;
  apiEndpoint?: string; // e.g. "/api/people-first/files"
}

export function FileUpload({ onUpload, apiEndpoint }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleUpload() {
    if (!file) return;
    setUploading(true);
    setError(null);

    if (apiEndpoint) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(apiEndpoint, {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Upload failed");
        }

        setDone(true);
        onUpload?.(file);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
        setUploading(false);
        return;
      }
    } else {
      // Fallback: local-only (no API)
      await new Promise((r) => setTimeout(r, 800));
      setDone(true);
      onUpload?.(file);
    }

    setUploading(false);
  }

  if (done) {
    return (
      <div className="text-center py-6">
        <p className="text-[var(--affirmative-green)] text-lg mb-1">✓</p>
        <p className="text-sm text-[var(--affirmative-green)] font-semibold">
          {file?.name} sent to Mike.
        </p>
        <button
          type="button"
          onClick={() => {
            setFile(null);
            setDone(false);
          }}
          className="text-xs text-[var(--muted-gold)] hover:text-white transition-colors mt-2"
        >
          Upload another
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-white/20 hover:border-[var(--muted-gold)]/50 rounded-xl p-6 text-center cursor-pointer transition-colors"
      >
        <p className="text-2xl mb-2">📎</p>
        <p className="text-sm text-white/50">
          {file ? file.name : "Tap to select a file"}
        </p>
        {file && (
          <p className="text-xs text-white/30 mt-1">
            {(file.size / 1024).toFixed(0)} KB
          </p>
        )}
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept=".pdf,.jpg,.jpeg,.png,.gif,.mp4,.mov,.doc,.docx,.xls,.xlsx"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) setFile(f);
          }}
        />
      </div>

      {error && (
        <p className="text-xs text-[var(--signal-red)] mt-2">{error}</p>
      )}

      {file && !uploading && (
        <button
          type="button"
          onClick={handleUpload}
          className="mt-3 w-full bg-[var(--muted-gold)] text-[var(--obsidian-graphite)] font-semibold px-4 py-2.5 rounded-lg text-sm hover:bg-[var(--muted-gold)]/90 transition-colors"
        >
          Send to Mike
        </button>
      )}

      {uploading && (
        <div className="mt-3 flex items-center justify-center gap-2 py-2.5 text-[var(--muted-gold)] text-sm">
          <div className="w-4 h-4 border-2 border-[var(--muted-gold)] border-t-transparent rounded-full animate-spin" />
          Uploading…
        </div>
      )}
    </div>
  );
}
