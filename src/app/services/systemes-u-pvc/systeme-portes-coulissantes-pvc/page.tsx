import {locales} from '@/i18n';
import SitePVCSlidingDoor from '../../../../../app/services/u-pvc-systems/pvc-sliding-door-system/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages as any);
  return {
    title: t('upvc_systems.product_pages.pvc_sliding_door.page_header.title'),
    description: t('upvc_systems.product_pages.pvc_sliding_door.page_header.description'),
  };
}

export default async function PVCSlidingDoorPage() {
  return <SitePVCSlidingDoor />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
