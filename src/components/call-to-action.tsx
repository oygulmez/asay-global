"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import enMessages from '@/messages/en.json'
import frMessages from '@/messages/fr.json'
import esMessages from '@/messages/es.json'

export default function CallToAction() {
  const [locale, setLocale] = useState<'en' | 'fr' | 'es'>('en');

  useEffect(() => {
    const seg = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'en';
    setLocale(seg === 'fr' ? 'fr' : seg === 'es' ? 'es' : 'en');
  }, []);

  const messages = locale === 'fr' ? frMessages : locale === 'es' ? esMessages : enMessages;
  
  // Helper function to create locale-aware URLs
  const createUrl = (path: string) => {
    if (locale === 'en') return path;
    return `/${locale}${path}`;
  };
    return (
        <section>
            <div className="py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="space-y-6 text-center">
                        <h2 className="text-3xl font-bold" style={{ color: 'black' }}>{(messages as any).call_to_action.title}</h2>
                        <p className="text-base max-w-3xl mx-auto" style={{ color: '#565656' }}>
                            {(messages as any).call_to_action.description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Button asChild size="lg">
                                <Link href={createUrl("/contact")}>{(messages as any).call_to_action.contact_button}</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href={createUrl("/dealers")}>{(messages as any).call_to_action.dealers_button}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}