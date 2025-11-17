import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { Link } from '@/components/link';

export const metadata: Metadata = {
  title: 'Halal in Korea',
  description: 'Complete guide for Muslims living in or visiting Korea',
};

export default async function HalalPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const t = await getTranslations('HalalPage');

  const sections = [
    { key: 'halalRestaurants', title: t('halalRestaurants.title'), content: t('halalRestaurants.content') },
    { key: 'mosques', title: t('mosques.title'), content: t('mosques.content') },
    { key: 'halalFood', title: t('halalFood.title'), content: t('halalFood.content') },
    { key: 'islamicCommunity', title: t('islamicCommunity.title'), content: t('islamicCommunity.content') },
    { key: 'prayerFacilities', title: t('prayerFacilities.title'), content: t('prayerFacilities.content') },
    { key: 'halalShopping', title: t('halalShopping.title'), content: t('halalShopping.content') },
    { key: 'islamicEvents', title: t('islamicEvents.title'), content: t('islamicEvents.content') },
    { key: 'muslimFriendlyServices', title: t('muslimFriendlyServices.title'), content: t('muslimFriendlyServices.content') },
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
                href={`/halal/${section.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                {t('viewMore')}
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

