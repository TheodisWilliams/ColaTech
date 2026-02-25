import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import Container from '@/components/ui/Container'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-colatech-black border-t border-colatech-grey-2 py-8 sm:py-10 md:py-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8 text-center sm:text-left">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Cola<span className="text-colatech-green">Tech</span>
            </div>
            <p className="text-colatech-grey-3 text-xs sm:text-sm">
              Digital infrastructure for the modern business.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link href="/services" className="text-colatech-grey-3 hover:text-colatech-green text-xs sm:text-sm block">Websites</Link></li>
              <li><Link href="/services" className="text-colatech-grey-3 hover:text-colatech-green text-xs sm:text-sm block">Networking</Link></li>
              <li><Link href="/services" className="text-colatech-grey-3 hover:text-colatech-green text-xs sm:text-sm block">Security</Link></li>
              <li><Link href="/services" className="text-colatech-grey-3 hover:text-colatech-green text-xs sm:text-sm block">Managed Support</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link href="/about" className="text-colatech-grey-3 hover:text-colatech-green text-xs sm:text-sm block">About</Link></li>
              <li><Link href="/work" className="text-colatech-grey-3 hover:text-colatech-green text-xs sm:text-sm block">Work</Link></li>
              {/* <li><Link href="/faq" className="text-colatech-grey-3 hover:text-colatech-green text-xs sm:text-sm block">FAQ</Link></li> */}
              <li><Link href="/contact" className="text-colatech-grey-3 hover:text-colatech-green text-xs sm:text-sm block">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <Link
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-colatech-grey-3 hover:text-colatech-green transition-colors flex items-center gap-2 justify-center sm:justify-start"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.contact.phone}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-colatech-grey-3 hover:text-colatech-green transition-colors flex items-center gap-2 justify-center sm:justify-start"
                >
                  <Mail className="w-4 h-4" />
                  {siteConfig.contact.email}
                </Link>
              </li>
              <li className="text-colatech-grey-3 flex items-center gap-2 justify-center sm:justify-start">
                <MapPin className="w-4 h-4" />
                {siteConfig.contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-colatech-grey-2 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-colatech-grey-3 text-xs sm:text-sm text-center md:text-left">
            © {currentYear} ColaTech Solutions. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="/privacy" className="text-colatech-grey-3 hover:text-white text-xs sm:text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-colatech-grey-3 hover:text-white text-xs sm:text-sm">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
