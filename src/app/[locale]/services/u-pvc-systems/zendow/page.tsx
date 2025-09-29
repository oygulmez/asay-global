import ZendowPage from '@/app/services/u-pvc-systems/zendow/page';

export default function LocaleZendowPage() {
  return <ZendowPage />;
}
export function generateStaticParams() {
  return [{locale: 'en'}];
}
