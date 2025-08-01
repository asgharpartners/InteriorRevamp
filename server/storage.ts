import { 
  type User, 
  type InsertUser, 
  type Project, 
  type InsertProject,
  type Service, 
  type InsertService,
  type Product, 
  type InsertProduct,
  type Contact, 
  type InsertContact 
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  getServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
  
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private projects: Map<string, Project>;
  private services: Map<string, Service>;
  private products: Map<string, Product>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.services = new Map();
    this.products = new Map();
    this.contacts = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample projects
    const sampleProjects: InsertProject[] = [
      {
        title: "Hotel Clarion Renovation",
        description: "Complete lobby and guest room renovation with custom furniture and lighting design.",
        category: "hotel",
        year: 2023,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        tags: ["Hotel", "Commercial"]
      },
      {
        title: "Tech Startup Office",
        description: "Open-plan workspace design promoting collaboration and creativity.",
        category: "office", 
        year: 2023,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        tags: ["Office", "Corporate"]
      }
    ];

    sampleProjects.forEach(project => {
      const id = randomUUID();
      this.projects.set(id, { ...project, id });
    });

    // Sample services
    const sampleServices: InsertService[] = [
      {
        title: "Project Management",
        description: "Comprehensive oversight of your interior design project from conception to completion.",
        longDescription: "Our experienced project managers coordinate all aspects of your design project, ensuring timelines are met, budgets are maintained, and quality standards are exceeded.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
        icon: "compass"
      }
    ];

    sampleServices.forEach(service => {
      const id = randomUUID();
      this.services.set(id, { ...service, id });
    });
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

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }

  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = randomUUID();
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.category === category
    );
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date().toISOString()
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
