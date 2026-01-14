'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { googleBusinessInfo } from '@/lib/data/google-reviews'

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

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

      {/* Google Rating Badge */}
      <a
        href={googleBusinessInfo.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-3 z-10"
      >
        <GoogleIcon className="w-7 h-7" />
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-xl font-bold text-gray-900">{googleBusinessInfo.rating}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(googleBusinessInfo.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
          <span className="text-xs text-gray-600">{googleBusinessInfo.totalReviews}+ Google reviews</span>
        </div>
      </a>
    </div>
  )
}
