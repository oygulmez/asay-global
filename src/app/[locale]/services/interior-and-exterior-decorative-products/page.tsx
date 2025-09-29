import {locales} from '@/i18n';
import SiteDecorative from '../../../services/interior-and-exterior-decorative-products/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages as any);
  return {
    title: t('decorative_products.meta.title'),
    description: t('decorative_products.meta.description'),
  };
}

export default async function InteriorAndExteriorDecorativeProductsPage() {
  return <SiteDecorative />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
