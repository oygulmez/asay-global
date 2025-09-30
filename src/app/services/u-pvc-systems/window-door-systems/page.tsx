"use client"

import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';
import { useState, useEffect } from 'react';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';

export default function WindowDoorCategoryPage() {
  const [locale, setLocale] = useState<'en' | 'fr' | 'es'>('en');
  const [isRootPage, setIsRootPage] = useState(false);
  
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/fr/')) {
      setLocale('fr');
    } else if (path.startsWith('/es/')) {
      setLocale('es');
    } else {
      setLocale('en');
    }
    setIsRootPage(!path.includes('/fr/') && !path.includes('/es/'));
  }, []);
  
  const messages = locale === 'fr' ? frMessages : locale === 'es' ? esMessages : enMessages;
  const t = (messages as any).upvc_systems.window_door_category;
  
  const createUrl = (path: string) => {
    if (locale === 'en') return path;
    return `/${locale}${path}`;
  };

  // Safety check
  if (!t || !t.page_header) {
    return <div>Loading...</div>;
  }

  // Root sayfada Navbar/Footer sarmalaması yapacağız

  const content = (
    <>
      <PageHeader
        title={t.page_header.title}
        description={t.page_header.description}
        breadcrumbItems={[
          { label: t.page_header.breadcrumbs.home, href: createUrl("/") },
          { label: t.page_header.breadcrumbs.services, href: createUrl("/services") },
          { label: t.page_header.breadcrumbs.upvc_systems, href: createUrl("/services/u-pvc-systems") },
          { label: t.page_header.breadcrumbs.window_door_systems },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product card: Legend */}
        <Link href={createUrl("/services/u-pvc-systems/legend-window-and-door-system")} aria-label={t.products.legend.title} className="group block overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/services/upvc-systems/legend-thmb.jpg"
              alt={t.products.legend.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>{t.products.legend.title}</h3>
            <p className="text-sm mb-4" style={{ color: "#565656" }}>
              {t.products.legend.description}
            </p>
            <span
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "#333333" }}
            >
              {t.products.legend.view_product}
            </span>
          </div>
        </Link>

        {/* Product card: Legend Art */}
        <Link href={createUrl("/services/u-pvc-systems/legend-art")} aria-label={t.products.legend_art.title} className="group block overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/services/upvc-systems/legend-thmb.jpg"
              alt={t.products.legend_art.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>{t.products.legend_art.title}</h3>
            <p className="text-sm mb-4" style={{ color: "#565656" }}>
              {t.products.legend_art.description}
            </p>
            <span
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "#333333" }}
            >
              {t.products.legend_art.view_product}
            </span>
          </div>
        </Link>
        
        {/* Product card: Zendow */}
        <Link href={createUrl("/services/u-pvc-systems/zendow")} aria-label={t.products.zendow.title} className="group block overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/services/upvc-systems/zendow-thmb.jpg"
              alt={t.products.zendow.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>{t.products.zendow.title}</h3>
            <p className="text-sm mb-4" style={{ color: "#565656" }}>
              {t.products.zendow.description}
            </p>
            <span
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "#333333" }}
            >
              {t.products.zendow.view_product}
            </span>
          </div>
        </Link>
      </div>
        </div>
      </div>
    </>
  );

  // If this is a root page, wrap with Navbar/Footer
  if (isRootPage) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar locale="en" />
        <main className="flex-1">
          {content}
        </main>
        <Footer locale="en" />
        <StickyContactButtons />
      </div>
    );
  }

  // If imported by locale pages, return just content
  return content;
}


