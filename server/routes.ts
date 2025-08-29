import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertVolunteerSchema, insertDonationSchema, insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      res.status(400).json({ success: false, error: "Invalid contact data" });
    }
  });

  // Volunteer application submission
  app.post("/api/volunteers", async (req, res) => {
    try {
      const validatedData = insertVolunteerSchema.parse(req.body);
      const volunteer = await storage.createVolunteer(validatedData);
      res.json({ success: true, volunteer });
    } catch (error) {
      res.status(400).json({ success: false, error: "Invalid volunteer data" });
    }
  });

  // Donation processing
  app.post("/api/donations", async (req, res) => {
    try {
      const validatedData = insertDonationSchema.parse(req.body);
      const donation = await storage.createDonation(validatedData);
      
      // In a real implementation, you would integrate with Razorpay or similar payment gateway here
      // For now, we'll just create the donation record
      
      res.json({ 
        success: true, 
        donation,
        paymentUrl: `https://checkout.razorpay.com/v1/checkout.js?amount=${donation.amount * 100}&currency=INR&order_id=${donation.id}`
      });
    } catch (error) {
      res.status(400).json({ success: false, error: "Invalid donation data" });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscription = await storage.getNewsletterByEmail(validatedData.email);
      if (existingSubscription) {
        return res.status(400).json({ success: false, error: "Email already subscribed" });
      }
      
      const newsletter = await storage.createNewsletter(validatedData);
      res.json({ success: true, newsletter });
    } catch (error) {
      res.status(400).json({ success: false, error: "Invalid email address" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
