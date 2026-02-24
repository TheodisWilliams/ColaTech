import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Shield, Check, Lock, Globe, AlertTriangle } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Firewalls, VPN & Network Security',
  description: 'Enterprise-grade network security with firewalls, VPN, and threat protection for businesses.',
}

export default function FirewallVPNPage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Firewall',
      description: 'Hardware firewall with intrusion detection, threat prevention, and traffic filtering',
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Secure VPN Access',
      description: 'Encrypted remote access for employees working from anywhere',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Content Filtering',
      description: 'Block malicious sites, adult content, and time-wasting domains',
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Threat Monitoring',
      description: '24/7 monitoring for suspicious activity and attack attempts',
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: 'Automatic Updates',
      description: 'Security patches and firmware updates applied automatically',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'VLAN Segmentation',
      description: 'Isolate guest networks, IoT devices, and sensitive systems',
    },
  ]

  const threats = [
    'Ransomware and malware infections',
    'Unauthorized network access',
    'Data breaches and theft',
    'Employee browsing risky websites',
    'Unsecured remote access',
    'IoT device vulnerabilities',
  ]

  const packages = [
    {
      name: 'Basic Firewall',
      price: '$800 - $1,500',
      features: [
        'Hardware firewall installation',
        'Basic threat protection',
        'NAT and port forwarding',
        'Guest network isolation',
        'Configuration and documentation',
      ],
      idealFor: 'Small offices, home businesses',
    },
    {
      name: 'Business Security',
      price: '$2,000 - $4,000',
      features: [
        'Enterprise firewall with VPN',
        'Advanced threat prevention',
        'Content filtering',
        'Site-to-site VPN (multi-location)',
        'Remote access VPN (up to 25 users)',
        'VLAN segmentation',
        '3 months monitoring included',
      ],
      idealFor: 'Growing businesses, retail, professional services',
      featured: true,
    },
    {
      name: 'Enterprise Security',
      price: '$5,000+',
      features: [
        'Redundant firewall (high availability)',
        'Intrusion detection & prevention',
        'Advanced malware protection',
        'Unlimited VPN users',
        'Geo-blocking and traffic shaping',
        'Compliance reporting (HIPAA, PCI, etc.)',
        '12 months monitoring & support',
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
            <Shield className="w-8 h-8 text-colatech-green" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Firewalls, VPN & Network Security</h1>
          <p className="text-xl text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 max-w-3xl">
            Consumer routers have almost zero security. If your business handles customer data, financial transactions,
            or protected health information, you need a real firewall.
          </p>
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <Card className="bg-red-900/10 border-red-900/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              Common Security Threats
            </h2>
            <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-6">
              Without proper network security, your business is vulnerable to:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {threats.map((threat) => (
                <li key={threat} className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                    {threat}
                  </span>
                </li>
              ))}
            </ul>
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

        {/* VPN Explained */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-2xl font-bold mb-4">Remote Access VPN</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-4">
                Give employees secure access to your network from home, coffee shops, or client sites.
                Encrypted connection means data can't be intercepted.
              </p>
              <ul className="space-y-2">
                {[
                  'Access files and applications securely',
                  'No exposed RDP or open ports',
                  'Multi-factor authentication (MFA) support',
                  'Works on Windows, Mac, iOS, Android',
                ].map((item) => (
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
              <h3 className="text-2xl font-bold mb-4">Site-to-Site VPN</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-4">
                Connect multiple office locations into one secure network. Share files, printers,
                and applications across locations as if they're in the same building.
              </p>
              <ul className="space-y-2">
                {[
                  'Connect branch offices securely',
                  'Centralized file servers and backups',
                  'No monthly VPN service fees',
                  'Automatic failover and redundancy',
                ].map((item) => (
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

        {/* Packages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Security Packages</h2>
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
                    Request Quote
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Protect Your Business</h2>
          <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't wait for a breach. Schedule a free security assessment and we'll identify vulnerabilities
            in your current setup.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Schedule Security Assessment
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
