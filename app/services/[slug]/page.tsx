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

  return {
    title: `${service.title} | Gosnells Family Practice`,
    description: `${service.description} Expert ${service.title.toLowerCase()} in Gosnells. Book online or call (08) 6118 2788.`,
    keywords: [service.title, 'Gosnells', 'medical centre', service.category, 'Perth', 'WA', 'bulk billing'],
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
        <section className="relative bg-gradient-to-r from-[#0a2540] to-[#00b1c3] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  {service.category}
                </div>
                <h1 className="text-5xl font-bold">{service.title}</h1>
              </div>
            </div>
            <p className="text-xl max-w-3xl">{service.description}</p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-lg max-w-none">
              <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 mb-8 border border-[#00b1c3]/20">
                <h2 className="text-3xl font-bold text-[#0a2540] mb-6">About This Service</h2>
                <p className="text-lg text-[#425466] leading-relaxed whitespace-pre-line">
                  {service.details}
                </p>
              </div>

              {/* Sub-services if available */}
              {service.subServices && service.subServices.length > 0 && (
                <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 mb-8 border border-[#00b1c3]/20">
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-4">What We Offer</h2>
                  <ul className="space-y-2">
                    {service.subServices.map((subService, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#00b1c3] mt-1.5">•</span>
                        <span className="text-[#425466]">{subService}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Practitioners & Availability */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-[#00b1c3]/20">
                  <h3 className="text-xl font-bold text-[#0a2540] mb-4">Our Practitioners</h3>
                  <ul className="space-y-2">
                    {service.practitioners.map((practitioner, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#00b1c3] rounded-full"></span>
                        <span className="text-[#425466]">{practitioner}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-[#00b1c3]/20">
                  <h3 className="text-xl font-bold text-[#0a2540] mb-4">Availability</h3>
                  <p className="text-[#425466] mb-4">{service.availability}</p>
                  <div className="pt-4 border-t border-[#00b1c3]/20">
                    <p className="text-sm font-semibold text-[#0a2540] mb-2">Booking Information</p>
                    <p className="text-sm text-[#425466]">{service.bookingInfo}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#00b1c3] to-[#009bb0] text-white">
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
                className="bg-white text-[#00b1c3] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition inline-block"
              >
                Book Online
              </a>
              <a
                href="tel:0861182788"
                className="bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-semibold px-8 py-3 rounded-full transition inline-block"
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
