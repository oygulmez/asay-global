"use client"

import { PageHeader } from "@/components/page-header";
import CallToAction from "@/components/call-to-action";
import { ApplicationAreasGallery } from "@/components/image-gallery";
import { Cpu, Globe2, Shield, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';
import { useState, useEffect } from 'react';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';

export default function SteelFramingsPage() {
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
  const t = messages.steel_systems;
  
  const createUrl = (path: string) => {
    if (locale === 'en') return path;
    return `/${locale}${path}`;
  };
  // Root sayfada Navbar/Footer sarmalaması yapacağız

  const content = (
    <>
      <PageHeader
        title={t.page_header.title}
        description={t.page_header.description}
        breadcrumbItems={[
          { label: t.page_header.breadcrumbs.home, href: createUrl("/") },
          { label: t.page_header.breadcrumbs.services, href: createUrl("/services") },
          { label: t.page_header.breadcrumbs.steel_systems }
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'black' }}>{t.overview.title}</h2>
          <p className="text-base leading-relaxed" style={{ color: '#565656' }}>
          {t.overview.description}
          </p>
        </div>

        {/* Brands Logos - Static 3 logos */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: 'black' }}>{t.standards_title}</h3>
            <div className="flex items-center justify-center gap-16 flex-wrap">
              <img src="/images/brands-logo/AISC-logo-500px.png" alt="AISC" className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition" />
              <img src="/images/brands-logo/ASTM-logo-500px.png" alt="ASTM International" className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition" />
              <img src="/images/brands-logo/icc-logo-500px.jpg" alt="ICC" className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition" />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6">
          <div className="my-12 border-t border-gray-200" />
        </div>

        {/* Solutions & Advantages */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3" style={{ color: 'black' }}>{t.solutions.title}</h2>
              <p className="text-base" style={{ color: '#565656' }}>{t.solutions.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Structural Steel */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/steel-structure/steel-framings-structural-steel.jpg" alt="Structural Steel" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">{t.solutions.structural_steel.title}</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.solutions.structural_steel.title}</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      {t.solutions.structural_steel.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Steel Frameworks */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/steel-structure/steel-framings-steel-frameworks.jpg" alt="Steel Frameworks" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">{t.solutions.steel_frameworks.title}</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.solutions.steel_frameworks.title}</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      {t.solutions.steel_frameworks.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Industrial Buildings */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/steel-structure/steel-framings-industrial-buildings.jpg" alt="Industrial Buildings" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">{t.solutions.industrial_buildings.title}</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.solutions.industrial_buildings.title}</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      {t.solutions.industrial_buildings.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Custom Fabrication */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/steel-structure/steel-framings-custom-fabrication.jpg" alt="Custom Fabrication" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">{t.solutions.custom_fabrication.title}</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.solutions.custom_fabrication.title}</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      {t.solutions.custom_fabrication.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Steel Bridges */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <img src="/images/services/steel-structure/steel-framings-steel-bridges.webp" alt="Custom Fabrication" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">{t.solutions.steel_bridges.title}</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.solutions.steel_bridges.title}</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      {t.solutions.steel_bridges.description}
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
              <h2 className="text-3xl font-bold mb-4 text-white">{t.advantages.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Advanced Technology */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.advanced_technology.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t.advantages.advanced_technology.description}</p>
              </div>

              {/* Global Experience */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Globe2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.global_experience.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t.advantages.global_experience.description}</p>
              </div>

              {/* Superior Strength */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.superior_strength.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t.advantages.superior_strength.description}</p>
              </div>

              {/* Professional Team */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.professional_team.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t.advantages.professional_team.description}</p>
              </div>
            </div>
          </div>
        </section>

        

        {/* Application Areas - Steel Structure Gallery */}
        <ApplicationAreasGallery images={[
          { src: "/images/services/steel-structure/steel-framings-structural-steel.jpg", alt: "Structural Steel" },
          { src: "/images/services/steel-structure/steel-framings-steel-frameworks.jpg", alt: "Steel Frameworks" },
          { src: "/images/services/steel-structure/steel-framings-industrial-buildings.jpg", alt: "Industrial Buildings" },
          { src: "/images/services/steel-structure/steel-framings-custom-fabrication.jpg", alt: "Custom Fabrication" },
          { src: "/images/services/steel-structure/steel-framings-steel-bridges.webp", alt: "Steel Bridges" },
          { src: "/images/services/steel-structure/steel-framings-img-1.jpg", alt: "Steel Framings 1" },
          { src: "/images/services/steel-structure/Steel-framings-img-2.JPG", alt: "Steel Framings 2" },
          { src: "/images/services/steel-structure/Steel-framings-img-3.jpg", alt: "Steel Framings 3" },
          { src: "/images/services/steel-structure/Steel-framings-img-4.jpg", alt: "Steel Framings 4" },
          { src: "/images/services/steel-structure/Steel-framings-img-5.jpg", alt: "Steel Framings 5" },
          { src: "/images/services/steel-structure/Steel-framings-img-6.jpg", alt: "Steel Framings 6" },
          { src: "/images/services/steel-structure/Steel-framings-img-7.JPG", alt: "Steel Framings 7" },
          { src: "/images/services/steel-structure/Steel-framings-img-8.JPG", alt: "Steel Framings 8" },
        ]} />

        {/* CTA */}
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


