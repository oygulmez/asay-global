"use client"

import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';
import CallToAction from "@/components/call-to-action";
import enMessages from '@/messages/en.json';

export default function Product1Page() {
  const messages = enMessages;
  
  const createUrl = (path: string) => path;

  const content = (
    <>
      <PageHeader
        title="Product 1"
        description="Premium railing system with exceptional durability and modern design."
        breadcrumbItems={[
          { label: "Home", href: createUrl("/") },
          { label: "Services", href: createUrl("/services") },
          { label: "Handrails & Railings", href: createUrl("/services/handrails-railings") },
          { label: "Railing Systems", href: createUrl("/services/handrails-railings/railing-systems") },
          { label: "Product 1" },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Product Image */}
          <div className="relative overflow-hidden rounded-2xl border p-2 bg-white ring-1 ring-gray-200">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/services/handrails-railings/railing-systems/product-1.jpg"
                alt="Product 1"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Features */}
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>General Features</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#565656" }}>
                Premium railing system designed for exceptional durability and modern aesthetics. 
                Engineered with high-quality materials to ensure long-lasting performance and safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>Technical Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm" style={{ color: "#565656" }}>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Material:</span> Premium Steel
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Finish:</span> Powder Coated
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Height:</span> Standard 1100mm
                </div>
                <div>
                  <span className="font-medium" style={{ color: "black" }}>Warranty:</span> 10 Years
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>Key Features</h2>
              <ul className="space-y-2 text-sm" style={{ color: "#565656" }}>
                <li>• Exceptional durability and strength</li>
                <li>• Modern and elegant design</li>
                <li>• Easy installation process</li>
                <li>• Low maintenance requirements</li>
                <li>• Weather-resistant finish</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale="en" />
      <main className="flex-1">
        {content}
      </main>
      <Footer locale="en" />
      <StickyContactButtons />
    </div>
  );
}

