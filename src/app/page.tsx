import HeroSection from '@/components/home/HeroSection'
import ServicesGrid from '@/components/home/ServicesGrid'
import PricingSection from '@/components/home/PricingSection'
import ContactSection from '@/components/home/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <PricingSection />
      <ContactSection />
    </>
  )
}
