import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { Link } from '@/components/link';

export const metadata: Metadata = {
  title: 'Work in Korea',
  description: 'Guide to working in South Korea',
};

export default async function WorkPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const t = await getTranslations('WorkPage');

  const sections = [
    { key: 'visa', title: t('visa.title'), content: t('visa.content') },
    { key: 'jobSearch', title: t('jobSearch.title'), content: t('jobSearch.content') },
    { key: 'workCulture', title: t('workCulture.title'), content: t('workCulture.content') },
    { key: 'salary', title: t('salary.title'), content: t('salary.content') },
    { key: 'workingHours', title: t('workingHours.title'), content: t('workingHours.content') },
    { key: 'taxes', title: t('taxes.title'), content: t('taxes.content') },
    { key: 'resume', title: t('resume.title'), content: t('resume.content') },
    { key: 'interview', title: t('interview.title'), content: t('interview.content') },
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
                href={`/work/${section.key}`}
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

