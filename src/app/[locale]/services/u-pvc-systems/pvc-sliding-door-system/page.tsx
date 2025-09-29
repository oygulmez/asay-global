import PvcSlidingDoorSystemPage from '@/app/(site)/services/u-pvc-systems/pvc-sliding-door-system/page';

export default function LocalePvcSlidingDoorSystemPage() {
  return <PvcSlidingDoorSystemPage />;
}
export function generateStaticParams() {
  return [{locale: 'en'}];
}
