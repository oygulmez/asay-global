import type {Metadata} from 'next';
import { locales } from '@/i18n';
import '../globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale as any} />
      <main className="flex-1">
        {children}
      </main>
      <Footer locale={locale as any} />
      <StickyContactButtons />
    </div>
  );
}


