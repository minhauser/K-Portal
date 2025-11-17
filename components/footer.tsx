'use client';

import { useTranslations } from 'next-intl';
import { Link } from './link';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">K-Portal</h3>
            <p className="text-sm text-muted-foreground">
              {t('description')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/life" className="text-muted-foreground hover:text-primary">
                  {t('life')}
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-muted-foreground hover:text-primary">
                  {t('work')}
                </Link>
              </li>
              <li>
                <Link href="/study" className="text-muted-foreground hover:text-primary">
                  {t('study')}
                </Link>
              </li>
              <li>
                <Link href="/travel" className="text-muted-foreground hover:text-primary">
                  {t('travel')}
                </Link>
              </li>
              <li>
                <Link href="/halal" className="text-muted-foreground hover:text-primary">
                  {t('halal')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('resources')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/library" className="text-muted-foreground hover:text-primary">
                  {t('library')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('legal')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} K-Portal. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}

