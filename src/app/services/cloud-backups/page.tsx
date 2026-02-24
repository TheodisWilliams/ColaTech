import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Cloud, Check, AlertCircle, Activity, HardDrive } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Cloud Backups & Network Monitoring',
  description: 'Automated cloud backups and 24/7 network monitoring to protect your business data and infrastructure.',
}

export default function CloudBackupsPage() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Automated Cloud Backups',
      description: 'Nightly backups to secure cloud storage with versioning and retention policies',
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: '24/7 Network Monitoring',
      description: 'Real-time monitoring of servers, network devices, and internet connectivity',
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Instant Alerts',
      description: 'Email and SMS alerts when issues are detected—fix problems before users notice',
    },
    {
      icon: <HardDrive className="w-6 h-6" />,
      title: 'Local + Cloud Backup',
      description: '3-2-1 backup strategy: 3 copies, 2 different media, 1 offsite',
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: 'Easy Restore',
      description: 'Fast file recovery from web dashboard—restore individual files or entire systems',
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Performance Reports',
      description: 'Monthly reports on backup status, network uptime, and disk usage',
    },
  ]

  const whatWeBackup = [
    'QuickBooks and accounting data',
    'Customer databases and CRM data',
    'Documents, spreadsheets, PDFs',
    'Email (PST files, mailboxes)',
    'Photos and project files',
    'Server configurations and VMs',
  ]

  const monitoringIncludes = [
    'Internet uptime monitoring',
    'Server CPU, RAM, and disk usage',
    'Network device status (switches, APs, firewalls)',
    'Camera system and NVR health',
    'Website uptime (if applicable)',
    'Bandwidth usage and top talkers',
  ]

  const packages = [
    {
      name: 'Backup Only',
      price: '$50 - $150/month',
      features: [
        'Up to 500GB cloud storage',
        'Automated nightly backups',
        'File versioning (30 days)',
        'Web dashboard access',
        'Email alerts for failures',
        'One-time setup: $500',
      ],
      idealFor: 'Small businesses, single server or PC',
    },
    {
      name: 'Backup + Monitoring',
      price: '$150 - $300/month',
      features: [
        'Up to 1TB cloud storage',
        '24/7 network monitoring',
        'Instant SMS/email alerts',
        'Monthly performance reports',
        'Backup verification testing',
        'Priority support included',
        'One-time setup: $800',
      ],
      idealFor: 'Growing businesses with critical systems',
      featured: true,
    },
    {
      name: 'Enterprise Backup',
      price: '$300+/month',
      features: [
        'Unlimited cloud storage',
        'Multi-site backup replication',
        'Database backup (SQL, MySQL)',
        'Virtual machine backups',
        'Compliance reporting (HIPAA, etc.)',
        'Quarterly restore testing',
        'One-time setup: $1,500+',
      ],
      idealFor: 'Multi-location businesses, healthcare, finance',
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
            <Cloud className="w-8 h-8 text-colatech-green" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Cloud Backups & Network Monitoring</h1>
          <p className="text-xl text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 max-w-3xl">
            Hard drives fail. Ransomware happens. Network issues cost money. We provide automated backups
            and 24/7 monitoring so you're protected and problems get fixed before they hurt your business.
          </p>
        </div>

        {/* The Risk */}
        <section className="mb-16">
          <Card className="bg-red-900/10 border-red-900/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-500" />
              What Happens Without Backups
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
              <div>
                <p className="font-semibold mb-2">Real scenarios we've seen:</p>
                <ul className="space-y-2">
                  <li>• Ransomware encrypts all company files</li>
                  <li>• Hard drive fails, years of work gone</li>
                  <li>• Employee deletes critical files by mistake</li>
                  <li>• Flood/fire destroys office and server</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">The cost:</p>
                <ul className="space-y-2">
                  <li>• Days or weeks of lost productivity</li>
                  <li>• Thousands in data recovery attempts</li>
                  <li>• Angry customers and missed deadlines</li>
                  <li>• Some businesses never recover</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 font-semibold">
              Cloud backups cost $50-$300/month. Data loss costs thousands—or your entire business.
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

        {/* What We Back Up */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-2xl font-bold mb-4">What We Back Up</h3>
              <ul className="space-y-3">
                {whatWeBackup.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-colatech-green flex-shrink-0 mt-0.5" />
                    <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mt-6">
                We back up critical business data from servers, workstations, and network storage.
                Backups run automatically every night with zero manual effort.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-4">Network Monitoring Includes</h3>
              <ul className="space-y-3">
                {monitoringIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-colatech-green flex-shrink-0 mt-0.5" />
                    <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mt-6">
                We monitor your entire infrastructure 24/7. If something goes down or performance degrades,
                we're alerted immediately and can fix issues remotely.
              </p>
            </Card>
          </div>
        </section>

        {/* 3-2-1 Backup Strategy */}
        <section className="mb-16">
          <Card className="border-2 border-colatech-green">
            <h2 className="text-2xl font-bold mb-4">The 3-2-1 Backup Rule</h2>
            <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-6">
              We follow the industry-standard 3-2-1 backup strategy for maximum protection:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-colatech-green mb-2">3</div>
                <p className="font-semibold mb-2">Copies of data</p>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  Production data + 2 backups
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-colatech-green mb-2">2</div>
                <p className="font-semibold mb-2">Different media types</p>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  Local NAS + Cloud storage
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-colatech-green mb-2">1</div>
                <p className="font-semibold mb-2">Copy offsite</p>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  Cloud backup survives local disasters
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Packages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Backup & Monitoring Packages</h2>
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
        </section>

        {/* CTA */}
        <div className="text-center bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Don't Gamble With Your Data</h2>
          <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-8 max-w-2xl mx-auto">
            Setup takes one afternoon. Monthly cost is less than an hour of your time. The peace of mind
            is priceless.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Set Up Backups Now
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
