"use client"

import { PageHeader } from "@/components/page-header";
import { ThermometerSnowflake, Ruler, Volume2 } from "lucide-react";
import CallToAction from "@/components/call-to-action";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';
import { useState, useEffect } from 'react';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';


export default function PVCSlidingDoorSystemPage() {
  const [locale, setLocale] = useState<'en' | 'fr' | 'es'>('en');
  const [messages, setMessages] = useState<any>(enMessages);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      let currentLocale: 'en' | 'fr' | 'es' = 'en';
      if (path.startsWith('/fr/')) {
        currentLocale = 'fr';
      } else if (path.startsWith('/es/')) {
        currentLocale = 'es';
      }
      setLocale(currentLocale);
      setMessages(currentLocale === 'fr' ? frMessages : currentLocale === 'es' ? esMessages : enMessages);
    }
  }, []);

  const createUrl = (path: string) => {
    if (locale === 'en') return path;
    return `/${locale}${path}`;
  };

  const t = (messages as any).upvc_systems?.product_pages?.pvc_sliding_door;

  if (!t || !t.page_header) {
    return <div>Loading... (Debug: t={JSON.stringify(!!t)}, locale={locale})</div>;
  }

  // Check if this is being used as a root page (not imported by locale pages)
  const isRootPage = typeof window !== 'undefined' && !window.location.pathname.includes('/fr/') && !window.location.pathname.includes('/es/');

  const content = (
    <>
      <PageHeader
        title={t.page_header.title}
        description={t.page_header.description}
        breadcrumbItems={[
          { label: t.page_header.breadcrumbs.home, href: createUrl("/") },
          { label: t.page_header.breadcrumbs.services, href: createUrl("/services") },
          { label: t.page_header.breadcrumbs.sliding_systems, href: createUrl("/services/u-pvc-systems/sliding-systems") },
          { label: t.page_header.title },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative overflow-hidden rounded-2xl border p-2 bg-white ring-1 ring-gray-200">
            <div className="relative overflow-hidden rounded-xl">
              <video className="w-full h-auto aspect-video object-center" src="/video/surme-sliding-system.mp4" autoPlay loop muted playsInline />
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>{t.general_features.title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#565656" }}>
                {t.general_features.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>{t.technical_specs.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm" style={{ color: "#565656" }}>
                <div><span className="font-medium" style={{ color: "black" }}>Gaskets:</span> TPE Grey / Black</div>
                <div><span className="font-medium" style={{ color: "black" }}>Glazing Bead:</span> Single‑lip with PCE gasket</div>
                <div><span className="font-medium" style={{ color: "black" }}>Glass Thickness:</span> 4, 20, 24, 28 mm</div>
                <div><span className="font-medium" style={{ color: "black" }}>Opening Options:</span> Single‑track, double‑track, three‑track frames; insect‑screen and architrave frames</div>
                <div><span className="font-medium" style={{ color: "black" }}>Standard:</span> TS EN 12608‑1, Class B</div>
                <div><span className="font-medium" style={{ color: "black" }}>Thermal Transmittance (Uf):</span> 2.0 W/m²·K</div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-0 pb-10">
        <CallToAction />
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

