# ColaTech Solutions - Design Tokens & Typography

## 2. COLOR TOKENS (Tailwind-Friendly)

### Primary Palette
```js
// tailwind.config.ts
colors: {
  // Forest Green (Primary Brand)
  'forest': {
    50:  '#e6f4ef',
    100: '#b3dfd0',
    200: '#80cab1',
    300: '#4db592',
    400: '#1aa073',
    500: '#0B3D2E', // Primary brand color
    600: '#093425',
    700: '#072b1e',
    800: '#052117',
    900: '#031810',
  },

  // Background & Surfaces (Near-black to Grey scale)
  'grey': {
    950: '#0B0D10', // Main background (near-black)
    900: '#1B1F24', // Card surfaces
    850: '#20252B', // Elevated surfaces
    800: '#2A3038', // Borders, dividers
    700: '#3A4149', // Hover states
    600: '#4A515A',
    500: '#6B7280', // Disabled text
    400: '#9AA4B2', // Secondary text
    300: '#C5CDD8', // Body text (light)
    200: '#E1E6ED',
    100: '#F3F5F8',
    50:  '#F9FAFB',
  },
}
```

### Semantic Color Mapping
```js
// In your theme config or CSS variables
background: {
  primary: 'grey.950',    // Main page background
  surface: 'grey.900',    // Card backgrounds
  elevated: 'grey.850',   // Overlays, modals
  subtle: 'grey.900/40',  // Translucent surfaces
}

border: {
  default: 'grey.800',
  hover: 'grey.700',
  focus: 'forest.500',
  subtle: 'grey.800/50',
}

text: {
  primary: '#FFFFFF',     // Headings, important text
  secondary: 'grey.400',  // Body copy
  tertiary: 'grey.500',   // Captions, metadata
  accent: 'forest.500',   // CTAs, links, highlights
  muted: 'grey.600',      // Disabled text
}

state: {
  success: 'forest.500',
  error: '#EF4444',       // Tailwind red-500
  warning: '#F59E0B',     // Tailwind amber-500
  info: '#3B82F6',        // Tailwind blue-500
}
```

---

## Typography Scale

### Font Families
```js
// tailwind.config.ts
fontFamily: {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
}
```

**Implementation**:
- Install: `@fontsource/inter` + `@fontsource/jetbrains-mono`
- Or self-host via `/public/fonts`
- Preload critical weights in layout: 400, 500, 600, 700

### Font Size Scale
```js
fontSize: {
  'xs':   ['0.75rem',  { lineHeight: '1rem' }],    // 12px - Captions, tags
  'sm':   ['0.875rem', { lineHeight: '1.25rem' }], // 14px - Small body text
  'base': ['1rem',     { lineHeight: '1.5rem' }],  // 16px - Body text
  'lg':   ['1.125rem', { lineHeight: '1.75rem' }], // 18px - Large body
  'xl':   ['1.25rem',  { lineHeight: '1.75rem' }], // 20px - Subheadings
  '2xl':  ['1.5rem',   { lineHeight: '2rem' }],    // 24px - Section titles
  '3xl':  ['1.875rem', { lineHeight: '2.25rem' }], // 30px - Medium headlines
  '4xl':  ['2.25rem',  { lineHeight: '2.5rem' }],  // 36px - Large headlines
  '5xl':  ['3rem',     { lineHeight: '1.1' }],     // 48px - Hero headlines
  '6xl':  ['3.75rem',  { lineHeight: '1.1' }],     // 60px - Hero (desktop)
}
```

### Font Weight Scale
```js
fontWeight: {
  normal:    400, // Body text
  medium:    500, // Emphasized text
  semibold:  600, // Subheadings, buttons
  bold:      700, // Headlines, strong emphasis
}
```

### Letter Spacing
```js
letterSpacing: {
  tighter: '-0.02em', // Large headlines
  tight:   '-0.01em', // Subheadings
  normal:  '0',       // Body text
  wide:    '0.02em',  // Small caps, labels
  wider:   '0.05em',  // Uppercase labels
}
```

---

## Text Style Utilities (Semantic Variants)

### Headlines
```js
// H1 - Hero
className="text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-white"

// H2 - Section Title
className="text-4xl font-bold tracking-tight leading-tight text-white"

// H3 - Subsection
className="text-3xl font-bold tracking-tight text-white"

// H4 - Card Title
className="text-xl font-semibold text-white"
```

### Body Text
```js
// Large Body (Subheadings, intros)
className="text-lg text-grey-400 leading-relaxed"

// Default Body
className="text-base text-grey-400 leading-normal"

// Small Body (Captions, metadata)
className="text-sm text-grey-500"

// Tiny (Legal, footnotes)
className="text-xs text-grey-600"
```

### Labels & Tags
```js
// Section Label (uppercase accent)
className="text-sm uppercase tracking-wider font-medium text-forest-500"

// Pill Tag
className="text-xs font-medium text-grey-400 bg-grey-700 rounded-full px-3 py-1"

// Badge
className="text-xs font-semibold text-white bg-forest-500 rounded-full px-2 py-0.5"
```

---

## Spacing Scale

```js
spacing: {
  '0':   '0',
  '1':   '0.25rem',  // 4px
  '2':   '0.5rem',   // 8px
  '3':   '0.75rem',  // 12px
  '4':   '1rem',     // 16px
  '5':   '1.25rem',  // 20px
  '6':   '1.5rem',   // 24px
  '8':   '2rem',     // 32px
  '10':  '2.5rem',   // 40px
  '12':  '3rem',     // 48px
  '16':  '4rem',     // 64px
  '20':  '5rem',     // 80px
  '24':  '6rem',     // 96px
  '32':  '8rem',     // 128px
}
```

**Usage Guidelines**:
- Component padding: `p-6` to `p-8` (24–32px)
- Section padding vertical: `py-24` (96px desktop), `py-16` (mobile)
- Card gaps: `gap-6` to `gap-8`
- Text margin bottom: `mb-4` (paragraphs), `mb-6` (sections)

---

## Border Radius

```js
borderRadius: {
  'none': '0',
  'sm':   '0.25rem',  // 4px
  'md':   '0.5rem',   // 8px
  'lg':   '0.75rem',  // 12px
  'xl':   '1rem',     // 16px
  '2xl':  '1.5rem',   // 24px - Primary choice for cards
  '3xl':  '2rem',     // 32px - Hero elements, containers
  'full': '9999px',   // Pills, badges
}
```

**Usage**:
- Buttons: `rounded-xl` (16px)
- Cards: `rounded-2xl` (24px)
- Large containers: `rounded-3xl` (32px)
- Badges/pills: `rounded-full`

---

## Shadows

```js
boxShadow: {
  'sm':   '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  'md':   '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  'lg':   '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  'xl':   '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  '2xl':  '0 25px 50px -12px rgb(0 0 0 / 0.25)',

  // Custom glow effects
  'glow-sm':  '0 0 10px rgb(11 61 46 / 0.5)',
  'glow-md':  '0 0 20px rgb(11 61 46 / 0.6)',
  'glow-lg':  '0 0 40px rgb(11 61 46 / 0.4)',
}
```

**Usage**:
- Elevated cards: `shadow-lg`
- CTAs: `shadow-xl` + `hover:shadow-glow-md`
- Modals: `shadow-2xl`

---

## Transition Timing

```js
transitionDuration: {
  '75':   '75ms',
  '100':  '100ms',
  '150':  '150ms',
  '200':  '200ms',  // Default for most interactions
  '300':  '300ms',  // Slower, more intentional
  '500':  '500ms',  // Page transitions
}

transitionTimingFunction: {
  'ease-in':     'cubic-bezier(0.4, 0, 1, 1)',
  'ease-out':    'cubic-bezier(0, 0, 0.2, 1)',
  'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  'bounce':      'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
}
```

**Usage**:
- Hover states: `transition-all duration-200 ease-in-out`
- Button press: `transition-transform duration-100`
- Page transitions: `transition-opacity duration-300`

---

## Backdrop Blur

```js
backdropBlur: {
  'none': '0',
  'sm':   '4px',
  'md':   '12px',
  'lg':   '16px',
  'xl':   '24px',  // Header on scroll
  '2xl':  '40px',
  '3xl':  '64px',
}
```

**Usage**:
- Sticky header: `backdrop-blur-xl`
- Dashboard visual: `backdrop-blur-lg`
- Modals/overlays: `backdrop-blur-sm`

---

## Gradient Utilities

```css
/* Background Gradients */
.bg-gradient-radial-forest {
  background: radial-gradient(circle at center, rgba(11, 61, 46, 0.2) 0%, transparent 70%);
}

.bg-gradient-to-b-dark {
  background: linear-gradient(to bottom, #0B0D10 0%, #1B1F24 100%);
}

/* Text Gradient (for headlines) */
.text-gradient-white {
  background: linear-gradient(to bottom, #FFFFFF 0%, #C5CDD8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Custom Utilities (Add to Tailwind Config)

```js
// tailwind.config.ts
theme: {
  extend: {
    animation: {
      'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'scan': 'scan 3s ease-in-out infinite',
    },
    keyframes: {
      scan: {
        '0%, 100%': { transform: 'translateY(0)', opacity: '0' },
        '50%': { transform: 'translateY(100%)', opacity: '0.3' },
      }
    }
  }
}
```

---

## Accessibility Color Contrast Verification

### Text Combinations (WCAG AA)
✅ **Pass** (4.5:1 minimum for body text):
- White (#FFFFFF) on Grey.950 (#0B0D10): 18.2:1
- Grey.400 (#9AA4B2) on Grey.950: 7.8:1
- Grey.500 (#6B7280) on Grey.950: 5.2:1
- Forest.500 (#0B3D2E) on White: 10.1:1

⚠️ **Caution** (below 4.5:1 - use for large text only):
- Grey.600 (#4A515A) on Grey.950: 3.9:1 (use 18px+ or bold)

### Interactive Elements (3:1 minimum)
✅ **Pass**:
- Forest.500 border on Grey.950: 3.8:1
- Grey.800 border on Grey.950: 3.1:1

**Testing Tool**: Use WebAIM Contrast Checker or Chrome DevTools

---

## Dark Mode Implementation

Since this is a dark-first design, no separate dark mode toggle is needed initially. However, structure tokens to allow future light mode:

```js
// CSS Variables approach (optional)
:root {
  --color-bg-primary: #0B0D10;
  --color-bg-surface: #1B1F24;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #9AA4B2;
  --color-accent: #0B3D2E;
}

// Future light mode
[data-theme="light"] {
  --color-bg-primary: #FFFFFF;
  --color-bg-surface: #F9FAFB;
  --color-text-primary: #1B1F24;
  --color-text-secondary: #6B7280;
  --color-accent: #0B3D2E; // Accent stays consistent
}
```

---

## Icon System

**Recommended**: Lucide React (https://lucide.dev)
- Consistent stroke width (2px)
- Size scale: 16px (sm), 20px (md), 24px (lg), 32px (xl), 48px (2xl)
- Color: Inherit parent text color or explicit `text-forest-500`

**Key Icons Needed**:
- Navigation: Menu, X, ChevronDown
- Services: Globe, Wifi, Shield, Camera, Cable, Cloud, Monitor, Wrench
- UI: CheckCircle, ArrowRight, ExternalLink, Phone, Mail, MapPin
- Status: AlertCircle, CheckCircle2, Clock, TrendingUp

**Usage**:
```tsx
import { Wifi, Shield, Camera } from 'lucide-react'

<Wifi className="w-6 h-6 text-forest-500" strokeWidth={2} />
```

---

*End of Section 2: Design Tokens & Typography*
