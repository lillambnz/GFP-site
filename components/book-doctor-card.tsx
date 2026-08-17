import Image from "next/image"
import type { Doctor } from "@/lib/data/team"
import { Button } from "@/components/ui/button"
import { BookingLink } from "@/components/tracked-link"

/**
 * Doctor card for the /book chooser. Horizontal on phones (portrait left) so all
 * three doctors fit above the fold; vertical 3:4 portrait from md up.
 */
export function BookDoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <li className="bg-card border border-border rounded-2xl shadow-card overflow-hidden flex md:flex-col hover:shadow-card-hover transition-shadow duration-300">
      <div className="relative w-28 sm:w-36 shrink-0 md:w-full md:aspect-[3/4]">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 33vw"
          className="object-cover object-top"
        />
        {doctor.isNew && (
          <span className="absolute top-2 left-2 md:top-4 md:left-4 bg-gradient-to-r from-brand-teal to-emerald-500 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full shadow-lg">
            ✨ New
          </span>
        )}
      </div>

      <div className="p-4 md:p-6 flex flex-col gap-2 flex-1 min-w-0">
        <span className="self-start text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
          Accepting new patients
        </span>
        <h2 className="text-lg md:text-xl font-bold text-foreground leading-tight">{doctor.name}</h2>
        <p className="text-xs text-muted-foreground">{doctor.qualifications}</p>

        {doctor.specialInterests && (
          <div className="flex flex-wrap gap-1.5">
            {doctor.specialInterests.slice(0, 4).map((interest) => (
              <span key={interest} className="text-[11px] bg-brand-teal-light text-brand-teal px-2 py-0.5 rounded-full">
                {interest}
              </span>
            ))}
          </div>
        )}

        {doctor.shortIntro && (
          <p className="hidden sm:block text-sm text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none">
            {doctor.shortIntro}
          </p>
        )}

        <p className="text-xs text-muted-foreground">Speaks {doctor.languages.join(", ")}</p>

        <Button
          className="mt-auto w-full bg-gradient-to-r from-brand-teal to-emerald-500 hover:from-brand-teal-dark hover:to-emerald-600 text-white rounded-full shadow-md shadow-brand-teal/20"
          asChild
        >
          <BookingLink href={`/team/${doctor.slug}`} doctorSlug={doctor.slug}>
            Book with {doctor.bookingName}
          </BookingLink>
        </Button>
      </div>
    </li>
  )
}
