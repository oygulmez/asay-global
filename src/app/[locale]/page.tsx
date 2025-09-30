import { locales } from '@/i18n';
import { HeroSectionOne } from '@/components/hero-section-1';
import { Logos3 } from '@/components/blocks/logos3';
import CallToAction from '@/components/call-to-action';

interface LocalePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale: rawLocale } = await params;
  const locale = ['en', 'fr', 'es'].includes(rawLocale) ? rawLocale : 'en';
  // Bileşenler kendi içinde locale/messaging yönetiyor; props geçmeye gerek yok
  return (
    <>
      <HeroSectionOne />
      <CallToAction />
    </>
  );
}