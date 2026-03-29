import {
  Stethoscope, Heart, User, UserCheck, Scan, Brain,
  Syringe, Plane, Activity, HardHat, Clipboard, Car
} from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './reveal';
import { SectionHeading } from './section-heading';

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
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Services"
          subtitle="Comprehensive healthcare services for the whole family, delivered by experienced medical professionals"
          className="mb-14"
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={index}>
                <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-border group h-full">
                  <div className="w-11 h-11 bg-brand-teal-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-teal transition-colors duration-300">
                    <Icon className="w-5 h-5 text-brand-teal group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-foreground mb-2 text-base font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
