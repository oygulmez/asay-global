export const runtime = "edge";
import HS76SlidingPage from '@/app/(site)/services/u-pvc-systems/hs76-sliding/page';

export default function LocaleHS76SlidingPage() {
  return <HS76SlidingPage />;
}
export function generateStaticParams() {
  return [{locale: 'en'}];
}
