import { MetadataRoute } from 'next';
import { locales } from '@/i18n/request';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://k-portal.com';
  
  const routes = ['', '/life', '/work', '/study', '/library', '/privacy', '/terms'];
  
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [
              loc === 'ko' ? 'ko-KR' : loc === 'ru' ? 'ru-RU' : loc === 'uz' ? 'uz-UZ' : 'en-US',
              `${baseUrl}/${loc}${route}`,
            ])
          ),
        },
      });
    });
  });
  
  return sitemapEntries;
}

