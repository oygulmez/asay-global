import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'R6050 Glass Railing System | Asay Global',
  description: 'R6050 Glass Railing System by Asay Global - Durable yet lightweight continuous glass base system designed for terraces and villas. Features compact aluminum profile and precise engineering.',
  keywords: [
    'R6050 Glass Railing System',
    'Glass Railing Systems',
    'Continuous Glass Base System',
    'Aluminum Glass Railing',
    'Transparent Railing',
    'Modern Glass Railing',
    'Terraces Railing',
    'Villa Railing',
    'Residential Glass Railing',
    'Architectural Glass Railing',
    'Handrails',
    'Railings',
    'Asay Global',
    'Laminated Glass Railing',
    '6+6 mm Glass',
    '5+5 mm Glass',
    'Glass Embedment System',
    'Lightweight Glass Railing',
    'Compact Glass Railing',
    'Safety Glass Railing',
    'Outdoor Glass Railing',
    'Residential Railing Solutions',
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
    canonical: '/services/handrails-railings/glass-railing-systems/r6050',
  },
  openGraph: {
    title: 'R6050 Glass Railing System | Asay Global',
    description: 'Durable yet lightweight continuous glass base system designed for terraces and villas. Features compact aluminum profile and precise engineering.',
    url: '/services/handrails-railings/glass-railing-systems/r6050',
    type: 'website',
    siteName: 'Asay Global',
    images: [
      {
        url: '/images/handrails-railings/glass-railing-systems/R6050-glass-railing-system/6050-1024x571.webp',
        width: 1200,
        height: 630,
        alt: 'R6050 Glass Railing System by Asay Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R6050 Glass Railing System | Asay Global',
    description: 'Durable yet lightweight continuous glass base system designed for terraces and villas.',
    images: ['/images/handrails-railings/glass-railing-systems/R6050-glass-railing-system/6050-1024x571.webp'],
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

export default function R6050Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

