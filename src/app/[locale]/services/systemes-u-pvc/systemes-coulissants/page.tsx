export const runtime = "edge";
import {locales} from '@/i18n';
import SiteSliding from '../../../../../app/(site)/services/u-pvc-systems/sliding-systems/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages as any);
  return {
    title: t('upvc_systems.sliding_category.meta.title'),
    description: t('upvc_systems.sliding_category.meta.description'),
  };
}

export default async function SlidingPage() {
  return <SiteSliding />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
