import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fence Systems | Asay Global",
  description:
    "Fence Systems by Asay Global – modular aluminum fence solutions providing secure boundaries, flexible layouts and a clean, modern architectural appearance.",
  keywords: [
    "Fence Systems",
    "Aluminum Fence",
    "Perimeter Fence",
    "Garden Fence",
    "Residential Fence",
    "Commercial Fence",
    "Modular Fence",
    "Adjustable Fence",
    "R-Fence System",
    "Asay Global",
    "Handrails & Railings",
    "Boundary Solutions",
    "Outdoor Fence",
    "Security Fence",
  ],
  alternates: {
    canonical: "/services/handrails-railings/fence-systems",
  },
  openGraph: {
    title: "Fence Systems | Asay Global",
    description:
      "Explore Asay Global Fence Systems – modular aluminum fence solutions with flexible angles and structured protection for residential and commercial projects.",
    url: "/services/handrails-railings/fence-systems",
    type: "website",
    siteName: "Asay Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fence Systems | Asay Global",
    description:
      "Modular, adjustable fence systems offering secure boundaries and modern architectural design.",
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
};

export default function FenceSystemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


