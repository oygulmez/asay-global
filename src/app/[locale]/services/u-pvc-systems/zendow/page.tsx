export const runtime = "edge";
import ZendowPage from '@/app/(site)/services/u-pvc-systems/zendow/page';

export default function LocaleZendowPage() {
  return <ZendowPage />;
}
export function generateStaticParams() {
  return [{locale: 'en'}];
}
