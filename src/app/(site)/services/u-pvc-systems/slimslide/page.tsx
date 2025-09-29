"use client"

import { PageHeader } from "@/components/page-header";
import { ThermometerSnowflake, Ruler, Volume2 } from "lucide-react";
import CallToAction from "@/components/call-to-action";
import { useState, useEffect } from 'react';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';


export default function SlimslidePage() {
  const [locale, setLocale] = useState<'en' | 'fr' | 'es'>('en');
  const [messages, setMessages] = useState<any>(enMessages);

  useEffect(() => {
    const seg = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'en';
    const currentLocale = seg === 'fr' ? 'fr' : seg === 'es' ? 'es' : 'en';
    setLocale(currentLocale);
    setMessages(currentLocale === 'fr' ? frMessages : currentLocale === 'es' ? esMessages : enMessages);
  }, []);

  const createUrl = (path: string) => {
    if (locale === 'en') return path;
    return `/${locale}${path}`;
  };

  const t = (messages as any).upvc_systems?.product_pages?.slimslide;

  if (!t || !t.page_header) {
    return <div>Loading... (Debug: t={JSON.stringify(!!t)}, locale={locale})</div>;
  }

  return (
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
              <video className="w-full h-auto aspect-video object-center" src="/video/slimslide-sliding-system.mp4" autoPlay loop muted playsInline />
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
                <div><span className="font-medium" style={{ color: "black" }}>System Type:</span> Slim frame sliding</div>
                <div><span className="font-medium" style={{ color: "black" }}>Sealing:</span> Multi-gasket concept</div>
                <div><span className="font-medium" style={{ color: "black" }}>Glass Thickness:</span> Up to 44–52 mm</div>
                <div><span className="font-medium" style={{ color: "black" }}>Sightlines:</span> Reduced profile widths</div>
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
}

