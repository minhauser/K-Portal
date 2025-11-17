import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { Link } from '@/components/link';

export const metadata: Metadata = {
  title: 'Study in Korea',
  description: 'Guide to studying in South Korea',
};

export default async function StudyPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const t = await getTranslations('StudyPage');

  const sections = [
    { key: 'universities', title: t('universities.title'), content: t('universities.content') },
    { key: 'scholarships', title: t('scholarships.title'), content: t('scholarships.content') },
    { key: 'admission', title: t('admission.title'), content: t('admission.content') },
    { key: 'languageRequirements', title: t('languageRequirements.title'), content: t('languageRequirements.content') },
    { key: 'costs', title: t('costs.title'), content: t('costs.content') },
    { key: 'studentLife', title: t('studentLife.title'), content: t('studentLife.content') },
    { key: 'partTimeWork', title: t('partTimeWork.title'), content: t('partTimeWork.content') },
    { key: 'afterGraduation', title: t('afterGraduation.title'), content: t('afterGraduation.content') },
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
                href={`/study/${section.key}`}
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

