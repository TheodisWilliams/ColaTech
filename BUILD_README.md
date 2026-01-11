# ColaTech Solutions - Production-Ready Website

A modern, SaaS-inspired marketing website for a Houston-based technology infrastructure company.

## ✨ Features

### Design
- **Dark-first UI** with forest green accent (#0B3D2E)
- **Enterprise aesthetic** - data center/SaaS inspired
- **Modern components** - rounded corners, subtle glows, grid layouts
- **Fully responsive** - mobile-first approach

### Technology
- **Next.js 14+** with App Router
- **TypeScript** - fully typed
- **Tailwind CSS** - utility-first styling
- **Strapi CMS** - headless content management
- **Framer Motion** - smooth animations
- **Server Components** - optimal performance

### Pages
- ✅ Homepage with hero, services, pricing, contact
- ✅ Services index and dynamic detail pages
- ✅ Packages/pricing page
- ✅ Contact form
- ✅ Responsive navigation
- ✅ SEO metadata

### Components
- **Interactive dashboard UI** in hero section
- **Service cards** with hover effects
- **Pricing tiers** (SaaS-style)
- **Contact form** with validation
- **Reusable UI kit** (Button, Card, Container)

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=your-token-here
```

### 3. Run Development Server

```bash
npm run dev
```

Open **http://localhost:3000**

---

## 📁 Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx             # Root layout with Header/Footer
│   ├── page.tsx               # Homepage
│   ├── services/
│   │   ├── page.tsx           # Services index
│   │   └── [slug]/page.tsx    # Service detail (dynamic)
│   ├── contact/page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Sticky header with nav
│   │   └── Footer.tsx         # Site footer
│   ├── home/
│   │   ├── HeroSection.tsx    # Hero with dashboard UI
│   │   ├── ServicesGrid.tsx   # Service cards grid
│   │   ├── PricingSection.tsx # Pricing tiers
│   │   └── ContactSection.tsx # Quote form
│   └── ui/
│       ├── Button.tsx         # Primary/Secondary variants
│       ├── Card.tsx           # Hover-enabled cards
│       └── Container.tsx      # Max-width wrapper
├── lib/
│   ├── strapi.ts              # Strapi API client
│   ├── utils.ts               # cn() helper
│   └── validations.ts         # Zod schemas
└── types/
    └── index.ts               # TypeScript interfaces
```

---

## 🎨 Design Tokens

### Colors

```
Forest Green:  #0B3D2E  (colatech-green)
Background:    #0B0D10  (colatech-black)
Grey 1:        #1B1F24  (colatech-grey-1)
Grey 2:        #2A3038  (colatech-grey-2)
Grey 3:        #9AA4B2  (colatech-grey-3)
```

### Tailwind Usage

```tsx
<div className="bg-colatech-grey-1 border-colatech-grey-2">
  <Button variant="primary">  {/* Forest green */}
    Request Quote
  </Button>
</div>
```

---

## 🔌 Strapi Integration

### Setup Strapi

```bash
# In separate directory
npx create-strapi-app@latest colatech-strapi --quickstart
cd colatech-strapi
npm run develop
```

Open **http://localhost:1337/admin**

### Create Content Types

See **[SETUP.md](SETUP.md)** for detailed instructions.

Content types needed:
- **Service** - Services offered
- **Package** - Pricing tiers
- **Case Study** - Project showcases
- **Testimonial** - Client reviews
- **FAQ** - Questions/answers

### Example Data

See `strapi-examples/` for sample API responses:
- `services-response.json`
- `packages-response.json`

---

## 📝 Key Components

### Hero Section
```tsx
// Auto-imports
import HeroSection from '@/components/home/HeroSection'

// Features:
// - Split layout (content + dashboard)
// - Tabbed dashboard UI (Network, Cameras, Website, Backups)
// - Animated status widgets
// - Primary/secondary CTAs
```

### Services Grid
```tsx
import ServicesGrid from '@/components/home/ServicesGrid'

// Features:
// - Fetches from Strapi
// - Fallback data if Strapi not set up
// - Hover-enabled cards
// - Links to detail pages
```

### Pricing Section
```tsx
import PricingSection from '@/components/home/PricingSection'

// Features:
// - 3 featured tiers
// - Middle tier highlighted
// - Bullet points from Strapi
// - CTA buttons
```

### Contact Form
```tsx
import ContactSection from '@/components/home/ContactSection'

// Features:
// - Multi-select services
// - Form validation
// - Success state
// - Responsive layout
```

---

## 🛠 Development

### Add New Component

```bash
# Create in src/components/ui/
touch src/components/ui/NewComponent.tsx
```

```tsx
import { cn } from '@/lib/utils'

export interface NewComponentProps {
  className?: string
}

export default function NewComponent({ className }: NewComponentProps) {
  return (
    <div className={cn('base-classes', className)}>
      {/* content */}
    </div>
  )
}
```

### Fetch from Strapi

```tsx
import { getAllServices } from '@/lib/strapi'

export default async function MyPage() {
  const services = await getAllServices()

  return (
    <div>
      {services.map(service => (
        <div key={service.id}>{service.attributes.title}</div>
      ))}
    </div>
  )
}
```

### Add New Page

```bash
mkdir src/app/my-page
touch src/app/my-page/page.tsx
```

```tsx
import type { Metadata } from 'next'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'My Page',
  description: 'Page description',
}

export default function MyPage() {
  return (
    <Container>
      <h1 className="text-5xl font-bold">My Page</h1>
    </Container>
  )
}
```

---

## 📦 Scripts

```bash
npm run dev         # Start dev server
npm run build       # Production build
npm run start       # Start production
npm run lint        # Run ESLint
npm run type-check  # TypeScript check
```

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Set environment variables in Vercel dashboard.

### Other Platforms

Works with:
- Netlify
- Cloudflare Pages
- Railway
- DigitalOcean App Platform

---

## 📚 Documentation

- **[SETUP.md](SETUP.md)** - Complete setup guide
- **[DESIGN_SPEC.md](DESIGN_SPEC.md)** - UI/UX specifications
- **[CLAUDE.md](CLAUDE.md)** - Quick reference

---

## ✅ What's Included

- ✅ Production-ready Next.js 14 app
- ✅ TypeScript configured
- ✅ Tailwind with custom colors
- ✅ Responsive components
- ✅ Strapi integration ready
- ✅ SEO metadata
- ✅ Accessible forms
- ✅ Dark theme
- ✅ Framer Motion animations
- ✅ Server components
- ✅ Example content
- ✅ Deployment ready

---

## 🎯 Next Steps

1. ✅ Install dependencies (`npm install`)
2. ✅ Run dev server (`npm run dev`)
3. ⏭ Set up Strapi (see [SETUP.md](SETUP.md))
4. ⏭ Add your content to Strapi
5. ⏭ Customize homepage copy
6. ⏭ Add real images
7. ⏭ Deploy to Vercel

---

## 🔧 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Strapi v4+
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Validation**: Zod
- **Deployment**: Vercel-ready

---

## 📸 Features Preview

### Homepage
- **Hero** with interactive dashboard UI
- **Services** grid with 8 services
- **Pricing** with 3 featured tiers
- **Contact** form with service selection

### Services
- **Index page** with all services
- **Detail pages** with features and CTAs
- **Dynamic routing** via Strapi slugs

### UI Components
- **Buttons**: Primary (green glow), Secondary, Ghost
- **Cards**: Hoverable, clickable
- **Forms**: Validated inputs, multi-select

---

**Ready to launch. Copy-paste ready. Production-grade.**

Built for ColaTech Solutions - Digital Infrastructure for Houston Businesses
