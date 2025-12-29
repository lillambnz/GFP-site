import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "../styles/globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://gosnellsfamilypractice.com.au'),

  title: {
    default: 'Gosnells Family Practice | Medical Centre Gosnells Perth',
    template: '%s | Gosnells Family Practice'
  },

  description: 'AGPAL Accredited medical practice in Gosnells, Perth. Expert healthcare, 7 days open, 4.9/5 rating. Bulk billing available. Book online or call (08) 6118 2788.',

  keywords: [
    'Gosnells family practice',
    'medical centre Gosnells',
    'GP Gosnells',
    'doctor Gosnells',
    'bulk billing Gosnells',
    'Maddington doctor',
    'Thornlie medical centre',
    'Huntingdale GP',
    'family doctor Perth',
    'medical centre 6110'
  ],

  authors: [{ name: 'Gosnells Family Practice' }],

  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://gosnellsfamilypractice.com.au',
    siteName: 'Gosnells Family Practice',
    title: 'Gosnells Family Practice | Medical Centre Gosnells',
    description: 'AGPAL Accredited medical practice in Gosnells. Open 7 days. Expert healthcare for the whole family.',
  },

  other: {
    'geo.region': 'AU-WA',
    'geo.placename': 'Gosnells',
    'geo.position': '-32.0833;115.9833',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://gosnellsfamilypractice.com.au/#organization",
    "name": "Gosnells Family Practice",
    "alternateName": "GFP Medical Centre",
    "url": "https://gosnellsfamilypractice.com.au",
    "logo": "https://gosnellsfamilypractice.com.au/icon.svg",
    "description": "AGPAL Accredited family medical practice providing comprehensive healthcare services in Gosnells, Perth, Western Australia.",
    "telephone": "+61861182788",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2237 Albany Highway",
      "addressLocality": "Gosnells",
      "addressRegion": "WA",
      "postalCode": "6110",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -32.0833,
      "longitude": 115.9833
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "150"
    },
    "priceRange": "$$",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "AGPAL Accredited"
    },
    "medicalSpecialty": [
      "General Practice",
      "Family Medicine",
      "Women's Health",
      "Men's Health",
      "Pediatrics",
      "Chronic Disease Management",
      "Mental Health"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Gosnells"
      },
      {
        "@type": "City",
        "name": "Maddington"
      },
      {
        "@type": "City",
        "name": "Thornlie"
      },
      {
        "@type": "City",
        "name": "Huntingdale"
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
