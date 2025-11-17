import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Link } from '@/components/link';

export const metadata: Metadata = {
  title: 'Travel in Korea',
  description: 'Complete guide to traveling and tourism in Korea',
};

export default async function TravelPage() {
  const t = await getTranslations('TravelPage');

  const sections = [
    { key: 'popularDestinations', title: t('popularDestinations.title'), content: t('popularDestinations.content') },
    { key: 'touristTransportation', title: t('touristTransportation.title'), content: t('touristTransportation.content') },
    { key: 'hotelsAccommodation', title: t('hotelsAccommodation.title'), content: t('hotelsAccommodation.content') },
    { key: 'foodRestaurants', title: t('foodRestaurants.title'), content: t('foodRestaurants.content') },
    { key: 'cultureTraditions', title: t('cultureTraditions.title'), content: t('cultureTraditions.content') },
    { key: 'tripPlanning', title: t('tripPlanning.title'), content: t('tripPlanning.content') },
    { key: 'seasonsWeather', title: t('seasonsWeather.title'), content: t('seasonsWeather.content') },
    { key: 'travelBudget', title: t('travelBudget.title'), content: t('travelBudget.content') },
    { key: 'touristSafety', title: t('touristSafety.title'), content: t('touristSafety.content') },
    { key: 'attractions', title: t('attractions.title'), content: t('attractions.content') },
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
                href={`/travel/${section.key}`}
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

