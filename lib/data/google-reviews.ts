export interface GoogleReview {
  name: string
  rating: 5
  text: string
  date?: string
  featured?: boolean
  url?: string
}

// Featured 5-star reviews from Google My Business
export const googleReviews: GoogleReview[] = [
  {
    name: "Darlene H",
    rating: 5,
    text: "Absolutely great surgery, amazing staff always friendly kind and caring as well as Dr Khan one of the best doctors always listens and cares for his patients.",
    date: "21 weeks ago"
  },
  {
    name: "Mita Y",
    rating: 5,
    text: "Love Dr. Intan from this medical practice! She has been my doctor for the past 2 years. The medical clinic is also clean, the pathology ladies also nice, the receptionist very helpful!",
    date: "4 weeks ago"
  },
  {
    name: "Tete L",
    rating: 5,
    text: "Dr Ramli is my family GP. She is really helpful, she speaks clearly and makes us understand what she says, specially with people like my family that has limited English.",
    date: "3 weeks ago"
  },
  {
    name: "Ann A",
    rating: 5,
    text: "Friendly Doctors and Staff. New premise, clean and spacious. Don't have to wait for long to see the doctor and there is a Pathology too.",
    date: "11 weeks ago"
  },
  {
    name: "Michelle G",
    rating: 5,
    text: "Dr Khan was, always is, extremely caring and professional. Very grateful for his help with complex issues.",
    date: "21 weeks ago"
  },
  {
    name: "Au S",
    rating: 5,
    text: "I visited this clinic this morning and everything was great! Doctor Choong Leat was calm and steady.",
    date: "16 weeks ago"
  },
  {
    name: "Alzena C",
    rating: 5,
    text: "Had an unexpectedly awesome doctor experience. Met Dr. Fazilah Abu Bakar — absolute legend. She checked in, asked what I needed, and made the whole thing feel easy and human. Professional but also totally human. Felt cared for, not rushed, and actually enjoyed a doctor's visit for once. 10/10!",
    date: "2 months ago",
    featured: true,
    url: "https://share.google/vhSo4PVJI2HDy9H2F"
  },
  {
    name: "Wajahat A",
    rating: 5,
    text: "Nice and friendly staff at reception, and doctors are so professional — especially Dr Ameer Khan. Happy with their service.",
    date: "a day ago"
  },
  {
    name: "DanelleMarcus B",
    rating: 5,
    text: "We booked a last minute appointment here. Lovely reception staff and doctor. Did not feel rushed and the appointment was on time. And bonus that it was bulk billed — thank you.",
    date: "a week ago"
  },
  {
    name: "Rajkumari P",
    rating: 5,
    text: "I had a very good experience with Dr Choong Loh for acne treatment. The doctor was patient, professional, and explained the cause of my acne clearly before starting treatment. The prescribed medicines and skincare routine were effective.",
    date: "a week ago"
  },
  {
    name: "Colin B",
    rating: 5,
    text: "Dr Wan was excellent. Practice is very calm, friendly and efficient.",
    date: "2 weeks ago"
  },
  {
    name: "TheZephyrZad",
    rating: 5,
    text: "Highly recommend. Best practice I've been to. Dr A Khan is one of the best GPs south of the river.",
    date: "2 weeks ago"
  },
  {
    name: "Michelle R",
    rating: 5,
    text: "Gosnells Family Practice is great, the staff are friendly and Dr Intan Ramli is great — she is the best doctor I have had. She does tests to find out what your medical problems are and always does follow-up. Highly recommended.",
    date: "3 weeks ago"
  },
  {
    name: "Richelle B",
    rating: 5,
    text: "Dr Choong is a highly recommendable GP. He makes sure that his patients' concerns are properly addressed and takes immediate action on health issues requiring urgency. The staff are also very helpful and cordial every time.",
    date: "3 weeks ago"
  },
  {
    name: "Lucy C",
    rating: 5,
    text: "This Family Practice is wonderful for my two children. The reception staff are lovely, kind, accommodating and welcoming. Probably the best reception team I've ever come across!",
    date: "a month ago"
  },
  {
    name: "Karry",
    rating: 5,
    text: "Love Dr Khan — he is a genuine listener, and he remembers your history without having to return to his notes. One of the best doctors I've seen in many years. Thank you.",
    date: "a month ago"
  },
  {
    name: "Dexter",
    rating: 5,
    text: "I've been seeing Dr Quam at Gosnells Family Practice and couldn't be happier with the care I've received. He is knowledgeable, attentive, and genuinely takes the time to listen to your concerns. Appointments run efficiently.",
    date: "2 months ago"
  },
  {
    name: "W Bu",
    rating: 5,
    text: "Dr Khan is a legend. Extremely helpful and very sensitive and kind to your condition.",
    date: "2 months ago"
  },
  {
    name: "Suan R",
    rating: 5,
    text: "Such beautiful people at this medical centre. Doctors are caring and go above and beyond. Ladies on the desk always smile and are friendly. The nurse is so happy and friendly. It's nice to feel like you're not just a number. I highly recommend this practice.",
    date: "9 months ago"
  },
  {
    name: "Ken & Maureen J",
    rating: 5,
    text: "It is always a pleasure to visit this surgery. Really friendly receptionists both at check-in and on the phone. I can always get an appointment and rarely have to wait very long. We have found all the doctors to be thorough, helpful and considerate.",
    date: "a year ago"
  },
  {
    name: "Shah A",
    rating: 5,
    text: "Dr Fazilah went above and beyond to take great care of my family. Patient, gentle and very thorough. The medical practice was very clean and inviting. Receptionists were polite and professional. Will definitely continue to use her services.",
    date: "a year ago"
  },
  {
    name: "Michelle G (full)",
    rating: 5,
    text: "Dr Khan was, always is, extremely caring and professional. Very grateful for his help with complex issues in relation to my diabetes. Have moved from Gosnells but well worth the 45 minute drive to attend Gosnells Family Practice.",
    date: "9 months ago"
  },
  {
    name: "Margaret J",
    rating: 5,
    text: "I was very fortunate to walk in and without a long wait was seen by a delightful doctor. I had not been here before and was feeling rather ill. I was totally impressed and this will be my go-to practice from now on.",
    date: "3 months ago"
  },
  {
    name: "Jacqueline K",
    rating: 5,
    text: "The receptionist here is always so friendly and happy. And I love Dr Bakar — she's compassionate, understanding and easy to connect with. They make me feel important.",
    date: "a year ago"
  },
  {
    name: "Chris H",
    rating: 5,
    text: "The staff are a pleasure to deal with and I could not rate Dr Ameer Khan more highly — he is a genuine and caring person who makes you feel like you are family. His care and attention to detail in all he does is clearly evident.",
    date: "a year ago"
  },
  {
    name: "Tasmia H",
    rating: 5,
    text: "The best GP I've been to in Perth! Dr Ameer Khan is an absolute gem who understood my concerns and went out of his way to help. Lovely receptionist and nurses too. Would 100% recommend.",
    date: "a year ago"
  },
  {
    name: "Keitha M",
    rating: 5,
    text: "Lovely family practice — very calming and inviting environment. Doctors and nurses are very attentive to your needs, kind and informative. Never have to wait too long which shows they respect our time. Always a good experience here.",
    date: "a year ago"
  }
]

export const googleBusinessInfo = {
  rating: 4.9,
  totalReviews: 150,
  profileUrl: "https://www.google.com/search?q=Gosnells+Family+Practice+reviews"
}
