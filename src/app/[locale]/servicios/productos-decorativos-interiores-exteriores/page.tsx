import {locales} from '@/i18n';
import SiteInteriorAndExteriorDecorativeProducts from '../../services/interior-and-exterior-decorative-products/page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  let {locale} = await params;
  if (!['en','fr','es'].includes(locale)) locale = 'en';
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  return {
    title: messages.services.interior_exterior_decorative.meta.title,
    description: messages.services.interior_exterior_decorative.meta.description,
  };
}

export default function ProductosDecorativosInterioresExterioresPage() {
  return <SiteInteriorAndExteriorDecorativeProducts />;
}
export function generateStaticParams() {
  return [{locale: 'es'}];
}
