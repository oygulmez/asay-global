"use client";

import { PageHeader } from "@/components/page-header";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';
import Script from 'next/script';
import { useState } from "react";
import enMessages from '@/messages/en.json';
import { ReCaptcha } from "@/components/recaptcha";
import { buildDealersSchema } from '@/lib/dealers-schema';

type Dealer = {
  country: string;
  flag: string;
  company: string;
  contact?: string;
  email?: string;
  phones?: string[];
  address?: string;
};

const dealers: Dealer[] = [
  {
    country: "Italy",
    flag: "https://flagcdn.com/w20/it.webp",
    company: "New House Steel by Brescia Roberto",
    contact: "Roberto Brescia",
    email: "roberto@steelframings.com",
    phones: ["+39 329 611 7121"],
    address: "Strada delle Canestrelle 17, 70124 Bari (BA), Italy",
  },
  {
    country: "Greece",
    flag: "/flags/gr.svg",
    company: "A Metal Komotini",
    email: "a.metal.komotini@gmail.com",
    phones: ["+30 6934 975 252"],
    address:
      "1st km Komotini – Alexandroupoli Road (Opposite Lagakis Market) Kikidion, Komotini, Greece",
  },
  {
    country: "Armenia",
    flag: "/flags/am.svg",
    company: "Arsham LLC",
    email: "info@arshamtrade.com",
    phones: ["+37441657011", "+37433657011"],
    address: "No.46/4 , Davtashen 2nd Bk , Yerevan, Armenia",
  },
  {
    country: "Netherlands",
    flag: "/flags/nl.svg",
    company: "Unit5 Bouw en Infra",
    contact: "Ingemar Miguel",
    email: "ingemar@unit5-bouw-infra.nl",
    phones: ["0031-(0)614831923"],
    address: "Loevesteinlaan 41, 2533 AG Den Haag, The Netherlands",
  },
  {
    country: "Peru",
    flag: "/flags/pe.svg",
    company: "Haisa Grupo Inmobiliario S.A.C.",
    contact: "Martín Gamarra Villaran",
    email: "yanachagavillage@gmail.com",
    phones: ["+51 933 952 170"],
    address: "Jr. Asuncion 555 Comas, Lima, Perú",
  },
];

export default function DealersPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const messages = enMessages;
  const schema = buildDealersSchema();

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
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      country: formData.get("country") as string,
      company: formData.get("company") as string,
      title: formData.get("title") as string,
      subject: formData.get("subject") as string,
      preferredDealer: formData.get("preferredDealer") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("https://formspree.io/f/movkdgoa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          company: data.company,
          subject: `Dealer Contact: ${data.subject}`,
          message: `Country: ${data.country}\nJob Title: ${data.title}\nPreferred Dealer: ${data.preferredDealer}\n\nMessage:\n${data.message}`,
          "g-recaptcha-response": recaptchaToken,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setRecaptchaToken(null);
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage((messages as any).dealers.form.error_message);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage((messages as any).dealers.form.network_error);
    }
  };

  return (
    <>
      <Script
        id="dealers-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar locale="en" />
        <main className="flex-1">
          <PageHeader
          title={(messages as any).dealers.page_header.title}
          description={(messages as any).dealers.page_header.description}
          breadcrumbItems={[
            { label: (messages as any).dealers.page_header.breadcrumbs.home, href: "/" },
            { label: (messages as any).dealers.page_header.breadcrumbs.dealers },
          ]}
        />

        <div className="container mx-auto px-6 py-16">
          {/* Dealers Grid */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {dealers.map((d, i) => (
                <div key={i} className="border rounded-lg p-6 bg-white h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <img src={d.flag} alt={d.country} width={18} height={12} className="rounded-none border" />
                    <span className="text-sm font-medium" style={{ color: '#565656' }}>{d.country}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 flex-shrink-0" style={{ color: 'black' }}>{d.company}</h3>
                  <div className="flex-1 space-y-2">
                    {d.contact && <p className="text-sm" style={{ color: '#565656' }}><span className="font-bold text-black">Contact:</span> {d.contact}</p>}
                    {d.address && <p className="text-sm" style={{ color: '#565656' }}>{d.address}</p>}
                    {d.phones && d.phones.map((p, idx) => (
                      <p key={idx} className="text-sm" style={{ color: '#565656' }}><span className="font-bold text-black">Phone:</span> {p}</p>
                    ))}
                    {d.email && <p className="text-sm" style={{ color: '#565656' }}><span className="font-bold text-black">E-mail:</span> {d.email}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-lg border p-6 bg-white max-w-4xl mx-auto">
              <h2 className="text-xl font-semibold mb-6" style={{ color: 'black' }}>{(messages as any).dealers.form.title}</h2>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="firstName" style={{ color: 'black' }}>{(messages as any).dealers.form.first_name}</label>
                    <input id="firstName" name="firstName" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="lastName" style={{ color: 'black' }}>{(messages as any).dealers.form.last_name}</label>
                    <input id="lastName" name="lastName" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="phone" style={{ color: 'black' }}>{(messages as any).dealers.form.phone}</label>
                    <input id="phone" name="phone" type="tel" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="email" style={{ color: 'black' }}>{(messages as any).dealers.form.email}</label>
                    <input id="email" name="email" type="email" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="country" style={{ color: 'black' }}>{(messages as any).dealers.form.country}</label>
                    <input id="country" name="country" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="company" style={{ color: 'black' }}>{(messages as any).dealers.form.company}</label>
                    <input id="company" name="company" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="title" style={{ color: 'black' }}>{(messages as any).dealers.form.job_title}</label>
                    <input id="title" name="title" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="subject" style={{ color: 'black' }}>{(messages as any).dealers.form.subject}</label>
                    <input id="subject" name="subject" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="preferredDealer" style={{ color: 'black' }}>{(messages as any).dealers.form.preferred_dealer}</label>
                  <select id="preferredDealer" name="preferredDealer" className="w-full border px-3 py-2 rounded-md focus:outline-none">
                    <option value="">{(messages as any).dealers.form.select_dealer}</option>
                    <option value="italy">Italy</option>
                    <option value="greece">Greece</option>
                    <option value="armenia">Armenia</option>
                    <option value="netherlands">Netherlands</option>
                    <option value="peru">Peru</option>
                    <option value="turkey">Turkey</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="message" style={{ color: 'black' }}>{(messages as any).dealers.form.message}</label>
                  <textarea id="message" name="message" rows={6} className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                </div>
                <div className="flex justify-center">
                  <ReCaptcha
                    onChange={(token) => setRecaptchaToken(token)}
                    onExpired={() => setRecaptchaToken(null)}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status !== "idle" || !recaptchaToken} 
                  className="px-4 py-2 bg-[#333333] text-white rounded-md disabled:opacity-50"
                >
                  {status === "sending" ? (messages as any).dealers.form.sending : status === "sent" ? (messages as any).dealers.form.sent : (messages as any).dealers.form.send}
                </button>
                
                {status === "error" && (
                  <div className="text-red-600 text-sm mt-2">
                    {errorMessage}
                  </div>
                )}
                
                {status === "sent" && (
                  <div className="text-green-600 text-sm mt-2">
                    {(messages as any).dealers.form.success_message}
                  </div>
                )}
              </form>
            </div>
        </div>
        </main>
        <Footer locale="en" />
        <StickyContactButtons />
      </div>
    </>
  );
}
