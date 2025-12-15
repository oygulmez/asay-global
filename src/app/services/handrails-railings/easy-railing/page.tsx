"use client";

import { PageHeader } from "@/components/page-header";
import { PageContainer } from "@/components/page-container";
import { ProductGrid } from "@/components/product-grid";
import { ProductCard } from "@/components/product-card";
import { SiteLayout } from "@/components/site-layout";
import Script from "next/script";
import {
  buildCollectionSchema,
  type ProductItem,
} from "@/lib/schema-utils";

// Easy Railing Systems products
const products: ProductItem[] = [
  {
    id: "rs50",
    name: "RS50 Easy Railing System",
    slug: "rs50",
    description:
      "Smart, installer-friendly easy railing system designed to significantly reduce installation time while maintaining safety and contemporary design for balconies, stairways, and terraces.",
    image:
      "/images/handrails-railings/easy-railing-systems/RS50-railing-system/RS50-A.webp",
  },
  {
    id: "rs50c",
    name: "RS50-C Easy Railing System",
    slug: "rs50-c",
    description:
      "Glass-integrated version of the RS50 Easy Railing System, combining fast installation with enhanced transparency for modern residential balconies, stairways and terraces.",
    image:
      "/images/handrails-railings/easy-railing-systems/RS50-C-railing-system/RS50-C.webp",
  },
  {
    id: "sq50",
    name: "SQ50 Easy Railing System",
    slug: "sq50",
    description:
      "Easy-to-install square profile railing system offering a clean, minimal and contemporary appearance for balconies, stairways and terraces, ideal for residential projects that require speed and consistency.",
    image:
      "/images/handrails-railings/easy-railing-systems/SQ50-railing-system/RS50-A (1).webp",
  },
  {
    id: "lm10",
    name: "LM10 Railing System",
    slug: "lm10",
    description:
      "Features a lamella-style design creating architectural rhythm and partial privacy. Ideal for façades, balconies, and shading applications.",
    image:
      "/images/handrails-railings/easy-railing-systems/LM10-railing-system/LM10.webp",
  },
];

const BASE_PATH = "/services/handrails-railings/easy-railing";

export default function EasyRailingSystemsPage() {
  const createUrl = (path: string) => path;

  // Schema.org structured data using utility function
  const collectionSchema = buildCollectionSchema(products, {
    name: "Easy Railing Systems by Asay Global",
    description:
      "Explore Asay Global's Easy Railing solutions including the RS50 Easy Railing System – pre-engineered, installer-friendly and designed for fast installation in residential projects.",
    url: BASE_PATH,
    image:
      "/images/handrails-railings/easy-railing-systems/RS50-railing-system/RS50-A_Dikme-768x768.webp",
    category: "Easy Railing Systems",
    material: ["Aluminum"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Handrails & Railings", href: "/services/handrails-railings" },
      { label: "Easy Railing Systems", href: BASE_PATH },
    ],
  });

  return (
    <SiteLayout locale="en">
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

      <PageContainer>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              basePath={BASE_PATH}
            />
          ))}
        </ProductGrid>
      </PageContainer>
    </SiteLayout>
  );
}


