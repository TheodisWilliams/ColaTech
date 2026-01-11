# ColaTech Solutions - Setup Instructions

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- PostgreSQL (for Strapi production) or SQLite (for dev)

---

## Next.js Frontend Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create `.env.local` file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=your-api-token-here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## Strapi Backend Setup

### 1. Create Strapi Project

```bash
npx create-strapi-app@latest colatech-strapi --quickstart
```

This creates a new directory `colatech-strapi` with Strapi installed.

### 2. Start Strapi

```bash
cd colatech-strapi
npm run develop
```

Open [http://localhost:1337/admin](http://localhost:1337/admin)

### 3. Create Admin User

Follow the on-screen prompts to create your first admin user.

### 4. Create Content Types

#### Service Content Type

1. Go to Content-Type Builder
2. Click "Create new collection type"
3. Display name: `Service`
4. Add fields:

| Field Name | Type | Required | Options |
|------------|------|----------|---------|
| title | Text | Yes | - |
| slug | UID | Yes | Target field: title |
| icon | Text | Yes | - |
| shortDescription | Text | Yes | Max length: 160 |
| longDescription | Rich Text | Yes | - |
| features | Component (repeatable) | No | Create component below |
| metaTitle | Text | No | Max length: 60 |
| metaDescription | Text | No | Max length: 160 |

**Feature Component** (Create under "service" category):
- title (Text, required)
- description (Text, optional)

#### Package Content Type

1. Create new collection type: `Package`
2. Add fields:

| Field Name | Type | Required | Options |
|------------|------|----------|---------|
| name | Text | Yes | - |
| slug | UID | Yes | Target field: name |
| priceRange | Text | Yes | - |
| bullets | Text | Yes | - |
| isFeatured | Boolean | No | Default: false |
| order | Number | No | Integer, Default: 0 |
| metaTitle | Text | No | Max length: 60 |
| metaDescription | Text | No | Max length: 160 |

#### Case Study Content Type

1. Create new collection type: `Case Study`
2. Add fields:

| Field Name | Type | Required |
|------------|------|----------|
| title | Text | Yes |
| slug | UID | Yes |
| industry | Text | Yes |
| problem | Text | Yes |
| solution | Rich Text | Yes |
| results | Text | Yes |
| images | Media (multiple) | No |

#### Testimonial Content Type

| Field Name | Type | Required |
|------------|------|----------|
| name | Text | Yes |
| company | Text | Yes |
| quote | Text | Yes |

#### FAQ Content Type

| Field Name | Type | Required |
|------------|------|----------|
| question | Text | Yes |
| answer | Rich Text | Yes |

### 5. Configure Permissions

1. Go to Settings → Users & Permissions → Roles
2. Click "Public"
3. Enable the following permissions:
   - service: find, findOne
   - package: find, findOne
   - case-study: find, findOne
   - testimonial: find
   - faq: find
4. Save

### 6. Create API Token

1. Go to Settings → API Tokens
2. Click "Create new API Token"
3. Name: `Next.js Frontend`
4. Token type: `Read-only`
5. Copy the token
6. Add to your Next.js `.env.local`:

```env
STRAPI_API_TOKEN=paste-your-token-here
```

### 7. Add Sample Content

Use the Content Manager to add sample services, packages, etc.

Example Service:
- Title: "Websites & Web Apps"
- Slug: "websites"
- Icon: "Globe"
- Short Description: "Custom websites and web applications built for your business."
- Long Description: (Use rich text editor)
- Features:
  - Mobile-First Design: Responsive layouts that work perfectly on all devices
  - SEO Optimized: Built-in SEO best practices
  - Fast Performance: Optimized for speed

---

## Importing Schema Definitions

### Method 1: Manual Import (Recommended)

Follow the instructions in **Step 4: Create Content Types** above.

### Method 2: Using Schema JSON Files

The `strapi-schemas/` directory contains JSON definitions that can be copied to:

```
colatech-strapi/src/api/[content-type]/content-types/[content-type]/schema.json
```

After copying, restart Strapi:

```bash
npm run develop
```

---

## Example API Responses

See `strapi-examples/` directory for sample API responses:

- `services-response.json` - Example services data
- `packages-response.json` - Example packages data

These show the exact format returned by Strapi API.

---

## Folder Structure

```
ColaTech/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Homepage
│   │   ├── services/
│   │   │   ├── page.tsx         # Services index
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Service detail
│   │   ├── packages/
│   │   ├── contact/
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/              # Header, Footer
│   │   ├── home/                # Homepage sections
│   │   └── ui/                  # Reusable components
│   ├── lib/
│   │   ├── strapi.ts            # Strapi API client
│   │   ├── utils.ts             # Utilities
│   │   └── validations.ts       # Form schemas
│   └── types/
│       └── index.ts             # TypeScript types
├── strapi-schemas/              # Strapi content type definitions
├── strapi-examples/             # Example API responses
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── .env.local.example
```

---

## Development Workflow

### Running Both Servers

Terminal 1 (Next.js):
```bash
npm run dev
```

Terminal 2 (Strapi):
```bash
cd colatech-strapi
npm run develop
```

### Making Changes

**Frontend**:
- Edit components in `src/components/`
- Add pages in `src/app/`
- Update styles in Tailwind classes

**Backend**:
- Add/edit content in Strapi admin
- Modify content types in Content-Type Builder
- Configure in Settings

---

## Deployment

### Next.js to Vercel

```bash
npm install -g vercel
vercel
```

Set environment variables in Vercel dashboard:
- `NEXT_PUBLIC_STRAPI_API_URL`
- `STRAPI_API_TOKEN`

### Strapi Options

**Railway**:
```bash
railway login
railway init
railway up
```

**Render**:
1. Connect repository
2. Select "Web Service"
3. Build command: `npm run build`
4. Start command: `npm run start`

**DigitalOcean App Platform**:
1. Create new app
2. Connect repository
3. Auto-detect Strapi
4. Add PostgreSQL database

---

## Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tailwind classes not applying
```bash
# Restart dev server
npm run dev
```

### Strapi connection error
1. Check Strapi is running on port 1337
2. Verify `NEXT_PUBLIC_STRAPI_API_URL` in `.env.local`
3. Check API token is correct

### CORS errors
In `colatech-strapi/config/middlewares.js`:

```js
module.exports = [
  // ... other middlewares
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'https://your-domain.com'],
    },
  },
]
```

---

## Color Reference

```
--colatech-green: #0B3D2E
--colatech-black: #0B0D10
--colatech-grey-1: #1B1F24
--colatech-grey-2: #2A3038
--colatech-grey-3: #9AA4B2
```

Use in Tailwind:
- `bg-colatech-green`
- `text-colatech-grey-3`
- `border-colatech-grey-2`

---

## Next Steps

1. Populate Strapi with your actual content
2. Customize homepage copy
3. Add more services and packages
4. Upload images to Strapi Media Library
5. Configure SEO metadata
6. Set up analytics (Google Tag Manager)
7. Deploy to production

---

## Support

For issues:
- Check Strapi docs: https://docs.strapi.io
- Check Next.js docs: https://nextjs.org/docs
- Review this README carefully

**Built with Next.js 14, TypeScript, Tailwind CSS, and Strapi v4+**
