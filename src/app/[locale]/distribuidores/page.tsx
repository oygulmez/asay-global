import {locales} from '@/i18n';
import SiteDealers from '../dealers/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  return {
    title: messages.dealers.meta.title,
    description: messages.dealers.meta.description,
  };
}

export default function DistribuidoresPage() {
  return <SiteDealers />;
}
export function generateStaticParams() {
  return [{locale: 'es'}];
}
