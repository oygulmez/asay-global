import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glass Railing Systems | Asay Global',
  description: 'Explore Asay Global\'s premium glass railing systems: R6000, R6050, R6200, R1001, R6150, R1200. Designed to deliver maximum transparency while ensuring high safety standards. Continuous glass base solutions, curved systems, and side-mounted options for modern architectural projects.',
  keywords: [
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
    'R6000 Glass Railing System',
    'R6050 Glass Railing System',
    'R6200 Glass Railing System',
    'R1001 Curved Glass Railing System',
    'R6150 Glass Railing System',
    'R1200 Glass Railing System',
    'Oval Profile Glass Railing',
    'Curved Glass Railing',
    'Modular Glass Railing',
    'Segmented Glass Railing',
    'Side-mounted Glass Railing',
  ],
  alternates: {
    canonical: '/services/handrails-railings/glass-railing-systems',
  },
  openGraph: {
    title: 'Glass Railing Systems | Asay Global',
    description: 'Explore Asay Global\'s premium glass railing systems: R6000, R6050, R6200, R1001, R6150, R1200. Designed to deliver maximum transparency while ensuring high safety standards.',
    url: '/services/handrails-railings/glass-railing-systems',
    type: 'website',
    siteName: 'Asay Global',
    images: [
      {
        url: '/images/handrails-railings/glass-railing-systems/R6000-glass-railing-system/r6000-1024x571.webp',
        width: 1200,
        height: 630,
        alt: 'Glass Railing Systems by Asay Global',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glass Railing Systems | Asay Global',
    description: 'Explore Asay Global\'s premium glass railing systems: R6000, R6050, R6200, R1001, R6150, R1200. Designed to deliver maximum transparency while ensuring high safety standards.',
    images: ['/images/handrails-railings/glass-railing-systems/R6000-glass-railing-system/r6000-1024x571.webp'],
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
    'product:category': 'Glass Railing Systems',
    'product:material': 'Aluminum, Glass',
  },
}

export default function GlassRailingSystemsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

