import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  subtitle: text("subtitle"),
  content: text("content").notNull(),
  slug: text("slug").notNull().unique(),
  tags: text("tags"), // JSON string array
  readTime: text("read_time"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});