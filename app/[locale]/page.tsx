'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/components/link';
import { Cards } from '@/components/cards';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          {t('title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          {t('description')}
        </p>
      </section>

      <Cards />

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">{t('getStarted')}</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          {t('getStartedDescription')}
        </p>
        <Link
          href="/library"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          {t('startChat')}
        </Link>
      </section>
    </div>
  );
}

