export interface AfterHoursService {
  name: string
  phone: string
  hours: string
  description: string
  website?: string
}

export interface Hospital {
  name: string
  address: string
  phone: string
  distance: string
  emergency: boolean
  services: string[]
}

export interface EmergencyContact {
  service: string
  phone: string
  when: string
}

export const regularHours = {
  weekdays: 'Monday-Friday: 8:00 AM - 5:00 PM',
  saturday: 'Saturday: 9:00 AM - 3:00 PM',
  sunday: 'Sunday: 10:00 AM - 3:00 PM',
  publicHolidays: 'Public Holidays: Closed (check after-hours services)'
}

export const afterHoursServices: AfterHoursService[] = [
  {
    name: 'Home Doctor Service',
    phone: '(08) 9321 9133',
    hours: 'After clinic hours, 7 days a week',
    description: 'Bulk-billed home visits for urgent medical care when you cannot attend a clinic. Doctors visit you at home with a mobile clinic setup.',
    website: 'https://www.homedoctor.com.au'
  },
  {
    name: 'WADMS (Western Australian Doctor Medical Service)',
    phone: '13 26 60',
    hours: '24 hours a day, 7 days a week',
    description: 'After-hours medical advice and home visits throughout Western Australia. Covers Perth metro and some regional areas.',
    website: 'https://www.wadms.com.au'
  },
  {
    name: 'Health Direct',
    phone: '1800 022 222',
    hours: '24 hours a day, 7 days a week',
    description: 'Free health advice from registered nurses. They can help you decide if you need to see a doctor, go to emergency, or care for yourself at home.'
  },
  {
    name: 'Mental Health Emergency Response Line',
    phone: '1300 555 788',
    hours: '24 hours a day, 7 days a week',
    description: 'For mental health emergencies and crisis support. Staffed by mental health professionals who can provide immediate assistance.',
    website: 'https://www.mherl.health.wa.gov.au'
  },
  {
    name: 'Lifeline',
    phone: '13 11 14',
    hours: '24 hours a day, 7 days a week',
    description: 'Crisis support and suicide prevention services. Provides access to crisis support, suicide prevention, and mental health support.',
    website: 'https://www.lifeline.org.au'
  },
  {
    name: 'Poisons Information Centre',
    phone: '13 11 26',
    hours: '24 hours a day, 7 days a week',
    description: 'For poisoning emergencies and information about poisons, chemicals, bites, and stings. Staffed by specialist poison information pharmacists.'
  }
]

export const nearestHospitals: Hospital[] = [
  {
    name: 'Armadale Hospital',
    address: '3056 Albany Highway, Armadale WA 6112',
    phone: '(08) 9391 2000',
    distance: '8 km (approximately 12 minutes drive)',
    emergency: true,
    services: [
      '24-hour Emergency Department',
      'General Medicine',
      'General Surgery',
      'Obstetrics and Gynaecology',
      'Paediatrics',
      'Mental Health',
      'Pathology and Radiology'
    ]
  },
  {
    name: 'Bentley Health Service',
    address: 'Mills Street, Bentley WA 6102',
    phone: '(08) 9416 6111',
    distance: '18 km (approximately 20 minutes drive)',
    emergency: true,
    services: [
      '24-hour Emergency Department',
      'Trauma Services',
      'Intensive Care',
      'Cardiac Care',
      'Stroke Unit',
      'Multiple Specialties'
    ]
  },
  {
    name: 'Fiona Stanley Hospital',
    address: '11 Robin Warren Drive, Murdoch WA 6150',
    phone: '(08) 6152 2222',
    distance: '22 km (approximately 25 minutes drive)',
    emergency: true,
    services: [
      '24-hour Emergency Department',
      'Major Trauma Centre',
      'Comprehensive Cancer Centre',
      'Cardiac Services',
      'Burns Unit',
      'State Rehabilitation Service',
      'All Major Specialties'
    ]
  }
]

export const emergencyContacts: EmergencyContact[] = [
  {
    service: 'Emergency Services (Ambulance, Police, Fire)',
    phone: '000',
    when: 'Life-threatening emergencies only'
  },
  {
    service: 'Police Assistance Line (Non-Emergency)',
    phone: '131 444',
    when: 'Non-urgent police matters'
  },
  {
    service: 'SES Emergency (Storm and flood damage)',
    phone: '132 500',
    when: 'Storm or flood emergencies'
  }
]

export const whenToSeekEmergencyCare = [
  {
    title: 'Call 000 Immediately For:',
    symptoms: [
      'Chest pain or pressure',
      'Difficulty breathing or shortness of breath',
      'Sudden severe headache',
      'Sudden weakness, numbness, or difficulty speaking (stroke signs)',
      'Severe bleeding that won\'t stop',
      'Severe allergic reaction (swelling, difficulty breathing)',
      'Loss of consciousness',
      'Severe burns',
      'Suspected poisoning',
      'Severe injury or trauma',
      'Seizures (unless you have epilepsy and it\'s a typical seizure)',
      'Thoughts of suicide or self-harm'
    ]
  },
  {
    title: 'Go to Emergency Department For:',
    symptoms: [
      'Suspected broken bones',
      'Deep cuts requiring stitches',
      'Severe pain',
      'High fever with confusion or severe headache',
      'Severe asthma attack not responding to medication',
      'Severe vomiting or diarrhea with dehydration',
      'Severe allergic reactions',
      'Eye injuries',
      'Animal or human bites'
    ]
  },
  {
    title: 'Use After-Hours GP Services For:',
    symptoms: [
      'Mild to moderate infections',
      'Minor injuries',
      'Moderate pain',
      'Fever without severe symptoms',
      'Vomiting or diarrhea',
      'Urinary tract symptoms',
      'Skin rashes',
      'Medication concerns',
      'Worsening of chronic conditions'
    ]
  },
  {
    title: 'Wait for Regular Clinic Hours For:',
    symptoms: [
      'Routine prescription refills',
      'Follow-up appointments',
      'Chronic disease management',
      'Health check-ups',
      'Non-urgent referrals',
      'Test result discussions',
      'Minor concerns that can wait'
    ]
  }
]

export function getAfterHoursInfo() {
  return {
    regularHours,
    afterHoursServices,
    nearestHospitals,
    emergencyContacts,
    whenToSeekEmergencyCare
  }
}
