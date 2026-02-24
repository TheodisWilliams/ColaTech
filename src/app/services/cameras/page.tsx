import type { Metadata } from 'next'
import Link from 'next/link'
import { Camera, Check, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'IP Cameras & NVR',
  description: 'Professional PoE security camera systems with 4K recording, remote viewing, and motion alerts for Houston businesses.',
}

export default function CamerasServicePage() {
  const features = [
    {
      title: '4K Resolution',
      description: 'Crystal-clear video with facial recognition quality. See every detail.',
    },
    {
      title: 'Night Vision',
      description: 'Infrared LEDs for clear footage in complete darkness up to 100ft.',
    },
    {
      title: 'Smart Alerts',
      description: 'Motion-triggered notifications sent directly to your phone.',
    },
    {
      title: 'Secure Remote Access',
      description: 'View live and recorded footage from anywhere via mobile app or web browser.',
    },
    {
      title: 'PoE Installation',
      description: 'Power over Ethernet means cleaner installation with one cable per camera.',
    },
    {
      title: 'Local Storage',
      description: 'Encrypted recording on NVR or NAS with optional cloud backup.',
    },
  ]

  const systemSizes = [
    {
      name: '4-Camera System',
      price: '$2,500 - $3,500',
      ideal: 'Small retail, office entry points',
      includes: [
        '4 PoE IP cameras (4K)',
        'NVR with 2TB storage',
        '30 days continuous recording',
        'Mobile app setup',
        'Professional mounting',
        'Cable runs (up to 100ft each)',
      ],
    },
    {
      name: '8-Camera System',
      price: '$4,000 - $6,000',
      ideal: 'Retail stores, small warehouses',
      includes: [
        '8 PoE IP cameras (4K)',
        'NVR with 4TB storage',
        '30-60 days recording',
        'Mobile + web access',
        'Mix of dome/bullet cameras',
        'PoE switch if needed',
      ],
    },
    {
      name: '12+ Camera System',
      price: '$7,000+',
      ideal: 'Large retail, multi-building',
      includes: [
        '12+ PoE IP cameras',
        'NVR with 6TB+ storage',
        '60-90 days recording',
        'PTZ camera options',
        'Advanced motion zones',
        'Full network integration',
      ],
    },
  ]

  const cameraTypes = [
    {
      name: 'Dome Cameras',
      description: 'Discreet, vandal-resistant, 360° coverage. Ideal for indoor retail and offices.',
    },
    {
      name: 'Bullet Cameras',
      description: 'Long-range, weatherproof, highly visible deterrent. Perfect for perimeters.',
    },
    {
      name: 'Turret Cameras',
      description: 'Wide-angle, indoor/outdoor, easy to aim. Great for general coverage.',
    },
    {
      name: 'PTZ Cameras',
      description: 'Pan, tilt, zoom with remote control. Monitor large areas actively.',
    },
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
              <Camera className="w-8 h-8 text-colatech-green" />
            </div>
            <h1 className="text-5xl font-bold">IP Cameras & NVR</h1>
          </div>
          <p className="text-xl text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
            Protect your business with high-definition IP cameras, secure recording,
            and remote viewing from anywhere in the world.
          </p>
        </div>

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

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Camera Types</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cameraTypes.map((type) => (
              <Card key={type.name}>
                <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {type.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Why PoE (Power over Ethernet)?</h2>
          <Card>
            <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-4">
              Power over Ethernet delivers both power and data through a single cable:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-colatech-green flex-shrink-0 mt-0.5" />
                <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  Cleaner installation (no separate power adapters)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-colatech-green flex-shrink-0 mt-0.5" />
                <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  More reliable (enterprise switches with battery backup)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-colatech-green flex-shrink-0 mt-0.5" />
                <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  Easier troubleshooting (one cable to check)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-colatech-green flex-shrink-0 mt-0.5" />
                <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  Scalable (add cameras as you grow)
                </span>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">System Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {systemSizes.map((system) => (
              <Card key={system.name} hoverable>
                <h3 className="text-xl font-bold mb-2">{system.name}</h3>
                <p className="text-2xl font-bold text-colatech-green mb-2">
                  {system.price}
                </p>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-4">
                  Ideal for: {system.ideal}
                </p>
                <ul className="space-y-2">
                  {system.includes.map((item) => (
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

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Recording Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-semibold mb-2">Continuous</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                Record 24/7. Storage capacity determines retention period (typically 30-90 days).
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-2">Motion-Triggered</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                Record only when motion is detected. Extends storage capacity significantly.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold mb-2">Scheduled</h3>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                Record during business hours only. Perfect for offices with limited after-hours activity.
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Remote Viewing</h2>
          <Card>
            <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-4">
              Access your cameras from anywhere:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Mobile App</h3>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  iOS and Android apps with push notifications
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Web Browser</h3>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  Access from any computer with no software install
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Desktop Software</h3>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  Windows and Mac apps for advanced features
                </p>
              </div>
            </div>
            <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mt-4">
              All access is encrypted and protected with strong authentication.
            </p>
          </Card>
        </section>

        <div className="text-center bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Secure Your Business</h2>
          <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a free site visit to assess your security needs and get a detailed quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Request Site Visit
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
