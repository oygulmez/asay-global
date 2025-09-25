import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Asay Global — Architectural & Engineering Solutions",
  description:
    "Premium building solutions: steel framings, aluminum systems, architectural glass and decorative products. 22+ years, 38 countries.",
  keywords: [
    "Asay Global",
    "architectural solutions",
    "steel framings",
    "aluminum systems",
    "architectural glass",
    "decorative products",
    "construction materials",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Asay Global — Architectural & Engineering Solutions",
    description:
      "Premium building solutions: steel framings, aluminum systems, architectural glass and decorative products.",
    url: "/",
    type: "website",
  },
};

export const revalidate = 60

import { HeroSectionOne } from "@/components/hero-section-1";

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="container mx-auto px-0 md:px-4 py-0">
        <HeroSectionOne />
      </section>
    </main>
  )
}


