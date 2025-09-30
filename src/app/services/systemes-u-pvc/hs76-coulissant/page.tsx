import {locales} from '@/i18n';
import SiteHS76 from '@/app/services/u-pvc-systems/hs76-sliding/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages as any);
  return {
    title: t('upvc_systems.product_pages.hs76_sliding.page_header.title'),
    description: t('upvc_systems.product_pages.hs76_sliding.page_header.description'),
  };
}

export default async function HS76Page() {
  return <SiteHS76 />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
