# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ColaTech Solutions** is a modern marketing website for a Houston-area IT and web services agency. The site positions the company as an enterprise-grade digital infrastructure provider (NOT a "computer repair shop") offering websites, network upgrades, security systems, and managed IT services.

**Tech Stack**:
- Frontend: Next.js 14+ (App Router), TypeScript, Tailwind CSS
- Backend: Strapi CMS (content types for services, packages, case studies, testimonials, FAQs)
- Deployment: Vercel (frontend) + Railway/Render (Strapi backend)

**Design System**:
- Dark-first UI with forest green accent (#0B3D2E)
- Near-black background (#0B0D10), grey surfaces (#1B1F24)
- Inter font, 2xl rounded corners, subtle glow effects
- SaaS-inspired UI (Stripe/Linear/Vercel aesthetic)

## Development Commands

```bash
# Frontend (Next.js)
npm run dev              # Start dev server (localhost:3000)
npm run build            # Production build
npm run start            # Start production server
npm run lint             # Run ESLint
npm run type-check       # TypeScript validation

# Backend (Strapi) - in separate directory
cd colatech-strapi
npm run develop          # Start Strapi (localhost:1337/admin)
npm run build            # Build Strapi admin
npm run start            # Production Strapi
```

## Architecture

### Folder Structure
```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage (composed of home/* sections)
│   ├── services/[slug]/   # Dynamic service pages (Strapi)
│   ├── packages/          # Pricing page
│   ├── work/[slug]/       # Case study pages (Strapi)
│   ├── about/             # About page
│   ├── faq/               # FAQ page (Strapi)
│   ├── contact/           # Quote request form
│   └── api/quote/         # Form submission endpoint
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   ├── home/              # Homepage sections (Hero, Services, Pricing, etc.)
│   ├── ui/                # Reusable components (Button, Card, Form fields)
│   └── shared/            # Utilities (Container, AnimateOnScroll)
├── lib/
│   ├── strapi.ts          # Strapi API client (fetch functions)
│   ├── utils.ts           # Utility functions (cn, formatPhone, etc.)
│   └── validations.ts     # Zod schemas for forms
├── types/                 # TypeScript interfaces (Strapi content types)
└── config/
    └── site.ts            # Site metadata, nav links, contact info
```

### Key Patterns

**Data Fetching**:
- Use Server Components (default in App Router) for Strapi data
- Fetch functions in `lib/strapi.ts`: `getAllServices()`, `getServiceBySlug()`, etc.
- Set revalidation: `next: { revalidate: 60 }` for ISR

**Styling**:
- Tailwind utility classes only (avoid custom CSS)
- Use `cn()` utility from `lib/utils.ts` for conditional classes
- Component variants via props (e.g., `Button` has `variant` and `size` props)

**Components**:
- Homepage sections are in `components/home/` (e.g., `HeroSection.tsx`)
- Each section is a Server Component that fetches its own data
- Reusable UI components in `components/ui/` with clear prop interfaces

**Forms**:
- Use Zod for validation (`lib/validations.ts`)
- POST to `/api/quote` endpoint
- Return JSON: `{ success: boolean, message?: string, errors?: array }`

**Icons**:
- Use Lucide React: `import { Wifi, Shield, Camera } from 'lucide-react'`
- Standard size: `className="w-6 h-6 text-forest-500"`

### Strapi Integration

**Content Types**:
- `services` - Service offerings with features, FAQs
- `packages` - Pricing tiers with features and CTAs
- `case-studies` - Project showcases with results
- `testimonials` - Client reviews
- `faqs` - Categorized questions/answers
- `locations` - Service area pages (SEO)

**API Endpoints**:
```typescript
// lib/strapi.ts
export async function getAllServices() {
  return fetchAPI('/services?populate=*')
}

export async function getServiceBySlug(slug: string) {
  return fetchAPI(`/services?filters[slug][$eq]=${slug}&populate=*`)
}
```

**Environment Variables**:
```bash
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=your-api-token
```

### Homepage Structure

The homepage (`app/page.tsx`) imports and composes these sections:
1. `HeroSection` - Split layout with dashboard visual
2. `ServicesGrid` - 8 service cards (Strapi-driven)
3. `PricingSection` - 3 featured pricing tiers
4. `ProcessSection` - 4-step workflow
5. `ConsoleDemo` - Mock operations dashboard
6. `CaseStudiesSection` - Featured project cards
7. `TrustSection` - Testimonials and credibility
8. `ServiceAreaSection` - Houston locations
9. `ContactSection` - Quote form

Each section is self-contained and can be edited independently.

## Important Conventions

### TypeScript
- Export all prop interfaces (e.g., `export interface ButtonProps { ... }`)
- Use strict mode
- Avoid `any` types

### Accessibility
- Include ARIA labels for icon-only buttons
- Ensure keyboard navigation works (focus states)
- Use semantic HTML (`button`, `nav`, `article`, etc.)
- Respect `prefers-reduced-motion`

### Performance
- Use `next/image` for all images
- Lazy load below-the-fold sections (dynamic imports)
- Keep components small and focused
- Use React.memo sparingly (measure first)

### Responsive Design
- Mobile-first approach (default styles are mobile)
- Breakpoints: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- Stack grids on mobile, expand on desktop
- Test on actual devices

## Documentation

Comprehensive design and technical specs are in:
- `DESIGN_SPEC.md` - UI/UX specification
- `DESIGN_TOKENS.md` - Color palette, typography, spacing
- `NEXTJS_STRUCTURE.md` - Folder structure and config files
- `COMPONENTS.md` - Component library with props
- `STRAPI_SCHEMA.md` - CMS content type definitions
- `COPY.md` - Homepage and page content
- `STRAPI_EXAMPLES.json` - Sample data payloads

Refer to these docs when implementing features.

## Common Tasks

### Adding a New Component
1. Create file in `src/components/ui/ComponentName.tsx`
2. Define and export props interface
3. Use Tailwind classes, avoid custom CSS
4. Add hover/focus states for interactive elements
5. Test on mobile and desktop

### Adding a New Service
1. Log in to Strapi admin (localhost:1337/admin)
2. Go to Content Manager → Services → Create new entry
3. Fill in all fields (title, slug, icon, descriptions, etc.)
4. Publish
5. Service will appear on homepage and have detail page at `/services/[slug]`

### Updating Colors/Tokens
1. Edit `tailwind.config.ts` (colors, spacing, shadows)
2. Restart dev server for Tailwind changes to take effect
3. Use semantic color names (e.g., `bg-grey-900` not `bg-[#1B1F24]`)

### Deploying
```bash
# Frontend to Vercel
vercel

# Strapi to Railway (first time)
railway login
railway init
railway up

# Set environment variables in Vercel dashboard
```

## Brand Voice

When writing copy:
- Be confident and technical, not salesy
- Use active voice ("We design networks" not "Networks are designed")
- Avoid fluff and jargon overload
- Focus on outcomes ("Eliminate dead zones" not "Improve connectivity")
- Show expertise without arrogance
