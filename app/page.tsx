"use client"

import Header from "@/components/header"
import StatsSection from "@/components/stats-section"
import { HeroGallery } from "@/components/hero-gallery"
import { PhotoGallery } from "@/components/photo-gallery"
import PatientInformationSection from "@/components/patient-information-section"
import Footer from "@/components/footer"
import Link from "next/link"
import { services } from "@/lib/data/services"
import { getDoctorsOrdered } from "@/lib/data/team"
import { ArrowRight } from "lucide-react"
import { BulkBillingSection } from "@/components/bulk-billing-section"
import { NewDoctorAnnouncement } from "@/components/new-doctor-announcement"
import { GoogleReviewsSection } from "@/components/google-reviews-section"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MobileStickyBar } from "@/components/mobile-sticky-bar"
import { SectionHeading } from "@/components/section-heading"
import { Reveal, StaggerContainer, StaggerItem } from "@/components/reveal"

export default function Home() {
  const featuredServices = services.slice(0, 6)

  const heroPhotos = [
    {
      src: "/images/hero/bulk-billing-banner.png",
      alt: "Bulk Billing Now Available - Gosnells Family Practice",
    },
    {
      src: "/images/hero/reception.png",
      alt: "Modern Medical Reception Area",
      title: "Welcome to Gosnells Family Practice",
      description: "Your trusted healthcare partner, providing comprehensive medical care for the whole family"
    },
    {
      src: "/images/hero/doctorsitting.png",
      alt: "Professional Medical Care",
      title: "Expert Medical Team",
      description: "All doctors hold FRACGP qualifications and speak multiple languages"
    },
    {
      src: "/images/hero/mixfacility.png",
      alt: "State-of-the-art Facilities",
      title: "Modern Healthcare Facilities",
      description: "AGPAL accredited practice with cutting-edge medical equipment"
    },
    {
      src: "/images/hero/nurse.png",
      alt: "Welcoming Reception",
      title: "Friendly & Professional Service",
      description: "Open 7 days a week for your convenience"
    }
  ]

  const clinicPhotos = [
    { src: "/images/photoshoot/reception/GosnellsFamilyPractice-109.jpg", alt: "Warm and welcoming reception area at Gosnells Family Practice", category: "Reception" },
    { src: "/images/photoshoot/reception/GosnellsFamilyPractice-23.jpg", alt: "The front desk at Gosnells Family Practice", category: "Reception" },
    { src: "/images/photoshoot/lab/GosnellsFamilyPractice-136.jpg", alt: "Modern clinical laboratory at Gosnells Family Practice", category: "Lab" },
    { src: "/images/photoshoot/lab/GosnellsFamilyPractice-140.jpg", alt: "Advanced lab equipment at Gosnells Family Practice", category: "Lab" },
    { src: "/images/photoshoot/treatment-room/GosnellsFamilyPractice-93.jpg", alt: "Clean and private treatment room at Gosnells Family Practice", category: "Treatment" },
    { src: "/images/photoshoot/treatment-room/GosnellsFamilyPractice-95.jpg", alt: "State-of-the-art medical equipment in a treatment room", category: "Treatment" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Gallery */}
      <section className="relative pt-40 lg:pt-44 pb-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <HeroGallery photos={heroPhotos} height="h-[75vh]" />
        </div>
      </section>

      {/* Trust Signals */}
      <StatsSection />

      {/* New Doctor Announcement */}
      <NewDoctorAnnouncement />

      {/* Featured Services */}
      <section className="py-20 bg-background bg-warm-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Medical Services"
            subtitle="Comprehensive healthcare services for the whole family"
            className="mb-14"
          />

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredServices.map((service) => {
              const Icon = service.icon
              return (
                <StaggerItem key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group border border-border h-full"
                  >
                    {/* Service Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={`${service.title} service at Gosnells Family Practice`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-brand-teal-light">
                          <div className="w-16 h-16 bg-brand-teal rounded-2xl flex items-center justify-center">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-3 right-3">
                        <span className="bg-card/90 backdrop-blur-sm text-muted-foreground px-2.5 py-1 rounded-full text-xs font-medium">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-foreground mb-2 text-lg font-semibold group-hover:text-brand-teal transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm mb-4 line-clamp-3">{service.description}</p>
                      <div className="pt-4 border-t border-border flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{service.availability}</span>
                        <span className="text-brand-teal font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn more <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          <Reveal className="text-center">
            <Link href="/services">
              <Button className="bg-brand-teal hover:bg-brand-teal-dark text-white px-8 py-6 rounded-full shadow-card hover:shadow-card-hover transition-all text-base">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-secondary/50 bg-dot-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Doctors"
            title="Meet Our Expert Medical Team"
            subtitle="Experienced healthcare professionals dedicated to your wellbeing"
            className="mb-14"
          />

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {getDoctorsOrdered().map((doctor) => (
              <StaggerItem key={doctor.slug}>
                <Link href={`/team#${doctor.slug}`} className="block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <Image
                      src={doctor.galleryPhotos?.[0]?.src ?? doctor.image}
                      alt={doctor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                    {doctor.isNew && (
                      <span className="absolute top-3 left-3 bg-gradient-to-r from-brand-teal to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        ✨ New
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-brand-teal transition-colors">{doctor.name}</h3>
                    <p className="text-brand-teal font-medium text-xs mb-1">{doctor.title}</p>
                    <p className="text-muted-foreground text-xs mb-3">{doctor.qualifications}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {doctor.specialInterests?.slice(0, 2).map((s) => (
                        <span key={s} className="text-[11px] bg-brand-teal-light text-brand-teal px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal className="text-center">
            <Link href="/team">
              <Button className="bg-brand-teal hover:bg-brand-teal-dark text-white px-8 py-6 rounded-full shadow-card hover:shadow-card-hover transition-all text-base">
                Meet Our Full Team <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="py-20 bg-background bg-glow-br">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Facilities"
            title="Our Modern Practice"
            subtitle="Take a virtual tour of our state-of-the-art medical practice"
            className="mb-14"
          />
          <Reveal>
            <PhotoGallery photos={clinicPhotos} columns={3} />
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <GoogleReviewsSection />

      {/* Bulk Billing */}
      <BulkBillingSection />

      {/* Patient Information */}
      <PatientInformationSection />

      {/* Quick Links CTA */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <Link href="/faqs" className="px-8 py-12 hover:bg-white/5 transition-colors group text-center">
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-teal transition-colors">Have Questions?</h3>
              <p className="text-white/50 text-sm mb-4">Check our comprehensive FAQ section</p>
              <span className="text-sm font-medium text-brand-teal inline-flex items-center gap-1.5">
                View FAQs <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link href="/after-hours" className="px-8 py-12 hover:bg-white/5 transition-colors group text-center">
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-teal transition-colors">After Hours Care</h3>
              <p className="text-white/50 text-sm mb-4">Need medical help outside clinic hours?</p>
              <span className="text-sm font-medium text-brand-teal inline-flex items-center gap-1.5">
                Emergency Info <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <a href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors" target="_blank" rel="noopener noreferrer" className="px-8 py-12 hover:bg-white/5 transition-colors group text-center">
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-teal transition-colors">Book Now</h3>
              <p className="text-white/50 text-sm mb-4">Schedule your appointment online</p>
              <span className="text-sm font-medium text-brand-teal inline-flex items-center gap-1.5">
                Book Online <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar />
    </div>
  )
}
