import Link from 'next/link'
import { Globe, Monitor, Headphones, Wifi, Camera, Shield, Cable, Wrench } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'

const iconMap: Record<string, any> = {
  Globe,
  Monitor,
  Headphones,
  Wifi,
  Camera,
  Shield,
  Cable,
  Wrench,
}

export default function ServicesGrid() {
  // Website Services - Your core offering
  const websiteServices = [
    {
      id: 1,
      title: 'Website Starter',
      slug: 'website-starter',
      icon: 'Globe',
      shortDescription: 'Up to 5 pages, mobile-friendly, contact form, SEO setup',
      price: '$899 - $1,500',
      badge: 'Best for New Businesses'
    },
    {
      id: 2,
      title: 'Business Website + Email',
      slug: 'business-website-email',
      icon: 'Monitor',
      shortDescription: '5-10 pages, business email, Google Business setup, analytics',
      price: '$1,500 - $3,000',
      badge: 'Most Popular',
      featured: true
    },
    {
      id: 3,
      title: 'Website Hosting & Support',
      slug: 'website-hosting-support',
      icon: 'Headphones',
      shortDescription: 'Monthly hosting, security, backups, updates, email support',
      price: 'From $59/month',
      badge: 'Recurring Revenue'
    },
  ]

  // Low Voltage / IT Services
  const lowVoltageServices = [
    { id: 4, title: 'Wi-Fi & Network Upgrades', slug: 'wifi-network', icon: 'Wifi', shortDescription: 'Enterprise-grade wireless with full coverage' },
    { id: 5, title: 'IP Cameras & NVR', slug: 'cameras', icon: 'Camera', shortDescription: 'PoE security cameras with remote viewing' },
    { id: 6, title: 'Cable Drops & PoE', slug: 'cabling', icon: 'Cable', shortDescription: 'Professional low-voltage cabling' },
    { id: 7, title: 'Firewalls & Security', slug: 'firewall-vpn', icon: 'Shield', shortDescription: 'Network security and VPN' },
    { id: 8, title: 'Managed IT Support', slug: 'managed-support', icon: 'Wrench', shortDescription: 'Proactive monitoring and support' },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-colatech-black">
      <Container>
        {/* Website Services Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="text-xs sm:text-sm uppercase tracking-wider text-colatech-green mb-2 sm:mb-3">Website Services</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">Get Your Business Online</h2>
            <p className="text-colatech-grey-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Professional websites, email setup, and ongoing support — all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {websiteServices.map((service) => {
              const Icon = iconMap[service.icon] || Globe
              return (
                <Link key={service.id} href={`/packages#${service.slug}`}>
                  <Card
                    hoverable
                    clickable
                    className={`h-full relative ${service.featured ? 'border-2 border-colatech-green' : ''}`}
                  >
                    {service.badge && (
                      <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                        service.featured ? 'bg-colatech-green text-white' : 'bg-colatech-grey-2 text-colatech-grey-3'
                      }`}>
                        {service.badge}
                      </div>
                    )}
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-colatech-green mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-xl sm:text-2xl font-bold text-colatech-green mb-2 sm:mb-3">{service.price}</p>
                    <p className="text-colatech-grey-3 text-xs sm:text-sm">{service.shortDescription}</p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Low Voltage / IT Services Section */}
        <div>
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="text-xs sm:text-sm uppercase tracking-wider text-colatech-green mb-2 sm:mb-3">Low Voltage & IT Services</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">Network Infrastructure & Security</h2>
            <p className="text-colatech-grey-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Enterprise-grade networking, security cameras, and IT support for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {lowVoltageServices.map((service) => {
              const Icon = iconMap[service.icon] || Wifi
              return (
                <Link key={service.id} href={`/services/${service.slug}`}>
                  <Card hoverable clickable className="h-full">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-colatech-green mb-2 sm:mb-3" />
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{service.title}</h3>
                    <p className="text-colatech-grey-3 text-xs sm:text-sm">{service.shortDescription}</p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
