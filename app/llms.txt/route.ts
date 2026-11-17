import { buildLlmsTxt } from "@/lib/llms";

/* /llms.txt — Markdown index of the site for AI systems.
   Built once at build time from the site's own content data. */

export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
