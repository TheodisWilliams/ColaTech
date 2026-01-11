# ColaTech Solutions - Marketing Website

Enterprise-grade marketing website for a Houston-area IT + web agency, built with Next.js App Router, TypeScript, Tailwind CSS, and Strapi CMS.

## Project Overview

ColaTech Solutions is a modern digital infrastructure firm providing:
- Websites & web applications
- Network upgrades (Wi-Fi, VLANs, VPN)
- IP camera installations
- Cable drops & PoE
- Security & backups
- Managed IT services

This project delivers a **dark-first, SaaS-inspired marketing site** with enterprise credibility and local service positioning.

---

## Documentation Structure

This project includes comprehensive design and technical specifications:

1. **[DESIGN_SPEC.md](DESIGN_SPEC.md)** - Complete UI/UX specification
   - Homepage section layouts and interactions
   - Responsive design patterns
   - Accessibility requirements
   - Performance targets

2. **[DESIGN_TOKENS.md](DESIGN_TOKENS.md)** - Design system
   - Color palette (forest green + grey scale)
   - Typography scale (Inter font)
   - Spacing, shadows, and animations
   - Tailwind configuration

3. **[NEXTJS_STRUCTURE.md](NEXTJS_STRUCTURE.md)** - Technical architecture
   - Complete folder structure
   - App Router organization
   - Configuration files
   - API routes

4. **[COMPONENTS.md](COMPONENTS.md)** - Component library
   - All UI components with props
   - Usage examples
   - Composition patterns
   - Animation utilities

5. **[STRAPI_SCHEMA.md](STRAPI_SCHEMA.md)** - CMS content types
   - Schema definitions
   - Field specifications
   - Relationships
   - API endpoints

6. **[COPY.md](COPY.md)** - Content and copywriting
   - Homepage copy for all sections
   - About and FAQ page content
   - Brand voice guidelines

7. **[STRAPI_EXAMPLES.json](STRAPI_EXAMPLES.json)** - Sample data
   - Example services, packages, case studies
   - JSON payloads for Strapi
   - Testimonials and FAQs

---

## Tech Stack

### Frontend
- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- **Zod** (validation)

### Backend
- **Strapi CMS** (content management)
- **PostgreSQL** or **SQLite** (Strapi database)

### Deployment
- **Vercel** (Next.js frontend)
- **Railway/Render** (Strapi backend)
- **Cloudflare** (CDN, DNS, email)

---

## Design Philosophy

### Visual Identity
- **Primary Color**: Forest Green (#0B3D2E)
- **Background**: Near-black (#0B0D10)
- **Surface**: Dark grey (#1B1F24)
- **Typography**: Inter (sans-serif)
- **UI Style**: Dark-first, 2xl rounded corners, subtle glow accents

### UX Goals
Within 5 seconds, visitors understand:
1. We build & manage business tech end-to-end
2. We are experienced professionals
3. It's easy to request a quote

### Brand Positioning
- NOT a "computer repair shop"
- Enterprise-grade infrastructure for small businesses
- Modern SaaS UI with local service edge
- Trustworthy, technical, premium

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Frontend Setup (Next.js)
```bash
# Clone repository
git clone <repo-url>
cd colatech-solutions

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Strapi URL

# Run development server
npm run dev
```

Visit: http://localhost:3000

### Backend Setup (Strapi)
```bash
# Create Strapi project
npx create-strapi-app@latest colatech-strapi --quickstart

cd colatech-strapi

# Start Strapi
npm run develop
```

Visit: http://localhost:1337/admin

Then:
1. Create admin user
2. Build content types from [STRAPI_SCHEMA.md](STRAPI_SCHEMA.md)
3. Add sample content from [STRAPI_EXAMPLES.json](STRAPI_EXAMPLES.json)
4. Configure permissions (public read access)
5. Generate API token for Next.js

---

## Project Structure

```
colatech-solutions/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx           # Homepage
│   │   ├── services/
│   │   ├── packages/
│   │   ├── work/
│   │   ├── about/
│   │   ├── faq/
│   │   ├── contact/
│   │   └── api/
│   ├── components/
│   │   ├── layout/            # Header, Footer, Navigation
│   │   ├── home/              # Homepage sections
│   │   ├── ui/                # Reusable UI components
│   │   └── shared/            # Utility components
│   ├── lib/                   # API clients, utilities
│   ├── types/                 # TypeScript definitions
│   ├── config/                # Site configuration
│   └── styles/
├── public/
│   ├── fonts/
│   ├── images/
│   └── icons/
└── [documentation files]
```

---

## Development Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Build
npm run build            # Production build
npm run start            # Start production server

# Quality
npm run lint             # Run ESLint
npm run type-check       # TypeScript validation
```

---

## Key Features

### Homepage Sections
1. **Hero** - Split layout with dashboard visual
2. **Services Grid** - 8 service cards (Strapi-driven)
3. **Pricing** - 3 featured tiers + comparison
4. **Process** - 4-step workflow
5. **Console Demo** - Live systems mock UI
6. **Case Studies** - 3 featured projects
7. **Trust** - Certifications, testimonials
8. **Service Area** - Houston locations
9. **Contact** - Quote form + alternate options

### Dynamic Pages
- Service detail pages (`/services/[slug]`)
- Case study pages (`/work/[slug]`)
- Location pages (`/locations/[slug]`)

### Forms & Interactions
- Quote request form with validation
- Multi-select service checkboxes
- Success states and error handling
- Calendly integration (optional)

---

## Performance Targets

- **Lighthouse Score**: 90+ (all metrics)
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### Optimization Strategies
- `next/image` for optimized images
- Self-hosted fonts with preload
- Code splitting for heavy components
- Static generation where possible
- ISR (Incremental Static Regeneration) for CMS content

---

## Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly (semantic HTML, ARIA)
- Focus states on all interactive elements
- Color contrast: 4.5:1 minimum
- `prefers-reduced-motion` support

---

## Deployment

### Vercel (Recommended for Next.js)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Environment variables needed:
- `NEXT_PUBLIC_STRAPI_API_URL`
- `STRAPI_API_TOKEN`
- `RESEND_API_KEY` (for contact form emails)

### Strapi Hosting Options
- **Railway**: Easy PostgreSQL + Strapi deployment
- **Render**: Free tier available
- **DigitalOcean**: App Platform or Droplet
- **Heroku**: Add-on for PostgreSQL

---

## Content Management

### Strapi Content Types
- **Services** - Service offerings with features and FAQs
- **Packages** - Pricing tiers with features
- **Case Studies** - Project showcases with results
- **Testimonials** - Client reviews
- **FAQs** - Categorized questions/answers
- **Locations** - Service area pages (SEO)
- **Site Settings** - Global site configuration

### Adding New Content
1. Log in to Strapi admin
2. Navigate to Content Manager
3. Create/edit entries
4. Publish when ready
5. Next.js will fetch on next build or revalidation

---

## Brand Assets

### Logo
- Wordmark + icon (forest green accent)
- SVG format for scalability
- Located in `/public/images/logo.svg`

### Colors
- **Forest Green**: #0B3D2E (CTAs, accents, links)
- **Black**: #0B0D10 (background)
- **Grey Scale**: #1B1F24 to #9AA4B2 (surfaces, text)

### Typography
- **Headings**: Inter Bold, tight tracking
- **Body**: Inter Regular, relaxed line-height
- **Labels**: Inter Medium, uppercase, wide tracking

---

## Contributing

### Code Style
- Use TypeScript for all new files
- Follow Prettier formatting (auto-format on save)
- Use Tailwind utility classes (avoid custom CSS)
- Component files use PascalCase
- Utility files use camelCase

### Component Guidelines
- Export prop interfaces
- Use `cn()` utility for conditional classes
- Include accessibility attributes
- Add hover/focus states
- Test on mobile and desktop

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push and create PR
git push origin feature/your-feature-name
```

---

## Support

For questions or issues:
- Review documentation in this repository
- Check [Next.js docs](https://nextjs.org/docs)
- Check [Strapi docs](https://docs.strapi.io)
- Contact project maintainer

---

## License

Proprietary - ColaTech Solutions © 2025

---

## Roadmap

### Phase 1: MVP (Current)
- [x] Complete design specification
- [x] Define component library
- [x] Strapi schema design
- [ ] Implement homepage sections
- [ ] Build UI component library
- [ ] Set up Strapi CMS
- [ ] Connect Next.js to Strapi

### Phase 2: Content & SEO
- [ ] Add all service pages
- [ ] Create case studies
- [ ] Write FAQ content
- [ ] Implement structured data (schema.org)
- [ ] Google Business Profile integration
- [ ] Local SEO optimization

### Phase 3: Enhancements
- [ ] Blog/news section
- [ ] Client portal login
- [ ] Online quote calculator
- [ ] Live chat integration
- [ ] Email marketing integration
- [ ] Analytics dashboard

---

**Built with modern web technologies for performance, scalability, and maintainability.**
