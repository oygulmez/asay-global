import { PageHeader } from "@/components/page-header";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact",
  description: "Contact Asay Global — B2B inquiries for structural solutions. Reach our team for u‑PVC, aluminum, glass and steel systems, pricing and partnerships.",
};

export default function ContactPage() {
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
        {/* Grid: Info / Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-lg border p-6 bg-white">
              <ul className="space-y-3 text-sm" style={{ color: "#565656" }}>
                
                <li>
                  <span className="font-medium" style={{ color: "black" }}>E-mail:</span> info@asayglobal.com
                </li>
                
                <li>
                  <span className="font-medium" style={{ color: "black" }}>Head Office (Europe):</span><br/>
                  Keulenstraat 11 A, 7418 ET Deventer / The Netherlands
                </li>
                <li>
                  <span className="font-medium" style={{ color: "black" }}>Head Office (USA):</span><br/>
                  5835 Callaghan Rd. Ste 204, San Antonio, TX 78228, USA
                </li>
                <li>
                  <span className="font-medium" style={{ color: "black" }}>Head Office (Turkey):</span><br/>
                  Atatürk Mahallesi Ertuğrul Gazi Sk. Metropol İstanbul, C Blok No2/131 Ataşehir İstanbul TR
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/dealers" className="inline-block px-4 py-2 bg-[#333333] text-white rounded-md">View Authorized Dealers</Link>
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

 
