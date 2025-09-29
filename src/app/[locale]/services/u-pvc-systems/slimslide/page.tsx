import SlimslidePage from '@/app/services/u-pvc-systems/slimslide/page';

export default function LocaleSlimslidePage() {
  return <SlimslidePage />;
}
export function generateStaticParams() {
  return [{locale: 'en'}];
}
