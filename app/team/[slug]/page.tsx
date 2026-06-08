import Header from "@/components/header"
import Footer from "@/components/footer"
import { doctors } from "@/lib/data/team"
import { notFound } from "next/navigation"
import { Star, ArrowLeft } from "lucide-react"
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
    title: `Book with ${doctor.name} — Gosnells Family Practice`,
    description: `Book an appointment with ${doctor.name} at Gosnells Family Practice, Gosnells WA. ${doctor.specialInterests?.join(", ")}. Bulk billing available.`,
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

      <main className="pt-28">
        {/* Minimal top bar */}
        <div className="bg-slate-900 text-white py-6 px-4">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-3 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Our Team
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold">{doctor.name}</h1>
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-semibold text-white">{doctor.rating}</span>
              </div>
              <span className="text-white/60 text-sm">{doctor.title} · {doctor.qualifications}</span>
              {doctor.acceptingNewPatients && (
                <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Now Accepting New Patients — Bulk Billing
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Booking widget or fallback button */}
        {doctor.hotdocWidgetUrl ? (
          <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border">
              <iframe
                src={doctor.hotdocWidgetUrl}
                data-hotdoc-widget="iframe"
                width="100%"
                height="1000"
                frameBorder="0"
                allow="payment"
                className="block"
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
    </div>
  )
}
