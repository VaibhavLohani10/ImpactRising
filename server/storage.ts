import { type User, type InsertUser, type Contact, type InsertContact, type Volunteer, type InsertVolunteer, type Donation, type InsertDonation, type Newsletter, type InsertNewsletter } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  createVolunteer(volunteer: InsertVolunteer): Promise<Volunteer>;
  createDonation(donation: InsertDonation): Promise<Donation>;
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterByEmail(email: string): Promise<Newsletter | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private volunteers: Map<string, Volunteer>;
  private donations: Map<string, Donation>;
  private newsletters: Map<string, Newsletter>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.volunteers = new Map();
    this.donations = new Map();
    this.newsletters = new Map();
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

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createVolunteer(insertVolunteer: InsertVolunteer): Promise<Volunteer> {
    const id = randomUUID();
    const volunteer: Volunteer = { 
      ...insertVolunteer, 
      id, 
      createdAt: new Date() 
    };
    this.volunteers.set(id, volunteer);
    return volunteer;
  }

  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const id = randomUUID();
    const donation: Donation = { 
      ...insertDonation, 
      id, 
      status: "pending",
      createdAt: new Date() 
    };
    this.donations.set(id, donation);
    return donation;
  }

  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id, 
      isActive: true,
      createdAt: new Date() 
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === email,
    );
  }
}

export const storage = new MemStorage();
