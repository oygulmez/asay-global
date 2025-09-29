export const runtime = "edge";
import LegendArtPage from '@/app/(site)/services/u-pvc-systems/legend-art/page';

export default function LocaleLegendArtPage() {
  return <LegendArtPage />;
}
export function generateStaticParams() {
  return [{locale: 'en'}];
}
