import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SQ20 Railing System | Asay Global',
  description: 'SQ20 Railing System by Asay Global - Balanced square profile and enhanced structural depth, offering a more pronounced architectural presence. Ideal for balcony and stairway applications, SQ20 supports horizontal and vertical configurations.',
  keywords: [
    'SQ20 Railing System',
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
    'Residential Railing',
    'Commercial Railing',
    'Architectural Safety Systems',
    'Square Profile Railing',
    'Geometric Railing',
    'Modern Railing Design',
    'Enhanced Structural Depth',
    'Balanced Square Profile',
    'Bold Architectural Expression',
  ],
  alternates: {
    canonical: '/services/handrails-railings/railing-systems/sq20',
  },
  openGraph: {
    title: 'SQ20 Railing System | Asay Global',
    description: 'Balanced square profile and enhanced structural depth, offering a more pronounced architectural presence. Ideal for balcony and stairway applications.',
    url: '/services/handrails-railings/railing-systems/sq20',
    type: 'website',
    siteName: 'Asay Global',
    images: [
      {
        url: '/images/handrails-railings/railing-systems/SQ20-railing-systems/SQ20.webp',
        width: 1200,
        height: 630,
        alt: 'SQ20 Railing System by Asay Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SQ20 Railing System | Asay Global',
    description: 'Balanced square profile and enhanced structural depth, offering a more pronounced architectural presence.',
    images: ['/images/handrails-railings/railing-systems/SQ20-railing-systems/SQ20.webp'],
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

export default function SQ20Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

