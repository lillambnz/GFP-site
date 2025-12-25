"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { afterHoursServices, nearestHospitals, emergencyContacts, whenToSeekEmergencyCare, regularHours } from "@/lib/data/after-hours"
import { Phone, Clock, MapPin, AlertTriangle, PhoneCall, Building2 } from "lucide-react"

export default function AfterHoursPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#0a2540] to-[#00b1c3] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-12 h-12" />
              <h1 className="text-5xl font-bold">After Hours Care</h1>
            </div>
            <p className="text-xl max-w-3xl">
              When our practice is closed, these services are available to help with your medical needs
            </p>
          </div>
        </section>

        {/* Emergency Alert */}
        <section className="py-8 bg-red-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-start gap-4 bg-red-100 border-2 border-red-500 rounded-2xl p-6">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-2">In Case of Emergency</h2>
                <p className="text-lg text-red-800 mb-3">
                  For life-threatening emergencies, always call <strong>000</strong> immediately.
                </p>
                <p className="text-red-700">
                  Examples: Chest pain, difficulty breathing, severe bleeding, loss of consciousness, stroke symptoms, severe allergic reaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regular Hours */}
        <section className="py-12 bg-white/10">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0a2540] mb-6 text-center">Our Regular Hours</h2>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-[#00b1c3]/20">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-[#0a2540] mb-2">Weekdays</h3>
                  <p className="text-[#425466]">{regularHours.weekdays}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a2540] mb-2">Saturday</h3>
                  <p className="text-[#425466]">{regularHours.saturday}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a2540] mb-2">Sunday</h3>
                  <p className="text-[#425466]">{regularHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* After Hours Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#0a2540] mb-4 text-center">After Hours Medical Services</h2>
            <p className="text-center text-[#425466] mb-12 max-w-2xl mx-auto">
              When our practice is closed, these services can help with urgent medical needs
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {afterHoursServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-[#00b1c3]/20 hover:border-[#00b1c3]/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <PhoneCall className="w-6 h-6 text-[#00b1c3] flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-[#0a2540]">{service.name}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#00b1c3]" />
                      <a href={`tel:${service.phone.replace(/[^0-9]/g, '')}`} className="text-[#00b1c3] font-semibold hover:underline">
                        {service.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-[#425466] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[#425466]">{service.hours}</p>
                    </div>
                    <p className="text-[#425466] text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearest Hospitals */}
        <section className="py-16 bg-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#0a2540] mb-4 text-center">Nearest Hospitals</h2>
            <p className="text-center text-[#425466] mb-12 max-w-2xl mx-auto">
              24-hour emergency departments in the area
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearestHospitals.map((hospital, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-[#00b1c3]/20"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-[#00b1c3] flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-[#0a2540]">{hospital.name}</h3>
                  </div>
                  {hospital.emergency && (
                    <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                      24-Hour Emergency
                    </div>
                  )}
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-[#00b1c3] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[#425466]">{hospital.address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#00b1c3]" />
                      <a href={`tel:${hospital.phone.replace(/[^0-9]/g, '')}`} className="text-sm text-[#00b1c3] hover:underline">
                        {hospital.phone}
                      </a>
                    </div>
                    <p className="text-xs text-[#425466]">Distance: {hospital.distance}</p>
                    <div className="pt-3 border-t border-[#00b1c3]/10">
                      <p className="text-xs font-semibold text-[#0a2540] mb-2">Services:</p>
                      <ul className="text-xs text-[#425466] space-y-1">
                        {hospital.services.slice(0, 4).map((service, idx) => (
                          <li key={idx}>• {service}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to Seek Care */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#0a2540] mb-12 text-center">When to Seek Emergency Care</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {whenToSeekEmergencyCare.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-[#00b1c3]/20"
                >
                  <h3 className="text-xl font-bold text-[#0a2540] mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#00b1c3] mt-1">•</span>
                        <span className="text-[#425466]">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#00b1c3] to-[#009bb0] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">During Regular Hours</h2>
            <p className="text-lg mb-8">
              Book an appointment with Gosnells Family Practice for non-urgent medical care
            </p>
            <a
              href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#00b1c3] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition inline-block"
            >
              Book Appointment
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
