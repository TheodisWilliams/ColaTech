import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Headphones, Check, Clock, Zap, Shield, TrendingUp } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Managed IT Support & Maintenance',
  description: 'Ongoing IT support, maintenance, and management for businesses. Predictable monthly pricing with priority support.',
}

export default function ManagedSupportPage() {
  const features = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Unlimited Remote Support',
      description: 'Email, phone, and remote desktop support included—no hourly charges',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Priority Response',
      description: '4-hour response time for critical issues, same-day for standard requests',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Proactive Monitoring',
      description: '24/7 monitoring catches issues before they cause downtime',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Security Updates',
      description: 'Firmware updates, patches, and security hardening applied automatically',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Quarterly Reviews',
      description: 'On-site visits to review performance, plan upgrades, and train staff',
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: 'Vendor Management',
      description: 'We coordinate with ISPs, software vendors, and other IT providers',
    },
  ]

  const whatsCovered = [
    'Network infrastructure (switches, APs, firewalls)',
    'Security camera systems and NVRs',
    'Cloud backups and monitoring',
    'VPN and remote access',
    'Wi-Fi troubleshooting and optimization',
    'Server and workstation support',
    'Printer and peripheral issues',
    'Software licensing and renewals',
  ]

  const whatsNotCovered = [
    'End-user training (available at $150/hour)',
    'Major hardware upgrades (quoted separately)',
    'New installs and expansions (quoted separately)',
    'On-site visits beyond quarterly (available at $150/hour)',
  ]

  const packages = [
    {
      name: 'Essential Support',
      price: '$299/month',
      features: [
        'Unlimited remote support',
        '24/7 network monitoring',
        'Backup management (up to 250GB)',
        'Security updates and patches',
        'Email support (next-day response)',
        'Quarterly on-site visit',
      ],
      idealFor: 'Small businesses (5-15 employees)',
    },
    {
      name: 'Business Support',
      price: '$499/month',
      features: [
        'Everything in Essential',
        'Priority 4-hour response time',
        'Phone and email support',
        'Backup management (up to 500GB)',
        'Monthly performance reports',
        'Equipment refresh planning',
        'After-hours emergency support',
      ],
      idealFor: 'Growing businesses (15-50 employees)',
      featured: true,
    },
    {
      name: 'Enterprise Support',
      price: '$999+/month',
      features: [
        'Everything in Business',
        'Dedicated account manager',
        'Unlimited backup storage',
        'Multi-site support',
        'Custom SLA (1-2 hour response)',
        'Monthly on-site visits',
        'IT roadmap and budgeting',
      ],
      idealFor: 'Multi-location businesses, critical operations',
    },
  ]

  const benefits = [
    {
      title: 'Predictable Costs',
      description: 'Fixed monthly fee—no surprise bills or hourly charges for support',
    },
    {
      title: 'Proactive, Not Reactive',
      description: 'We fix issues before they break. No more "everything was fine until it wasn't"',
    },
    {
      title: 'Peace of Mind',
      description: 'Sleep better knowing someone is watching your systems 24/7',
    },
    {
      title: 'Free Up Your Time',
      description: 'Stop troubleshooting IT issues and focus on running your business',
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
            <Headphones className="w-8 h-8 text-colatech-green" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Managed IT Support & Maintenance</h1>
          <p className="text-xl text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 max-w-3xl">
            Ongoing IT support and maintenance for a predictable monthly fee. We monitor, maintain, and
            support your entire infrastructure—you get priority service and peace of mind.
          </p>
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <Card className="bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50">
            <h2 className="text-2xl font-bold mb-4">The Problem with Break-Fix IT</h2>
            <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-4">
              Most businesses call IT help only when something breaks. The problem? By then it's an emergency.
              You're losing money every hour the system is down, and emergency support bills at $150-$200/hour.
            </p>
            <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
              Managed support flips the model: we monitor and maintain your systems proactively, catching issues
              before they cause downtime. You pay a fixed monthly fee and get unlimited remote support.
            </p>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What's Included</h2>
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

        {/* What's Covered vs Not Covered */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-colatech-green">
              <h3 className="text-2xl font-bold mb-4 text-colatech-green">What's Covered</h3>
              <ul className="space-y-3">
                {whatsCovered.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-colatech-green flex-shrink-0 mt-0.5" />
                    <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4">What's Not Covered</h3>
              <ul className="space-y-3">
                {whatsNotCovered.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                      • {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mt-6">
                Anything not covered gets quoted separately—no surprises. We provide detailed estimates
                before any billable work.
              </p>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Managed Support?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} hoverable>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Support Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={
                  pkg.featured
                    ? 'border-2 border-colatech-green relative transform lg:scale-105 shadow-glow-green'
                    : ''
                }
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-colatech-green px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-colatech-green mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-colatech-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-6">
                  <strong>Ideal for:</strong> {pkg.idealFor}
                </p>
                <Link href="/contact">
                  <Button
                    variant={pkg.featured ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mt-8">
            All packages require existing ColaTech-installed infrastructure or one-time audit/setup fee.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Initial Audit',
                description: 'We assess your current infrastructure and document everything',
              },
              {
                step: '2',
                title: 'Setup Monitoring',
                description: 'Install monitoring agents and configure alerts',
              },
              {
                step: '3',
                title: 'Ongoing Support',
                description: 'We handle all IT issues, updates, and maintenance',
              },
              {
                step: '4',
                title: 'Quarterly Reviews',
                description: 'On-site visits to plan upgrades and optimize systems',
              },
            ].map((item) => (
              <Card key={item.step} hoverable>
                <div className="text-4xl font-bold text-colatech-green mb-3">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready for IT Peace of Mind?</h2>
          <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation and we'll recommend the right support package for your business.
            No commitment required.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
