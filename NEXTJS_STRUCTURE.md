# ColaTech Solutions - Next.js App Router Structure

## 3. PROJECT FOLDER STRUCTURE

```
colatech-solutions/
├── .env.local                    # Environment variables (Strapi API URL, etc.)
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── public/
│   ├── fonts/                    # Self-hosted Inter font files
│   │   ├── inter-var.woff2
│   │   └── inter-var-latin.woff2
│   ├── images/
│   │   ├── logo.svg              # ColaTech logo
│   │   ├── logo-icon.svg         # Logo icon only
│   │   └── og-image.png          # Default Open Graph image
│   └── icons/
│       └── favicon.ico
│
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout (font, metadata, providers)
│   │   ├── page.tsx              # Homepage
│   │   ├── globals.css           # Global styles, Tailwind imports
│   │   ├── not-found.tsx         # 404 page
│   │   ├── error.tsx             # Error boundary
│   │   │
│   │   ├── services/
│   │   │   ├── page.tsx          # Services index page
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Dynamic service detail page
│   │   │
│   │   ├── packages/
│   │   │   └── page.tsx          # Packages/pricing page
│   │   │
│   │   ├── work/
│   │   │   ├── page.tsx          # Case studies index
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Dynamic case study detail
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   │
│   │   ├── faq/
│   │   │   └── page.tsx          # FAQ page (Strapi-driven)
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact/quote form page
│   │   │
│   │   ├── locations/
│   │   │   ├── page.tsx          # Locations index
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Dynamic location pages (SEO)
│   │   │
│   │   └── api/                  # API routes
│   │       └── quote/
│   │           └── route.ts      # POST endpoint for quote form
│   │
│   ├── components/               # React components
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Sticky header with nav
│   │   │   ├── Footer.tsx        # Site footer
│   │   │   ├── Navigation.tsx    # Desktop nav links
│   │   │   └── MobileMenu.tsx    # Mobile hamburger menu
│   │   │
│   │   ├── home/                 # Homepage-specific sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── DashboardVisual.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── ConsoleDemo.tsx
│   │   │   ├── CaseStudiesSection.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   ├── ServiceAreaSection.tsx
│   │   │   └── ContactSection.tsx
│   │   │
│   │   ├── ui/                   # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── PricingTier.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── CaseStudyCard.tsx
│   │   │   ├── Testimonial.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   ├── Select.tsx
│   │   │   └── Form.tsx
│   │   │
│   │   └── shared/               # Shared utility components
│   │       ├── SectionHeader.tsx
│   │       ├── Container.tsx
│   │       ├── LoadingSpinner.tsx
│   │       └── AnimateOnScroll.tsx
│   │
│   ├── lib/                      # Utilities and helpers
│   │   ├── strapi.ts             # Strapi API client
│   │   ├── api.ts                # Generic API helpers
│   │   ├── utils.ts              # Utility functions (cn, etc.)
│   │   └── validations.ts        # Form validation schemas (Zod)
│   │
│   ├── types/                    # TypeScript type definitions
│   │   ├── strapi.ts             # Strapi content type interfaces
│   │   ├── components.ts         # Component prop types
│   │   └── index.ts              # Shared types
│   │
│   ├── config/                   # Configuration files
│   │   ├── site.ts               # Site metadata, nav links, contact info
│   │   └── constants.ts          # App-wide constants
│   │
│   └── styles/                   # Additional styles (if needed)
│       └── animations.css        # Custom animations
│
├── .cursorrules                  # Cursor IDE rules (optional)
└── README.md                     # Project documentation
```

---

## Key Files Breakdown

### Root Configuration Files

#### `next.config.js`
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_STRAPI_URL || 'localhost',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
  // Enable if using external image CDN
  // domains: ['res.cloudinary.com'],
}

module.exports = nextConfig
```

#### `tailwind.config.ts`
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#e6f4ef',
          100: '#b3dfd0',
          200: '#80cab1',
          300: '#4db592',
          400: '#1aa073',
          500: '#0B3D2E',
          600: '#093425',
          700: '#072b1e',
          800: '#052117',
          900: '#031810',
        },
        grey: {
          950: '#0B0D10',
          900: '#1B1F24',
          850: '#20252B',
          800: '#2A3038',
          700: '#3A4149',
          600: '#4A515A',
          500: '#6B7280',
          400: '#9AA4B2',
          300: '#C5CDD8',
          200: '#E1E6ED',
          100: '#F3F5F8',
          50: '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(11, 61, 46, 0.5)',
        'glow-md': '0 0 20px rgba(11, 61, 46, 0.6)',
        'glow-lg': '0 0 40px rgba(11, 61, 46, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
```

#### `.env.local`
```bash
# Strapi CMS
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=your-strapi-api-token

# Contact form email (if using email service)
RESEND_API_KEY=your-resend-api-key
CONTACT_EMAIL=hello@colatechsolutions.com

# Google reCAPTCHA (optional)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
RECAPTCHA_SECRET_KEY=your-secret-key
```

---

### App Router Structure

#### `src/app/layout.tsx`
```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ColaTech Solutions | Digital Infrastructure for Houston Businesses',
    template: '%s | ColaTech Solutions'
  },
  description: 'Professional websites, network upgrades, security systems, and managed IT services for homes and small businesses in Houston.',
  keywords: ['Houston IT services', 'network installation', 'business websites', 'IP cameras', 'managed IT'],
  authors: [{ name: 'ColaTech Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://colatechsolutions.com',
    siteName: 'ColaTech Solutions',
    images: ['/images/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-grey-950 text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

#### `src/app/page.tsx` (Homepage)
```tsx
import HeroSection from '@/components/home/HeroSection'
import ServicesGrid from '@/components/home/ServicesGrid'
import PricingSection from '@/components/home/PricingSection'
import ProcessSection from '@/components/home/ProcessSection'
import ConsoleDemo from '@/components/home/ConsoleDemo'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import TrustSection from '@/components/home/TrustSection'
import ServiceAreaSection from '@/components/home/ServiceAreaSection'
import ContactSection from '@/components/home/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <PricingSection />
      <ProcessSection />
      <ConsoleDemo />
      <CaseStudiesSection />
      <TrustSection />
      <ServiceAreaSection />
      <ContactSection />
    </>
  )
}
```

#### `src/app/services/[slug]/page.tsx` (Dynamic Service Page)
```tsx
import { notFound } from 'next/navigation'
import { getServiceBySlug, getAllServices } from '@/lib/strapi'
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const services = await getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug)

  if (!service) return {}

  return {
    title: service.metaTitle || service.title,
    description: service.metaDescription || service.shortDescription,
  }
}

export default async function ServicePage({ params }: Props) {
  const service = await getServiceBySlug(params.slug)

  if (!service) notFound()

  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">{service.title}</h1>
        <div className="prose prose-invert max-w-none">
          {/* Render service content */}
        </div>
      </div>
    </div>
  )
}
```

---

### API Routes

#### `src/app/api/quote/route.ts`
```ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  businessType: z.enum(['business', 'home']),
  addressZip: z.string().optional(),
  services: z.array(z.string()).min(1, 'Select at least one service'),
  notes: z.string().optional(),
  preferredContact: z.enum(['phone', 'email', 'text']),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = quoteSchema.parse(body)

    // Send email or save to database
    // Example: await sendQuoteEmail(data)

    return NextResponse.json(
      { success: true, message: 'Quote request received' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

---

### Library Files

#### `src/lib/strapi.ts`
```ts
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

interface FetchOptions extends RequestInit {
  cache?: RequestCache
  next?: { revalidate?: number }
}

async function fetchAPI(
  endpoint: string,
  options: FetchOptions = {}
): Promise<any> {
  const defaultOptions: FetchOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
    },
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  }

  const response = await fetch(`${STRAPI_URL}/api${endpoint}`, {
    ...defaultOptions,
    ...options,
  })

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.statusText}`)
  }

  const data = await response.json()
  return data
}

// Service functions
export async function getAllServices() {
  const data = await fetchAPI('/services?populate=*')
  return data.data
}

export async function getServiceBySlug(slug: string) {
  const data = await fetchAPI(`/services?filters[slug][$eq]=${slug}&populate=*`)
  return data.data?.[0] || null
}

export async function getAllPackages() {
  const data = await fetchAPI('/packages?populate=*')
  return data.data
}

export async function getAllCaseStudies() {
  const data = await fetchAPI('/case-studies?populate=*')
  return data.data
}

export async function getCaseStudyBySlug(slug: string) {
  const data = await fetchAPI(`/case-studies?filters[slug][$eq]=${slug}&populate=*`)
  return data.data?.[0] || null
}

export async function getAllFAQs() {
  const data = await fetchAPI('/faqs?populate=*')
  return data.data
}

export async function getAllTestimonials() {
  const data = await fetchAPI('/testimonials?populate=*')
  return data.data
}
```

#### `src/lib/utils.ts`
```ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format phone number
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

// Truncate text
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}
```

#### `src/config/site.ts`
```ts
export const siteConfig = {
  name: 'ColaTech Solutions',
  description: 'Digital infrastructure for homes and small businesses',
  url: 'https://colatechsolutions.com',
  phone: '(713) XXX-XXXX',
  email: 'hello@colatechsolutions.com',
  address: {
    city: 'Houston',
    state: 'TX',
  },
  socialLinks: {
    linkedin: 'https://linkedin.com/company/colatech',
    // twitter: 'https://twitter.com/colatech',
  },
  navLinks: [
    { label: 'Services', href: '/services' },
    { label: 'Packages', href: '/packages' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
  ],
}
```

---

## Package Dependencies

### `package.json`
```json
{
  "name": "colatech-solutions",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.309.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.48",
    "@types/react-dom": "^18.2.18",
    "typescript": "^5.3.3",
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.33",
    "autoprefixer": "^10.4.17",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.1.0"
  }
}
```

---

## TypeScript Configuration

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## Development Workflow

### Initial Setup
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Strapi URL

# Run development server
npm run dev
```

### Build & Deploy
```bash
# Type check
npm run type-check

# Build for production
npm run build

# Start production server
npm run start
```

---

*End of Section 3: Next.js App Router Structure*
