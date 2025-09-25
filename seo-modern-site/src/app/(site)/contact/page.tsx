import type { Metadata } from "next";
import ClientContactPage from "./client";

export const metadata: Metadata = {
  title: "Contact Asay Global",
  description:
    "Get in touch with Asay Global. Call, email, WhatsApp or send us a message via the contact form.",
  keywords: [
    "contact",
    "contact Asay Global",
    "get a quote",
    "support",
    "sales",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Asay Global",
    description:
      "Reach our team for quotes, partnerships, and support inquiries.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ClientContactPage />;
}

 
