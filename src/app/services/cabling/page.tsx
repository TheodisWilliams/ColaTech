import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Cable, Check, Zap, Network } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Structured Cabling & PoE Installation',
  description: 'Professional network cabling, cable drops, and Power over Ethernet (PoE) installation for businesses.',
}

export default function CablingPage() {
  const features = [
    {
      icon: <Cable className="w-6 h-6" />,
      title: 'Cat6/Cat6a Cabling',
      description: 'Certified cable runs supporting 10 Gigabit speeds for future-proof infrastructure',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Power over Ethernet (PoE)',
      description: 'Single cable provides power and data to access points, cameras, and VoIP phones',
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Professional Termination',
      description: 'Wall jacks, patch panels, and cable management done to industry standards',
    },
    {
      icon: <Cable className="w-6 h-6" />,
      title: 'Cable Testing & Certification',
      description: 'Every cable tested for performance and certified to Cat6 specifications',
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: 'Clean Installation',
      description: 'Hidden cable runs, professional mounting, labeled cables, organized patch panels',
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Cable Management',
      description: 'Velcro straps, cable trays, and proper bundling—no spaghetti mess',
    },
  ]

  const commonUses = [
    {
      title: 'Wi-Fi Access Points',
      description: 'Ceiling-mounted APs need power and network—PoE provides both with one cable',
    },
    {
      title: 'Security Cameras',
      description: 'IP cameras run on PoE, eliminating the need for nearby power outlets',
    },
    {
      title: 'VoIP Phones',
      description: 'Desk phones powered via PoE, no bulky power adapters',
    },
    {
      title: 'Wired Workstations',
      description: 'Faster, more reliable than Wi-Fi for desktops and heavy data users',
    },
    {
      title: 'Network Switches',
      description: 'Connect multiple devices in server rooms, closets, or distribution points',
    },
    {
      title: 'Point-of-Sale Systems',
      description: 'Reliable wired connection for POS terminals, printers, and cash drawers',
    },
  ]

  const pricingExamples = [
    {
      service: 'Single Cable Drop',
      price: '$150 - $300',
      description: 'One cable run from network closet to wall jack (up to 150 feet)',
    },
    {
      service: 'Office Build-Out',
      price: '$2,000 - $5,000',
      description: '10-20 cable drops with patch panel, testing, and documentation',
    },
    {
      service: 'Retail/Warehouse',
      price: '$3,000 - $10,000',
      description: 'Multiple cable runs for cameras, APs, and POS—includes conduit if needed',
    },
    {
      service: 'Cable Cleanup/Reorganization',
      price: '$500 - $2,000',
      description: 'Clean up existing mess, label cables, install cable management',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-colatech-grey-3 hover:text-colatech-green transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-100 rounded-xl mb-6">
            <Cable className="w-8 h-8 text-colatech-green" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Structured Cabling & PoE Installation</h1>
          <p className="text-xl text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 max-w-3xl">
            Professional network cabling is the backbone of your IT infrastructure. We run clean, certified cable
            that performs reliably for 10+ years—no shortcuts, no messy installs.
          </p>
        </div>

        {/* Why Professional Cabling Matters */}
        <section className="mb-16">
          <Card className="bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50">
            <h2 className="text-2xl font-bold mb-4">Why Professional Cabling Matters</h2>
            <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-4">
              Bad cabling causes intermittent network issues, slow speeds, and endless troubleshooting.
              We've seen cable runs done by "handyman" types that fail within months.
            </p>
            <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
              Our installations are certified, tested, and built to last. We follow TIA/EIA standards,
              label everything, and provide documentation so future techs know what's what.
            </p>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} hoverable>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-colatech-grey-2 dark:bg-colatech-grey-2 light:bg-gray-100 rounded-lg mb-4 text-colatech-green">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* What is PoE? */}
        <section className="mb-16">
          <Card className="border-2 border-colatech-green">
            <div className="flex items-start gap-4 mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-colatech-green/10 rounded-lg flex-shrink-0">
                <Zap className="w-6 h-6 text-colatech-green" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">What is Power over Ethernet (PoE)?</h2>
                <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-4">
                  PoE delivers power and data over a single Ethernet cable. No need for electrical outlets
                  near access points or cameras—the network switch provides power.
                </p>
                <ul className="space-y-2">
                  {[
                    'PoE (802.3af): Up to 15.4W per port—enough for basic APs and cameras',
                    'PoE+ (802.3at): Up to 30W per port—powers advanced APs and PTZ cameras',
                    'PoE++ (802.3bt): Up to 60-90W per port—for high-power devices',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-colatech-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Common Uses */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Common Uses for Network Cabling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonUses.map((use) => (
              <Card key={use.title} hoverable>
                <h3 className="text-lg font-semibold mb-2">{use.title}</h3>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {use.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pricingExamples.map((example) => (
              <Card key={example.service}>
                <h3 className="text-xl font-semibold mb-2">{example.service}</h3>
                <p className="text-2xl font-bold text-colatech-green mb-3">{example.price}</p>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {example.description}
                </p>
              </Card>
            ))}
          </div>
          <p className="text-center text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mt-8">
            Pricing depends on cable length, building type (drywall vs concrete), and complexity.
            We provide detailed quotes after a site survey.
          </p>
        </section>

        {/* Installation Includes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Every Installation Includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Site survey and cable path planning',
              'Cat6 or Cat6a plenum-rated cable',
              'Professional wall jacks and faceplates',
              'Patch panel termination in network closet',
              'Cable testing and certification',
              'Labeling (both ends of every cable)',
              'Network diagram and documentation',
              'Cable management and cleanup',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-colatech-green flex-shrink-0 mt-0.5" />
                <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Need Cable Runs?</h2>
          <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need one cable drop or a full office build-out, we'll provide a detailed quote
            after a quick site visit.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Request Site Survey
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
