"use client"

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Clock, MapPin, Wallet, CreditCard, Phone, Calendar, HelpCircle, Building } from 'lucide-react';
import { SectionHeading } from './section-heading';
import { Reveal } from './reveal';

const openingHours = [
  { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Tuesday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Thursday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Friday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
  { day: 'Sunday', hours: '10:00 AM - 3:00 PM' },
];

const appointmentTypes = [
  {
    type: 'Standard Appointment',
    duration: '15 minutes',
    description: 'Perfect for 1-2 simple health concerns or routine check-ups',
    fee: '$80',
    rebate: '$43.90',
    outOfPocket: '$36.10'
  },
  {
    type: 'Long Appointment',
    duration: '30 minutes',
    description: 'Ideal for multiple concerns, new patients, procedures, mental health consultations',
    fee: '$148',
    rebate: '$84.90',
    outOfPocket: '$63.10'
  },
  {
    type: 'Extended Appointment',
    duration: '45+ minutes',
    description: 'For complex cases, comprehensive health assessments, or detailed procedures',
    fee: '$208',
    rebate: '$125.10',
    outOfPocket: '$82.90'
  }
];

const faqs = [
  {
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring your Medicare card, photo ID, concession cards (if applicable), and a current medication list.'
  },
  {
    question: 'Do you offer bulk billing?',
    answer: 'Yes! We bulk bill children under 16, DVA cardholders, healthcare cardholders, and aged/disability pension cardholders.'
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book online through our website or HotDoc app, call us at (08) 6118 2788, or walk in (subject to availability).'
  },
  {
    question: 'What if I need an interpreter?',
    answer: 'We can arrange interpreter services. Please let us know when booking your appointment.'
  },
  {
    question: 'What are your after-hours options?',
    answer: 'For urgent care outside hours, contact WADMS at 13 26 60. For emergencies, call 000.'
  },
  {
    question: 'How do I get my test results?',
    answer: 'Book an appointment with the doctor to discuss your results.'
  }
];

const tabContentClass = "bg-card rounded-2xl p-8 shadow-card border border-border"

export default function PatientInformationSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="patient-info" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="For Patients"
          title="Patient Information"
          subtitle="Everything you need to know for your visit"
          className="mb-12"
        />

        <Reveal>
          <Tabs defaultValue="getting-started" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 bg-muted border border-border">
              <TabsTrigger
                value="getting-started"
                className="data-[state=active]:bg-brand-teal data-[state=active]:text-white data-[state=active]:font-semibold rounded-lg"
              >
                Getting Started
              </TabsTrigger>
              <TabsTrigger
                value="appointments"
                className="data-[state=active]:bg-brand-teal data-[state=active]:text-white data-[state=active]:font-semibold rounded-lg"
              >
                Appointments
              </TabsTrigger>
              <TabsTrigger
                value="fees-billing"
                className="data-[state=active]:bg-brand-teal data-[state=active]:text-white data-[state=active]:font-semibold rounded-lg"
              >
                Fees & Billing
              </TabsTrigger>
              <TabsTrigger
                value="services"
                className="data-[state=active]:bg-brand-teal data-[state=active]:text-white data-[state=active]:font-semibold rounded-lg"
              >
                Clinic Hours
              </TabsTrigger>
              <TabsTrigger
                value="faqs"
                className="data-[state=active]:bg-brand-teal data-[state=active]:text-white data-[state=active]:font-semibold rounded-lg"
              >
                FAQs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started" className={tabContentClass}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Wallet className="w-5 h-5 text-brand-teal" />
                    <h3 className="text-xl font-semibold text-foreground">What to Bring</h3>
                  </div>
                  <div className="space-y-3">
                    {['Medicare card', 'Photo ID', 'Concession cards (if applicable)', 'Current medication list'].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2.5"></div>
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-5 h-5 text-brand-teal" />
                    <h3 className="text-xl font-semibold text-foreground">Arrival Tips</h3>
                  </div>
                  <div className="space-y-3">
                    {['Arrive 10 minutes early', 'Complete registration forms', 'Free parking available', 'Wheelchair accessible'].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2.5"></div>
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="appointments" className={tabContentClass}>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-5 h-5 text-brand-teal" />
                <h3 className="text-xl font-semibold text-foreground">Appointment Types & Booking</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-5 mb-8">
                {appointmentTypes.map((appointment, index) => (
                  <div key={index} className="bg-brand-teal-light/50 rounded-xl p-5 border border-brand-teal/10">
                    <h4 className="font-semibold text-foreground mb-1">{appointment.type}</h4>
                    <p className="text-brand-teal font-medium text-sm mb-2">Duration: {appointment.duration}</p>
                    <p className="text-muted-foreground text-sm mb-4">{appointment.description}</p>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fee:</span>
                        <span className="font-medium text-foreground">{appointment.fee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Medicare rebate:</span>
                        <span className="text-muted-foreground">{appointment.rebate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Out of pocket:</span>
                        <span className="font-medium text-brand-teal">{appointment.outOfPocket}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-muted rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-4">How to Book</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Building className="w-7 h-7 mx-auto mb-2 text-brand-teal" />
                    <h5 className="font-medium text-foreground mb-1 text-sm">Online Booking</h5>
                    <p className="text-xs text-muted-foreground">Book 24/7 through our website or HotDoc app</p>
                  </div>
                  <div className="text-center">
                    <Phone className="w-7 h-7 mx-auto mb-2 text-brand-teal" />
                    <h5 className="font-medium text-foreground mb-1 text-sm">Call Us</h5>
                    <p className="text-xs text-muted-foreground">Speak with reception: (08) 6118 2788</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-7 h-7 mx-auto mb-2 text-brand-teal" />
                    <h5 className="font-medium text-foreground mb-1 text-sm">Walk-ins</h5>
                    <p className="text-xs text-muted-foreground">Subject to availability, longer wait times</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fees-billing" className={tabContentClass}>
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-5 h-5 text-brand-teal" />
                <h3 className="text-xl font-semibold text-foreground">Fees & Billing</h3>
              </div>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-brand-teal-light/50">
                      <th className="border border-border p-3 text-left text-foreground text-sm font-semibold">Consultation Type</th>
                      <th className="border border-border p-3 text-left text-foreground text-sm font-semibold">Fee</th>
                      <th className="border border-border p-3 text-left text-foreground text-sm font-semibold">Medicare Rebate</th>
                      <th className="border border-border p-3 text-left text-foreground text-sm font-semibold">Out of Pocket</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointmentTypes.map((appointment, index) => (
                      <tr key={index} className="hover:bg-muted">
                        <td className="border border-border p-3 text-muted-foreground text-sm">{appointment.type}</td>
                        <td className="border border-border p-3 text-muted-foreground text-sm">{appointment.fee}</td>
                        <td className="border border-border p-3 text-muted-foreground text-sm">{appointment.rebate}</td>
                        <td className="border border-border p-3 text-brand-teal font-medium text-sm">{appointment.outOfPocket}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-muted rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-3">Payment Information</h4>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>Payment required on the day of consultation</p>
                  <p>We accept cash, EFTPOS, and credit cards</p>
                  <p>Medicare rebates processed instantly if registered</p>
                  <p>Workers compensation claims accepted</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="services" className={tabContentClass}>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-brand-teal" />
                <h3 className="text-xl font-semibold text-foreground">Opening Hours</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  {openingHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 px-4 bg-muted rounded-lg">
                      <span className="text-foreground font-medium text-sm">{item.day}</span>
                      <span className="text-muted-foreground text-sm">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-4">Location</h4>
                  <p className="text-muted-foreground mb-1 text-sm">23C, 2158 Albany Highway</p>
                  <p className="text-muted-foreground mb-4 text-sm">Gosnells WA 6110</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Parking: Free on-site parking available</p>
                    <p>Public Transport: Bus routes available</p>
                    <p>Accessibility: Wheelchair accessible entrance</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faqs" className={tabContentClass}>
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-5 h-5 text-brand-teal" />
                <h3 className="text-xl font-semibold text-foreground">Frequently Asked Questions</h3>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-border rounded-xl overflow-hidden">
                    <button
                      className="w-full text-left p-4 bg-muted hover:bg-muted/80 transition-colors duration-200"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <h4 className="font-medium text-foreground text-sm">{faq.question}</h4>
                    </button>
                    {openFaq === index && (
                      <div className="p-4 bg-card border-t border-border">
                        <p className="text-muted-foreground text-sm">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center bg-muted rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-2">Still Have Questions?</h4>
                <p className="text-muted-foreground text-sm mb-3">Our friendly reception team is here to help with any questions you might have.</p>
                <a href="tel:0861182788" className="text-brand-teal font-medium text-sm hover:underline">Call (08) 6118 2788</a>
              </div>
            </TabsContent>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
