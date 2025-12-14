import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RS10 Railing System | Asay Global',
  description: 'RS10 Railing System by Asay Global - Round profile design delivering timeless aesthetics with structural safety for balconies and stairways. High-quality aluminum railing systems with glass components, suitable for residential and commercial projects.',
  keywords: [
    'RS10 Railing System',
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
  ],
  alternates: {
    canonical: '/services/handrails-railings/railing-systems/rs10',
  },
  openGraph: {
    title: 'RS10 Railing System | Asay Global',
    description: 'Round profile design delivering timeless aesthetics with structural safety for balconies and stairways. High-quality aluminum railing systems.',
    url: '/services/handrails-railings/railing-systems/rs10',
    type: 'website',
    siteName: 'Asay Global',
    images: [
      {
        url: '/images/handrails-railings/railing-systems/RS10-railing-systems/RS10-main-img.jpg',
        width: 1200,
        height: 630,
        alt: 'RS10 Railing System by Asay Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RS10 Railing System | Asay Global',
    description: 'Round profile design delivering timeless aesthetics with structural safety for balconies and stairways.',
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
    'product:brand': 'Asay Global',
    'product:category': 'Railing Systems',
    'product:material': 'Aluminum, Glass',
  },
}

export default function RS10Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

