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
  Car,
  Video,
  Microscope,
  Scissors,
  Wind,
  Apple,
  Baby
} from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export interface Service {
  slug: string
  category: string
  icon: LucideIcon
  title: string
  description: string
  details: string
  practitioners: string[]
  availability: string
  bookingInfo: string
  image?: string
  subServices?: string[]
}

export const services: Service[] = [
  // General Practice
  {
    slug: 'general-checkups',
    category: 'General Practice',
    icon: Stethoscope,
    title: 'General Check-ups',
    description: 'Comprehensive health assessments and preventative care for all ages',
    details: 'Our general check-ups provide thorough health assessments including vital signs monitoring, physical examinations, and preventive health screening. We tailor each consultation to your individual needs, reviewing your medical history, current medications, and lifestyle factors. Regular check-ups help detect health issues early and maintain optimal wellbeing for you and your family.',
    practitioners: ['All Doctors'],
    availability: 'Monday-Sunday',
    bookingInfo: 'Book online or call (08) 6118 2788',
    image: '/images/services/generalcheckup.jpg'
  },
  {
    slug: 'chronic-disease-management',
    category: 'General Practice',
    icon: Heart,
    title: 'Chronic Disease Management',
    description: 'Ongoing support for diabetes, heart disease, asthma, and more',
    details: 'We provide comprehensive chronic disease management for conditions including diabetes, cardiovascular disease, COPD, and asthma. Our doctors work with you to develop personalized care plans, coordinate with specialists, monitor your condition regularly, and adjust treatments as needed. We also offer Medicare-funded chronic disease management plans to support your ongoing care.',
    practitioners: ['All Doctors'],
    availability: 'Monday-Sunday',
    bookingInfo: 'Book a longer consultation for comprehensive review',
    subServices: ['Diabetes Management', 'Heart Disease', 'Asthma Care', 'COPD Management', 'Arthritis Care'],
    image: '/images/services/Chronicdisease.webp'
  },
  {
    slug: 'diabetes-management',
    category: 'Chronic Care',
    icon: Activity,
    title: 'Diabetes Management',
    description: 'Specialized care for type 1 and type 2 diabetes',
    details: 'Our diabetes management program includes regular monitoring of blood glucose levels, HbA1c testing, medication review, dietary counseling, and prevention of complications. We work closely with our dietitians to provide comprehensive support for managing your diabetes effectively.',
    practitioners: ['All Doctors', 'Dietitians'],
    availability: 'Monday-Friday',
    bookingInfo: 'Book with your preferred doctor',
    image: '/images/services/Diabetes.jpg'
  },

  // Women's Health
  {
    slug: 'womens-health',
    category: "Women's Health",
    icon: User,
    title: "Women's Health",
    description: 'Comprehensive reproductive and wellness care for women',
    details: 'Our women\'s health services cover all aspects of female health including cervical screening, contraception counseling, pregnancy care, menstrual disorders, menopause management, and general gynecological concerns. We provide a comfortable, confidential environment with female doctors available upon request.',
    practitioners: ['Dr. Fazilah Binti Abu Bakar', 'Dr. Intan Ramli'],
    availability: 'Monday-Saturday',
    bookingInfo: 'Female doctors available - specify preference when booking',
    subServices: ['Cervical Screening', 'Contraception', 'Pregnancy Care', 'Menopause Management', 'PCOS Management'],
    image: '/images/services/womens-health.webp'
  },
  {
    slug: 'pregnancy-care',
    category: "Women's Health",
    icon: Baby,
    title: 'Antenatal & Postnatal Care',
    description: 'Comprehensive care throughout your pregnancy journey',
    details: 'We provide complete antenatal care including pregnancy confirmation, regular check-ups, antenatal screening, and health monitoring throughout your pregnancy. Our postnatal care includes newborn checks, breastfeeding support, maternal health assessment, and postpartum emotional wellbeing support.',
    practitioners: ['Dr. Fazilah Binti Abu Bakar', 'Dr. Intan Ramli'],
    availability: 'Monday-Saturday',
    bookingInfo: 'Book regular antenatal appointments with your preferred doctor',
    image: '/images/services/antenatal.webp'
  },

  // Men's Health
  {
    slug: 'mens-health',
    category: "Men's Health",
    icon: UserCheck,
    title: "Men's Health",
    description: 'Specialized health services for men of all ages',
    details: 'Our men\'s health services address the unique health needs of men including prostate health assessments, cardiovascular screening, testosterone management, sexual health, and preventive care. We provide confidential consultations in a comfortable environment.',
    practitioners: ['All Doctors'],
    availability: 'Monday-Sunday',
    bookingInfo: 'Book a consultation with your preferred doctor',
    subServices: ['Prostate Checks', 'Cardiovascular Screening', 'Testosterone Management', 'Sexual Health'],
    image: '/images/services/menshealth.jpg'
  },

  // Mental Health
  {
    slug: 'mental-health',
    category: 'Mental Health',
    icon: Brain,
    title: 'Mental Health Support',
    description: 'Confidential mental health assessments and care plans',
    details: 'We provide comprehensive mental health support including assessment and management of depression, anxiety, stress, and other mental health conditions. Our doctors can develop Mental Health Care Plans for access to Medicare-rebated psychology services. We offer a supportive, non-judgmental environment for discussing your mental wellbeing.',
    practitioners: ['All Doctors'],
    availability: 'Monday-Sunday',
    bookingInfo: 'Book a longer consultation for mental health assessment',
    image: '/images/services/mental-health.jpg'
  },
  {
    slug: 'psychology-services',
    category: 'Mental Health',
    icon: Brain,
    title: 'Psychology Services',
    description: 'Professional psychological support and therapy',
    details: 'Our psychology services provide evidence-based therapeutic interventions for a range of mental health concerns including anxiety, depression, trauma, relationship issues, and stress management. We offer individual therapy, cognitive behavioral therapy (CBT), and other therapeutic approaches tailored to your needs.',
    practitioners: ['Available by referral - psychologist appointments coming soon'],
    availability: 'By appointment',
    bookingInfo: 'Please speak to your doctor about a psychology referral',
    image: '/images/services/psychology-services.png'
  },

  // Specialist Services
  {
    slug: 'dietitian-services',
    category: 'Allied Health',
    icon: Apple,
    title: 'Dietitian Services',
    description: 'Professional nutritional counseling and meal planning',
    details: 'Our accredited dietitians provide personalized nutrition advice for weight management, diabetes, cardiovascular health, food allergies, digestive disorders, and general wellness. We create tailored meal plans and provide ongoing support to help you achieve your health goals through better nutrition.',
    practitioners: ['Dietitian positions - coming soon'],
    availability: 'By appointment',
    bookingInfo: 'Call (08) 6118 2788 to schedule a dietitian consultation',
    image: '/images/services/dietician-services.png'
  },
  {
    slug: 'telehealth',
    category: 'General Practice',
    icon: Video,
    title: 'Telehealth Consultations',
    description: 'Remote video consultations with your doctor',
    details: 'Telehealth allows you to consult with our doctors from the comfort of your home via secure video call. Suitable for follow-up appointments, prescription renewals, test result discussions, and non-emergency medical concerns. Bulk billing available for eligible patients.',
    practitioners: ['All Doctors'],
    availability: 'Monday-Friday, 8:00 AM - 5:00 PM',
    bookingInfo: 'Book a telehealth appointment online or call us',
    image: '/images/services/Telehealth.jpg'
  },
  {
    slug: 'pathology-services',
    category: 'Allied Health',
    icon: Microscope,
    title: 'Pathology Collection',
    description: 'Convenient on-site pathology collection services',
    details: 'We offer on-site pathology collection services for blood tests, urine tests, and other specimens. Our trained staff ensure comfortable and efficient sample collection. Results are sent directly to your doctor who will discuss them with you at your follow-up appointment.',
    practitioners: ['Nursing Staff'],
    availability: 'Monday-Friday, 8:30 AM - 4:30 PM',
    bookingInfo: 'Bring your pathology request form - no appointment needed for most tests',
    image: '/images/services/onsitepathology.jpg'
  },

  // Preventive Care
  {
    slug: 'skin-cancer-screening',
    category: 'Preventive Care',
    icon: Scan,
    title: 'Skin Cancer Screening',
    description: 'Professional skin checks and early detection',
    details: 'Australia has one of the highest rates of skin cancer in the world. Our comprehensive skin cancer screening includes full body mole mapping, dermoscopy examination, and assessment of suspicious lesions. Dr. Choong Leat Loh holds a Certificate in Skin Cancer Medicine and provides expert skin cancer detection and treatment.',
    practitioners: ['Dr. Choong Leat Loh', 'All Doctors'],
    availability: 'Monday-Friday',
    bookingInfo: 'Book a skin check appointment - Medicare rebates available',
    image: '/images/services/skin-cancer.jpg'
  },
  {
    slug: 'immunisations',
    category: 'Preventive Care',
    icon: Syringe,
    title: 'Immunisations & Vaccinations',
    description: 'Childhood and adult vaccinations including flu shots',
    details: 'We provide a comprehensive immunization service for children and adults including routine childhood vaccinations, flu shots, COVID-19 vaccines, and catch-up immunizations. Our practice is registered with the Australian Immunisation Register and follows the National Immunisation Program Schedule.',
    practitioners: ['All Doctors', 'Nursing Staff'],
    availability: 'Monday-Sunday',
    bookingInfo: 'Book an immunization appointment - bring your immunization history',
    image: '/images/services/Vaccination.jpg'
  },
  {
    slug: 'travel-health',
    category: 'Preventive Care',
    icon: Plane,
    title: 'Travel Health & Vaccinations',
    description: 'Pre-travel health advice and required vaccinations',
    details: 'Planning international travel? We provide comprehensive travel health consultations including destination-specific advice, required and recommended vaccinations, malaria prevention, and travel health tips. Book your appointment at least 6-8 weeks before departure to ensure adequate time for vaccination schedules.',
    practitioners: ['All Doctors'],
    availability: 'Monday-Friday',
    bookingInfo: 'Book a travel health consultation',
    image: '/images/services/Vaccination.jpg'
  },

  // Procedures
  {
    slug: 'minor-procedures',
    category: 'Procedures',
    icon: Scissors,
    title: 'Minor Procedures',
    description: 'In-office minor surgical procedures',
    details: 'We perform a range of minor procedures including skin lesion removal, cyst excision, wound care and suturing, ingrown toenail treatment, and minor surgical interventions. All procedures are performed in our well-equipped procedure room with appropriate anesthesia and follow-up care.',
    practitioners: ['Dr. Choong Leat Loh', 'Dr. Ameer Khan'],
    availability: 'By appointment',
    bookingInfo: 'Discuss with your doctor if a procedure is needed',
    subServices: ['Skin Lesion Removal', 'Wound Care & Suturing', 'Cyst Excision', 'Ingrown Toenail Treatment'],
    image: '/images/services/MinorProcedures.jpg'
  },

  // Respiratory
  {
    slug: 'respiratory-care',
    category: 'Chronic Care',
    icon: Wind,
    title: 'Asthma & Respiratory Care',
    description: 'Management of asthma, COPD, and respiratory conditions',
    details: 'We provide comprehensive care for respiratory conditions including asthma, COPD, bronchitis, and other lung conditions. Services include spirometry testing, asthma action plans, medication review, inhaler technique training, and ongoing monitoring to keep your breathing healthy.',
    practitioners: ['All Doctors'],
    availability: 'Monday-Sunday',
    bookingInfo: 'Book a respiratory health consultation',
    image: '/images/services/asthma-respiratory.png'
  },

  // Occupational Health
  {
    slug: 'workers-compensation',
    category: 'Occupational Health',
    icon: HardHat,
    title: 'Workers Compensation',
    description: 'Workplace injury assessments and treatment',
    details: 'We provide comprehensive workers compensation services including initial injury assessment, ongoing treatment, medical certificates, and return-to-work planning. We work with WorkCover and employers to ensure you receive appropriate care and support for workplace injuries.',
    practitioners: ['All Doctors'],
    availability: 'Monday-Sunday',
    bookingInfo: 'Same-day appointments available for workplace injuries',
    image: '/images/services/workers.jpeg'
  },
  {
    slug: 'pre-employment-medicals',
    category: 'Occupational Health',
    icon: Clipboard,
    title: 'Pre-Employment Medicals',
    description: 'Comprehensive health assessments for employment',
    details: 'Our pre-employment medical examinations assess your fitness for work and meet employer requirements. We provide thorough health assessments including medical history, physical examination, vision and hearing tests, drug and alcohol screening, and relevant pathology tests as required.',
    practitioners: ['All Doctors'],
    availability: 'Monday-Friday',
    bookingInfo: 'Book a pre-employment medical - bring employer requirements',
    image: '/images/services/occupationalhealth.jpg'
  },
  {
    slug: 'driver-medicals',
    category: 'Occupational Health',
    icon: Car,
    title: 'Driver Medicals',
    description: 'Medical examinations for driver licensing',
    details: 'We conduct medical assessments for all classes of driver licenses including private, commercial, taxi, and heavy vehicle licenses. Our examinations meet Department of Transport requirements and include vision testing, medical history review, and assessment of fitness to drive.',
    practitioners: ['All Doctors'],
    availability: 'Monday-Sunday',
    bookingInfo: 'Book a driver medical assessment - bring your license',
    image: '/images/services/occupationalhealth.jpg'
  },
]

export const serviceCategories = [
  'All Services',
  'General Practice',
  "Women's Health",
  "Men's Health",
  'Mental Health',
  'Allied Health',
  'Preventive Care',
  'Chronic Care',
  'Procedures',
  'Occupational Health',
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

export function getServicesByCategory(category: string): Service[] {
  if (category === 'All Services') return services
  return services.filter(service => service.category === category)
}
