"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { getNewDoctors } from "@/lib/data/team"

const ROTATE = ["-rotate-3 translate-y-2", "-translate-y-2", "rotate-3 translate-y-2"]

/**
 * Responsive "Meet Our New Doctors" hero slide. Rendered as HTML (not a
 * baked-in image) so text and portraits reflow to any hero aspect ratio.
 * The whole slide is wrapped in a Link by HeroGallery (photo.href).
 */
export function NewDoctorsHeroSlide() {
  const doctors = getNewDoctors()

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#0b5f66] via-[#1a8b93] to-emerald-500 text-white">
      {/* decorative blobs */}
      <div className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-white/10" />
      <div className="absolute -bottom-32 -left-24 w-[340px] h-[340px] rounded-full bg-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-400" />

      <div className="relative h-full flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] items-center justify-center gap-4 md:gap-6 lg:gap-8 px-5 sm:px-8 md:px-12 lg:px-16 pt-6 pb-24 sm:pb-20 lg:py-6">
        {/* Copy */}
        <div className="text-center lg:text-left max-w-xl">
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/30 backdrop-blur-sm text-[10px] sm:text-xs md:text-sm font-bold tracking-wider uppercase px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 md:mb-5">
            ✨ Now Accepting New Patients
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.05] mb-2 md:mb-4 drop-shadow-md">
            Meet Our <span className="text-amber-200">New Doctors</span>
          </h2>
          <p className="hidden sm:block text-sm md:text-lg lg:text-xl text-white/90 leading-snug mb-4 md:mb-6 max-w-lg mx-auto lg:mx-0">
            Three experienced GPs have joined Gosnells Family Practice — bulk billing for all eligible Medicare card holders.
          </p>
          <span className="hidden lg:inline-flex items-center gap-2 bg-white text-[#0b5f66] font-extrabold text-base px-7 py-3.5 rounded-full shadow-xl">
            Book online now <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        {/* Portrait cards */}
        <div className="flex justify-center lg:justify-end items-end gap-2.5 sm:gap-4 lg:gap-5 w-full">
          {doctors.map((doctor, i) => (
            <div
              key={doctor.slug}
              className={`bg-white rounded-2xl p-1.5 sm:p-2 md:p-3 shadow-2xl text-slate-900 w-[27vw] max-w-[130px] sm:max-w-[170px] md:max-w-[200px] xl:max-w-[230px] shrink ${ROTATE[i]}`}
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(max-width: 640px) 27vw, (max-width: 1280px) 200px, 230px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <p className="font-extrabold text-[11px] sm:text-xs md:text-sm xl:text-base mt-1.5 md:mt-2 text-center leading-tight">
                {doctor.bookingName === "Dr Sue" ? "Dr Sue" : doctor.name.replace("Dr. ", "Dr ")}
              </p>
              <p className="hidden md:block text-[10px] xl:text-xs text-slate-500 text-center leading-tight mt-0.5">
                {doctor.specialInterests?.slice(0, 2).join(" · ")}
              </p>
            </div>
          ))}
        </div>

        {/* CTA pill for small screens (sits under the cards) */}
        <span className="lg:hidden inline-flex items-center gap-2 bg-white text-[#0b5f66] font-extrabold text-sm sm:text-base px-6 py-3 rounded-full shadow-xl">
          Tap to book online <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  )
}
