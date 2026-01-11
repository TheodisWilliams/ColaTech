import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Check } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { getServiceBySlug, getAllServices } from '@/lib/strapi'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  try {
    const services = await getAllServices()
    return services.map((service: any) => ({
      slug: service.attributes.slug,
    }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const service = await getServiceBySlug(params.slug)

    if (!service) {
      return {
        title: 'Service Not Found',
      }
    }

    return {
      title: service.attributes.metaTitle || service.attributes.title,
      description:
        service.attributes.metaDescription || service.attributes.shortDescription,
    }
  } catch {
    return {
      title: 'Service',
    }
  }
}

export default async function ServicePage({ params }: Props) {
  let service = null

  try {
    service = await getServiceBySlug(params.slug)
  } catch (error) {
    console.error('Failed to fetch service:', error)
  }

  if (!service) {
    notFound()
  }

  return (
    <div className="py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/services"
            className="text-colatech-green hover:underline mb-8 inline-block"
          >
            ← Back to Services
          </Link>

          <h1 className="text-5xl font-bold mb-6">{service.attributes.title}</h1>
          <p className="text-xl text-colatech-grey-3 mb-12">
            {service.attributes.shortDescription}
          </p>

          <div
            className="prose prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: service.attributes.longDescription }}
          />

          {service.attributes.features && service.attributes.features.length > 0 && (
            <div className="bg-colatech-grey-1 border border-colatech-grey-2 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.attributes.features.map((feature: any) => (
                  <div key={feature.id} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-colatech-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      {feature.description && (
                        <p className="text-sm text-colatech-grey-3">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
