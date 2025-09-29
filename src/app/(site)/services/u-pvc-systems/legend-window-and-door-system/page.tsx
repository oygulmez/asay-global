"use client"

import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import { ThermometerSnowflake, Ruler, Layers, PanelsTopLeft } from "lucide-react";
import CallToAction from "@/components/call-to-action";
import { useState, useEffect } from 'react';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';

export default function UPVCWindowDoorSystemsPage() {
  const [locale, setLocale] = useState<'en' | 'fr' | 'es'>('en');
  
  useEffect(() => {
    const seg = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'en';
    setLocale(seg === 'fr' ? 'fr' : seg === 'es' ? 'es' : 'en');
  }, []);
  
  const messages = locale === 'fr' ? frMessages : locale === 'es' ? esMessages : enMessages;
  const t = (messages as any).upvc_systems?.product_pages?.legend_window_door;
  
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
          { label: t.page_header.breadcrumbs.window_door_systems, href: createUrl("/services/u-pvc-systems/window-door-systems") },
          { label: t.page_header.breadcrumbs.legend },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Product video */}
          <div className="relative overflow-hidden rounded-2xl border p-2 bg-white ring-1 ring-gray-200">
            <div className="relative overflow-hidden rounded-xl">
              <video
                className="w-full h-auto aspect-video object-center"
                src="/video/legend-video.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* Right: Features */}
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>General Features</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#565656" }}>
                The Legend u-PVC Window and Door System is designed with a 6-chamber profile and an installation width of 80 mm. The
                system has been engineered with high performance criteria in mind; profiles are formed by combining the most suitable
                structural elements. During the design process, window performance such as insulation (thermal and acoustic), structural
                strength and sealing have been evaluated holistically together with the profile geometry. All profiles in the system are
                manufactured in accordance with EN 12608-1.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>Technical Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm" style={{ color: "#565656" }}>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Profile Width:</span> 80 mm
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Number of Chambers:</span> 6
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Number of Gaskets:</span> 3 (Central gasket)
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Gasket Material:</span> TPE Grey / Black
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Glazing Bead:</span> Single-lip with PCE gasket
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Glass Thickness:</span> 24, 30, 36, 44, 52 mm
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Standard:</span> EN 12608-1
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Thermal Transmittance (Uf):</span> 0.92 W/m²·K
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Performance Highlights - identical layout to homepage Why Choose Us */}
        <section className="py-20 md:py-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-16" style={{ backgroundColor: '#333333' }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Legend u-PVC</h2>
              <p className="text-white/80 text-base max-w-3xl mx-auto">
                High insulation, strong static performance, rich product range and broad glazing options — engineered as a holistic window system.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ThermometerSnowflake className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">High Thermal Performance</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  80&nbsp;mm platform, 6 chambers and 3 gaskets (central seal) enable <strong>Uf = 0.92&nbsp;W/m²·K</strong>. With triple glazing up to 52&nbsp;mm, window U-values down to
                  <strong> Uw ≈ 0.78&nbsp;W/m²·K</strong> are achievable depending on glass.
                </p>
              </div>
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Ruler className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Static Strength</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Reinforcement steels provide high static resistance for windy regions — allowing larger sashes and wider viewing areas with proper structural design.
                </p>
              </div>
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Product Diversity</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Standard/architrave frames, mullions, static mullions, inward/outward door sashes, drip sashes, adapters and rich auxiliary profiles for special details.
                </p>
              </div>
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <PanelsTopLeft className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Glazing Applications</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Supports glazing thicknesses of <strong>24, 30, 36, 44 and 52&nbsp;mm</strong>. Extensive color and laminate options provide tailored aesthetics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Options */}
        <section className="mt-16">
          <div className="relative mx-auto max-w-7xl rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-[#f8f8f8] p-8 md:p-12 shadow-sm">
            <div className="mb-8 text-center">
              <div className="text-xs uppercase tracking-wider mb-2" style={{ color: "#998675" }}>Finishes</div>
              <h2 className="text-3xl font-bold mb-3" style={{ color: "black" }}>Color Options</h2>
              <p className="mx-auto max-w-3xl text-sm md:text-base" style={{ color: "#565656" }}>
                We offer laminate color alternatives that provide superior durability against harsh weather conditions while requiring low maintenance.
                Different laminate colors can be applied on interior and exterior faces to achieve more aesthetic and coherent facades.
              </p>
            </div>

            <div className="mx-auto grid gap-10 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <Image
                    src="/images/services/upvc-systems/colors-thmb.png"
                    alt="u-PVC laminate color options overview"
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <p className="mt-3 text-xs" style={{ color: "#8a8a8a" }}>Interior and exterior laminate colors can be combined.</p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
                  {[
                    { file: "altin-mese.jpg", name: "Golden Oak" },
                    { file: "antik-mese.jpg", name: "Antique Oak" },
                    { file: "antrasit-gri.jpg", name: "Anthracite Grey" },
                    { file: "findik.jpg", name: "Hazelnut" },
                    { file: "krem.jpg", name: "Cream" },
                    { file: "kul-siyahi.jpg", name: "Ash Black" },
                    { file: "maun.jpg", name: "Mahogany" },
                    { file: "metalik-antrasit-gri.jpg", name: "Metallic Anthracite" },
                    { file: "metalik-gumus.jpg", name: "Metallic Silver" },
                    { file: "platin-crown.jpg", name: "Platinum Crown" },
                    { file: "pyrite.jpg", name: "Pyrite" },
                    { file: "vizon.jpg", name: "Vizon" },
                    { file: "winchester.jpg", name: "Winchester" }
                  ].map((item) => (
                    <div key={item.file} className="flex flex-col items-center text-center">
                      <div className="relative w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full ring-1 ring-gray-200 bg-white shadow-sm transition-transform duration-200 hover:scale-105 hover:ring-[#998675]">
                        <Image
                          src={`/images/services/upvc-systems/colors/${item.file}`}
                          alt={`${item.name} color swatch`}
                          fill
                          className="object-cover rounded-full"
                          sizes="56px"
                        />
                      </div>
                      <div className="mt-2 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] md:text-xs" style={{ color: "#565656", backgroundColor: "#f3f3f3" }}>
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto px-6 pt-0 pb-10">
        <CallToAction />
      </div>
    </>
  );
}



