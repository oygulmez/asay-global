import {locales} from '@/i18n';
import SiteUPVC from '../../../(site)/services/u-pvc-systems/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages as any);
  return {
    title: t('upvc_systems.meta.title'),
    description: t('upvc_systems.meta.description'),
  };
}

export default async function UPVCPage() {
  return <SiteUPVC />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
