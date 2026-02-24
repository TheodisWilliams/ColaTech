import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Award, Users, Target, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about ColaTech Solutions - Houston IT and web services company serving small businesses since 2019.',
}

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Results-Focused',
      description: 'We measure success by outcomes, not billable hours. Your business goals are our goals.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Over Shortcuts',
      description: 'We use enterprise-grade equipment and follow industry best practices. No cutting corners.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-First Approach',
      description: 'Clear communication, transparent pricing, and support that actually helps.',
    },
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '5 Years', label: 'Average Client Relationship' },
    { number: '100%', label: 'Houston-Based Team' },
    { number: '24/7', label: 'Monitoring & Support' },
  ]

  const story = [
    {
      year: '2019',
      title: 'Founded',
      description: 'Started with a simple mission: bring enterprise-grade IT to small businesses at fair prices.',
    },
    {
      year: '2020',
      title: 'Pandemic Pivot',
      description: 'Helped dozens of businesses transition to remote work with VPNs, cloud services, and secure networks.',
    },
    {
      year: '2022',
      title: 'Expanded Services',
      description: 'Added website development and managed IT support to complement our infrastructure services.',
    },
    {
      year: '2024',
      title: 'Today',
      description: 'Serving 50+ Houston businesses with websites, networking, security, and ongoing IT support.',
    },
  ]

  const whyChooseUs = [
    'Local Houston team—we are here when you need us',
    'Transparent pricing with detailed quotes',
    'Enterprise-grade equipment at small business prices',
    'We speak plain English, not tech jargon',
    'Fast response times and priority support',
    'We plan for growth, not just today',
  ]

  return (
    <div className="py-24">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About ColaTech Solutions</h1>
          <p className="text-xl text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 max-w-3xl mx-auto">
            We are a Houston-based IT and web services company helping small businesses
            build reliable digital infrastructure—without the enterprise price tag.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-20">
          <Card className="bg-colatech-green/5 border-colatech-green/20 text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To make enterprise-grade technology accessible to small businesses in Houston.
              We believe every business deserves fast websites, secure networks, and reliable IT support—
              without paying enterprise prices or dealing with pushy sales tactics.
            </p>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} hoverable className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-colatech-green/10 rounded-2xl mb-4 text-colatech-green">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <Card className="bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-colatech-green mb-2">{stat.number}</div>
                  <div className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Our Story Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {story.map((milestone, index) => (
              <Card key={milestone.year} hoverable>
                <div className="text-3xl font-bold text-colatech-green mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {milestone.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Businesses Choose ColaTech</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyChooseUs.map((reason) => (
              <div key={reason} className="flex items-center gap-3 p-4 bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-colatech-green/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-colatech-green" />
                </div>
                <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section - Placeholder */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet the Team</h2>
          <Card className="text-center py-12">
            <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 max-w-2xl mx-auto">
              Our team consists of experienced network engineers, web developers, and IT professionals
              who have worked with everything from Fortune 500 companies to local Houston businesses.
              We bring enterprise expertise to small business projects.
            </p>
          </Card>
        </section>

        {/* Service Area */}
        <section className="mb-20">
          <Card className="bg-colatech-green/5 border-colatech-green/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Proudly Serving Houston</h2>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 max-w-2xl mx-auto">
                We serve businesses throughout the Greater Houston area, including:
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {['Houston', 'Katy', 'Sugar Land', 'The Woodlands', 'Pearland', 'Cypress', 'Spring', 'Richmond'].map((city) => (
                <div key={city} className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {city}
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need a new website, network upgrade, or ongoing IT support—
            let us show you what professional service looks like.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Get Started
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="secondary" size="lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
