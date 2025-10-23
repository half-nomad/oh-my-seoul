
# Oh my Seoul - MVP 개발 실행 계획서

**프로젝트**: Oh my Seoul - Interactive Travel Quiz
**버전**: 2.0 (MVP)
**작성일**: 2025-10-21
**개발 방식**: 1인 개발 (단계별 진행)

---

## 📌 MVP 범위 정의

### ✅ 포함 기능
- 8개 질문 퀴즈 (고정)
- 7가지 여행자 타입 결과
- 한/영 2개 언어만
- AI 일러스트 7개
- Instagram 공유 (이미지 자동 생성 + 다운로드)
- 링크 복사 공유
- 모바일 최적화

### ❌ 제외 기능 (Phase 2로 이동)
- 나머지 4개 언어 (일/중/태/베)
- 지도 연동
- 카카오톡 공유 SDK
- 관리자 대시보드
- 질문 랜덤화

---

## 📚 기술 스택

### 프론트엔드
```
Framework: Next.js 14+ (App Router)
Language: TypeScript
Styling: Tailwind CSS
UI Components: shadcn/ui
Animation: Framer Motion
Icons: Lucide React
Font: Pretendard (한글), Space Grotesk (영문)
```

### 백엔드 & 데이터
```
Database: Supabase (PostgreSQL) - 프론트 완성 후 추가
API: Next.js API Routes
Analytics: Vercel Analytics
```

### 다국어
```
Library: next-intl
Supported: 한국어, 영어 (MVP)
```

### 배포 & 호스팅
```
Hosting: Vercel
Domain: TBD
SSL: 자동 (Vercel 제공)
```

### 개발 도구
```
Package Manager: npm
Version Control: Git
Linting: ESLint + Prettier
```

---

## 🏗️ 프로젝트 구조

```
oh-my-seoul/
├── app/
│   ├── [locale]/                     # 다국어 라우팅 (ko, en)
│   │   ├── page.tsx                  # 랜딩 페이지
│   │   ├── layout.tsx
│   │   ├── quiz/
│   │   │   └── page.tsx              # 퀴즈 메인 (8단계 통합)
│   │   └── result/
│   │       └── [type]/page.tsx       # 결과 페이지 (7가지 타입)
│   └── layout.tsx                    # 루트 레이아웃
│
├── components/
│   ├── quiz/
│   │   ├── QuestionCard.tsx          # 질문 카드
│   │   ├── ProgressBar.tsx           # 진행률 바
│   │   └── OptionButton.tsx          # 선택지 버튼
│   ├── result/
│   │   ├── TravelerTypeBadge.tsx     # 여행자 타입 뱃지
│   │   ├── CourseCard.tsx            # 추천 코스 카드
│   │   └── ShareButtons.tsx          # 공유 버튼
│   ├── shared/
│   │   ├── Button.tsx                # 공통 버튼
│   │   ├── Loading.tsx               # 로딩 애니메이션
│   │   └── LanguageToggle.tsx        # 한/영 전환
│   └── ui/                           # shadcn/ui 컴포넌트
│       ├── button.tsx
│       ├── card.tsx
│       ├── progress.tsx
│       └── badge.tsx
│
├── lib/
│   ├── quiz-context.tsx              # 퀴즈 상태 관리 (Context)
│   ├── scoring.ts                    # 스코어링 알고리즘
│   ├── generate-share-image.ts       # Canvas API 이미지 생성
│   ├── supabase.ts                   # Supabase 클라이언트 (Phase 6)
│   └── utils.ts                      # 유틸리티 함수
│
├── data/
│   ├── questions.ts                  # 8개 질문 데이터 (TS)
│   ├── types.ts                      # 7가지 타입 정의 (TS)
│   └── courses.ts                    # 추천 코스 데이터 (TS)
│
├── public/
│   └── images/
│       ├── types/                    # AI 일러스트 7개
│       │   ├── trendsetter.webp
│       │   ├── heritage-explorer.webp
│       │   ├── foodie.webp
│       │   ├── kculture-fan.webp
│       │   ├── nature-seeker.webp
│       │   ├── social-butterfly.webp
│       │   └── balanced-explorer.webp
│       └── og/                       # OG 이미지 7개
│
├── messages/                         # next-intl 다국어
│   ├── ko.json
│   └── en.json
│
├── docs/
│   ├── PRD.md
│   ├── PROJECT-PLAN.md               # 이 문서
│   ├── oh-my-seoul-design-system.md
│   ├── PHASE-0-GUIDE.md              # Phase 0 작업 가이드
│   └── WORK-LOG.md
│
├── .env.local                        # 환경 변수
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── middleware.ts                     # next-intl 다국어 라우팅
└── package.json
```

---

## 📅 Phase별 실행 계획 (의존성 기반)

---

### **Phase 0: 사전 준비 (개발 시작 전)**

#### **목표**: 개발에 필요한 모든 콘텐츠와 에셋 준비

#### **0.1 콘텐츠 확정**
```
의존성: 없음
중요도: P0 (필수)

작업:
- [ ] 8개 질문 최종 확정 (한국어)
  • travel-quiz-questions-and-types.md의 20개 중 선별
  • Food & Drink (2문)
  • Vibe & Activity (3문)
  • K-Culture & Style (3문)

- [ ] 각 질문별 선택지 3-4개 확정

- [ ] 선택지별 스코어 가중치 설정
  • 예: A선택지 → {trendy: +3, social: +2, modern: +1}

- [ ] 7가지 타입 이름 및 설명 작성 (한국어)
  1. Seoul Trendsetter (서울 트렌드세터)
  2. Cultural Heritage Explorer (문화유산 탐험가)
  3. Authentic Foodie (로컬 미식가)
  4. K-Culture Superfan (K-컬처 슈퍼팬)
  5. Peaceful Nature Seeker (평화로운 자연 탐험가)
  6. Social Butterfly (사교적 나비)
  7. Balanced Explorer (균형잡힌 탐험가)

- [ ] 타입별 추천 코스 각 3개 선정 (총 21개)
  • 장소명, 주소, 한 줄 설명

산출물:
📄 docs/PHASE-0-GUIDE.md (작업 가이드)
📄 data/questions-draft.json (임시)
📄 data/types-draft.json (임시)
📄 data/courses-draft.json (임시)
```

#### **0.2 AI 일러스트 생성**
```
의존성: 0.1 (타입 7가지 확정 필요)
중요도: P0

작업:
- [ ] 7가지 타입별 일러스트 프롬프트 작성

  예시 프롬프트:
  "Seoul Trendsetter - modern Korean young traveler
   exploring hip cafes in Seongsu-dong,
   pastel mint and gold color palette (#37BEB0, #C6B170),
   minimalist illustration style,
   vector art, clean lines, friendly character"

- [ ] Midjourney 또는 DALL-E로 7개 이미지 생성
  • 각 타입당 2-3개 생성 후 최적 선택

- [ ] 이미지 최적화
  • WebP 포맷 변환
  • 크기: 800x800px (정사각형)
  • 용량: 100KB 이하

- [ ] 파일명 통일
  • trendsetter.webp
  • heritage-explorer.webp
  • foodie.webp
  • kculture-fan.webp
  • nature-seeker.webp
  • social-butterfly.webp
  • balanced-explorer.webp

산출물:
🖼️ public/images/types/ (7개 AI 일러스트)
```

#### **0.3 영어 번역**
```
의존성: 0.1
중요도: P0

작업:
- [ ] 8개 질문 영어 번역
  • Google Translate 초안 → 수동 검수

- [ ] 7가지 타입 영어 번역
  • 타입명, 설명, 특징

- [ ] 추천 코스 21개 영어 번역
  • 장소명, 한 줄 설명

- [ ] UI 문구 영어 번역
  • 버튼, 헤더, 안내 문구, 로딩 메시지

산출물:
📄 messages/ko.json (한국어 통합)
📄 messages/en.json (영어 통합)
```

---

### **Phase 1: 프로젝트 기반 구축**

#### **목표**: Next.js 프로젝트 생성 및 디자인 시스템 구축

#### **1.1 Next.js 프로젝트 생성**
```
의존성: 없음
중요도: P0

작업:
- [ ] Next.js 14 프로젝트 생성
  npx create-next-app@latest oh-my-seoul \
    --typescript \
    --tailwind \
    --app \
    --no-src-dir

- [ ] 기본 패키지 설치
  npm install framer-motion lucide-react next-intl

- [ ] shadcn/ui 초기화
  npx shadcn-ui@latest init

  설정:
  - Style: Default
  - Base color: Mint (사용자 정의)
  - CSS variables: Yes

- [ ] Git 저장소 초기화
  git init
  git add .
  git commit -m "Initial commit: Next.js + shadcn setup"

산출물:
📁 oh-my-seoul/ (프로젝트 폴더)
📄 package.json
📄 tsconfig.json
📄 components.json (shadcn 설정)
```

#### **1.2 프로젝트 폴더 구조 생성**
```
의존성: 1.1
중요도: P0

작업:
- [ ] 위 프로젝트 구조대로 폴더 생성
  mkdir -p app/[locale]/quiz
  mkdir -p app/[locale]/result/[type]
  mkdir -p components/{quiz,result,shared,ui}
  mkdir -p lib data public/images/{types,og} messages docs

- [ ] .gitignore 업데이트
  .env.local
  .vercel
  node_modules

산출물:
📁 완성된 폴더 구조
```

#### **1.3 디자인 시스템 적용**
```
의존성: 1.1, 1.2, oh-my-seoul-design-system.md
중요도: P0

작업:
- [ ] tailwind.config.ts 수정
  • oh-my-seoul-design-system.md 기반
  • 색상 토큰 (mint, gold, blue 등)
  • 폰트 패밀리
  • 간격 시스템
  • Border radius

- [ ] app/globals.css 수정
  • CSS 변수 추가
  • 기본 스타일 정의

- [ ] 폰트 설정
  • app/layout.tsx에서 next/font 사용
  • Space Grotesk (영문 제목용)
  • Pretendard (한글, CDN 또는 로컬)

산출물:
📄 tailwind.config.ts (완성)
📄 app/globals.css (완성)
```

---

### **Phase 2: 핵심 UI 컴포넌트**

#### **목표**: shadcn/ui 기반 재사용 컴포넌트 제작

#### **2.1 shadcn/ui 기본 컴포넌트 설치**
```
의존성: 1.1
중요도: P0

작업:
- [ ] 필요한 컴포넌트 설치
  npx shadcn-ui@latest add button
  npx shadcn-ui@latest add card
  npx shadcn-ui@latest add progress
  npx shadcn-ui@latest add badge

산출물:
📄 components/ui/button.tsx
📄 components/ui/card.tsx
📄 components/ui/progress.tsx
📄 components/ui/badge.tsx
```

#### **2.2 공통 컴포넌트 제작**
```
의존성: 2.1
중요도: P0

작업:
- [ ] components/shared/Button.tsx
  • shadcn Button 래퍼
  • 프로젝트 스타일 적용 (mint 컬러 등)

- [ ] components/shared/Loading.tsx
  • Framer Motion 기반 로딩 애니메이션
  • 스피너 + "분석 중..." 문구

- [ ] components/shared/LanguageToggle.tsx
  • 한/영 전환 토글 버튼
  • 현재 언어 표시

산출물:
📄 3개 공통 컴포넌트
```

---

### **Phase 3: 퀴즈 플로우 구현**

#### **목표**: 랜딩 → 퀴즈 → 결과 핵심 플로우 완성

#### **3.1 데이터 구조 작성**
```
의존성: Phase 0 (콘텐츠 확정)
중요도: P0

작업:
- [ ] data/questions.ts 작성
  export type Question = {
    id: number;
    category: 'food' | 'vibe' | 'kculture';
    question: { ko: string; en: string };
    options: {
      id: string;
      text: { ko: string; en: string };
      scores: Record<string, number>;
    }[];
  };

  export const questions: Question[] = [...]

- [ ] data/types.ts 작성
  export type TravelerType = {
    id: string;
    name: { ko: string; en: string };
    description: { ko: string; en: string };
    image: string;
    courses: string[];
  };

- [ ] data/courses.ts 작성
  export type Course = {
    id: string;
    name: { ko: string; en: string };
    address: { ko: string; en: string };
    description: { ko: string; en: string };
  };

산출물:
📄 data/questions.ts (타입 포함)
📄 data/types.ts
📄 data/courses.ts
```

#### **3.2 퀴즈 상태 관리**
```
의존성: 3.1
중요도: P0

작업:
- [ ] lib/quiz-context.tsx
  • React Context로 퀴즈 상태 관리
  • 상태:
    - currentStep: number (1~8)
    - answers: Record<number, string>
    - scores: Record<string, number>

  • 액션:
    - selectAnswer(questionId, optionId)
    - nextQuestion()
    - previousQuestion()
    - calculateResult() → TravelerType

산출물:
📄 lib/quiz-context.tsx
```

#### **3.3 랜딩 페이지**
```
의존성: 1.3, 2.2
중요도: P0

작업:
- [ ] app/[locale]/page.tsx
  • "Oh my Seoul" 로고 + 서브타이틀
  • 프로젝트 설명 (한/영)
  • "Start Quiz" 버튼
  • Framer Motion 애니메이션 (fade in)

산출물:
📄 app/[locale]/page.tsx
```

#### **3.4 퀴즈 페이지**
```
의존성: 3.1, 3.2, 2.1
중요도: P0

작업:
- [ ] app/[locale]/quiz/page.tsx
  • useQuiz() 훅 사용
  • 현재 질문 표시 (currentStep 기반)
  • 다음/이전 네비게이션

- [ ] components/quiz/QuestionCard.tsx
  • 질문 텍스트
  • 카테고리 뱃지

- [ ] components/quiz/OptionButton.tsx
  • 선택지 버튼
  • 선택 시 활성화 스타일

- [ ] components/quiz/ProgressBar.tsx
  • shadcn Progress 사용
  • "3/8" 텍스트 표시

- [ ] 페이지 전환 애니메이션
  • Framer Motion <AnimatePresence>
  • slideUp + fadeIn 효과

산출물:
📄 app/[locale]/quiz/page.tsx
📄 components/quiz/ (3개 컴포넌트)
```

#### **3.5 스코어링 알고리즘**
```
의존성: 3.1
중요도: P0

작업:
- [ ] lib/scoring.ts
  export function calculateTravelerType(
    answers: Record<number, string>
  ): string {
    // 1. questions에서 각 답변의 scores 합산
    // 2. 가장 높은 점수 타입 결정
    // 3. 동점 시 우선순위 로직 (trendy > social > ...)
    return typeId;
  }

- [ ] 테스트 케이스 작성
  • 각 타입별 예상 답변 조합으로 검증

산출물:
📄 lib/scoring.ts
```

#### **3.6 로딩 화면**
```
의존성: 2.2
중요도: P1

작업:
- [ ] 퀴즈 완료 시 로딩 표시
  • "당신의 서울 여행 스타일 분석 중..."
  • "완벽한 여행지를 찾는 중..."
  • 문구 로테이션 (3-4개)
  • 2-3초 후 결과 페이지 이동

산출물:
📄 로딩 UI (quiz/page.tsx 내 통합)
```

#### **3.7 결과 페이지**
```
의존성: 3.5, Phase 0.2 (AI 일러스트)
중요도: P0

작업:
- [ ] app/[locale]/result/[type]/page.tsx
  • URL: /result/trendsetter 등
  • 동적 라우팅으로 타입 매칭

- [ ] components/result/TravelerTypeBadge.tsx
  • AI 일러스트 표시
  • 타입 이름 + 설명

- [ ] components/result/CourseCard.tsx
  • shadcn Card 사용
  • 추천 코스 3개 표시
  • 장소명, 주소, 설명

- [ ] "다시 하기" 버튼
  • 상태 초기화
  • 랜딩으로 이동

산출물:
📄 app/[locale]/result/[type]/page.tsx
📄 components/result/ (2개 컴포넌트)
```

---

### **Phase 4: 게이미피케이션 & 바이럴**

#### **목표**: 공유하고 싶게 만드는 요소 추가

#### **4.1 결과 페이지 게이미피케이션**
```
의존성: 3.7
중요도: P0 (바이럴 핵심)

작업:
- [ ] 희소성 표시 (타입별 고정값)
  • "당신은 Seoul Trendsetter입니다"
  • "전체 사용자 중 상위 12%!" (임시 데이터)

- [ ] 결과 공개 애니메이션
  • Framer Motion 카드 플립
  • 스팟라이트 효과

- [ ] 공유 동기 부여 문구
  • "친구도 테스트해볼까요?"
  • "당신의 여행 스타일을 공유하세요"

산출물:
📄 result/[type]/page.tsx 업데이트
```

#### **4.2 Instagram 공유 기능**
```
의존성: 3.7, 4.1
중요도: P0 (바이럴 핵심)

작업:
- [ ] lib/generate-share-image.ts
  • Canvas API로 이미지 생성
  • 요소:
    - AI 일러스트
    - 타입명 (큰 폰트)
    - "Oh my Seoul" 브랜딩
  • 크기: 1080x1920px (Instagram Story)

- [ ] components/result/ShareButtons.tsx
  • "Instagram에 공유하기" 버튼
    - 클릭 → 이미지 생성 → 다운로드
  • "링크 복사" 버튼
    - navigator.clipboard.writeText()
    - 성공 토스트 메시지

산출물:
📄 lib/generate-share-image.ts
📄 components/result/ShareButtons.tsx
```

#### **4.3 OG 이미지 설정**
```
의존성: Phase 0.2
중요도: P1

작업:
- [ ] 7가지 타입별 OG 이미지 생성
  • AI 일러스트 활용
  • 1200x630px
  • 타입명 + "Oh my Seoul" 텍스트 추가

- [ ] 동적 메타데이터 설정
  export async function generateMetadata({ params }) {
    const type = params.type;
    return {
      title: `Seoul ${type} - Oh my Seoul`,
      description: "...",
      openGraph: {
        images: [`/og/${type}.png`]
      }
    }
  }

산출물:
🖼️ public/og/ (7개 OG 이미지)
📄 result/[type]/page.tsx 메타데이터
```

---

### **Phase 5: 다국어 & 최적화**

#### **목표**: 한/영 전환 및 성능 최적화

#### **5.1 next-intl 설정**
```
의존성: Phase 0.3 (영어 번역 완료)
중요도: P0

작업:
- [ ] next-intl 설치 및 설정
  npm install next-intl

- [ ] middleware.ts 생성
  import createMiddleware from 'next-intl/middleware';
  export default createMiddleware({
    locales: ['ko', 'en'],
    defaultLocale: 'ko'
  });

- [ ] messages/ko.json, messages/en.json 작성
  • UI 문구 통합

- [ ] 모든 컴포넌트에 useTranslations 적용
  const t = useTranslations();
  <h1>{t('landing.title')}</h1>

산출물:
📄 middleware.ts
📄 messages/ko.json
📄 messages/en.json
```

#### **5.2 성능 최적화**
```
의존성: Phase 3 완료
중요도: P1

작업:
- [ ] 이미지 최적화
  • next/image 사용
  • AI 일러스트 WebP 포맷
  • priority 설정 (랜딩 로고)
  • Lazy loading (결과 페이지)

- [ ] 코드 스플리팅
  • 결과 페이지 dynamic import
  const ResultPage = dynamic(() => import('./ResultPage'))

- [ ] 폰트 최적화
  • next/font로 Pretendard, Space Grotesk

- [ ] Lighthouse 점수 확인
  • 목표: 90점 이상

산출물:
📊 최적화된 성능
```

---

### **Phase 6: 데이터 레이어 추가 (선택)**

#### **목표**: Supabase 연동 (프론트 완성 후)

#### **6.1 Supabase 프로젝트 생성**
```
의존성: 없음
중요도: P2

작업:
- [ ] Supabase 계정 생성
- [ ] 새 프로젝트 생성
- [ ] 테이블 생성

CREATE TABLE quiz_responses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id TEXT NOT NULL,
  language TEXT NOT NULL,
  answers JSONB NOT NULL,
  traveler_type TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_traveler_type ON quiz_responses(traveler_type);
CREATE INDEX idx_language ON quiz_responses(language);

산출물:
🗄️ Supabase 프로젝트
```

#### **6.2 Supabase 클라이언트 연동**
```
의존성: 6.1
중요도: P2

작업:
- [ ] 패키지 설치
  npm install @supabase/supabase-js

- [ ] lib/supabase.ts
  import { createClient } from '@supabase/supabase-js'
  export const supabase = createClient(url, key)

- [ ] .env.local 설정
  NEXT_PUBLIC_SUPABASE_URL=...
  NEXT_PUBLIC_SUPABASE_ANON_KEY=...

산출물:
📄 lib/supabase.ts
📄 .env.local
```

#### **6.3 데이터 저장 로직**
```
의존성: 6.2
중요도: P2

작업:
- [ ] 결과 페이지에서 자동 저장
  useEffect(() => {
    const sessionId = crypto.randomUUID();
    supabase.from('quiz_responses').insert({
      session_id: sessionId,
      language: locale,
      answers,
      traveler_type: type
    });
  }, []);

- [ ] 에러 핸들링
  • 저장 실패 시 사용자 경험 영향 없도록

산출물:
📄 result/[type]/page.tsx 업데이트
```

---

### **Phase 7: 배포 & 테스트**

#### **목표**: Vercel 배포 및 프로덕션 테스트

#### **7.1 Vercel 배포**
```
의존성: Phase 5 완료
중요도: P0

작업:
- [ ] GitHub 저장소 푸시
  git push origin main

- [ ] Vercel 계정 연결
  • GitHub 저장소 연동

- [ ] 환경 변수 설정 (Vercel)
  • NEXT_PUBLIC_SUPABASE_URL
  • NEXT_PUBLIC_SUPABASE_ANON_KEY

- [ ] 자동 배포 확인

산출물:
🌐 https://oh-my-seoul.vercel.app
```

#### **7.2 전체 플로우 테스트**
```
의존성: 7.1
중요도: P0

작업:
- [ ] 랜딩 → 퀴즈 → 결과 플로우
- [ ] 한/영 언어 전환
- [ ] 8개 질문 모두 테스트
- [ ] 7가지 타입 결과 확인
- [ ] Instagram 공유 (이미지 다운로드)
- [ ] 링크 복사
- [ ] 모바일 테스트 (iOS, Android)
- [ ] 크로스 브라우저 (Chrome, Safari, Firefox)

산출물:
📋 버그 리스트 + 수정
```

#### **7.3 도메인 연결 (선택)**
```
의존성: 7.1
중요도: P2

작업:
- [ ] 도메인 구매
- [ ] Vercel 커스텀 도메인 설정
- [ ] HTTPS 확인

산출물:
🌐 커스텀 도메인
```

---

## 🔧 환경 변수 (.env.local)

```bash
# Supabase (Phase 6)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 📊 데이터베이스 스키마 (Phase 6)

```sql
-- 설문 응답 테이블
CREATE TABLE quiz_responses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id TEXT NOT NULL,
  language TEXT NOT NULL,
  answers JSONB NOT NULL,
  traveler_type TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_traveler_type ON quiz_responses(traveler_type);
CREATE INDEX idx_created_at ON quiz_responses(created_at DESC);
CREATE INDEX idx_language ON quiz_responses(language);
```

---

## 🚨 주의사항

### 데이터 수집 (개인정보 보호)
- ✅ 개인정보 최소 수집 (언어, 응답, 타입만)
- ✅ IP 주소 저장하지 않음
- ✅ 쿠키 최소 사용
- ✅ 세션 기반 (회원가입 없음)

### 성능 최적화
- ✅ 이미지 WebP 포맷 (PNG 대비 30% 감소)
- ✅ Lazy Loading 적용
- ✅ 번들 크기 모니터링 (500KB 이하)

### 다국어
- ✅ MVP는 한/영만 (일/중/태/베는 Phase 2)
- ✅ 번역은 Google Translate 초안 → 수동 검수

---

## 📈 Phase 2 확장 계획 (추후)

- [ ] 나머지 4개 언어 추가 (일본어, 중국어, 태국어, 베트남어)
- [ ] 지도 연동 (Kakao Map API)
- [ ] 카카오톡 공유 SDK
- [ ] 관리자 대시보드 (실시간 통계)
- [ ] 질문 랜덤화 (20개 풀에서 8개 선택)
- [ ] 제휴 업체 쿠폰 연동

---

## ✅ 전체 체크리스트

### Phase 0: 사전 준비
- [x] 8개 질문 확정 (2025-10-21)
- [x] 7가지 타입 정의 (2025-10-21)
- [x] 추천 코스 21개 작성 (2025-10-21, 더미)
- [x] AI 일러스트 7개 생성 (2025-10-23, PNG 800KB)
- [ ] 영어 번역 완료 (보류 - 한국어만 먼저)

### Phase 1: 프로젝트 기반
- [x] Next.js 프로젝트 생성 (2025-10-21, Next.js 15)
- [x] 폴더 구조 생성 (2025-10-21)
- [x] 디자인 시스템 적용 (2025-10-21, app/globals.css)

### Phase 2: UI 컴포넌트
- [x] shadcn/ui 설치 (2025-10-21, 초기화 완료)
- [x] shadcn/ui 기본 컴포넌트 설치 (2025-10-21, button, card, progress, badge)
- [x] 공통 컴포넌트 제작 (2025-10-21, Button, Loading, LanguageToggle)

### Phase 3: 퀴즈 플로우
- [x] 데이터 구조 작성 (2025-10-21, data/*.ts)
- [x] 상태 관리 (2025-10-21, lib/quiz-context.tsx)
- [x] 스코어링 알고리즘 (2025-10-21, lib/scoring.ts)
- [x] 랜딩 페이지 (2025-10-21, app/page.tsx - 루트 이동)
- [x] 퀴즈 컴포넌트 (2025-10-21, ProgressBar, QuestionCard, OptionButton)
- [x] 퀴즈 페이지 (2025-10-21, app/quiz/page.tsx - 루트 이동)
- [x] 로딩 화면 (2025-10-21, shared/Loading.tsx 통합)
- [x] 결과 컴포넌트 (2025-10-21, TravelerTypeBadge, CourseCard)
- [x] 결과 페이지 (2025-10-21, app/result/[type]/page.tsx - 루트 이동)
- [x] 로컬 테스트 완료 (2025-10-21)
- [x] 스코어 키 매핑 버그 수정 (2025-10-21)
- [x] Next.js 15 async params 이슈 해결 (2025-10-21)
- [x] Tailwind v4 커스텀 컬러 수정 (2025-10-21)

### Phase 4: 바이럴 기능
- [ ] 게이미피케이션
- [ ] Instagram 공유
- [ ] OG 이미지

### Phase 5: 다국어 & 최적화
- [ ] next-intl 설정
- [ ] 성능 최적화

### Phase 6: 데이터 (선택)
- [ ] Supabase 생성
- [ ] 클라이언트 연동
- [ ] 데이터 저장

### Phase 7: 배포
- [ ] Vercel 배포
- [ ] 테스트
- [ ] 도메인 (선택)

---

## 🔄 의존성 다이어그램

```
Phase 0 (사전 준비)
  ├─ 0.1 콘텐츠 확정
  ├─ 0.2 AI 일러스트 ← 0.1
  └─ 0.3 영어 번역 ← 0.1

Phase 1 (기반)
  ├─ 1.1 Next.js 생성
  ├─ 1.2 폴더 구조 ← 1.1
  └─ 1.3 디자인 시스템 ← 1.1, 1.2

Phase 2 (컴포넌트)
  ├─ 2.1 shadcn 설치 ← 1.1
  └─ 2.2 공통 컴포넌트 ← 2.1

Phase 3 (퀴즈)
  ├─ 3.1 데이터 구조 ← 0.1
  ├─ 3.2 상태 관리 ← 3.1
  ├─ 3.3 랜딩 ← 1.3, 2.2
  ├─ 3.4 퀴즈 페이지 ← 3.1, 3.2, 2.1
  ├─ 3.5 스코어링 ← 3.1
  ├─ 3.6 로딩 ← 2.2
  └─ 3.7 결과 페이지 ← 3.5, 0.2

Phase 4 (바이럴)
  ├─ 4.1 게이미피케이션 ← 3.7
  ├─ 4.2 Instagram 공유 ← 3.7, 4.1
  └─ 4.3 OG 이미지 ← 0.2

Phase 5 (최적화)
  ├─ 5.1 다국어 ← 0.3
  └─ 5.2 성능 최적화 ← Phase 3

Phase 6 (데이터) - 독립적
  ├─ 6.1 Supabase 생성
  ├─ 6.2 클라이언트 연동 ← 6.1
  └─ 6.3 저장 로직 ← 6.2

Phase 7 (배포)
  ├─ 7.1 Vercel 배포 ← Phase 5
  ├─ 7.2 테스트 ← 7.1
  └─ 7.3 도메인 ← 7.1
```

---

**작성일**: 2025-10-21
**버전**: 2.0 (MVP)
**다음 단계**: Phase 0 시작
