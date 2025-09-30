import {locales} from '@/i18n';
import SiteWindowDoor from '@/app/services/u-pvc-systems/window-door-systems/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages as any);
  return {
    title: t('upvc_systems.window_door_category.meta.title'),
    description: t('upvc_systems.window_door_category.meta.description'),
  };
}

export default async function WindowDoorPage() {
  return <SiteWindowDoor />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
