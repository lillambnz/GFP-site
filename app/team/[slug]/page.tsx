import Header from "@/components/header"
import Footer from "@/components/footer"
import { doctors } from "@/lib/data/team"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"
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
    title: `Book with ${doctor.name} — Gosnells Family Practice`,
    description: `Book an appointment with ${doctor.name} at Gosnells Family Practice, Gosnells WA. ${doctor.specialInterests?.join(", ")}. Bulk billing available.`,
    openGraph: {
      title: `${doctor.name} — Bulk Billing GP at Gosnells Family Practice`,
      description: `Book with ${doctor.name} at Gosnells Family Practice. Bulk billing available. Now accepting new patients in Gosnells WA.`,
      images: [
        {
          url: doctor.image.startsWith('http') ? doctor.image : `${baseUrl}${doctor.image}`,
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

      <main className="pt-28 pb-20 md:pb-0">
        {/* Doctor intro — landing header for ads and direct links */}
        <div className="max-w-5xl mx-auto px-4 pt-8">
          <div className="bg-card rounded-2xl shadow-card border border-border p-4 md:p-8 flex flex-row items-center sm:items-start gap-4 md:gap-6">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-brand-teal/30 shadow-lg shrink-0">
              <Image
                src={doctor.headshot ?? doctor.image}
                alt={doctor.name}
                fill
                sizes="128px"
                className="object-cover object-[center_25%]"
              />
            </div>
            <div className="min-w-0 flex-1">
              {doctor.isNew && (
                <span className="inline-block bg-gradient-to-r from-brand-teal to-emerald-500 text-white text-[11px] md:text-xs font-bold px-2.5 md:px-3 py-1 rounded-full mb-2">
                  ✨ New — Now Accepting Patients
                </span>
              )}
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-0.5 md:mb-1 leading-tight">{doctor.name}</h1>
              <p className="text-brand-teal font-semibold text-sm md:text-base mb-0.5 md:mb-1">{doctor.title}</p>
              <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">{doctor.qualifications}</p>
              {doctor.specialInterests && (
                <div className="hidden sm:flex flex-wrap gap-2">
                  {doctor.specialInterests.slice(0, 5).map((interest) => (
                    <span key={interest} className="text-xs bg-brand-teal-light text-brand-teal px-2.5 py-1 rounded-full">
                      {interest}
                    </span>
                  ))}
                </div>
              )}
              {doctor.hotdocWidgetUrl && (
                <Button
                  className="mt-3 md:mt-4 w-full sm:w-auto bg-gradient-to-r from-brand-teal to-emerald-500 hover:from-brand-teal-dark hover:to-emerald-600 text-white rounded-full shadow-md shadow-brand-teal/20"
                  asChild
                >
                  <a href="#booking">Book with {doctor.bookingName}</a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Booking widget or fallback button */}
        {doctor.hotdocWidgetUrl ? (
          <div id="booking" className="max-w-5xl mx-auto px-4 py-6 md:py-8 scroll-mt-24">
            {/* overflow-hidden clips the HotDoc header bar; negative marginTop shifts it out of view */}
            <div className="rounded-2xl overflow-hidden shadow-card border border-border" style={{ height: '1000px' }}>
              <iframe
                src={doctor.hotdocWidgetUrl}
                data-hotdoc-widget="iframe"
                width="100%"
                height="1062px"
                frameBorder="0"
                allow="payment"
                style={{ display: 'block', marginTop: '-62px' }}
                title={`Book appointment with ${doctor.name}`}
              />
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto px-4 py-16 text-center">
            <p className="text-muted-foreground mb-6">Book an appointment with {doctor.bookingName} online.</p>
            <Button className="bg-brand-teal hover:bg-brand-teal-dark text-white text-lg px-8 py-6" asChild>
              <a href={doctor.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book with {doctor.bookingName}
              </a>
            </Button>
          </div>
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
      <MobileStickyBar
        bookingUrl={doctor.bookingUrl}
        bookingLabel={`Book ${doctor.bookingName}`}
        scrollToId={doctor.hotdocWidgetUrl ? "booking" : undefined}
        doctorSlug={doctor.slug}
      />
    </div>
  )
}
