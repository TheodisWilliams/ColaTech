import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Packages & Pricing',
  description: 'Transparent pricing for digital infrastructure services. Choose the package that fits your business needs.',
}

export default function PackagesPage() {
  const packages = [
    {
      id: 1,
      name: 'Digital Presence Starter',
      price: 'Starting at $1,500',
      priceDetail: '$1,500 - $3,000',
      oneLiner: 'Get online with a professional website and business email',
      category: 'one-time',
      isFeatured: false,
      features: [
        'Custom 5-page website',
        'Mobile-responsive design',
        'Professional business email (5 accounts)',
        'Domain registration & DNS setup',
        'SSL certificate & security',
        'Contact form integration',
        'Basic SEO setup',
        'Google Analytics integration',
      ],
      idealFor: 'Startups, solo entrepreneurs, professional services',
    },
    {
      id: 2,
      name: 'Home Office Network Upgrade',
      price: '$2,000 - $3,500',
      priceDetail: '$2,000 - $3,500',
      oneLiner: 'Professional home office with enterprise Wi-Fi',
      category: 'one-time',
      isFeatured: false,
      features: [
        'Enterprise Wi-Fi access point',
        'Managed network switch',
        'VPN for secure remote work',
        'Professional cabling & mounting',
        'Guest network isolation',
        'Network diagram & documentation',
        '30 days of support',
      ],
      idealFor: 'Remote workers, consultants, home-based businesses',
    },
    {
      id: 3,
      name: 'Smart Office',
      price: '$3,500 - $7,000',
      priceDetail: '$3,500 - $7,000',
      oneLiner: 'Complete network infrastructure for small businesses',
      category: 'one-time',
      isFeatured: true,
      badge: 'Most Popular',
      features: [
        'Enterprise Wi-Fi (2-4 access points)',
        'Managed PoE network switch',
        'Firewall with VPN',
        'Professional cabling & cable management',
        'Network monitoring & support (3 months)',
        'Guest network isolation',
        'VLAN segmentation (cameras, IoT)',
        'Remote troubleshooting included',
        'Full network documentation',
      ],
      idealFor: 'Small businesses (5-50 employees), retail, offices',
    },
    {
      id: 4,
      name: 'Smart Security & Camera System',
      price: '$2,500 - $7,000',
      priceDetail: '$2,500 - $7,000',
      oneLiner: 'Professional security cameras with recording',
      category: 'one-time',
      isFeatured: false,
      features: [
        '4-12 PoE IP cameras (4K resolution)',
        'Network video recorder (NVR) with 1-4TB storage',
        'Mobile app & web access',
        'Motion detection & smart alerts',
        'Night vision (up to 100ft)',
        'Professional cable runs & mounting',
        'Secure remote access configuration',
        '1 year of support',
      ],
      idealFor: 'Retail, warehouses, offices, multi-unit properties',
    },
    {
      id: 5,
      name: 'Fully Managed Business',
      price: 'From $499/month',
      priceDetail: 'From $499/month',
      oneLiner: 'Complete IT infrastructure with ongoing management',
      category: 'subscription',
      isFeatured: true,
      badge: 'Best Value',
      features: [
        'Everything in Smart Office (included in setup)',
        '24/7 network monitoring',
        'Proactive security updates & patches',
        'Cloud backup management (up to 500GB)',
        'Priority support (4-hour response time)',
        'Quarterly on-site visits',
        'Equipment refresh planning',
        'Vendor management & coordination',
        'Monthly reports & recommendations',
        'Unlimited remote support',
      ],
      idealFor: 'Businesses that want IT peace of mind and predictable costs',
    },
  ]

  const addOns = [
    {
      name: 'Additional Access Points',
      price: '$350 - $500 each',
      description: 'Expand coverage as your business grows',
    },
    {
      name: 'Additional Cameras',
      price: '$300 - $600 each',
      description: 'Add more cameras to existing NVR',
    },
    {
      name: 'Cloud Backup Setup',
      price: '$500 + $50/month',
      description: 'Automated cloud backup for critical data',
    },
    {
      name: 'VPN Configuration',
      price: '$300 - $800',
      description: 'Secure remote access for employees',
    },
    {
      name: 'Website Redesign',
      price: 'Starting at $2,000',
      description: 'Refresh your existing website',
    },
    {
      name: 'Training Session',
      price: '$150/hour',
      description: 'On-site or remote training for your team',
    },
  ]

  return (
    <div className="py-12 sm:py-16 md:py-24">
      <Container>
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">Packages & Pricing</h1>
          <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Transparent pricing. No surprises. Choose the package that fits your needs,
            or we'll create a custom solution.
          </p>
        </div>

        {/* Main Packages */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {packages.slice(0, 3).map((pkg) => (
              <Card
                key={pkg.id}
                className={
                  pkg.isFeatured
                    ? 'border-2 border-colatech-green relative transform lg:scale-105 shadow-glow-green'
                    : ''
                }
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-colatech-green px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                    {pkg.badge}
                  </div>
                )}

                <h2 className="text-xl sm:text-2xl font-bold mb-2">{pkg.name}</h2>
                <p className="text-xs sm:text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-3 sm:mb-4">
                  {pkg.oneLiner}
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-colatech-green mb-4 sm:mb-6">
                  {pkg.price}
                </p>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 w-full">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 justify-center sm:justify-start">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-colatech-green flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 text-left">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-4 sm:mb-6">
                  <strong>Ideal for:</strong> {pkg.idealFor}
                </p>

                <Link href="/contact" className="w-full">
                  <Button
                    variant={pkg.isFeatured ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* Additional Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {packages.slice(3).map((pkg) => (
              <Card
                key={pkg.id}
                className={
                  pkg.isFeatured
                    ? 'border-2 border-colatech-green'
                    : ''
                }
              >
                {pkg.badge && (
                  <div className="inline-block bg-colatech-green px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold mb-2 sm:mb-3">
                    {pkg.badge}
                  </div>
                )}

                <h2 className="text-xl sm:text-2xl font-bold mb-2">{pkg.name}</h2>
                <p className="text-xs sm:text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-3 sm:mb-4">
                  {pkg.oneLiner}
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-colatech-green mb-4 sm:mb-6">
                  {pkg.price}
                </p>

                <ul className="space-y-2 mb-4 sm:mb-6 w-full">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 justify-center sm:justify-start">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-colatech-green flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 text-left">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-4 sm:mb-6">
                  <strong>Ideal for:</strong> {pkg.idealFor}
                </p>

                <Link href="/contact" className="w-full">
                  <Button
                    variant={pkg.isFeatured ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full"
                  >
                    {pkg.category === 'subscription' ? 'Schedule Consult' : 'Request Quote'}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Add-Ons */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center px-4">Add-Ons & Extras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {addOns.map((addon) => (
              <Card key={addon.name} hoverable>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{addon.name}</h3>
                <p className="text-lg sm:text-xl font-bold text-colatech-green mb-2">
                  {addon.price}
                </p>
                <p className="text-xs sm:text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {addon.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center px-4">Pricing FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <Card>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Do you offer payment plans?</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 text-sm sm:text-base">
                For larger projects ($5,000+), we can discuss milestone-based payment plans.
                We accept check, credit card, or bank transfer.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">What's included in the quoted price?</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 text-sm sm:text-base">
                All quotes include equipment, installation labor, cable runs, configuration,
                testing, and initial support. We provide detailed quotes before starting any work.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Can I upgrade later?</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 text-sm sm:text-base">
                Absolutely! Our systems are designed to scale. Add more access points, cameras,
                or services as your business grows.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Do you price match?</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 text-sm sm:text-base">
                We focus on value over being the cheapest. Our pricing reflects enterprise-grade
                equipment, professional installation, and ongoing support. You get what you pay for.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-4">Not Sure Which Package?</h2>
          <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Schedule a free consultation. We'll assess your needs and recommend the best solution.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
