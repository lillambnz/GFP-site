import { Phone, Mail, MapPin, Clock, Lightbulb, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Help Banner */}
      <div className="bg-[#00b1c3]/20 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-center">
            <Lightbulb className="w-5 h-5 text-white" />
            <p className="text-sm font-medium drop-shadow-lg">
              Not sure which doctor? Our reception team can help match you with the right specialist.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Practice Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-3">Gosnells Family Practice</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted healthcare partner in Gosnells, providing comprehensive medical services 7 days a week.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#6b6d95]" />
                <div>
                  <p className="text-white font-semibold">(08) 6118 2788</p>
                  <p className="text-gray-400 text-sm">Call anytime</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#6b6d95] mt-1" />
                <div>
                  <p className="text-white">23C, 2158 Albany Highway</p>
                  <p className="text-white">Gosnells WA 6110</p>
                  <p className="text-gray-400 text-sm">Gosnells, WA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[#6b6d95]" />
              <h4 className="text-lg font-semibold text-white">Opening Hours</h4>
            </div>
            <p className="text-red-300 text-sm font-medium mb-3">Open 7 Days</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Mon - Fri</span>
                <span className="text-white">8am - 5pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Saturday</span>
                <span className="text-white">9am - 3pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sunday</span>
                <span className="text-white">10am - 3pm</span>
              </div>
            </div>
          </div>

          {/* Quick Access */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Access</h4>
            <ul className="space-y-2">
              <li><a href="#book" className="text-gray-300 hover:text-red-300 transition">Book Appointment</a></li>
              <li><a href="#patient-info" className="text-gray-300 hover:text-red-300 transition">Patient Information</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-300 transition">Services</a></li>
              <li><a href="#doctors" className="text-gray-300 hover:text-red-300 transition">Our Doctors</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-red-300 transition">Contact & Hours</a></li>
              <li><a href="mailto:info@gosnellsfamilypractice.com.au" className="text-gray-300 hover:text-red-300 transition">Email Us</a></li>
            </ul>
          </div>

          {/* Legal & Emergency */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal Information</h4>
            <ul className="space-y-2 mb-6">
              <li><a href="/privacy" className="text-gray-300 hover:text-red-300 transition">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-red-300 transition">Terms & Conditions</a></li>
              <li><a href="/disclaimer" className="text-gray-300 hover:text-red-300 transition">Medical Disclaimer</a></li>
            </ul>

            <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
              <h5 className="text-red-300 font-semibold mb-2">After Hours Emergency</h5>
              <p className="text-gray-300 text-sm">Call Doctors Home Visits</p>
              <p className="text-white font-medium">(08) 9321 9133</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                AGPAL Accredited
              </span>
              <div className="flex items-center gap-2">
                <span className="text-gray-300">Follow us:</span>
                <div className="flex gap-2">
                  <a href="#" className="text-gray-400 hover:text-red-300 transition">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-300 transition">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-300 transition">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Gosnells Family Practice. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Website and IT services provided by{" "}
                <a 
                  href="https://clinicit.solutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                  style={{
                    textShadow: '0 0 10px rgba(34, 211, 238, 0.8), 0 0 20px rgba(34, 211, 238, 0.6), 0 0 30px rgba(34, 211, 238, 0.4)'
                  }}
                >
                  ClinicIT Solutions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
