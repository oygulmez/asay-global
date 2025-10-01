"use client"

import Image from 'next/image';
import { PageHeader } from "@/components/page-header";
import CallToAction from "@/components/call-to-action";
import { ApplicationAreasGallery } from "@/components/image-gallery";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';
import { useState, useEffect } from 'react';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';

export default function InteriorExteriorDecorativeProductsPage() {
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
  const t = messages.decorative_systems;
  
  const createUrl = (path: string) => {
    if (locale === 'en') return path;
    return `/${locale}${path}`;
  };

  const content = (
    <>
      <PageHeader
        title={t.page_header.title}
        description={t.page_header.description}
        breadcrumbItems={[
          { label: t.page_header.breadcrumbs.home, href: createUrl("/") },
          { label: t.page_header.breadcrumbs.services, href: createUrl("/services") },
          { label: t.page_header.breadcrumbs.decorative_systems }
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

        <div className="mx-auto max-w-7xl px-6">
          <div className="my-12 border-t border-gray-200" />
        </div>

        {/* Decorative Solutions - Rich Media Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3" style={{ color: 'black' }}>{t.solutions.title}</h2>
              <p className="text-base" style={{ color: '#565656' }}>{t.solutions.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Interior Cladding - Wall Panels */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-wall-panels.jpg" alt="Wall Panels" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <BadgeLike label={t.solutions.wall_panels.title} />
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.solutions.wall_panels.title}</h3>
                    <p className="text-sm mb-4" style={{ color: '#565656' }}>
                      {t.solutions.wall_panels.description}
                    </p>
                    <ul className="text-sm space-y-2" style={{ color: '#565656' }}>
                      {t.solutions.wall_panels.features.map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Deck Profiles */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-deck-profiles.jpeg" alt="Deck Profiles" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <BadgeLike label={t.solutions.composite_decking.title} />
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.solutions.composite_decking.title}</h3>
                    <p className="text-sm mb-4" style={{ color: '#565656' }}>
                      {t.solutions.composite_decking.description}
                    </p>
                    <ul className="text-sm space-y-2" style={{ color: '#565656' }}>
                      {t.solutions.composite_decking.features.map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Exterior Cladding */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-exterior-cladding.jpg" alt="Exterior Cladding" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <BadgeLike label={t.solutions.facade_systems.title} />
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.solutions.facade_systems.title}</h3>
                    <p className="text-sm mb-4" style={{ color: '#565656' }}>
                      {t.solutions.facade_systems.description}
                    </p>
                    <ul className="text-sm space-y-2" style={{ color: '#565656' }}>
                      {t.solutions.facade_systems.features.map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Interior Cladding - Elegant */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="relative aspect-[3/4] w-full border border-gray-200">
                    <Image 
                      src="/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-interior-cladding.jpg" 
                      alt="Interior Cladding" 
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                  <div>
                    <BadgeLike label={t.solutions.interior_cladding.title} />
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>{t.solutions.interior_cladding.title}</h3>
                    <p className="text-sm mb-4" style={{ color: '#565656' }}>
                      {t.solutions.interior_cladding.description}
                    </p>
                    <ul className="text-sm space-y-2" style={{ color: '#565656' }}>
                      {t.solutions.interior_cladding.features.map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Product Advantages - Full Width (Why Choose Us style) */}
        <section className="py-20 md:py-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{ backgroundColor: '#000000' }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">{t.advantages.title}</h2>            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Design Versatility */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.design_versatility.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t.advantages.design_versatility.description}
                </p>
              </div>

              {/* Sound Proof */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10v4a1 1 0 001 1h3l4 3V6l-4 3H4a1 1 0 00-1 1zM16 10v4m3-6v8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.sound_proof.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t.advantages.sound_proof.description}
                </p>
              </div>

              {/* Modern Design */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.modern_design.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t.advantages.modern_design.description}
                </p>
              </div>

              {/* Long Lasting Durability */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{t.advantages.long_lasting_durability.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t.advantages.long_lasting_durability.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Areas - Image Gallery with Lightbox & Infinite Strip */}
        <ApplicationAreasGallery images={[
          { src: "/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-wall-panels.jpg", alt: "Wall Panels" },
          { src: "/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-deck-profiles.jpeg", alt: "Deck Profiles" },
          { src: "/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-exterior-cladding.jpg", alt: "Exterior Cladding" },
          { src: "/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-interior-cladding.jpg", alt: "Interior Cladding" },
          { src: "/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-gallery-1.jpg", alt: "Application Area 1" },
          { src: "/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-gallery-2.jpg", alt: "Application Area 2" },
          { src: "/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-gallery-3.jpg", alt: "Application Area 3" },
          { src: "/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-gallery-4.jpg", alt: "Application Area 4" },
          { src: "/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-gallery-5.jpg", alt: "Application Area 5" },
          { src: "/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-gallery-6.jpg", alt: "Application Area 6" },
          { src: "/images/services/interior-exterior/Interior-and-Exterior-Decorative-Products-gallery-7.jpg", alt: "Application Area 7" },
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

function BadgeLike({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
      {label}
    </span>
  );
}


