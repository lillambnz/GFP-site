"use client"

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Clock, MapPin, Wallet, CreditCard, Phone, Calendar, HelpCircle, Building } from 'lucide-react';

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
    fee: '$76',
    rebate: '$43.90',
    outOfPocket: '$32.10'
  },
  {
    type: 'Long Appointment',
    duration: '30 minutes', 
    description: 'Ideal for multiple concerns, new patients, procedures, mental health consultations',
    fee: '$142',
    rebate: '$84.90',
    outOfPocket: '$57.10'
  },
  {
    type: 'Extended Appointment',
    duration: '45+ minutes',
    description: 'For complex cases, comprehensive health assessments, or detailed procedures',
    fee: '$203',
    rebate: '$125.10',
    outOfPocket: '$79.90'
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
    answer: 'Test results are available through our patient portal or by calling reception. We will contact you if any urgent follow-up is needed.'
  }
];

export default function PatientInformationSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="patient-info" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#00b1c3]/20 via-teal-300/15 to-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-500/15 via-[#00b1c3]/10 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-teal-100/30 via-cyan-200/20 to-blue-300/15 rounded-full blur-2xl opacity-60"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0a2540] via-[#00b1c3] to-blue-600 bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-lg">Patient Information</h2>
          <p className="text-xl md:text-2xl text-[#425466] font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Everything you need to know for your visit
          </p>
        </div>

        <Tabs defaultValue="getting-started" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 bg-gradient-to-r from-white/90 via-teal-50/80 to-[#00b1c3]/10 border border-[#00b1c3]/30 backdrop-blur-sm shadow-lg">
            <TabsTrigger 
              value="getting-started"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00b1c3]/20 data-[state=active]:to-blue-400/10 data-[state=active]:text-[#00b1c3] data-[state=active]:font-semibold"
            >
              Getting Started
            </TabsTrigger>
            <TabsTrigger 
              value="appointments"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00b1c3]/20 data-[state=active]:to-blue-400/10 data-[state=active]:text-[#00b1c3] data-[state=active]:font-semibold"
            >
              Appointments
            </TabsTrigger>
            <TabsTrigger 
              value="fees-billing"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00b1c3]/20 data-[state=active]:to-blue-400/10 data-[state=active]:text-[#00b1c3] data-[state=active]:font-semibold"
            >
              Fees & Billing
            </TabsTrigger>
            <TabsTrigger 
              value="services"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00b1c3]/20 data-[state=active]:to-blue-400/10 data-[state=active]:text-[#00b1c3] data-[state=active]:font-semibold"
            >
              Services
            </TabsTrigger>
            <TabsTrigger 
              value="faqs"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00b1c3]/20 data-[state=active]:to-blue-400/10 data-[state=active]:text-[#00b1c3] data-[state=active]:font-semibold"
            >
              FAQs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started" className="bg-gradient-to-br from-white/90 via-teal-50/60 to-[#00b1c3]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#00b1c3]/30 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Wallet className="w-6 h-6 text-[#00b1c3]" />
                  <h3 className="text-2xl font-semibold text-[#0a2540]">What to Bring</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00b1c3] rounded-full mt-2"></div>
                    <p className="text-[#425466]">Medicare card</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00b1c3] rounded-full mt-2"></div>
                    <p className="text-[#425466]">Photo ID</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00b1c3] rounded-full mt-2"></div>
                    <p className="text-[#425466]">Concession cards (if applicable)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00b1c3] rounded-full mt-2"></div>
                    <p className="text-[#425466]">Current medication list</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-[#00b1c3]" />
                  <h3 className="text-2xl font-semibold text-[#0a2540]">Arrival Tips</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00b1c3] rounded-full mt-2"></div>
                    <p className="text-[#425466]">Arrive 10 minutes early</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00b1c3] rounded-full mt-2"></div>
                    <p className="text-[#425466]">Complete registration forms</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00b1c3] rounded-full mt-2"></div>
                    <p className="text-[#425466]">Free parking available</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00b1c3] rounded-full mt-2"></div>
                    <p className="text-[#425466]">Wheelchair accessible</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="appointments" className="bg-gradient-to-br from-white/90 via-teal-50/60 to-[#00b1c3]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#00b1c3]/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-[#00b1c3]" />
              <h3 className="text-2xl font-semibold text-[#0a2540]">Appointment Types & Booking</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {appointmentTypes.map((appointment, index) => (
                <div key={index} className="bg-[#00b1c3]/5 rounded-lg p-6 border border-[#00b1c3]/30">
                  <h4 className="text-lg font-semibold text-[#0a2540] mb-2">{appointment.type}</h4>
                  <p className="text-[#00b1c3] font-medium mb-2">Duration: {appointment.duration}</p>
                  <p className="text-[#425466] text-sm mb-4">{appointment.description}</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#425466]">Fee:</span>
                      <span className="font-medium text-[#0a2540]">{appointment.fee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#425466]">Medicare rebate:</span>
                      <span className="text-[#425466]">{appointment.rebate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#425466]">Out of pocket:</span>
                      <span className="font-medium text-[#00b1c3]">{appointment.outOfPocket}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#00b1c3]/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-[#0a2540] mb-4">How to Book</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Building className="w-8 h-8 mx-auto mb-2 text-[#00b1c3]" />
                  <h5 className="font-medium text-[#0a2540] mb-1">Online Booking</h5>
                  <p className="text-sm text-[#425466]">Book 24/7 through our website or HotDoc app</p>
                </div>
                <div className="text-center">
                  <Phone className="w-8 h-8 mx-auto mb-2 text-[#00b1c3]" />
                  <h5 className="font-medium text-[#0a2540] mb-1">Call Us</h5>
                  <p className="text-sm text-[#425466]">Speak with reception: (08) 6118 2788</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-[#00b1c3]" />
                  <h5 className="font-medium text-[#0a2540] mb-1">Walk-ins</h5>
                  <p className="text-sm text-[#425466]">Subject to availability, longer wait times</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fees-billing" className="bg-gradient-to-br from-white/90 via-teal-50/60 to-[#00b1c3]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#00b1c3]/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-6 h-6 text-[#00b1c3]" />
              <h3 className="text-2xl font-semibold text-[#0a2540]">Fees & Billing</h3>
            </div>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-[#00b1c3]/30 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#00b1c3]/10">
                    <th className="border border-[#00b1c3]/30 p-3 text-left text-[#0a2540]">Consultation Type</th>
                    <th className="border border-[#00b1c3]/30 p-3 text-left text-[#0a2540]">Fee</th>
                    <th className="border border-[#00b1c3]/30 p-3 text-left text-[#0a2540]">Medicare Rebate</th>
                    <th className="border border-[#00b1c3]/30 p-3 text-left text-[#0a2540]">Out of Pocket</th>
                  </tr>
                </thead>
                <tbody>
                  {appointmentTypes.map((appointment, index) => (
                    <tr key={index} className="bg-white hover:bg-[#00b1c3]/5">
                      <td className="border border-[#00b1c3]/30 p-3 text-[#425466]">{appointment.type}</td>
                      <td className="border border-[#00b1c3]/30 p-3 text-[#425466]">{appointment.fee}</td>
                      <td className="border border-[#00b1c3]/30 p-3 text-[#425466]">{appointment.rebate}</td>
                      <td className="border border-[#00b1c3]/30 p-3 text-[#00b1c3] font-medium">{appointment.outOfPocket}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#00b1c3]/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-[#0a2540] mb-4">Payment Information</h4>
              <div className="space-y-2 text-[#425466]">
                <p>• Payment required on the day of consultation</p>
                <p>• We accept cash, EFTPOS, and credit cards</p>
                <p>• Medicare rebates processed instantly if registered</p>
                <p>• Workers compensation claims accepted</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="services" className="bg-gradient-to-br from-white/90 via-teal-50/60 to-[#00b1c3]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#00b1c3]/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-[#00b1c3]" />
              <h3 className="text-2xl font-semibold text-[#0a2540]">Opening Hours</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                {openingHours.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 px-4 bg-[#00b1c3]/5 rounded-lg"
                  >
                    <span className="text-[#0a2540] font-medium">{item.day}</span>
                    <span className="text-[#425466]">{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#00b1c3]/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-[#0a2540] mb-4">Location</h4>
                <p className="text-[#425466] mb-2">23C, 2158 Albany Highway</p>
                <p className="text-[#425466] mb-4">Gosnells WA 6110</p>
                <div className="space-y-2 text-sm text-[#425466]">
                  <p>Parking: Free on-site parking available</p>
                  <p>Public Transport: Bus routes available</p>
                  <p>Accessibility: Wheelchair accessible entrance</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faqs" className="bg-gradient-to-br from-white/90 via-teal-50/60 to-[#00b1c3]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#00b1c3]/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-6 h-6 text-[#00b1c3]" />
              <h3 className="text-2xl font-semibold text-[#0a2540]">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-[#00b1c3]/30 rounded-lg overflow-hidden">
                  <button
                    className="w-full text-left p-4 bg-[#00b1c3]/5 hover:bg-[#00b1c3]/10 transition-colors duration-200"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h4 className="text-lg font-medium text-[#0a2540]">{faq.question}</h4>
                  </button>
                  {openFaq === index && (
                    <div className="p-4 bg-white">
                      <p className="text-[#425466]">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center bg-[#00b1c3]/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-[#0a2540] mb-2">Still Have Questions?</h4>
              <p className="text-[#425466] mb-4">Our friendly reception team is here to help with any questions you might have.</p>
              <p className="text-[#00b1c3] font-medium">Call (08) 6118 2788</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}