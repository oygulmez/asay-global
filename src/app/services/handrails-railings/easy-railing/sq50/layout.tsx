import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SQ50 Easy Railing System | Asay Global",
    description:
        "SQ50 Easy Railing System by Asay Global – Clean Geometry, Easy Installation. Square-profile design with simplified connection details for balconies, stairways, and terraces.",
    keywords: [
        "SQ50 Easy Railing System",
        "Square Aluminum Railing",
        "Easy Install Railing",
        "Modular Railing System",
        "Modern Railing",
        "Geometric Railing",
        "Balcony Railing",
        "Stairway Railing",
        "Terrace Railing",
        "Asay Global",
        "Residential Railing",
        "Commercial Railing",
        "Outdoor Railing",
        "Corrosion Resistant Railing",
        "Architectural Railing",
        "Handrails",
        "Railings",
    ],
    alternates: {
        canonical: "/services/handrails-railings/easy-railing/sq50",
    },
    openGraph: {
        title: "SQ50 Easy Railing System | Asay Global",
        description:
            "Square-profile design combined with an easy-installation structure. SQ50 offers a modern and structured appearance with minimal installation effort.",
        url: "/services/handrails-railings/easy-railing/sq50",
        type: "website",
        siteName: "Asay Global",
        images: [
            {
                url: "/images/handrails-railings/easy-railing-systems/SQ50-railing-system/RS50-A (1).png",
                width: 1200,
                height: 630,
                alt: "SQ50 Easy Railing System by Asay Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SQ50 Easy Railing System | Asay Global",
        description:
            "Clean Geometry, Easy Installation. Choose a square-profile railing system designed for speed and efficiency.",
        images: [
            "/images/handrails-railings/easy-railing-systems/SQ50-railing-system/RS50-A (1).png",
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

export default function SQ50Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
