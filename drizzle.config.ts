import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: ["./db/schema/spotlight.ts", "./db/schema/people-first.ts"],
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
