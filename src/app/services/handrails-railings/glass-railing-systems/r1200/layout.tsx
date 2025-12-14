import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'R1200 Glass Railing System | Asay Global',
    description: 'R1200 Glass Railing System by Asay Global - Side-mounted solution for excellent visibility and efficient space utilization. Ideal for balconies and terraces.',
    keywords: [
        'R1200 Glass Railing System',
        'Side-mounted Glass Railing',
        'Space Saving Railing',
        'Balcony Railing',
        'Glass Railing Systems',
        'Aluminum Glass Railing',
        'Transparent Railing',
        'Modern Glass Railing',
        'Terraces Railing',
        'Architectural Glass Railing',
        'Handrails',
        'Railings',
        'Asay Global',
        'Laminated Glass Railing',
        '6+6 mm Glass',
        '5+5 mm Glass',
        '4+4 mm Glass',
        'Glass Embedment System',
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
        'Visual Openness',
        'Space Utilization',
    ],
    alternates: {
        canonical: '/services/handrails-railings/glass-railing-systems/r1200',
    },
    openGraph: {
        title: 'R1200 Glass Railing System | Asay Global',
        description: 'Side-mounted solution for excellent visibility and efficient space utilization. Ideal for balconies and terraces.',
        url: '/services/handrails-railings/glass-railing-systems/r1200',
        type: 'website',
        siteName: 'Asay Global',
        images: [
            {
                url: '/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/1200-1024x571.jpg',
                width: 1200,
                height: 630,
                alt: 'R1200 Glass Railing System by Asay Global',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'R1200 Glass Railing System | Asay Global',
        description: 'Side-mounted solution designed to maximize visual openness and efficient space utilization.',
        images: ['/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/1200-1024x571.jpg'],
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

export default function R1200Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
