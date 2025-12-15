import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "LM10 Railing System | Asay Global",
    description:
        "LM10 Railing System by Asay Global – Architectural Rhythm, Controlled Privacy. A lamella-based railing solution offering adjustable visibility and modern design.",
    keywords: [
        "LM10 Railing System",
        "Lamella Railing",
        "Louver Railing",
        "Privacy Railing",
        "Architectural Railing",
        "Balcony Shading",
        "Facade Railing",
        "Aluminum Railing",
        "Asay Global",
        "Modern Railing",
        "Residential Railing",
        "Commercial Railing",
    ],
    alternates: {
        canonical: "/services/handrails-railings/easy-railing/lm10",
    },
    openGraph: {
        title: "LM10 Railing System | Asay Global",
        description:
            "Architectural Rhythm, Controlled Privacy. The LM10 Railing System offers a unique lamella design for shading, privacy, and safety.",
        url: "/services/handrails-railings/easy-railing/lm10",
        type: "website",
        siteName: "Asay Global",
        images: [
            {
                url: "/images/handrails-railings/easy-railing-systems/LM10-railing-system/LM10.webp",
                width: 1200,
                height: 630,
                alt: "LM10 Railing System by Asay Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "LM10 Railing System | Asay Global",
        description:
            "Architectural Rhythm, Controlled Privacy. Discover the LM10 lamella railing system.",
        images: [
            "/images/handrails-railings/easy-railing-systems/LM10-railing-system/LM10.webp",
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    other: {
        "product:brand": "Asay Global",
        "product:category": "Easy Railing Systems",
        "product:material": "Aluminum",
    },
};

export default function LM10Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
