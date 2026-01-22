'use client'

import { useState, useEffect } from 'react'
import { X, Phone, Calendar } from 'lucide-react'

export default function AustraliaDayPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Check if popup was already dismissed in this session
    const dismissed = sessionStorage.getItem('australiaDayPopupDismissed')
    if (!dismissed) {
      // Show popup after a short delay
      setTimeout(() => setIsVisible(true), 800)
    }
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      sessionStorage.setItem('australiaDayPopupDismissed', 'true')
    }, 400)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-400 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />

      {/* Popup Container */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none transition-all duration-400 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div
          className="relative pointer-events-auto w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Main Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Decorative Top Wave with Australia Day Colors */}
            <div className="relative h-24 bg-gradient-to-br from-blue-600 via-blue-500 to-red-500 overflow-hidden">
              {/* Southern Cross Stars */}
              <div className="absolute top-4 left-6 w-2 h-2 bg-white rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0ms' }} />
              <div className="absolute top-8 left-12 w-2.5 h-2.5 bg-white rounded-full shadow-lg animate-pulse" style={{ animationDelay: '200ms' }} />
              <div className="absolute top-14 left-10 w-2 h-2 bg-white rounded-full shadow-lg animate-pulse" style={{ animationDelay: '400ms' }} />
              <div className="absolute top-12 left-4 w-1.5 h-1.5 bg-white rounded-full shadow-lg animate-pulse" style={{ animationDelay: '600ms' }} />
              <div className="absolute top-6 left-16 w-3 h-3 bg-white rounded-full shadow-lg animate-pulse" style={{ animationDelay: '800ms' }} />

              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute top-20 -left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl" />

              {/* Wave pattern */}
              <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                style={{ height: '60px' }}
              >
                <path
                  d="M0,60 C300,100 500,20 800,60 C1000,90 1100,60 1200,60 L1200,120 L0,120 Z"
                  fill="white"
                  opacity="0.9"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="relative px-6 py-6 pb-8 text-center">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors group"
                aria-label="Close popup"
              >
                <X className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" />
              </button>

              {/* Australia Day Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-full text-xs font-semibold mb-4 shadow-lg">
                <Calendar className="w-3.5 h-3.5" />
                <span>Australia Day 2026</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                We're Open on<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-red-500">
                  Australia Day!
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Your health doesn't take holidays. We're here to serve you on January 26th.
              </p>

              {/* Booking Options */}
              <div className="space-y-3">
                {/* Phone Booking */}
                <a
                  href="tel:0861182788"
                  className="group flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 rounded-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="text-xs font-medium text-blue-600 mb-0.5">Call to Book</div>
                    <div className="text-lg font-bold text-gray-900 tracking-wide">(08) 6118 2788</div>
                  </div>
                </a>

                {/* Online Booking */}
                <a
                  href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="text-xs font-medium text-green-600 mb-0.5">Book Online</div>
                    <div className="text-base font-semibold text-gray-900">Visit HotDoc</div>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Footer Note */}
              <div className="mt-5 pt-5 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">
                  Regular holiday hours apply • Walk-ins welcome
                </p>
              </div>
            </div>

            {/* Bottom Decorative Element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-100/30 to-transparent rounded-tl-full pointer-events-none" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(0.95);
          }
        }
      `}</style>
    </>
  )
}
