import {locales} from '@/i18n';
import SiteSteelFramings from '../steel-framings/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  return {
    title: messages.services.steel_framings.meta.title,
    description: messages.services.steel_framings.meta.description,
  };
}

export default function StructuresAcierPage() {
  return <SiteSteelFramings />;
}
export function generateStaticParams() {
  return [{locale: 'fr'}];
}
