import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SQ10 Railing System | Asay Global',
  description: 'SQ10 Railing System by Asay Global - Square profile design that delivers a strong, modern, and architectural appearance. Ideal for balcony and stairway applications, SQ10 supports horizontal, vertical, and glass-holder configurations.',
  keywords: [
    'SQ10 Railing System',
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
    'Geometric Railing',
    'Modern Railing Design',
  ],
  alternates: {
    canonical: '/services/handrails-railings/railing-systems/sq10',
  },
  openGraph: {
    title: 'SQ10 Railing System | Asay Global',
    description: 'Square profile design that delivers a strong, modern, and architectural appearance. Ideal for balcony and stairway applications.',
    url: '/services/handrails-railings/railing-systems/sq10',
    type: 'website',
    siteName: 'Asay Global',
    images: [
      {
        url: '/images/handrails-railings/railing-systems/SQ10-railing-systems/SQ10.webp',
        width: 1200,
        height: 630,
        alt: 'SQ10 Railing System by Asay Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SQ10 Railing System | Asay Global',
    description: 'Square profile design that delivers a strong, modern, and architectural appearance.',
    images: ['/images/handrails-railings/railing-systems/SQ10-railing-systems/SQ10.webp'],
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

export default function SQ10Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

