import {locales} from '@/i18n';
import SiteDealers from '../../(site)/dealers/page';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages as any);
  return {
    title: t('dealers.page_header.title'),
    description: t('dealers.page_header.description'),
  };
}

export default async function DealersPage() {
  return <SiteDealers />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
