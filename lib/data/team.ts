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
  slug: string
  hotdocWidgetUrl?: string
  galleryPhotos?: { src: string; alt: string }[]
  acceptingNewPatients?: boolean
  isNew?: boolean
  isDirector?: boolean
  shortIntro?: string
  headshot?: string
}

export interface StaffMember {
  name: string
  role: 'Nurse' | 'Dietitian' | 'Psychologist' | 'Podiatrist' | 'Physiotherapist' | 'Diabetes Educator'
  qualifications: string
  specialties: string[]
  biography: string
  image: string
  availability: string
  bookingName?: string
  bookingUrl?: string
  hotdocWidgetUrl?: string
}

export const doctors: Doctor[] = [
  {
    name: "Dr. Siti Shuhaizam Mamat Raduan",
    title: "General Practitioner",
    gender: "Female",
    qualifications: "MBBS (IMU), MAFP, FRACGP",
    languages: ["English", "Malay"],
    specialInterests: ["Sports Health", "Weight Management", "Women's Health", "Family Planning"],
    biography: "Dr. Sue graduated from the International Medical University (IMU) in 2003 and has been working as a Family Physician since 2011, with broad experience in managing both acute and chronic conditions. She has a special interest in sports health, weight management, women's health, and family planning. Dr. Sue takes a holistic, patient-centred approach, focusing on prevention and overall wellbeing, and works closely with her patients to develop personalised and practical care plans. In addition to her clinical work, she is actively involved in medical education with the Academy of Family Physicians of Malaysia, where she serves as an examiner for the MAFP/ICFRACGP examinations. She is committed to building strong, trusting relationships by listening carefully and communicating clearly. Fluent in English and Malay.",
    shortIntro: "Dr Sue is an experienced Family Physician with a special interest in sports health, weight management, women's health and family planning. She takes a holistic, patient-centred approach and consults in English and Malay.",
    availability: "Available",
    status: "Available",
    rating: 4.9,
    image: "/images/team/Dr-Siti-white.jpg",
    headshot: "/images/team/dr-siti-headshot.jpg",
    bookingName: "Dr Sue",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/dr-siti-sue-shuhaizam",
    yearsExperience: 14,
    slug: "dr-siti-mamat-raduan",
    hotdocWidgetUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/dr-siti-sue-shuhaizam?wp=w_iframe",
    acceptingNewPatients: true,
    isNew: true
  },
  {
    name: "Dr. Wan Maisarah",
    title: "General Practitioner",
    gender: "Female",
    qualifications: "MBChB, DFSRH, MRCGP",
    languages: ["English", "Malay"],
    specialInterests: ["Menopause & Women's Health", "Contraception & Sexual Health", "Implanon Insertion & Removal (Bulk-Billed)", "Cervical Screening", "Mental Health"],
    biography: "With over 14 years of clinical experience in the UK, including seven years as a dedicated General Practitioner, Dr Wan Maisarah is excited to bring her experience and patient-centred approach to Gosnells Family Practice. After graduating from the University of Leicester, UK in 2012, she completed her specialist GP training in North Oxfordshire in 2019 and obtained a Diploma of the Faculty of Sexual and Reproductive Healthcare (DFSRH). Dr Wan provides evidence-based, holistic care tailored to each individual's needs. She believes that listening carefully, building trust and working collaboratively with her patients are the foundations of excellent healthcare. She welcomes patients of all ages and is pleased to offer consultations in both English and Malay. Her special interests include menopause and women's health, contraception and sexual health, Implanon insertion and removal (fully bulk-billed), cervical screening, and mental health.",
    shortIntro: "A UK-trained GP with over 14 years' clinical experience, Dr Wan has special interests in menopause, contraception and sexual health, bulk-billed Implanon, and cervical screening. She consults in English and Malay.",
    availability: "Available",
    status: "Available",
    rating: 4.9,
    image: "/images/team/drwan.jpeg",
    bookingName: "Dr Wan",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/dr-wan-maisarah",
    yearsExperience: 14,
    slug: "dr-wan-maisarah",
    hotdocWidgetUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/dr-wan-maisarah?wp=w_iframe",
    acceptingNewPatients: true,
    isNew: true
  },
  {
    name: "Dr. Nilanjana Haque",
    title: "General Practitioner",
    gender: "Female",
    qualifications: "UK-trained GP — 20+ years' clinical experience",
    languages: ["English"],
    specialInterests: ["Women's Health", "Sexual Health", "Children's Health", "Patient-Centred Care"],
    biography: "Dr. Nilanjana Haque is an experienced General Practitioner with over 20 years of clinical experience in the UK. She has a special interest in Women's Health and Sexual Health and is committed to compassionate, patient-centred care for all ages. She enjoys caring for children and takes time to listen carefully, ensuring patients feel heard and supported.",
    shortIntro: "An experienced GP with over 20 years of clinical experience in the UK, Dr Nilanjana has special interests in women's health and sexual health, and enjoys caring for children and families.",
    availability: "Available",
    status: "Available",
    rating: 4.9,
    image: "/images/team/dr-nil-white.jpg",
    headshot: "/images/team/dr-nil-headshot.jpg",
    bookingName: "Dr Nilanjana",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/dr-nilanjana-haque",
    yearsExperience: 20,
    slug: "dr-nilanjana-haque",
    hotdocWidgetUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/dr-nilanjana-haque?wp=w_iframe",
    acceptingNewPatients: true,
    isNew: true
  },
  {
    name: "Dr. Ameer Khan",
    title: "General Practitioner",
    gender: "Male",
    qualifications: "MRCGP, MBBS, FRACGP",
    languages: ["Arabic", "Hindi", "Pashto", "Urdu"],
    specialInterests: ["Chronic Disease Management", "Pain Management", "Mental Health", "Child and Family Health", "Childhood Immunisations", "Alternative & Integrative Medicine", "Functional Medicine"],
    biography: "Dr. Ameer Khan is a highly skilled, all-rounded and compassionate GP dedicated to providing exceptional medical care. Dr Khan has a wealth of experience in all areas of primary care including minor illness, minor injuries, workers compensation, and has a specialist interest in chronic disease management and integrative medicine approaches. Dr Khan combines evidence-based conventional medicine with alternative and integrative health approaches to provide holistic, patient-centered care. Known for his expertise, professionalism, and excellent bedside manner, Dr Khan has earned the trust and respect of his patients. He believes in addressing the whole person - physical, emotional, and lifestyle factors - taking the time to listen to his patients' concerns, understand their unique needs, and develop personalised treatment plans.",
    availability: "Monday-Friday",
    status: "Available",
    rating: 4.9,
    image: "/images/team/Dr-Ameer-Khan.webp",
    bookingName: "Ameer",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/ameer-khan",
    slug: "dr-ameer-khan",
    isDirector: true,
    acceptingNewPatients: false,
    hotdocWidgetUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/ameer-khan?wp=w_iframe",
    galleryPhotos: [
      { src: "/images/photoshoot/doctors/dr-khan/GosnellsFamilyPractice-35.jpg", alt: "Dr. Ameer Khan" },
      { src: "/images/photoshoot/doctors/dr-khan/GosnellsFamilyPractice-38.jpg", alt: "Dr. Ameer Khan" },
      { src: "/images/photoshoot/doctors/dr-khan/GosnellsFamilyPractice-45.jpg", alt: "Dr. Ameer Khan" },
      { src: "/images/photoshoot/doctors/dr-khan/GosnellsFamilyPractice-46.jpg", alt: "Dr. Ameer Khan" },
    ]
  },
  {
    name: "Dr. Fazilah Binti Abu Bakar",
    title: "General Practitioner",
    gender: "Female",
    qualifications: "MBBch BAO, FRACGP",
    languages: ["English", "Malay", "Arabic"],
    specialInterests: ["Women's Health Medicine", "Paediatric Health", "Adolescent Health", "Chronic Disease Management"],
    biography: "Dr. Fazilah Abu Bakar is an experienced female General Practitioner and FRACGP Fellow who graduated from Dublin, Ireland in 2000. She promotes overall well-being and disease prevention through a holistic approach that addresses both physical and emotional health. Her areas of interest include women's health medicine, paediatric and adolescent health, and chronic disease management. Fluent in English, Malay, and basic Arabic, Dr. Abu Bakar connects with patients from diverse cultural backgrounds, emphasizing effective communication and culturally sensitive care.",
    availability: "Tuesday-Saturday",
    status: "Available",
    rating: 4.9,
    image: "/images/team/Dr-Fazilah-Abu-Bakar.webp",
    bookingName: "Fazilah",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/fazilah-binti-abu-bakar",
    yearsExperience: 24,
    slug: "dr-fazilah-abu-bakar",
    isDirector: true,
    acceptingNewPatients: false,
    hotdocWidgetUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/fazilah-binti-abu-bakar?wp=w_iframe",
    galleryPhotos: [
      { src: "/images/photoshoot/doctors/dr-fazilah/GosnellsFamilyPractice-64.jpg", alt: "Dr. Fazilah Abu Bakar" },
      { src: "/images/photoshoot/doctors/dr-fazilah/GosnellsFamilyPractice-58.jpg", alt: "Dr. Fazilah Abu Bakar" },
      { src: "/images/photoshoot/doctors/dr-fazilah/GosnellsFamilyPractice-66.jpg", alt: "Dr. Fazilah Abu Bakar" },
      { src: "/images/photoshoot/doctors/dr-fazilah/GosnellsFamilyPractice-71.jpg", alt: "Dr. Fazilah Abu Bakar" },
    ]
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
    yearsExperience: 20,
    slug: "dr-choong-leat-loh",
    isDirector: true,
    acceptingNewPatients: false,
    hotdocWidgetUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/choong-leat-loh?wp=w_iframe",
    galleryPhotos: [
      { src: "/images/photoshoot/doctors/dr-loh/GosnellsFamilyPractice-2.jpg", alt: "Dr. Choong Leat Loh" },
      { src: "/images/photoshoot/doctors/dr-loh/GosnellsFamilyPractice-14.jpg", alt: "Dr. Choong Leat Loh" },
      { src: "/images/photoshoot/doctors/dr-loh/GosnellsFamilyPractice-16.jpg", alt: "Dr. Choong Leat Loh" },
      { src: "/images/photoshoot/doctors/dr-loh/GosnellsFamilyPractice-21.jpg", alt: "Dr. Choong Leat Loh" },
    ]
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
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/quam-gbajabiamila",
    slug: "dr-quam-gbajabiamila",
    isDirector: true,
    acceptingNewPatients: false,
    hotdocWidgetUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/quam-gbajabiamila?wp=w_iframe",
    galleryPhotos: [
      { src: "/images/photoshoot/doctors/dr-quam/GosnellsFamilyPractice-115.jpg", alt: "Dr. Quam Gbajabiamila" },
      { src: "/images/photoshoot/doctors/dr-quam/GosnellsFamilyPractice-121.jpg", alt: "Dr. Quam Gbajabiamila" },
      { src: "/images/photoshoot/doctors/dr-quam/GosnellsFamilyPractice-123.jpg", alt: "Dr. Quam Gbajabiamila" },
      { src: "/images/photoshoot/doctors/dr-quam/GosnellsFamilyPractice-126.jpg", alt: "Dr. Quam Gbajabiamila" },
    ]
  },
]

export const staff: StaffMember[] = [
  {
    name: "Yen Nee Liew (Yenny)",
    role: "Podiatrist",
    qualifications: "BSc, DPM",
    specialties: ["Diabetic Foot Assessment", "Biomechanical Assessment", "General Foot Care (Ingrown Toenail, Wart Management)", "Foot Pain Management (Dry Needling, Ultrasound, Shockwave Treatment)", "Custom Made Orthotics"],
    biography: "Dr Yen Nee Liew - Podiatrist (BSc, DPM)\n\nShe completed her Doctor of Podiatric Medicine (DPM) degree at the University of Western Australia in 2019, after finishing her undergraduate Bachelor of Science degree majoring in Pathology and Laboratory Medicine.\n\nShe has had clinical placements in various private clinics as well as in a multidisciplinary team setting, She has a keen interest in all aspects of podiatry, including general foot care, high risk foot care, biomechanics and management of musculoskeletal conditions. She believes in active listening and strives to help her patients to achieve their treatment goals.\n\nPodiatry services including:\n\n- Diabetic foot assessment\n\n- General foot care including ingrown toenail, wart and corn management\n\n- Biomechanical assessment\n\n- Foot pain management with dry needling therapy, ultrasound therapy etc\n\n- Custom made orthotics",
    image: "/images/team/yenny.jpeg",
    availability: "Available in 12 days",
    bookingName: "Yenny",
    bookingUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/yen-nee-liew-1",
    hotdocWidgetUrl: "https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors/yen-nee-liew-1?wp=w_iframe"
  },
  {
    name: "Allison Ip",
    role: "Dietitian",
    qualifications: "Master of Dietetics, APD",
    specialties: ["Weight Management", "Type 2 Diabetes", "Heart Disease", "PCOS Management"],
    biography: "Allison is an Accredited Practising Dietitian (APD) registered with Dietitians Australia (DA). She holds a Master of Dietetics from Curtin University and has experience working across a range of settings, including medical clinics, aged care facilities, and online consultations. Allison provides evidence-based, personalised nutrition advice to support long-term health and wellbeing. Her areas of interest include weight management, type 2 diabetes, high cholesterol, high blood pressure, underweight and low appetite, polycystic ovary syndrome (PCOS), iron deficiency, and diverticulosis. Services include weight management, diabetes management, heart disease and dyslipidaemia, malnutrition support, IBS and low FODMAP diet, renal nutrition, oncology nutrition, texture-modified diets, iron deficiency management, and healthy eating support for all age groups.",
    image: "/images/team/Allison.jpg",
    availability: "By appointment - Call (08) 6118 2788"
  },
  {
    name: "Vruta Patel",
    role: "Physiotherapist",
    qualifications: "BPT (M.S. University, India)",
    specialties: ["Musculoskeletal Physiotherapy", "Neurological Rehabilitation", "Women's Health Physiotherapy"],
    biography: "Vruta is a dedicated physiotherapist with experience across clinical, community, and home-based settings. She specialises in musculoskeletal, neurological, aged care, and women's health physiotherapy, offering evidence-based, patient-centred care. Her skill set includes manual therapy, clinical Pilates, dry needling, cupping, hydrotherapy, and exercise prescription. Fluent in English, Gujarati, and Hindi, Vruta combines clinical expertise with empathy and clear communication to help patients regain strength, mobility, and confidence.",
    image: "/images/team/physio.jpg",
    availability: "By appointment - Call (08) 6118 2788"
  },
  {
    name: "Tahnee Harvey",
    role: "Diabetes Educator",
    qualifications: "Credentialled Diabetes Educator (CDE)",
    specialties: ["Type 1 & Type 2 Diabetes", "Gestational Diabetes", "Insulin Initiation & Adjustment", "Blood Glucose Monitoring", "Lifestyle Education", "Diabetes Complications Prevention"],
    biography: "Tahnee Harvey is a Credentialled Diabetes Educator with a strong passion for empowering patients to understand and manage their diabetes with confidence and clarity. She takes a patient-centred approach, collaborating with individuals, families, and GPs to create individualised management strategies suited to real-world circumstances. Whether you're newly diagnosed or have been managing diabetes for years, Tahnee's goal is to help you feel informed, supported, and in control of your health — rather than overwhelmed by your diagnosis. Tahnee provides education and support across all aspects of diabetes care, including type 1 and type 2 diabetes management, gestational diabetes, insulin initiation and adjustment, blood glucose monitoring and interpretation, lifestyle education covering nutrition and physical activity, medication education, and prevention and management of diabetes-related complications.",
    image: "/images/team/Tahnee-Harvey-edited-white-background-e1771127492672.jpg",
    availability: "By appointment - Call (08) 6118 2788"
  },
  {
    name: "Bianca MacIntyre",
    role: "Psychologist",
    qualifications: "Provisional Psychologist",
    specialties: ["Mental Health Disorders", "ADHD", "Sleep Difficulties", "LGBTQI+ Support"],
    biography: "Bianca MacIntyre is a Provisional Psychologist employed by ORS who takes a warm, person-centred approach to therapy, ensuring clients across the lifespan feel heard, respected, and empowered. Bianca strongly believes in individual autonomy and values collaborative decision-making in all aspects of care. She has a particular interest in working with individuals experiencing mental health disorders, ADHD, and sleep-related difficulties. She also has a strong commitment to inclusive practice and supporting LGBTQI+ individuals, as well as Aboriginal and Torres Strait Islander people. Her therapeutic approach is evidence-based and flexible, drawing on a range of modalities including Cognitive Behaviour Therapy (CBT), Mindfulness-Based CBT, Acceptance and Commitment Therapy (ACT), Dialectical Behaviour Therapy (DBT), and Narrative Therapy. Gosnells Family Practice hosts WAPHA commissioned ORS/MindSpot clinics for eligible patients. Referrals are made by GPs through approved channels direct to MindSpot.",
    image: "/images/team/Bianca.jpeg",
    availability: "By GP referral to MindSpot"
  },
  {
    name: "Saphia Beekawoo",
    role: "Psychologist",
    qualifications: "Provisional Psychologist",
    specialties: ["Stress Management", "Emotional Regulation", "Interpersonal Challenges", "Behavioural Concerns", "Mental Health"],
    biography: "Saphia is a Provisional Psychologist employed by ORS who takes a warm, collaborative, and person-centred approach to therapy. She is passionate about walking alongside individuals as they navigate life's challenges, deepen self-understanding, and work towards meaningful and sustainable change. She aims to create a therapeutic space that feels safe, respectful, and grounded in trust, where patients feel genuinely heard and supported. She places strong value on mutual and shared decision-making and believes that therapy works best when clients are active partners in their care. Her work is informed by evidence-based approaches, drawing on modalities such as Cognitive Behaviour Therapy (CBT), Acceptance and Commitment Therapy (ACT), Metacognitive Therapy (MCT), among other therapeutic modalities. She uses an integrative approach that honours the interconnection between mind, body, and soul. Saphia tailors her approach to each individual, recognising that every person's story, strengths, and goals are unique. She has a particular interest in supporting individuals experiencing stress, emotional regulation difficulties, interpersonal challenges, behavioural concerns, and broader mental health difficulties. Saphia is committed to an inclusive, culturally responsive, and affirming practice, and welcomes individuals of all genders, cultures, and backgrounds. Gosnells Family Practice hosts WAPHA-commissioned ORS/MindSpot clinics for eligible patients. Referrals are made by GPs through approved pathways directly to MindSpot, as ORS does not accept direct referrals. Patients wishing to see Saphia may speak with their GP about a referral to MindSpot GP, a free government-funded mental health service for individuals experiencing low to moderate mental health concerns. Once a referral is received, MindSpot will contact the patient to assess suitability for in-person or telehealth services with ORS.",
    image: "https://ui-avatars.com/api/?name=Saphia+Beekawoo&size=400&background=00b1c3&color=fff&bold=true&font-size=0.4",
    availability: "By GP referral to MindSpot"
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

export function getNewDoctors(): Doctor[] {
  return doctors.filter(doctor => doctor.isNew)
}

export function getFoundingDoctors(): Doctor[] {
  return doctors.filter(doctor => doctor.isDirector)
}
