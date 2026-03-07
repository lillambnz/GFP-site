"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  Phone, Menu, X, ChevronDown,
  Stethoscope, Apple, Video, Heart, Activity, Brain, Microscope,
  Newspaper, Clock, Mail, Calendar
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

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

  const isMoreSectionActive = () => {
    return pathname === '/blog' || pathname === '/after-hours'
  }

  // Modern Navigation Link with Pill Hover Effect
  const NavLink = ({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) => (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
        active
          ? "bg-blue-50 text-blue-600 shadow-sm"
          : "text-slate-600 hover:text-blue-600 hover:bg-white/50"
      )}
    >
      {children}
    </Link>
  )

  const dropdownItemClasses = (active: boolean) => cn(
    "flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-200 hover:bg-slate-50",
    active ? "text-blue-600 bg-blue-50/50 font-medium" : "text-slate-600"
  )

  return (
    <>
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-200/50 py-4"
          : "bg-white/50 backdrop-blur-sm py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative group">
            <Image
              src="/logo-transparent.png"
              alt="Gosnells Family Practice Logo"
              width={320}
              height={120}
              className="h-[7.2rem] md:h-[9.6rem] w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation - Clean & Centered */}
          <nav className="hidden lg:flex items-center gap-2 bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-white/20 shadow-sm">
            <NavLink href="/" active={isActive('/')}>Home</NavLink>

            {/* About Dropdown */}
            <div className="relative group">
              <button className={cn(
                "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                pathname.startsWith('/about') || pathname.startsWith('/team')
                  ? "bg-blue-50 text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-blue-600 hover:bg-white/50"
              )}>
                About <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 p-2 z-50">
                <Link href="/about" className={dropdownItemClasses(isActive('/about') && !isActive('/team')) + " rounded-xl"}>
                  About Us
                </Link>
                <Link href="/team" className={dropdownItemClasses(isActive('/team')) + " rounded-xl"}>
                  Our Team
                </Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className={cn(
                "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                pathname.startsWith('/services')
                  ? "bg-blue-50 text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-blue-600 hover:bg-white/50"
              )}>
                Services <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-3xl shadow-xl border border-slate-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 p-3 z-50 grid gap-1">
                <Link href="/services" className="flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-blue-50 rounded-xl transition-colors group/link mb-2">
                  <span className="font-semibold text-slate-700 group-hover/link:text-blue-600">All Services</span>
                  <ChevronDown className="w-4 h-4 -rotate-90 opacity-50" />
                </Link>

                <div className="max-h-[60vh] overflow-y-auto pr-1 space-y-1 custom-scrollbar">
                  {[
                    { href: '/services/general-checkups', label: 'General Practice', icon: Stethoscope },
                    { href: '/services/dietitian-services', label: 'Dietitian', icon: Apple },
                    { href: '/services/telehealth', label: 'Telehealth', icon: Video },
                    { href: '/services/womens-health', label: "Women's Health", icon: Heart },
                    { href: '/services/mens-health', label: "Men's Health", icon: Activity },
                    { href: '/services/psychology-services', label: 'Psychology', icon: Brain },
                    { href: '/services/pathology-services', label: 'Pathology', icon: Microscope },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className={dropdownItemClasses(isActive(item.href)) + " rounded-xl"}>
                      <item.icon className="w-4 h-4 text-blue-500/70" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink href="/#patient-info">Patient Info</NavLink>
            <NavLink href="/faqs" active={isActive('/faqs')}>FAQs</NavLink>

            <div className="relative group">
              <button className={cn(
                "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                isMoreSectionActive()
                  ? "bg-blue-50 text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-blue-600 hover:bg-white/50"
              )}>
                More <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 p-2 z-50">
                <Link href="/blog" className={dropdownItemClasses(isActive('/blog')) + " rounded-xl"}>
                  <Newspaper className="w-4 h-4 text-blue-500/70" /> Blog
                </Link>
                <Link href="/after-hours" className={dropdownItemClasses(isActive('/after-hours')) + " rounded-xl"}>
                  <Clock className="w-4 h-4 text-blue-500/70" /> After Hours
                </Link>
                <Link href="mailto:reception@gosnellsfamilypractice.com.au" className={dropdownItemClasses(false) + " rounded-xl"}>
                  <Mail className="w-4 h-4 text-blue-500/70" /> Contact Us
                </Link>
              </div>
            </div>
          </nav>

          {/* Right Area: Call & Book */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0861182788"
              className="hidden xl:flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 bg-white/50 hover:bg-white rounded-full transition-all border border-transparent hover:border-slate-200"
            >
              <Phone className="w-4 h-4" />
              <span className="tracking-wide">(08) 6118 2788</span>
            </a>
            <Button
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 px-6"
              asChild
            >
              <a href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

    </header>

      {/* Modern Mobile Menu Overlay - Moved outside header for proper stacking */}
      <div className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}>
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/20 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div className={cn(
          "absolute left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-in-out overflow-y-auto max-h-[calc(100vh-88px)]",
          isScrolled ? "top-[88px]" : "top-[164px]",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        )}>
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-lg font-medium text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-lg font-medium text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
              About Us
            </Link>

            {/* Mobile Services Accordion-style */}
            <div className="space-y-1">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-slate-800 hover:bg-slate-50 rounded-xl transition-colors"
              >
                Our Services
                <ChevronDown className={cn("w-5 h-5 transition-transform", servicesOpen && "rotate-180")} />
              </button>

              <div className={cn("pl-4 space-y-1 overflow-hidden transition-all duration-300", servicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
                <Link href="/services" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-blue-600 font-medium">View All Services</Link>
                <Link href="/services/general-checkups" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-slate-600">General Practice</Link>
                <Link href="/services/womens-health" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-slate-600">Women's Health</Link>
                <Link href="/services/mens-health" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-slate-600">Men's Health</Link>
              </div>
            </div>

            <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-lg font-medium text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
              Blog & News
            </Link>
            <Link href="/faqs" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-lg font-medium text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
              FAQs
            </Link>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-4">
            <a href="tel:0861182788" className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <Phone className="w-5 h-5" /> Call Reception
            </a>
            <Button className="w-full rounded-full py-6 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200">
              <a href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors" target="_blank" rel="noopener noreferrer">
                Book Appointment Now
              </a>
            </Button>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

