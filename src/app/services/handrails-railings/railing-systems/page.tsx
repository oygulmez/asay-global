"use client"

import { PageHeader } from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';
import { ChevronRight } from "lucide-react";
import enMessages from '@/messages/en.json';
import Script from "next/script";

// Railing Systems products
const products = [
  {
    id: "rs10",
    name: "RS10 Railing System",
    slug: "rs10",
    description: "Round profile design delivering timeless aesthetics with structural safety for balconies and stairways.",
    image: "/images/handrails-railings/railing-systems/RS10-railing-systems/RS10-main-img.jpg"
  },
  {
    id: "rs20",
    name: "RS20 Railing System",
    slug: "rs20",
    description: "Elegant linear form and enhanced structural detailing, offering a refined alternative for projects that require both visual clarity and robust protection.",
    image: "/images/handrails-railings/railing-systems/RS20-railing-systems/RS20.jpg"
  },
  {
    id: "rs30",
    name: "RS30 Railing System",
    slug: "rs30",
    description: "Specifically designed for applications where maximum visibility and a clean architectural appearance are essential. Featuring an integrated glass holder design.",
    image: "/images/handrails-railings/railing-systems/RS30-railing-systems/RS30.jpg"
  },
  {
    id: "sq10",
    name: "SQ10 Railing System",
    slug: "sq10",
    description: "Square profile design that delivers a strong, modern, and architectural appearance. Ideal for balcony and stairway applications.",
    image: "/images/handrails-railings/railing-systems/SQ10-railing-systems/SQ10.jpg"
  },
  {
    id: "sq20",
    name: "SQ20 Railing System",
    slug: "sq20",
    description: "Balanced square profile and enhanced structural depth, offering a more pronounced architectural presence. Ideal for balcony and stairway applications.",
    image: "/images/handrails-railings/railing-systems/SQ20-railing-systems/SQ20.jpg"
  },
  {
    id: "sq30",
    name: "SQ30 Railing System",
    slug: "sq30",
    description: "Heavier square profile and reinforced structural design, making it ideal for projects that demand a stronger visual impact and elevated safety perception.",
    image: "/images/handrails-railings/railing-systems/SQ30-railing-systems/SQ30.jpg"
  }
];

export default function RailingSystemsPage() {
  const messages = enMessages;
  
  // Helper function to create locale-aware URLs
  const createUrl = (path: string) => path;

  // Schema.org structured data for collection page
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Railing Systems by Asay Global",
    "description": "Explore Asay Global's premium railing systems: RS10, RS20, RS30, SQ10, SQ20, SQ30. Engineered for safety, durability, and modern aesthetics in balconies, stairways, and terraces.",
    "url": "https://www.asayglobal.com/services/handrails-railings/railing-systems",
    "image": "https://www.asayglobal.com/images/handrails-railings/railing-systems/RS10-railing-systems/RS10-main-img.jpg",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": products.length,
      "itemListElement": products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "url": `https://www.asayglobal.com/services/handrails-railings/railing-systems/${product.slug}`,
          "image": `https://www.asayglobal.com${product.image}`,
          "brand": {
            "@type": "Brand",
            "name": "Asay Global"
          },
          "category": "Railing Systems",
          "material": ["Aluminum", "Glass"],
          "applicationCategory": "Building Material"
        }
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.asayglobal.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.asayglobal.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Handrails & Railings",
          "item": "https://www.asayglobal.com/services/handrails-railings"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Railing Systems",
          "item": "https://www.asayglobal.com/services/handrails-railings/railing-systems"
        }
      ]
    }
  };

  const content = (
    <>
      <Script
        id="collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <PageHeader
        title="Railing Systems"
        description="Premium railing systems engineered for safety, durability, and modern aesthetics."
        breadcrumbItems={[
          { label: "Home", href: createUrl("/") }, 
          { label: "Services", href: createUrl("/services") }, 
          { label: "Handrails & Railings", href: createUrl("/services/handrails-railings") },
          { label: "Railing Systems" }
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-8">
            {products.map((product) => (
              <Link 
                key={product.id}
                href={createUrl(`/services/handrails-railings/railing-systems/${product.slug}`)} 
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 col-span-12 sm:col-span-6 lg:col-span-4"
                aria-label={product.name}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover bg-white transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>
                    {product.name}
                  </h3>
                  <p className="text-sm mb-4 flex-1" style={{ color: "#565656" }}>
                    {product.description}
                  </p>
                  <span
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white transition-colors mt-auto bg-[#333333] hover:bg-[#998675] group-hover:bg-[#998675]"
                  >
                    View Product
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale="en" />
      <main className="flex-1">
        {content}
      </main>
      <Footer locale="en" />
      <StickyContactButtons />
    </div>
  );
}

