import { Card, CardContent } from "@/components/ui/card"
import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DoctorsSection() {
  const doctors = [
    {
      name: "Dr. Ameer Khan",
      title: "General Practitioner",
      qualifications: "MRCGP, MBBS, FRACGP",
      languages: ["English", "Arabic", "Hindi", "Pashto", "Urdu"],
      availability: "Monday-Friday",
      status: "Available",
      rating: 4.9,
      image: "/images/team/Dr-Ameer-Khan.webp",
      bookingName: "Ameer",
      bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/ameer-khan"
    },
    {
      name: "Dr. Fazilah Binti Abu Bakar",
      title: "General Practitioner",
      qualifications: "MBBCh, FRACGP, BAO",
      languages: ["English", "Malay", "Arabic"],
      availability: "Tuesday-Saturday",
      status: "Available",
      rating: 4.9,
      image: "/images/team/Dr-Fazilah-Abu-Bakar.webp",
      bookingName: "Fazilah",
      bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/fazilah-binti-abu-bakar"
    },
    {
      name: "Dr. Choong Leat Loh",
      title: "General Practitioner",
      qualifications: "MBBS, FRACGP, Cert Skin Cancer, MAFM",
      languages: ["English", "Cantonese", "Hakka", "Indonesian", "Malay", "Mandarin", "Hokkien"],
      availability: "Monday-Friday",
      status: "Available",
      rating: 4.9,
      image: "/images/team/Dr-Choong-Leat-Loh.webp",
      bookingName: "Choong",
      bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/choong-leat-loh"
    },
    {
      name: "Dr. Quam Gbajabiamila",
      title: "General Practitioner", 
      qualifications: "MBBS, FRACGP, MMSc",
      languages: ["English", "Afrikaans"],
      availability: "Wednesday-Sunday",
      status: "Available",
      rating: 4.9,
      image: "/images/team/quam-bio.webp",
      bookingName: "Quam",
      bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/quam-gbajabiamila"
    },
    {
      name: "Dr. Intan Ramli",
      title: "General Practitioner",
      qualifications: "FRACGP, MBBS (UWA)",
      languages: ["English", "Malay"],
      availability: "Monday-Friday",
      status: "Available",
      rating: 4.9,
      image: "/images/team/Dr-Intan.webp",
      bookingName: "Intan",
      bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/dr-intan-ramli-3"
    },
  ]

  const duplicatedDoctors = [...doctors, ...doctors];

  return (
    <section id="doctors" className="py-20 bg-gradient-to-br from-[#f7f9fc] to-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#0a2540] mb-4 tracking-tight">Our Doctors</h2>
          <p className="text-xl text-[#425466] max-w-2xl mx-auto leading-relaxed">
            Experienced healthcare professionals dedicated to your wellbeing
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6 doctors-scroll">
          {duplicatedDoctors.map((doctor, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#e3e8ee] hover:border-[#4a4b75]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a2540] mb-1">{doctor.name}</h3>
                <p className="text-[#4a4b75] font-semibold text-sm mb-2">{doctor.title}</p>
                
                <div className="mb-3">
                  <p className="text-xs text-[#425466] font-medium">{doctor.qualifications}</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-start gap-1 mb-1">
                    <Languages size={14} className="text-[#4a4b75] mt-0.5 shrink-0" />
                    <p className="text-xs text-[#425466]">{doctor.languages.join(", ")}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-[#00b1c3] hover:bg-[#009bb0] text-white text-xs transition-all duration-300"
                    asChild
                  >
                    <a href={doctor.bookingUrl} target="_blank" rel="noopener noreferrer">
                      Book with {doctor.bookingName}
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-xs border-[#4a4b75] text-[#4a4b75] hover:bg-[#4a4b75] hover:text-white transition-all duration-300"
                    asChild
                  >
                    <a href={doctor.bookingUrl} target="_blank" rel="noopener noreferrer">
                      View Details
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
