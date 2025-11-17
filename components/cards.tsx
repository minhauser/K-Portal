'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from './link';
import { Home, Briefcase, GraduationCap, BookOpen, Plane } from 'lucide-react';
import { HalalIcon } from './halal-icon';

export function Cards() {
  const t = useTranslations('HomePage');
  const locale = useLocale();

  const cards = [
    {
      icon: Home,
      title: t('lifeCard.title'),
      description: t('lifeCard.description'),
      href: '/life',
      color: 'text-blue-500',
    },
    {
      icon: Briefcase,
      title: t('workCard.title'),
      description: t('workCard.description'),
      href: '/work',
      color: 'text-green-500',
    },
    {
      icon: GraduationCap,
      title: t('studyCard.title'),
      description: t('studyCard.description'),
      href: '/study',
      color: 'text-purple-500',
    },
    {
      icon: BookOpen,
      title: t('libraryCard.title'),
      description: t('libraryCard.description'),
      href: '/library',
      color: 'text-orange-500',
    },
    {
      icon: Plane,
      title: t('travelCard.title'),
      description: t('travelCard.description'),
      href: '/travel',
      color: 'text-cyan-500',
    },
    {
      icon: HalalIcon,
      title: t('halalCard.title'),
      description: t('halalCard.description'),
      href: '/halal',
      color: 'text-emerald-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <Link
            key={card.href}
            href={card.href}
            className="block p-6 border rounded-lg hover:border-primary transition-colors group"
          >
            <Icon className={`w-8 h-8 mb-4 ${card.color} group-hover:scale-110 transition-transform`} />
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-muted-foreground">{card.description}</p>
          </Link>
        );
      })}
    </div>
  );
}

