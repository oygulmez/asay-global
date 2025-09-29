export const runtime = "edge";
import {locales} from '@/i18n';
import SiteContact from '@/app/(site)/contact/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  return {
    title: messages.contact.meta.title,
    description: messages.contact.meta.description,
  };
}

export default function ContactoPage() {
  return <SiteContact />;
}
export function generateStaticParams() {
  return [{locale: 'es'}];
}
