import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations('meta.home');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function HomePage() {
  return null;
}


