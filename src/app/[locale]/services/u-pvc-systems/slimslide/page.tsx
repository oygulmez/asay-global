import SlimslidePage from '@/app/(site)/services/u-pvc-systems/slimslide/page';

export default function LocaleSlimslidePage() {
  return <SlimslidePage />;
}
export function generateStaticParams() {
  return [{locale: 'en'}];
}
