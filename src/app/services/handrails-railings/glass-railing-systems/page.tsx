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

// Glass Railing Systems products
const products: ProductItem[] = [
  {
    id: "r6000",
    name: "R6000 Glass Railing System",
    slug: "r6000",
    description: "One of the most preferred continuous glass base systems thanks to its modern design and ease of installation. Ideal for terraces, entertainment venues, and high-rise buildings.",
    image: "/images/handrails-railings/glass-railing-systems/R6000-glass-railing-system/r6000-1024x571.webp"
  },
  {
    id: "r6050",
    name: "R6050 Glass Railing System",
    slug: "r6050",
    description: "Durable yet lightweight continuous glass base system designed for terraces and villas. Features compact aluminum profile and precise engineering for residential applications.",
    image: "/images/handrails-railings/glass-railing-systems/R6050-glass-railing-system/6050-1024x571.webp"
  },
  {
    id: "r6200",
    name: "R6200 Glass Railing System",
    slug: "r6200",
    description: "Oval profile design offering a softer and more aesthetic appearance. Engineered for easy installation and long-term durability in terraces, entertainment venues, and high-rise buildings.",
    image: "/images/handrails-railings/R6200-glass-railing-system/6200-1024x571.webp"
  },
  {
    id: "r1001",
    name: "R1001 Curved Glass Railing System",
    slug: "r1001",
    description: "Modular, segmented system that provides exceptional design flexibility for curved and non-linear applications. Ideal for high-rise buildings, shopping mall galleries, and curved balcony applications.",
    image: "/images/handrails-railings/glass-railing-systems/R1001-glass-railing-system/1001-1024x571.webp"
  },
  {
    id: "r6150",
    name: "R6150 Glass Railing System",
    slug: "r6150",
    description: "The R6150 Glass Railing System by Asay Global is distinguished by its installer-friendly design and reinforced structure. Ideal for terraces and high-rise buildings.",
    image: "/images/handrails-railings/glass-railing-systems/R6150-glass-railing-system/6150-1024x571.webp"
  },
  {
    id: "r1200",
    name: "R1200 Glass Railing System",
    slug: "r1200",
    description: "Side-mounted solution designed to maximize visual openness and efficient space utilization. Ideal for balconies and terraces.",
    image: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/1200-1024x571.webp"
  }
];

const BASE_PATH = "/services/handrails-railings/glass-railing-systems";

export default function GlassRailingSystemsPage() {
  const createUrl = (path: string) => path;

  // Schema.org structured data using utility function
  const collectionSchema = buildCollectionSchema(products, {
    name: "Glass Railing Systems by Asay Global",
    description:
      "Explore Asay Global's premium glass railing systems: R6000, R6050, R6200, R1001, R6150, R1200. Designed to deliver maximum transparency while ensuring high safety standards. Continuous glass base solutions, curved systems, and side-mounted options for modern architectural projects.",
    url: BASE_PATH,
    image:
      "/images/handrails-railings/glass-railing-systems/R6000-glass-railing-system/r6000-1024x571.webp",
    category: "Glass Railing Systems",
    material: ["Aluminum", "Glass"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Handrails & Railings", href: "/services/handrails-railings" },
      { label: "Glass Railing Systems", href: BASE_PATH },
    ],
  });

  return (
    <SiteLayout locale="en">
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
          {
            label: "Handrails & Railings",
            href: createUrl("/services/handrails-railings"),
          },
          { label: "Glass Railing Systems" },
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

