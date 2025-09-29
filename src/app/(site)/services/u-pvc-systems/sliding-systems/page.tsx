"use client"

import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import { useState, useEffect } from 'react';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';

export default function SlidingCategoryPage() {
  const [locale, setLocale] = useState<'en' | 'fr' | 'es'>('en');
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/fr/')) {
        setLocale('fr');
      } else if (path.startsWith('/es/')) {
        setLocale('es');
      } else {
        setLocale('en');
      }
    }
  }, []);
  
  const messages = locale === 'fr' ? frMessages : locale === 'es' ? esMessages : enMessages;
  const t = (messages as any).upvc_systems.sliding_category;
  
  const createUrl = (path: string) => {
    if (locale === 'en') return path;
    return `/${locale}${path}`;
  };

  // Safety check
  if (!t || !t.page_header) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageHeader
        title={t.page_header.title}
        description={t.page_header.description}
        breadcrumbItems={[
          { label: t.page_header.breadcrumbs.home, href: createUrl("/") },
          { label: t.page_header.breadcrumbs.services, href: createUrl("/services") },
          { label: t.page_header.breadcrumbs.upvc_systems, href: createUrl("/services/u-pvc-systems") },
          { label: t.page_header.breadcrumbs.sliding_systems },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Legend Plus PVC Door System card */}
            <Link href={createUrl("/services/u-pvc-systems/legend-surme-plus")} className="group block overflow-hidden rounded-xl border border-gray-200 bg-white" aria-label={t.products.legend_surme_plus.title}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/services/upvc-systems/legend-plus-pvc.jpg" alt={t.products.legend_surme_plus.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>{t.products.legend_surme_plus.title}</h3>
                <p className="text-sm mb-4" style={{ color: "#565656" }}>{t.products.legend_surme_plus.description}</p>
                <span className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white" style={{ backgroundColor: "#333333" }}>{t.products.legend_surme_plus.view_product}</span>
              </div>
            </Link>

            {/* PVC Sliding Door System card */}
            <Link href={createUrl("/services/u-pvc-systems/pvc-sliding-door-system")} className="group block overflow-hidden rounded-xl border border-gray-200 bg-white" aria-label={t.products.pvc_sliding_door.title}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/services/upvc-systems/sliding-pvc.jpg" alt={t.products.pvc_sliding_door.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>{t.products.pvc_sliding_door.title}</h3>
                <p className="text-sm mb-4" style={{ color: "#565656" }}>{t.products.pvc_sliding_door.description}</p>
                <span className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white" style={{ backgroundColor: "#333333" }}>{t.products.pvc_sliding_door.view_product}</span>
              </div>
            </Link>

            {/* HS76 Sliding card */}
            <Link href={createUrl("/services/u-pvc-systems/hs76-sliding")} className="group block overflow-hidden rounded-xl border border-gray-200 bg-white" aria-label={t.products.hs76.title}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/services/upvc-systems/hs76-pvc.jpg" alt={t.products.hs76.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>{t.products.hs76.title}</h3>
                <p className="text-sm mb-4" style={{ color: "#565656" }}>{t.products.hs76.description}</p>
                <span className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white" style={{ backgroundColor: "#333333" }}>{t.products.hs76.view_product}</span>
              </div>
            </Link>

            {/* Slimslide card */}
            <Link href={createUrl("/services/u-pvc-systems/slimslide")} className="group block overflow-hidden rounded-xl border border-gray-200 bg-white" aria-label={t.products.slimslide.title}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/services/upvc-systems/slimslide-pvc.jpg" alt={t.products.slimslide.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>{t.products.slimslide.title}</h3>
                <p className="text-sm mb-4" style={{ color: "#565656" }}>{t.products.slimslide.description}</p>
                <span className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white" style={{ backgroundColor: "#333333" }}>{t.products.slimslide.view_product}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


