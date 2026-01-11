# ColaTech Solutions - Quick Start Guide

This guide helps you get the project running in under 10 minutes.

---

## 🚀 Prerequisites

- **Node.js** 18+ ([download](https://nodejs.org))
- **npm** or **yarn**
- **Git**
- Code editor (VS Code recommended)

---

## ⚡ 5-Minute Setup

### Step 1: Create Next.js Project (2 min)

```bash
# Create Next.js app with TypeScript + Tailwind
npx create-next-app@latest colatech-solutions \
  --typescript \
  --tailwind \
  --app \
  --import-alias "@/*"

cd colatech-solutions
```

### Step 2: Install Dependencies (1 min)

```bash
npm install lucide-react clsx tailwind-merge zod
```

### Step 3: Configure Tailwind (1 min)

Replace `tailwind.config.ts` with the configuration from [DESIGN_TOKENS.md](DESIGN_TOKENS.md) (lines 25-70).

Key additions:
```ts
colors: {
  forest: { /* forest green scale */ },
  grey: { /* 11-step grey scale */ }
}
```

### Step 4: Create Folder Structure (1 min)

```bash
mkdir -p src/{components/{layout,home,ui,shared},lib,types,config}
```

### Step 5: Start Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

---

## 🎨 Next Steps

### Immediate (Day 1)
1. Copy design tokens from [DESIGN_TOKENS.md](DESIGN_TOKENS.md) to `tailwind.config.ts`
2. Create `src/lib/utils.ts` with `cn()` helper:
   ```ts
   import { type ClassValue, clsx } from 'clsx'
   import { twMerge } from 'tailwind-merge'

   export function cn(...inputs: ClassValue[]) {
     return twMerge(clsx(inputs))
   }
   ```
3. Build first UI component (Button) from [COMPONENTS.md](COMPONENTS.md)
4. Create basic layout (Header + Footer) from [DESIGN_SPEC.md](DESIGN_SPEC.md)

### Short-term (Week 1)
1. Build all UI primitives (Button, Card, Input, etc.)
2. Create homepage sections one by one
3. Style with Tailwind utilities (no custom CSS)
4. Test mobile responsiveness

### Medium-term (Week 2-3)
1. Set up Strapi CMS
2. Create content types from [STRAPI_SCHEMA.md](STRAPI_SCHEMA.md)
3. Connect Next.js to Strapi with fetch functions
4. Populate with sample data from [STRAPI_EXAMPLES.json](STRAPI_EXAMPLES.json)

---

## 📚 Documentation Roadmap

Read in this order for fastest ramp-up:

### Phase 1: Understanding (30 min)
1. **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Executive overview (5 min)
2. **[DESIGN_SPEC.md](DESIGN_SPEC.md)** - Sections 1.1-1.4 (homepage layout) (15 min)
3. **[DESIGN_TOKENS.md](DESIGN_TOKENS.md)** - Color palette + typography (10 min)

### Phase 2: Implementation (2 hours)
4. **[NEXTJS_STRUCTURE.md](NEXTJS_STRUCTURE.md)** - Folder structure + config (30 min)
5. **[COMPONENTS.md](COMPONENTS.md)** - Component library (60 min)
6. **[STRAPI_SCHEMA.md](STRAPI_SCHEMA.md)** - Content types (30 min)

### Phase 3: Content (1 hour)
7. **[COPY.md](COPY.md)** - Homepage copy + brand voice (30 min)
8. **[STRAPI_EXAMPLES.json](STRAPI_EXAMPLES.json)** - Sample data structure (30 min)

### Reference (as needed)
- **[CLAUDE.md](CLAUDE.md)** - Quick reference for patterns
- **[README.md](README.md)** - Developer guide

---

## 🛠 Essential Commands

### Development
```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run lint         # Run ESLint
```

### Strapi (in separate directory)
```bash
npx create-strapi-app@latest colatech-strapi --quickstart
cd colatech-strapi
npm run develop      # Start Strapi (localhost:1337/admin)
```

---

## 🎯 First Component Example

**File**: `src/components/ui/Button.tsx`

```tsx
import { type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-xl font-semibold transition-all duration-200',
        'hover:-translate-y-0.5 active:translate-y-0',
        variant === 'primary' &&
          'bg-forest-500 text-white hover:shadow-glow-md',
        variant === 'secondary' &&
          'border-2 border-grey-700 text-grey-300 hover:border-grey-600',
        variant === 'ghost' &&
          'text-grey-300 hover:bg-grey-800',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-base',
        size === 'lg' && 'px-8 py-4 text-lg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
```

**Usage**:
```tsx
<Button variant="primary" size="lg">
  Request a Quote
</Button>
```

---

## 🎨 First Page Example

**File**: `src/app/page.tsx`

```tsx
export default function HomePage() {
  return (
    <div className="min-h-screen bg-grey-950">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="flex gap-2 mb-6">
                <span className="text-xs bg-grey-700 text-grey-400 rounded-full px-3 py-1">
                  Enterprise Networking Experience
                </span>
                <span className="text-xs bg-grey-700 text-grey-400 rounded-full px-3 py-1">
                  Houston Area
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                Digital Infrastructure for Homes & Small Businesses.
              </h1>

              <p className="text-xl text-grey-400 leading-relaxed">
                Websites, Wi-Fi, security, cameras, cabling, and cloud — designed, installed, and managed.
              </p>

              <div className="flex gap-4">
                <button className="bg-forest-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-glow-md transition-all">
                  Request a Quote
                </button>
                <button className="border-2 border-grey-700 text-grey-300 px-8 py-4 rounded-xl font-semibold hover:border-grey-600 transition-all">
                  View Packages
                </button>
              </div>
            </div>

            {/* Right: Dashboard Visual (placeholder) */}
            <div className="bg-grey-900/50 border border-grey-800 rounded-3xl p-6 backdrop-blur">
              <div className="aspect-video bg-grey-800 rounded-xl flex items-center justify-center text-grey-500">
                Dashboard Visual Here
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
```

---

## 🔑 Key Files to Create First

### 1. `src/lib/utils.ts`
Utility functions (cn helper, formatPhone, etc.)

### 2. `src/config/site.ts`
Site metadata and navigation
```ts
export const siteConfig = {
  name: 'ColaTech Solutions',
  phone: '(713) XXX-XXXX',
  email: 'hello@colatechsolutions.com',
  navLinks: [
    { label: 'Services', href: '/services' },
    { label: 'Packages', href: '/packages' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
  ],
}
```

### 3. `src/app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-grey-950 text-white antialiased;
  }
}
```

### 4. `src/app/layout.tsx`
Root layout with font and metadata
```tsx
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
```

---

## 💡 Pro Tips

1. **Use the `cn()` utility everywhere** for conditional classes
2. **Build mobile-first** - default styles are mobile, then add `lg:` breakpoints
3. **Test dark mode constantly** - colors behave differently on dark backgrounds
4. **Use Lucide icons consistently** - `import { Icon } from 'lucide-react'`
5. **Keep components small** - one concern per component
6. **Reference DESIGN_SPEC.md frequently** - it has all layout details
7. **Copy-paste from COMPONENTS.md** - don't recreate from scratch

---

## 🐛 Common Issues

### Tailwind classes not applying
- Restart dev server after `tailwind.config.ts` changes
- Check `content` paths in Tailwind config include all component files

### Colors look wrong
- Verify you copied the full color palette from DESIGN_TOKENS.md
- Use `text-forest-500` not `text-green-500`

### Layout shifts on load
- Use `next/image` with explicit width/height
- Add `min-h-screen` to prevent jump

### Icons not rendering
- Install `lucide-react`: `npm install lucide-react`
- Import specific icons, not the full library

---

## ✅ Checklist for Day 1

- [ ] Next.js project created
- [ ] Tailwind configured with custom colors
- [ ] Folder structure created
- [ ] `cn()` utility added
- [ ] Button component built and tested
- [ ] Basic layout (Header + Footer) stubbed out
- [ ] Homepage hero section mocked

**After Day 1, you should have**:
- A running Next.js app
- Forest green buttons working
- Dark background with grey surfaces
- Mobile-responsive layout started

---

## 📞 Need Help?

- Review [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) for overview
- Check [CLAUDE.md](CLAUDE.md) for patterns and conventions
- Reference specific docs for detailed specs
- All color/spacing values are in [DESIGN_TOKENS.md](DESIGN_TOKENS.md)

---

**Now go build! 🚀**
