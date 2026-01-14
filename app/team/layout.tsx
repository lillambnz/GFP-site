import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Medical Team | Expert Doctors Gosnells',
  description: 'Meet our experienced medical team at Gosnells Family Practice. FRACGP qualified doctors specializing in family medicine, women\'s health, chronic disease management, and alternative medicine. Book online.',
  keywords: [
    'doctors Gosnells',
    'GP team Gosnells',
    'medical practitioners Perth',
    'Dr Ameer Khan alternative medicine',
    'women\'s health doctor',
    'bulk billing doctors Gosnells',
    'FRACGP doctors Perth',
    'integrative medicine doctor'
  ],
  openGraph: {
    title: 'Our Medical Team | Gosnells Family Practice',
    description: 'Expert FRACGP doctors providing comprehensive healthcare in Gosnells including alternative and integrative medicine',
    url: 'https://gosnellsfamilypractice.com.au/team'
  }
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children
}
