"use client"

import { PageHeader } from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';
import { useEffect, useState } from 'react';
import enMessages from '@/messages/en.json';

export default function UPVCSystemsPage() {
  
  

  

  const messages = enMessages;
  
  // Helper function to create locale-aware URLs
  const createUrl = (path: string) => path;

  const content = (
    <>
      <PageHeader
        title={(messages as any).upvc_systems.page_header.title}
        description={(messages as any).upvc_systems.page_header.description}
        breadcrumbItems={[
          { label: (messages as any).upvc_systems.page_header.breadcrumbs.home, href: createUrl("/") }, 
          { label: (messages as any).upvc_systems.page_header.breadcrumbs.services, href: createUrl("/services") }, 
          { label: (messages as any).upvc_systems.page_header.breadcrumbs.upvc_systems }
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* u-PVC Window & Door Systems */}
          <section className="bg-white border border-gray-200">
            <Link href={createUrl("/services/u-pvc-systems/window-door-systems")} aria-label={(messages as any).upvc_systems.window_door_systems.title}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/services/upvc-systems/pvc-window-and-door-system.jpg"
                  alt={(messages as any).upvc_systems.window_door_systems.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover bg-white transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </Link>
            <div className="p-5 md:p-6">
            <Link href={createUrl("/services/u-pvc-systems/window-door-systems")} aria-label={(messages as any).upvc_systems.window_door_systems.title} className="block">
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>{(messages as any).upvc_systems.window_door_systems.title}</h2>
            </Link>
            <p className="text-sm mb-4" style={{ color: "#565656" }}>
              {(messages as any).upvc_systems.window_door_systems.description}
            </p>
            <ul className="text-sm space-y-2" style={{ color: "#565656" }}>
              {(messages as any).upvc_systems.window_door_systems.features.map((feature: string, index: number) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href={createUrl("/services/u-pvc-systems/window-door-systems")}
                className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: "#333333" }}
              >
                {(messages as any).upvc_systems.window_door_systems.view_products}
              </Link>
            </div>
            </div>
          </section>

          {/* u-PVC Sliding Systems */}
          <section className="bg-white border border-gray-200">
            <Link href={createUrl("/services/u-pvc-systems/sliding-systems")} aria-label={(messages as any).upvc_systems.sliding_systems.title}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/services/upvc-systems/pvc-sliding-systems-1.jpg"
                  alt={(messages as any).upvc_systems.sliding_systems.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover bg-white transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </Link>
            <div className="p-5 md:p-6">
            <Link href={createUrl("/services/u-pvc-systems/sliding-systems")} aria-label={(messages as any).upvc_systems.sliding_systems.title} className="block">
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>{(messages as any).upvc_systems.sliding_systems.title}</h2>
            </Link>
            <p className="text-sm mb-4" style={{ color: "#565656" }}>
              {(messages as any).upvc_systems.sliding_systems.description}
            </p>
            <ul className="text-sm space-y-2" style={{ color: "#565656" }}>
              {(messages as any).upvc_systems.sliding_systems.features.map((feature: string, index: number) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href={createUrl("/services/u-pvc-systems/sliding-systems")}
                className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: "#333333" }}
              >
                {(messages as any).upvc_systems.sliding_systems.view_products}
              </Link>
            </div>
            </div>
          </section>
        </div>
        </div>
      </div>
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


