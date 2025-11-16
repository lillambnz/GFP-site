"use client"
import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import StatsSection from "@/components/stats-section"
import ImageCarousel from "@/components/image-carousel"
import ServicesSection from "@/components/services-section"
import DoctorsSection from "@/components/doctors-section"
import PatientInformationSection from "@/components/patient-information-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <StatsSection />
      <ImageCarousel />
      <ServicesSection />
      <DoctorsSection />
      <PatientInformationSection />
      <Footer />
    </div>
  )
}
