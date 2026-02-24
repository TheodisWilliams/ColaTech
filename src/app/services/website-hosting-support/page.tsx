import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Check, Headphones, ArrowRight, Zap } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Website Hosting & Support - From $59/month',
  description: 'Ongoing website hosting, security, backups, updates, and support. Your recurring revenue engine.',
}

export default function WebsiteHostingSupportPage() {
  const included = [
    'Website hosting on fast, secure servers',
    'Security monitoring and malware protection',
    'Automated daily backups',
    'Software and plugin updates',
    'Minor content edits (text, images, links)',
    'Email support (response within 24 hours)',
    'Performance monitoring',
    'SSL certificate renewal',
  ]

  const optionalAddOns = [
    { name: 'SEO Monitoring', price: '+$49/month', description: 'Track rankings and traffic' },
    { name: 'Performance Tuning', price: '+$99/month', description: 'Speed optimization and monitoring' },
    { name: 'Monthly Reports', price: '+$29/month', description: 'Traffic and performance reports' },
    { name: 'Priority Support', price: '+$39/month', description: '4-hour response time' },
  ]

  const pricingTiers = [
    {
      name: 'Basic Hosting',
      price: '$59/month',
      features: [
        'Up to 5 page website',
        'Security + backups',
        'Minor content edits (1 hour/month)',
        'Email support',
      ],
      idealFor: 'Small business websites',
    },
    {
      name: 'Standard Hosting',
      price: '$99/month',
      features: [
        'Up to 10 page website',
        'Everything in Basic',
        'Content edits (2 hours/month)',
        'Monthly uptime report',
        'Priority support',
      ],
      idealFor: 'Growing businesses',
      featured: true,
    },
    {
      name: 'Premium Hosting',
      price: '$149/month',
      features: [
        'Unlimited pages',
        'Everything in Standard',
        'Content edits (4 hours/month)',
        'SEO monitoring',
        'Performance optimization',
        'Monthly analytics report',
      ],
      idealFor: 'Businesses relying on web traffic',
    },
  ]

  const whyMonthlyHosting = [
    {
      title: 'Peace of Mind',
      description: 'We handle all technical issues so you can focus on running your business',
    },
    {
      title: 'Stay Secure',
      description: 'Regular updates protect your site from hackers and security vulnerabilities',
    },
    {
      title: 'Always Fast',
      description: 'We monitor performance and fix slow load times before they hurt your business',
    },
    {
      title: 'Quick Updates',
      description: 'Need to change your hours or add a new service? We handle it within 24 hours',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        {/* Back Link */}
        <Link
          href="/#website-services"
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
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-colatech-grey-2 text-colatech-grey-3 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            Recurring Revenue
          </div>
          <h1 className="text-5xl font-bold mb-6">Website Hosting & Support</h1>
          <p className="text-3xl font-bold text-colatech-green mb-4">Starting at $59/month</p>
          <p className="text-xl text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 max-w-3xl">
            Ongoing website hosting, security, backups, updates, and support. We keep your website
            fast, secure, and up-to-date so you do not have to worry about it.
          </p>
        </div>

        {/* What's Included */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Every Plan Includes</h2>
          <Card>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-colatech-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-colatech-green" />
                  </div>
                  <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Hosting Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={tier.featured ? 'border-2 border-colatech-green relative transform lg:scale-105' : ''}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-colatech-green px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-colatech-green mb-6">{tier.price}</p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-colatech-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-6">
                  <strong>Ideal for:</strong> {tier.idealFor}
                </p>
                <Link href="/contact">
                  <Button variant={tier.featured ? 'primary' : 'secondary'} size="md" className="w-full">
                    Start Monthly Plan
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Optional Add-Ons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Optional Add-Ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {optionalAddOns.map((addon) => (
              <Card key={addon.name} hoverable>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">{addon.name}</h3>
                  <span className="text-lg font-bold text-colatech-green">{addon.price}</span>
                </div>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {addon.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Monthly Hosting */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Monthly Hosting?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyMonthlyHosting.map((reason) => (
              <Card key={reason.title} hoverable>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {reason.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* What Clients Say */}
        <section className="mb-16">
          <Card className="bg-colatech-green/5 border-colatech-green/20">
            <h3 className="text-2xl font-bold mb-4">What Our Clients Say</h3>
            <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 italic mb-4">
              "I used to stress about website updates and security. Now ColaTech handles everything.
              I email them a change and it is done within a day. Best $99/month I spend."
            </p>
            <p className="font-semibold">— Sarah M., Retail Business Owner</p>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Your Recurring Revenue Engine</h2>
          <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-8 max-w-2xl mx-auto">
            Lock in monthly recurring revenue while providing real value to your clients. Predictable income,
            happy customers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Start Monthly Plan
              </Button>
            </Link>
            <Link href="https://calendly.com/colatech" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg">
                Schedule a Call
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
