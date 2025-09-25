"use client";

import { PageHeader } from "@/components/page-header";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 800); // placeholder submit
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We’d love to hear from you. Reach us via the form or the contact details below."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        {/* Grid: Map + Info / Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map + Contact Info */}
          <div className="space-y-6">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border">
              <iframe
                title="Asay Global Address Map"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={
                  "https://www.google.com/maps?q=Atat%C3%BCrk%20Mahallesi%20Ertu%C4%9Frul%20Gazi%20Sk.%20Metropol%20%C4%B0stanbul,%20C%20Blok%20No2/131%20Ata%C5%9Fehir%20%C4%B0stanbul%20TR&output=embed"
                }
              />
            </div>

            <div className="rounded-lg border p-6 bg-white">
              <h2 className="text-xl font-semibold mb-4" style={{ color: "black" }}>Communication</h2>
              <ul className="space-y-3 text-sm" style={{ color: "#565656" }}>
                <li>
                  <span className="font-medium" style={{ color: "black" }}>Phone:</span> +90 535 202 68 77
                </li>
                <li>
                  <span className="font-medium" style={{ color: "black" }}>WhatsApp:</span> <a className="underline" href="https://wa.me/905352026877" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                </li>
                <li>
                  <span className="font-medium" style={{ color: "black" }}>E-mail:</span> info@asayglobal.com
                </li>
                <li>
                  <span className="font-medium" style={{ color: "black" }}>E-mail:</span> ata@asayglobal.com
                </li>
                <li>
                  <span className="font-medium" style={{ color: "black" }}>Address:</span> Atatürk Mahallesi Ertuğrul Gazi Sk. Metropol İstanbul, C Blok No2/131 Ataşehir İstanbul TR
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/dealers" className="inline-block px-4 py-2 bg-black text-white rounded-md">View Authorized Dealers</Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border p-6 bg-white">
            <h2 className="text-xl font-semibold mb-6" style={{ color: "black" }}>Get in touch</h2>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="name" style={{ color: "black" }}>Name, Surname</label>
                  <input id="name" name="name" required className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="email" style={{ color: "black" }}>E-mail Address</label>
                  <input id="email" name="email" type="email" required className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="phone" style={{ color: "black" }}>Phone Number</label>
                  <input id="phone" name="phone" type="tel" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="company" style={{ color: "black" }}>Company Name (Optional)</label>
                  <input id="company" name="company" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="topic" style={{ color: "black" }}>Select a Topic</label>
                <select id="topic" name="topic" className="w-full border px-3 py-2 rounded-md focus:outline-none">
                  <option value="Contact Request">Contact Request</option>
                  <option value="Dealership Application">Dealership Application</option>
                  <option value="Pricing Inquiry">Pricing Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="message" style={{ color: "black" }}>Your Message</label>
                <textarea id="message" name="message" rows={6} className="w-full border px-3 py-2 rounded-md focus:outline-none" />
              </div>

              <button type="submit" disabled={status!=="idle"} className="px-4 py-2 bg-black text-white rounded-md">
                {status === "sending" ? "Sending..." : status === "sent" ? "Sent" : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

 
