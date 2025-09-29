"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { HeroSectionOne } from '@/components/hero-section-1';
import { Logos3 } from '@/components/blocks/logos3';
import CallToAction from '@/components/call-to-action';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';

export default function HomePage() {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState<any>(null);
  const [ready, setReady] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const detectedLocale = path.startsWith('/fr/') ? 'fr' : 
                          path.startsWith('/es/') ? 'es' : 'en';
    setLocale(detectedLocale);
    
    import(`@/messages/${detectedLocale}.json`).then((msgs) => {
      setMessages(msgs.default);
      setReady(true);
    });
  }, [path]);

  if (!ready || !messages) {
    return <div>Loading...</div>;
  }

  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages);

  return (
    <div className="min-h-screen flex flex-col" suppressHydrationWarning>
      <Navbar locale={locale} />
      <main className="flex-1">
        <HeroSectionOne 
          heading={t('homepage.hero.heading')}
          description={t('homepage.hero.description')}
          buttonText={t('homepage.hero.button_text')}
          buttonLink="/contact"
          locale={locale}
        />
        <Logos3 
          heading={t('homepage.logos.heading')}
          description={t('homepage.logos.description')}
        />
        <CallToAction 
          heading={t('homepage.cta.heading')}
          description={t('homepage.cta.description')}
          buttonText={t('homepage.cta.button_text')}
          buttonLink="/contact"
          locale={locale}
        />
      </main>
      <Footer locale={locale} />
      <StickyContactButtons />
    </div>
  );
}
