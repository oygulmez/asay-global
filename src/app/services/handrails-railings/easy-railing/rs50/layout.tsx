import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RS50 Easy Railing System | Asay Global",
  description:
    "RS50 Easy Railing System by Asay Global – a smart, installer-friendly railing solution that significantly reduces installation time while maintaining safety and contemporary design for balconies, stairways, and terraces.",
  keywords: [
    "RS50 Easy Railing System",
    "Easy Railing",
    "Pre-engineered Railing",
    "Modular Railing System",
    "Quick Install Railing",
    "Balcony Railing",
    "Stairway Railing",
    "Terrace Railing",
    "Aluminum Railing",
    "Architectural Railing",
    "Handrails",
    "Railings",
    "Asay Global",
    "Installer Friendly Railing",
    "Prefabricated Railing",
    "Residential Railing",
    "Commercial Railing",
    "Indoor Railing",
    "Outdoor Railing",
    "Corrosion Resistant Railing",
    "Modern Railing Design",
    "Contemporary Railing",
    "Construction Solutions",
    "Building Materials",
  ],
  alternates: {
    canonical: "/services/handrails-railings/easy-railing/rs50",
  },
  openGraph: {
    title: "RS50 Easy Railing System | Asay Global",
    description:
      "Smart design and easy installation – RS50 Easy Railing System is engineered to simplify installation while maintaining reliable safety and clean architectural aesthetics.",
    url: "/services/handrails-railings/easy-railing/rs50",
    type: "website",
    siteName: "Asay Global",
    images: [
      {
        url: "/images/handrails-railings/easy-railing-systems/RS50-railing-system/RS50-A.webp",
        width: 1200,
        height: 630,
        alt: "RS50 Easy Railing System by Asay Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RS50 Easy Railing System | Asay Global",
    description:
      "Smart design and easy installation – a user-friendly railing solution that reduces installation time while preserving safety and design quality.",
    images: [
      "/images/handrails-railings/easy-railing-systems/RS50-railing-system/RS50-A.webp",
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

export default function RS50Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


