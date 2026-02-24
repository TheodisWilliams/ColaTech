'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const serviceOptions = [
  'Website/Web App',
  'Network Upgrade',
  'Security/Cameras',
  'Cabling/PoE',
  'Managed Support',
  'Other',
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    services: [] as string[],
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Failed to submit. Please call us at (713) 555-1234.')
    } finally {
      setSubmitting(false)
    }
  }

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  if (submitted) {
    return (
      <section className="py-24 bg-colatech-black">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-colatech-green rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
            <p className="text-colatech-grey-3 text-lg">
              We'll contact you within 24 hours to discuss your project.
            </p>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-24 bg-colatech-black">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Upgrade Your Infrastructure?</h2>
          <p className="text-colatech-grey-3 text-lg">
            Get a custom quote in 24 hours or book a 15-minute consult.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-colatech-grey-1 border border-colatech-grey-2 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-colatech-grey-2 border border-colatech-grey-2 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-colatech-green"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-colatech-grey-2 border border-colatech-grey-2 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-colatech-green"
                  placeholder="(713) 555-1234"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-colatech-grey-2 border border-colatech-grey-2 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-colatech-green"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-2">
                  Address/Zip
                </label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-colatech-grey-2 border border-colatech-grey-2 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-colatech-green"
                  placeholder="Houston, TX 77002"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">
                Desired Services *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {serviceOptions.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={cn(
                      'px-4 py-2 rounded-xl border-2 text-sm font-medium transition-all',
                      formData.services.includes(service)
                        ? 'border-colatech-green bg-colatech-green/10 text-white'
                        : 'border-colatech-grey-2 text-colatech-grey-3 hover:border-colatech-grey-3'
                    )}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="notes" className="block text-sm font-medium mb-2">
                Project Notes
              </label>
              <textarea
                id="notes"
                rows={4}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-colatech-grey-2 border border-colatech-grey-2 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-colatech-green resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {error && (
              <div className="mb-4 p-4 bg-red-900/20 border border-red-900/50 rounded-xl text-red-400 text-sm">
                {error}
              </div>
            )}

            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
              {submitting ? 'Sending...' : 'Get a Quote'}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  )
}
