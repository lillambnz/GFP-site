"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Reveal } from "./reveal"
import { trackBookingClick, trackCallClick } from "@/lib/meta-events"
import { getNewDoctors } from "@/lib/data/team"

const AUTO_PLAY_INTERVAL = 6000

export function NewDoctorAnnouncement() {
  const newDoctors = getNewDoctors()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying || isHovered || newDoctors.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % newDoctors.length)
    }, AUTO_PLAY_INTERVAL)
    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovered, newDoctors.length])

  if (newDoctors.length === 0) return null

  const doctor = newDoctors[currentIndex]

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-teal via-teal-500 to-emerald-500 text-white shadow-card-hover"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl -ml-24 -mb-24" />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={doctor.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid lg:grid-cols-[auto_1fr_auto] items-center gap-8 p-8 md:p-12 lg:min-h-[340px]"
              >
                <div className="hidden lg:block relative w-36 h-36 rounded-full overflow-hidden border-2 border-white/40 shadow-lg shrink-0">
                  <Image
                    src={doctor.headshot ?? doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="144px"
                    className="object-cover object-[center_25%]"
                  />
                </div>

                <div>
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                    ✨ New to Our Team — Now Accepting Patients
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Welcome {doctor.name}
                  </h2>
                  <p className="text-white/90 text-lg leading-relaxed max-w-2xl mb-5">
                    {doctor.shortIntro ?? doctor.biography}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {doctor.specialInterests?.slice(0, 4).map((interest) => (
                      <span
                        key={interest}
                        className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-3.5 py-1.5 rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 lg:min-w-[220px]">
                  <Button
                    size="lg"
                    className="bg-white text-brand-teal hover:bg-gray-50 font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <Link
                      href={`/team/${doctor.slug}`}
                      onClick={() => trackBookingClick(doctor.slug)}
                    >
                      Book an Appointment
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="tel:+61861182788" onClick={() => trackCallClick()}>
                      <Phone size={18} className="mr-2" />
                      (08) 6118 2788
                    </a>
                  </Button>
                  <Link
                    href={`/team#${doctor.slug}`}
                    className="text-sm text-white/80 hover:text-white text-center inline-flex items-center justify-center gap-1 transition-colors"
                  >
                    Meet {doctor.bookingName} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide dots */}
            {newDoctors.length > 1 && (
              <div className="relative flex justify-center gap-2 pb-5 -mt-2">
                {newDoctors.map((d, index) => (
                  <button
                    key={d.slug}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Show ${d.name}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
