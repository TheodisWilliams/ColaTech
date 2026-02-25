import { MapPin, Check } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import { siteConfig } from '@/config/site'

export default function ServiceAreaSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50">
      <Container>
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-colatech-green/10 rounded-2xl mb-4 sm:mb-6">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-colatech-green" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">Proudly Serving the Greater Houston Area</h2>
          <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            We're a local Houston business providing IT services to small businesses across the metro area.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Map Placeholder */}
          <Card className="h-64 sm:h-80 md:h-96 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-colatech-green/5 to-colatech-grey-2/50 flex items-center justify-center">
              {/* Embedded Google Map - Replace the src with your actual Google Maps embed URL */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443546.3281117715!2d-95.66594897643283!3d29.81739827641193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </Card>

          {/* Service Areas List */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Areas We Serve</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {siteConfig.serviceArea.cities.map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-colatech-green/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-colatech-green" />
                  </div>
                  <span className="text-sm sm:text-base text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                    {city}
                  </span>
                </div>
              ))}
            </div>

            <Card className="bg-colatech-green/5 border-colatech-green/20">
              <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-2">
                <strong className="text-white dark:text-white light:text-gray-900">Outside these areas?</strong>
              </p>
              <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                We work with businesses throughout Texas. For larger projects, we can travel to your location.
                Contact us to confirm service availability.
              </p>
            </Card>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '30min', label: 'Average Response Time' },
            { number: '8', label: 'Cities Served' },
            { number: '100%', label: 'Houston-Based Team' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-colatech-green mb-2">{stat.number}</div>
              <div className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
