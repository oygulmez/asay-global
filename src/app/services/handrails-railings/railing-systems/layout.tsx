import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Railing Systems | Asay Global',
  description: 'Explore Asay Global\'s premium railing systems: RS10, RS20, RS30, SQ10, SQ20, SQ30. Engineered for safety, durability, and modern aesthetics in balconies, stairways, and terraces. Round and square profile designs available.',
  keywords: [
    'Railing Systems',
    'Aluminum Railing',
    'Glass Railing',
    'Balcony Railing',
    'Stairway Railing',
    'Architectural Railing',
    'Handrails',
    'Railings',
    'Asay Global',
    'RS10 Railing System',
    'RS20 Railing System',
    'RS30 Railing System',
    'SQ10 Railing System',
    'SQ20 Railing System',
    'SQ30 Railing System',
    'Round Profile Railing',
    'Square Profile Railing',
    'Aluminum Profiles',
    'Railing Installation',
    'Top Mount Railing',
    'Side Mount Railing',
    'Corrosion Resistant Railing',
    'Anodized Railing',
    'Painted Railing',
    'Residential Railing',
    'Commercial Railing',
    'Architectural Safety Systems',
    'Railing Solutions',
    'Modern Railing Design',
    'Contemporary Railing',
    'Safety Railing',
    'Durable Railing',
    'Outdoor Railing',
    'Indoor Railing',
    'Building Materials',
    'Construction Solutions',
    'Glass Holder Railing',
    'Horizontal Railing',
    'Vertical Railing',
    'Premium Railing Systems',
    'High-end Railing',
  ],
  alternates: {
    canonical: '/services/handrails-railings/railing-systems',
  },
  openGraph: {
    title: 'Railing Systems | Asay Global',
    description: 'Premium railing systems engineered for safety, durability, and modern aesthetics. Explore RS10, RS20, RS30, SQ10, SQ20, and SQ30 railing systems.',
    url: '/services/handrails-railings/railing-systems',
    type: 'website',
    siteName: 'Asay Global',
    images: [
      {
        url: '/images/handrails-railings/railing-systems/RS10-railing-systems/RS10-main-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Railing Systems by Asay Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Railing Systems | Asay Global',
    description: 'Premium railing systems engineered for safety, durability, and modern aesthetics. Explore RS10, RS20, RS30, SQ10, SQ20, and SQ30.',
    images: ['/images/handrails-railings/railing-systems/RS10-railing-systems/RS10-main-img.jpg'],
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
    'product:category': 'Railing Systems',
    'product:material': 'Aluminum, Glass',
  },
}

export default function RailingSystemsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

