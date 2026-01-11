# ColaTech Solutions - Strapi Content Types

## 5. STRAPI CMS CONTENT TYPE DEFINITIONS

---

## Content Type: Service

**Collection Name**: `services`
**API ID**: `service`

### Fields

| Field Name | Type | Required | Description | Options |
|------------|------|----------|-------------|---------|
| `title` | Text | Yes | Service name | Max: 100 chars |
| `slug` | UID | Yes | URL-friendly identifier | Target: `title`, unique |
| `icon` | Text | No | Lucide icon name | e.g., "Wifi", "Shield" |
| `shortDescription` | Text | Yes | Brief description for cards | Max: 160 chars |
| `longDescription` | Rich Text | Yes | Full service description | Markdown support |
| `features` | Component (repeatable) | No | Service features/benefits | Component: `Feature` |
| `faqs` | Relation | No | Related FAQs | Many-to-many with `faq` |
| `isFeatured` | Boolean | No | Show "Most Requested" tag | Default: false |
| `image` | Media | No | Service image/illustration | Single image |
| `metaTitle` | Text | No | SEO page title | Max: 60 chars |
| `metaDescription` | Text | No | SEO meta description | Max: 160 chars |
| `keywords` | Text | No | SEO keywords | Comma-separated |
| `ogImage` | Media | No | Open Graph image | Single image |
| `createdAt` | DateTime | Auto | Creation timestamp | |
| `updatedAt` | DateTime | Auto | Last update timestamp | |
| `publishedAt` | DateTime | Auto | Publication timestamp | |

### Component: Feature
| Field Name | Type | Required |
|------------|------|----------|
| `title` | Text | Yes |
| `description` | Text | No |
| `icon` | Text | No |

---

## Content Type: Package

**Collection Name**: `packages`
**API ID**: `package`

### Fields

| Field Name | Type | Required | Description | Options |
|------------|------|----------|-------------|---------|
| `name` | Text | Yes | Package name | Max: 100 chars |
| `slug` | UID | Yes | URL-friendly identifier | Target: `name`, unique |
| `oneLiner` | Text | Yes | Short tagline | Max: 100 chars |
| `priceRange` | Text | Yes | e.g., "$1,500–$3,000" or "From $499/mo" | Max: 50 chars |
| `description` | Rich Text | No | Full package description | Markdown support |
| `features` | Text | Yes | Feature bullets | One per line, newline-separated |
| `isFeatured` | Boolean | No | Show on homepage | Default: false |
| `badge` | Text | No | Badge label (e.g., "Popular") | Max: 20 chars |
| `category` | Enumeration | Yes | Package type | Values: "one-time", "subscription", "hybrid" |
| `order` | Number | No | Display order | Integer, default: 0 |
| `ctaLabel` | Text | No | Button text | Default: "Get Started" |
| `ctaHref` | Text | No | Button link | Default: "/contact" |
| `services` | Relation | No | Included services | Many-to-many with `service` |
| `metaTitle` | Text | No | SEO page title | Max: 60 chars |
| `metaDescription` | Text | No | SEO meta description | Max: 160 chars |
| `createdAt` | DateTime | Auto | | |
| `updatedAt` | DateTime | Auto | | |
| `publishedAt` | DateTime | Auto | | |

---

## Content Type: Case Study

**Collection Name**: `case-studies`
**API ID**: `case-study`

### Fields

| Field Name | Type | Required | Description | Options |
|------------|------|----------|-------------|---------|
| `title` | Text | Yes | Project title | Max: 100 chars |
| `slug` | UID | Yes | URL-friendly identifier | Target: `title`, unique |
| `industry` | Text | Yes | Business type/category | e.g., "Retail", "Home Office" |
| `client` | Text | No | Client name (can be anonymized) | Max: 100 chars |
| `problem` | Text | Yes | Challenge description | Max: 200 chars |
| `solution` | Rich Text | Yes | What was implemented | Markdown support |
| `result` | Text | Yes | Measurable outcome | e.g., "80% fewer dead zones" |
| `images` | Media | No | Project images | Multiple images |
| `heroImage` | Media | Yes | Main card image | Single image |
| `services` | Relation | No | Services used | Many-to-many with `service` |
| `testimonial` | Relation | No | Client testimonial | Many-to-one with `testimonial` |
| `dateCompleted` | Date | No | Project completion date | |
| `featured` | Boolean | No | Show on homepage | Default: false |
| `metaTitle` | Text | No | SEO page title | Max: 60 chars |
| `metaDescription` | Text | No | SEO meta description | Max: 160 chars |
| `ogImage` | Media | No | Open Graph image | Single image |
| `createdAt` | DateTime | Auto | | |
| `updatedAt` | DateTime | Auto | | |
| `publishedAt` | DateTime | Auto | | |

---

## Content Type: Testimonial

**Collection Name**: `testimonials`
**API ID**: `testimonial`

### Fields

| Field Name | Type | Required | Description | Options |
|------------|------|----------|-------------|---------|
| `name` | Text | Yes | Client name | Max: 100 chars |
| `company` | Text | No | Company/business name | Max: 100 chars |
| `quote` | Text | Yes | Testimonial text | Max: 500 chars |
| `rating` | Number | No | Star rating (1-5) | Integer, min: 1, max: 5 |
| `headshot` | Media | No | Client photo | Single image |
| `position` | Text | No | Job title | Max: 100 chars |
| `featured` | Boolean | No | Show on homepage | Default: false |
| `order` | Number | No | Display order | Integer |
| `createdAt` | DateTime | Auto | | |
| `updatedAt` | DateTime | Auto | | |
| `publishedAt` | DateTime | Auto | | |

---

## Content Type: FAQ

**Collection Name**: `faqs`
**API ID**: `faq`

### Fields

| Field Name | Type | Required | Description | Options |
|------------|------|----------|-------------|---------|
| `question` | Text | Yes | FAQ question | Max: 200 chars |
| `answer` | Rich Text | Yes | FAQ answer | Markdown support |
| `category` | Enumeration | Yes | FAQ category | Values: "general", "services", "pricing", "technical", "support" |
| `order` | Number | No | Display order within category | Integer |
| `services` | Relation | No | Related services | Many-to-many with `service` |
| `createdAt` | DateTime | Auto | | |
| `updatedAt` | DateTime | Auto | | |
| `publishedAt` | DateTime | Auto | | |

---

## Content Type: Location

**Collection Name**: `locations`
**API ID**: `location`

### Fields

| Field Name | Type | Required | Description | Options |
|------------|------|----------|-------------|---------|
| `name` | Text | Yes | City/area name | e.g., "Katy", "The Woodlands" |
| `slug` | UID | Yes | URL-friendly identifier | Target: `name`, unique |
| `description` | Rich Text | Yes | Location-specific content | Markdown, SEO-rich |
| `serviceAreaHighlights` | Text | No | Key neighborhoods/zips | Newline-separated |
| `heroImage` | Media | No | Location image | Single image |
| `featured` | Boolean | No | Show on service area section | Default: false |
| `metaTitle` | Text | No | SEO page title | Max: 60 chars |
| `metaDescription` | Text | No | SEO meta description | Max: 160 chars |
| `createdAt` | DateTime | Auto | | |
| `updatedAt` | DateTime | Auto | | |
| `publishedAt` | DateTime | Auto | | |

---

## Content Type: Page (Optional - for custom pages)

**Collection Name**: `pages`
**API ID**: `page`

### Fields

| Field Name | Type | Required | Description | Options |
|------------|------|----------|-------------|---------|
| `title` | Text | Yes | Page title | Max: 100 chars |
| `slug` | UID | Yes | URL path | Target: `title`, unique |
| `content` | Dynamic Zone | Yes | Flexible content sections | Components: see below |
| `metaTitle` | Text | No | SEO page title | Max: 60 chars |
| `metaDescription` | Text | No | SEO meta description | Max: 160 chars |
| `ogImage` | Media | No | Open Graph image | Single image |
| `createdAt` | DateTime | Auto | | |
| `updatedAt` | DateTime | Auto | | |
| `publishedAt` | DateTime | Auto | | |

### Dynamic Zone Components (for flexible page building)
1. **HeroBlock**: headline, subheadline, cta
2. **TextBlock**: title, body (rich text)
3. **ImageBlock**: image, caption, alt text
4. **CTABlock**: headline, description, button
5. **GridBlock**: items (repeatable component)

---

## Content Type: Site Settings (Single Type)

**Collection Name**: `site-setting`
**API ID**: `site-setting`

### Fields

| Field Name | Type | Required | Description | Options |
|------------|------|----------|-------------|---------|
| `siteName` | Text | Yes | Site title | Default: "ColaTech Solutions" |
| `tagline` | Text | No | Site tagline | |
| `phone` | Text | Yes | Primary phone number | |
| `email` | Email | Yes | Primary email | |
| `address` | Text | No | Physical address | |
| `businessHours` | Text | No | e.g., "Mon–Fri 9am–6pm CT" | |
| `socialLinks` | Component | No | Social media links | Component: `SocialLink` |
| `defaultOgImage` | Media | No | Default Open Graph image | Single image |
| `gtmId` | Text | No | Google Tag Manager ID | |
| `enableMaintenance` | Boolean | No | Show maintenance page | Default: false |
| `maintenanceMessage` | Text | No | Message during maintenance | |

### Component: SocialLink
| Field Name | Type | Required |
|------------|------|----------|
| `platform` | Enumeration | Yes | Values: "linkedin", "twitter", "facebook", "instagram" |
| `url` | Text | Yes |

---

## Relationships Summary

```
Service ↔ FAQ (many-to-many)
Service ↔ Package (many-to-many)
Service ↔ CaseStudy (many-to-many)
Testimonial ↔ CaseStudy (many-to-one)
```

---

## API Endpoints (Generated by Strapi)

### Services
- `GET /api/services` - List all services
- `GET /api/services/:id` - Get single service
- `GET /api/services?filters[slug][$eq]=website-development` - Get by slug

### Packages
- `GET /api/packages` - List all packages
- `GET /api/packages?filters[isFeatured][$eq]=true` - Get featured packages

### Case Studies
- `GET /api/case-studies` - List all case studies
- `GET /api/case-studies/:id` - Get single case study
- `GET /api/case-studies?filters[featured][$eq]=true` - Get featured

### Testimonials
- `GET /api/testimonials` - List all testimonials
- `GET /api/testimonials?filters[featured][$eq]=true` - Get featured

### FAQs
- `GET /api/faqs` - List all FAQs
- `GET /api/faqs?filters[category][$eq]=pricing` - Get by category

### Locations
- `GET /api/locations` - List all locations
- `GET /api/locations/:id` - Get single location

### Site Settings
- `GET /api/site-setting` - Get site settings (single type)

---

## Populate Query Examples

### Get Service with Related FAQs
```
GET /api/services/1?populate=faqs
```

### Get Case Study with Images and Testimonial
```
GET /api/case-studies/1?populate[images]=*&populate[testimonial]=*
```

### Get All Services with Features
```
GET /api/services?populate[features]=*
```

---

## Strapi Configuration Recommendations

### Permissions (Public Role)
Allow public access to:
- `find` and `findOne` on: services, packages, case-studies, testimonials, faqs, locations, site-setting
- Do NOT allow: `create`, `update`, `delete` on any public content

### API Token (for Next.js)
Create a "Read-Only" API token with:
- `find` permission on all content types
- No write permissions
- Store in `STRAPI_API_TOKEN` environment variable

### Media Library
Configure upload plugin:
- Enable image optimization
- Set size limits (max 5MB per image)
- Use responsive formats (next/image compatible)

### SEO Plugin
Install `@strapi/plugin-seo` for:
- SEO analysis
- Meta preview
- Schema.org integration

---

## Sample Data Structure (for testing)

### Services (8 entries)
1. Websites & Web Apps (featured)
2. Business Email & Domains
3. Wi-Fi & Network Upgrades (featured)
4. Firewalls, VPN & Security
5. IP Cameras & NVR (featured)
6. Cable Drops & PoE
7. Cloud Backups & Monitoring
8. Managed Support

### Packages (5 entries)
1. Digital Presence Starter
2. Home Office Network Upgrade
3. Smart Security & Camera System
4. Small Business IT Stack
5. Fully Managed Business (featured)

### Case Studies (6 entries)
1. Law Office Wi-Fi Upgrade (featured)
2. Retail Security System (featured)
3. Restaurant Website + Booking (featured)
4. Home Office Network
5. Medical Clinic IT Stack
6. E-commerce Site Build

### Testimonials (10 entries)
3 featured for homepage

### FAQs (20+ entries)
Categories: general, services, pricing, technical, support

### Locations (8 entries)
Houston, Katy, Sugar Land, The Woodlands, Pearland, League City, Cypress, Spring

---

## Strapi Setup Commands

### Initial Project Setup
```bash
# Create new Strapi project
npx create-strapi-app@latest colatech-strapi --quickstart

# Navigate to project
cd colatech-strapi

# Install dependencies
npm install

# Start development server
npm run develop
```

### Access Admin Panel
- URL: http://localhost:1337/admin
- Create first admin user
- Build content types using the Content-Type Builder

---

## Migration Script (Optional)

If migrating from an existing data source, create a script:

**File**: `scripts/seed-strapi.js`

```js
const axios = require('axios')

const STRAPI_URL = 'http://localhost:1337'
const STRAPI_TOKEN = 'your-token-here'

async function seedServices() {
  const services = [
    {
      title: 'Websites & Web Apps',
      slug: 'websites-web-apps',
      icon: 'Globe',
      shortDescription: 'Custom websites and web applications built for your business.',
      longDescription: '...',
      isFeatured: true,
    },
    // ... more services
  ]

  for (const service of services) {
    await axios.post(
      `${STRAPI_URL}/api/services`,
      { data: service },
      {
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
      }
    )
  }

  console.log('Services seeded successfully')
}

seedServices()
```

---

*End of Section 5: Strapi Content Types*
