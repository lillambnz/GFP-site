import Header from "@/components/header"
import Footer from "@/components/footer"
import { services, getServiceBySlug } from "@/lib/data/services"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) return {}

  // Enhanced keywords for alternative medicine page
  let keywords = [service.title, 'Gosnells', 'medical centre', service.category, 'Perth', 'WA', 'bulk billing']

  if (slug === 'alternative-medicine-gosnells') {
    keywords = [
      'alternative medicine Gosnells',
      'integrative medicine Perth',
      'holistic doctor Gosnells',
      'complementary medicine WA',
      'functional medicine Perth',
      'Dr Ameer Khan',
      'integrative GP Gosnells',
      'chronic pain treatment Gosnells',
      'integrative medicine doctor Perth',
      'natural health GP Gosnells',
      'alternative health Maddington',
      'holistic healthcare Thornlie',
      'evidence-based alternative therapy',
      'integrative pain management'
    ]
  }

  return {
    title: `${service.title} | Gosnells Family Practice`,
    description: `${service.description} Expert ${service.title.toLowerCase()} in Gosnells. Book online or call (08) 6118 2788.`,
    keywords,
    alternates: {
      canonical: `https://gosnellsfamilypractice.com.au/services/${slug}`
    },
    openGraph: {
      title: `${service.title} in Gosnells | GFP`,
      description: service.description,
      url: `https://gosnellsfamilypractice.com.au/services/${slug}`,
      siteName: 'Gosnells Family Practice',
      type: 'website',
      locale: 'en_AU',
      images: service.image ? [{
        url: service.image,
        width: 1200,
        height: 630,
        alt: service.title
      }] : []
    }
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-16 pt-48">
          <div className="max-w-7xl mx-auto px-4">
            <span className="inline-block bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs font-medium mb-4">
              {service.category}
            </span>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-brand-teal rounded-2xl flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
            </div>
            <p className="text-xl max-w-3xl">{service.description}</p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-lg max-w-none">
              <div className="bg-card shadow-card rounded-2xl p-8 mb-8 border border-border">
                <h2 className="text-3xl font-bold text-foreground mb-6">About This Service</h2>
                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {service.details}
                </p>
              </div>

              {/* Sub-services if available */}
              {service.subServices && service.subServices.length > 0 && (
                <div className="bg-card shadow-card rounded-2xl p-8 mb-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">What We Offer</h2>
                  <ul className="space-y-2">
                    {service.subServices.map((subService, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-brand-teal mt-1.5">•</span>
                        <span className="text-muted-foreground">{subService}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Practitioners & Availability */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card shadow-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Our Practitioners</h3>
                  <ul className="space-y-2">
                    {service.practitioners.map((practitioner, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-brand-teal rounded-full"></span>
                        <span className="text-muted-foreground">{practitioner}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card shadow-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Availability</h3>
                  <p className="text-muted-foreground mb-4">{service.availability}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-foreground mb-2">Booking Information</p>
                    <p className="text-sm text-muted-foreground">{service.bookingInfo}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-teal text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Book This Service</h2>
            <p className="text-lg mb-8">
              Schedule an appointment with one of our experienced practitioners
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-teal hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition inline-block"
              >
                Book Online
              </a>
              <a
                href="tel:0861182788"
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-full transition inline-block"
              >
                Call (08) 6118 2788
              </a>
            </div>
            <div className="mt-8">
              <Link href="/services" className="text-white hover:text-white/80 underline">
                ← Back to All Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
