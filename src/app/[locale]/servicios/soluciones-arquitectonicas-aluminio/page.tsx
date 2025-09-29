export const runtime = "edge";
import {locales} from '@/i18n';
import SiteAluminum from '../../../(site)/services/aluminum-architectural-solutions/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages as any);
  return {
    title: t('aluminum_architectural_solutions.meta.title'),
    description: t('aluminum_architectural_solutions.meta.description'),
  };
}

export default async function AluminumPage() {
  return <SiteAluminum />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
