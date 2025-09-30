import SiteSteelFramings from '@/app/services/steel-framings/page';

export async function generateMetadata() {
  const messages = (await import('@/messages/fr.json')).default as any;
  return {
    title: messages.services.steel_framings.meta.title,
    description: messages.services.steel_framings.meta.description,
  };
}

export default function StructuresAcierPage() {
  return <SiteSteelFramings />;
}
