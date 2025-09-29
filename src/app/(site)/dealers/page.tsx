"use client";

import { PageHeader } from "@/components/page-header";
import { useState, useEffect } from "react";
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';

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
    flag: "https://flagcdn.com/w20/it.png",
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
];

export default function DealersPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [locale, setLocale] = useState<'en' | 'fr' | 'es'>('en');

  useEffect(() => {
    const seg = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'en';
    setLocale(seg === 'fr' ? 'fr' : seg === 'es' ? 'es' : 'en');
  }, []);

  const messages = locale === 'fr' ? frMessages : locale === 'es' ? esMessages : enMessages;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      const response = await fetch("https://formspree.io/f/xpwnqkqr", {
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
        }),
      });

      if (response.ok) {
        setStatus("sent");
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
      <PageHeader
        title={(messages as any).dealers.page_header.title}
        description={(messages as any).dealers.page_header.description}
        breadcrumbItems={[
          { label: (messages as any).dealers.page_header.breadcrumbs.home, href: "/" },
          { label: (messages as any).dealers.page_header.breadcrumbs.dealers },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Dealers vertical list */}
          <div className="space-y-6">
            {dealers.map((d, i) => (
              <div key={i} className="border rounded-lg p-6 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <img src={d.flag} alt={d.country} width={18} height={12} className="rounded-none border" />
                  <span className="text-sm" style={{ color: '#565656' }}>{d.country}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1" style={{ color: 'black' }}>{d.company}</h3>
                {d.contact && <p className="text-sm mb-1" style={{ color: '#565656' }}>Contact: {d.contact}</p>}
                {d.address && <p className="text-sm mb-1" style={{ color: '#565656' }}>{d.address}</p>}
                {d.phones && d.phones.map((p, idx) => (
                  <p key={idx} className="text-sm mb-1" style={{ color: '#565656' }}>Phone: {p}</p>
                ))}
                {d.email && <p className="text-sm mb-1" style={{ color: '#565656' }}>E-mail: {d.email}</p>}
              </div>
            ))}
          </div>

          {/* Right: Contact form */}
          <div className="rounded-lg border p-6 bg-white h-fit">
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
                  <option value="turkey">Turkey</option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="netherlands">Netherlands</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="message" style={{ color: 'black' }}>{(messages as any).dealers.form.message}</label>
                <textarea id="message" name="message" rows={6} className="w-full border px-3 py-2 rounded-md focus:outline-none" />
              </div>
              <button 
                type="submit" 
                disabled={status !== "idle"} 
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
      </div>
    </>
  );
}


