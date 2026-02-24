import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, Check, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Websites & Web Apps',
  description: 'Custom websites and web applications built for your business with modern design, fast performance, and SEO optimization.',
}

export default function WebsitesServicePage() {
  const features = [
    {
      title: 'Mobile-First Design',
      description: 'Responsive layouts that work perfectly on all devices, from phones to desktops.',
    },
    {
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to help you rank on Google and attract customers.',
    },
    {
      title: 'Fast Performance',
      description: 'Optimized for speed with modern frameworks, CDN delivery, and image optimization.',
    },
    {
      title: 'Easy Updates',
      description: 'Content management systems that you can update yourself without technical knowledge.',
    },
    {
      title: 'Security First',
      description: 'SSL certificates, secure hosting, regular updates, and protection against threats.',
    },
    {
      title: 'Custom Functionality',
      description: 'Booking systems, payment processing, user portals, and any feature you need.',
    },
  ]

  const packages = [
    {
      name: 'Marketing Website',
      price: '$1,500 - $3,000',
      description: 'Perfect for small businesses and startups',
      includes: [
        '5-10 page website',
        'Custom design',
        'Mobile responsive',
        'Contact forms',
        'Basic SEO',
        'SSL certificate',
      ],
    },
    {
      name: 'E-commerce Store',
      price: '$3,000 - $7,000',
      description: 'Sell products online with a professional store',
      includes: [
        'Product catalog',
        'Shopping cart',
        'Payment integration',
        'Inventory management',
        'Customer accounts',
        'Analytics dashboard',
      ],
    },
    {
      name: 'Web Application',
      price: '$5,000+',
      description: 'Custom business applications and tools',
      includes: [
        'Custom functionality',
        'User authentication',
        'Database integration',
        'API development',
        'Admin dashboard',
        'Ongoing support',
      ],
    },
  ]

  return (
    <div className="py-24">
      <Container>
        {/* Back Link */}
        <Link
          href="/services"
          className="text-colatech-green hover:underline mb-8 inline-flex items-center gap-2"
        >
          ← Back to Services
        </Link>

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-colatech-grey-1 rounded-2xl border border-colatech-grey-2">
              <Globe className="w-8 h-8 text-colatech-green" />
            </div>
            <h1 className="text-5xl font-bold">Websites & Web Apps</h1>
          </div>
          <p className="text-xl text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
            Professional websites and web applications that drive your business forward.
            From simple marketing sites to complex applications with custom functionality.
          </p>
        </div>

        {/* What We Build */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">What We Build</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-semibold mb-3">Marketing Websites</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                Fast, SEO-optimized sites that convert visitors into customers.
                Perfect for small businesses, professionals, and service providers.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-3">E-commerce Stores</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                Online stores with secure checkout, inventory management, and shipping integration.
                Sell products 24/7.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-3">Web Applications</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                Custom dashboards, booking systems, client portals, and business tools
                built specifically for your needs.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-3">Content Management</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                Easy-to-update websites built on WordPress, Strapi, or custom CMS platforms.
                Update content yourself.
              </p>
            </Card>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-colatech-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <Card>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Modern Frameworks</h3>
                <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  Next.js, React, TypeScript for modern web applications
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Styling & Design</h3>
                <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  Tailwind CSS for responsive, mobile-first design
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Content Management</h3>
                <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  Strapi, WordPress, or custom CMS solutions
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Performance & Security</h3>
                <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  Cloudflare CDN, SSL certificates, and security hardening
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Packages */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Pricing Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.name} hoverable>
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-2xl font-bold text-colatech-green mb-2">
                  {pkg.price}
                </p>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-6">
                  {pkg.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-colatech-green flex-shrink-0 mt-0.5" />
                      <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
          <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a custom quote for your project. We'll discuss your goals, timeline,
            and create a solution that fits your budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Request a Quote
              </Button>
            </Link>
            <Link href="/packages">
              <Button variant="secondary" size="lg">
                View All Packages
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
