export const runtime = "edge";
import {locales} from '@/i18n';
import SiteAbout from '../../(site)/about/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages as any);
  return {
    title: t('about.meta.title'),
    description: t('about.meta.description'),
  };
}

export default async function AboutPage() {
  return <SiteAbout />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
