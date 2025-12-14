import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'R6000 Glass Railing System | Asay Global',
  description: 'R6000 Glass Railing System by Asay Global - One of the most preferred continuous glass base systems thanks to its modern design and ease of installation. Ideal for terraces, entertainment venues, and high-rise buildings.',
  keywords: [
    'R6000 Glass Railing System',
    'Glass Railing Systems',
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
    'Maximum Transparency Railing',
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
  ],
  alternates: {
    canonical: '/services/handrails-railings/glass-railing-systems/r6000',
  },
  openGraph: {
    title: 'R6000 Glass Railing System | Asay Global',
    description: 'One of the most preferred continuous glass base systems thanks to its modern design and ease of installation. Ideal for terraces, entertainment venues, and high-rise buildings.',
    url: '/services/handrails-railings/glass-railing-systems/r6000',
    type: 'website',
    siteName: 'Asay Global',
    images: [
      {
        url: '/images/handrails-railings/glass-railing-systems/R6000-glass-railing-system/r6000-1024x571.jpg',
        width: 1200,
        height: 630,
        alt: 'R6000 Glass Railing System by Asay Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R6000 Glass Railing System | Asay Global',
    description: 'One of the most preferred continuous glass base systems thanks to its modern design and ease of installation.',
    images: ['/images/handrails-railings/glass-railing-systems/R6000-glass-railing-system/r6000-1024x571.jpg'],
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

export default function R6000Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

