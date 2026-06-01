/**
 * People First — Database Client
 *
 * Extends the existing Spotlight DB client with People First schema.
 * Same PostgreSQL connection (DATABASE_URL), shared pool.
 *
 * Usage:
 *   import { db } from "@/db/client";
 *   // Spotlight tables
 *   const signals = await db.select().from(spotlightSignals);
 *   // People First tables
 *   const cases = await db.select().from(pfCases);
 */

import { Pool } from "pg";
import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import * as spotlightSchema from "./schema/spotlight";
import * as pfSchema from "./schema/people-first";

const schema = { ...spotlightSchema, ...pfSchema };

let _db: NodePgDatabase<typeof schema> | null = null;
let _pool: Pool | null = null;

function getPool(): Pool {
  if (_pool) return _pool;

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

  return _pool;
}

function getDb(): NodePgDatabase<typeof schema> {
  if (_db) return _db;
  _db = drizzle(getPool(), { schema });
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

/**
 * Raw pool export for Auth.js adapter (needs Pool, not Drizzle).
 */
export { getPool };
