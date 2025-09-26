"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
      // Create mailto link as fallback
      const mailtoLink = `mailto:info@asayglobal.com?subject=${encodeURIComponent(`Contact Form: ${data.subject}`)}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nCompany: ${data.company || 'N/A'}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`
      )}`;
      
      // Open mailto link
      window.open(mailtoLink, '_blank');
      
      setStatus("sent");
      // Reset form
      (e.target as HTMLFormElement).reset();
      
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to open email client. Please contact us directly at info@asayglobal.com");
    }
  };

  return (
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

        <button 
          type="submit" 
          disabled={status !== "idle"} 
          className="px-4 py-2 bg-[#333333] text-white rounded-md disabled:opacity-50"
        >
          {status === "sending" ? "Opening Email..." : status === "sent" ? "Email Opened ✓" : "Send Email"}
        </button>
        
        {status === "error" && (
          <div className="text-red-600 text-sm mt-2">
            {errorMessage}
          </div>
        )}
        
        {status === "sent" && (
          <div className="text-green-600 text-sm mt-2">
            Your email client has been opened with the message. Please send the email to complete your inquiry.
          </div>
        )}
      </form>
    </div>
  );
}


