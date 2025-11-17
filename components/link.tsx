'use client';

import NextLink from 'next/link';
import { useLocale } from 'next-intl';
import { type ComponentProps } from 'react';
import { locales } from '@/i18n/request';

type Props = ComponentProps<typeof NextLink> & {
  href: string;
};

export function Link({ href, ...props }: Props) {
  const locale = useLocale();
  
  // Проверяем, содержит ли href уже локаль
  const hasLocale = locales.some(loc => href.startsWith(`/${loc}/`) || href === `/${loc}`);
  
  // Если href уже содержит локаль или это внешняя ссылка, используем как есть
  const localizedHref = hasLocale || !href.startsWith('/') 
    ? href 
    : `/${locale}${href}`;

  return <NextLink href={localizedHref} {...props} />;
}

