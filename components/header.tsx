"use client"

import { useState } from "react"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#4a4b75]/20 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo and Branding */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity mr-4">
            <Image
              src="https://i.ibb.co/N6J8rcPS/newgfplogo.jpg"
              alt="Gosnells Family Practice Logo"
              width={70}
              height={70}
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            <a href="/" className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition">
              Home
            </a>
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition flex items-center gap-1">
                About <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-[#4a4b75]/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#4a4b75]/5 transition">
                  About Us
                </a>
                <a href="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#4a4b75]/5 transition">
                  Our Team
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition flex items-center gap-1">
                Services <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white border border-[#4a4b75]/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#4a4b75]/5 transition font-semibold">
                  All Services
                </a>
                <div className="border-t border-[#4a4b75]/10"></div>
                <a href="/services/general-checkups" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#4a4b75]/5 transition">
                  General Practice
                </a>
                <a href="/services/dietitian-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#4a4b75]/5 transition">
                  Dietitian Services
                </a>
                <a href="/services/telehealth" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#4a4b75]/5 transition">
                  Telehealth
                </a>
                <a href="/services/womens-health" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#4a4b75]/5 transition">
                  Women's Health
                </a>
                <a href="/services/mens-health" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#4a4b75]/5 transition">
                  Men's Health
                </a>
                <a href="/services/psychology-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#4a4b75]/5 transition">
                  Psychology
                </a>
                <a href="/services/pathology-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#4a4b75]/5 transition">
                  Pathology
                </a>
              </div>
            </div>
            <a href="/#patient-info" className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition">
              Patient Info
            </a>
            <a href="/faqs" className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition">
              FAQs
            </a>
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition flex items-center gap-1">
                More <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-[#4a4b75]/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#4a4b75]/5 transition">
                  Blog
                </a>
                <a href="/after-hours" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#4a4b75]/5 transition">
                  After Hours
                </a>
                <a href="/#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#4a4b75]/5 transition">
                  Contact
                </a>
              </div>
            </div>
          </nav>

          {/* Phone and CTA - Right aligned */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
            <a
              href="tel:0861182788"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-cyan-600 transition"
            >
              <Phone size={18} className="text-cyan-600" />
              <span>(08) 6118 2788</span>
            </a>
            <Button className="bg-[#00b1c3] text-white hover:bg-[#009bb0] font-semibold px-6 py-2" asChild>
              <a href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors" target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mt-4 space-y-2 pb-4">
            <a
              href="/"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition"
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition"
            >
              About Us
            </a>
            <a
              href="/team"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition"
            >
              Our Team
            </a>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition flex items-center justify-between"
            >
              Services <ChevronDown size={16} className={servicesOpen ? "rotate-180" : ""} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                <a
                  href="/services"
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition font-semibold"
                >
                  All Services
                </a>
                <a
                  href="/services/general-checkups"
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition"
                >
                  General Practice
                </a>
                <a
                  href="/services/telehealth"
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition"
                >
                  Telehealth
                </a>
                <a
                  href="/services/womens-health"
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition"
                >
                  Women's Health
                </a>
              </div>
            )}
            <a
              href="/#patient-info"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition"
            >
              Patient Info
            </a>
            <a
              href="/faqs"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition"
            >
              FAQs
            </a>
            <a
              href="/blog"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition"
            >
              Blog
            </a>
            <a
              href="/after-hours"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition"
            >
              After Hours
            </a>
            <div className="pt-2 space-y-2">
              <a
                href="tel:0861182788"
                className="block px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition"
              >
                📞 (08) 6118 2788
              </a>
              <Button className="w-full bg-[#00b1c3] text-white hover:bg-[#009bb0]" asChild>
                <a href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors" target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
