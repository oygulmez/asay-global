"use client"

import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import { ThermometerSnowflake, Ruler, Volume2 } from "lucide-react";
import CallToAction from "@/components/call-to-action";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';
import { useState, useEffect } from 'react';
import enMessages from '@/messages/en.json';


export default function LegendSlidingPlusPage() {
  
  const [messages, setMessages] = useState<any>(enMessages);
  

  

  const createUrl = (path: string) => path;

  // Support both keys during migration (legend_surme_plus -> legend_sliding_plus)
  const t = (messages as any).upvc_systems?.product_pages?.legend_sliding_plus
    || (messages as any).upvc_systems?.product_pages?.legend_surme_plus;

  if (!t || !t.page_header) {
    return <div>Loading...</div>;
  }

  // isRootPage state'i useEffect içinde hesaplanıyor

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
              <video className="w-full h-auto aspect-video object-center" src="/video/legend-surme-plus.mp4" autoPlay loop muted playsInline preload="none" />
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
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.system_width}:</span> 76 mm</div>
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.sash_chambers}:</span> 5</div>
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.gaskets}:</span> TPE Grey / Black</div>
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.glazing_bead}:</span> Single‑lip with PCE gasket</div>
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.glass_thickness}:</span> 24, 30, 36, 44, 52 mm</div>
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.opening_options}:</span> Fixed‑mullion sliding, double‑sash configurations</div>
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.standard}:</span> TS EN 12608‑1, Class B</div>
                <div><span className="font-medium" style={{ color: "black" }}>{t.technical_specs.thermal_transmittance}:</span> 1.4 W/m²·K</div>
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


