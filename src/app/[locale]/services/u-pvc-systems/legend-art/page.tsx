import LegendArtPage from '@/app/services/u-pvc-systems/legend-art/page';

export default function LocaleLegendArtPage() {
  return <LegendArtPage />;
}
export function generateStaticParams() {
  return [{locale: 'en'}];
}
