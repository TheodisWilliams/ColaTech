# ColaTech Solutions - UI/UX Design Specification

## 1. HOMEPAGE UI/UX SPECIFICATION

### 1.1 Sticky Navigation Header
**Layout**: Horizontal flex container, full-width, sticky top
**Behavior**:
- Initial state: 80px height, transparent background
- Scrolled state (>50px): 64px height, backdrop-blur-xl, bg-black/80, subtle bottom border (border-grey-800/50)
- Smooth height transition (200ms ease)

**Structure**:
```
[Logo] ————————— [Nav Links] ————————— [Secondary CTA] [Primary CTA]
```

**Elements**:
- **Logo** (left): "ColaTech" wordmark + minimal icon, forest green accent
- **Nav Links** (center): Services • Packages • Work • About • FAQ
  - Hover: forest green underline (2px, animated from center)
  - Active: persistent underline + forest green text
- **Secondary CTA**: "Call (713) XXX-XXXX" - ghost button, grey border
- **Primary CTA**: "Request a Quote" - solid forest green, glow on hover
- **Mobile**: Hamburger menu (right), slide-in overlay with blur backdrop

**Accessibility**: Skip to content link, keyboard nav, focus-visible rings

---

### 1.2 Hero Section (Split Layout)
**Height**: min-h-[calc(100vh-80px)], max-h-[900px]
**Layout**: 2-column grid (lg:grid-cols-2), gap-12

#### Left Column (Content)
**Vertical alignment**: Center
**Max-width**: 600px

**Element Stack**:
1. **Trust Chips** (top)
   - 3 pills: "Enterprise Networking Experience" • "Secure Installations" • "Houston Area"
   - Style: Small text (12px), grey-700 bg, grey-400 text, rounded-full, px-3 py-1
   - Spacing: flex gap-2, mb-6

2. **Headline** (h1)
   - Text: "Digital Infrastructure for Homes & Small Businesses."
   - Style: text-5xl lg:text-6xl, font-bold, leading-tight (1.1), gradient from white to grey-300
   - mb-4

3. **Subheadline** (p)
   - Text: "Websites, Wi-Fi, security, cameras, cabling, and cloud — designed, installed, and managed."
   - Style: text-xl, text-grey-400, leading-relaxed (1.6), max-w-prose
   - mb-8

4. **CTA Group** (horizontal flex)
   - Primary: "Request a Quote" - forest green solid, text-white, px-8 py-4, rounded-2xl, shadow-lg, hover:shadow-green-glow
   - Secondary: "View Packages" - ghost button, grey-700 border, text-grey-300, px-8 py-4, rounded-2xl
   - gap-4, responsive stack on mobile

**Interactions**:
- Buttons: Lift on hover (translateY -2px), glow spread
- Fade-in animation on load (stagger children by 100ms)

#### Right Column (Dashboard Visual)
**Container**: Rounded-3xl, bg-grey-900/50, border border-grey-800, p-6, backdrop-blur

**Tab Navigation** (top):
- Tabs: Network • Cameras • Web • Backups
- Active tab: forest green bottom border (3px), white text
- Inactive: grey-500 text, hover grey-300

**Content Area** (grid of status widgets):
- **Network Widget**:
  - Icon: Wi-Fi signal bars (forest green)
  - Metric: "99.9% Uptime"
  - Status dot: green, pulsing

- **Cameras Widget**:
  - Icon: Camera outline
  - Metric: "12 Cameras Online"
  - Mini grid: 4 camera thumbnails (dark rectangles with green "LIVE" badge)

- **Web Widget**:
  - Icon: Globe
  - Metric: "Site: Active"
  - Mini bar: "Last deploy: 2h ago"

- **Backups Widget**:
  - Icon: Shield check
  - Metric: "Last backup: 15min"
  - Progress bar: 100% (forest green fill)

**Widget Style**:
- bg-grey-800/60, rounded-xl, p-4
- Grid: 2x2 on desktop, stack on mobile
- Hover: border highlight (grey-700)

**Decorative Elements**:
- Subtle grid pattern background (opacity 5%)
- Glow effect behind container (forest green, blur-3xl, opacity 10%)

---

### 1.3 What We Do - Service Grid
**Section Padding**: py-24
**Container**: max-w-7xl, mx-auto

**Header**:
- Small label: "Services" (uppercase, tracking-wide, forest green, text-sm, mb-3)
- Headline: "End-to-End Digital Infrastructure" (text-4xl, font-bold, white, mb-4)
- Subtext: "From your website to your network rack — we design, install, and manage it all." (text-grey-400, text-lg, mb-12)

**Grid**:
- lg:grid-cols-4, md:grid-cols-2, gap-6
- 8 cards total

**Service Card Component**:
- Container: bg-grey-900/40, border border-grey-800, rounded-2xl, p-6, h-full
- Hover: border-forest-green, translateY(-4px), shadow-xl, transition 200ms
- Cursor: pointer

**Card Content**:
1. **Tag** (conditional): "Most Requested" - forest green bg, text-xs, rounded-full, px-2 py-1, w-fit, mb-4
2. **Icon**: 48px, forest green stroke, mb-4
3. **Title**: text-xl, font-semibold, white, mb-2
4. **Description**: text-grey-400, text-sm, line-height 1.6, mb-4
5. **Link Arrow**: "Learn more →" - text-forest-green, text-sm, opacity-0 on default, opacity-100 on hover

**Services List**:
1. Websites & Web Apps (tag: Most Requested)
2. Business Email & Domains
3. Wi-Fi & Network Upgrades (tag: Most Requested)
4. Firewalls, VPN & Security
5. IP Cameras & NVR (tag: Most Requested)
6. Cable Drops & PoE
7. Cloud Backups & Monitoring
8. Managed Support

**Accessibility**: Cards are clickable, keyboard accessible, aria-label includes service name

---

### 1.4 Packages / Pricing Section
**Section Style**: py-24, bg-grey-950 (slightly darker than body)

**Header** (centered):
- Label: "Packages" (forest green, uppercase, text-sm, mb-3)
- Headline: "Choose Your Starting Point" (text-4xl, font-bold, white, mb-4)
- Subtext: "Transparent pricing. No surprises. Scale as you grow." (text-grey-400, text-lg, mb-16)

**Pricing Tier Cards** (3 featured):
- Layout: lg:grid-cols-3, gap-8, max-w-6xl mx-auto
- Middle card (Smart Office) elevated and highlighted

**Tier Card Component**:
- Container: bg-grey-900, border-2 border-grey-800, rounded-3xl, p-8
- Featured variant (Smart Office): border-forest-green, relative z-10, scale-105, shadow-2xl

**Card Structure**:
1. **Badge** (if featured): "Popular" - forest green bg, white text, rounded-full, px-3 py-1, absolute top-0 transform -translate-y-1/2
2. **Tier Name**: text-2xl, font-bold, white, mb-2
3. **One-liner**: text-grey-400, text-sm, mb-6
4. **Price**:
   - Format: "Starting at $X,XXX" or "From $XXX/mo"
   - Style: text-4xl, font-bold, forest green, mb-6
5. **Features List**:
   - 5-7 bullet points
   - Icon: checkmark (forest green), text-grey-300, text-sm, leading-relaxed
   - mb-8
6. **CTA Button**:
   - Featured: solid forest green, white text, full-width
   - Others: ghost (border grey-700, text-grey-300), full-width
   - rounded-xl, py-3

**Three Featured Tiers**:
1. **Digital Presence Starter** - $1,500–$3,000
2. **Smart Office** (featured) - $3,500–$7,000
3. **Fully Managed Business** - From $499/mo

**Below Tiers**:
- Link: "View all packages & compare →" (text-forest-green, hover:underline, text-center, mt-8)

**Expandable Comparison Table** (optional, accordion):
- Trigger: "Compare all 5 packages"
- Content: Table with columns for all packages, rows for features
- Style: bg-grey-900/50, rounded-xl, p-6

---

### 1.5 How It Works - Process
**Section**: py-24

**Header** (centered):
- Label: "Process" (forest green, uppercase, mb-3)
- Headline: "Simple. Professional. Transparent." (text-4xl, font-bold, white, mb-16)

**Layout**: 4-column grid (lg:grid-cols-4), gap-8, position relative

**Connecting Line**:
- Horizontal line connecting steps (border-top, grey-800, dashed, absolute, hidden on mobile)

**Step Component**:
- Number badge: Large circle, forest green border, white number, 56px, mb-6
- Icon: 40px, grey-400, mb-4
- Title: text-xl, font-semibold, white, mb-2
- Description: text-grey-400, text-sm, mb-3
- Timeline: text-xs, text-grey-500, italic

**Four Steps**:
1. **Assess**
   - Icon: Clipboard with checkmark
   - Description: "Site visit or remote consult to understand your needs and current setup."
   - Timeline: "30–60 minutes"

2. **Design**
   - Icon: Drafting compass
   - Description: "Custom plan with equipment list, layout diagrams, and cost breakdown."
   - Timeline: "1–3 days"

3. **Install**
   - Icon: Tools
   - Description: "Clean cabling, professional configuration, thorough testing, and handoff."
   - Timeline: "Half-day to 2 days"

4. **Manage**
   - Icon: Monitor with heartbeat
   - Description: "Ongoing monitoring, updates, backups, and priority support (optional)."
   - Timeline: "Continuous"

**Interaction**: Steps fade in on scroll (intersection observer)

---

### 1.6 Live Systems Demo Section
**Section Style**: py-24, bg-gradient-to-b from-grey-950 to-black

**Header** (centered):
- Label: "Operations Console" (forest green, uppercase, mb-3)
- Headline: "We Monitor What We Build" (text-4xl, font-bold, white, mb-4)
- Subtext: "Real-time visibility into your infrastructure with proactive support." (text-grey-400, text-lg, mb-12)

**Console UI Mock**:
- Container: max-w-6xl, mx-auto, bg-grey-900/60, border border-grey-800, rounded-3xl, p-8, backdrop-blur

**Layout**: 2x2 grid on desktop, stack on mobile

**Panels**:
1. **Camera Feed Preview** (top-left)
   - Title: "IP Cameras" (text-sm, grey-400, mb-3)
   - Grid: 2x2 mini camera tiles (dark bg, green "LIVE" badge overlay)
   - Footer: "12 online • 0 alerts"

2. **Network Map** (top-right)
   - Title: "Network Topology"
   - Visual: Simple node diagram (router → switch → devices)
   - Nodes: green = healthy, with connection lines
   - Footer: "All devices reachable"

3. **Backup Job Status** (bottom-left)
   - Title: "Backup Jobs"
   - List: 3 rows with checkmarks, timestamps
   - "Web Server: Completed 15min ago"
   - "File Share: Completed 2h ago"
   - "Database: In progress..."
   - Progress bar for active job (forest green)

4. **Website Deployment** (bottom-right)
   - Title: "Web Services"
   - Status: "Production: Live" (green dot)
   - Metrics: "Uptime: 99.98% • Response: 145ms"
   - Last deploy timestamp

**Bottom Note**:
- Text: "Managed service clients get 24/7 monitoring and priority support."
- Style: text-center, text-grey-500, text-sm, mt-8

**Visual Treatment**:
- Subtle scan line animation (optional, very subtle)
- Green glow around "healthy" status indicators

---

### 1.7 Case Studies / Work
**Section**: py-24

**Header** (centered):
- Label: "Work" (forest green, uppercase, mb-3)
- Headline: "Real Projects. Real Results." (text-4xl, font-bold, white, mb-16)

**Layout**: lg:grid-cols-3, gap-8

**Case Study Card**:
- Container: bg-grey-900/40, border border-grey-800, rounded-2xl, overflow-hidden, hover:border-grey-700
- Image: aspect-video, object-cover, bg-grey-800 (before/after or project photo)
- Content padding: p-6

**Card Content**:
1. **Tag**: Industry/category (e.g., "Retail" or "Home Office") - text-xs, forest green, uppercase, mb-2
2. **Title**: text-xl, font-semibold, white, mb-2
3. **Problem → Solution** (2 lines):
   - Problem: text-grey-400, text-sm, mb-1
   - Solution: text-grey-300, text-sm, mb-4
4. **Results** (metric callout):
   - Format: Large number + descriptor
   - Example: "80% fewer dead zones" or "12 cameras installed"
   - Style: text-forest-green, font-bold, text-lg, mb-4
5. **Link**: "View case study →" - text-grey-400, text-sm, hover:text-forest-green

**Example Cards**:
1. **Law Office Wi-Fi Upgrade**
   - Tag: Small Business
   - Result: "Dead zones eliminated"

2. **Retail Security System**
   - Tag: Retail
   - Result: "12 cameras, 24/7 remote access"

3. **Restaurant Website + Booking**
   - Tag: Hospitality
   - Result: "3x online reservations"

**Interaction**: Cards lift slightly on hover, image scales 1.05

---

### 1.8 Trust & Credibility
**Section**: py-16, bg-grey-950

**Layout**: Horizontal, centered, max-w-6xl

**Content Blocks** (flex, gap-12, items-center):

1. **Certifications/Experience**:
   - Title: "Network Professional Experience" (text-lg, font-semibold, white, mb-2)
   - List: "Enterprise Data Center Operations • Network Architecture • Security Best Practices"
   - Style: text-sm, text-grey-400

2. **Tooling Logos** (if applicable):
   - Label: "Trusted Platforms" (text-sm, grey-500, mb-3)
   - Logo grid: Ubiquiti, Omada, Synology, Cloudflare (greyscale, hover color)
   - Size: 80px wide, opacity-60, hover opacity-100

3. **Security Approach**:
   - Icon: Shield with lock
   - Bullets: "Zero-trust principles • Encrypted backups • Regular audits"
   - Style: text-sm, grey-400

**Bottom**: Testimonial slider (if available from Strapi)

---

### 1.9 Local Service Area
**Section**: py-16

**Header** (centered):
- Label: "Service Area" (forest green, uppercase, mb-3)
- Headline: "Proudly Serving Greater Houston" (text-3xl, font-bold, white, mb-8)

**Content**:
- Option A: List of cities/neighborhoods (Pills with grey bg, white text, grid layout)
- Option B: Map-style visual with markers (decorative, not functional)

**Cities/Areas** (example):
- Houston • Katy • Sugar Land • The Woodlands • Pearland • League City • Cypress • Spring

**Note**: text-grey-400, text-sm, text-center, mt-6
- "Need service outside these areas? Contact us — we may be able to help."

---

### 1.10 Final CTA + Contact Section
**Section**: py-24, bg-gradient-to-b from-black to-grey-950

**Header** (centered):
- Headline: "Ready to Upgrade Your Infrastructure?" (text-4xl, font-bold, white, mb-4)
- Subtext: "Get a custom quote in 24 hours or book a 15-minute consult." (text-grey-400, text-lg, mb-12)

**Layout**: 2-column (form + alternate option)

#### Left: Quote Request Form
**Form Container**: bg-grey-900, border border-grey-800, rounded-2xl, p-8

**Fields**:
1. **Name** (text input, required)
2. **Phone** (tel input, required)
3. **Email** (email input, required)
4. **Business or Home** (radio buttons: Business / Home)
5. **Address/Zip** (text input)
6. **Desired Services** (multi-select checkboxes):
   - Website/Web App
   - Network Upgrade
   - Security/Cameras
   - Cabling/PoE
   - Managed Support
   - Other (text area)
7. **Project Notes** (textarea, placeholder: "Tell us about your project...")
8. **Preferred Contact** (select: Phone / Email / Text)

**Submit Button**:
- Text: "Request a Quote"
- Style: Full-width, forest green, white text, py-4, rounded-xl, shadow-lg, hover:glow

**Success State**:
- Replace form with checkmark icon + "Request received! We'll contact you within 24 hours."
- Style: text-center, text-forest-green

**Validation**:
- Inline error messages (red, text-sm, below field)
- Required field indicators (asterisk)

#### Right: Alternate Contact
**Container**: bg-grey-900/40, border border-grey-800, rounded-2xl, p-8, h-fit, sticky top-24

**Content**:
1. **Option 1: Call/Text**
   - Icon: Phone
   - Number: (713) XXX-XXXX (large, forest green, clickable tel: link)
   - Hours: "Mon–Fri 9am–6pm CT" (text-sm, grey-400)

2. **Divider**: "or" (text-grey-500, text-center, my-6)

3. **Option 2: Book Consult**
   - Title: "Book a 15-Min Consult" (font-semibold, white, mb-2)
   - Description: "Quick technical discussion to scope your project." (text-sm, grey-400, mb-4)
   - Button: "Choose a Time" (ghost button, border grey-700)
   - Behavior: Opens Calendly embed or modal

**Accessibility**: Form labels, ARIA attributes, keyboard navigation, error announcements

---

### 1.11 Footer
**Section**: bg-black, border-top border-grey-900, py-12

**Layout**: 4-column grid (lg:grid-cols-4, gap-8), max-w-7xl mx-auto

**Columns**:
1. **Brand**:
   - Logo + tagline
   - "Digital infrastructure for the modern business."
   - Social links (if applicable)

2. **Services** (links):
   - Websites
   - Networking
   - Security
   - Managed Support

3. **Company** (links):
   - About
   - Work
   - FAQ
   - Contact

4. **Contact**:
   - Phone number
   - Email
   - Address (if public)

**Bottom Bar**:
- Copyright © 2025 ColaTech Solutions
- Privacy Policy • Terms

**Style**: text-grey-500, text-sm, links hover:text-forest-green

---

## 2. KEY INTERACTIONS & MICRO-ANIMATIONS

### Scroll Behaviors
- **Header**: Shrink + backdrop blur on scroll
- **Sections**: Fade-in on intersection (threshold: 0.2)
- **CTA buttons**: Sticky "Request Quote" on mobile after hero

### Hover States
- **Cards**: Lift (translateY -4px) + border color change + shadow
- **Buttons**: Glow effect (box-shadow spread)
- **Links**: Underline animate from center (scaleX 0 to 1)

### Focus States
- **All interactive elements**: 2px forest green ring, offset 2px
- **Skip to content**: Visible on focus, absolute positioned

### Loading States
- **Form submit**: Button text → spinner, disabled state
- **Page transitions**: Top progress bar (forest green, 2px)

### Reduced Motion
- Use `prefers-reduced-motion` media query
- Disable transforms, use opacity fades only
- No parallax or scale animations

---

## 3. RESPONSIVE BREAKPOINTS

```
sm:  640px  (mobile landscape)
md:  768px  (tablet portrait)
lg:  1024px (tablet landscape / small desktop)
xl:  1280px (desktop)
2xl: 1536px (large desktop)
```

**Mobile-first approach**:
- Default: single column, stack all grids
- md: 2-column grids where appropriate
- lg: Full desktop layouts (3–4 columns)

**Key Mobile Adjustments**:
- Hero: Stack left/right columns
- Nav: Hamburger menu
- Pricing tiers: Horizontal scroll or stack
- Dashboard visual: Simplified to 2x2 widget grid
- Footer: Stack columns

---

## 4. ACCESSIBILITY REQUIREMENTS

- **WCAG 2.1 AA compliance**
- **Color contrast**: 4.5:1 for body text, 3:1 for large text
- **Keyboard navigation**: All interactive elements reachable via Tab
- **Screen readers**: Semantic HTML, ARIA labels, alt text
- **Focus management**: Visible focus indicators, logical tab order
- **Form validation**: Error messages announced, associated with fields
- **Motion**: Respect `prefers-reduced-motion`
- **Zoom**: Support up to 200% zoom without horizontal scroll

---

## 5. PERFORMANCE TARGETS

- **Lighthouse Score**: 90+ across all metrics
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **Image optimization**: Use next/image, WebP/AVIF, lazy load below fold
- **Font loading**: Self-host, preload critical fonts
- **Code splitting**: Dynamic imports for heavy components (modals, maps)

---

*End of Section 1: UI/UX Specification*
