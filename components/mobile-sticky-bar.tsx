"use client"

import { Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileStickyBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 flex gap-3 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <Button
                variant="outline"
                className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => window.location.href = 'tel:0861182788'}
            >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
            </Button>
            <Button
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open('https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors', '_blank')}
            >
                <Calendar className="w-4 h-4 mr-2" />
                Book Online
            </Button>
        </div>
    )
}
