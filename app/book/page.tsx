import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"
import { Phone } from "lucide-react"
import { getNewDoctors, getFoundingDoctors } from "@/lib/data/team"
import { BookDoctorCard } from "@/components/book-doctor-card"
import { CLINIC_HOTDOC_URL, CLINIC_TEL, CLINIC_PHONE_DISPLAY } from "@/lib/booking"

const BASE_URL = "https://www.gosnellsfamilypractice.com.au"

export const metadata: Metadata = {
  title: "Book an Appointment — Now Accepting New Patients | Gosnells Family Practice",
  description:
    "Book online with Dr Sue, Dr Wan Maisarah or Dr Nilanjana Haque — experienced GPs now accepting new patients at Gosnells Family Practice. Bulk billing available.",
  alternates: { canonical: `${BASE_URL}/book` },
  openGraph: {
    title: "Book an Appointment — Now Accepting New Patients",
    description: "Choose your doctor and book online in minutes at Gosnells Family Practice.",
    url: `${BASE_URL}/book`,
    images: [{ url: `${BASE_URL}/images/hero/new-doctors-banner.jpg`, width: 1500, height: 800 }],
  },
}

export default function BookPage() {
  const newDoctors = getNewDoctors()
  const founders = getFoundingDoctors()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-40 md:pt-44 pb-16">
        <section className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-teal mb-2">Book Online</p>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">Book an Appointment</h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Now accepting new patients — choose your doctor and pick a time that suits you.
            </p>
          </div>

          <ul className="grid gap-4 md:gap-6 md:grid-cols-3">
            {newDoctors.map((doctor) => (
              <BookDoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </ul>
        </section>

        <section className="max-w-6xl mx-auto px-4 mt-10 md:mt-14">
          <div className="bg-secondary/40 border border-border rounded-2xl p-5 md:p-6 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground mb-2">Existing patient of one of our founding doctors?</p>
            <p className="mb-3">
              {founders.map((d, i) => (
                <span key={d.slug}>
                  <Link href={`/team/${d.slug}`} className="text-brand-teal font-medium hover:underline">
                    {d.name.replace("Dr. ", "Dr ")}
                  </Link>
                  {i < founders.length - 2 ? ", " : i === founders.length - 2 ? " and " : ""}
                </span>
              ))}{" "}
              continue to care for their existing patients — book with them directly using the links above, or{" "}
              <a href={CLINIC_HOTDOC_URL} target="_blank" rel="noopener noreferrer" className="text-brand-teal font-medium hover:underline">
                view all doctors on HotDoc
              </a>
              .
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-teal shrink-0" />
              Prefer to call?{" "}
              <a href={CLINIC_TEL} className="text-brand-teal font-medium hover:underline">
                {CLINIC_PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
