import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Portfolio of websites, networks, and IT projects we have built for Houston businesses.',
}

export default function WorkPage() {
  // Portfolio websites - Add more projects here as you complete them
  const projects = [
    {
      id: 1,
      name: 'Cola Farms',
      category: 'Website Development',
      description: 'Agricultural business website with modern design and informational content about farming operations and services.',
      image: '/images/work/colafarms.jpg', // Add your screenshots to public/images/work/
      liveUrl: 'https://www.colafarms.org/',
      results: [
        'Clean, professional web presence',
        'Mobile-responsive design',
        'Easy content management',
      ],
      tags: ['Web Design', 'CMS', 'Responsive'],
    },
    {
      id: 2,
      name: 'Texas Latest',
      category: 'Website Development',
      description: 'News and information portal delivering the latest updates and stories from across Texas.',
      image: '/images/work/texaslatest.jpg',
      liveUrl: 'https://www.texaslatest.com/',
      results: [
        'Fast-loading news platform',
        'SEO optimized for local search',
        'Content publishing system',
      ],
      tags: ['News Portal', 'SEO', 'Publishing'],
    },
    // Add more projects here as you complete them
  ]

  const categories = ['All', 'Website Development', 'Network Infrastructure', 'Security Systems', 'Managed IT']

  return (
    <div className="py-24">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 max-w-3xl mx-auto">
            Real projects for real businesses. We don't just install equipment—we solve problems
            and deliver measurable results.
          </p>
        </div>

        {/* Category Filter (optional - can be made interactive with state management) */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-lg bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-100 hover:bg-colatech-green hover:text-white transition-colors text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <section className="mb-20">
          {projects.length === 0 ? (
            // Empty state - shown when you haven't added projects yet
            <Card className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">Projects Coming Soon</h2>
              <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 max-w-2xl mx-auto">
                We're building our portfolio showcase. Check back soon to see detailed case studies
                of websites, networks, and IT infrastructure we've deployed.
              </p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} hoverable className="flex flex-col">
                  {/* Project Image */}
                  <div className="w-full h-48 bg-colatech-grey-2 dark:bg-colatech-grey-2 light:bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    {/* Replace this with actual image when you add screenshots */}
                    <span className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-400 text-sm">
                      Project Screenshot
                    </span>
                    {/* When you add images, use this:
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    */}
                  </div>

                  {/* Category Badge */}
                  <div className="inline-flex self-start px-3 py-1 bg-colatech-green/10 text-colatech-green rounded-full text-xs font-semibold mb-3">
                    {project.category}
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Results */}
                  {project.results && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-colatech-green mb-2">Results:</p>
                      <ul className="space-y-1">
                        {project.results.map((result, index) => (
                          <li key={index} className="text-xs text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                            • {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-colatech-grey-2 dark:bg-colatech-grey-2 light:bg-gray-100 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Live Link */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-colatech-green hover:text-white transition-colors text-sm font-semibold"
                    >
                      View Live Site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <Card className="bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50">
            <h2 className="text-3xl font-bold mb-8 text-center">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '5 Years', label: 'Average Client Relationship' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-colatech-green mb-2">{stat.number}</div>
                  <div className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Industries Served */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Retail & E-commerce',
              'Professional Services',
              'Healthcare & Medical',
              'Real Estate',
              'Hospitality',
              'Manufacturing',
              'Education',
              'Non-Profit',
            ].map((industry) => (
              <Card key={industry} hoverable>
                <p className="text-center font-semibold">{industry}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Teaser */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "ColaTech transformed our outdated network into a modern, reliable system. Zero downtime in 18 months.",
                author: "Sarah M.",
                company: "Retail Business Owner",
              },
              {
                quote: "Our website went from slow and clunky to fast and professional. Sales are up 200% since the redesign.",
                author: "David K.",
                company: "E-commerce Founder",
              },
              {
                quote: "I sleep better knowing ColaTech is monitoring our systems 24/7. Best IT investment we've made.",
                author: "Jennifer L.",
                company: "Medical Practice Manager",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600">
                  {testimonial.company}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-colatech-grey-1 dark:bg-colatech-grey-1 light:bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-colatech-grey-3 dark:text-colatech-grey-3 light:text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need a website, network upgrade, or ongoing IT support—let's talk about
            what success looks like for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Start a Project
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
