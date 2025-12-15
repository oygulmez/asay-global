"use client";

import { PageHeader } from "@/components/page-header";
import { PageContainer } from "@/components/page-container";
import { SiteLayout } from "@/components/site-layout";
import { Gallery6 } from "@/components/gallery6";
import enMessages from "@/messages/en.json";

export default function ServicesPage() {
  const messages = enMessages;
  const createUrl = (path: string) => path;

  return (
    <SiteLayout locale="en">
      <PageHeader
        title={(messages as any).services.page_header.title}
        description={(messages as any).services.page_header.description}
        breadcrumbItems={[
          {
            label: (messages as any).services.page_header.breadcrumbs.home,
            href: createUrl("/"),
          },
          {
            label: (messages as any).services.page_header.breadcrumbs.services,
          },
        ]}
      />
      <PageContainer>
        <Gallery6
          demoUrl={createUrl("/contact")}
          heading={(messages as any).gallery.heading}
          readMore={(messages as any).gallery.read_more}
          items={[
            {
              id: "service-1",
              title: (messages as any).homepage.services.interior_exterior_decorative
                .title,
              summary: (messages as any).homepage.services.interior_exterior_decorative
                .summary,
              url: createUrl("/services/interior-and-exterior-decorative-products"),
              image:
                "/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-1.webp",
            },
            {
              id: "service-2",
              title: (messages as any).homepage.services.steel_framings.title,
              summary: (messages as any).homepage.services.steel_framings.summary,
              url: createUrl("/services/steel-framings"),
              image: "/images/services/steel-structure/steel-framings-img-1.webp",
            },
            {
              id: "service-3",
              title: (messages as any).homepage.services.aluminum_architectural
                .title,
              summary: (messages as any).homepage.services.aluminum_architectural
                .summary,
              url: createUrl("/services/aluminum-architectural-solutions"),
              image:
                "/images/services/aluminum-solutions/Aluminum-Architectural-Solutions-img--1.webp",
            },
            {
              id: "service-4",
              title: (messages as any).homepage.services.architectural_glass.title,
              summary: (messages as any).homepage.services.architectural_glass.summary,
              url: createUrl("/services/architectural-glass-solutions"),
              image:
                "/images/services/glass-solutions/Architectural-Glass-Solutions-img--1.webp",
            },
            {
              id: "service-5",
              title: (messages as any).homepage.services.upvc_systems.title,
              summary: (messages as any).homepage.services.upvc_systems.summary,
              url: createUrl("/services/u-pvc-systems"),
              image: "/images/services/upvc-systems/pvc-window-and-door-system.webp",
            },
          ]}
        />
      </PageContainer>
    </SiteLayout>
  );
}


