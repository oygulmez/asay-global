import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garden Gate System | Asay Global",
  description:
    "Garden Gate System by Asay Global – a durable aluminum gate solution designed to complement fence and perimeter systems with secure, aesthetic entrances.",
  keywords: [
    "Garden Gate System",
    "Garden Gate",
    "Entrance Gate",
    "Aluminum Gate",
    "Fence Gate",
    "Perimeter Gate",
    "Residential Gate",
    "Villa Gate",
    "Boundary System",
    "Asay Global",
    "Fence Systems",
  ],
  alternates: {
    canonical: "/services/handrails-railings/fence-systems/garden-gate",
  },
  openGraph: {
    title: "Garden Gate System | Asay Global",
    description:
      "Defined Entry, Lasting Security – Garden Gate System delivers a reliable and aesthetic gate solution that integrates seamlessly with fence and boundary systems.",
    url: "/services/handrails-railings/fence-systems/garden-gate",
    type: "website",
    siteName: "Asay Global",
    images: [
      {
        url: "/images/handrails-railings/fense-systems/garden-gate/R-Fence_Entrance.png",
        width: 1200,
        height: 630,
        alt: "Garden Gate System by Asay Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garden Gate System | Asay Global",
    description:
      "Complete your perimeter design with a durable, aesthetic garden gate that matches your fence system.",
    images: [
      "/images/handrails-railings/fense-systems/garden-gate/R-Fence_Entrance.png",
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

export default function GardenGateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


