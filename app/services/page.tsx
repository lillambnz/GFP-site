"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { services, serviceCategories } from "@/lib/data/services"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All Services')

  const filteredServices = activeCategory === 'All Services'
    ? services
    : services.filter(service => service.category === activeCategory)

  return (
    <div className="min-h-screen bg-background bg-medical-subtle">
      <Header />

      <main>
        {/* Hero Section with Photo Background */}
        <section className="relative bg-slate-900 text-white py-24 pt-48 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/photoshoot/treatment-room/GosnellsFamilyPractice-93.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-slate-900" />
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h1 className="text-5xl font-bold mb-4">Our Medical Services</h1>
            <p className="text-xl max-w-3xl">
              Comprehensive healthcare services for the whole family, delivered by experienced medical professionals
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-surface-sunken sticky top-[73px] z-40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-brand-teal text-white shadow-lg'
                      : 'bg-card shadow-card text-foreground hover:bg-card'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-warm-glow">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 cursor-pointer group border border-border"
                  >
                    {/* Service Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-brand-teal-light/50">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-brand-teal rounded-3xl flex items-center justify-center shadow-card">
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 text-muted-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          {service.category}
                        </div>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <h3 className="text-foreground mb-3 text-xl font-bold group-hover:text-brand-teal transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      <div className="pt-4 border-t border-border flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{service.availability}</span>
                        <span className="text-brand-teal font-semibold text-sm group-hover:gap-2 transition-all flex items-center gap-1">
                          Learn more →
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-teal text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
            <p className="text-lg mb-8">
              Schedule an appointment with one of our experienced doctors today
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-teal hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition inline-block"
              >
                Book Appointment
              </a>
              <a
                href="tel:0861182788"
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-full transition inline-block"
              >
                Call (08) 6118 2788
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
