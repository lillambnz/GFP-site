"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function HeroBanner() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-transparent py-16 md:py-24"
    >
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/60 via-[#00b1c3]/50 to-blue-500/40 rounded-full blur-3xl -mr-48 -mt-48 floating"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-600/40 via-indigo-500/35 to-[#00b1c3]/30 rounded-full blur-3xl -ml-48 -mb-48 floating"></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-r from-teal-300/40 via-cyan-400/30 to-blue-400/35 rounded-full blur-2xl opacity-70 pulse-gentle"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-emerald-300/25 via-teal-400/20 to-cyan-500/30 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 fade-in-up">

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-foreground">
              At <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gosnells Family Practice</span>, Your Family's Health Is Our Priority
            </h1>

            {/* Subheading */}
            <div className="space-y-3 text-lg text-muted-foreground">
              <p className="flex items-start gap-3">
                <span className="text-purple-accent font-bold mt-1">✓</span>
                <span>Quality healthcare with expert medical team</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-purple-accent font-bold mt-1">✓</span>
                <span>Comprehensive and culturally-sensitive care</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-purple-accent font-bold mt-1">✓</span>
                <span>Open 7 days a week for your convenience</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-[#00b1c3] hover:bg-[#009bb0] text-white"
                asChild
              >
                <a href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors" target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#00b1c3] text-[#00b1c3] hover:bg-[#00b1c3]/10"
                asChild
              >
                <a href="tel:+61861182788">
                  <Phone size={20} className="mr-2" />
                  Call (08) 6118 2788
                </a>
              </Button>
            </div>
          </div>

          {/* Enhanced Right Image */}
          <div className="relative fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <div className="gradient-border">
                <div className="gradient-border-inner aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/modern-medical-facility-reception-area.jpg"
                    alt="Modern medical facility at Gosnells Family Practice"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}