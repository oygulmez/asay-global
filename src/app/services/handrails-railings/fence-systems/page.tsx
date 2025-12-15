"use client";

import { PageHeader } from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyContactButtons } from "@/components/sticky-contact-buttons";
import { ChevronRight } from "lucide-react";
import Script from "next/script";

const products = [
  {
    id: "r-fence",
    name: "R-Fence System",
    slug: "r-fence-system",
    description:
      "Modular aluminum fence system with adjustable angles between 60° and 180°, providing structured protection and design flexibility for residential and commercial boundaries.",
    image:
      "/images/handrails-railings/fense-systems/r-fence-system/R-Fence_Garden.png",
  },
  {
    id: "garden-gate",
    name: "Garden Gate System",
    slug: "garden-gate",
    description:
      "Durable aluminum garden gate system designed to complement fence and perimeter solutions with secure, aesthetic entrances.",
    image:
      "/images/handrails-railings/fense-systems/garden-gate/R-Fence_Entrance.png",
  },
];

export default function FenceSystemsPage() {
  const createUrl = (path: string) => path;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Fence Systems by Asay Global",
    description:
      "Explore Asay Global Fence Systems including the R-Fence System – modular aluminum fence solution with adjustable angles and structured protection.",
    url: "https://www.asayglobal.com/services/handrails-railings/fence-systems",
    image:
      "https://www.asayglobal.com/images/handrails-railings/fense-systems/r-fence-system/R-Fence_Garden.png",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          url: `https://www.asayglobal.com/services/handrails-railings/fence-systems/${product.slug}`,
          image: `https://www.asayglobal.com${product.image}`,
          brand: {
            "@type": "Brand",
            name: "Asay Global",
          },
          category: "Fence Systems",
          material: ["Aluminum"],
          applicationCategory: "Building Material",
        },
      })),
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.asayglobal.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.asayglobal.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Handrails & Railings",
          item: "https://www.asayglobal.com/services/handrails-railings",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Fence Systems",
          item:
            "https://www.asayglobal.com/services/handrails-railings/fence-systems",
        },
      ],
    },
  };

  const content = (
    <>
      <Script
        id="fence-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <PageHeader
        title="Fence Systems"
        description="Modular aluminum fence systems providing secure boundaries, flexible angles and structured protection for residential and commercial projects."
        breadcrumbItems={[
          { label: "Home", href: createUrl("/") },
          { label: "Services", href: createUrl("/services") },
          {
            label: "Handrails & Railings",
            href: createUrl("/services/handrails-railings"),
          },
          { label: "Fence Systems" },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={createUrl(
                  `/services/handrails-railings/fence-systems/${product.slug}`,
                )}
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
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "black" }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-sm mb-4 flex-1"
                    style={{ color: "#565656" }}
                  >
                    {product.description}
                  </p>
                  <span className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white transition-colors mt-auto bg-[#333333] hover:bg-[#998675] group-hover:bg-[#998675]">
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
      <main className="flex-1">{content}</main>
      <Footer locale="en" />
      <StickyContactButtons />
    </div>
  );
}


