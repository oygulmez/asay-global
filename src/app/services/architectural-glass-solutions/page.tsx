"use client"

import { PageHeader } from "@/components/page-header";
import CallToAction from "@/components/call-to-action";
import { ApplicationAreasGallery } from "@/components/image-gallery";
import { Shield, Sun, Zap, Waves } from "lucide-react";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';
import { useState, useEffect } from 'react';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';

export default function ArchitecturalGlassSolutionsPage() {
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
  const t = messages.glass_systems;
  
  const createUrl = (path: string) => {
    if (locale === 'en') return path;
    return `/${locale}${path}`;
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale="en" />
      <main className="flex-1">
        <PageHeader
        title={t.page_header.title}
        description={t.page_header.description}
        breadcrumbItems={[
          { label: t.page_header.breadcrumbs.home, href: createUrl("/") },
          { label: t.page_header.breadcrumbs.services, href: createUrl("/services") },
          { label: t.page_header.breadcrumbs.glass_systems }
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'black' }}>{t.overview.title}</h2>
          <p className="text-base leading-relaxed" style={{ color: '#565656' }}>
          {t.overview.description}</p>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="my-12 border-t border-gray-200" />
        </div>

        

        {/* Glass Product Lines */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3" style={{ color: 'black' }}>{t.technologies.title}</h2>
              <p className="text-base" style={{ color: '#565656' }}>{t.technologies.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Insulating Glass */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/glass-solutions/Architectural-Glass-Solutions-Insulating-Glass.png" alt="Insulating Glass" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">{t.technologies.insulating_glass.title}</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.technologies.insulating_glass.title}</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      {t.technologies.insulating_glass.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Colorless Flat Glass */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/glass-solutions/Architectural-Glass-Solutions-Colorless-Flat-Glass.png" alt="Colorless Flat Glass" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">{t.technologies.colorless_flat_glass.title}</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.technologies.colorless_flat_glass.title}</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      {t.technologies.colorless_flat_glass.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tentesol Glass */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/glass-solutions/Architectural-Glass-SolutionsTentesol-Glass.png" alt="Tentesol Glass" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">{t.technologies.tentesol_glass.title}</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.technologies.tentesol_glass.title}</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      {t.technologies.tentesol_glass.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Painted Glass */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/glass-solutions/Architectural-Glass-Solutions-Painted-Glass.png" alt="Painted Glass" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">{t.technologies.painted_glass.title}</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.technologies.painted_glass.title}</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      {t.technologies.painted_glass.description}
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
              {/* Energy Efficiency */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.energy_efficiency.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t.advantages.energy_efficiency.description}</p>
              </div>

              {/* Solar Control */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.solar_control.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t.advantages.solar_control.description}</p>
              </div>

              {/* Acoustic Performance */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Waves className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.acoustic_performance.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t.advantages.acoustic_performance.description}</p>
              </div>

              {/* Safety & Security */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.safety_security.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t.advantages.safety_security.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <ApplicationAreasGallery images={[
          { src: "/images/services/glass-solutions/architectural-glass-gallery-1.jpg", alt: "Glass Gallery 1" },
          { src: "/images/services/glass-solutions/architectural-glass-gallery-2.jpeg", alt: "Glass Gallery 2" },
          { src: "/images/services/glass-solutions/architectural-glass-gallery-3.jpg", alt: "Glass Gallery 3" },
          { src: "/images/services/glass-solutions/architectural-glass-gallery-4.jpg", alt: "Glass Gallery 4" },
          { src: "/images/services/glass-solutions/architectural-glass-gallery-5.avif", alt: "Glass Gallery 5" },
          { src: "/images/services/glass-solutions/architectural-glass-gallery-6.webp", alt: "Glass Gallery 6" },
          { src: "/images/services/glass-solutions/Architectural-Glass-Solutions-Insulating-Glass.png", alt: "Insulating Glass" },
          { src: "/images/services/glass-solutions/Architectural-Glass-Solutions-Colorless-Flat-Glass.png", alt: "Colorless Flat Glass" },
          { src: "/images/services/glass-solutions/Architectural-Glass-SolutionsTentesol-Glass.png", alt: "Tentesol Glass" },
          { src: "/images/services/glass-solutions/Architectural-Glass-Solutions-Painted-Glass.png", alt: "Painted Glass" },
          { src: "/images/services/glass-solutions/Architectural-Glass-Solutions-img--1.jpg", alt: "Architectural Glass" },
        ]} />

        {/* CTA */}
        <CallToAction />
      </div>
      </main>
      <Footer locale="en" />
      <StickyContactButtons />
    </div>
  );
}


