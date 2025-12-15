import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R-Fence System | Asay Global",
  description:
    "R-Fence System by Asay Global – modular aluminum fence system with adjustable angles between 60° and 180°, providing structured protection and flexible layouts for residential and commercial boundaries.",
  keywords: [
    "R-Fence System",
    "Fence System",
    "Aluminum Fence",
    "Adjustable Fence",
    "Modular Fence",
    "Perimeter Fence",
    "Garden Fence",
    "Residential Fence",
    "Commercial Fence",
    "Boundary System",
    "Asay Global",
    "Handrails & Railings",
  ],
  alternates: {
    canonical: "/services/handrails-railings/fence-systems/r-fence-system",
  },
  openGraph: {
    title: "R-Fence System | Asay Global",
    description:
      "Flexible Angles, Structured Protection – R-Fence is a modular fence system with adjustable angles using a single profile for consistent architectural design.",
    url: "/services/handrails-railings/fence-systems/r-fence-system",
    type: "website",
    siteName: "Asay Global",
    images: [
      {
        url: "/images/handrails-railings/fense-systems/r-fence-system/R-Fence_Garden.png",
        width: 1200,
        height: 630,
        alt: "R-Fence System by Asay Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "R-Fence System | Asay Global",
    description:
      "Design boundaries without limits with the R-Fence System – flexible angles, modular panels and long-term durability.",
    images: [
      "/images/handrails-railings/fense-systems/r-fence-system/R-Fence_Garden.png",
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
    "product:category": "Fence Systems",
    "product:material": "Aluminum",
  },
};

export default function RFenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


