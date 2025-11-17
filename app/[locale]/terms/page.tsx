import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service and User Agreement',
};

export default async function TermsPage() {
  const t = await getTranslations('TermsPage');

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      <p className="text-muted-foreground mb-8">{t('lastUpdated')}</p>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('section1.title')}</h2>
          <p className="text-muted-foreground whitespace-pre-line">
            {t('section1.content')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('section2.title')}</h2>
          <p className="text-muted-foreground whitespace-pre-line">
            {t('section2.content')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('section3.title')}</h2>
          <p className="text-muted-foreground whitespace-pre-line">
            {t('section3.content')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('section4.title')}</h2>
          <p className="text-muted-foreground whitespace-pre-line">
            {t('section4.content')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('section5.title')}</h2>
          <p className="text-muted-foreground whitespace-pre-line">
            {t('section5.content')}
          </p>
        </section>
      </div>
    </div>
  );
}

