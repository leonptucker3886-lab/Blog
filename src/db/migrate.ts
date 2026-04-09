import { runMigrations } from "@kilocode/app-builder-db";
import { db } from "./index";

const dbUrl = process.env.DB_URL;
const dbToken = process.env.DB_TOKEN;

if (!dbUrl || !dbToken) {
  console.log('Database environment variables not set, skipping migrations');
  process.exit(0);
}

await runMigrations(db, {}, { migrationsFolder: "./src/db/migrations" });