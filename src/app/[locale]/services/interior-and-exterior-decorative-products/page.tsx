import {locales} from '@/i18n';
import SiteDecorative from '../../../(site)/services/interior-and-exterior-decorative-products/page';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  return {
    title: "Interior and Exterior Decorative Products",
    description: "High-quality decorative materials for both interior and exterior applications, enhancing the aesthetic appeal of your projects.",
  };
}

export default async function InteriorAndExteriorDecorativeProductsPage() {
  return <SiteDecorative />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
