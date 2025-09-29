import {locales} from '@/i18n';
import SiteGlass from '../../../(site)/services/architectural-glass-solutions/page';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  return {
    title: "Architectural Glass Solutions",
    description: "Premium glass solutions for architectural applications, providing transparency, energy efficiency, and modern aesthetics.",
  };
}

export default async function ArchitecturalGlassSolutionsPage() {
  return <SiteGlass />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
