import type { Metadata } from 'next'
import ContactSection from '@/components/home/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ColaTech Solutions for a free quote.',
}

export default function ContactPage() {
  return <ContactSection />
}
