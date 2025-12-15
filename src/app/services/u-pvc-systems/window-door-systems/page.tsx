"use client";

import { PageHeader } from "@/components/page-header";
import { PageContainer } from "@/components/page-container";
import { ProductGrid } from "@/components/product-grid";
import { ProductCard } from "@/components/product-card";
import { SiteLayout } from "@/components/site-layout";
import enMessages from "@/messages/en.json";

export default function WindowDoorCategoryPage() {
  const messages = enMessages;
  const t = (messages as any).upvc_systems.window_door_category;

  const createUrl = (path: string) => path;

  // Safety check
  if (!t || !t.page_header) {
    return <div>Loading...</div>;
  }

  const products = [
    {
      id: "legend",
      name: t.products.legend.title,
      slug: "legend-window-and-door-system",
      description: t.products.legend.description,
      image: "/images/services/upvc-systems/legend-thmb.webp",
      cta: t.products.legend.view_product,
    },
    {
      id: "legend-art",
      name: t.products.legend_art.title,
      slug: "legend-art",
      description: t.products.legend_art.description,
      image: "/images/services/upvc-systems/legend-thmb.webp",
      cta: t.products.legend_art.view_product,
    },
    {
      id: "zendow",
      name: t.products.zendow.title,
      slug: "zendow",
      description: t.products.zendow.description,
      image: "/images/services/upvc-systems/zendow-thmb.webp",
      cta: t.products.zendow.view_product,
    },
  ];

  const content = (
    <>
      <PageHeader
        title={t.page_header.title}
        description={t.page_header.description}
        breadcrumbItems={[
          { label: t.page_header.breadcrumbs.home, href: createUrl("/") },
          {
            label: t.page_header.breadcrumbs.services,
            href: createUrl("/services"),
          },
          {
            label: t.page_header.breadcrumbs.upvc_systems,
            href: createUrl("/services/u-pvc-systems"),
          },
          { label: t.page_header.breadcrumbs.window_door_systems },
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

