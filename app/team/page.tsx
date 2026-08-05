"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { PhotoGallery } from "@/components/photo-gallery"
import { doctors, staff } from "@/lib/data/team"
import { Languages, Star, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

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

export default function TeamPage() {
  // Doctor photo galleries
  const doctorPhotos = {
    khan: [
      { src: "/images/photoshoot/doctors/dr-khan/GosnellsFamilyPractice-35.jpg", alt: "Dr. Ameer Khan" },
      { src: "/images/photoshoot/doctors/dr-khan/GosnellsFamilyPractice-38.jpg", alt: "Dr. Ameer Khan" },
      { src: "/images/photoshoot/doctors/dr-khan/GosnellsFamilyPractice-45.jpg", alt: "Dr. Ameer Khan" },
      { src: "/images/photoshoot/doctors/dr-khan/GosnellsFamilyPractice-46.jpg", alt: "Dr. Ameer Khan" },
    ],
    fazilah: [
      { src: "/images/photoshoot/doctors/dr-fazilah/GosnellsFamilyPractice-64.jpg", alt: "Dr. Fazilah Abu Bakar" },
      { src: "/images/photoshoot/doctors/dr-fazilah/GosnellsFamilyPractice-58.jpg", alt: "Dr. Fazilah Abu Bakar" },
      { src: "/images/photoshoot/doctors/dr-fazilah/GosnellsFamilyPractice-66.jpg", alt: "Dr. Fazilah Abu Bakar" },
      { src: "/images/photoshoot/doctors/dr-fazilah/GosnellsFamilyPractice-71.jpg", alt: "Dr. Fazilah Abu Bakar" },
    ],
    loh: [
      { src: "/images/photoshoot/doctors/dr-loh/GosnellsFamilyPractice-2.jpg", alt: "Dr. Choong Leat Loh" },
      { src: "/images/photoshoot/doctors/dr-loh/GosnellsFamilyPractice-14.jpg", alt: "Dr. Choong Leat Loh" },
      { src: "/images/photoshoot/doctors/dr-loh/GosnellsFamilyPractice-16.jpg", alt: "Dr. Choong Leat Loh" },
      { src: "/images/photoshoot/doctors/dr-loh/GosnellsFamilyPractice-21.jpg", alt: "Dr. Choong Leat Loh" },
    ],
    quam: [
      { src: "/images/photoshoot/doctors/dr-quam/GosnellsFamilyPractice-115.jpg", alt: "Dr. Quam Gbajabiamila" },
      { src: "/images/photoshoot/doctors/dr-quam/GosnellsFamilyPractice-121.jpg", alt: "Dr. Quam Gbajabiamila" },
      { src: "/images/photoshoot/doctors/dr-quam/GosnellsFamilyPractice-123.jpg", alt: "Dr. Quam Gbajabiamila" },
      { src: "/images/photoshoot/doctors/dr-quam/GosnellsFamilyPractice-126.jpg", alt: "Dr. Quam Gbajabiamila" },
    ]
  }

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

        {/* Doctors Section - Enhanced with Professional Photos */}
        <section className="py-20 bg-glow-tl">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Doctors</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                All our doctors hold Fellowship of the Royal Australian College of General Practitioners (FRACGP)
              </p>
            </div>

            {/* New Doctors */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground">
                Newest Members of Our Team <span className="text-brand-teal">— Now Accepting Patients</span>
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {doctors.filter(d => d.isNew).map((doctor) => (
                <div
                  id={doctor.slug}
                  key={doctor.slug}
                  className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 border border-border flex flex-col scroll-mt-24"
                >
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {doctor.isNew && (
                      <span className="absolute top-4 left-4 bg-gradient-to-r from-brand-teal to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        ✨ New Doctor
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-foreground">{doctor.name}</h3>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold text-foreground">{doctor.rating}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground font-semibold mb-2">{doctor.title}, {doctor.gender}</p>
                    <p className="text-sm text-muted-foreground mb-4">{doctor.qualifications}</p>

                    {doctor.specialInterests && (
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-foreground mb-2">Special Interests:</p>
                        <div className="flex flex-wrap gap-2">
                          {doctor.specialInterests.map((interest, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-brand-teal-light text-brand-teal px-2 py-1 rounded-full"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-4 pb-4 border-b border-border">
                      <div className="flex items-start gap-2">
                        <Languages className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-muted-foreground">
                          {doctor.languages.join(", ")}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <ExpandableBio text={doctor.biography} />
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-brand-teal to-emerald-500 hover:from-brand-teal-dark hover:to-emerald-600 text-white mt-auto shadow-md shadow-brand-teal/20 hover:shadow-lg hover:shadow-brand-teal/30 hover:scale-[1.02] transition-all duration-300"
                      asChild
                    >
                      <Link href={`/team/${doctor.slug}`}>
                        Book with {doctor.bookingName}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Practice Principals */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground">Our Founding Doctors</h3>
            </div>

            {/* Dr. Ameer Khan */}
            <div id="dr-ameer-khan" className="mb-16 bg-card rounded-2xl shadow-card overflow-hidden border border-border scroll-mt-24">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div>
                  <PhotoGallery photos={doctorPhotos.khan} columns={2} showLightbox={true} />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-3xl font-bold text-foreground">Dr. Ameer Khan</h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-sm font-semibold text-foreground">4.9</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-semibold mb-2">General Practitioner, Male</p>
                  <p className="text-sm text-muted-foreground mb-6">MRCGP, MBBS, FRACGP</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">Special Interests:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Chronic Disease Management</span>
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Pain Management</span>
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Mental Health</span>
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Child and Family Health</span>
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Childhood Immunisations</span>
                    </div>
                  </div>

                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-start gap-2">
                      <Languages className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Arabic, Hindi, Pashto, Urdu
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Dr. Ameer Khan is a highly skilled, all-rounded and compassionate GP dedicated to providing exceptional medical care. Dr Khan has a wealth of experience in all areas of primary care including minor illness, minor injuries, workers compensation, and has a specialist interest in chronic disease management and integrative medicine approaches. Dr Khan combines evidence-based conventional medicine with alternative and integrative health approaches to provide holistic, patient-centered care. Known for his expertise, professionalism, and excellent bedside manner, Dr Khan has earned the trust and respect of his patients. He believes in addressing the whole person - physical, emotional, and lifestyle factors - taking the time to listen to his patients' concerns, understand their unique needs, and develop personalised treatment plans.
                    </p>
                  </div>

                  {/* Alternative Medicine Specialty Highlight */}
                  <div className="mb-6 p-4 bg-brand-teal-light/50 rounded-2xl border border-border">
                    <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-lg">✨</span> Now Offering Alternative & Integrative Medicine
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Evidence-based complementary therapies combined with conventional GP care. Dr Khan offers alternative and integrative approaches to chronic pain, functional medicine, and holistic healthcare.
                    </p>
                    <a
                      href="/services/alternative-medicine-gosnells"
                      className="text-sm text-brand-teal hover:text-brand-teal-dark font-semibold underline inline-flex items-center gap-1"
                    >
                      Learn more about these services
                      <span className="text-xs">→</span>
                    </a>
                  </div>

                  <Button className="bg-brand-teal hover:bg-brand-teal-dark text-white text-lg px-8 py-6" asChild>
                    <Link href="/team/dr-ameer-khan">Book with Dr Khan</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Dr. Fazilah Abu Bakar */}
            <div id="dr-fazilah-abu-bakar" className="mb-16 bg-card rounded-2xl shadow-card overflow-hidden border border-border scroll-mt-24">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="order-2 lg:order-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-3xl font-bold text-foreground">Dr. Fazilah Abu Bakar</h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-sm font-semibold text-foreground">4.9</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-semibold mb-2">General Practitioner, Female</p>
                  <p className="text-sm text-muted-foreground mb-6">MBBch BAO, FRACGP</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">Special Interests:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Women's Health Medicine</span>
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Paediatric Health</span>
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Adolescent Health</span>
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Chronic Disease Management</span>
                    </div>
                  </div>

                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-start gap-2">
                      <Languages className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        English, Malay, Arabic
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Dr. Fazilah Abu Bakar is an experienced female General Practitioner and FRACGP Fellow who graduated from Dublin, Ireland in 2000. She promotes overall well-being and disease prevention through a holistic approach that addresses both physical and emotional health. Her areas of interest include women's health medicine, paediatric and adolescent health, and chronic disease management. Fluent in English, Malay, and basic Arabic, Dr. Abu Bakar connects with patients from diverse cultural backgrounds, emphasizing effective communication and culturally sensitive care.
                    </p>
                  </div>

                  <Button className="bg-brand-teal hover:bg-brand-teal-dark text-white text-lg px-8 py-6" asChild>
                    <Link href="/team/dr-fazilah-abu-bakar">Book with Dr Fazilah</Link>
                  </Button>
                </div>
                <div className="order-1 lg:order-2">
                  <PhotoGallery photos={doctorPhotos.fazilah} columns={2} showLightbox={true} />
                </div>
              </div>
            </div>

            {/* Dr. Choong Leat Loh */}
            <div id="dr-choong-leat-loh" className="mb-16 bg-card rounded-2xl shadow-card overflow-hidden border border-border scroll-mt-24">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div>
                  <PhotoGallery photos={doctorPhotos.loh} columns={2} showLightbox={true} />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-3xl font-bold text-foreground">Dr. Choong Leat Loh</h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-sm font-semibold text-foreground">4.9</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-semibold mb-2">General Practitioner, Male</p>
                  <p className="text-sm text-muted-foreground mb-6">MBBS, FRACGP, Cert Skin Cancer, MAFM</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">Special Interests:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Skin Cancer Medicine</span>
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Skin Diseases</span>
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Minor Procedures</span>
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Chronic Disease Management</span>
                    </div>
                  </div>

                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-start gap-2">
                      <Languages className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Cantonese, English, Hakka, Indonesian, Malay, Mandarin, Hokkien
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Dr Loh is a highly skilled general practitioner fluent in multiple languages, including various Chinese dialects, Malay and Indonesian language. With more than 20 years of experience in the medical field, Dr Loh is committed to providing exceptional care to patients of all ages. Dr Loh has spent years honing his diagnostic and treatment skills in skin diseases. Dr Loh is proud to offer comprehensive primary care services to patients in Gosnells. From routine check-ups to the management of chronic conditions, Dr Loh is dedicated to helping patients achieve and maintain optimal health.
                    </p>
                  </div>

                  <Button className="bg-brand-teal hover:bg-brand-teal-dark text-white text-lg px-8 py-6" asChild>
                    <Link href="/team/dr-choong-leat-loh">Book with Dr Loh</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Dr. Quam Gbajabiamila */}
            <div id="dr-quam-gbajabiamila" className="mb-16 bg-card rounded-2xl shadow-card overflow-hidden border border-border scroll-mt-24">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="order-2 lg:order-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-3xl font-bold text-foreground">Dr. Quam Gbajabiamila</h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-sm font-semibold text-foreground">4.9</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-semibold mb-2">General Practitioner</p>
                  <p className="text-sm text-muted-foreground mb-6">MBBS, FRACGP</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">Special Interests:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Family Medicine</span>
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Preventive Health</span>
                      <span className="text-sm bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full">Sports Medicine</span>
                    </div>
                  </div>

                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-start gap-2">
                      <Languages className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        English, Afrikaans
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Dr. Quam focuses on holistic family medicine with a special interest in preventive health and sports medicine. He is passionate about helping patients achieve their best health through comprehensive care.
                    </p>
                  </div>

                  <Button className="bg-brand-teal hover:bg-brand-teal-dark text-white text-lg px-8 py-6" asChild>
                    <Link href="/team/dr-quam-gbajabiamila">Book with Dr Quam</Link>
                  </Button>
                </div>
                <div className="order-1 lg:order-2">
                  <PhotoGallery photos={doctorPhotos.quam} columns={2} showLightbox={true} />
                </div>
              </div>
            </div>

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

            <div className="mt-12 text-center">
              <div className="bg-brand-teal-light border border-border rounded-2xl p-8 max-w-3xl mx-auto">
                <p className="text-lg text-foreground mb-4">
                  <strong>Note:</strong> We're currently recruiting additional healthcare professionals to join our team.
                </p>
                <p className="text-muted-foreground">
                  Placeholder profiles indicate positions that will be filled soon. We'll update with photos and detailed information once our new team members join us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-teal text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
            <p className="text-lg mb-8">
              Choose your preferred doctor and book your appointment online today
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-teal hover:bg-gray-50 font-semibold px-8 py-3 rounded-full shadow-lg shadow-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block"
              >
                Book Online
              </a>
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
