import type { Metadata } from 'next'
import Link from 'next/link'
import { Wifi, Check, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Wi-Fi & Network Upgrades',
  description: 'Enterprise-grade wireless networks with full coverage, seamless roaming, and advanced security for Houston businesses.',
}

export default function WiFiNetworkServicePage() {
  const features = [
    {
      title: 'Site Survey & Planning',
      description: 'RF analysis to determine optimal access point placement for complete coverage.',
    },
    {
      title: 'Enterprise Access Points',
      description: 'Business-grade hardware with seamless roaming as you move throughout your space.',
    },
    {
      title: 'VLAN Segmentation',
      description: 'Separate networks for guests, cameras, IoT devices, and employee devices.',
    },
    {
      title: 'Remote Management',
      description: 'Monitor and troubleshoot your network from anywhere with cloud-based control.',
    },
    {
      title: 'Guest WiFi',
      description: 'Isolated guest network that keeps your business network secure.',
    },
    {
      title: 'VPN Support',
      description: 'Secure remote access for employees working from home or traveling.',
    },
  ]

  const benefits = [
    'Eliminate dead zones with professional placement',
    'Wi-Fi 6/6E technology for gigabit speeds',
    'Seamless roaming between access points',
    'Support 100+ concurrent devices',
    'Centralized management dashboard',
    'Network monitoring and alerts',
    '90 days of support included',
    'Professional cable management',
  ]

  return (
    <div className="py-24">
      <Container>
        <Link
          href="/services"
          className="text-colatech-green hover:underline mb-8 inline-flex items-center gap-2"
        >
          ← Back to Services
        </Link>

        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-100 rounded-2xl border border-colatech-grey-2 dark:border-colatech-grey-2 light:border-gray-300">
              <Wifi className="w-8 h-8 text-colatech-green" />
            </div>
            <h1 className="text-5xl font-bold">Wi-Fi & Network Upgrades</h1>
          </div>
          <p className="text-xl text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
            Enterprise-grade wireless networks that deliver fast, reliable coverage
            throughout your entire space. No more dead zones.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">The Problem with Consumer Routers</h2>
          <Card className="mb-8">
            <div className="space-y-4">
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                Consumer-grade routers weren't designed for business environments. They struggle with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                    Multiple concurrent users and devices
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                    Covering large or multi-story spaces
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                    Advanced security features
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                    Professional support and management
                  </span>
                </li>
              </ul>
            </div>
          </Card>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">What You Get</h2>
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

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Typical Installation Includes</h2>
          <Card>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-colatech-green flex-shrink-0 mt-0.5" />
                  <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Perfect For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-semibold mb-3">Small Offices</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                5-50 employees who need reliable connectivity for laptops, phones,
                and business applications.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-3">Retail Spaces</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                Point-of-sale systems, inventory scanners, customer Wi-Fi, and
                security cameras all on one network.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-3">Multi-Story Buildings</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                Consistent coverage across multiple floors with seamless roaming
                as you move between levels.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-3">Warehouses</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                Long-range coverage for large open spaces with minimal access points.
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Pricing</h2>
          <Card className="border-2 border-colatech-green">
            <div className="text-center mb-6">
              <p className="text-3xl font-bold text-colatech-green mb-2">
                $3,500 – $7,000
              </p>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                Most small business network upgrades
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                Final cost depends on:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-colatech-green flex-shrink-0 mt-0.5" />
                  <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">Size of your space (square footage)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-colatech-green flex-shrink-0 mt-0.5" />
                  <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">Number of users and devices</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-colatech-green flex-shrink-0 mt-0.5" />
                  <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">Specific requirements (VLANs, VPN, etc.)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-colatech-green flex-shrink-0 mt-0.5" />
                  <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">Complexity of cable runs</span>
                </li>
              </ul>
            </div>
          </Card>
        </section>

        <div className="text-center bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Upgrade Your Network</h2>
          <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a site visit for a free network assessment and detailed quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Request Site Visit
              </Button>
            </Link>
            <Link href="/packages">
              <Button variant="secondary" size="lg">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
