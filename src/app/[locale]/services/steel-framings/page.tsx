import {locales} from '@/i18n';
import SiteSteel from '../../../(site)/services/steel-framings/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages as any);
  return {
    title: t('steel_framings.meta.title'),
    description: t('steel_framings.meta.description'),
  };
}

export default async function SteelFramingsPage() {
  return <SiteSteel />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
