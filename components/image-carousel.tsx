"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const images = [
    {
      src: "/world-class-medical-facility-modern-clinic.jpg",
      alt: "Modern Medical Facility",
      title: "Modern Medical Facility",
    },
    {
      src: "/medical-examination-room-equipped-with-modern-equi.jpg",
      alt: "Modern Medical Equipment",
      title: "Modern Medical Equipment",
    },
  ]

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoplay, images.length])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
    setAutoplay(false)
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length)
    setAutoplay(false)
  }

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          {/* Images */}
          <div className="relative w-full h-96 md:h-[500px] bg-muted">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}

            {/* Overlay with Title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
              <div className="w-full p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{images[current].title}</h3>
                <p className="text-white/80 mt-2">Providing quality healthcare facilities</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
                className={`w-2 h-2 rounded-full transition ${
                  index === current ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
