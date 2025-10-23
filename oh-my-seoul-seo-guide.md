# Oh my Seoul 배포 & SEO 최적화 완전 가이드

**Phase 7 이후 진행:** Cloudflare 도메인 구매 + Vercel 배포 + 구글/네이버 SEO 설정

---

## 📌 목차

1. [SEO란 무엇인가?](#1-seo란-무엇인가)
2. [배포 전 SEO 준비 작업](#2-배포-전-seo-준비-작업)
3. [Cloudflare 도메인 구매](#3-cloudflare-도메인-구매)
4. [Vercel 첫 배포](#4-vercel-첫-배포)
5. [커스텀 도메인 연결](#5-커스텀-도메인-연결)
6. [구글/네이버 등록 및 인증](#6-구글네이버-등록-및-인증)
7. [인증 태그 추가 및 재배포](#7-인증-태그-추가-및-재배포)
8. [사이트맵 제출 및 완료](#8-사이트맵-제출-및-완료)
9. [카카오톡 링크 미리보기 설정](#9-카카오톡-링크-미리보기-설정)
10. [완료 체크리스트](#10-완료-체크리스트)

---

## 1. SEO란 무엇인가?

**SEO(Search Engine Optimization, 검색엔진 최적화)**는 구글, 네이버 같은 검색엔진에서 웹사이트가 더 잘 검색되도록 만드는 작업입니다.

### 왜 중요한가?
- 검색 결과 상위에 노출되면 더 많은 사람들이 방문합니다
- 올바른 메타 태그 설정으로 SNS 공유 시 미리보기가 예쁘게 나옵니다
- 검색엔진이 웹사이트의 콘텐츠를 정확히 이해할 수 있습니다

---

## 2. 배포 전 SEO 준비 작업

⚠️ **먼저 로컬에서 준비해야 할 작업들입니다.**

### 2-1. 기본 메타데이터 설정

**`app/layout.tsx` 파일 수정:**

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oh my Seoul - 서울 여행 퀴즈',
  description: '서울의 숨은 명소를 퀴즈로 즐기세요',
  keywords: ['서울', '여행', '퀴즈', 'Seoul', 'travel'],
  authors: [{ name: 'Oh my Seoul Team' }],
  
  // 📍 인증 태그는 아직 추가하지 않음!
  
  // Open Graph (SNS 공유용)
  openGraph: {
    title: 'Oh my Seoul - 서울 여행 퀴즈',
    description: '서울의 숨은 명소를 퀴즈로 즐기세요',
    url: 'https://ohmyseoul.page', // ⭐ 구매할 도메인으로 설정
    siteName: 'Oh my Seoul',
    images: [
      {
        url: 'https://ohmyseoul.page/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oh my Seoul 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  
  // Twitter 카드
  twitter: {
    card: 'summary_large_image',
    title: 'Oh my Seoul - 서울 여행 퀴즈',
    description: '서울의 숨은 명소를 퀴즈로 즐기세요',
    images: ['https://ohmyseoul.page/og-image.jpg'],
  },
}
```

### 2-2. 타입별 동적 메타데이터

**`app/result/[type]/page.tsx`:**

```typescript
import type { Metadata } from 'next'
import { getTravelerTypeById } from '@/data/types'

type Props = {
  params: { type: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params
  const travelerType = getTravelerTypeById(type)
  
  return {
    title: `${travelerType.koreanName} - Oh my Seoul`,
    description: travelerType.description.ko,
    openGraph: {
      title: travelerType.koreanName,
      description: travelerType.description.ko,
      images: [`https://ohmyseoul.page/images/types/${type}.webp`],
      url: `https://ohmyseoul.page/result/${type}`,
    },
  }
}
```

### 2-3. 사이트맵 생성

**`app/sitemap.ts` 파일 생성:**

```typescript
import { MetadataRoute } from 'next'
import { travelerTypes } from '@/data/types'

export default function sitemap(): MetadataRoute.Sitemap {
  // 기본 페이지
  const routes = [
    {
      url: 'https://ohmyseoul.page',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: 'https://ohmyseoul.page/quiz',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]
  
  // 7가지 타입별 결과 페이지
  const resultPages = travelerTypes.map((type) => ({
    url: `https://ohmyseoul.page/result/${type.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  return [...routes, ...resultPages]
}
```

### 2-4. robots.txt 생성

**`app/robots.ts` 파일 생성:**

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://ohmyseoul.page/sitemap.xml',
  }
}
```

### 2-5. OG 이미지 준비

1. **메인 이미지**: `public/og-image.jpg` (1200x630픽셀)
2. **타입별 이미지**: `public/images/types/trendsetter.webp` 등

---

## 3. Cloudflare 도메인 구매

### 3-1. Cloudflare 가입 및 로그인

1. [Cloudflare 대시보드](https://dash.cloudflare.com) 접속
2. 계정 가입 또는 로그인

### 3-2. 도메인 등록

1. **Domain Registration** > **Register Domains** 클릭
2. 도메인 검색: `ohmyseoul.page` 입력
3. 가격 확인 후 **Purchase** 클릭
4. 결제 진행 (WHOIS 프라이버시 자동 포함)

### 3-3. 구매 완료 확인

- 대시보드에서 신규 도메인 확인
- DNS 관리가 Cloudflare로 자동 설정됨

---

## 4. Vercel 첫 배포

### 4-1. GitHub 푸시

```bash
# SEO 준비 작업 커밋
git add .
git commit -m "feat: SEO 메타데이터, 사이트맵, robots.txt 추가"
git push origin main
```

### 4-2. Vercel 연결

1. [Vercel 대시보드](https://vercel.com/dashboard) 접속
2. **New Project** 클릭
3. GitHub 저장소 선택 (`oh-my-seoul`)
4. **Deploy** 클릭

### 4-3. 기본 배포 확인

- 배포 완료 후 임시 URL 확인 (예: `https://oh-my-seoul-abc123.vercel.app`)
- 사이트 정상 작동 확인

---

## 5. 커스텀 도메인 연결

### 5-1. Vercel에 도메인 추가

1. Vercel 프로젝트 > **Settings** > **Domains**
2. `ohmyseoul.page` 입력 후 **Add**
3. DNS 설정 안내 화면 표시

### 5-2. Cloudflare DNS 설정

**Cloudflare 대시보드 > DNS > Records**에서 다음 레코드 추가:

1. **A 레코드**:
   - Name: `@` (루트 도메인)
   - IPv4 address: `76.76.19.19` (Vercel IP)
   - Proxy status: **DNS only** ⚠️ (오렌지 구름 OFF)

2. **CNAME 레코드**:
   - Name: `www`
   - Target: `cname.vercel-dns.com`
   - Proxy status: **DNS only** ⚠️

### 5-3. SSL 인증 대기

- Vercel에서 SSL 인증 자동 진행 (1~5분 소요)
- ✅ 완료 시 `https://ohmyseoul.page` 정상 접속 확인

### 5-4. www 리디렉션 설정 (선택사항)

Vercel에서 `www.ohmyseoul.page`도 추가하여 메인 도메인으로 리디렉션

---

## 6. 구글/네이버 등록 및 인증

### 6-1. 구글 서치콘솔 등록

1. [Google Search Console](https://search.google.com/search-console/) 접속
2. 구글 계정 로그인
3. **속성 추가** 클릭
4. **URL 접두어** 선택
5. `https://ohmyseoul.page` 입력

### 6-2. 구글 인증 태그 받기

1. **HTML 태그** 방법 선택
2. 메타 태그 복사 (예: `<meta name="google-site-verification" content="abc123xyz...">`)
3. ⚠️ **아직 "확인" 버튼 누르지 않음!**

### 6-3. 네이버 서치어드바이저 등록

1. [네이버 서치어드바이저](https://searchadvisor.naver.com/) 접속
2. 네이버 계정 로그인
3. **웹마스터 도구** 클릭
4. `https://ohmyseoul.page` 입력

### 6-4. 네이버 인증 태그 받기

1. **HTML 태그** 방식 선택
2. 메타 태그 복사 (예: `<meta name="naver-site-verification" content="def456...">`)
3. ⚠️ **아직 "소유확인" 버튼 누르지 않음!**

---

## 7. 인증 태그 추가 및 재배포

### 7-1. 인증 메타 태그 추가

**`app/layout.tsx` 수정:**

```typescript
export const metadata: Metadata = {
  // ... 기존 설정 유지
  
  // 🆕 인증 태그 추가
  verification: {
    google: 'abc123xyz...', // 구글에서 받은 인증 코드
    other: {
      'naver-site-verification': 'def456...', // 네이버에서 받은 인증 코드
    },
  },
}
```

### 7-2. 재배포

```bash
git add .
git commit -m "feat: 구글/네이버 인증 메타 태그 추가"
git push origin main
```

### 7-3. 배포 완료 대기

- Vercel 자동 배포 완료 (1~2분)
- `https://ohmyseoul.page` 접속하여 소스 보기로 메타 태그 확인

---

## 8. 사이트맵 제출 및 완료

### 8-1. 구글 인증 완료

1. Google Search Console 돌아가기
2. **확인** 버튼 클릭
3. ✅ **소유권이 확인됨** 메시지 확인

### 8-2. 구글 사이트맵 제출

1. 왼쪽 메뉴 **Sitemaps** 클릭
2. `https://ohmyseoul.page/sitemap.xml` 입력
3. **제출** 클릭
4. 상태 확인 (성공/처리 중)

### 8-3. 네이버 인증 완료

1. 네이버 서치어드바이저 돌아가기
2. **소유확인** 버튼 클릭
3. ✅ 인증 성공 확인

### 8-4. 네이버 사이트맵 제출

1. **요청** > **사이트맵 제출** 메뉴
2. `https://ohmyseoul.page/sitemap.xml` 입력
3. **확인** 클릭

### 8-5. URL 색인 요청

**구글:**
1. **URL 검사** 도구
2. `https://ohmyseoul.page` 입력
3. **색인 생성 요청** 클릭
4. 주요 페이지 반복 요청:
   - `/quiz`
   - `/result/trendsetter`
   - `/result/foodie` 등

**네이버:**
1. **요청** > **URL 수집 요청**
2. 메인 URL 및 주요 페이지 제출

---

## 9. 카카오톡 링크 미리보기 설정

### 9-1. Open Graph 자동 적용

위에서 설정한 `openGraph` 메타데이터가 자동으로 카카오톡에도 적용됩니다.

### 9-2. 테스트 및 캐시 초기화

1. **카카오톡 테스트**: 나에게 링크 전송하여 미리보기 확인
2. **문제 시 캐시 초기화**: [카카오 디버거](https://developers.kakao.com/tool/debugger/sharing)
3. URL 입력 후 **캐시 초기화** 클릭

### 9-3. 다른 SNS 테스트

- **Facebook**: [Facebook 디버거](https://developers.facebook.com/tools/debug/)
- **Twitter**: [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## 10. 완료 체크리스트

### 🌐 도메인 및 배포
- [ ] Cloudflare에서 `ohmyseoul.page` 도메인 구매 완료
- [ ] Vercel에 커스텀 도메인 연결 완료
- [ ] SSL 인증 완료 (`https://` 정상 접속)
- [ ] `www.ohmyseoul.page` → `ohmyseoul.page` 리디렉션 설정

### 🔍 SEO 설정
- [ ] 구글 서치콘솔 소유권 인증 완료
- [ ] 네이버 서치어드바이저 소유권 인증 완료
- [ ] 구글 사이트맵 제출 완료 (상태: 성공)
- [ ] 네이버 사이트맵 제출 완료
- [ ] 주요 URL 색인 요청 완료 (구글/네이버)

### 📱 SNS 미리보기
- [ ] Open Graph 이미지 정상 표시
- [ ] 카카오톡 링크 미리보기 테스트 완료
- [ ] Facebook 디버거 테스트 통과
- [ ] Twitter 카드 테스트 통과

### 📊 추가 확인
- [ ] `https://ohmyseoul.page/sitemap.xml` 접속 가능
- [ ] `https://ohmyseoul.page/robots.txt` 접속 가능
- [ ] 소스 보기에서 메타 태그 정상 확인
- [ ] 모든 결과 페이지 (`/result/trendsetter` 등) 정상 접속

---

## 📊 효과 확인 (1~2주 후)

### 구글 서치콘솔 분석
1. **실적** 메뉴에서 노출 수, 클릭 수 확인
2. **검색어** 분석으로 유입 키워드 파악
3. **커버리지** 에러 여부 점검

### 네이버 서치어드바이저 분석
1. **통계** 메뉴에서 유입 데이터 확인
2. **검색어 통계**로 네이버 유입 키워드 분석

### 수동 검색 테스트
- 구글: `site:ohmyseoul.page`
- 네이버: `site:ohmyseoul.page`
- 브랜드명: `"Oh my Seoul"`

---

## 🔧 자주 묻는 질문

**Q: 사이트맵이 제출되지 않아요**
```bash
# 로컬에서 사이트맵 확인
npm run build
npm run start
# http://localhost:3000/sitemap.xml 접속
```

**Q: 메타 태그가 보이지 않아요**
- 브라우저 개발자 도구 > Elements에서는 안 보일 수 있음
- **소스 보기** (Ctrl+U / Cmd+U)로 확인 필수

**Q: 도메인 연결 후 SSL 오류가 나요**
- Cloudflare DNS에서 Proxy 상태 확인 (DNS only여야 함)
- 1~5분 대기 후 재시도

**Q: 카카오톡 미리보기가 안 바뀌어요**
- 카카오 디버거에서 캐시 초기화
- 24시간 대기 후 재시도

**Q: 검색에 언제 노출되나요?**
- 구글: 1일~1주 (빠르면 몇 시간)
- 네이버: 3일~2주
- 인내심을 가지고 기다리세요!

---

## 📚 참고 자료

- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [구글 SEO 기본 가이드](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Cloudflare 도메인 등록 가이드](https://developers.cloudflare.com/registrar/get-started/register-domain/)
- [Vercel 커스텀 도메인 설정](https://vercel.com/docs/concepts/projects/domains)

---

**작성일**: 2025-10-23  
**프로젝트**: Oh my Seoul  
**이전 단계**: Phase 7 (기본 개발 완료)  
**다음 단계**: Phase 4 (바이럴 기능 추가)  
**예상 소요 시간**: 2~3시간