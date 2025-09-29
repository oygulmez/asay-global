"use client";

import { useState, useEffect } from "react";
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';

export default function ContactForm() {
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
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      subject: formData.get("topic") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("https://formspree.io/f/xpwnqkqr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage((messages as any).contact.contact_form.error_message);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage((messages as any).contact.contact_form.network_error);
    }
  };

  return (
    <div className="rounded-lg border p-6 bg-white">
      <h2 className="text-xl font-semibold mb-6" style={{ color: "black" }}>{(messages as any).contact.contact_form.title}</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="name" style={{ color: "black" }}>{(messages as any).contact.contact_form.name}</label>
            <input id="name" name="name" required className="w-full border px-3 py-2 rounded-md focus:outline-none" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="email" style={{ color: "black" }}>{(messages as any).contact.contact_form.email}</label>
            <input id="email" name="email" type="email" required className="w-full border px-3 py-2 rounded-md focus:outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="phone" style={{ color: "black" }}>{(messages as any).contact.contact_form.phone}</label>
            <input id="phone" name="phone" type="tel" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="company" style={{ color: "black" }}>{(messages as any).contact.contact_form.company}</label>
            <input id="company" name="company" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="topic" style={{ color: "black" }}>{(messages as any).contact.contact_form.topic}</label>
          <select id="topic" name="topic" className="w-full border px-3 py-2 rounded-md focus:outline-none">
            <option value="Contact Request">{(messages as any).contact.contact_form.topic_options.contact_request}</option>
            <option value="Dealership Application">{(messages as any).contact.contact_form.topic_options.dealership_application}</option>
            <option value="Pricing Inquiry">{(messages as any).contact.contact_form.topic_options.pricing_inquiry}</option>
            <option value="Other">{(messages as any).contact.contact_form.topic_options.other}</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="message" style={{ color: "black" }}>{(messages as any).contact.contact_form.message}</label>
          <textarea id="message" name="message" rows={6} className="w-full border px-3 py-2 rounded-md focus:outline-none" />
        </div>

        <button 
          type="submit" 
          disabled={status !== "idle"} 
          className="px-4 py-2 bg-[#333333] text-white rounded-md disabled:opacity-50"
        >
          {status === "sending" ? (messages as any).contact.contact_form.sending : status === "sent" ? (messages as any).contact.contact_form.sent : (messages as any).contact.contact_form.send}
        </button>
        
        {status === "error" && (
          <div className="text-red-600 text-sm mt-2">
            {errorMessage}
          </div>
        )}
        
        {status === "sent" && (
          <div className="text-green-600 text-sm mt-2">
            {(messages as any).contact.contact_form.success_message}
          </div>
        )}
      </form>
    </div>
  );
}


