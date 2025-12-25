'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface Photo {
  src: string
  alt: string
  category?: string
}

interface PhotoGalleryProps {
  photos: Photo[]
  columns?: number
  showLightbox?: boolean
}

export function PhotoGallery({ photos, columns = 4, showLightbox = true }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length)
    }
  }

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length)
    }
  }

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  return (
    <>
      <div className={`grid ${gridCols} gap-4`}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
            onClick={() => showLightbox && setSelectedPhoto(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {photo.category && (
                <div className="absolute bottom-4 left-4 text-white font-medium">
                  {photo.category}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {showLightbox && selectedPhoto !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt}
              width={1920}
              height={1080}
              className="object-contain max-w-full max-h-full"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedPhoto + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  )
}
