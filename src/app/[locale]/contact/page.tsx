"use client"

import { PageHeader } from "@/components/page-header";
import Link from "next/link";
// ContactForm component will be inline
import { useEffect, useState } from 'react';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';

export default function ContactPage() {
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

  return (
    <>
      <PageHeader
        title={(messages as any).contact.page_header.title}
        description={(messages as any).contact.page_header.description}
        breadcrumbItems={[
          { label: (messages as any).contact.page_header.breadcrumbs.home, href: "/" },
          { label: (messages as any).contact.page_header.breadcrumbs.contact },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        {/* Grid: Info / Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-lg border p-6 bg-white">
              <ul className="space-y-3 text-sm" style={{ color: "#565656" }}>
                
                <li>
                  <span className="font-medium" style={{ color: "black" }}>{(messages as any).contact.contact_info.email_label}</span> info@asayglobal.com
                </li>
                
                <li>
                  <span className="font-medium" style={{ color: "black" }}>{(messages as any).contact.contact_info.europe_office_label}</span><br/>
                  Keulenstraat 11 A, 7418 ET Deventer / The Netherlands
                </li>
                <li>
                  <span className="font-medium" style={{ color: "black" }}>{(messages as any).contact.contact_info.usa_office_label}</span><br/>
                  5835 Callaghan Rd. Ste 204, San Antonio, TX 78228, USA
                </li>
                <li>
                  <span className="font-medium" style={{ color: "black" }}>{(messages as any).contact.contact_info.turkey_office_label}</span><br/>
                  Atatürk Mahallesi Ertuğrul Gazi Sk. Metropol İstanbul, C Blok No2/131 Ataşehir İstanbul TR
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/dealers" className="inline-block px-4 py-2 bg-[#333333] text-white rounded-md">{(messages as any).contact.contact_info.view_dealers}</Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border p-6 bg-white">
            <h2 className="text-xl font-semibold mb-6" style={{ color: 'black' }}>{(messages as any).dealers.form.title}</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="name" style={{ color: 'black' }}>{(messages as any).dealers.form.first_name}</label>
                  <input id="name" name="name" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="email" style={{ color: 'black' }}>{(messages as any).dealers.form.email}</label>
                  <input id="email" name="email" type="email" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="subject" style={{ color: 'black' }}>{(messages as any).dealers.form.subject}</label>
                <input id="subject" name="subject" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="message" style={{ color: 'black' }}>{(messages as any).dealers.form.message}</label>
                <textarea id="message" name="message" rows={6} className="w-full border px-3 py-2 rounded-md focus:outline-none" />
              </div>
              <button type="submit" className="px-4 py-2 bg-[#333333] text-white rounded-md">
                {(messages as any).dealers.form.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

 
