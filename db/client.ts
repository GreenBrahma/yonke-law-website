/**
 * Spotlight Corner — Database Client
 *
 * Google Cloud SQL PostgreSQL connection via Drizzle ORM + node-postgres.
 * Connection string from env var DATABASE_URL (standard Postgres format with sslmode=require).
 *
 * Usage:
 *   import { db } from "@/db/client";
 *   const rows = await db.select().from(spotlightSignals);
 *
 * The client is lazy-initialized so Next.js build succeeds without
 * DATABASE_URL present. The error is deferred to the first runtime call.
 *
 * Pool max: 1 — Netlify Functions are short-lived and Cloud SQL has
 * tight connection limits on db-f1-micro instances.
 */

import { Pool } from "pg";
import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "./schema/spotlight";

let _db: NodePgDatabase<typeof schema> | null = null;
let _pool: Pool | null = null;

function getDb(): NodePgDatabase<typeof schema> {
  if (_db) return _db;

  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Configure it in .env.local for development or in Netlify environment variables for production."
    );
  }

  _pool = new Pool({
    connectionString: url,
    max: 1,
    ssl: { rejectUnauthorized: false },
  });

  _db = drizzle(_pool, { schema });
  return _db;
}

/**
 * Lazy-initialized database client.
 * Access via property proxy so callers use `db.select()...` naturally.
 */
export const db = new Proxy({} as NodePgDatabase<typeof schema>, {
  get(_target, prop, receiver) {
    const instance = getDb();
    const value = Reflect.get(instance, prop, receiver);
    if (typeof value === "function") {
      return value.bind(instance);
    }
    return value;
  },
});
