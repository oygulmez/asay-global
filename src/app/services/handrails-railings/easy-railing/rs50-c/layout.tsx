import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RS50-C Easy Railing System | Asay Global",
  description:
    "RS50-C Easy Railing System by Asay Global – effortless installation with integrated glass elements, delivering transparency, safety and contemporary aesthetics for modern residential projects.",
  keywords: [
    "RS50-C Easy Railing System",
    "RS50-C Easy Railing",
    "Glass Integrated Railing",
    "Easy Install Glass Railing",
    "Modular Railing System",
    "Balcony Railing",
    "Stairway Railing",
    "Terrace Railing",
    "Aluminum Railing",
    "Glass Railing",
    "Architectural Railing",
    "Handrails",
    "Railings",
    "Asay Global",
    "Residential Railing",
    "Outdoor Railing",
    "Corrosion Resistant Railing",
    "Modern Railing Design",
    "Contemporary Railing",
    "Construction Solutions",
    "Building Materials",
  ],
  alternates: {
    canonical: "/services/handrails-railings/easy-railing/rs50-c",
  },
  openGraph: {
    title: "RS50-C Easy Railing System | Asay Global",
    description:
      "Effortless installation with integrated glass transparency – RS50-C Easy Railing System combines quick assembly with modern glass aesthetics for balconies, stairways and terraces.",
    url: "/services/handrails-railings/easy-railing/rs50-c",
    type: "website",
    siteName: "Asay Global",
    images: [
      {
        url: "/images/handrails-railings/easy-railing-systems/RS50-C-railing-system/RS50-C.webp",
        width: 1200,
        height: 630,
        alt: "RS50-C Easy Railing System by Asay Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RS50-C Easy Railing System | Asay Global",
    description:
      "Effortless Installation, Enhanced Transparency – choose RS50-C for fast installation combined with modern glass aesthetics.",
    images: [
      "/images/handrails-railings/easy-railing-systems/RS50-C-railing-system/RS50-C.webp",
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
    "product:material": "Aluminum, Glass",
  },
};

export default function RS50CLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


