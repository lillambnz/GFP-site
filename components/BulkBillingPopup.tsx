'use client'

import { useState, useEffect } from 'react'
import { X, Phone, Calendar, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function BulkBillingPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('bulkBillingPopupDismissed')
    if (!dismissed) {
      setTimeout(() => setIsVisible(true), 800)
    }
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      sessionStorage.setItem('bulkBillingPopupDismissed', 'true')
    }, 400)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-400 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleClose}
      />

      {/* Popup Container */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none transition-all duration-400 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <div
          className="relative pointer-events-auto w-full max-w-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Main Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header with Medicare green/gold gradient */}
            <div className="relative h-28 bg-gradient-to-br from-[#00843D] via-[#00843D] to-[#F2A900] overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute top-20 -left-10 w-32 h-32 bg-[#F2A900]/20 rounded-full blur-xl" />

              {/* Header text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-2xl md:text-3xl font-bold text-center drop-shadow-lg">
                  Exciting News!
                </h2>
              </div>

              {/* Wave pattern */}
              <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                style={{ height: '50px' }}
              >
                <path
                  d="M0,60 C300,100 500,20 800,60 C1000,90 1100,60 1200,60 L1200,120 L0,120 Z"
                  fill="white"
                  opacity="0.95"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="relative px-6 py-5 pb-7 text-center">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors group"
                aria-label="Close popup"
              >
                <X className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" />
              </button>

              {/* Bulk Billing Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F2A900] to-[#FFB800] text-[#00573F] rounded-full text-xs font-semibold mb-4 shadow-lg">
                <Calendar className="w-4 h-4" />
                <span>Bulk Billing Practice</span>
              </div>

              {/* Heading */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                We Are<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00843D] to-[#006B31]">
                  Bulk Billing Practice
                </span>
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed max-w-sm mx-auto">
                Gosnells Family Practice is now a Medicare Bulk Billing Practice, meaning no out-of-pocket costs for all eligible Medicare card holders.
              </p>

              {/* Official Medicare tile */}
              <div className="mb-5 flex justify-center">
                <Image
                  src="/images/bulk-billing/BBPIP_webtile_200x160_v1.png"
                  alt="Medicare Bulk Billing Practice"
                  width={160}
                  height={128}
                  className="rounded-lg shadow-md"
                />
              </div>

              {/* Key benefits */}
              <div className="grid grid-cols-2 gap-2 mb-5 text-left max-w-sm mx-auto">
                <div className="flex items-start gap-2 bg-green-50 rounded-lg p-2.5">
                  <CheckCircle className="w-4 h-4 text-[#00843D] mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-700">No out-of-pocket costs</span>
                </div>
                <div className="flex items-start gap-2 bg-green-50 rounded-lg p-2.5">
                  <CheckCircle className="w-4 h-4 text-[#00843D] mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-700">All Medicare card holders</span>
                </div>
                <div className="flex items-start gap-2 bg-green-50 rounded-lg p-2.5">
                  <CheckCircle className="w-4 h-4 text-[#00843D] mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-700">Children & concession</span>
                </div>
                <div className="flex items-start gap-2 bg-green-50 rounded-lg p-2.5">
                  <CheckCircle className="w-4 h-4 text-[#00843D] mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-700">Open 7 days a week</span>
                </div>
              </div>

              {/* Booking Options */}
              <div className="space-y-3">
                {/* Phone Booking */}
                <a
                  href="tel:0861182788"
                  className="group flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#00843D] to-[#006B31] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="text-xs font-medium text-green-700 mb-0.5">Call to Book</div>
                    <div className="text-lg font-bold text-gray-900 tracking-wide">(08) 6118 2788</div>
                  </div>
                </a>

                {/* Online Booking */}
                <a
                  href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 rounded-xl transition-all duration-300 border-2 border-amber-100 hover:border-amber-300 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#F2A900] to-[#D4940A] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="text-xs font-medium text-amber-700 mb-0.5">Book Online</div>
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
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">
                  For more information, please speak to our reception team
                </p>
              </div>
            </div>

            {/* Bottom Decorative Element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#F2A900]/20 to-transparent rounded-tl-full pointer-events-none" />
          </div>
        </div>
      </div>
    </>
  )
}
