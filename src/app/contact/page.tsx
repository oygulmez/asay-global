"use client"

import { PageHeader } from "@/components/page-header";
import Link from "next/link";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';
import Script from 'next/script';
import { useState } from 'react';
import enMessages from '@/messages/en.json';
import { ReCaptcha } from "@/components/recaptcha";
import { buildContactSchema } from '@/lib/contact-schema';

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const messages = enMessages;
  const schema = buildContactSchema();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      setErrorMessage("Please complete the reCAPTCHA verification.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("https://formspree.io/f/movkdgoa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: `Contact Form: ${data.subject}`,
          message: data.message,
          "g-recaptcha-response": recaptchaToken,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setRecaptchaToken(null);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar locale="en" />
        <main className="flex-1">
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
              
              {status === "sent" && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800 text-sm">✓ Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}
              
              {status === "error" && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800 text-sm">✗ {errorMessage}</p>
                </div>
              )}
              
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="name" style={{ color: 'black' }}>{(messages as any).dealers.form.first_name} *</label>
                    <input id="name" name="name" required className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#333333]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="email" style={{ color: 'black' }}>{(messages as any).dealers.form.email} *</label>
                    <input id="email" name="email" type="email" required className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#333333]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="subject" style={{ color: 'black' }}>{(messages as any).dealers.form.subject} *</label>
                  <input id="subject" name="subject" required className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#333333]" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="message" style={{ color: 'black' }}>{(messages as any).dealers.form.message} *</label>
                  <textarea id="message" name="message" rows={6} required className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#333333]" />
                </div>
                <div className="flex justify-center">
                  <ReCaptcha
                    onChange={(token) => setRecaptchaToken(token)}
                    onExpired={() => setRecaptchaToken(null)}
                  />
                </div>
                <button type="submit" disabled={status === "sending" || !recaptchaToken} className="px-4 py-2 bg-[#333333] text-white rounded-md hover:bg-[#555555] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
                  {status === "sending" ? "Sending..." : (messages as any).dealers.form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
        </main>
        <Footer locale="en" />
        <StickyContactButtons />
      </div>
    </>
  );
}
