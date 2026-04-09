import { createDatabase } from "@kilocode/app-builder-db";
import * as schema from "./schema";

let dbInstance: ReturnType<typeof createDatabase> | null = null;

function getDb() {
  if (!dbInstance) {
    dbInstance = createDatabase(schema);
  }
  return dbInstance;
}

export const db = new Proxy({} as ReturnType<typeof createDatabase>, {
  get(target, prop) {
    const db = getDb();
    return db[prop as keyof typeof db];
  },
});