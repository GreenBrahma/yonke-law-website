"use client";

import { useState, type ChangeEvent } from "react";

/* ──────────────────────────────────────────────────────────────
   FileUpload — reusable upload component for People First.
   Used in Panel 2 detail, Panel 3 detail, and Help page.
   DEMO: simulates upload, no real storage (NFR-01).
   ────────────────────────────────────────────────────────────── */

interface FileUploadProps {
  onUpload?: (file: File) => void;
}

export function FileUpload({ onUpload }: FileUploadProps) {
  const [fileName, setFileName] = useState("");
  const [uploaded, setUploaded] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setUploaded(false);
    }
  }

  function handleUpload() {
    if (!fileName) return;
    setUploaded(true);
    onUpload?.(new File([], fileName));
  }

  return (
    <div className="space-y-2">
      <div className="relative">
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png,.gif,.mp4,.mov,.doc,.docx"
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="bg-[var(--obsidian-graphite)] border border-dashed border-white/20 rounded-lg px-4 py-3 text-sm text-white/60 flex items-center gap-3 hover:border-[var(--muted-gold)]/50 transition-colors">
          <span className="text-lg">📎</span>
          {fileName || "Tap to choose a file"}
        </div>
      </div>

      {fileName && !uploaded && (
        <button
          type="button"
          onClick={handleUpload}
          className="bg-[var(--muted-gold)] text-[var(--obsidian-graphite)] font-semibold px-4 py-2 rounded-lg text-sm hover:bg-[var(--muted-gold)]/90 transition-colors"
        >
          Upload
        </button>
      )}

      {uploaded && (
        <p className="text-[var(--affirmative-green)] text-sm flex items-center gap-2">
          <span>✓</span> {fileName} uploaded successfully.
        </p>
      )}
    </div>
  );
}
