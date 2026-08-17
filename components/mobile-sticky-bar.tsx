"use client"

import { Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackBookingClick, trackCallClick } from "@/lib/meta-events"
import { useRouter } from "next/navigation"
import { BOOK_PATH } from "@/lib/booking"


interface MobileStickyBarProps {
  bookingUrl?: string
  bookingLabel?: string
  /** If set and the element exists on the page, Book scrolls to it instead of opening HotDoc. */
  scrollToId?: string
  /** Doctor slug for pixel attribution; omitted = general clinic booking. */
  doctorSlug?: string
}

export function MobileStickyBar({
  bookingUrl = BOOK_PATH,
  bookingLabel = 'Book Online',
  scrollToId,
  doctorSlug,
}: MobileStickyBarProps = {}) {
  const router = useRouter()
  const handleBook = () => {
    trackBookingClick(doctorSlug)
    const target = scrollToId ? document.getElementById(scrollToId) : null
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (bookingUrl.startsWith('/')) {
      router.push(bookingUrl)
    } else {
      window.open(bookingUrl, '_blank')
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-border p-3 flex gap-3 md:hidden shadow-elevated rounded-t-2xl">
      <Button
        variant="outline"
        className="flex-1 border-brand-teal/30 text-brand-teal hover:bg-brand-teal-light rounded-full"
        onClick={() => { trackCallClick(doctorSlug); window.location.href = 'tel:0861182788' }}
      >
        <Phone className="w-4 h-4 mr-2" />
        Call Now
      </Button>
      <Button
        className="flex-1 bg-gradient-to-r from-brand-teal to-emerald-500 hover:from-brand-teal-dark hover:to-emerald-600 text-white rounded-full shadow-lg shadow-brand-teal/25 transition-all duration-300"
        onClick={handleBook}
      >
        <Calendar className="w-4 h-4 mr-2" />
        {bookingLabel}
      </Button>
    </div>
  )
}
