# Vercel 배포 가이드

## 🚀 배포 방법

### 1단계: Vercel 접속
1. https://vercel.com 접속
2. **Sign Up** 또는 **Login** 클릭
3. **Continue with GitHub** 선택

### 2단계: GitHub 저장소 연동
1. 로그인 후 **"Add New..."** → **"Project"** 클릭
2. **Import Git Repository** 섹션
3. `answjddnjs04/sohwakhang` 저장소 찾기
   - 안 보이면 "Adjust GitHub App Permissions" 클릭하여 권한 부여
4. **"Import"** 클릭

### 3단계: 프로젝트 설정

#### 기본 설정 (자동으로 감지됨)
- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

#### 환경 변수 설정 (중요!)
**Environment Variables** 섹션에서 다음을 추가:

**Cloudinary 설정:**
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
Value: dslxpfsfu
```

```
CLOUDINARY_API_KEY
Value: 547427724677476
```

```
CLOUDINARY_API_SECRET
Value: MFEgGjGuEdtkP1SXC-YQiMyCtVo
```

**Supabase 설정 (나중에 추가):**
```
NEXT_PUBLIC_SUPABASE_URL
Value: (Supabase 프로젝트 URL)
```

```
NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: (Supabase API Key)
```

**⚠️ 각 환경 변수마다:**
- ✅ **Production** 체크
- ✅ **Preview** 체크  
- ✅ **Development** 체크

### 4단계: 배포 시작
1. **"Deploy"** 버튼 클릭
2. 빌드 로그 확인
3. 배포 완료까지 약 2-3분 대기

---

## ✅ 배포 완료 후

### 도메인
- **기본 도메인**: `https://sohwakhang.vercel.app`
- **또는**: `https://sohwakhang-xxx.vercel.app`

### 자동 배포
- GitHub의 `main` 브랜치에 푸시할 때마다 자동으로 재배포됩니다!

### 커스텀 도메인 (선택)
1. Vercel 프로젝트 → Settings → Domains
2. 원하는 도메인 입력
3. DNS 설정

---

## 🔧 문제 해결

### 빌드 실패 시
1. Vercel 대시보드에서 빌드 로그 확인
2. 환경 변수가 제대로 설정되었는지 확인
3. GitHub 저장소가 최신 상태인지 확인

### 환경 변수 추가/수정
1. Vercel 프로젝트 → Settings → Environment Variables
2. 변수 추가 또는 수정
3. **Redeploy** 필요 (Deployments → 최신 배포 → 3점 메뉴 → Redeploy)

---

## 📊 배포 상태 확인

### Vercel 대시보드에서
- **Deployments**: 배포 히스토리
- **Analytics**: 방문자 통계
- **Logs**: 실시간 로그
- **Settings**: 프로젝트 설정

---

## 다음 단계

배포 완료 후:
1. ✅ 배포된 URL 접속하여 확인
2. ✅ 캘린더 기능 테스트 (10월 15, 18, 22일 클릭)
3. ✅ 모바일에서도 확인
4. 🔄 GitHub에 푸시 → 자동 재배포 테스트

---

## 유용한 링크

- Vercel 대시보드: https://vercel.com/dashboard
- Next.js 배포 문서: https://nextjs.org/docs/deployment
- Vercel 문서: https://vercel.com/docs
