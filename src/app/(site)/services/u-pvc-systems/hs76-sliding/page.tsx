"use client"

import { PageHeader } from "@/components/page-header";
import { ThermometerSnowflake, Ruler, Volume2 } from "lucide-react";
import CallToAction from "@/components/call-to-action";
import { useState, useEffect } from 'react';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';

export default function HS76SlidingPage() {
  const [locale, setLocale] = useState<'en' | 'fr' | 'es'>('en');
  
  useEffect(() => {
    const seg = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'en';
    setLocale(seg === 'fr' ? 'fr' : seg === 'es' ? 'es' : 'en');
  }, []);
  
  const messages = locale === 'fr' ? frMessages : locale === 'es' ? esMessages : enMessages;
  const t = (messages as any).upvc_systems.product_pages.hs76_sliding;
  
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
          { label: t.page_header.breadcrumbs.sliding_systems, href: createUrl("/services/u-pvc-systems/sliding-systems") },
          { label: t.page_header.breadcrumbs.hs76_sliding },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative overflow-hidden rounded-2xl border p-2 bg-white ring-1 ring-gray-200">
            <div className="relative overflow-hidden rounded-xl">
              <video className="w-full h-auto aspect-video object-center" src="/video/hs76-sliding-system.mp4" autoPlay loop muted playsInline />
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
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.frame_width}:</span> 175 mm</div>
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.sash_width}:</span> 76 mm</div>
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.chambers}:</span> 8 (frame), 4 (sash)</div>
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.gaskets}:</span> TPE Grey / Black</div>
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.glazing_bead}:</span> Single‑lip</div>
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.glass_thickness}:</span> 4, 20, 24, 30, 36, 43 mm</div>
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.standard}:</span> TS EN 12608‑1, Class A</div>
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.thermal_transmittance}:</span> 1.2 W/m²·K</div>
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

