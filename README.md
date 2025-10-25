# 소확행 (소소한 확실한 행복)

자극적인 SNS와 달리, 일상 속 작은 행복을 공유하고 발견하는 긍정적인 소셜 플랫폼입니다.

## 프로젝트 특징

- 타인과의 비교가 아닌 자신만의 행복에 집중
- 캘린더 기반 개인 행복 기록
- 네잎클로버 평가 시스템 (5점 만점)
- 해시태그 기반 소확행 검색 및 발견
- AI 기반 개인화 추천 시스템

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Database**: Supabase (PostgreSQL)
- **Image Storage**: Cloudinary (25GB 무료)

## 설정 가이드

### 1. 패키지 설치

```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일 생성:

```bash
# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Supabase  
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

**자세한 설정 방법은 [설정 가이드](./docs/설정가이드.md)를 참고하세요!**

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

## 프로젝트 문서

- [기능 명세서](./docs/소확행_기능명세서.md)
- [개발 로드맵](./docs/개발_로드맵.md)
- [설정 가이드](./docs/설정가이드.md) ⭐ 필수!

## 개발 진행 상황

- ✅ Phase 1: 프로젝트 기초 설정
- ✅ 랜딩 홈페이지 완성
- 🔄 Phase 2: Cloudinary & Supabase 연동 중
- ⏳ Phase 3: 캘린더 기능 구현 예정

## 무료 플랜 제한

### Cloudinary
- 저장 용량: 25GB
- 월 대역폭: 25GB

### Supabase
- 데이터베이스: 500MB
- 파일 저장소: 1GB
- 월 대역폭: 2GB
