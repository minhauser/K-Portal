'use client';

import { useTranslations } from 'next-intl';
import { useSession } from 'next-auth/react';
import { ChatInterface } from '@/components/chat-interface';
import { SignInPrompt } from '@/components/sign-in-prompt';
import { useRouter } from 'next/navigation';

export default function ChatPage() {
  const t = useTranslations('ChatPage');
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  if (!session) {
    return <SignInPrompt />;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">{t('title')}</h1>
        <p className="text-center text-muted-foreground mb-8">
          {t('description')}
        </p>
        <ChatInterface />
      </div>
    </div>
  );
}

