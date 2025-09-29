export const runtime = "edge";
import {locales} from '@/i18n';
import SiteZendow from '../../../../../app/(site)/services/u-pvc-systems/zendow/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages as any);
  return {
    title: t('upvc_systems.product_pages.zendow.page_header.title'),
    description: t('upvc_systems.product_pages.zendow.page_header.description'),
  };
}

export default async function ZendowPage() {
  return <SiteZendow />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
