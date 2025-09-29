import {locales} from '@/i18n';
import SiteContact from '../../(site)/contact/page';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages as any);
  return {
    title: t('contact.meta.title'),
    description: t('contact.meta.description'),
  };
}

export default async function ContactPage() {
  return <SiteContact />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
