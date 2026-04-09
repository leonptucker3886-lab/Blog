// @ts-ignore
import { Database } from "bun:sqlite";
import fs from "fs";
import path from "path";

const sqlite = new Database("sqlite.db");

// Read migration files and execute them
const migrationsDir = path.join(process.cwd(), "src/db/migrations");
const migrationFiles = fs.readdirSync(migrationsDir).sort();

for (const file of migrationFiles) {
  if (file.endsWith('.sql')) {
    const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf-8');
    const statements = sql.split('--> statement-breakpoint');
    for (const statement of statements) {
      const trimmed = statement.trim();
      if (trimmed) {
        sqlite.exec(trimmed);
      }
    }
  }
}

console.log('Migrations completed');
sqlite.close();