export const runtime = "edge";
import {locales} from '@/i18n';
import SiteLegendArt from '../../../../../app/(site)/services/u-pvc-systems/legend-art/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages as any);
  return {
    title: t('upvc_systems.product_pages.legend_art.page_header.title'),
    description: t('upvc_systems.product_pages.legend_art.page_header.description'),
  };
}

export default async function LegendArtPage() {
  return <SiteLegendArt />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
