import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertIdeaSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Idea submission endpoint
  app.post("/api/idea-submissions", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertIdeaSubmissionSchema.parse(req.body);
      
      // Store the submission
      const submission = await storage.createIdeaSubmission(validatedData);
      
      // Return success response
      res.status(201).json({
        message: "Idea submission received successfully",
        id: submission.id
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error('Error creating idea submission:', error);
        res.status(500).json({
          message: "Internal server error"
        });
      }
    }
  });

  // Get all submissions (for admin purposes)
  app.get("/api/idea-submissions", async (req, res) => {
    try {
      const submissions = await storage.getIdeaSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error('Error fetching idea submissions:', error);
      res.status(500).json({
        message: "Internal server error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
