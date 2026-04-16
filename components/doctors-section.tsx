"use client"

import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { StaggerContainer, StaggerItem } from "./reveal"
import { SectionHeading } from "./section-heading"

const doctors = [
  {
    name: "Dr. Ameer Khan",
    title: "General Practitioner",
    qualifications: "MRCGP, MBBS, FRACGP",
    languages: ["English", "Arabic", "Hindi", "Pashto", "Urdu"],
    image: "/images/team/Dr-Ameer-Khan.webp",
    bookingName: "Ameer",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/ameer-khan"
  },
  {
    name: "Dr. Fazilah Abu Bakar",
    title: "General Practitioner",
    qualifications: "MBBCh, FRACGP, BAO",
    languages: ["English", "Malay", "Arabic"],
    image: "/images/team/Dr-Fazilah-Abu-Bakar.webp",
    bookingName: "Fazilah",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/fazilah-binti-abu-bakar"
  },
  {
    name: "Dr. Choong Leat Loh",
    title: "General Practitioner",
    qualifications: "MBBS, FRACGP, Cert Skin Cancer, MAFM",
    languages: ["English", "Cantonese", "Hakka", "Indonesian", "Malay", "Mandarin", "Hokkien"],
    image: "/images/team/Dr-Choong-Leat-Loh.webp",
    bookingName: "Choong",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/choong-leat-loh"
  },
  {
    name: "Dr. Quam Gbajabiamila",
    title: "General Practitioner",
    qualifications: "MBBS, FRACGP, MMSc",
    languages: ["English", "Afrikaans"],
    image: "/images/team/quam-bio.webp",
    bookingName: "Quam",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/quam-gbajabiamila"
  },
  {
    name: "Dr. Intan Ramli",
    title: "General Practitioner",
    qualifications: "FRACGP, MBBS (UWA)",
    languages: ["English", "Malay"],
    image: "/images/team/Dr-Intan.webp",
    bookingName: "Intan",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/dr-intan-ramli-3"
  },
  {
    name: "Dr. Siti Shuhaizam Mamat Raduan",
    title: "General Practitioner",
    qualifications: "MBBS (IMU), MAFP, FRACGP",
    languages: ["English", "Malay"],
    image: "/images/team/Dr-Siti-Mamat-Raduan.jpg",
    bookingName: "Dr Sue",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors"
  },
  {
    name: "Dr. Wan Maisarah",
    title: "General Practitioner",
    qualifications: "MBChB, DFSRH, MRCGP",
    languages: ["English", "Malay"],
    image: "/images/team/Dr-Wan-Maisarah.jpg",
    bookingName: "Dr Wan",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors"
  },
  {
    name: "Dr. Adetoyese \"Toye\" Lawal",
    title: "General Practitioner",
    qualifications: "MBBS, FRACGP",
    languages: ["English"],
    image: "/images/team/Dr-adet.png",
    bookingName: "Toye",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors"
  },
]

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="Our Doctors"
          subtitle="Experienced healthcare professionals dedicated to your wellbeing"
          className="mb-14"
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {doctors.map((doctor, index) => (
            <StaggerItem key={index}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
                <div className="aspect-square overflow-hidden relative">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    quality={85}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-white font-bold text-sm leading-tight">{doctor.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-brand-teal font-medium text-xs mb-1">{doctor.title}</p>
                  <p className="text-muted-foreground text-[11px] mb-2">{doctor.qualifications}</p>

                  <div className="flex items-start gap-1 mb-3">
                    <Languages size={12} className="text-muted-foreground mt-0.5 shrink-0" />
                    <p className="text-[11px] text-muted-foreground leading-tight">{doctor.languages.join(", ")}</p>
                  </div>

                  <Button
                    size="sm"
                    className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white text-xs rounded-lg"
                    asChild
                  >
                    <a href={doctor.bookingUrl} target="_blank" rel="noopener noreferrer">
                      Book with {doctor.bookingName}
                    </a>
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
