import {locales} from '@/i18n';
import SiteGlass from '@/app/services/architectural-glass-solutions/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const t = (key: string) => key.split('.').reduce((o, k) => o?.[k], messages as any);
  return {
    title: t('architectural_glass_solutions.meta.title'),
    description: t('architectural_glass_solutions.meta.description'),
  };
}

export default async function GlassPage() {
  return <SiteGlass />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
