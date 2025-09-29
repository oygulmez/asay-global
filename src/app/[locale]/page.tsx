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
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages);

  return (
    <>
      <HeroSectionOne 
        heading={t('homepage.hero.heading')}
        description={t('homepage.hero.description')}
        buttonText={t('homepage.hero.button_text')}
        buttonLink="/contact"
        locale={locale}
      />
      <Logos3 
        heading={t('homepage.logos.heading')}
        description={t('homepage.logos.description')}
      />
      <CallToAction 
        heading={t('homepage.cta.heading')}
        description={t('homepage.cta.description')}
        buttonText={t('homepage.cta.button_text')}
        buttonLink="/contact"
        locale={locale}
      />
    </>
  );
}