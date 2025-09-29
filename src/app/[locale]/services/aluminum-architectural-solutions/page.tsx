import {locales} from '@/i18n';
import SiteAluminum from '../../../(site)/services/aluminum-architectural-solutions/page';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  return {
    title: "Aluminum Architectural Solutions",
    description: "Modern aluminum systems and architectural solutions offering excellent performance and contemporary design possibilities.",
  };
}

export default async function AluminumArchitecturalSolutionsPage() {
  return <SiteAluminum />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
