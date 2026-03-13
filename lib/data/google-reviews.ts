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
    date: "3 days ago",
    featured: true,
    url: "https://share.google/vhSo4PVJI2HDy9H2F"
  }
]

export const googleBusinessInfo = {
  rating: 4.9,
  totalReviews: 150,
  profileUrl: "https://www.google.com/search?q=Gosnells+Family+Practice+reviews"
}
