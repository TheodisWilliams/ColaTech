# ColaTech Solutions - Component Library

## 4. COMPONENT LIST WITH PROPS

---

## Layout Components

### Header
**File**: `src/components/layout/Header.tsx`

```tsx
interface HeaderProps {
  className?: string
}

// State: scrolled (boolean) - manages sticky behavior
// Features: backdrop blur on scroll, logo, nav, CTAs
```

**Key Features**:
- Sticky positioning with scroll detection
- Backdrop blur when scrolled >50px
- Responsive (desktop nav vs mobile menu)
- Primary and secondary CTAs

---

### Navigation
**File**: `src/components/layout/Navigation.tsx`

```tsx
interface NavigationProps {
  links: Array<{
    label: string
    href: string
  }>
  className?: string
}
```

**Features**:
- Active link detection (usePathname)
- Hover underline animation
- Keyboard accessible

---

### MobileMenu
**File**: `src/components/layout/MobileMenu.tsx`

```tsx
interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: Array<{
    label: string
    href: string
  }>
}
```

**Features**:
- Slide-in overlay animation
- Backdrop blur
- Close on route change
- Focus trap when open

---

### Footer
**File**: `src/components/layout/Footer.tsx`

```tsx
interface FooterProps {
  className?: string
}

// Content: logo, nav columns, contact info, copyright
```

---

## Homepage Sections

### HeroSection
**File**: `src/components/home/HeroSection.tsx`

```tsx
interface HeroSectionProps {
  headline: string
  subheadline: string
  trustChips: string[]
  ctaPrimary: {
    label: string
    href: string
  }
  ctaSecondary: {
    label: string
    href: string
  }
}
```

**Features**:
- Split layout (content + dashboard visual)
- Trust chips
- Dual CTAs
- Fade-in animation on load

---

### DashboardVisual
**File**: `src/components/home/DashboardVisual.tsx`

```tsx
interface DashboardVisualProps {
  activeTab?: 'network' | 'cameras' | 'web' | 'backups'
  className?: string
}

interface StatusWidget {
  icon: React.ReactNode
  metric: string
  status: 'healthy' | 'warning' | 'error'
  details?: string
}
```

**Features**:
- Tab navigation
- 2x2 grid of status widgets
- Forest green "healthy" indicators
- Hover states on widgets

---

### ServicesGrid
**File**: `src/components/home/ServicesGrid.tsx`

```tsx
interface ServicesGridProps {
  services: Service[]
  className?: string
}

interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  icon: string // Icon name from lucide-react
  isFeatured: boolean
}
```

**Features**:
- 4-column grid (responsive)
- ServiceCard components
- "Most Requested" tags
- Links to detail pages

---

### PricingSection
**File**: `src/components/home/PricingSection.tsx`

```tsx
interface PricingSectionProps {
  featuredTiers: PricingTier[]
  allPackagesLink?: string
  className?: string
}

interface PricingTier {
  id: string
  name: string
  oneLiner: string
  priceRange: string
  features: string[]
  isFeatured: boolean
  ctaLabel: string
  ctaHref: string
}
```

**Features**:
- 3 featured tiers
- Middle tier elevated
- Link to full comparison

---

### ProcessSection
**File**: `src/components/home/ProcessSection.tsx`

```tsx
interface ProcessSectionProps {
  steps: ProcessStep[]
  className?: string
}

interface ProcessStep {
  number: number
  title: string
  description: string
  timeline: string
  icon: string // lucide icon name
}
```

**Features**:
- 4-step horizontal layout
- Connecting line between steps
- Numbered badges
- Fade-in on scroll

---

### ConsoleDemo
**File**: `src/components/home/ConsoleDemo.tsx`

```tsx
interface ConsoleDemoProps {
  panels: ConsolePanel[]
  className?: string
}

interface ConsolePanel {
  title: string
  content: React.ReactNode
  type: 'cameras' | 'network' | 'backups' | 'web'
}
```

**Features**:
- 2x2 grid layout
- Mock console UI with status indicators
- Subtle scan line animation (optional)

---

### CaseStudiesSection
**File**: `src/components/home/CaseStudiesSection.tsx`

```tsx
interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
  className?: string
}

interface CaseStudy {
  id: string
  slug: string
  title: string
  industry: string
  image: string
  problem: string
  solution: string
  result: string
}
```

**Features**:
- 3-column grid
- CaseStudyCard components
- Links to full case studies

---

### TrustSection
**File**: `src/components/home/TrustSection.tsx`

```tsx
interface TrustSectionProps {
  certifications?: string[]
  toolingLogos?: Array<{
    name: string
    logo: string
  }>
  securityBullets?: string[]
  testimonials?: Testimonial[]
  className?: string
}

interface Testimonial {
  id: string
  name: string
  company?: string
  quote: string
  rating?: number
  headshot?: string
}
```

---

### ServiceAreaSection
**File**: `src/components/home/ServiceAreaSection.tsx`

```tsx
interface ServiceAreaSectionProps {
  cities: string[]
  note?: string
  className?: string
}
```

---

### ContactSection
**File**: `src/components/home/ContactSection.tsx`

```tsx
interface ContactSectionProps {
  formEndpoint?: string
  phoneNumber: string
  businessHours: string
  calendlyUrl?: string
  className?: string
}
```

**Features**:
- Quote request form
- Alternate contact options
- Form validation
- Success state

---

## UI Components

### Button
**File**: `src/components/ui/Button.tsx`

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
  className?: string
}
```

**Variants**:
- `primary`: Solid forest green, white text, glow on hover
- `secondary`: Grey border, grey text
- `ghost`: No border, grey text, hover background
- `outline`: Forest green border, forest green text

**Sizes**:
- `sm`: px-4 py-2, text-sm
- `md`: px-6 py-3, text-base (default)
- `lg`: px-8 py-4, text-lg

**Features**:
- Loading state with spinner
- Icon support (left or right)
- Hover lift and glow
- Keyboard accessible

---

### Card
**File**: `src/components/ui/Card.tsx`

```tsx
interface CardProps {
  children: React.ReactNode
  hoverable?: boolean
  clickable?: boolean
  onClick?: () => void
  className?: string
}
```

**Features**:
- Default: bg-grey-900/40, border, rounded-2xl
- `hoverable`: Lift on hover, border highlight
- `clickable`: Adds cursor-pointer and focus ring

---

### Badge
**File**: `src/components/ui/Badge.tsx`

```tsx
interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md'
  className?: string
}
```

**Variants**:
- `default`: Grey background, grey text
- `primary`: Forest green background, white text
- `success`: Green background
- `warning`: Amber background
- `error`: Red background

---

### PricingTier
**File**: `src/components/ui/PricingTier.tsx`

```tsx
interface PricingTierProps {
  name: string
  oneLiner: string
  priceRange: string
  features: string[]
  isFeatured?: boolean
  badge?: string
  ctaLabel: string
  ctaHref: string
  className?: string
}
```

**Features**:
- Featured variant (elevated, highlighted border)
- Badge (e.g., "Popular")
- Feature list with checkmarks
- CTA button

---

### ServiceCard
**File**: `src/components/ui/ServiceCard.tsx`

```tsx
interface ServiceCardProps {
  title: string
  description: string
  icon: string // lucide icon name
  slug: string
  isFeatured?: boolean
  className?: string
}
```

**Features**:
- Icon at top
- "Most Requested" tag (conditional)
- Hover: lift + border highlight
- Link to service detail page

---

### CaseStudyCard
**File**: `src/components/ui/CaseStudyCard.tsx`

```tsx
interface CaseStudyCardProps {
  title: string
  industry: string
  image: string
  problem: string
  solution: string
  result: string
  slug: string
  className?: string
}
```

**Features**:
- Image at top (aspect-video)
- Industry tag
- Result metric highlighted
- Link to full case study

---

### Testimonial
**File**: `src/components/ui/Testimonial.tsx`

```tsx
interface TestimonialProps {
  name: string
  company?: string
  quote: string
  rating?: number
  headshot?: string
  className?: string
}
```

**Features**:
- Quote text (larger)
- Star rating (if provided)
- Headshot image (optional)
- Name and company

---

### Accordion
**File**: `src/components/ui/Accordion.tsx`

```tsx
interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
}

interface AccordionItem {
  id: string
  question: string
  answer: string | React.ReactNode
}
```

**Features**:
- Expandable/collapsible
- Smooth height animation
- Icon rotation (chevron)
- Keyboard accessible (arrow keys)

---

### Form Components

#### Input
**File**: `src/components/ui/Input.tsx`

```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  icon?: React.ReactNode
  className?: string
}
```

**Features**:
- Label with required indicator
- Error state and message
- Icon support (left side)
- Focus ring (forest green)

---

#### Textarea
**File**: `src/components/ui/Textarea.tsx`

```tsx
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  className?: string
}
```

---

#### Checkbox
**File**: `src/components/ui/Checkbox.tsx`

```tsx
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  className?: string
}
```

**Features**:
- Custom styled checkbox (forest green when checked)
- Keyboard accessible
- Focus ring

---

#### Select
**File**: `src/components/ui/Select.tsx`

```tsx
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: Array<{
    value: string
    label: string
  }>
  error?: string
  className?: string
}
```

---

#### Form
**File**: `src/components/ui/Form.tsx`

```tsx
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
  onValidSubmit: (data: FormData) => void | Promise<void>
  validationSchema?: z.ZodSchema
  className?: string
}
```

**Features**:
- Built-in Zod validation
- Loading state management
- Error handling
- Success callback

---

## Shared Utility Components

### SectionHeader
**File**: `src/components/shared/SectionHeader.tsx`

```tsx
interface SectionHeaderProps {
  label?: string // Small uppercase label
  headline: string
  subtext?: string
  alignment?: 'left' | 'center'
  className?: string
}
```

**Usage**: Consistent header structure for all major sections

---

### Container
**File**: `src/components/shared/Container.tsx`

```tsx
interface ContainerProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
}
```

**Sizes**:
- `sm`: max-w-3xl (768px)
- `md`: max-w-5xl (1024px)
- `lg`: max-w-7xl (1280px) - default
- `xl`: max-w-screen-2xl (1536px)
- `full`: w-full

---

### LoadingSpinner
**File**: `src/components/shared/LoadingSpinner.tsx`

```tsx
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}
```

**Features**:
- SVG-based spinner
- Forest green by default
- Accessible (aria-label)

---

### AnimateOnScroll
**File**: `src/components/shared/AnimateOnScroll.tsx`

```tsx
interface AnimateOnScrollProps {
  children: React.ReactNode
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right'
  delay?: number
  threshold?: number
  className?: string
}
```

**Features**:
- Intersection Observer wrapper
- Respects `prefers-reduced-motion`
- Customizable threshold
- Stagger delay support

**Usage**:
```tsx
<AnimateOnScroll animation="fade" delay={100}>
  <ServiceCard {...props} />
</AnimateOnScroll>
```

---

## Component Composition Patterns

### Example: Building the Services Grid

```tsx
// src/components/home/ServicesGrid.tsx
import { getAllServices } from '@/lib/strapi'
import ServiceCard from '@/components/ui/ServiceCard'
import SectionHeader from '@/components/shared/SectionHeader'
import Container from '@/components/shared/Container'
import AnimateOnScroll from '@/components/shared/AnimateOnScroll'

export default async function ServicesGrid() {
  const services = await getAllServices()

  return (
    <section className="py-24 bg-grey-950">
      <Container>
        <SectionHeader
          label="Services"
          headline="End-to-End Digital Infrastructure"
          subtext="From your website to your network rack — we design, install, and manage it all."
          alignment="center"
        />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.id}
              animation="fade"
              delay={index * 50}
            >
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                slug={service.slug}
                isFeatured={service.isFeatured}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
```

---

## Component Best Practices

### TypeScript
- Export all prop interfaces
- Use `React.FC` sparingly (prefer explicit function signatures)
- Extend native HTML element props when appropriate

### Styling
- Use Tailwind utility classes
- Use `cn()` utility for conditional classes
- Keep inline styles minimal (use Tailwind config)

### Accessibility
- Include ARIA labels for icons/buttons without text
- Manage focus states (rings, outlines)
- Ensure keyboard navigation
- Use semantic HTML (button, nav, article, etc.)

### Performance
- Use `React.memo` for heavy components
- Lazy load below-the-fold sections (dynamic imports)
- Optimize images with `next/image`

### File Organization
```
Component.tsx           // Main component
Component.test.tsx      // Tests (if applicable)
Component.stories.tsx   // Storybook stories (if applicable)
```

---

## Icon Usage

### Lucide React Icons

```tsx
import { Wifi, Shield, Camera, Globe, Cloud, Monitor } from 'lucide-react'

// Standard usage
<Wifi className="w-6 h-6 text-forest-500" strokeWidth={2} />

// In ServiceCard
const iconMap = {
  wifi: Wifi,
  shield: Shield,
  camera: Camera,
  // ...
}

const Icon = iconMap[iconName]
return <Icon className="w-12 h-12 text-forest-500" />
```

### Common Icons
- **Services**: Globe, Wifi, Shield, Camera, Cable, Cloud, Monitor, Wrench
- **UI**: Menu, X, ChevronDown, ChevronRight, Check, AlertCircle
- **Contact**: Phone, Mail, MapPin, Calendar
- **Social**: Linkedin (use logo from public/icons)
- **Status**: CheckCircle2, XCircle, AlertTriangle, Info

---

## Animation Examples

### Hover Lift (Card)
```tsx
className="transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
```

### Glow Effect (Button)
```tsx
className="transition-all duration-200 hover:shadow-glow-md"
```

### Underline Animation (Link)
```tsx
className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-forest-500 hover:after:w-full after:transition-all after:duration-200"
```

### Fade In on Scroll
```tsx
// Using Intersection Observer in AnimateOnScroll component
const [isVisible, setIsVisible] = useState(false)
const ref = useRef<HTMLDivElement>(null)

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )

  if (ref.current) observer.observe(ref.current)

  return () => observer.disconnect()
}, [])

return (
  <div
    ref={ref}
    className={cn(
      'transition-all duration-500',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    )}
  >
    {children}
  </div>
)
```

---

*End of Section 4: Component Library*
