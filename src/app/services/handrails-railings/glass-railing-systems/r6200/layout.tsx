import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'R6200 Glass Railing System | Asay Global',
  description: 'R6200 Glass Railing System by Asay Global - Oval profile design offering a softer and more aesthetic appearance. Engineered for easy installation and long-term durability in terraces, entertainment venues, and high-rise buildings.',
  keywords: [
    'R6200 Glass Railing System',
    'Glass Railing Systems',
    'Oval Profile Glass Railing',
    'Continuous Glass Base System',
    'Aluminum Glass Railing',
    'Transparent Railing',
    'Modern Glass Railing',
    'Terraces Railing',
    'High-rise Building Railing',
    'Entertainment Venue Railing',
    'Architectural Glass Railing',
    'Handrails',
    'Railings',
    'Asay Global',
    'Laminated Glass Railing',
    '10+10 mm Glass',
    '8+8 mm Glass',
    'Glass Embedment System',
    'Aesthetic Glass Railing',
    'Refined Glass Railing',
    'Safety Glass Railing',
    'Outdoor Glass Railing',
    'Residential Glass Railing',
    'Commercial Glass Railing',
    'Architectural Safety Systems',
    'Glass Railing Solutions',
    'Modern Railing Design',
    'Contemporary Railing',
    'Building Materials',
    'Construction Solutions',
    'Premium Glass Railing',
    'High-end Glass Railing',
    'Design Sophistication',
    'Easy Installation Railing',
  ],
  alternates: {
    canonical: '/services/handrails-railings/glass-railing-systems/r6200',
  },
  openGraph: {
    title: 'R6200 Glass Railing System | Asay Global',
    description: 'Oval profile design offering a softer and more aesthetic appearance. Engineered for easy installation and long-term durability.',
    url: '/services/handrails-railings/glass-railing-systems/r6200',
    type: 'website',
    siteName: 'Asay Global',
    images: [
      {
        url: '/images/handrails-railings/R6200-glass-railing-system/6200-1024x571.webp',
        width: 1200,
        height: 630,
        alt: 'R6200 Glass Railing System by Asay Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R6200 Glass Railing System | Asay Global',
    description: 'Oval profile design offering a softer and more aesthetic appearance. Engineered for easy installation and long-term durability.',
    images: ['/images/handrails-railings/R6200-glass-railing-system/6200-1024x571.webp'],
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
  other: {
    'product:brand': 'Asay Global',
    'product:category': 'Glass Railing Systems',
    'product:material': 'Aluminum, Glass',
  },
}

export default function R6200Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

