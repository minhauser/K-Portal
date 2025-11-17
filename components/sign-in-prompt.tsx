'use client';

import { useTranslations } from 'next-intl';
import { signIn } from 'next-auth/react';
import { LogIn } from 'lucide-react';

export function SignInPrompt() {
  const t = useTranslations('ChatPage');

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <LogIn className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
        <h2 className="text-2xl font-bold mb-4">{t('signInRequired')}</h2>
        <p className="text-muted-foreground mb-8">{t('signInDescription')}</p>
        <button
          onClick={() => signIn('google')}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          {t('signInWithGoogle')}
        </button>
      </div>
    </div>
  );
}

