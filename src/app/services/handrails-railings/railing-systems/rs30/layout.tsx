import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RS30 Railing System | Asay Global',
  description: 'RS30 Railing System by Asay Global - Specifically designed for applications where maximum visibility and a clean architectural appearance are essential. Featuring an integrated glass holder design, RS30 allows glass panels to become a key visual element while maintaining high safety standards.',
  keywords: [
    'RS30 Railing System',
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
    'Glass Holder Railing',
    'Residential Railing',
    'Commercial Railing',
    'Architectural Safety Systems',
    'Integrated Glass Holder',
    'Transparent Railing',
    'Maximum Visibility Railing',
  ],
  alternates: {
    canonical: '/services/handrails-railings/railing-systems/rs30',
  },
  openGraph: {
    title: 'RS30 Railing System | Asay Global',
    description: 'Specifically designed for applications where maximum visibility and a clean architectural appearance are essential. Featuring an integrated glass holder design.',
    url: '/services/handrails-railings/railing-systems/rs30',
    type: 'website',
    siteName: 'Asay Global',
    images: [
      {
        url: '/images/handrails-railings/railing-systems/RS30-railing-systems/RS30.webp',
        width: 1200,
        height: 630,
        alt: 'RS30 Railing System by Asay Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RS30 Railing System | Asay Global',
    description: 'Specifically designed for applications where maximum visibility and a clean architectural appearance are essential.',
    images: ['/images/handrails-railings/railing-systems/RS30-railing-systems/RS30.webp'],
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

export default function RS30Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

