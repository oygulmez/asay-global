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

// Railing Systems products
const products: ProductItem[] = [
  {
    id: "rs10",
    name: "RS10 Railing System",
    slug: "rs10",
    description:
      "Round profile design delivering timeless aesthetics with structural safety for balconies and stairways.",
    image:
      "/images/handrails-railings/railing-systems/RS10-railing-systems/RS10-main-img.webp",
  },
  {
    id: "rs20",
    name: "RS20 Railing System",
    slug: "rs20",
    description:
      "Elegant linear form and enhanced structural detailing, offering a refined alternative for projects that require both visual clarity and robust protection.",
    image:
      "/images/handrails-railings/railing-systems/RS20-railing-systems/RS20.webp",
  },
  {
    id: "rs30",
    name: "RS30 Railing System",
    slug: "rs30",
    description:
      "Specifically designed for applications where maximum visibility and a clean architectural appearance are essential. Featuring an integrated glass holder design.",
    image:
      "/images/handrails-railings/railing-systems/RS30-railing-systems/RS30.webp",
  },
  {
    id: "sq10",
    name: "SQ10 Railing System",
    slug: "sq10",
    description:
      "Square profile design that delivers a strong, modern, and architectural appearance. Ideal for balcony and stairway applications.",
    image:
      "/images/handrails-railings/railing-systems/SQ10-railing-systems/SQ10.webp",
  },
  {
    id: "sq20",
    name: "SQ20 Railing System",
    slug: "sq20",
    description:
      "Balanced square profile and enhanced structural depth, offering a more pronounced architectural presence. Ideal for balcony and stairway applications.",
    image:
      "/images/handrails-railings/railing-systems/SQ20-railing-systems/SQ20.webp",
  },
  {
    id: "sq30",
    name: "SQ30 Railing System",
    slug: "sq30",
    description:
      "Heavier square profile and reinforced structural design, making it ideal for projects that demand a stronger visual impact and elevated safety perception.",
    image:
      "/images/handrails-railings/railing-systems/SQ30-railing-systems/SQ30.webp",
  },
];

const BASE_PATH = "/services/handrails-railings/railing-systems";

export default function RailingSystemsPage() {
  const createUrl = (path: string) => path;

  // Schema.org structured data using utility function
  const collectionSchema = buildCollectionSchema(products, {
    name: "Railing Systems by Asay Global",
    description:
      "Explore Asay Global's premium railing systems: RS10, RS20, RS30, SQ10, SQ20, SQ30. Engineered for safety, durability, and modern aesthetics in balconies, stairways, and terraces.",
    url: BASE_PATH,
    image:
      "/images/handrails-railings/railing-systems/RS10-railing-systems/RS10-main-img.webp",
    category: "Railing Systems",
    material: ["Aluminum", "Glass"],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Handrails & Railings", href: "/services/handrails-railings" },
      { label: "Railing Systems", href: BASE_PATH },
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
        title="Railing Systems"
        description="Premium railing systems engineered for safety, durability, and modern aesthetics."
        breadcrumbItems={[
          { label: "Home", href: createUrl("/") },
          { label: "Services", href: createUrl("/services") },
          {
            label: "Handrails & Railings",
            href: createUrl("/services/handrails-railings"),
          },
          { label: "Railing Systems" },
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

