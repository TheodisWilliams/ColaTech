import Link from 'next/link'
import { Check } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { getFeaturedPackages } from '@/lib/strapi'
import type { Package } from '@/types'

export default async function PricingSection() {
  let packages: Package[] = []

  try {
    packages = await getFeaturedPackages()
  } catch (error) {
    console.error('Failed to fetch packages:', error)
  }

  // Fallback packages
  const fallbackPackages = [
    {
      id: 1,
      attributes: {
        name: 'Digital Presence Starter',
        slug: 'digital-presence',
        priceRange: 'Starting at $1,500',
        bullets: 'Custom 5-page website\nMobile-responsive design\nProfessional business email\nDomain registration & DNS\nSSL certificate & security\nContact form integration\nBasic SEO setup',
        isFeatured: true,
        order: 1,
      },
    },
    {
      id: 2,
      attributes: {
        name: 'Smart Office',
        slug: 'smart-office',
        priceRange: '$3,500–$7,000',
        bullets: 'Enterprise Wi-Fi (2–4 access points)\nManaged PoE network switch\nFirewall with VPN\nProfessional cabling\nNetwork monitoring (3 months)\nGuest network isolation\nVLAN segmentation',
        isFeatured: true,
        order: 2,
      },
    },
    {
      id: 3,
      attributes: {
        name: 'Fully Managed Business',
        slug: 'fully-managed',
        priceRange: 'From $499/month',
        bullets: 'Everything in Smart Office\n24/7 network monitoring\nProactive security updates\nCloud backup management\nPriority support (4-hour response)\nQuarterly site visits\nEquipment refresh planning',
        isFeatured: true,
        order: 3,
      },
    },
  ]

  const displayPackages = packages.length > 0 ? packages : fallbackPackages

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-colatech-grey-1/30">
      <Container>
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="text-xs sm:text-sm uppercase tracking-wider text-colatech-green mb-2 sm:mb-3">Packages</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">Choose Your Starting Point</h2>
          <p className="text-colatech-grey-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Transparent pricing. No surprises. Scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {displayPackages.map((pkg, index) => {
            const features = pkg.attributes.bullets.split('\n')
            const isFeatured = index === 1 // Middle package

            return (
              <Card
                key={pkg.id}
                className={
                  isFeatured
                    ? 'border-colatech-green relative transform md:scale-105 shadow-glow-green'
                    : ''
                }
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-colatech-green px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl font-bold mb-2">{pkg.attributes.name}</h3>
                <p className="text-2xl sm:text-3xl font-bold text-colatech-green mb-4 sm:mb-6">
                  {pkg.attributes.priceRange}
                </p>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-colatech-green flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-colatech-grey-3">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button
                    variant={isFeatured ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/packages" className="text-colatech-green hover:underline inline-flex items-center gap-2">
            View all packages & compare →
          </Link>
        </div>
      </Container>
    </section>
  )
}
