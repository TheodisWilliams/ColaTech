import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Check, Monitor, ArrowRight, Star } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Business Website + Email - $1,500-$3,000',
  description: 'Complete business website with professional email, Google Business setup, and analytics. Most popular package.',
}

export default function BusinessWebsiteEmailPage() {
  const included = [
    '5-10 custom pages',
    'Everything in Website Starter',
    'Business email setup (Google Workspace or Microsoft 365)',
    'Google Business Profile setup or optimization',
    'On-page SEO for key services',
    'Google Analytics + Search Console setup',
    'Basic performance optimization',
    'Training session for email and website',
    '10-14 business day turnaround',
  ]

  const emailSetup = [
    'Professional email addresses (@yourbusiness.com)',
    'Choice of Google Workspace or Microsoft 365',
    'Spam filtering and security',
    'Calendar and contacts sync',
    'Mobile app setup',
    'Email signature design',
  ]

  const seoIncludes = [
    'Keyword research for your services',
    'Optimized page titles and descriptions',
    'Header tag optimization',
    'Image alt text for accessibility',
    'Google Search Console setup',
    'Local business schema markup',
  ]

  const perfectFor = [
    'Service businesses (plumbers, electricians, contractors)',
    'Medical and dental practices',
    'Law firms and professional services',
    'Retail stores and local shops',
    'Restaurants and hospitality',
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-colatech-green/10 rounded-xl mb-6">
            <Monitor className="w-8 h-8 text-colatech-green" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-colatech-green text-white rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
          <h1 className="text-5xl font-bold mb-6">Business Website + Email</h1>
          <p className="text-3xl font-bold text-colatech-green mb-4">$1,500 - $3,000</p>
          <p className="text-xl text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 max-w-3xl">
            Everything you need to run your business online: professional website, business email,
            Google Business Profile, and analytics.
          </p>
        </div>

        {/* What's Included */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What is Included</h2>
          <Card className="border-2 border-colatech-green">
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

        {/* Email Setup Details */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-2xl font-bold mb-4">Business Email Setup</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-6">
                We set up professional email for your entire team with Google Workspace or Microsoft 365.
              </p>
              <ul className="space-y-3">
                {emailSetup.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-colatech-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4">SEO Optimization</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-6">
                We optimize your website so customers can find you on Google.
              </p>
              <ul className="space-y-3">
                {seoIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-colatech-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Google Business Profile */}
        <section className="mb-16">
          <Card className="bg-colatech-green/5 border-colatech-green/20">
            <h3 className="text-2xl font-bold mb-4">Google Business Profile Setup</h3>
            <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-4">
              We create or optimize your Google Business Profile so you show up in local search results
              and Google Maps. This is critical for local businesses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <div className="text-3xl font-bold text-colatech-green mb-2">70%</div>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  of consumers visit a business after finding it on Google Maps
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-colatech-green mb-2">3x</div>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  more likely to be trusted with a complete profile
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-colatech-green mb-2">Free</div>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  advertising on Google Search and Maps
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Perfect For */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Ideal For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        {/* CTA */}
        <div className="text-center bg-colatech-green/10 border-2 border-colatech-green rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Most Popular Choice for Small Businesses</h2>
          <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-8 max-w-2xl mx-auto">
            Get everything you need to run your business online: website, email, and local SEO.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Book a Free Consultation
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
