import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { Link } from '@/components/link';

export const metadata: Metadata = {
  title: 'Life in Korea',
  description: 'Comprehensive guide to living in South Korea',
};

export default async function LifePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const t = await getTranslations('LifePage');

  const sections = [
    { key: 'accommodation', title: t('accommodation.title'), content: t('accommodation.content') },
    { key: 'healthcare', title: t('healthcare.title'), content: t('healthcare.content') },
    { key: 'transportation', title: t('transportation.title'), content: t('transportation.content') },
    { key: 'culture', title: t('culture.title'), content: t('culture.content') },
    { key: 'banking', title: t('banking.title'), content: t('banking.content') },
    { key: 'shopping', title: t('shopping.title'), content: t('shopping.content') },
    { key: 'food', title: t('food.title'), content: t('food.content') },
    { key: 'language', title: t('language.title'), content: t('language.content') },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">{t('title')}</h1>
      <p className="text-xl text-muted-foreground mb-12 text-center">{t('description')}</p>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.key} className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">{section.title}</h2>
            <p className="text-muted-foreground whitespace-pre-line text-center mb-4">
              {section.content}
            </p>
            <div className="text-center">
              <Link
                href={`/life/${section.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                {t('viewMore', { defaultValue: 'View More' })}
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

