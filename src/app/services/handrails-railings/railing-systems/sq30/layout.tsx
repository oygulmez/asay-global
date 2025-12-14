import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SQ30 Railing System | Asay Global',
  description: 'SQ30 Railing System by Asay Global - Heavier square profile and reinforced structural design, making it ideal for projects that demand a stronger visual impact and elevated safety perception. Supports horizontal, vertical, and glass-holder configurations.',
  keywords: [
    'SQ30 Railing System',
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
    'Heavier Square Profile',
    'Reinforced Structural Design',
    'Premium Railing System',
    'High-end Railing',
    'Elevated Safety Perception',
    'Coastal Environment Railing',
  ],
  alternates: {
    canonical: '/services/handrails-railings/railing-systems/sq30',
  },
  openGraph: {
    title: 'SQ30 Railing System | Asay Global',
    description: 'Heavier square profile and reinforced structural design, making it ideal for projects that demand a stronger visual impact and elevated safety perception.',
    url: '/services/handrails-railings/railing-systems/sq30',
    type: 'website',
    siteName: 'Asay Global',
    images: [
      {
        url: '/images/handrails-railings/railing-systems/SQ30-railing-systems/SQ30.jpg',
        width: 1200,
        height: 630,
        alt: 'SQ30 Railing System by Asay Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SQ30 Railing System | Asay Global',
    description: 'Heavier square profile and reinforced structural design, making it ideal for projects that demand a stronger visual impact and elevated safety perception.',
    images: ['/images/handrails-railings/railing-systems/SQ30-railing-systems/SQ30.jpg'],
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

export default function SQ30Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

