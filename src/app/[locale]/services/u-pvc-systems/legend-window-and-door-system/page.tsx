export const runtime = "edge";
import LegendWindowAndDoorSystemPage from '@/app/(site)/services/u-pvc-systems/legend-window-and-door-system/page';

export default function LocaleLegendWindowAndDoorSystemPage() {
  return <LegendWindowAndDoorSystemPage />;
}
export function generateStaticParams() {
  return [{locale: 'en'}];
}
