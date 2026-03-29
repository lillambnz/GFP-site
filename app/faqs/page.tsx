"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { faqs } from "@/lib/data/faqs"
import { ChevronDown } from "lucide-react"

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState('General')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const currentCategoryData = faqs.find(cat => cat.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-16 pt-48">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl">
              Find answers to common questions about our services, appointments, and billing
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-8 bg-surface-sunken sticky top-[73px] z-40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              {faqs.map((category) => (
                <button
                  key={category.category}
                  onClick={() => {
                    setActiveCategory(category.category)
                    setOpenIndex(null)
                  }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.category
                      ? 'bg-brand-teal text-white shadow-lg'
                      : 'bg-card shadow-card text-foreground hover:bg-card'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-4">
              {currentCategoryData?.questions.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card shadow-card rounded-2xl overflow-hidden border border-border hover:border-border transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface-sunken transition-all duration-200"
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-brand-teal flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-brand-teal text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-8">
              Can't find the answer you're looking for? Our friendly team is here to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:0861182788"
                className="bg-white text-brand-teal hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition inline-block"
              >
                Call (08) 6118 2788
              </a>
              <a
                href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-full transition inline-block"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
