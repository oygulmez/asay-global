"use client"

import { PageHeader } from "@/components/page-header";
import CallToAction from "@/components/call-to-action";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';
import { useEffect, useState } from 'react';
import enMessages from '@/messages/en.json';

export default function AboutPage() {
  const [locale, setLocale] = useState<'en'>('en');
  const [isRootPage, setIsRootPage] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      setLocale('en');
      setIsRootPage(true);
    }
  }, []);

  const messages = enMessages;

  const content = (
    <>
      <PageHeader 
        title={(messages as any).about.page_header.title}
        description={(messages as any).about.page_header.description}
        breadcrumbItems={[
          { label: (messages as any).about.page_header.breadcrumbs.home, href: "/" },
          { label: (messages as any).about.page_header.breadcrumbs.about }
        ]}
      />
      
      {/* About Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Company Overview */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'black' }}>{(messages as any).about.company_overview.title}</h2>
          </div>
          <div className="prose prose-gray max-w-none text-center">
            <p className="text-base leading-relaxed mb-6" style={{ color: '#565656' }}>
              {(messages as any).about.company_overview.paragraph1}
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#565656' }}>
              {(messages as any).about.company_overview.paragraph2}
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-2xl border shadow-lg">
            <div className="relative">
              <video
                className="w-full h-auto aspect-video object-cover"
                src="/video/hero-section-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Philosophy & Values Section - Full Width (Homepage box style) */}
        <section className="py-20 md:py-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{ backgroundColor: '#000000' }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">{(messages as any).about.philosophy.title}</h2>
              <p className="text-base leading-relaxed mb-6 text-white/80">
                {(messages as any).about.philosophy.description1}
              </p>
              <p className="text-base leading-relaxed text-white/80">
                {(messages as any).about.philosophy.description2}
              </p>
            </div>

            {/* Values Grid - Same as homepage cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Global Presence */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{(messages as any).about.values.global_presence.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {(messages as any).about.values.global_presence.description}
                </p>
              </div>

              {/* Advanced Technology */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 17.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 17.5m14.8-2.2l1.57-.393A9.065 9.065 0 0020.25 12a9.065 9.065 0 00-6.23-.693L5 17.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{(messages as any).about.values.advanced_technology.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {(messages as any).about.values.advanced_technology.description}
                </p>
              </div>

              {/* Proven Experience */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236l2.48 5.228m0 0l2.48 5.228m-2.48-5.228l2.48 5.228" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{(messages as any).about.values.proven_experience.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {(messages as any).about.values.proven_experience.description}
                </p>
              </div>

              {/* Professional Team */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{(messages as any).about.values.professional_team.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {(messages as any).about.values.professional_team.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Footer üstü */}
        <div className="container mx-auto px-6 py-16">
          <CallToAction />
        </div>
      </div>
    </>
  );

  if (isRootPage) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar locale="en" />
        <main className="flex-1">{content}</main>
        <Footer locale="en" />
        <StickyContactButtons />
      </div>
    );
  }

  return content;
}