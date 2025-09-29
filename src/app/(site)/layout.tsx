import {defaultLocale, locales} from '@/i18n';
import '../globals.css';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyContactButtons } from "@/components/sticky-contact-buttons";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={'en'} />
      <main className="flex-1">
        {children}
      </main>
      <Footer locale={'en'} />
      <StickyContactButtons />
    </div>
  )
}


