"use client";

import { useEffect, useState } from 'react';
import { HeroSectionOne } from '@/components/hero-section-1';
import { Logos3 } from '@/components/blocks/logos3';
import CallToAction from '@/components/call-to-action';
import enMessages from '@/messages/en.json';

export default function HomePage() {
  const [messages, setMessages] = useState<any>(enMessages);
  const [ready, setReady] = useState(true);

  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages);

  return (
    <div suppressHydrationWarning>
      {!ready || !messages ? (
        <div className="flex items-center justify-center min-h-[50vh]">
          <div>Loading...</div>
        </div>
      ) : (
        <>
          <HeroSectionOne 
            heading={t('homepage.hero.heading')}
            description={t('homepage.hero.description')}
            buttonText={t('homepage.hero.button_text')}
            buttonLink="/contact"
            locale="en"
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
            locale="en"
          />
        </>
      )}
    </div>
  );
}
