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

const products: ProductItem[] = [
  {
    id: "r-fence",
    name: "R-Fence System",
    slug: "r-fence-system",
    description:
      "Modular aluminum fence system with adjustable angles between 60° and 180°, providing structured protection and design flexibility for residential and commercial boundaries.",
    image:
      "/images/handrails-railings/fense-systems/r-fence-system/R-Fence_Garden.webp",
  },
  {
    id: "garden-gate",
    name: "Garden Gate System",
    slug: "garden-gate",
    description:
      "Durable aluminum garden gate system designed to complement fence and perimeter solutions with secure, aesthetic entrances.",
    image:
      "/images/handrails-railings/fense-systems/garden-gate/R-Fence_Entrance.webp",
  },
];

const BASE_PATH = "/services/handrails-railings/fence-systems";

export default function FenceSystemsPage() {
  const createUrl = (path: string) => path;

  // Schema.org structured data using utility function
  const collectionSchema = buildCollectionSchema(products, {
    name: "Fence Systems by Asay Global",
    description:
      "Explore Asay Global Fence Systems including the R-Fence System – modular aluminum fence solution with adjustable angles and structured protection.",
    url: BASE_PATH,
    image:
      "/images/handrails-railings/fense-systems/r-fence-system/R-Fence_Garden.webp",
    category: "Fence Systems",
    material: ["Aluminum"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Handrails & Railings", href: "/services/handrails-railings" },
      { label: "Fence Systems", href: BASE_PATH },
    ],
  });

  return (
    <SiteLayout locale="en">
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


