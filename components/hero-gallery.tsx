'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Calendar, Phone } from 'lucide-react'
import { googleBusinessInfo } from '@/lib/data/google-reviews'
import { Button } from '@/components/ui/button'

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
    <div className={`relative w-full ${height} overflow-hidden rounded-2xl group`}>
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay - only show on slides with text content */}
      {photos[currentIndex].title && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      )}

      {/* Content Overlay - only show on slides that have a title */}
      {photos[currentIndex].title && (
        <div className="absolute inset-0 flex items-center">
          <div className="px-8 md:px-16 lg:px-24 max-w-2xl">
            <motion.p
              key={`eyebrow-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="eyebrow !text-brand-teal-light mb-4"
            >
              Gosnells Family Practice
            </motion.p>
            <motion.h1
              key={`title-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-display text-white mb-4"
            >
              {photos[currentIndex].title}
            </motion.h1>
            {photos[currentIndex].description && (
              <motion.p
                key={`desc-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-white/80 mb-8 leading-relaxed"
              >
                {photos[currentIndex].description}
              </motion.p>
            )}
            <motion.div
              key={`cta-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                className="rounded-full bg-brand-teal hover:bg-brand-teal-dark text-white px-8 py-6 text-base shadow-elevated transition-all"
                asChild
              >
                <a href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" /> Book Appointment
                </a>
              </Button>
              <Button
                className="rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-6 text-base transition-all"
                asChild
              >
                <a href="tel:0861182788">
                  <Phone className="w-4 h-4 mr-2" /> Call (08) 6118 2788
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      )}

      {/* Navigation Arrows */}
      {photos.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {photos.length > 1 && (
        <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 flex gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/40 hover:bg-white/60 w-4'
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
        className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-card hover:shadow-card-hover transition-all hover:scale-105 flex items-center gap-3 z-10"
      >
        <GoogleIcon className="w-6 h-6" />
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-bold text-foreground">{googleBusinessInfo.rating}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(googleBusinessInfo.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
          <span className="text-[10px] text-muted-foreground">{googleBusinessInfo.totalReviews}+ reviews</span>
        </div>
      </a>
    </div>
  )
}
