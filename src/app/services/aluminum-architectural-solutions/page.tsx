"use client";

import { PageHeader } from "@/components/page-header";
import { PageContainer } from "@/components/page-container";
import { SiteLayout } from "@/components/site-layout";
import CallToAction from "@/components/call-to-action";
import { ApplicationAreasGallery } from "@/components/image-gallery";
import { Shield, Droplets, PenTool, Recycle } from "lucide-react";
import enMessages from "@/messages/en.json";

export default function AluminumArchitecturalSolutionsPage() {
  const messages = enMessages;
  const t = messages.aluminum_systems;
  const createUrl = (path: string) => path;

  return (
    <SiteLayout locale="en">
      <PageHeader
        title={t.page_header.title}
        description={t.page_header.description}
        breadcrumbItems={[
          { label: t.page_header.breadcrumbs.home, href: createUrl("/") },
          { label: t.page_header.breadcrumbs.services, href: createUrl("/services") },
          { label: t.page_header.breadcrumbs.aluminum_systems },
        ]}
      />

      <PageContainer>
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'black' }}>{t.overview.title}</h2>
          <p className="text-base leading-relaxed" style={{ color: '#565656' }}>
          {t.overview.description}</p>
        </div>

        {/* Brands Logos - Static 3 logos (same position as Steel Framings) */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: 'black' }}>{t.partners_title}</h3>
            <div className="flex items-center justify-center gap-16 flex-wrap">
              <img src="/images/brands-logo/brands-anasayfa/reynaers.svg" alt="Reynaers" className="h-16 md:h-20 lg:h-13 w-auto object-contain grayscale hover:grayscale-0 transition" />
              <img src="/images/brands-logo/brands-anasayfa/alumil-logo.svg" alt="Alumil" className="h-12 md:h-14 lg:h-10 w-auto object-contain grayscale hover:grayscale-0 transition" />
              <img src="/images/brands-logo/brands-anasayfa/sapa-logo.webp" alt="Sapa" className="h-18 md:h-22 lg:h-15 w-auto object-contain grayscale hover:grayscale-0 transition" />
              <img src="/images/brands-logo/brands-anasayfa/kleidco-logo-black.svg" alt="Kleidco" className="h-10 md:h-12 lg:h-8 w-auto object-contain grayscale hover:grayscale-0 transition" />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6">
          <div className="my-12 border-t border-gray-200" />
        </div>

        {/* Aluminum Solutions - Product cards */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3" style={{ color: 'black' }}>{t.solutions.title}</h2>
              <p className="text-base" style={{ color: '#565656' }}>{t.solutions.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Windows */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/aluminum-solutions/aluminum-architectural-systems-conservatories-.webp" alt="Conservatories" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">{t.solutions.windows.title}</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.solutions.windows.title}</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      {t.solutions.windows.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Doors */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/aluminum-solutions/aluminum-architectural-systems-doors.webp" alt="Doors" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">{t.solutions.doors.title}</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.solutions.doors.title}</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      {t.solutions.doors.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sliding & Folding */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/aluminum-solutions/aluminum-architectural-systems-sliding-folding.webp" alt="Sliding & Folding" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">{t.solutions.sliding_folding.title}</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.solutions.sliding_folding.title}</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      {t.solutions.sliding_folding.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Conservatories */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/aluminum-solutions/aluminum-architectural-systems-conservatories-.webp" alt="Conservatories" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">{t.solutions.conservatories.title}</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.solutions.conservatories.title}</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      {t.solutions.conservatories.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Façades */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/aluminum-solutions/aluminum-architectural-systems-facade-system.webp" alt="Façades" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">{t.solutions.facades.title}</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.solutions.facades.title}</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      {t.solutions.facades.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Advantages */}
        <section className="py-20 md:py-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{ backgroundColor: '#000000' }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">{t.advantages.title}</h2>            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Structural Strength */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.structural_strength.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t.advantages.structural_strength.description}</p>
              </div>

              {/* Corrosion Resistance */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.corrosion_resistance.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t.advantages.corrosion_resistance.description}</p>
              </div>

              {/* Design Flexibility */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <PenTool className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.design_flexibility.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t.advantages.design_flexibility.description}</p>
              </div>

              {/* Eco-Friendly */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.eco_friendly.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t.advantages.eco_friendly.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <ApplicationAreasGallery images={[
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-windows.webp", alt: "Windows" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-doors.webp", alt: "Doors" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-sliding-folding.webp", alt: "Sliding & Folding" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-conservatories-.webp", alt: "Conservatories" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-facade-system.webp", alt: "Façade System" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-gallery-1.webp", alt: "Gallery 1" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-gallery-2.webp", alt: "Gallery 2" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-gallery-3.webp", alt: "Gallery 3" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-gallery-4.webp", alt: "Gallery 4" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-gallery-5.webp", alt: "Gallery 5" },
          { src: "/images/services/aluminum-solutions/Aluminum-Architectural-Solutions-img--1.webp", alt: "Aluminum Solutions" },
        ]} />

        {/* CTA */}
        <CallToAction />
      </PageContainer>
    </SiteLayout>
  );
}


