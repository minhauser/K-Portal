<<<<<<< HEAD
# K-Portal - 한국 생활 가이드

웹 포털 для 한국에서의 생활, 일, 공부에 대한 종합 정보를 제공합니다.

## 주요 기능

- 🌍 **4개 언어 지원**: 한국어, 영어, 러시아어, 우즈벡어
- 🌙 **다크/라이트 테마**: 사용자 선호도에 맞는 테마 전환
- 🔐 **Google OAuth 인증**: Google 계정으로 간편 로그인
- 📚 **PDF 도서관**: 한국어 학습을 위한 PDF 책 모음
- 📱 **반응형 디자인**: 모든 기기에서 최적화된 경험
- ⚡ **빠른 성능**: Next.js 14와 최적화된 기술 스택
- 🔍 **SEO 최적화**: Google, Yandex, Naver 검색 엔진 최적화

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Authentication**: NextAuth.js
- **Database**: Prisma + SQLite
- **Icons**: Lucide React

## 시작하기

### 필수 조건

- Node.js 18+ 
- npm 또는 yarn

### 설치

1. 의존성 설치:
```bash
npm install
```

2. 환경 변수 설정:
`.env` 파일을 생성하고 다음 변수들을 설정하세요:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

3. 데이터베이스 초기화:
```bash
npx prisma generate
npx prisma db push
```

4. 개발 서버 실행:
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어보세요.

## 프로젝트 구조

```
├── app/
│   ├── [locale]/          # 언어별 페이지
│   ├── api/               # API 라우트
│   ├── globals.css        # 전역 스타일
│   └── layout.tsx         # 루트 레이아웃
├── components/            # React 컴포넌트
├── lib/                  # 유틸리티 함수
├── messages/             # 번역 파일
├── prisma/               # 데이터베이스 스키마
└── public/               # 정적 파일
```

## SEO 설정

검색 엔진 최적화를 위해 다음 파일들을 확인하세요:

- `app/sitemap.ts` - 사이트맵 생성
- `app/robots.ts` - 검색 엔진 크롤러 설정
- `app/layout.tsx` - 메타 데이터 설정

Google, Yandex, Naver 검색 콘솔에서 사이트를 등록하고 검증 코드를 `app/layout.tsx`의 `verification` 섹션에 추가하세요.

## 배포

### Vercel (권장)

1. GitHub에 프로젝트를 푸시
2. [Vercel](https://vercel.com)에 프로젝트 가져오기
3. 환경 변수 설정
4. 배포

### 기타 플랫폼

Next.js는 다양한 플랫폼에서 배포할 수 있습니다:
- Netlify
- AWS
- Azure
- 기타 Node.js 호스팅

## 라이선스

MIT

## 기여

프로젝트 개선에 기여해주시면 감사하겠습니다!
