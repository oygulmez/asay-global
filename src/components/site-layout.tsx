"use client";

import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyContactButtons } from "@/components/sticky-contact-buttons";

type Locale = 'en' | undefined;

interface SiteLayoutProps {
  children: ReactNode;
  locale?: Locale;
}

/**
 * Standardized site layout wrapper component
 * Provides consistent structure: Navbar -> Main -> Footer -> StickyContactButtons
 * Eliminates code duplication across all pages
 */
export function SiteLayout({ children, locale = "en" }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
      <StickyContactButtons />
    </div>
  );
}

