"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Award, Heart, Users, Target, Shield, Star } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Your health and wellbeing are at the heart of everything we do. We take time to listen, understand your concerns, and provide personalized care tailored to your unique needs."
    },
    {
      icon: Users,
      title: "Cultural Sensitivity",
      description: "We celebrate diversity and provide culturally sensitive care to our multicultural community. Our doctors speak multiple languages and understand diverse cultural health perspectives."
    },
    {
      icon: Target,
      title: "Excellence in Medicine",
      description: "We are committed to evidence-based medicine and continuous professional development. Our team stays current with medical advances to provide you with the best possible care."
    },
    {
      icon: Shield,
      title: "Comprehensive Services",
      description: "From preventive care to chronic disease management, we offer comprehensive medical services for the whole family under one roof."
    },
    {
      icon: Star,
      title: "Accessibility",
      description: "Open 7 days a week with same-day appointments available, telehealth options, and bulk billing for eligible patients. Healthcare when you need it."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#0a2540] to-[#00b1c3] text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">About Gosnells Family Practice</h1>
              <p className="text-xl leading-relaxed">
                Your trusted healthcare partner in Gosnells, providing comprehensive, compassionate medical care to the community for over a decade.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl border border-[#00b1c3]/20">
                <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Our Mission</h2>
                <p className="text-lg text-[#425466] leading-relaxed">
                  To provide accessible, high-quality healthcare services to our diverse community. We strive to promote health and prevent disease through evidence-based medicine, delivered with compassion and respect for every patient.
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl border border-[#00b1c3]/20">
                <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Our Vision</h2>
                <p className="text-lg text-[#425466] leading-relaxed">
                  To be the leading family practice in Gosnells, recognized for clinical excellence, patient satisfaction, and our commitment to improving community health outcomes through integrated, comprehensive care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white/10">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#0a2540] mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg text-[#425466] leading-relaxed">
                Gosnells Family Practice was established to address the growing need for accessible, comprehensive healthcare in the Gosnells community. From our beginnings as a small practice, we have grown into a full-service medical center serving thousands of patients across Perth's southeastern suburbs.
              </p>
              <p className="text-lg text-[#425466] leading-relaxed">
                What sets us apart is our commitment to building long-term relationships with our patients. We believe that continuity of care leads to better health outcomes, which is why many families have trusted us with their healthcare for generations. Our doctors take time to understand your health history, family circumstances, and personal health goals.
              </p>
              <p className="text-lg text-[#425466] leading-relaxed">
                We are proud to serve one of Perth's most culturally diverse communities. Our multilingual team speaks over 10 languages and understands the unique health needs and perspectives of patients from various cultural backgrounds. This cultural competence, combined with our medical expertise, enables us to provide truly personalized care.
              </p>
              <p className="text-lg text-[#425466] leading-relaxed">
                Today, Gosnells Family Practice offers a comprehensive range of services including general practice, women's and men's health, chronic disease management, mental health support, dietitian services, and much more. We continue to expand our services to meet the evolving health needs of our community.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#0a2540] mb-4 text-center">Our Core Values</h2>
            <p className="text-xl text-[#425466] text-center mb-12 max-w-2xl mx-auto">
              These principles guide everything we do and every interaction we have with our patients
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-md p-8 rounded-3xl hover:bg-white/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-[#00b1c3]/10"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#00b1c3] to-[#009bb0] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0a2540] mb-3">{value.title}</h3>
                    <p className="text-[#425466] leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Accreditation */}
        <section className="py-20 bg-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <Award className="w-16 h-16 text-[#00b1c3]" />
              </div>
              <h2 className="text-4xl font-bold text-[#0a2540] mb-6 text-center">AGPAL Accredited Practice</h2>
              <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl border border-[#00b1c3]/20">
                <p className="text-lg text-[#425466] leading-relaxed mb-6">
                  Gosnells Family Practice is proud to be accredited by the Australian General Practice Accreditation Limited (AGPAL). This accreditation demonstrates our commitment to maintaining the highest standards of patient care, safety, and practice management.
                </p>
                <p className="text-lg text-[#425466] leading-relaxed mb-6">
                  AGPAL accreditation means we regularly undergo rigorous external assessment to ensure we meet national standards for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#425466] text-lg ml-4">
                  <li>Patient safety and quality of care</li>
                  <li>Clinical governance and risk management</li>
                  <li>Infection control and emergency management</li>
                  <li>Medications and equipment management</li>
                  <li>Information management and patient records</li>
                  <li>Continuous quality improvement</li>
                </ul>
                <p className="text-lg text-[#425466] leading-relaxed mt-6">
                  Our accreditation gives you confidence that you are receiving care from a practice that meets the highest professional standards in Australian general practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#0a2540] mb-8 text-center">Why Choose Gosnells Family Practice?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-[#00b1c3]/10">
                <h3 className="text-xl font-semibold text-[#0a2540] mb-2">Experienced Team</h3>
                <p className="text-[#425466]">All our doctors hold FRACGP (Fellowship of the Royal Australian College of General Practitioners) and bring years of diverse medical experience.</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-[#00b1c3]/10">
                <h3 className="text-xl font-semibold text-[#0a2540] mb-2">Open 7 Days</h3>
                <p className="text-[#425466]">Weekend and weekday appointments available, with same-day bookings for urgent cases.</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-[#00b1c3]/10">
                <h3 className="text-xl font-semibold text-[#0a2540] mb-2">Bulk Billing Available</h3>
                <p className="text-[#425466]">We bulk bill children under 16, pensioners, and concession card holders for standard consultations.</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-[#00b1c3]/10">
                <h3 className="text-xl font-semibold text-[#0a2540] mb-2">Comprehensive Services</h3>
                <p className="text-[#425466]">From family medicine to dietitian services, mental health support to minor procedures - all under one roof.</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-[#00b1c3]/10">
                <h3 className="text-xl font-semibold text-[#0a2540] mb-2">Multilingual Care</h3>
                <p className="text-[#425466]">Our doctors collectively speak over 10 languages including Arabic, Malay, Mandarin, and more.</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-[#00b1c3]/10">
                <h3 className="text-xl font-semibold text-[#0a2540] mb-2">Modern Facilities</h3>
                <p className="text-[#425466]">Well-equipped consultation rooms, procedure room, and on-site pathology collection services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#00b1c3] to-[#009bb0] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Experience Quality Healthcare</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Join thousands of patients who trust Gosnells Family Practice for their healthcare needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#00b1c3] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition inline-block text-lg"
              >
                Book Appointment
              </a>
              <a
                href="/team"
                className="bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-semibold px-8 py-4 rounded-full transition inline-block text-lg"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
