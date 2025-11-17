import {
  Stethoscope,
  Heart,
  User,
  UserCheck,
  Scan,
  Brain,
  Syringe,
  Plane,
  Activity,
  HardHat,
  Clipboard,
  Car
} from 'lucide-react';

const services = [
  { icon: Stethoscope, title: 'General Check-ups', description: 'Comprehensive health assessments and preventative care for all ages' },
  { icon: Heart, title: 'Chronic Disease Management', description: 'Ongoing support for diabetes, heart disease, asthma, and more' },
  { icon: User, title: "Women's Health", description: 'Reproductive health, cervical screening, and wellness care' },
  { icon: UserCheck, title: "Men's Health", description: 'Prostate checks, cardiovascular health, and lifestyle management' },
  { icon: Scan, title: 'Skin Cancer Screening', description: 'Professional mole checks and early detection services' },
  { icon: Brain, title: 'Mental Health', description: 'Confidential mental health assessments and care plans' },
  { icon: Syringe, title: 'Immunisations', description: 'Vaccinations for children, adults, and flu shots' },
  { icon: Plane, title: 'Travel Health', description: 'Travel vaccinations and health advice for international trips' },
  { icon: Activity, title: 'Allied Health', description: 'Physiotherapy, podiatry, and dietitian services available' },
  { icon: HardHat, title: 'Workers Compensation', description: 'Workplace injury assessments and treatment' },
  { icon: Clipboard, title: 'Pre-employment Medicals', description: 'Comprehensive health assessments for employment' },
  { icon: Car, title: 'Driver Medicals', description: 'Medical examinations for driver licensing requirements' },
];

export default function ServicesSection() {
  const duplicatedServices = [...services, ...services];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-pink-100 via-rose-50 to-orange-100 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#0a2540] mb-4 tracking-tight">Our Services</h2>
          <p className="text-xl text-[#425466] max-w-2xl mx-auto leading-relaxed">
            Comprehensive healthcare services for the whole family, delivered by experienced medical professionals
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6 services-scroll">
          {duplicatedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-gradient-to-br from-white via-orange-50 to-amber-100 backdrop-blur-sm p-8 rounded-2xl border border-orange-200/50 hover:border-rose-300/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group hover:from-rose-50 hover:to-pink-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-200/40 via-rose-200/30 to-pink-300/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-rose-400 group-hover:to-pink-500 transition-all duration-300 group-hover:shadow-lg">
                  <Icon className="w-7 h-7 text-[#4a4b75] group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-[#0a2540] mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-[#425466] leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
