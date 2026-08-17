"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { staff, getNewDoctors, getFoundingDoctors, type Doctor } from "@/lib/data/team"
import { Languages, Star, ChevronDown, ChevronUp, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { BOOK_PATH } from "@/lib/booking"
import { trackBookingClick } from "@/lib/meta-events"

function ExpandableBio({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div>
      <p className={`text-sm text-muted-foreground leading-relaxed ${expanded ? "" : "line-clamp-4"}`}>
        {text}
      </p>
      <button
        type="button"
        onClick={() => setExpanded(v => !v)}
        className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors"
      >
        {expanded ? (
          <>Show less <ChevronUp className="w-3.5 h-3.5" /></>
        ) : (
          <>Read more <ChevronDown className="w-3.5 h-3.5" /></>
        )}
      </button>
    </div>
  )
}


function FeaturedDoctor({ doctor, flip }: { doctor: Doctor; flip: boolean }) {
  return (
    <div
      id={doctor.slug}
      className="mb-12 bg-card rounded-2xl shadow-card overflow-hidden border border-border scroll-mt-24"
    >
      <div className="grid lg:grid-cols-[minmax(0,420px)_1fr] gap-8 p-6 md:p-8">
        <div className={`relative aspect-[3/4] rounded-2xl overflow-hidden ${flip ? "lg:order-2" : ""}`}>
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-cover object-top"
          />
          <span className="absolute top-4 left-4 bg-gradient-to-r from-brand-teal to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            ✨ New Doctor
          </span>
        </div>

        <div className={`flex flex-col justify-center ${flip ? "lg:order-1" : ""}`}>
          <span className="self-start text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full mb-3">
            Accepting new patients
          </span>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{doctor.name}</h3>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-semibold text-foreground">{doctor.rating}</span>
            </div>
          </div>
          <p className="text-muted-foreground font-semibold mb-1">{doctor.title}, {doctor.gender}</p>
          <p className="text-sm text-muted-foreground mb-5">{doctor.qualifications}</p>

          {doctor.specialInterests && (
            <div className="mb-5">
              <p className="text-sm font-semibold text-foreground mb-2">Special Interests:</p>
              <div className="flex flex-wrap gap-2">
                {doctor.specialInterests.map((interest) => (
                  <span key={interest} className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mb-5 pb-5 border-b border-border">
            <div className="flex items-start gap-2">
              <Languages className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">{doctor.languages.join(", ")}</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="hidden md:block text-muted-foreground leading-relaxed">{doctor.biography}</p>
            <div className="md:hidden">
              <ExpandableBio text={doctor.biography} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              className="bg-gradient-to-r from-brand-teal to-emerald-500 hover:from-brand-teal-dark hover:to-emerald-600 text-white text-lg px-8 py-6 rounded-full shadow-md shadow-brand-teal/20"
              asChild
            >
              <Link href={`/team/${doctor.slug}`} onClick={() => trackBookingClick(doctor.slug)}>
                Book with {doctor.bookingName}
              </Link>
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 rounded-full border-brand-teal/30 text-brand-teal hover:bg-brand-teal-light" asChild>
              <a href="tel:0861182788">
                <Phone className="w-4 h-4 mr-2" /> (08) 6118 2788
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FounderCard({ doctor }: { doctor: Doctor }) {
  return (
    <div
      id={doctor.slug}
      className="scroll-mt-24 bg-card border border-border rounded-2xl p-4 flex flex-col gap-2"
    >
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
        <Image
          src={doctor.galleryPhotos?.[0]?.src ?? doctor.image}
          alt={doctor.name}
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top"
        />
      </div>
      <h3 className="font-semibold text-foreground text-base leading-tight mt-1">{doctor.name}</h3>
      <p className="text-xs text-muted-foreground">{doctor.qualifications}</p>
      {doctor.acceptingNewPatients === false && (
        <span className="self-start text-[11px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
          Existing patients
        </span>
      )}
      <div className="flex flex-wrap gap-1">
        {doctor.specialInterests?.slice(0, 3).map((s) => (
          <span key={s} className="text-[11px] bg-brand-teal-light text-brand-teal px-2 py-0.5 rounded-full">
            {s}
          </span>
        ))}
      </div>
      {doctor.slug === "dr-ameer-khan" && (
        <Link href="/services/alternative-medicine-gosnells" className="text-xs text-brand-teal hover:underline">
          Alternative &amp; Integrative Medicine →
        </Link>
      )}
      <Link href={`/team/${doctor.slug}`} className="mt-auto text-xs font-medium text-brand-teal hover:underline">
        Book (existing patients) →
      </Link>
    </div>
  )
}

export default function TeamPage() {
  const newDoctors = getNewDoctors()
  const founders = getFoundingDoctors()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-16 pt-48">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Our Medical Team</h1>
            <p className="text-xl max-w-3xl">
              Meet our experienced, caring doctors and healthcare professionals dedicated to your wellbeing
            </p>
          </div>
        </section>

        {/* New doctors — accepting patients */}
        <section className="py-20 bg-glow-tl">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Now Accepting New Patients
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Three experienced GPs have joined Gosnells Family Practice. All our doctors hold Fellowship of the Royal Australian College of General Practitioners (FRACGP).
              </p>
            </div>

            {newDoctors.map((doctor, i) => (
              <FeaturedDoctor key={doctor.slug} doctor={doctor} flip={i % 2 === 1} />
            ))}
          </div>
        </section>

        {/* Staff Section */}
        <section className="py-20 bg-surface-sunken bg-dot-pattern">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Healthcare Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Supporting our doctors, our dedicated nurses and allied health professionals provide comprehensive care
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staff.map((member, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 border border-border"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-brand-teal-light flex items-center justify-center relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-brand-teal text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {member.role}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{member.qualifications}</p>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-foreground mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.slice(0, 3).map((specialty, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <ExpandableBio text={member.biography} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Founding Doctors — compact */}
        <section className="py-16 bg-secondary/40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Our Founding Doctors</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dr Khan, Dr Fazilah, Dr Loh and Dr Quam are currently caring for their existing patients.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {founders.map((doctor) => (
                <FounderCard key={doctor.slug} doctor={doctor} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-teal text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
            <p className="text-lg mb-8">
              New patients — book online with Dr Sue, Dr Wan or Dr Nilanjana in minutes
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={BOOK_PATH}
                onClick={() => trackBookingClick()}
                className="bg-white text-brand-teal hover:bg-gray-50 font-semibold px-8 py-3 rounded-full shadow-lg shadow-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block"
              >
                Book Online
              </Link>
              <a
                href="tel:0861182788"
                className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-slate-900/30 hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block"
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
