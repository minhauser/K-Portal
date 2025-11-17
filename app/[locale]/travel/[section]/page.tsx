import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Link } from '@/components/link';

const validSections = [
  'popularDestinations',
  'touristTransportation',
  'hotelsAccommodation',
  'foodRestaurants',
  'cultureTraditions',
  'tripPlanning',
  'seasonsWeather',
  'travelBudget',
  'touristSafety',
  'attractions',
];

export async function generateStaticParams() {
  return validSections.map((section) => ({
    section,
  }));
}

export async function generateMetadata({
  params: { locale, section },
}: {
  params: { locale: string; section: string };
}): Promise<Metadata> {
  setRequestLocale(locale);

  const t = await getTranslations('TravelPage');
  
  if (!validSections.includes(section)) {
    return {
      title: 'Section Not Found',
    };
  }

  return {
    title: `${t(`${section}.title`)} - Travel in Korea`,
    description: t(`${section}.content`),
  };
}

export default async function TravelSectionPage({
  params: { locale, section },
}: {
  params: { locale: string; section: string };
}) {
  setRequestLocale(locale);

  const t = await getTranslations('TravelPage');

  if (!validSections.includes(section)) {
    notFound();
  }

  const sectionTitle = t(`${section}.title`);
  const sectionContent = t(`${section}.content`);
  const sectionDetails = t(`${section}.details`, { defaultValue: sectionContent });

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/travel"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
        >
          ← Back to Travel in Korea
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-center">{sectionTitle}</h1>
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="border rounded-lg p-8 bg-card">
            <p className="text-xl text-muted-foreground mb-6 text-center">{sectionContent}</p>
            <div className="text-muted-foreground whitespace-pre-line text-center">
              {sectionDetails}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

