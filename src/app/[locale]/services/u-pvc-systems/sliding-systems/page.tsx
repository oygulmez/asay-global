import SlidingSystemsPage from '@/app/services/u-pvc-systems/sliding-systems/page';

export default function LocaleSlidingSystemsPage() {
  return <SlidingSystemsPage />;
}
export function generateStaticParams() {
  return [{locale: 'en'}];
}
