export interface Doctor {
  name: string
  title: string
  gender: 'Male' | 'Female'
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
  bookingName?: string
  bookingUrl?: string
}

export const doctors: Doctor[] = [
  {
    name: "Dr. Ameer Khan",
    title: "General Practitioner",
    gender: "Male",
    qualifications: "MRCGP, MBBS, FRACGP",
    languages: ["Arabic", "Hindi", "Pashto", "Urdu"],
    specialInterests: ["Chronic Disease Management", "Pain Management", "Mental Health", "Child and Family Health", "Childhood Immunisations"],
    biography: "Dr. Ameer Khan is a highly skilled, all rounded and compassionate GP dedicated to providing exceptional medical care. Dr Khan has a wealth of experience in all areas of primary care including minor illness, minor injuries, workers compensation, and has a specialist interest in chronic disease management. Known for his expertise, professionalism, and excellent bedside manner, Dr Khan has earned the trust and respect of his patients. He believes in a patient-centred approach, taking the time to listen to his patients' concerns, understand their unique needs, and develop personalised treatment plans.",
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
    gender: "Female",
    qualifications: "MBBCh, FRACGP, BAO",
    languages: ["English", "Malay", "Arabic"],
    specialInterests: ["Women's Health Medicine", "Paediatric Health", "Adolescent Health", "Chronic Disease Management"],
    biography: "Dr. Fazilah Abu Bakar is an experienced female General Practitioner and FRACGP Fellow who graduated from Dublin, Ireland in 2000. She promotes overall well-being and disease prevention through a holistic approach that addresses both physical and emotional health. Her areas of interest include women's health medicine, paediatric and adolescent health, and chronic disease management. Fluent in English, Malay, and basic Arabic, Dr. Abu Bakar connects with patients from diverse cultural backgrounds, emphasizing effective communication and culturally sensitive care.",
    availability: "Tuesday-Saturday",
    status: "Available",
    rating: 4.9,
    image: "/images/team/Dr-Fazilah-Abu-Bakar.webp",
    bookingName: "Fazilah",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/fazilah-binti-abu-bakar",
    yearsExperience: 24
  },
  {
    name: "Dr. Choong Leat Loh",
    title: "General Practitioner",
    gender: "Male",
    qualifications: "MBBS, FRACGP, Cert Skin Cancer, MAFM",
    languages: ["Cantonese", "English", "Hakka", "Indonesian", "Malay", "Mandarin", "Hokkien"],
    specialInterests: ["Skin Cancer Medicine", "Skin Diseases", "Minor Procedures", "Chronic Disease Management"],
    biography: "Dr Loh is a highly skilled general practitioner fluent in multiple languages, including various Chinese dialects, Malay and Indonesian language. With more than 20 years of experience in the medical field, Dr Loh is committed to providing exceptional care to patients of all ages. Dr Loh has spent years honing his diagnostic and treatment skills in skin diseases. Dr Loh is proud to offer comprehensive primary care services to patients in Gosnells. From routine check-ups to the management of chronic conditions, Dr Loh is dedicated to helping patients achieve and maintain optimal health.",
    availability: "Saturday onwards",
    status: "Available",
    rating: 4.9,
    image: "/images/team/Dr-Choong-Leat-Loh.webp",
    bookingName: "Choong",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/choong-leat-loh",
    yearsExperience: 20
  },
  {
    name: "Dr. Quam Gbajabiamila",
    title: "General Practitioner",
    gender: "Male",
    qualifications: "MBBS, FRACGP, MMSc",
    languages: ["English", "Afrikaans"],
    specialInterests: ["Family Medicine", "Preventive Health", "Patient-Centred Care"],
    biography: "Dr. Quam is a highly experienced General Practitioner who is committed to providing exceptional healthcare services with a touch of joy and laughter. With years of experience in the medical field, Dr. Quam has developed a deep understanding of the diverse needs and concerns of his patients. Whether you're seeking routine check-ups, medical advice, or treatment for a specific condition, Dr. Quam's expertise will guide you through every step of the way. What truly sets Dr. Quam apart is his warm personality. Dr. Quam believes that building strong patient-doctor relationships is the key to successful healthcare outcomes. He values open communication and strives to create a safe and comfortable space where patients can openly discuss their concerns.",
    availability: "From 21 Jan, 1:20 pm",
    status: "Available",
    rating: 4.9,
    image: "/images/team/quam-bio.webp",
    bookingName: "Quam",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/quam-gbajabiamila"
  },
  {
    name: "Dr. Intan Ramli",
    title: "General Practitioner",
    gender: "Female",
    qualifications: "FRACGP, MBBS (UWA)",
    languages: ["English", "Malay"],
    specialInterests: ["Chronic Disease", "Mental Health", "Paediatric Health", "Women's Health", "Minor Surgical Procedures"],
    biography: "Dr Intan Ramli graduated locally from WA, completed her Bachelor of Medicine/ Bachelor of Surgery (MBBS) at the University of Western Australia in 2012. She gained her General Practitioner Fellowship in 2020. She has worked in many areas of specialty in medicine in Royal Perth Hospital, Fiona Stanley Hospital, Armadale Mental Health and Kalgoorlie Regional Hospital. She has worked across most of WA including multiple regional and rural clinics during her GP training. Dr Ramli has a particular interest in Chronic disease, Mental Health, Paediatric, Women's Health and minor surgery. She can fluently speak both Malay and English. When she is not practising medicine, Dr Ramli enjoys travelling, cooking and spending time with her children.",
    availability: "Available in 8 days",
    status: "Available",
    rating: 4.9,
    image: "/images/team/Dr-Intan.webp",
    bookingName: "Intan",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/dr-intan-ramli-3"
  },
]

export const staff: StaffMember[] = [
  {
    name: "Yen Nee Liew (Yenny)",
    role: "Podiatrist",
    qualifications: "BSc, DPM",
    specialties: ["Diabetic Foot Assessment", "Biomechanical Assessment", "General Foot Care (Ingrown Toenail, Wart Management)", "Foot Pain Management (Dry Needling, Ultrasound, Shockwave Treatment)", "Custom Made Orthotics"],
    biography: "Yenny is originally from Malaysia and is fluent in English, Chinese and Malay. She completed her Doctor of Podiatric Medicine degree at the University of Western Australia in 2019, after finishing her undergraduate Bachelor of Science degree majoring in Pathology and Laboratory Medicine. She has interest in all aspects of podiatry, including general foot care, high risk foot care, biomechanics and management of musculoskeletal conditions. She believes in active listening and strives to help her patients to achieve their treatment goals. Podiatry services include: Diabetic foot assessment, General foot care including ingrown toenail and wart management, Biomechanical assessment, Custom Made Orthotics, and Foot pain management with Dry needling therapy, ultrasound and shockwave treatment.",
    image: "https://asset.imagine.art/processed/815985b8-6878-4b75-ab3a-a28c1aa61a33",
    availability: "Available in 12 days",
    bookingName: "Yenny",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/yen-nee-liew-1"
  },
  {
    name: "Allison Ip",
    role: "Dietitian",
    qualifications: "Master of Dietetics, APD",
    specialties: ["Weight Management", "Type 2 Diabetes", "Heart Disease", "PCOS Management"],
    biography: "Allison is an Accredited Practising Dietitian (APD) registered with Dietitians Australia (DA). She holds a Master of Dietetics from Curtin University and has experience working across a range of settings, including medical clinics, aged care facilities, and online consultations. Allison provides evidence-based, personalised nutrition advice to support long-term health and wellbeing. Her areas of interest include weight management, type 2 diabetes, high cholesterol, high blood pressure, underweight and low appetite, polycystic ovary syndrome (PCOS), iron deficiency, and diverticulosis. Services include weight management, diabetes management, heart disease and dyslipidaemia, malnutrition support, IBS and low FODMAP diet, renal nutrition, oncology nutrition, texture-modified diets, iron deficiency management, and healthy eating support for all age groups.",
    image: "https://ui-avatars.com/api/?name=Allison+Ip&size=400&background=00b1c3&color=fff&bold=true&font-size=0.4",
    availability: "By appointment - Call (08) 6118 2788"
  },
  {
    name: "Bianca MacIntyre",
    role: "Psychologist",
    qualifications: "Provisional Psychologist",
    specialties: ["Mental Health Disorders", "ADHD", "Sleep Difficulties", "LGBTQI+ Support"],
    biography: "Bianca MacIntyre is a Provisional Psychologist employed by ORS who takes a warm, person-centred approach to therapy, ensuring clients across the lifespan feel heard, respected, and empowered. Bianca strongly believes in individual autonomy and values collaborative decision-making in all aspects of care. She has a particular interest in working with individuals experiencing mental health disorders, ADHD, and sleep-related difficulties. She also has a strong commitment to inclusive practice and supporting LGBTQI+ individuals, as well as Aboriginal and Torres Strait Islander people. Her therapeutic approach is evidence-based and flexible, drawing on a range of modalities including Cognitive Behaviour Therapy (CBT), Mindfulness-Based CBT, Acceptance and Commitment Therapy (ACT), Dialectical Behaviour Therapy (DBT), and Narrative Therapy. Gosnells Family Practice hosts WAPHA commissioned ORS/MindSpot clinics for eligible patients. Referrals are made by GPs through approved channels direct to MindSpot.",
    image: "https://ui-avatars.com/api/?name=Bianca+MacIntyre&size=400&background=00b1c3&color=fff&bold=true&font-size=0.4",
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
    image: "https://ui-avatars.com/api/?name=Jennifer+Watson&size=400&background=00b1c3&color=fff&bold=true&font-size=0.4",
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
