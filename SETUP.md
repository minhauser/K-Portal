# Настройка K-Portal

## Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка переменных окружения

Создайте файл `.env` в корне проекта и добавьте следующие переменные:

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-generate-with-openssl-rand-base64-32

# Google OAuth
# Получите эти значения на https://console.cloud.google.com/apis/credentials
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 3. Генерация секретного ключа для NextAuth

```bash
openssl rand -base64 32
```

### 4. Настройка Google OAuth

1. Перейдите на [Google Cloud Console](https://console.cloud.google.com/)
2. Создайте новый проект или выберите существующий
3. Включите Google+ API
4. Создайте OAuth 2.0 Client ID
5. Добавьте авторизованные URI перенаправления:
   - `http://localhost:3000/api/auth/callback/google` (для разработки)
   - `https://yourdomain.com/api/auth/callback/google` (для продакшена)
6. Скопируйте Client ID и Client Secret в `.env`

### 5. Инициализация базы данных

```bash
npx prisma generate
npx prisma db push
```

### 6. Запуск проекта

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## SEO настройка

### Google Search Console

1. Зарегистрируйте сайт в [Google Search Console](https://search.google.com/search-console)
2. Добавьте код верификации в `app/layout.tsx`:

```typescript
verification: {
  google: 'your-google-verification-code',
  // ...
}
```

### Yandex Webmaster

1. Зарегистрируйте сайт в [Yandex Webmaster](https://webmaster.yandex.ru/)
2. Добавьте код верификации в `app/layout.tsx`

### Naver Search Advisor

1. Зарегистрируйте сайт в [Naver Search Advisor](https://searchadvisor.naver.com/)
2. Добавьте мета-тег верификации в `app/layout.tsx`

## Производственное развертывание

### Vercel (рекомендуется)

1. Установите [Vercel CLI](https://vercel.com/cli)
2. Выполните:
```bash
vercel
```
3. Добавьте переменные окружения в настройках проекта Vercel

### Другие платформы

Проект можно развернуть на любой платформе, поддерживающей Node.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Структура проекта

- `app/` - Страницы и маршруты Next.js
- `components/` - React компоненты
- `lib/` - Утилиты и конфигурация
- `messages/` - Файлы переводов
- `prisma/` - Схема базы данных

## Дополнительная информация

Подробности в [README.md](./README.md)

