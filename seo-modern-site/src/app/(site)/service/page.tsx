import { PageHeader } from "@/components/page-header";
import { Gallery6 } from "@/components/gallery6";

export const metadata = {
  title: "Services Overview | Asay Global",
  description:
    "Discover Asay Global's service lines: steel framings, aluminum systems, architectural glass, decorative products.",
  keywords: [
    "services overview",
    "construction materials",
    "steel",
    "aluminum",
    "glass",
    "decorative",
  ],
  alternates: { canonical: "/service" },
  openGraph: {
    title: "Services Overview | Asay Global",
    description:
      "Full portfolio of architectural and engineering solutions for modern buildings.",
    url: "/service",
    type: "website",
  },
};

export default function ServicePage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Design, build, furnish — spaces tailored to the way you live"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <Gallery6
          items={[
            {
              id: "service-1",
              title: "Interior and Exterior Decorative Products",
              summary:
                "High-quality decorative materials for both interior and exterior applications, enhancing the aesthetic appeal of your projects.",
              url: "/services/interior-and-exterior-decorative-products",
              image:
                "/images/services/interior-exterior/Interior and Exterior Decorative Products - 1.jpg",
            },
            {
              id: "service-2",
              title: "Steel Framings",
              summary:
                "Robust steel structural solutions designed for durability and strength in commercial and industrial construction projects.",
              url: "/services/steel-framings",
              image: "/images/services/steel-structure/steel-framings-img-1.jpg",
            },
            {
              id: "service-3",
              title: "Aluminum Architectural Solutions",
              summary:
                "Modern aluminum systems and architectural solutions offering excellent performance and contemporary design possibilities.",
              url: "/services/aluminum-architectural-solutions",
              image:
                "/images/services/aluminum-solutions/Aluminum-Architectural-Solutions-img--1.jpg",
            },
            {
              id: "service-4",
              title: "Architectural Glass Solutions",
              summary:
                "Premium glass solutions for architectural applications, providing transparency, energy efficiency, and modern aesthetics.",
              url: "/services/architectural-glass-solutions",
              image:
                "/images/services/glass-solutions/Architectural-Glass-Solutions-img--1.jpg",
            },
          ]}
        />
      </div>
    </>
  );
}


