import { CASE_TYPES } from "@/lib/case-types";

/** Shared "What happened?" dropdown used by every intake form. */
export function CaseTypeSelect({ id, className }: { id: string; className?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-steel-silver mb-2">
        What happened?
      </label>
      <select
        id={id}
        name="case_type"
        required
        defaultValue=""
        className={
          className ??
          "w-full bg-obsidian-graphite border border-steel-silver/20 rounded-lg px-4 py-3 text-chrome-highlight focus:outline-none focus:border-muted-gold/50 transition-colors"
        }
      >
        <option value="" disabled>
          Choose the closest match
        </option>
        {CASE_TYPES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
