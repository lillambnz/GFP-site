import Header from "@/components/header"
import Footer from "@/components/footer"
import { doctors } from "@/lib/data/team"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Star, Languages, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import Script from "next/script"

export async function generateStaticParams() {
  return doctors.map(d => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const doctor = doctors.find(d => d.slug === slug)
  if (!doctor) return {}
  const baseUrl = 'https://www.gosnellsfamilypractice.com.au'
  return {
    title: `${doctor.name} — GP Gosnells | Gosnells Family Practice`,
    description: `Book an appointment with ${doctor.name} at Gosnells Family Practice, Gosnells WA. ${doctor.specialInterests?.join(", ")}. Bulk billing available. FRACGP qualified.`,
    openGraph: {
      title: `${doctor.name} — Bulk Billing GP at Gosnells Family Practice`,
      description: `Book with ${doctor.name} at Gosnells Family Practice. Bulk billing available. Now accepting new patients in Gosnells WA.`,
      images: [
        {
          url: `${baseUrl}${doctor.image}`,
          width: 800,
          height: 1067,
          alt: doctor.name,
        },
      ],
      type: 'profile',
      url: `${baseUrl}/team/${doctor.slug}`,
    },
  }
}

export default async function DoctorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doctor = doctors.find(d => d.slug === slug)
  if (!doctor) notFound()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative bg-slate-900 text-white py-16 pt-48">
          <div className="max-w-7xl mx-auto px-4">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Our Team
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="text-4xl lg:text-5xl font-bold">{doctor.name}</h1>
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="w-6 h-6 fill-current" />
                <span className="text-xl font-semibold text-white">{doctor.rating}</span>
              </div>
            </div>
            <p className="text-xl text-white/80 mb-4">
              {doctor.title} · {doctor.qualifications}
              {doctor.yearsExperience ? ` · ${doctor.yearsExperience} years in medicine` : ""}
            </p>
            {doctor.acceptingNewPatients && (
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-sm font-semibold px-3 py-1.5 rounded-full border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Now Accepting New Patients — Bulk Billing
              </span>
            )}
          </div>
        </section>

        {/* Profile */}
        <section className="py-16 bg-glow-tl">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Photos */}
              <div>
                {doctor.galleryPhotos ? (
                  <div className="grid grid-cols-2 gap-3">
                    {doctor.galleryPhotos.map((photo, i) => (
                      <div key={i} className="aspect-[3/4] relative rounded-xl overflow-hidden shadow-card">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-card max-w-sm mx-auto lg:mx-0">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                )}
              </div>

              {/* Details */}
              <div>
                {doctor.specialInterests && doctor.specialInterests.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">Special Interests:</p>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialInterests.map((interest, i) => (
                        <span key={i} className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-start gap-2">
                    <Languages className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{doctor.languages.join(", ")}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-muted-foreground leading-relaxed">{doctor.biography}</p>
                </div>

                {!doctor.hotdocWidgetUrl && (
                  <Button className="bg-brand-teal hover:bg-brand-teal-dark text-white text-lg px-8 py-6" asChild>
                    <a href={doctor.bookingUrl} target="_blank" rel="noopener noreferrer">
                      Book with {doctor.bookingName}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Widget */}
        {doctor.hotdocWidgetUrl && (
          <section className="py-12 bg-surface-sunken">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Book an Appointment with {doctor.bookingName}
              </h2>
              <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border">
                <iframe
                  src={doctor.hotdocWidgetUrl}
                  data-hotdoc-widget="iframe"
                  width="100%"
                  height="900"
                  frameBorder="0"
                  allow="payment"
                  className="block"
                  title={`Book appointment with ${doctor.name}`}
                />
              </div>
            </div>
          </section>
        )}
      </main>

      {doctor.hotdocWidgetUrl && (
        <Script
          src="https://cdn.hotdoc.com.au/static/assets/js/hotdoc-widgets.min.js"
          strategy="afterInteractive"
          charSet="utf-8"
        />
      )}

      <Footer />
    </div>
  )
}
