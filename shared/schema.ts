import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const ideaSubmissions = pgTable("idea_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  idea: text("idea").notNull(),
  aiType: text("ai_type"),
  timeline: text("timeline").notNull(),
  package: text("package").notNull(),
  additional: text("additional"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertIdeaSubmissionSchema = createInsertSchema(ideaSubmissions).pick({
  name: true,
  email: true,
  idea: true,
  aiType: true,
  timeline: true,
  package: true,
  additional: true,
}).extend({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  idea: z.string().min(10, "Please provide more details about your idea"),
  timeline: z.string().min(1, "Please select a timeline"),
  package: z.string().min(1, "Please select a package"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertIdeaSubmission = z.infer<typeof insertIdeaSubmissionSchema>;
export type IdeaSubmission = typeof ideaSubmissions.$inferSelect;
