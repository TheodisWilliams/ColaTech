const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

interface FetchOptions extends RequestInit {
  cache?: RequestCache
  next?: { revalidate?: number }
}

async function fetchAPI(endpoint: string, options: FetchOptions = {}): Promise<any> {
  const defaultOptions: FetchOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
    },
    next: { revalidate: 60 },
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

export async function getAllServices() {
  const data = await fetchAPI('/services?populate=*')
  return data.data
}

export async function getServiceBySlug(slug: string) {
  const data = await fetchAPI(`/services?filters[slug][$eq]=${slug}&populate=*`)
  return data.data?.[0] || null
}

export async function getAllPackages() {
  const data = await fetchAPI('/packages?populate=*&sort=order:asc')
  return data.data
}

export async function getFeaturedPackages() {
  const data = await fetchAPI('/packages?filters[isFeatured][$eq]=true&populate=*')
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
