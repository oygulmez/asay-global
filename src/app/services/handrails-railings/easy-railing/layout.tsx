import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Easy Railing Systems | Asay Global",
  description:
    "Discover Asay Global's Easy Railing solutions: pre-engineered, installer-friendly railing systems that reduce installation time while maintaining safety and aesthetics for balconies, stairways, and terraces.",
  keywords: [
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
    "R-Easy Railing System",
    "Installer Friendly Railing",
    "Prefabricated Railing",
    "Construction Solutions",
    "Building Materials",
    "Safety Railing",
    "Durable Railing",
    "Indoor Railing",
    "Outdoor Railing",
    "Residential Railing",
    "Commercial Railing",
  ],
  alternates: {
    canonical: "/services/handrails-railings/easy-railing",
  },
  openGraph: {
    title: "Easy Railing Systems | Asay Global",
    description:
      "Pre-engineered, installer-friendly railing systems that reduce installation time while maintaining safety and aesthetics.",
    url: "/services/handrails-railings/easy-railing",
    type: "website",
    siteName: "Asay Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Railing Systems | Asay Global",
    description:
      "Pre-engineered, installer-friendly railing systems that reduce installation time while maintaining safety and aesthetics.",
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
    "product:category": "Easy Railing Systems",
    "product:material": "Aluminum, Glass",
  },
};

export default function EasyRailingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

