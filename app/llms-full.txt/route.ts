import { buildLlmsFullTxt } from "@/lib/llms";

/* /llms-full.txt — full text of the site's reference content for
   AI systems. Built once at build time from the site's own data. */

export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
