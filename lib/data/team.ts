export interface Doctor {
  name: string
  title: string
  qualifications: string
  languages: string[]
  specialInterests?: string[]
  biography: string
  availability: string
  status: string
  rating: number
  image: string
  bookingName: string
  bookingUrl: string
  yearsExperience?: number
}

export interface StaffMember {
  name: string
  role: 'Nurse' | 'Dietitian' | 'Psychologist' | 'Podiatrist'
  qualifications: string
  specialties: string[]
  biography: string
  image: string
  availability: string
}

export const doctors: Doctor[] = [
  {
    name: "Dr. Ameer Khan",
    title: "General Practitioner",
    qualifications: "MRCGP, MBBS, FRACGP",
    languages: ["English", "Arabic", "Hindi", "Pashto", "Urdu"],
    specialInterests: ["Family Medicine", "Chronic Disease Management", "Men's Health"],
    biography: "Dr. Ameer Khan is a highly experienced General Practitioner with Fellowship of the Royal Australian College of General Practitioners (FRACGP) and Membership of the Royal College of General Practitioners UK (MRCGP). With extensive experience in family medicine, Dr. Khan provides comprehensive healthcare for patients of all ages. He has a special interest in chronic disease management, preventive care, and men's health. Dr. Khan is fluent in multiple languages and is committed to providing culturally sensitive, patient-centered care to our diverse community.",
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
    specialInterests: ["Women's Health", "Antenatal Care", "Child Health"],
    biography: "Dr. Fazilah Abu Bakar is a dedicated General Practitioner with Fellowship of the Royal Australian College of General Practitioners. She has a special interest in women's health, providing comprehensive care including antenatal and postnatal care, cervical screening, contraception advice, and menopause management. Dr. Fazilah also has extensive experience in child health and family medicine. She is passionate about providing holistic, compassionate care and takes time to listen to her patients' concerns. Fluent in English, Malay, and Arabic, she serves our culturally diverse community with sensitivity and understanding.",
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
    specialInterests: ["Skin Cancer Medicine", "Minor Procedures", "Chronic Disease Management"],
    biography: "Dr. Choong Leat Loh is an experienced General Practitioner with Fellowship of the Royal Australian College of General Practitioners and a Certificate in Skin Cancer Medicine. He has particular expertise in skin cancer detection and treatment, performing comprehensive skin checks and minor surgical procedures. Dr. Loh is also skilled in chronic disease management and provides thorough care for patients with diabetes, cardiovascular disease, and other long-term conditions. Remarkably multilingual, he speaks seven languages, enabling him to provide culturally appropriate care to patients from diverse backgrounds. Dr. Loh is known for his meticulous approach and dedication to preventive healthcare.",
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
    specialInterests: ["Family Medicine", "Preventive Health", "Sports Medicine"],
    biography: "Dr. Quam Gbajabiamila brings extensive experience in family medicine and holds a Master of Medical Science along with Fellowship of the Royal Australian College of General Practitioners. He is passionate about preventive healthcare and helping patients maintain optimal health through lifestyle modification and early intervention. Dr. Quam has a special interest in sports medicine and musculoskeletal conditions, providing expert care for sports injuries and chronic pain management. He is committed to evidence-based medicine and takes a holistic approach to patient care, considering physical, mental, and social factors in his treatment plans.",
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
    specialInterests: ["Women's Health", "Mental Health", "Youth Health"],
    biography: "Dr. Intan Ramli is a dedicated General Practitioner who completed her medical degree at the University of Western Australia and holds Fellowship of the Royal Australian College of General Practitioners. She has a particular interest in women's health, providing comprehensive care including reproductive health, pregnancy care, and menopause management. Dr. Intan is also passionate about mental health and youth health, providing a safe, supportive environment for discussing sensitive health concerns. She is known for her empathetic approach and takes time to understand each patient's unique circumstances and health goals. Dr. Intan is fluent in English and Malay.",
    availability: "Monday-Friday",
    status: "Available",
    rating: 4.9,
    image: "/images/team/Dr-Intan.webp",
    bookingName: "Intan",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/dr-intan-ramli-3"
  },
]

export const staff: StaffMember[] = [
  {
    name: "Dr. Yen Nee Liew (Dr. Yenny)",
    role: "Podiatrist",
    qualifications: "Doctor of Podiatric Medicine, BSc (Pathology and Laboratory Medicine)",
    specialties: ["Diabetic Foot Care", "Biomechanics", "Custom Orthotics", "Musculoskeletal Conditions"],
    biography: "Dr Yenny is a podiatrist originally from Malaysia and is fluent in English, Mandarin, and Malay. She completed her Doctor of Podiatric Medicine at the University of Western Australia in 2019, after graduating with a Bachelor of Science (Pathology and Laboratory Medicine). Dr Yenny provides comprehensive podiatry care and has a special interest in general and high-risk foot care, biomechanics, and musculoskeletal conditions. She is passionate about active listening and works closely with her patients to achieve the best possible outcomes. Services include diabetic foot assessments, general foot care including ingrown toenails and wart treatment, biomechanical assessments, custom-made orthotics, and foot pain management using dry needling, ultrasound, and shockwave therapy.",
    image: "/images/team/placeholder.webp",
    availability: "By appointment - Call (08) 6118 2788"
  },
  {
    name: "Dr. Allison Ip",
    role: "Dietitian",
    qualifications: "Master of Dietetics, APD",
    specialties: ["Weight Management", "Type 2 Diabetes", "Heart Disease", "PCOS Management"],
    biography: "Allison is an Accredited Practising Dietitian (APD) registered with Dietitians Australia (DA). She holds a Master of Dietetics from Curtin University and has experience working across a range of settings, including medical clinics, aged care facilities, and online consultations. Allison provides evidence-based, personalised nutrition advice to support long-term health and wellbeing. Her areas of interest include weight management, type 2 diabetes, high cholesterol, high blood pressure, underweight and low appetite, polycystic ovary syndrome (PCOS), iron deficiency, and diverticulosis. Services include weight management, diabetes management, heart disease and dyslipidaemia, malnutrition support, IBS and low FODMAP diet, renal nutrition, oncology nutrition, texture-modified diets, iron deficiency management, and healthy eating support for all age groups.",
    image: "/images/team/placeholder.webp",
    availability: "By appointment - Call (08) 6118 2788"
  },
  {
    name: "Bianca MacIntyre",
    role: "Psychologist",
    qualifications: "Provisional Psychologist",
    specialties: ["Mental Health Disorders", "ADHD", "Sleep Difficulties", "LGBTQI+ Support"],
    biography: "Bianca MacIntyre is a Provisional Psychologist employed by ORS who takes a warm, person-centred approach to therapy, ensuring clients across the lifespan feel heard, respected, and empowered. Bianca strongly believes in individual autonomy and values collaborative decision-making in all aspects of care. She has a particular interest in working with individuals experiencing mental health disorders, ADHD, and sleep-related difficulties. She also has a strong commitment to inclusive practice and supporting LGBTQI+ individuals, as well as Aboriginal and Torres Strait Islander people. Her therapeutic approach is evidence-based and flexible, drawing on a range of modalities including Cognitive Behaviour Therapy (CBT), Mindfulness-Based CBT, Acceptance and Commitment Therapy (ACT), Dialectical Behaviour Therapy (DBT), and Narrative Therapy. Gosnells Family Practice hosts WAPHA commissioned ORS/MindSpot clinics for eligible patients. Referrals are made by GPs through approved channels direct to MindSpot.",
    image: "/images/team/placeholder.webp",
    availability: "By GP referral to MindSpot"
  },
  {
    name: "Aisis Tagudar",
    role: "Nurse",
    qualifications: "Bachelor of Nursing, RN",
    specialties: ["Chronic Disease Management", "Health Assessments", "Patient Education", "Preventative Care"],
    biography: "Aisis holds a Bachelor of Nursing, and she is a compassionate and experienced Registered Nurse with a strong commitment to providing high-quality, patient-centred care. She works closely with general practitioners and allied health professionals to support patients in managing acute and chronic health conditions across the lifespan. She has vast experience working in general practice and primary healthcare settings, providing clinical support, health education, and preventative care. Her role includes assisting with chronic disease management, health assessments, and patient education to promote long-term wellbeing. She believes in delivering care that is respectful, culturally sensitive, and tailored to each patient's individual needs. She aims to create a supportive and welcoming environment where patients feel comfortable, informed, and involved in their healthcare decisions.",
    image: "/images/team/nurse.jpg",
    availability: "Monday-Friday"
  },
  {
    name: "Jennifer Watson",
    role: "Nurse",
    qualifications: "Bachelor of Nursing, RN",
    specialties: ["Immunisation", "Wound Care", "Care Planning", "Health Assessment"],
    biography: "Jen is a Registered Nurse (RN) with over 10 years of experience across hospital wards, GP nursing, and agency settings. She holds a Bachelor of Nursing from the University of Notre Dame and has a strong passion for immunisation, wound care, care planning, and thorough health assessment. Jen is deeply committed to delivering gentle, stress-free immunisations, creating a calm and reassuring environment where both mum and bub feel comfortable and supported. Her nursing practice is guided by compassion, safety, and patient-centred care.",
    image: "/images/team/nurse.jpg",
    availability: "Monday-Friday"
  },
]

export function getAllTeamMembers() {
  return {
    doctors,
    staff
  }
}

export function getDoctorByName(name: string): Doctor | undefined {
  return doctors.find(doctor => doctor.name === name)
}
