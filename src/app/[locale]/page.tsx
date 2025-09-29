import {locales} from '@/i18n';
import SiteHome from '../(site)/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages as any);
  return {
    title: t('meta.home.title'),
    description: t('meta.home.description'),
  };
}

export default async function HomePage() {
  // Reuse the main homepage under locale path
  return <SiteHome />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}


