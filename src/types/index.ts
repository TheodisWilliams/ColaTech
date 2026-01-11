export interface Service {
  id: number
  attributes: {
    title: string
    slug: string
    icon: string
    shortDescription: string
    longDescription: string
    features?: Array<{
      id: number
      title: string
      description?: string
    }>
    metaTitle?: string
    metaDescription?: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export interface Package {
  id: number
  attributes: {
    name: string
    slug: string
    priceRange: string
    bullets: string
    isFeatured: boolean
    order: number
    metaTitle?: string
    metaDescription?: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export interface CaseStudy {
  id: number
  attributes: {
    title: string
    slug: string
    industry: string
    problem: string
    solution: string
    results: string
    images?: any
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export interface Testimonial {
  id: number
  attributes: {
    name: string
    company: string
    quote: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export interface FAQ {
  id: number
  attributes: {
    question: string
    answer: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}
