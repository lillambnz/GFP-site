export interface FAQ {
  question: string
  answer: string
}

export interface FAQCategory {
  category: string
  questions: FAQ[]
}

export const faqs: FAQCategory[] = [
  {
    category: 'General',
    questions: [
      {
        question: 'What should I bring to my first appointment?',
        answer: 'Please bring your Medicare card, any concession cards, a list of current medications, relevant test results or specialist letters, and any referrals. If you have private health insurance, bring your card as well.'
      },
      {
        question: 'How do I book an appointment?',
        answer: 'You can book online through our website or HotDoc, call us on (08) 6118 2788, or walk in during opening hours. Online booking is available 24/7 for your convenience.'
      },
      {
        question: 'Do I need a referral to see a GP?',
        answer: 'No, you don\'t need a referral to see a General Practitioner. However, you will need a GP referral to see most specialists and to access Medicare rebates for some allied health services.'
      },
      {
        question: 'Can I request a specific doctor?',
        answer: 'Yes, you can request to see a specific doctor when booking. Please note that availability may vary, and sometimes you may need to wait for an appointment with your preferred doctor.'
      },
      {
        question: 'What are your opening hours?',
        answer: 'We are open 7 days a week: Monday-Friday 8:00 AM - 5:00 PM, Saturday 9:00 AM - 3:00 PM, and Sunday 10:00 AM - 3:00 PM. Please check our website for public holiday hours.'
      },
      {
        question: 'Do you offer home visits?',
        answer: 'Home visits are available in limited circumstances for patients who are unable to attend the practice due to medical reasons. Please contact our reception to discuss your situation.'
      },
      {
        question: 'Can I get a same-day appointment?',
        answer: 'We always try to accommodate urgent cases on the same day. Call us as early as possible, and we will do our best to fit you in. For emergencies, please call 000.'
      },
      {
        question: 'Is there disability access?',
        answer: 'Yes, our practice is wheelchair accessible with disabled parking available. We have accessible restrooms and consultation rooms. Please let reception know if you require any special assistance.'
      },
      {
        question: 'Do you offer telephone or video consultations?',
        answer: 'Yes, we offer telehealth consultations via phone or video call for appropriate situations such as follow-ups, prescription renewals, and non-emergency consultations.'
      },
      {
        question: 'What if I need an interpreter?',
        answer: 'We offer free interpreter services for patients who need language assistance. Please inform reception when booking so we can arrange an interpreter for your appointment. Our doctors also speak multiple languages including Arabic, Malay, Mandarin, and more.'
      }
    ]
  },
  {
    category: 'Billing & Medicare',
    questions: [
      {
        question: 'Do you bulk bill?',
        answer: 'We bulk bill for children under 16, pensioners, and concession card holders for standard consultations. Other patients pay a private fee with a Medicare rebate. Telehealth consultations are often bulk billed.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept cash, EFTPOS, credit cards (Visa, MasterCard, American Express), and direct bank transfer. Payment is required on the day of consultation.'
      },
      {
        question: 'How much does a consultation cost?',
        answer: 'Standard consultations: $76 (Medicare rebate $43.90, out-of-pocket $32.10). Long consultations: $142 (Medicare rebate $85.30). Very long consultations: $203 (Medicare rebate $128.90). Bulk billing available for eligible patients.'
      },
      {
        question: 'Can I claim my consultation on Medicare immediately?',
        answer: 'Yes, if you have your Medicare card, we can process your Medicare claim immediately through our HICAPS terminal. Your rebate will be credited to your nominated bank account within 3-5 business days.'
      },
      {
        question: 'Do you accept private health insurance?',
        answer: 'GP consultations are covered by Medicare, not private health insurance. However, private health insurance may cover some specialist consultations, procedures, or allied health services.'
      },
      {
        question: 'What if I can\'t afford to pay?',
        answer: 'Please speak to our reception staff in confidence. We may be able to arrange bulk billing in cases of financial hardship or set up a payment plan for more expensive services.'
      },
      {
        question: 'Are pathology tests bulk billed?',
        answer: 'Most pathology tests are bulk billed through Medicare when requested by your doctor. Fees may apply for some specialized tests not covered by Medicare.'
      },
      {
        question: 'How much does a medical certificate cost?',
        answer: 'Medical certificates are included in your consultation fee if issued during a consultation. A standalone certificate without a consultation incurs a separate fee.'
      }
    ]
  },
  {
    category: 'Services',
    questions: [
      {
        question: 'Do you offer women\'s health services?',
        answer: 'Yes, we provide comprehensive women\'s health services including cervical screening, contraception advice, pregnancy care, menopause management, and general gynecological concerns. Female doctors are available upon request.'
      },
      {
        question: 'Can I get vaccinations here?',
        answer: 'Yes, we provide all standard vaccinations including childhood immunizations, flu shots, COVID-19 vaccines, and travel vaccinations. Many are free under the National Immunisation Program.'
      },
      {
        question: 'Do you do skin cancer checks?',
        answer: 'Yes, Dr. Choong Leat Loh holds a Certificate in Skin Cancer Medicine and provides expert skin cancer screening and treatment. We recommend annual skin checks for most people, more frequently if you\'re at high risk.'
      },
      {
        question: 'Can I see a dietitian at your practice?',
        answer: 'Yes, we have accredited practicing dietitians available by appointment. You may be eligible for Medicare rebates through a GP Management Plan or Chronic Disease Management Plan.'
      },
      {
        question: 'Do you offer mental health services?',
        answer: 'Yes, our GPs provide mental health assessments and can develop Mental Health Care Plans for access to Medicare-rebated psychology services. We also offer counseling and support for a range of mental health concerns.'
      },
      {
        question: 'Can you do minor procedures like removing skin lesions?',
        answer: 'Yes, we perform minor surgical procedures including skin lesion removal, cyst excision, wound care, and suturing. These procedures are done in our well-equipped procedure room.'
      },
      {
        question: 'Do you provide workers compensation services?',
        answer: 'Yes, we provide comprehensive workers compensation services including injury assessment, treatment, medical certificates, and return-to-work planning. We work with WorkCover and employers.'
      },
      {
        question: 'Can I get pathology tests done here?',
        answer: 'Yes, we have on-site pathology collection services available Monday-Friday. Bring your pathology request form—no appointment needed for most tests.'
      },
      {
        question: 'Do you do pre-employment medicals?',
        answer: 'Yes, we conduct pre-employment medicals including health assessments, drug and alcohol screening, and completion of employer medical forms. Please book an appointment and bring your employer\'s requirements.'
      }
    ]
  },
  {
    category: 'After Hours & Emergencies',
    questions: [
      {
        question: 'What should I do in a medical emergency?',
        answer: 'For life-threatening emergencies, call 000 immediately. For serious but non-life-threatening situations, go to your nearest hospital emergency department. Armadale Hospital Emergency is the closest to our practice.'
      },
      {
        question: 'What after-hours services are available?',
        answer: 'After clinic hours, you can contact the Home Doctor Service on (08) 9321 9133 for home visits, or call WADMS on 13 26 60 for after-hours GP advice. For emergencies, always call 000.'
      },
      {
        question: 'Can I get a prescription refill after hours?',
        answer: 'Emergency prescriptions may be available through after-hours services. However, we recommend requesting prescription renewals during regular clinic hours to avoid after-hours fees.'
      },
      {
        question: 'Where is the nearest hospital?',
        answer: 'Armadale Hospital at 3056 Albany Highway, Armadale (approximately 8km away) is the nearest public hospital with an emergency department. In an emergency, call 000 for an ambulance.'
      },
      {
        question: 'What if I need urgent care on weekends?',
        answer: 'We are open Saturday 9:00 AM - 3:00 PM and Sunday 10:00 AM - 3:00 PM for urgent and routine care. Outside these hours, contact after-hours services or visit an emergency department.'
      },
      {
        question: 'How do I know if I should go to emergency or wait for my GP?',
        answer: 'Go to emergency if you have: chest pain, difficulty breathing, severe bleeding, suspected stroke, severe allergic reaction, or any life-threatening condition. For less urgent issues that can\'t wait, use after-hours GP services.'
      }
    ]
  }
]

export function getAllFAQs(): FAQ[] {
  return faqs.flatMap(category => category.questions)
}

export function getFAQsByCategory(categoryName: string): FAQ[] {
  const category = faqs.find(cat => cat.category === categoryName)
  return category?.questions || []
}

export const faqCategories = faqs.map(cat => cat.category)
