"use client";

import { PageHeader } from "@/components/page-header";
import { PageContainer } from "@/components/page-container";
import { ProductGrid } from "@/components/product-grid";
import { ProductCard } from "@/components/product-card";
import { SiteLayout } from "@/components/site-layout";
import Script from 'next/script';
import { buildUPVCSystemsSchema } from '@/lib/services-schemas';
import enMessages from "@/messages/en.json";

export default function UPVCSystemsPage() {
  const schema = buildUPVCSystemsSchema();
  const messages = enMessages;

  const t = (messages as any).upvc_systems;

  // Helper function to create locale-aware URLs
  const createUrl = (path: string) => path;

  const products = [
    {
      id: "window-door",
      name: t.window_door_systems.title,
      slug: "window-door-systems",
      description: t.window_door_systems.description,
      image: "/images/services/upvc-systems/pvc-window-and-door-system.webp",
      cta: t.window_door_systems.view_products,
    },
    {
      id: "sliding",
      name: t.sliding_systems.title,
      slug: "sliding-systems",
      description: t.sliding_systems.description,
      image: "/images/services/upvc-systems/pvc-sliding-systems-1.webp",
      cta: t.sliding_systems.view_products,
    },
  ];

  const content = (
    <>
      <Script
        id="upvc-systems-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHeader
        title={t.page_header.title}
        description={t.page_header.description}
        breadcrumbItems={[
          { label: t.page_header.breadcrumbs.home, href: createUrl("/") },
          {
            label: t.page_header.breadcrumbs.services,
            href: createUrl("/services"),
          },
          { label: t.page_header.breadcrumbs.upvc_systems },
        ]}
      />

      <PageContainer>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                name: product.name,
                slug: product.slug,
                description: product.description,
                image: product.image,
              }}
              basePath="/services/u-pvc-systems"
              ctaText={product.cta}
            />
          ))}
        </ProductGrid>
      </PageContainer>
    </>
  );

  return <SiteLayout locale="en">{content}</SiteLayout>;
}


