# Seva Foundation NGO Website

## Overview

This is a modern, inspiring NGO website for Seva Foundation, an organization working in India focused on four core pillars: holistic education for children, women empowerment through employment and skills training, spiritual growth through Vedantic teachings, and environmental sustainability. The website features a comprehensive donation system, volunteer registration, contact forms, and showcases the organization's impact through testimonials and statistics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18 with TypeScript**: Type-safe component development with modern React features
- **Wouter Router**: Lightweight client-side routing for multi-page navigation (Home, About, Our Work, Get Involved, Stories, Contact)
- **Tailwind CSS**: Utility-first styling with custom color scheme (green #22c55e, saffron #f59e0b, blue #3b82f6) reflecting Indian cultural elements
- **Shadcn/UI Components**: Consistent, accessible component library for forms, dialogs, buttons, and UI elements
- **React Hook Form + Zod**: Form validation and submission for contact forms, volunteer registration, and donations
- **TanStack Query**: Server state management for API calls and data fetching
- **Responsive Design**: Mobile-first approach with tablet and desktop optimizations

### Backend Architecture
- **Express.js with TypeScript**: RESTful API server with type safety
- **In-Memory Storage**: Current implementation uses MemStorage class for data persistence (easily switchable to PostgreSQL)
- **Drizzle ORM**: Database abstraction layer with schema definitions for users, contacts, volunteers, donations, and newsletter subscriptions
- **Zod Validation**: Runtime type checking and validation for API endpoints
- **RESTful Endpoints**: `/api/contacts`, `/api/volunteers`, `/api/donations`, `/api/newsletter`

### Data Storage Solutions
- **Current**: In-memory storage using Map data structures for development
- **Production Ready**: PostgreSQL configuration available via Drizzle ORM and Neon database support
- **Schema Design**: Separate tables for contacts, volunteers, donations, newsletters with proper relationships and constraints

### Form Management
- **Contact Forms**: Multi-subject contact system with validation
- **Volunteer Registration**: Comprehensive forms with area of interest selection and skills input
- **Donation System**: Mock Razorpay integration with monthly recurring options and donor information collection
- **Newsletter Subscription**: Email collection with privacy compliance

### UI/UX Design Patterns
- **Indian Cultural Elements**: Sanskrit values integration, appropriate color schemes, cultural sensitivity
- **Soft Earthy Colors**: Green, saffron, blue, white tones reflecting Indian heritage
- **Clean Minimal Design**: Professional yet warm interface with smooth animations and hover effects
- **Accessibility**: Screen reader support, keyboard navigation, proper contrast ratios

## External Dependencies

### Frontend Libraries
- **@radix-ui/react-***: Comprehensive set of accessible UI components (accordion, dialog, dropdown, select, etc.)
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation integration
- **wouter**: Lightweight routing solution
- **clsx + tailwind-merge**: CSS class management utilities
- **lucide-react**: Icon library for consistent iconography

### Backend Dependencies
- **express**: Web application framework
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-zod**: Schema validation integration
- **@neondatabase/serverless**: PostgreSQL database connectivity

### Development Tools
- **Vite**: Build tool and development server with hot module replacement
- **TypeScript**: Type safety across frontend and backend
- **PostCSS + Autoprefixer**: CSS processing and browser compatibility
- **Tailwind CSS**: Utility-first CSS framework

### Payment Integration
- **Mock Razorpay**: Donation system ready for Indian payment gateway integration
- **Recurring Donations**: Monthly subscription support built into the donation schema

### Infrastructure
- **Replit Platform**: Development environment with built-in deployment capabilities
- **Environment Variables**: Database URL configuration for PostgreSQL connectivity
- **Static Asset Serving**: Express static file serving for production builds