import { HeroSectionOne } from '@/components/hero-section-1';
import CallToAction from '@/components/call-to-action';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';
import Script from 'next/script';
import { homeMetadata } from './metadata';
import { buildHomepageSchema } from '@/lib/homepage-schema';
import type { Metadata } from 'next';

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  const schema = buildHomepageSchema();

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar locale="en" />
        <main className="flex-1">
          <HeroSectionOne />
          <CallToAction />
        </main>
        <Footer locale="en" />
        <StickyContactButtons />
      </div>
    </>
  );
}
