# Overview

This is a modern B2B web platform for "Nils Holger Design," a Scandinavian interior design company specializing in public spaces and commercial projects. The project specification emphasizes professional yet warm branding, positioned as a reliable partner for hotel owners, restaurateurs, property developers, and office managers seeking tailored interior solutions.

**Key Brand Identity:**
- Professional yet warm and human
- Flexible and solution-oriented  
- High quality with sustainability focus
- Clean, minimalist Scandinavian simplicity

**Target Audience:** B2B clients including hotel owners, restaurateurs, property developers, and office managers

**Updated Website Structure (Jan 2025):**
1. Start/Hero - Full-width slideshow with logo and tagline
2. Intro - Full-width section with company welcome and mission statement
3. Vår Process - Interactive accordion cards showing 4-step process
4. Services - 7 expandable service cards with descriptions
5. Products - Standard Products + In-House Manufacturing categories
6. Before & After - Project transformation slider
7. Reference Projects - Year-by-year timeline with sector filters
8. Partners - Brand logos and collaboration opportunities
9. Career & Internship - Student collaboration section
10. About Us - Vision, story, team with yellow-bordered profile images
11. Contact - Google Maps integration + booking form
12. Footer - Complete site navigation and social links

**Navigation Design:**
- Dark brown (#2B2B2B) full-width header
- Logo with warm golden brown (#AD8C44) rounded background
- Right-aligned navigation with sticky "Boka gratis konsultation" button
- Language toggle (SV/EN) in light yellow box
- Mobile hamburger menu with full-width dark dropdown

**Key Features:**
- Bilingual support (Swedish/English)
- Expandable service and product cards with "Läs mer" links
- Year-based project timeline with sector filtering
- Sticky CTA button that scales on mobile
- Google Maps integration at Birger Jarlsgatan 99
- Career section for student partnerships

# User Preferences

Preferred communication style: Simple, everyday language.
Work approach: Execute exact commands only - no suggestions or additional changes unless explicitly requested.

# System Architecture

## Frontend Architecture
The frontend is built using **React 18** with **TypeScript** in a **Vite** development environment. The application uses **wouter** for client-side routing instead of React Router, providing a lightweight routing solution. State management is handled through **TanStack React Query** for server state and React's built-in Context API for application state like language preferences.

The UI is constructed using **shadcn/ui** components built on top of **Radix UI** primitives, providing accessible and customizable components. **Tailwind CSS** handles styling with a custom design system featuring Scandinavian-inspired colors and typography. The application supports both English and Swedish languages through a custom translation system.

## Backend Architecture
The backend is an **Express.js** server written in TypeScript that serves both API endpoints and static files. The server uses **ESM modules** and is structured with separate route handlers and storage abstraction layers. The API provides endpoints for contact form submissions and data retrieval for projects, services, and products.

Currently, the backend uses an in-memory storage implementation for development purposes, with interfaces defined for easy migration to a persistent database solution.

## Data Storage Solutions
The application is configured to use **PostgreSQL** as the primary database with **Drizzle ORM** for type-safe database operations. The database configuration points to **Neon Database** as the hosting provider. Database schemas are defined for users, projects, services, products, and contacts with proper relationships and constraints.

Migration files are managed through Drizzle Kit, and the schema includes support for JSON fields for flexible data storage (like project tags). The current implementation uses a memory storage adapter for development, but the architecture supports easy swapping to the PostgreSQL implementation.

## Authentication and Authorization
The application structure includes user authentication schemas and session management setup using **connect-pg-simple** for PostgreSQL session storage. However, the current implementation appears to be primarily a public-facing website without active authentication requirements for end users.

## External Dependencies
The application integrates with several external services and libraries:

- **Neon Database** (@neondatabase/serverless) for PostgreSQL hosting
- **Radix UI** components for accessible UI primitives
- **Lucide React** for consistent iconography
- **React Hook Form** with **Zod** validation for form handling
- **date-fns** for date manipulation
- **Embla Carousel** for image sliders and carousels

The build process uses **Vite** for development and **esbuild** for production bundling, with custom Replit integration plugins for development environment support. The application is configured for deployment with separate client and server build outputs.