import Link from 'next/link'
import { Globe, Wifi, Camera, Shield, Cloud, Server, Cable, Wrench } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import type { Service } from '@/types'
import { getAllServices } from '@/lib/strapi'

const iconMap: Record<string, any> = {
  Globe,
  Wifi,
  Camera,
  Shield,
  Cloud,
  Server,
  Cable,
  Wrench,
}

export default async function ServicesGrid() {
  let services: Service[] = []

  try {
    services = await getAllServices()
  } catch (error) {
    console.error('Failed to fetch services:', error)
  }

  // Fallback services if Strapi is not set up
  const fallbackServices = [
    { id: 1, attributes: { title: 'Websites & Web Apps', slug: 'websites', icon: 'Globe', shortDescription: 'Custom websites and applications built for your business.' } },
    { id: 2, attributes: { title: 'Business Email & Domains', slug: 'email-domains', icon: 'Server', shortDescription: 'Professional email and domain management.' } },
    { id: 3, attributes: { title: 'Wi-Fi & Network Upgrades', slug: 'wifi-network', icon: 'Wifi', shortDescription: 'Enterprise-grade wireless with full coverage.' } },
    { id: 4, attributes: { title: 'Firewalls, VPN & Security', slug: 'security', icon: 'Shield', shortDescription: 'Next-gen security and secure remote access.' } },
    { id: 5, attributes: { title: 'IP Cameras & NVR', slug: 'cameras', icon: 'Camera', shortDescription: 'PoE security cameras with remote viewing.' } },
    { id: 6, attributes: { title: 'Cable Drops & PoE', slug: 'cabling', icon: 'Cable', shortDescription: 'Professional low-voltage cabling and PoE.' } },
    { id: 7, attributes: { title: 'Cloud Backups & Monitoring', slug: 'cloud-backups', icon: 'Cloud', shortDescription: 'Automated backups and uptime monitoring.' } },
    { id: 8, attributes: { title: 'Managed Support', slug: 'managed-support', icon: 'Wrench', shortDescription: 'Proactive monitoring and priority support.' } },
  ]

  const displayServices = services.length > 0 ? services : fallbackServices

  return (
    <section className="py-24 bg-colatech-black">
      <Container>
        <div className="text-center mb-16">
          <div className="text-sm uppercase tracking-wider text-colatech-green mb-3">Services</div>
          <h2 className="text-4xl font-bold mb-4">End-to-End Digital Infrastructure</h2>
          <p className="text-colatech-grey-3 text-lg max-w-2xl mx-auto">
            From your website to your network rack — we design, install, and manage it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service) => {
            const Icon = iconMap[service.attributes.icon] || Globe
            return (
              <Link key={service.id} href={`/services/${service.attributes.slug}`}>
                <Card hoverable clickable className="h-full">
                  <Icon className="w-12 h-12 text-colatech-green mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.attributes.title}</h3>
                  <p className="text-colatech-grey-3 text-sm">{service.attributes.shortDescription}</p>
                </Card>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
