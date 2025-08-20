import { type User, type InsertUser, type IdeaSubmission, type InsertIdeaSubmission } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createIdeaSubmission(submission: InsertIdeaSubmission): Promise<IdeaSubmission>;
  getIdeaSubmissions(): Promise<IdeaSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private ideaSubmissions: Map<string, IdeaSubmission>;

  constructor() {
    this.users = new Map();
    this.ideaSubmissions = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createIdeaSubmission(insertSubmission: InsertIdeaSubmission): Promise<IdeaSubmission> {
    const id = randomUUID();
    const submission: IdeaSubmission = { 
      ...insertSubmission, 
      id,
      createdAt: new Date()
    };
    this.ideaSubmissions.set(id, submission);
    return submission;
  }

  async getIdeaSubmissions(): Promise<IdeaSubmission[]> {
    return Array.from(this.ideaSubmissions.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
}

export const storage = new MemStorage();
