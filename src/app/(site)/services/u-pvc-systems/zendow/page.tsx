"use client"

import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import { ThermometerSnowflake, Ruler, Volume2, Leaf } from "lucide-react";
import CallToAction from "@/components/call-to-action";
import { useState, useEffect } from 'react';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';

export default function ZendowProductPage() {
  const [locale, setLocale] = useState<'en' | 'fr' | 'es'>('en');
  
  useEffect(() => {
    const seg = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'en';
    setLocale(seg === 'fr' ? 'fr' : seg === 'es' ? 'es' : 'en');
  }, []);
  
  const messages = locale === 'fr' ? frMessages : locale === 'es' ? esMessages : enMessages;
  const t = (messages as any).upvc_systems?.product_pages?.zendow;
  
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
          { label: t.page_header.breadcrumbs.zendow },
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
                The Zendow PVC Window and Door System seamlessly complements your interior style with a meticulously considered design and
                aesthetic details. Delivering high standards in both functionality and appearance, Zendow adapts perfectly to a wide range of
                architectural styles with its modern lines, elegant detailing and coherent form. Designed to add value with durability and
                long service life, it is an ideal choice for those seeking comfort and aesthetics together.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>Technical Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm" style={{ color: "#565656" }}>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Profile Width:</span> 70 mm
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Number of Chambers:</span> 5
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Number of Gaskets:</span> 2/3 (Central gasket optional)
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Gasket Material:</span> TPE Grey / Black
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Glazing Bead:</span> Single-lip with PCE gasket
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Glass Thickness:</span> 4, 20, 24, 30, 36, 44 mm
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Standard:</span> TS EN 12608-1, Class B
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Thermal Transmittance (Uf):</span> 1.3 W/m²·K (with central gasket), 1.4 W/m²·K
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Why Choose Zendow - updated content (4 cards) */}
        <section className="py-20 md:py-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-16" style={{ backgroundColor: '#333333' }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Zendow</h2>
              <p className="text-white/80 text-base max-w-3xl mx-auto">Superior insulation, acoustic comfort, structural reliability and environmental responsibility.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ThermometerSnowflake className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Superior Insulation</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  5‑chamber, 70&nbsp;mm profile providing excellent thermal performance. Verified at IFT Rosenheim with
                  <strong> Uf 1.3–1.4&nbsp;W/m²·K</strong>. Central‑gasket configurations are certified at <strong>Uf 1.3&nbsp;W/m²·K</strong>.
                </p>
              </div>
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Ruler className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Static Strength</h3>
                <p className="text-white/70 text-sm leading-relaxed">Static mullions and façade profiles enable optimal solutions even in high‑wind regions.</p>
              </div>
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Volume2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Acoustic Performance</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Dual‑chamber gaskets outperform manually inserted seals. Together with the multi‑chamber geometry, they deliver
                  maximum acoustic insulation even in heavy‑traffic and high‑noise areas.
                </p>
              </div>
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Environmental Responsibility</h3>
                <p className="text-white/70 text-sm leading-relaxed">High insulation values, long service life, low maintenance and 100% recyclability at end of life.</p>
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
                Explore laminate color alternatives with superior weather resistance and low maintenance.
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
                <p className="mt-3 text-xs" style={{ color: "#8a8a8a" }}>Combine interior and exterior laminate colors coherently.</p>
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


