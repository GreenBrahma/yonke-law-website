"use client";

import { useState } from "react";

export function TalkToUsFileInput() {
  const [fileCount, setFileCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setFileCount(0);
      setErrorMsg("");
      e.target.setCustomValidity("");
      return;
    }

    setFileCount(files.length);
    let totalSize = 0;
    const allowedExtensions = [".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx"];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      totalSize += file.size;
      const ext = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
      if (!allowedExtensions.includes(ext) || file.name.indexOf(".") === -1) {
        const err = `Invalid file type: ${file.name}. Accepted: PDF, JPG, PNG, DOC, DOCX.`;
        setErrorMsg(err);
        e.target.setCustomValidity(err);
        return;
      }
    }

    if (totalSize > 25 * 1024 * 1024) {
      const err = "Total file size exceeds 25 MB.";
      setErrorMsg(err);
      e.target.setCustomValidity(err);
      return;
    }

    setErrorMsg("");
    e.target.setCustomValidity("");
  }

  return (
    <div>
      <label htmlFor="attachment" className="block text-sm text-steel-silver mb-2">
        Upload supporting documents (optional)
      </label>
      <input
        type="file"
        id="attachment"
        name="attachment"
        multiple
        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
        onChange={handleChange}
        className="w-full text-steel-silver file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-steel-silver/10 file:text-chrome-highlight hover:file:bg-steel-silver/20 cursor-pointer transition-colors"
      />
      {errorMsg ? (
        <p className="text-signal-red text-xs mt-2">{errorMsg}</p>
      ) : (
        <p className="text-steel-silver/60 text-xs mt-2">
          Accepted: PDF, JPG, PNG, DOC, DOCX. Max 25 MB total.
          {fileCount > 0 && (
            <span className="block mt-1 text-chrome-highlight">
              {fileCount} file{fileCount !== 1 ? "s" : ""} selected
            </span>
          )}
        </p>
      )}
    </div>
  );
}
