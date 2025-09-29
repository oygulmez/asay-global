import PvcSlidingDoorSystemPage from '@/app/services/u-pvc-systems/pvc-sliding-door-system/page';

export default function LocalePvcSlidingDoorSystemPage() {
  return <PvcSlidingDoorSystemPage />;
}
export function generateStaticParams() {
  return [{locale: 'en'}];
}
