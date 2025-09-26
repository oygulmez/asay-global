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
                  <span className="font-medium" style={{ color: "black" }}>E-mail:</span> info@asayglobal.com
                </li>
                
                <li>
                  <span className="font-medium" style={{ color: "black" }}>Head Office (Turkey):</span><br/>
                  Atatürk Mahallesi Ertuğrul Gazi Sk. Metropol İstanbul, C Blok No2/131 Ataşehir İstanbul TR
                </li>
                <li>
                  <span className="font-medium" style={{ color: "black" }}>Head Office (Europe):</span><br/>
                  Keulenstraat 11 A, 7418 ET Deventer / The Netherlands
                </li>
                <li>
                  <span className="font-medium" style={{ color: "black" }}>Head Office (USA):</span><br/>
                  5835 Callaghan Rd. Ste 204, San Antonio, TX 78228, USA
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

 
