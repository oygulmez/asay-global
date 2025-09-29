import HS76SlidingPage from '@/app/services/u-pvc-systems/hs76-sliding/page';

export default function LocaleHS76SlidingPage() {
  return <HS76SlidingPage />;
}
export function generateStaticParams() {
  return [{locale: 'en'}];
}
