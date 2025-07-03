# Riverview Commons Tenant Hub

## Overview

This is a modern tenant hub website for Riverview Commons, a Class-A office building in Maple Grove, Ontario. The application is built as a static site generator using React 18, Vite, and Tailwind CSS, designed to serve building tenants with essential resources, amenities information, emergency procedures, and news updates.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5 for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design tokens matching building brand
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **State Management**: Minimal local state with React Hook Form for form handling
- **Data Fetching**: TanStack Query for server state management (though currently using static data)

### Backend Architecture
- **Server**: Express.js with TypeScript (development only)
- **Database**: PostgreSQL with Drizzle ORM (configured but not actively used)
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Vite dev server with HMR support

### Build Strategy
- **Static Generation**: All pages are statically generated at build time
- **Content Management**: JSON files for structured data, designed for future CMS integration
- **Asset Management**: Vite handles asset optimization and bundling
- **Deployment**: Configured for static hosting on Vercel

## Key Components

### Core UI Components
- **Layout**: Responsive layout with navigation, main content, and footer
- **HeroBanner**: Hero section with call-to-action buttons
- **QuickFacts**: Building statistics display
- **AmenityCard**: Showcase building amenities with images and hours
- **NewsCard**: News article preview cards
- **EmergencyAccordion**: Collapsible emergency procedure steps
- **ResourceList**: Document and resource links
- **ContactForm**: Contact form with validation

### Page Components
- **Home**: Landing page with hero, amenities, and latest news
- **Resources**: Tenant handbook and document downloads
- **News**: News listing and individual post pages
- **Emergency**: Emergency procedures and contact information
- **NotFound**: 404 error page

### Data Management
- **Static Data**: JSON files in `/client/src/data/` for building info and news
- **Schema Validation**: Zod schemas for type safety and validation
- **Form Handling**: React Hook Form with Zod resolvers for validation

## Data Flow

### Static Content Flow
1. JSON data files are imported at build time
2. Components consume data directly from imports
3. No runtime API calls for content data
4. Images sourced from Unsplash with fallback handling

### Form Submission Flow
1. Contact form validates input locally using Zod
2. On submission, opens mailto link with pre-filled content
3. Toast notifications provide user feedback
4. Form resets after successful submission

### Navigation Flow
1. Wouter handles client-side routing
2. Pages are lazy-loaded for optimal performance
3. Navigation state managed locally
4. Mobile-responsive hamburger menu

## External Dependencies

### Production Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Routing**: Wouter for lightweight routing
- **Data Fetching**: TanStack React Query
- **Validation**: Zod for schema validation
- **Forms**: React Hook Form with Zod resolvers
- **Utilities**: date-fns for date formatting

### Development Dependencies
- **Build Tools**: Vite, TypeScript, ESBuild
- **Server**: Express.js, tsx for development
- **Database**: Drizzle ORM, PostgreSQL (Neon), connect-pg-simple
- **Development**: Replit plugins for development environment

### External Services
- **Images**: Unsplash API for placeholder images
- **Fonts**: Google Fonts (Inter font family)
- **Email**: System mailto links for contact forms
- **Future Integrations**: Planned Flow Tenant Portal integration

## Deployment Strategy

### Build Process
1. **Development**: `npm run dev` starts Vite dev server with Express backend
2. **Build**: `npm run build` creates optimized static assets
3. **Production**: `npm start` serves built application

### Static Hosting
- **Target Platform**: Vercel static hosting
- **Asset Optimization**: Vite handles code splitting and asset optimization
- **CDN Delivery**: Static assets served from global CDN
- **Environment Variables**: Build-time environment configuration

### CMS Integration
- **Content Management**: Decap CMS integrated for building announcements
- **Admin Interface**: Available at `/admin` for property managers
- **Announcement System**: Dynamic announcements displayed on home page
- **Git-based Workflow**: Content updates through CMS commits to repository

## Changelog

```
Changelog:
- July 03, 2025. Initial setup
- July 03, 2025. Added Decap CMS functionality for building announcements management
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```