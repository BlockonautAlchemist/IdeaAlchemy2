# IdeaAlchemy Landing Page

## Overview

IdeaAlchemy is a landing page application for a productized service that transforms ideas into AI-powered prototypes within a week. The application features a modern dark-themed design with mystical/alchemy-inspired elements, built using a full-stack architecture with React frontend and Express backend. The service offers fixed-price prototype development with complete code ownership and documentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for the alchemy theme
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution in development
- **Build System**: ESBuild for server bundling, Vite for client bundling
- **Storage**: In-memory storage implementation with interface for future database integration

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Definition**: Shared schema between client and server using Drizzle and Zod
- **Current Implementation**: Memory-based storage for development
- **Future Database**: PostgreSQL with Neon Database integration ready

### Design System
- **Theme**: Dark mode with alchemy-inspired color palette
- **Colors**: Deep dark background (#0B0B12), gold accents (#FED66D), mystical purple (#AD19D1), aqua glow (#5CFBF7)
- **Typography**: Inter for UI, Playfair Display for headings
- **Components**: Comprehensive UI component library with consistent theming

### Form Handling
- **Validation**: Zod schemas for both client and server validation
- **Submission**: Idea intake form with fields for name, email, idea description, AI type, timeline, and package selection
- **Error Handling**: Comprehensive error states and user feedback

## External Dependencies

### UI and Design
- **Radix UI**: Component primitives for accessibility and behavior
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **React Hook Form**: Form handling and validation
- **Class Variance Authority**: Component variant management

### Development and Build Tools
- **Vite**: Frontend build tool and development server
- **TSX**: TypeScript execution for development
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS

### Database and ORM
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **Neon Database**: Serverless PostgreSQL provider (configured but not actively used)
- **Drizzle Kit**: Database migration and schema management tools

### Server and API
- **Express.js**: Web application framework
- **CORS**: Cross-origin resource sharing middleware
- **Compression**: Response compression middleware

### Fonts and Assets
- **Google Fonts**: Inter and Playfair Display font families
- **Font Awesome**: Icon library for additional icons (configured)

### Development Experience
- **Replit Plugins**: Runtime error overlay and cartographer for Replit environment
- **TypeScript**: Type checking and development experience
- **Path Aliases**: Configured for clean import paths (@/, @shared/, @assets/)