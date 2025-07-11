import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Serve Decap CMS admin interface
  app.use("/admin", express.static(path.resolve(process.cwd(), "client", "public", "admin")));

  const httpServer = createServer(app);

  return httpServer;
}
