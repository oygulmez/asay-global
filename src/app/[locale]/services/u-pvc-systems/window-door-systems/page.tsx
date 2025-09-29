export const runtime = "edge";
import WindowDoorCategoryPage from '@/app/(site)/services/u-pvc-systems/window-door-systems/page';

export default function LocaleWindowDoorSystemsPage() {
  return <WindowDoorCategoryPage />;
}
export function generateStaticParams() {
  return [{locale: 'en'}];
}
