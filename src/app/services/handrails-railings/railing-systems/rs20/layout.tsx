import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RS20 Railing System | Asay Global',
  description: 'RS20 Railing System by Asay Global - Elegant linear form and enhanced structural detailing, offering a refined alternative for projects that require both visual clarity and robust protection. Designed primarily for balcony and stairway applications.',
  keywords: [
    'RS20 Railing System',
    'Railing Systems',
    'Aluminum Railing',
    'Glass Railing',
    'Balcony Railing',
    'Stairway Railing',
    'Architectural Railing',
    'Handrails',
    'Railings',
    'Asay Global',
    'Aluminum Profiles',
    'Railing Installation',
    'Top Mount Railing',
    'Side Mount Railing',
    'Railing Systems for Balconies',
    'Railing Systems for Stairways',
    'Corrosion Resistant Railing',
    'Anodized Railing',
    'Painted Railing',
    'Horizontal Railing',
    'Vertical Railing',
    'Glass Holder Railing',
    'Residential Railing',
    'Commercial Railing',
    'Architectural Safety Systems',
    'Square Profile Railing',
  ],
  alternates: {
    canonical: '/services/handrails-railings/railing-systems/rs20',
  },
  openGraph: {
    title: 'RS20 Railing System | Asay Global',
    description: 'Elegant linear form and enhanced structural detailing, offering a refined alternative for projects that require both visual clarity and robust protection.',
    url: '/services/handrails-railings/railing-systems/rs20',
    type: 'website',
    siteName: 'Asay Global',
    images: [
      {
        url: '/images/handrails-railings/railing-systems/RS20-railing-systems/RS20.jpg',
        width: 1200,
        height: 630,
        alt: 'RS20 Railing System by Asay Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RS20 Railing System | Asay Global',
    description: 'Elegant linear form and enhanced structural detailing, offering a refined alternative for projects that require both visual clarity and robust protection.',
    images: ['/images/handrails-railings/railing-systems/RS20-railing-systems/RS20.jpg'],
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
    'product:category': 'Railing Systems',
    'product:material': 'Aluminum, Glass',
  },
}

export default function RS20Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

