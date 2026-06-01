/**
 * Run People First migration via `netlify database connect --query`.
 * Generates a PowerShell script that executes each statement individually.
 */
const fs = require("fs");

const fullSql = fs.readFileSync("db/migrations/0001_people_first.sql", "utf8");

// Split on the drizzle statement-breakpoint marker
const statements = fullSql
  .split(/-->\s*statement-breakpoint/)
  .map((s) => s.replace(/^--.*$/gm, "").trim())
  .filter((s) => s.length > 0);

// Output a single combined SQL (semicolons already present in CREATE TABLE, 
// but ALTER TABLE lines don't have them consistently)
const combined = statements
  .map((s) => s.endsWith(";") ? s : s + ";")
  .join("\n");

fs.writeFileSync("db/migrations/_pf_combined.sql", combined, "utf8");
console.log(`Wrote ${statements.length} statements to db/migrations/_pf_combined.sql`);
console.log("Run: npx netlify-cli database connect");
console.log("Then paste the contents of _pf_combined.sql into the psql prompt.");
