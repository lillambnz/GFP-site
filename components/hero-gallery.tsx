'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface HeroPhoto {
  src: string
  alt: string
  title?: string
  description?: string
}

interface HeroGalleryProps {
  photos: HeroPhoto[]
  autoPlayInterval?: number
  height?: string
}

export function HeroGallery({
  photos,
  autoPlayInterval = 5000,
  height = 'h-[70vh]'
}: HeroGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying || photos.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % photos.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isAutoPlaying, photos.length, autoPlayInterval])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % photos.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((current) => (current - 1 + photos.length) % photos.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className={`relative w-full ${height} overflow-hidden rounded-3xl group`}>
      {/* Images */}
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

          {/* Text Content */}
          {(photo.title || photo.description) && (
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl">
              {photo.title && (
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                  {photo.title}
                </h2>
              )}
              {photo.description && (
                <p className="text-lg md:text-xl text-white/90 animate-fade-in animation-delay-200">
                  {photo.description}
                </p>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      {photos.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {photos.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
