// src/types/next-auth.d.ts
import 'next-auth';

// Расширяем стандартные интерфейсы NextAuth
declare module 'next-auth' {
  /**
   * Расширение интерфейса Session, чтобы включить расширенный объект User.
   */
  interface Session {
    user: {
      id: string; // <-- ДОБАВЛЯЕМ ID СЮДА
      name?: string | null;
      email?: string | null;
      image?: string | null;
    } & DefaultSession['user'];
  }

  /**
   * Расширение интерфейса User.
   */
  interface User {
    id: string; // <-- И СЮДА
  }
}

// Расширение интерфейса JWT для токена
import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    id: string; // <-- И СЮДА (если вы используете JWT стратегию)
  }
}