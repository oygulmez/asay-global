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

// Glass Railing Systems products
const products = [
  {
    id: "r6000",
    name: "R6000 Glass Railing System",
    slug: "r6000",
    description: "One of the most preferred continuous glass base systems thanks to its modern design and ease of installation. Ideal for terraces, entertainment venues, and high-rise buildings.",
    image: "/images/handrails-railings/glass-railing-systems/R6000-glass-railing-system/r6000-1024x571.jpg"
  },
  {
    id: "r6050",
    name: "R6050 Glass Railing System",
    slug: "r6050",
    description: "Durable yet lightweight continuous glass base system designed for terraces and villas. Features compact aluminum profile and precise engineering for residential applications.",
    image: "/images/handrails-railings/glass-railing-systems/R6050-glass-railing-system/6050-1024x571.jpg"
  },
  {
    id: "r6200",
    name: "R6200 Glass Railing System",
    slug: "r6200",
    description: "Oval profile design offering a softer and more aesthetic appearance. Engineered for easy installation and long-term durability in terraces, entertainment venues, and high-rise buildings.",
    image: "/images/handrails-railings/R6200-glass-railing-system/6200-1024x571.jpg"
  },
  {
    id: "r1001",
    name: "R1001 Curved Glass Railing System",
    slug: "r1001",
    description: "Modular, segmented system that provides exceptional design flexibility for curved and non-linear applications. Ideal for high-rise buildings, shopping mall galleries, and curved balcony applications.",
    image: "/images/handrails-railings/glass-railing-systems/R1001-glass-railing-system/1001-1024x571.jpg"
  },
  {
    id: "r6150",
    name: "R6150 Glass Railing System",
    slug: "r6150",
    description: "The R6150 Glass Railing System by Asay Global is distinguished by its installer-friendly design and reinforced structure. Ideal for terraces and high-rise buildings.",
    image: "/images/handrails-railings/glass-railing-systems/R6150-glass-railing-system/6150-1024x571.jpg"
  },
  {
    id: "r1200",
    name: "R1200 Glass Railing System",
    slug: "r1200",
    description: "Side-mounted solution designed to maximize visual openness and efficient space utilization. Ideal for balconies and terraces.",
    image: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/1200-1024x571.jpg"
  }
];

export default function GlassRailingSystemsPage() {
  const messages = enMessages;

  // Helper function to create locale-aware URLs
  const createUrl = (path: string) => path;

  // Schema.org structured data for collection page
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Glass Railing Systems by Asay Global",
    "description": "Explore Asay Global's premium glass railing systems: R6000, R6050, R6200, R1001, R6150, R1200. Designed to deliver maximum transparency while ensuring high safety standards. Continuous glass base solutions, curved systems, and side-mounted options for modern architectural projects.",
    "url": "https://www.asayglobal.com/services/handrails-railings/glass-railing-systems",
    "image": "https://www.asayglobal.com/images/handrails-railings/glass-railing-systems/R6000-glass-railing-system/r6000-1024x571.jpg",
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
          "url": `https://www.asayglobal.com/services/handrails-railings/glass-railing-systems/${product.slug}`,
          "image": `https://www.asayglobal.com${product.image}`,
          "brand": {
            "@type": "Brand",
            "name": "Asay Global"
          },
          "category": "Glass Railing Systems",
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
          "name": "Glass Railing Systems",
          "item": "https://www.asayglobal.com/services/handrails-railings/glass-railing-systems"
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
        title="Glass Railing Systems"
        description="Explore Asay Global's premium glass railing systems: R6000, R6050, R6200, R1001, R6150, R1200. Designed to deliver maximum transparency while ensuring high safety standards."
        breadcrumbItems={[
          { label: "Home", href: createUrl("/") },
          { label: "Services", href: createUrl("/services") },
          { label: "Handrails & Railings", href: createUrl("/services/handrails-railings") },
          { label: "Glass Railing Systems" }
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={createUrl(`/services/handrails-railings/glass-railing-systems/${product.slug}`)}
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

