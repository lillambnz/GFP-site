"use client"

import { useState, useEffect } from "react"
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
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  // Reusable className patterns - Medical Blue Theme
  const navLinkClasses = (active: boolean) => cn(
    "relative text-sm font-medium transition-all duration-200",
    "pb-1 border-b-2",
    active
      ? "text-blue-600 border-blue-600"
      : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-300"
  )

  const dropdownTriggerClasses = (active: boolean) => cn(
    "relative text-sm font-medium transition-all duration-200 flex items-center gap-1",
    "pb-1 border-b-2",
    active
      ? "text-blue-600 border-blue-600"
      : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-300"
  )

  const dropdownItemClasses = (active: boolean) => cn(
    "flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150 group/item",
    active
      ? "bg-blue-50 text-blue-600 font-medium"
      : "text-gray-700 hover:bg-blue-50"
  )

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-blue-100/50 transition-all duration-300",
      "bg-gradient-to-r from-slate-50 via-white to-blue-50",
      isScrolled ? "shadow-md" : ""
    )}>
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-6">
          {/* Logo - Reduced size for professional proportion */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="https://i.ibb.co/N6J8rcPS/newgfplogo.jpg"
              alt="Gosnells Family Practice Logo"
              width={256}
              height={256}
              className="h-28 lg:h-32 w-auto"
              quality={100}
            />
          </a>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            <a href="/" className={navLinkClasses(isActive('/'))}>
              Home
            </a>
            <div className="relative group">
              <button className={dropdownTriggerClasses(isAboutSectionActive())}>
                About <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-blue-100 rounded-lg shadow-lg opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                <a
                  href="/about"
                  className={cn(
                    "block px-4 py-3 text-sm rounded-t-lg transition-colors duration-150",
                    isActive('/about')
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-blue-50"
                  )}
                >
                  About Us
                </a>
                <a
                  href="/team"
                  className={cn(
                    "block px-4 py-3 text-sm rounded-b-lg transition-colors duration-150",
                    isActive('/team')
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-blue-50"
                  )}
                >
                  Our Team
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className={dropdownTriggerClasses(pathname.startsWith('/services'))}>
                Services <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white border border-blue-100 rounded-lg shadow-lg opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                <a
                  href="/services"
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-sm rounded-t-lg transition-colors duration-150 font-semibold",
                    pathname === '/services'
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-blue-50"
                  )}
                >
                  All Services
                </a>
                <div className="border-t border-blue-50"></div>
                <a href="/services/general-checkups" className={dropdownItemClasses(pathname === '/services/general-checkups')}>
                  <Stethoscope className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>General Practice</span>
                </a>
                <a href="/services/dietitian-services" className={dropdownItemClasses(pathname === '/services/dietitian-services')}>
                  <Apple className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Dietitian Services</span>
                </a>
                <a href="/services/telehealth" className={dropdownItemClasses(pathname === '/services/telehealth')}>
                  <Video className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Telehealth</span>
                </a>
                <a href="/services/womens-health" className={dropdownItemClasses(pathname === '/services/womens-health')}>
                  <Heart className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Women's Health</span>
                </a>
                <a href="/services/mens-health" className={dropdownItemClasses(pathname === '/services/mens-health')}>
                  <Activity className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Men's Health</span>
                </a>
                <a href="/services/psychology-services" className={dropdownItemClasses(pathname === '/services/psychology-services')}>
                  <Brain className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Psychology</span>
                </a>
                <a href="/services/pathology-services" className={cn(dropdownItemClasses(pathname === '/services/pathology-services'), "rounded-b-lg")}>
                  <Microscope className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Pathology</span>
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
                More <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-blue-100 rounded-lg shadow-lg opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                <a
                  href="/blog"
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-sm rounded-t-lg transition-colors duration-150 group/item",
                    isActive('/blog')
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-blue-50"
                  )}
                >
                  <Newspaper className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Blog</span>
                </a>
                <a
                  href="/after-hours"
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150 group/item",
                    isActive('/after-hours')
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-blue-50"
                  )}
                >
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>After Hours</span>
                </a>
                <a
                  href="mailto:reception@gosnellsfamilypractice.com.au"
                  className="flex items-center gap-3 px-4 py-3 text-sm rounded-b-lg text-gray-700 hover:bg-blue-50 transition-colors duration-150 group/item"
                >
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </nav>

          {/* Phone and CTA - Right aligned */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:0861182788"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition"
            >
              <Phone size={16} className="text-blue-600" />
              <span>(08) 6118 2788</span>
            </a>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-5 py-2 rounded-lg shadow-sm" asChild>
              <a href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors" target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-700 hover:text-blue-600 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mt-4 space-y-2 pb-4">
            <a
              href="/"
              className={cn(
                "block px-4 py-2 text-base font-medium rounded transition-colors duration-200 border-l-4",
                isActive('/')
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-transparent text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              )}
            >
              Home
            </a>
            <a
              href="/about"
              className={cn(
                "block px-4 py-2 text-base font-medium rounded transition-colors duration-200 border-l-4",
                isActive('/about')
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-transparent text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              )}
            >
              About Us
            </a>
            <a
              href="/team"
              className={cn(
                "block px-4 py-2 text-base font-medium rounded transition-colors duration-200 border-l-4",
                isActive('/team')
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-transparent text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              )}
            >
              Our Team
            </a>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={cn(
                "w-full text-left px-4 py-2 text-base font-medium rounded transition-colors duration-200 flex items-center justify-between border-l-4",
                pathname.startsWith('/services')
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-transparent text-gray-700 hover:text-blue-600 hover:bg-blue-50"
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
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  )}
                >
                  All Services
                </a>
                <a
                  href="/services/general-checkups"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm rounded transition-colors duration-150",
                    pathname === '/services/general-checkups'
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
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
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
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
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
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
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
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
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
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
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
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
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
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
                "block px-4 py-2 text-base font-medium rounded transition-colors duration-200 border-l-4",
                "border-transparent text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              )}
            >
              Patient Info
            </a>
            <a
              href="/faqs"
              className={cn(
                "block px-4 py-2 text-base font-medium rounded transition-colors duration-200 border-l-4",
                isActive('/faqs')
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-transparent text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              )}
            >
              FAQs
            </a>
            <a
              href="/blog"
              className={cn(
                "block px-4 py-2 text-base font-medium rounded transition-colors duration-200 border-l-4",
                isActive('/blog')
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-transparent text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              )}
            >
              Blog
            </a>
            <a
              href="/after-hours"
              className={cn(
                "block px-4 py-2 text-base font-medium rounded transition-colors duration-200 border-l-4",
                isActive('/after-hours')
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-transparent text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              )}
            >
              After Hours
            </a>
            <div className="pt-2 space-y-2 mt-4 border-t border-blue-100">
              <a
                href="tel:0861182788"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition"
              >
                <Phone size={16} />
                (08) 6118 2788
              </a>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg" asChild>
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
