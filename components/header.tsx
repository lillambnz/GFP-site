"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Phone, Menu, X, ChevronDown,
  Stethoscope, Apple, Video, Heart, Activity, Brain, Microscope,
  Newspaper, Clock, Mail, Calendar
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { trackBookingClick, trackCallClick } from "@/lib/meta-events"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const isMoreSectionActive = () => {
    return pathname === '/blog' || pathname === '/after-hours'
  }

  const NavLink = ({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) => (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
        active
          ? "bg-brand-teal-light text-brand-teal"
          : "text-foreground/70 hover:text-brand-teal hover:bg-brand-teal-light/50"
      )}
    >
      {children}
    </Link>
  )

  const dropdownItemClasses = (active: boolean) => cn(
    "flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-200 hover:bg-muted rounded-xl",
    active ? "text-brand-teal bg-brand-teal-light/50 font-medium" : "text-foreground/70"
  )

  const mobileMenuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/blog", label: "Blog & News" },
    { href: "/faqs", label: "FAQs" },
    { href: "/after-hours", label: "After Hours" },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-card border-b border-border py-3"
            : "bg-white/70 backdrop-blur-sm py-5"
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
                className={cn(
                  "w-auto transition-all duration-300 group-hover:scale-105",
                  isScrolled ? "h-[5.5rem] md:h-[7rem]" : "h-[6.5rem] md:h-[8rem]"
                )}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-border/50 shadow-card">
              <NavLink href="/" active={isActive('/')}>Home</NavLink>

              {/* About Dropdown */}
              <div className="relative group">
                <button className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  pathname.startsWith('/about') || pathname.startsWith('/team')
                    ? "bg-brand-teal-light text-brand-teal"
                    : "text-foreground/70 hover:text-brand-teal hover:bg-brand-teal-light/50"
                )}>
                  About <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-card rounded-2xl shadow-elevated border border-border opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 p-2 z-50">
                  <Link href="/about" className={dropdownItemClasses(isActive('/about') && !isActive('/team'))}>
                    About Us
                  </Link>
                  <Link href="/team" className={dropdownItemClasses(isActive('/team'))}>
                    Our Team
                  </Link>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  pathname.startsWith('/services')
                    ? "bg-brand-teal-light text-brand-teal"
                    : "text-foreground/70 hover:text-brand-teal hover:bg-brand-teal-light/50"
                )}>
                  Services <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-card rounded-2xl shadow-elevated border border-border opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 p-3 z-50 grid gap-1">
                  <Link href="/services" className="flex items-center justify-between px-4 py-3 bg-brand-teal-light/50 hover:bg-brand-teal-light rounded-xl transition-colors group/link mb-2">
                    <span className="font-semibold text-foreground group-hover/link:text-brand-teal">All Services</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 opacity-50" />
                  </Link>

                  <div className="max-h-[60vh] overflow-y-auto pr-1 space-y-1">
                    {[
                      { href: '/services/general-checkups', label: 'General Practice', icon: Stethoscope },
                      { href: '/services/dietitian-services', label: 'Dietitian', icon: Apple },
                      { href: '/services/telehealth', label: 'Telehealth', icon: Video },
                      { href: '/services/womens-health', label: "Women's Health", icon: Heart },
                      { href: '/services/mens-health', label: "Men's Health", icon: Activity },
                      { href: '/services/psychology-services', label: 'Psychology', icon: Brain },
                      { href: '/services/pathology-services', label: 'Pathology', icon: Microscope },
                    ].map((item) => (
                      <Link key={item.href} href={item.href} className={dropdownItemClasses(isActive(item.href))}>
                        <item.icon className="w-4 h-4 text-brand-teal/60" />
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
                    ? "bg-brand-teal-light text-brand-teal"
                    : "text-foreground/70 hover:text-brand-teal hover:bg-brand-teal-light/50"
                )}>
                  More <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-56 bg-card rounded-2xl shadow-elevated border border-border opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 p-2 z-50">
                  <Link href="/blog" className={dropdownItemClasses(isActive('/blog'))}>
                    <Newspaper className="w-4 h-4 text-brand-teal/60" /> Blog
                  </Link>
                  <Link href="/after-hours" className={dropdownItemClasses(isActive('/after-hours'))}>
                    <Clock className="w-4 h-4 text-brand-teal/60" /> After Hours
                  </Link>
                  <Link href="mailto:reception@gosnellsfamilypractice.com.au" className={dropdownItemClasses(false)}>
                    <Mail className="w-4 h-4 text-brand-teal/60" /> Contact Us
                  </Link>
                </div>
              </div>
            </nav>

            {/* Right Area: Call & Book */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:0861182788"
                className="hidden xl:flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground/70 hover:text-brand-teal bg-white/50 hover:bg-brand-teal-light rounded-full transition-all border border-transparent hover:border-brand-teal/20"
                onClick={() => trackCallClick()}
              >
                <Phone className="w-4 h-4" />
                <span className="tracking-wide">(08) 6118 2788</span>
              </a>
              <Button
                className="rounded-full bg-gradient-to-r from-brand-teal to-emerald-500 hover:from-brand-teal-dark hover:to-emerald-600 text-white shadow-lg shadow-brand-teal/25 hover:shadow-xl hover:shadow-brand-teal/30 hover:scale-105 transition-all duration-300 px-6"
                asChild
              >
                <a href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors" target="_blank" rel="noopener noreferrer" onClick={() => trackBookingClick()}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Now
                </a>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-foreground/70 hover:bg-muted rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "absolute left-0 right-0 bg-card shadow-elevated overflow-y-auto max-h-[calc(100vh-88px)] rounded-b-2xl",
                isScrolled ? "top-[76px]" : "top-[120px]"
              )}
            >
              <div className="p-6 space-y-6">
                <div className="space-y-1">
                  {mobileMenuItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-xl transition-colors"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Services Accordion */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="space-y-1"
                  >
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-xl transition-colors"
                    >
                      Our Services
                      <ChevronDown className={cn("w-5 h-5 transition-transform", servicesOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pl-4"
                        >
                          <div className="space-y-1 py-1">
                            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-brand-teal font-medium rounded-lg hover:bg-brand-teal-light/50">View All Services</Link>
                            <Link href="/services/general-checkups" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted">General Practice</Link>
                            <Link href="/services/womens-health" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted">Women&apos;s Health</Link>
                            <Link href="/services/mens-health" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted">Men&apos;s Health</Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                <div className="pt-6 border-t border-border space-y-3">
                  <a href="tel:0861182788" className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-brand-teal/30 text-brand-teal font-medium hover:bg-brand-teal-light transition-colors" onClick={() => trackCallClick()}>
                    <Phone className="w-5 h-5" /> Call Reception
                  </a>
                  <Button className="w-full rounded-full py-6 text-lg bg-brand-teal hover:bg-brand-teal-dark shadow-card" asChild>
                    <a href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors" target="_blank" rel="noopener noreferrer" onClick={() => trackBookingClick()}>
                      Book Appointment Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
