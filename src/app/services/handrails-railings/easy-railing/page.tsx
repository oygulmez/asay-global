"use client"

import { PageHeader } from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyContactButtons } from "@/components/sticky-contact-buttons";
import { ChevronRight } from "lucide-react";
import enMessages from "@/messages/en.json";
import Script from "next/script";

// Easy Railing Systems products
const products = [
  {
    id: "rs50",
    name: "RS50 Easy Railing System",
    slug: "rs50",
    description:
      "Smart, installer-friendly easy railing system designed to significantly reduce installation time while maintaining safety and contemporary design for balconies, stairways, and terraces.",
    image:
      "/images/handrails-railings/easy-railing-systems/RS50-railing-system/RS50-A.png",
  },
  {
    id: "rs50c",
    name: "RS50-C Easy Railing System",
    slug: "rs50-c",
    description:
      "Glass-integrated version of the RS50 Easy Railing System, combining fast installation with enhanced transparency for modern residential balconies, stairways and terraces.",
    image:
      "/images/handrails-railings/easy-railing-systems/RS50-C-railing-system/RS50-C.png",
  },
  {
    id: "sq50",
    name: "SQ50 Easy Railing System",
    slug: "sq50",
    description:
      "Easy-to-install square profile railing system offering a clean, minimal and contemporary appearance for balconies, stairways and terraces, ideal for residential projects that require speed and consistency.",
    image:
      "/images/handrails-railings/easy-railing-systems/SQ50-railing-system/RS50-A (1).png",
  },
  {
    id: "lm10",
    name: "LM10 Railing System",
    slug: "lm10",
    description:
      "Features a lamella-style design creating architectural rhythm and partial privacy. Ideal for façades, balconies, and shading applications.",
    image:
      "/images/handrails-railings/easy-railing-systems/LM10-railing-system/LM10.png",
  },
];

export default function EasyRailingSystemsPage() {
  const messages = enMessages;

  // Helper function to create locale-aware URLs
  const createUrl = (path: string) => path;

  // Schema.org structured data for collection page
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Easy Railing Systems by Asay Global",
    description:
      "Explore Asay Global's Easy Railing solutions including the RS50 Easy Railing System – pre-engineered, installer-friendly and designed for fast installation in residential projects.",
    url: "https://www.asayglobal.com/services/handrails-railings/easy-railing",
    image:
      "https://www.asayglobal.com/images/handrails-railings/easy-railing-systems/RS50-railing-system/RS50-A_Dikme-768x768.png",
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
          url: `https://www.asayglobal.com/services/handrails-railings/easy-railing/${product.slug}`,
          image: `https://www.asayglobal.com${product.image}`,
          brand: {
            "@type": "Brand",
            name: "Asay Global",
          },
          category: "Easy Railing Systems",
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
          name: "Easy Railing Systems",
          item: "https://www.asayglobal.com/services/handrails-railings/easy-railing",
        },
      ],
    },
  };

  const content = (
    <>
      <Script
        id="easy-railing-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <PageHeader
        title="Easy Railing Systems"
        description="Pre-engineered, installer-friendly easy railing systems that reduce installation time while maintaining safety and clean architectural aesthetics."
        breadcrumbItems={[
          { label: "Home", href: createUrl("/") },
          { label: "Services", href: createUrl("/services") },
          {
            label: "Handrails & Railings",
            href: createUrl("/services/handrails-railings"),
          },
          { label: "Easy Railing Systems" },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={createUrl(
                  `/services/handrails-railings/easy-railing/${product.slug}`
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


