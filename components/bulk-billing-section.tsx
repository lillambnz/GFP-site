import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Reveal, StaggerContainer, StaggerItem } from "./reveal"

const benefits = [
  {
    title: "No out-of-pocket costs",
    desc: "We bill Medicare directly. You pay nothing at the end of your appointment — no gap fee, no upfront payment.",
  },
  {
    title: "All Medicare card holders welcome",
    desc: "Any patient with a valid Medicare card is eligible. Australian citizens, permanent residents, and most visa holders qualify.",
  },
  {
    title: "Children, pensioners & concession holders",
    desc: "Priority bulk billing for children under 16, pensioners, Healthcare Card holders, and DVA card holders.",
  },
  {
    title: "Every day of the week",
    desc: "Bulk billing applies to all appointments — Monday through Sunday. No exceptions, no surprises.",
  },
]

const faqs = [
  {
    q: "What exactly is bulk billing?",
    a: "Your GP accepts the Medicare rebate as the full payment for your visit. There is no gap fee — Medicare covers it entirely.",
  },
  {
    q: "Do I need a referral?",
    a: "No referral needed to see a GP at Gosnells Family Practice. Just book online or walk in.",
  },
  {
    q: "Is the quality of care the same?",
    a: "Absolutely. Our doctors are FRACGP-qualified with years of experience. Billing method never affects the care you receive.",
  },
]

export function BulkBillingSection() {
  return (
    <section className="bg-slate-900 text-white overflow-hidden">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <Reveal>
            <div>
              <div className="inline-block mb-6">
                <Image
                  src="/images/bulk-billing/BBPIP_webtile_200x160_v1.png"
                  alt="Medicare Bulk Billing Practice"
                  width={160}
                  height={128}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                We Are a Fully<br />
                <span className="text-brand-teal">Bulk Billing Practice</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                At Gosnells Family Practice, we believe cost should never be a barrier to seeing a doctor.
                That&apos;s why we bulk bill <strong className="text-white">all eligible Medicare patients</strong> — every appointment, every day.
              </p>
              <Link
                href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg text-sm"
              >
                Book a Bulk Billed Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          {/* Right — benefits */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <StaggerItem key={i}>
                <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-5 border border-white/10 h-full">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal mb-3 flex-shrink-0" />
                  <p className="font-semibold text-white text-sm mb-1">{benefit.title}</p>
                  <p className="text-white/60 text-xs leading-relaxed">{benefit.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* FAQ strip */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0">
                <p className="font-semibold text-white text-sm mb-2">{faq.q}</p>
                <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
