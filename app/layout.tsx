import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'K-Portal | 한국 생활 가이드',
    template: '%s | K-Portal',
  },
  description: '한국에서의 생활, 일, 공부에 대한 종합 정보 포털',
  keywords: ['한국', '생활', '일', '공부', 'Korea', 'South Korea', 'living', 'work', 'study'],
  authors: [{ name: 'K-Portal' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    alternateLocale: ['en_US', 'ru_RU', 'uz_UZ'],
    siteName: 'K-Portal',
    title: 'K-Portal | 한국 생활 가이드',
    description: '한국에서의 생활, 일, 공부에 대한 종합 정보 포털',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://k-portal.com',
    languages: {
      'ko-KR': 'https://k-portal.com/ko',
      'en-US': 'https://k-portal.com/en',
      'ru-RU': 'https://k-portal.com/ru',
      'uz-UZ': 'https://k-portal.com/uz',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'naver-site-verification': 'your-naver-verification-code',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}

