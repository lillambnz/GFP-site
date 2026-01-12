"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import {
  Phone, Menu, X, ChevronDown,
  Stethoscope, Apple, Video, Heart, Activity, Brain, Microscope,
  Newspaper, Clock, Mail
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  // Active state detection helpers
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const isAboutSectionActive = () => {
    return pathname === '/about' || pathname === '/team'
  }

  const isMoreSectionActive = () => {
    return pathname === '/blog' || pathname === '/after-hours'
  }

  // Reusable className patterns
  const navLinkClasses = (active: boolean) => cn(
    "relative text-base font-medium transition-colors duration-200",
    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cyan-600",
    "after:transition-all after:duration-300 after:ease-out",
    active
      ? "text-cyan-600 after:w-full"
      : "text-gray-700 hover:text-cyan-600 after:w-0 hover:after:w-full"
  )

  const dropdownTriggerClasses = (active: boolean) => cn(
    "relative text-base font-medium transition-colors duration-200 flex items-center gap-1",
    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cyan-600",
    "after:transition-all after:duration-300 after:ease-out",
    active
      ? "text-cyan-600 after:w-full"
      : "text-gray-700 hover:text-cyan-600 after:w-0 hover:after:w-full"
  )

  const dropdownItemClasses = (active: boolean) => cn(
    "flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150 group/item",
    active
      ? "bg-cyan-50 text-cyan-600 font-medium"
      : "text-gray-700 hover:bg-[#4a4b75]/5"
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#4a4b75]/20 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo and Branding */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity mr-6">
            <Image
              src="https://i.ibb.co/N6J8rcPS/newgfplogo.jpg"
              alt="Gosnells Family Practice Logo"
              width={168}
              height={168}
              className="h-40 w-auto"
            />
          </a>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            <a href="/" className={navLinkClasses(isActive('/'))}>
              Home
            </a>
            <div className="relative group">
              <button className={dropdownTriggerClasses(isAboutSectionActive())}>
                About <ChevronDown size={18} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-[#4a4b75]/20 rounded-lg shadow-lg shadow-[#4a4b75]/10 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                <a
                  href="/about"
                  className={cn(
                    "block px-4 py-3 text-sm transition-colors duration-150",
                    isActive('/about')
                      ? "bg-cyan-50 text-cyan-600 font-medium"
                      : "text-gray-700 hover:bg-[#4a4b75]/5"
                  )}
                >
                  About Us
                </a>
                <a
                  href="/team"
                  className={cn(
                    "block px-4 py-3 text-sm transition-colors duration-150",
                    isActive('/team')
                      ? "bg-cyan-50 text-cyan-600 font-medium"
                      : "text-gray-700 hover:bg-[#4a4b75]/5"
                  )}
                >
                  Our Team
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className={dropdownTriggerClasses(pathname.startsWith('/services'))}>
                Services <ChevronDown size={18} />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white border border-[#4a4b75]/20 rounded-lg shadow-lg shadow-[#4a4b75]/10 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                <a
                  href="/services"
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150 font-semibold",
                    pathname === '/services'
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-gray-700 hover:bg-[#4a4b75]/5"
                  )}
                >
                  All Services
                </a>
                <div className="border-t border-[#4a4b75]/10"></div>
                <a href="/services/general-checkups" className={dropdownItemClasses(pathname === '/services/general-checkups')}>
                  <Stethoscope className="w-4 h-4 text-cyan-600 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110" />
                  <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">General Practice</span>
                </a>
                <a href="/services/dietitian-services" className={dropdownItemClasses(pathname === '/services/dietitian-services')}>
                  <Apple className="w-4 h-4 text-cyan-600 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110" />
                  <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">Dietitian Services</span>
                </a>
                <a href="/services/telehealth" className={dropdownItemClasses(pathname === '/services/telehealth')}>
                  <Video className="w-4 h-4 text-cyan-600 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110" />
                  <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">Telehealth</span>
                </a>
                <a href="/services/womens-health" className={dropdownItemClasses(pathname === '/services/womens-health')}>
                  <Heart className="w-4 h-4 text-cyan-600 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110" />
                  <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">Women's Health</span>
                </a>
                <a href="/services/mens-health" className={dropdownItemClasses(pathname === '/services/mens-health')}>
                  <Activity className="w-4 h-4 text-cyan-600 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110" />
                  <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">Men's Health</span>
                </a>
                <a href="/services/psychology-services" className={dropdownItemClasses(pathname === '/services/psychology-services')}>
                  <Brain className="w-4 h-4 text-cyan-600 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110" />
                  <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">Psychology</span>
                </a>
                <a href="/services/pathology-services" className={dropdownItemClasses(pathname === '/services/pathology-services')}>
                  <Microscope className="w-4 h-4 text-cyan-600 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110" />
                  <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">Pathology</span>
                </a>
              </div>
            </div>
            <a href="/#patient-info" className={cn(navLinkClasses(false), "whitespace-nowrap")}>
              Patient Info
            </a>
            <a href="/faqs" className={navLinkClasses(isActive('/faqs'))}>
              FAQs
            </a>
            <div className="relative group">
              <button className={dropdownTriggerClasses(isMoreSectionActive())}>
                More <ChevronDown size={18} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-[#4a4b75]/20 rounded-lg shadow-lg shadow-[#4a4b75]/10 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                <a
                  href="/blog"
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150 group/item",
                    isActive('/blog')
                      ? "bg-cyan-50 text-cyan-600 font-medium"
                      : "text-gray-700 hover:bg-[#4a4b75]/5"
                  )}
                >
                  <Newspaper className="w-4 h-4 text-cyan-600 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110" />
                  <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">Blog</span>
                </a>
                <a
                  href="/after-hours"
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150 group/item",
                    isActive('/after-hours')
                      ? "bg-cyan-50 text-cyan-600 font-medium"
                      : "text-gray-700 hover:bg-[#4a4b75]/5"
                  )}
                >
                  <Clock className="w-4 h-4 text-cyan-600 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110" />
                  <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">After Hours</span>
                </a>
                <a
                  href="mailto:reception@gosnellsfamilypractice.com.au"
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-[#4a4b75]/5 transition-colors duration-150 group/item"
                >
                  <Mail className="w-4 h-4 text-cyan-600 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110" />
                  <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">Contact</span>
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
              className={cn(
                "block px-4 py-2 text-base font-medium rounded transition-colors duration-200 border-l-2",
                isActive('/')
                  ? "border-cyan-600 bg-cyan-50 text-cyan-600"
                  : "border-transparent text-foreground hover:text-primary hover:bg-muted"
              )}
            >
              Home
            </a>
            <a
              href="/about"
              className={cn(
                "block px-4 py-2 text-base font-medium rounded transition-colors duration-200 border-l-2",
                isActive('/about')
                  ? "border-cyan-600 bg-cyan-50 text-cyan-600"
                  : "border-transparent text-foreground hover:text-primary hover:bg-muted"
              )}
            >
              About Us
            </a>
            <a
              href="/team"
              className={cn(
                "block px-4 py-2 text-base font-medium rounded transition-colors duration-200 border-l-2",
                isActive('/team')
                  ? "border-cyan-600 bg-cyan-50 text-cyan-600"
                  : "border-transparent text-foreground hover:text-primary hover:bg-muted"
              )}
            >
              Our Team
            </a>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={cn(
                "w-full text-left px-4 py-2 text-base font-medium rounded transition-colors duration-200 flex items-center justify-between border-l-2",
                pathname.startsWith('/services')
                  ? "border-cyan-600 bg-cyan-50 text-cyan-600"
                  : "border-transparent text-foreground hover:text-primary hover:bg-muted"
              )}
            >
              Services <ChevronDown size={18} className={cn("transition-transform duration-200", servicesOpen ? "rotate-180" : "")} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                <a
                  href="/services"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm rounded transition-colors duration-150 font-semibold",
                    pathname === '/services'
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  All Services
                </a>
                <a
                  href="/services/general-checkups"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm rounded transition-colors duration-150",
                    pathname === '/services/general-checkups'
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  <Stethoscope className="w-4 h-4" />
                  General Practice
                </a>
                <a
                  href="/services/dietitian-services"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm rounded transition-colors duration-150",
                    pathname === '/services/dietitian-services'
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  <Apple className="w-4 h-4" />
                  Dietitian Services
                </a>
                <a
                  href="/services/telehealth"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm rounded transition-colors duration-150",
                    pathname === '/services/telehealth'
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  <Video className="w-4 h-4" />
                  Telehealth
                </a>
                <a
                  href="/services/womens-health"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm rounded transition-colors duration-150",
                    pathname === '/services/womens-health'
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  <Heart className="w-4 h-4" />
                  Women's Health
                </a>
                <a
                  href="/services/mens-health"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm rounded transition-colors duration-150",
                    pathname === '/services/mens-health'
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  <Activity className="w-4 h-4" />
                  Men's Health
                </a>
                <a
                  href="/services/psychology-services"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm rounded transition-colors duration-150",
                    pathname === '/services/psychology-services'
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  <Brain className="w-4 h-4" />
                  Psychology
                </a>
                <a
                  href="/services/pathology-services"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm rounded transition-colors duration-150",
                    pathname === '/services/pathology-services'
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  <Microscope className="w-4 h-4" />
                  Pathology
                </a>
              </div>
            )}
            <a
              href="/#patient-info"
              className={cn(
                "block px-4 py-2 text-base font-medium rounded transition-colors duration-200 border-l-2",
                "border-transparent text-foreground hover:text-primary hover:bg-muted"
              )}
            >
              Patient Info
            </a>
            <a
              href="/faqs"
              className={cn(
                "block px-4 py-2 text-base font-medium rounded transition-colors duration-200 border-l-2",
                isActive('/faqs')
                  ? "border-cyan-600 bg-cyan-50 text-cyan-600"
                  : "border-transparent text-foreground hover:text-primary hover:bg-muted"
              )}
            >
              FAQs
            </a>
            <a
              href="/blog"
              className={cn(
                "block px-4 py-2 text-base font-medium rounded transition-colors duration-200 border-l-2",
                isActive('/blog')
                  ? "border-cyan-600 bg-cyan-50 text-cyan-600"
                  : "border-transparent text-foreground hover:text-primary hover:bg-muted"
              )}
            >
              Blog
            </a>
            <a
              href="/after-hours"
              className={cn(
                "block px-4 py-2 text-base font-medium rounded transition-colors duration-200 border-l-2",
                isActive('/after-hours')
                  ? "border-cyan-600 bg-cyan-50 text-cyan-600"
                  : "border-transparent text-foreground hover:text-primary hover:bg-muted"
              )}
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
