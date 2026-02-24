import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import Container from '@/components/ui/Container'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-colatech-black border-t border-colatech-grey-2 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              Cola<span className="text-colatech-green">Tech</span>
            </div>
            <p className="text-colatech-grey-3 text-sm">
              Digital infrastructure for the modern business.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-colatech-grey-3 hover:text-colatech-green text-sm">Websites</Link></li>
              <li><Link href="/services" className="text-colatech-grey-3 hover:text-colatech-green text-sm">Networking</Link></li>
              <li><Link href="/services" className="text-colatech-grey-3 hover:text-colatech-green text-sm">Security</Link></li>
              <li><Link href="/services" className="text-colatech-grey-3 hover:text-colatech-green text-sm">Managed Support</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-colatech-grey-3 hover:text-colatech-green text-sm">About</Link></li>
              <li><Link href="/work" className="text-colatech-grey-3 hover:text-colatech-green text-sm">Work</Link></li>
              {/* <li><Link href="/faq" className="text-colatech-grey-3 hover:text-colatech-green text-sm">FAQ</Link></li> */}
              <li><Link href="/contact" className="text-colatech-grey-3 hover:text-colatech-green text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-colatech-grey-3 hover:text-colatech-green transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.contact.phone}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-colatech-grey-3 hover:text-colatech-green transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {siteConfig.contact.email}
                </Link>
              </li>
              <li className="text-colatech-grey-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {siteConfig.contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-colatech-grey-2 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-colatech-grey-3 text-sm">
            © {currentYear} ColaTech Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-colatech-grey-3 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-colatech-grey-3 hover:text-white text-sm">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
