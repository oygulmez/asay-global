"use client"

import { PageHeader } from "@/components/page-header";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { useEffect, useState } from 'react';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';

export default function ContactPage() {
  const [locale, setLocale] = useState<'en' | 'fr' | 'es'>('en');

  useEffect(() => {
    const seg = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'en';
    setLocale(seg === 'fr' ? 'fr' : seg === 'es' ? 'es' : 'en');
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
          <ContactForm />
        </div>
      </div>
    </>
  );
}

 
