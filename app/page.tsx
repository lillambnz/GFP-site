"use client"

import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import StatsSection from "@/components/stats-section"
import { HeroGallery } from "@/components/hero-gallery"
import { PhotoGallery } from "@/components/photo-gallery"
import PatientInformationSection from "@/components/patient-information-section"
import Footer from "@/components/footer"
import Link from "next/link"
import { services } from "@/lib/data/services"
import { doctors } from "@/lib/data/team"
import { getLatestBlogPosts } from "@/lib/data/blog-posts"
import { Heart, Award, Users, Clock, ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  const featuredServices = services.slice(0, 6)
  const featuredDoctors = doctors.slice(0, 3)
  const latestPosts = getLatestBlogPosts(3)

  // Hero Gallery Photos
  const heroPhotos = [
    {
      src: "https://asset.imagine.art/processed/6feca710-6ead-4d3d-9d6c-c2eb7a2e0384",
      alt: "Modern Medical Reception Area",
      title: "Welcome to Gosnells Family Practice",
      description: "Your trusted healthcare partner, providing comprehensive medical care for the whole family"
    },
    {
      src: "https://asset.imagine.art/processed/303f0971-28e4-47b8-9cf5-034ad08c92a1",
      alt: "Professional Medical Care",
      title: "Expert Medical Team",
      description: "All doctors hold FRACGP qualifications and speak multiple languages"
    },
    {
      src: "https://cdn.imagine.art/processed/3bc7a926-dd66-43c3-b289-544cd61bf500",
      alt: "State-of-the-art Facilities",
      title: "Modern Healthcare Facilities",
      description: "AGPAL accredited practice with cutting-edge medical equipment"
    },
    {
      src: "https://asset.imagine.art/processed/fa04c108-7f20-4f24-aa43-f9d28576194d",
      alt: "Welcoming Reception",
      title: "Friendly & Professional Service",
      description: "Open 7 days a week for your convenience"
    }
  ]

  // Clinic Photos for Gallery
  const clinicPhotos = [
    { src: "/images/photoshoot/reception/GosnellsFamilyPractice-109.jpg", alt: "Warm and welcoming reception area at Gosnells Family Practice", category: "Reception" },
    { src: "/images/photoshoot/reception/GosnellsFamilyPractice-23.jpg", alt: "The front desk at Gosnells Family Practice, where our friendly staff is ready to assist you", category: "Reception" },
    { src: "/images/photoshoot/lab/GosnellsFamilyPractice-136.jpg", alt: "A modern clinical laboratory at Gosnells Family Practice, equipped for a variety of tests", category: "Lab" },
    { src: "/images/photoshoot/lab/GosnellsFamilyPractice-140.jpg", alt: "Advanced lab equipment at Gosnells Family Practice, ensuring accurate and timely results", category: "Lab" },
    { src: "/images/photoshoot/treatment-room/GosnellsFamilyPractice-93.jpg", alt: "A clean and private treatment room at Gosnells Family Practice", category: "Treatment" },
    { src: "/images/photoshoot/treatment-room/GosnellsFamilyPractice-95.jpg", alt: "State-of-the-art medical equipment in a treatment room at Gosnells Family Practice", category: "Treatment" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Gallery - Large Photo Focus */}
      <section className="container mx-auto px-4 lg:px-8 pt-24 pb-8">
        <HeroGallery photos={heroPhotos} height="h-[75vh]" />
      </section>

      {/* Our Clinic Gallery Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a2540] mb-4">Our Modern Facilities</h2>
            <p className="text-xl text-[#425466] max-w-2xl mx-auto">
              Take a virtual tour of our state-of-the-art medical practice
            </p>
          </div>
          <PhotoGallery photos={clinicPhotos} columns={3} />
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a2540] mb-4">Our Medical Services</h2>
            <p className="text-xl text-[#425466] max-w-2xl mx-auto">
              Comprehensive healthcare services for the whole family
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-white/20 backdrop-blur-md rounded-3xl overflow-hidden hover:bg-white/30 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer group border border-[#00b1c3]/10"
                >
                  {/* Service Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#00b1c3]/10 to-[#4a4b75]/10">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={`${service.title} service at Gosnells Family Practice`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#00b1c3] to-[#009bb0] rounded-3xl flex items-center justify-center shadow-xl">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm text-[#4a4b75] px-3 py-1 rounded-full text-xs font-semibold">
                        {service.category}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-[#0a2540] mb-3 text-xl font-bold group-hover:text-[#00b1c3] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#425466] leading-relaxed mb-4 line-clamp-3">{service.description}</p>
                    <div className="pt-4 border-t border-[#00b1c3]/20 flex items-center justify-between">
                      <span className="text-sm text-[#425466]">{service.availability}</span>
                      <span className="text-[#00b1c3] font-semibold text-sm group-hover:gap-2 transition-all flex items-center gap-1">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button className="bg-[#00b1c3] hover:bg-[#009bb0] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                View All Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Doctors Section - Photo Focused */}
      <section className="py-20 bg-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a2540] mb-4">Meet Our Expert Medical Team</h2>
            <p className="text-xl text-[#425466] max-w-2xl mx-auto">
              Experienced healthcare professionals dedicated to your wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Dr. Khan */}
            <Link href="/team#dr-khan" className="bg-white/20 backdrop-blur-md rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-[#00b1c3]/10 group">
              <div className="aspect-[3/4] overflow-hidden relative">
                <Image
                  src="/images/photoshoot/doctors/dr-khan/GosnellsFamilyPractice-35.jpg"
                  alt="Dr. Ameer Khan"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a2540] mb-1 group-hover:text-[#00b1c3] transition-colors">Dr. Ameer Khan</h3>
                <p className="text-[#4a4b75] font-semibold text-sm mb-2">General Practitioner</p>
                <p className="text-xs text-[#425466] mb-4">MBBS, FRACGP</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#00b1c3]/10 text-[#00b1c3] px-2 py-1 rounded-full">Family Medicine</span>
                  <span className="text-xs bg-[#00b1c3]/10 text-[#00b1c3] px-2 py-1 rounded-full">Men's Health</span>
                </div>
                <Button className="w-full bg-[#00b1c3] hover:bg-[#009bb0] text-white text-sm pointer-events-none">
                  View Profile
                </Button>
              </div>
            </Link>

            {/* Dr. Fazilah */}
            <Link href="/team#dr-fazilah" className="bg-white/20 backdrop-blur-md rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-[#00b1c3]/10 group">
              <div className="aspect-[3/4] overflow-hidden relative">
                <Image
                  src="/images/photoshoot/doctors/dr-fazilah/GosnellsFamilyPractice-64.jpg"
                  alt="Dr. Fazilah Abu Bakar"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a2540] mb-1 group-hover:text-[#00b1c3] transition-colors">Dr. Fazilah Abu Bakar</h3>
                <p className="text-[#4a4b75] font-semibold text-sm mb-2">General Practitioner</p>
                <p className="text-xs text-[#425466] mb-4">MBBS, FRACGP</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#00b1c3]/10 text-[#00b1c3] px-2 py-1 rounded-full">Women's Health</span>
                  <span className="text-xs bg-[#00b1c3]/10 text-[#00b1c3] px-2 py-1 rounded-full">Antenatal Care</span>
                </div>
                <Button className="w-full bg-[#00b1c3] hover:bg-[#009bb0] text-white text-sm pointer-events-none">
                  View Profile
                </Button>
              </div>
            </Link>

            {/* Dr. Loh */}
            <Link href="/team#dr-loh" className="bg-white/20 backdrop-blur-md rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-[#00b1c3]/10 group">
              <div className="aspect-[3/4] overflow-hidden relative">
                <Image
                  src="/images/photoshoot/doctors/dr-loh/GosnellsFamilyPractice-2.jpg"
                  alt="Dr. Choong Leat Loh"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a2540] mb-1 group-hover:text-[#00b1c3] transition-colors">Dr. Choong Leat Loh</h3>
                <p className="text-[#4a4b75] font-semibold text-sm mb-2">General Practitioner</p>
                <p className="text-xs text-[#425466] mb-4">MBBS, FRACGP</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#00b1c3]/10 text-[#00b1c3] px-2 py-1 rounded-full">Skin Cancer</span>
                  <span className="text-xs bg-[#00b1c3]/10 text-[#00b1c3] px-2 py-1 rounded-full">Minor Procedures</span>
                </div>
                <Button className="w-full bg-[#00b1c3] hover:bg-[#009bb0] text-white text-sm pointer-events-none">
                  View Profile
                </Button>
              </div>
            </Link>

            {/* Dr. Quam */}
            <Link href="/team#dr-quam" className="bg-white/20 backdrop-blur-md rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-[#00b1c3]/10 group">
              <div className="aspect-[3/4] overflow-hidden relative">
                <Image
                  src="/images/photoshoot/doctors/dr-quam/GosnellsFamilyPractice-115.jpg"
                  alt="Dr. Quam Gbajabiamila"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a2540] mb-1 group-hover:text-[#00b1c3] transition-colors">Dr. Quam Gbajabiamila</h3>
                <p className="text-[#4a4b75] font-semibold text-sm mb-2">General Practitioner</p>
                <p className="text-xs text-[#425466] mb-4">MBBS, FRACGP</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#00b1c3]/10 text-[#00b1c3] px-2 py-1 rounded-full">Family Medicine</span>
                  <span className="text-xs bg-[#00b1c3]/10 text-[#00b1c3] px-2 py-1 rounded-full">Sports Medicine</span>
                </div>
                <Button className="w-full bg-[#00b1c3] hover:bg-[#009bb0] text-white text-sm pointer-events-none">
                  View Profile
                </Button>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/team">
              <Button className="bg-[#00b1c3] hover:bg-[#009bb0] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                Meet Our Full Team <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a2540] mb-4">Latest Health Tips & News</h2>
            <p className="text-xl text-[#425466] max-w-2xl mx-auto">
              Expert health advice and updates from our medical team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white/20 backdrop-blur-md rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer group border border-[#00b1c3]/10"
              >
                <div className="aspect-video bg-gradient-to-br from-[#00b1c3]/20 to-[#4a4b75]/20 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-[#00b1c3]" />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-[#00b1c3]/10 text-[#00b1c3] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-lg font-bold text-[#0a2540] mb-3 group-hover:text-[#00b1c3] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#425466] mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-[#425466]">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button className="bg-[#00b1c3] hover:bg-[#009bb0] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                Read More Articles <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Information Section */}
      <section id="patient-info">
        <PatientInformationSection />
      </section>

      {/* Quick Links CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#00b1c3] to-[#009bb0] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Link href="/faqs" className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all group">
              <h3 className="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform">Have Questions?</h3>
              <p className="mb-4">Check our comprehensive FAQ section</p>
              <span className="text-sm font-semibold inline-flex items-center gap-2">
                View FAQs <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/after-hours" className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all group">
              <h3 className="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform">After Hours Care</h3>
              <p className="mb-4">Need medical help outside clinic hours?</p>
              <span className="text-sm font-semibold inline-flex items-center gap-2">
                Emergency Info <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <a href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all group">
              <h3 className="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform">Book Now</h3>
              <p className="mb-4">Schedule your appointment online</p>
              <span className="text-sm font-semibold inline-flex items-center gap-2">
                Book Online <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
