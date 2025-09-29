import {locales} from '@/i18n';
import SiteUPVC from '../../../(site)/services/u-pvc-systems/page';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  return {
    title: "u-PVC Systems",
    description: "u‑PVC product families covering window, door and sliding systems engineered for durability, energy efficiency and low maintenance.",
  };
}

export default async function UPVCSystemsPage() {
  return <SiteUPVC />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
