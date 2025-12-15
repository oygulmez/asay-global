"use client";

import { PageHeader } from "@/components/page-header";
import { PageContainer } from "@/components/page-container";
import { ProductGrid } from "@/components/product-grid";
import { ProductCard } from "@/components/product-card";
import { SiteLayout } from "@/components/site-layout";
import enMessages from "@/messages/en.json";

export default function SlidingCategoryPage() {
  const messages = enMessages;
  const t = (messages as any).upvc_systems.sliding_category;

  const createUrl = (path: string) => path;

  // Safety check
  if (!t || !t.page_header) {
    return <div>Loading...</div>;
  }

  // Fallbacks for product keys across locales (legend_surme_plus was renamed to legend_sliding_plus)
  const productsData = (t as any).products || {};
  const legendPlus = productsData.legend_sliding_plus || productsData.legend_surme_plus || {};
  const pvcSlidingDoor = productsData.pvc_sliding_door || {};
  const hs76 = productsData.hs76 || {};
  const slimslide = productsData.slimslide || {};

  const products = [
    {
      id: "legend-plus",
      name: legendPlus.title,
      slug: "legend-sliding-plus",
      description: legendPlus.description,
      image: "/images/services/upvc-systems/legend-plus-pvc.webp",
      cta: legendPlus.view_product,
    },
    {
      id: "pvc-sliding-door",
      name: pvcSlidingDoor.title,
      slug: "pvc-sliding-door-system",
      description: pvcSlidingDoor.description,
      image: "/images/services/upvc-systems/sliding-pvc.webp",
      cta: pvcSlidingDoor.view_product,
    },
    {
      id: "hs76",
      name: hs76.title,
      slug: "hs76-sliding",
      description: hs76.description,
      image: "/images/services/upvc-systems/hs76-pvc.webp",
      cta: hs76.view_product,
    },
    {
      id: "slimslide",
      name: slimslide.title,
      slug: "slimslide",
      description: slimslide.description,
      image: "/images/services/upvc-systems/slimslide-pvc.webp",
      cta: slimslide.view_product,
    },
  ].filter((p) => p.name); // güvenlik için boş title'ları ele

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
          { label: t.page_header.breadcrumbs.sliding_systems },
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

