"use client"

import {defaultLocale, locales} from '@/i18n';
import './globals.css';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyContactButtons } from "@/components/sticky-contact-buttons";
import { useEffect, useState } from 'react';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<'en' | 'fr' | 'es'>('en');

  useEffect(() => {
    const seg = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'en';
    setLocale(seg === 'fr' ? 'fr' : seg === 'es' ? 'es' : 'en');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      <main className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
      <StickyContactButtons />
    </div>
  )
}


