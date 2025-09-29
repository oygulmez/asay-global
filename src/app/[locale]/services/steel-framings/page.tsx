import {locales} from '@/i18n';
import SiteSteel from '../../../(site)/services/steel-framings/page';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  return {
    title: "Steel Framings",
    description: "Robust steel structural solutions designed for durability and strength in commercial and industrial construction projects.",
  };
}

export default async function SteelFramingsPage() {
  return <SiteSteel />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
