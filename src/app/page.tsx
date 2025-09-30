"use client";

import { useEffect, useState } from 'react';
import { HeroSectionOne } from '@/components/hero-section-1';
import { Logos3 } from '@/components/blocks/logos3';
import CallToAction from '@/components/call-to-action';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';
import enMessages from '@/messages/en.json';

export default function HomePage() {
  const [messages, setMessages] = useState<any>(enMessages);
  const [ready, setReady] = useState(true);

  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages);

  return (
    <div className="min-h-screen flex flex-col" suppressHydrationWarning>
      <Navbar locale="en" />
      <main className="flex-1">
        {!ready || !messages ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <div>Loading...</div>
          </div>
        ) : (
          <>
            <HeroSectionOne />
            <CallToAction />
          </>
        )}
      </main>
      <Footer locale="en" />
      <StickyContactButtons />
    </div>
  );
}
