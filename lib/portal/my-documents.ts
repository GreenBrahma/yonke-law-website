/**
 * People First portal — a person's own private documents.
 */
import { personPrefix, portalStore, type StoredItem } from "./store";

export const MAX_UPLOAD_BYTES = 20 * 1024 * 1024;
export const ALLOWED_TYPES: Record<string, string> = {
  "application/pdf": "PDF",
  "image/jpeg": "Photo",
  "image/png": "Photo",
  "image/heic": "Photo",
  "image/heif": "Photo",
  "image/webp": "Photo",
  "application/msword": "Word document",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Word document",
  "text/plain": "Text file",
};
export const DOC_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

export type MyDocument = { id: string; name: string; kind: string; size: number; addedOn: string };

export const docsPrefix = (userId: string) => `${personPrefix(userId)}documents/`;
export const docKey = (userId: string, id: string) => `${docsPrefix(userId)}${id}`;

function toDoc(item: StoredItem): MyDocument {
  let name = "Document";
  try {
    name = decodeURIComponent(item.meta.name || "Document");
  } catch {
    /* keep the fallback */
  }
  return {
    id: item.key.split("/").pop() || "",
    name,
    kind: item.meta.kind || "File",
    size: item.size,
    addedOn: item.uploaded,
  };
}

export async function listMyDocuments(userId: string): Promise<MyDocument[]> {
  const store = await portalStore();
  const items = await store.list(docsPrefix(userId));
  return items.map(toDoc).sort((a, b) => b.addedOn.localeCompare(a.addedOn));
}
