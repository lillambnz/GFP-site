import { Phone, Mail, MapPin, Clock, Lightbulb, Facebook, Instagram, Twitter, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer>
      {/* Pre-footer CTA Band */}
      <div className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 text-center">
          <p className="eyebrow mb-3">Ready to get started?</p>
          <h2 className="text-heading text-foreground mb-4">Book Your Appointment Today</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Our friendly reception team is here to help you find the right doctor and time that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="rounded-full bg-brand-teal hover:bg-brand-teal-dark text-white px-8 py-6 text-base shadow-card hover:shadow-card-hover transition-all" asChild>
              <a href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors" target="_blank" rel="noopener noreferrer">
                Book Online <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" className="rounded-full border-brand-teal/30 text-brand-teal hover:bg-brand-teal-light px-8 py-6 text-base" asChild>
              <a href="tel:0861182788">
                <Phone className="w-4 h-4 mr-2" /> Call (08) 6118 2788
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-slate-900 text-white">
        {/* Help Banner */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-center gap-2 text-center">
              <Lightbulb className="w-4 h-4 text-brand-teal" />
              <p className="text-sm text-white/70">
                Not sure which doctor? Our reception team can help match you with the right specialist.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mb-12">
            {/* Practice Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-3">Gosnells Family Practice</h3>
              <p className="text-white/50 mb-6 leading-relaxed text-sm">
                Your trusted healthcare partner in Gosnells, providing comprehensive medical services 7 days a week.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-teal/60" />
                  <div>
                    <a href="tel:0861182788" className="text-white font-medium hover:text-brand-teal transition-colors">(08) 6118 2788</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-teal/60 mt-0.5" />
                  <div>
                    <p className="text-white/80 text-sm">23C, 2158 Albany Highway</p>
                    <p className="text-white/80 text-sm">Gosnells WA 6110</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-teal/60" />
                  <a href="mailto:reception@gosnellsfamilypractice.com.au" className="text-white/80 text-sm hover:text-brand-teal transition-colors">
                    reception@gosnellsfamilypractice.com.au
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-brand-teal/60" />
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Opening Hours</h4>
              </div>
              <span className="inline-block text-xs font-medium text-brand-teal bg-brand-teal/10 px-2.5 py-1 rounded-full mb-4">Open 7 Days</span>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/50">Mon - Fri</span>
                  <span className="text-white/90">8am - 5pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Saturday</span>
                  <span className="text-white/90">9am - 3pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Sunday</span>
                  <span className="text-white/90">10am - 3pm</span>
                </div>
              </div>
            </div>

            {/* Quick Access */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Access</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-brand-teal transition-colors">Book Appointment</a></li>
                <li><Link href="/about" className="text-white/50 hover:text-brand-teal transition-colors">About Us</Link></li>
                <li><Link href="/team" className="text-white/50 hover:text-brand-teal transition-colors">Our Team</Link></li>
                <li><Link href="/services" className="text-white/50 hover:text-brand-teal transition-colors">All Services</Link></li>
                <li><Link href="/faqs" className="text-white/50 hover:text-brand-teal transition-colors">FAQs</Link></li>
                <li><Link href="/blog" className="text-white/50 hover:text-brand-teal transition-colors">Blog</Link></li>
                <li><Link href="/after-hours" className="text-white/50 hover:text-brand-teal transition-colors">After Hours Care</Link></li>
              </ul>
            </div>

            {/* Legal & Emergency */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal Information</h4>
              <ul className="space-y-2.5 text-sm mb-6">
                <li><Link href="/privacy" className="text-white/50 hover:text-brand-teal transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-white/50 hover:text-brand-teal transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/disclaimer" className="text-white/50 hover:text-brand-teal transition-colors">Medical Disclaimer</Link></li>
              </ul>

              <div className="bg-red-950/40 border border-red-800/40 rounded-xl p-4">
                <h5 className="text-red-300 font-semibold text-sm mb-1">After Hours Emergency</h5>
                <p className="text-white/50 text-xs">Call Doctors Home Visits</p>
                <a href="tel:0893219133" className="text-white font-medium text-sm hover:text-red-300 transition-colors">(08) 9321 9133</a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <Image
                  src="/AGPAL.fingerprinted..png"
                  alt="AGPAL Accredited Practice"
                  width={80}
                  height={80}
                  className="rounded opacity-90"
                />
                <Image
                  src="/images/bulk-billing/BBPIP_webtile_200x160_v1.png"
                  alt="Medicare Bulk Billing Practice"
                  width={80}
                  height={64}
                  className="rounded opacity-90"
                />
                <div className="flex items-center gap-3">
                  <span className="text-white/40 text-sm">Follow us:</span>
                  <div className="flex gap-2">
                    <a href="#" className="text-white/30 hover:text-brand-teal transition-colors">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="text-white/30 hover:text-brand-teal transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="text-white/30 hover:text-brand-teal transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-white/30 text-sm">
                  &copy; 2025 Gosnells Family Practice. All rights reserved.
                </p>
                <p className="text-white/20 text-xs mt-1">
                  Website and IT services provided by{" "}
                  <a
                    href="https://clinicit.solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-teal/60 hover:text-brand-teal transition-colors"
                  >
                    ClinicIT Solutions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
