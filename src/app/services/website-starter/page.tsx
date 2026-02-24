import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Check, Globe, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Website Starter - $899-$1,500',
  description: 'Professional 5-page website for new and small businesses. Mobile-friendly, SEO-ready, delivered in 7-10 days.',
}

export default function WebsiteStarterPage() {
  const included = [
    'Up to 5 custom pages (Home, About, Services, Contact, +1)',
    'Mobile-friendly, modern design',
    'Contact form with email delivery',
    'Basic SEO setup (titles + meta descriptions)',
    'Google Maps embed',
    'SSL & security setup',
    'Social media links',
    '7-10 business day turnaround',
  ]

  const notIncluded = [
    { item: 'Web hosting', note: 'Can add for $59/month' },
    { item: 'Monthly updates', note: 'Available with support plan' },
    { item: 'Advanced SEO', note: 'Upgrade available' },
    { item: 'E-commerce functionality', note: 'See Business Website package' },
  ]

  const perfectFor = [
    'New businesses getting started',
    'Solo entrepreneurs and consultants',
    'Local service providers',
    'Professional practices (lawyers, doctors, etc.)',
    'Small retail shops',
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
            <Globe className="w-8 h-8 text-colatech-green" />
          </div>
          <div className="inline-block px-4 py-1 bg-colatech-grey-2 text-colatech-grey-3 rounded-full text-sm font-semibold mb-4">
            Best for New Businesses
          </div>
          <h1 className="text-5xl font-bold mb-6">Website Starter</h1>
          <p className="text-3xl font-bold text-colatech-green mb-4">$899 - $1,500</p>
          <p className="text-xl text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 max-w-3xl">
            Get your business online with a professional 5-page website. Mobile-friendly, SEO-ready,
            and delivered in 7-10 business days.
          </p>
        </div>

        {/* What's Included */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What's Included</h2>
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

        {/* Not Included (But Available) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Optional Add-Ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notIncluded.map((addon) => (
              <Card key={addon.item} hoverable>
                <h3 className="text-lg font-semibold mb-2">{addon.item}</h3>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {addon.note}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Perfect For */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {perfectFor.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50 rounded-xl">
                <Check className="w-5 h-5 text-colatech-green flex-shrink-0" />
                <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Discovery Call', description: 'We discuss your business, goals, and design preferences' },
              { step: '2', title: 'Design & Content', description: 'We build your site and gather your content (text, images, logo)' },
              { step: '3', title: 'Review & Revise', description: 'You review the site and request changes' },
              { step: '4', title: 'Launch', description: 'We go live and provide training on how to use your site' },
            ].map((item) => (
              <Card key={item.step} hoverable className="text-center">
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
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-8 max-w-2xl mx-auto">
            Get your business online with a professional website. No hidden fees, no surprises.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Get Started
              </Button>
            </Link>
            <Link href="https://calendly.com/colatech" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
