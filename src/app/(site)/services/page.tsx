"use client"

import { PageHeader } from "@/components/page-header";
import { Gallery6 } from "@/components/gallery6";
import { useEffect, useState } from 'react';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';

export default function ServicesPage() {
  const [locale, setLocale] = useState<'en' | 'fr' | 'es'>('en');

  useEffect(() => {
    const seg = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'en';
    setLocale(seg === 'fr' ? 'fr' : seg === 'es' ? 'es' : 'en');
  }, []);

  const messages = locale === 'fr' ? frMessages : locale === 'es' ? esMessages : enMessages;

  return (
    <>
      <PageHeader
        title={(messages as any).services.page_header.title}
        description={(messages as any).services.page_header.description}
        breadcrumbItems={[{ label: (messages as any).services.page_header.breadcrumbs.home, href: "/" }, { label: (messages as any).services.page_header.breadcrumbs.services }]}
      />
      <div className="container mx-auto px-6 py-16">
        <Gallery6
          demoUrl="/contact"
          heading={(messages as any).gallery.heading}
          readMore={(messages as any).gallery.read_more}
          items={[
            {
              id: "service-1",
              title: (messages as any).homepage.services.interior_exterior_decorative.title,
              summary: (messages as any).homepage.services.interior_exterior_decorative.summary,
              url: "/services/interior-and-exterior-decorative-products",
              image:
                "/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-1.jpg",
            },
            {
              id: "service-2",
              title: (messages as any).homepage.services.steel_framings.title,
              summary: (messages as any).homepage.services.steel_framings.summary,
              url: "/services/steel-framings",
              image: "/images/services/steel-structure/steel-framings-img-1.jpg",
            },
            {
              id: "service-3",
              title: (messages as any).homepage.services.aluminum_architectural.title,
              summary: (messages as any).homepage.services.aluminum_architectural.summary,
              url: "/services/aluminum-architectural-solutions",
              image:
                "/images/services/aluminum-solutions/Aluminum-Architectural-Solutions-img--1.jpg",
            },
            {
              id: "service-4",
              title: (messages as any).homepage.services.architectural_glass.title,
              summary: (messages as any).homepage.services.architectural_glass.summary,
              url: "/services/architectural-glass-solutions",
              image:
                "/images/services/glass-solutions/Architectural-Glass-Solutions-img--1.jpg",
            },
            {
              id: "service-5",
              title: (messages as any).homepage.services.upvc_systems.title,
              summary: (messages as any).homepage.services.upvc_systems.summary,
              url: "/services/u-pvc-systems",
              image:
                "/images/services/upvc-systems/pvc-window-and-door-system.jpg",
            },
          ]}
        />
      </div>
    </>
  );
}


