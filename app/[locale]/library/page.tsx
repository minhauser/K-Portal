import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { LibraryContent } from '@/components/library-content';

export const metadata: Metadata = {
  title: 'Library',
  description: 'Korean language books library',
};

export default async function LibraryPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const t = await getTranslations('LibraryPage');

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">{t('title')}</h1>
      <p className="text-xl text-muted-foreground mb-12 text-center">{t('description')}</p>
      
      <LibraryContent />
    </div>
  );
}

