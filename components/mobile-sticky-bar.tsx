"use client"

import { Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-border p-3 flex gap-3 md:hidden shadow-elevated rounded-t-2xl">
      <Button
        variant="outline"
        className="flex-1 border-brand-teal/30 text-brand-teal hover:bg-brand-teal-light rounded-full"
        onClick={() => window.location.href = 'tel:0861182788'}
      >
        <Phone className="w-4 h-4 mr-2" />
        Call Now
      </Button>
      <Button
        className="flex-1 bg-brand-teal hover:bg-brand-teal-dark text-white rounded-full"
        onClick={() => window.open('https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors', '_blank')}
      >
        <Calendar className="w-4 h-4 mr-2" />
        Book Online
      </Button>
    </div>
  )
}
