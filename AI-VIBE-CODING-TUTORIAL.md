# AI와 함께하는 바이브 코딩 실전 가이드
## Oh my Seoul 프로젝트 개발 전 과정

**강의 대상:** AI를 활용한 개발을 시작하려는 초보자
**프로젝트:** Oh my Seoul - Interactive Travel Quiz
**기술 스택:** Next.js 15 + TypeScript + Tailwind CSS v4 + shadcn/ui
**개발 기간:** 1일 (2025-10-21)
**개발 방식:** Claude와 1:1 페어 프로그래밍

---

## 📚 목차

1. [프로젝트 소개](#1-프로젝트-소개)
2. [AI 바이브 코딩이란?](#2-ai-바이브-코딩이란)
3. [개발 환경 준비](#3-개발-환경-준비)
4. [왜 Next.js와 Tailwind인가?](#4-왜-nextjs와-tailwind인가)
5. [세션 1: 기획 문서를 코드로 (Chat 1)](#5-세션-1-기획-문서를-코드로-chat-1)
6. [세션 2: 프로젝트 구축 (Chat 2)](#6-세션-2-프로젝트-구축-chat-2)
7. [세션 3: 테스트와 버그 수정 (Chat 3)](#7-세션-3-테스트와-버그-수정-chat-3)
8. [세션 4: SEO 최적화 및 버전 관리 (Chat 4)](#8-세션-4-seo-최적화-및-버전-관리-chat-4)
9. [세션 5: 법적 문서 및 버전 관리 (Chat 5)](#9-세션-5-법적-문서-및-버전-관리-chat-5)
10. [개발 도구 활용: Chrome DevTools MCP](#10-개발-도구-활용-chrome-devtools-mcp)
11. [배운 점과 교훈](#11-배운-점과-교훈)
12. [다음 단계](#12-다음-단계)

---

## 1. 프로젝트 소개

### 1.1 Oh my Seoul이란?

**8개 질문**으로 당신의 여행 스타일을 분석하고, **7가지 여행자 타입** 중 하나를 결과로 제공하는 인터랙티브 퀴즈 웹앱입니다.

**핵심 가치:**
- 바이럴 마케팅 도구 (Instagram 공유)
- 고객 여행 선호도 데이터 수집
- 서울 관광 추천 코스 제공

### 1.2 비즈니스 배경

**The Nines** - 신흥 시장 인바운드 관광객 타겟 마케팅 에이전시
- 타겟 국가: 일본, 대만, 태국, 베트남, 인도, 중국
- 전략: 현지 크리에이터 네트워크를 통한 바이럴 확산
- 우선순위: 게이미피케이션 > 데이터 수집 (개인정보 최소화)

### 1.3 MVP 범위

**✅ 포함 기능**
- 8개 질문 퀴즈 (고정)
- 7가지 여행자 타입 결과
- 한국어/영어 2개 언어
- Instagram 공유 이미지 생성
- 모바일 최적화

**❌ 제외 기능 (Phase 2로 이동)**
- 나머지 4개 언어
- 지도 연동
- 카카오톡 공유
- 관리자 대시보드
- 질문 랜덤화

---

## 2. AI 바이브 코딩이란?

### 2.1 정의

**AI 바이브 코딩(Vibe Coding)**: AI와 대화하듯이 프로그래밍하는 방식
- 코드를 한 줄씩 작성하는 대신, **의도와 목표를 설명**
- AI가 코드 작성, 개발자는 **검토와 방향 제시**
- 빠른 프로토타이핑과 반복 개선

### 2.2 기존 코딩 vs AI 바이브 코딩

| 기존 방식 | AI 바이브 코딩 |
|----------|--------------|
| "이 함수를 어떻게 작성하지?" | "이 기능이 필요해" → AI가 함수 작성 |
| Stack Overflow 검색 | "이 에러 뭐야?" → AI가 원인 분석 |
| 문서 읽고 라이브러리 학습 | "shadcn 버튼 만들어줘" → AI가 best practice 적용 |
| 버그 디버깅에 30분 | "이 코드 문제 찾아줘" → AI가 즉시 발견 |

### 2.3 AI 바이브 코딩 핵심 원칙

**1. 명확한 의도 전달**
```
❌ "코드 짜줘"
✅ "8개 질문 퀴즈 앱 만들건데, Next.js 프로젝트 생성하고 폴더 구조 잡아줘"
```

**2. 문서 기반 소통**
```
❌ "저번에 말한 거 기억해?"
✅ "PROJECT-PLAN.md 보고 다음 Phase 제안해줘"
```

**3. 반복과 개선**
```
사용자: "문서 많이 만들지 마"
AI: [PHASE-0-GUIDE.md, SELECTED-QUESTIONS.md 생성]
사용자: "너무 많아, 삭제하고 PROJECT-PLAN.md에 통합해"
AI: [삭제 + 통합] ✅
```

**4. Git 커밋으로 진행 상황 추적**
```
commit ae414b3 - docs: 프로젝트 초기 설정 완료 #phase0
commit 632af47 - feat: MVP 데이터 구조 완성 #phase3
commit 9e1f89f - chore: 소문자 폴더로 이관
```

---

## 3. 개발 환경 준비

### 3.1 필수 도구

**1. Node.js 18+**
```bash
node -v  # v18.17.0 이상
npm -v   # 9.0.0 이상
```

**2. Git**
```bash
git --version  # 2.0 이상
```

**3. 코드 에디터**
- VS Code (권장)
- Cursor
- 기타 원하는 에디터

**4. AI 도구**
- Claude Code (CLI)
- 또는 ChatGPT, Claude.ai 웹 인터페이스

### 3.2 프로젝트 폴더 생성

```bash
# ✅ 올바른 방법: 소문자 + 하이픈
mkdir oh-my-seoul
cd oh-my-seoul

# ❌ 잘못된 방법: 대문자 (npm 에러 발생)
mkdir OhMySeoul  # npm naming restrictions 위반
```

**교훈:** npm 패키지 네이밍 규칙을 처음부터 따르는 것이 중요
- 소문자만 허용
- 하이픈(-) 사용 가능
- 언더스코어(_) 비권장

### 3.3 초기 문서 준비

**외부 기획 문서 수집:**
1. `PRD.md` - 제품 요구사항 정의서
2. `interactive-travel-quiz-planning.md` - 기획안
3. `travel-quiz-questions-and-types.md` - 20개 질문 풀
4. `oh-my-seoul-design-system.md` - 디자인 토큰

**AI에게 전달:**
```
"우리 프로젝트 폴더에 있는 문서들을 하나씩 읽어서 목적을 정리해봐."
```

---

## 4. 왜 Next.js와 Tailwind인가?

### 4.1 Next.js 선택 이유

**1. Server-Side Rendering (SSR) 기본 제공**
```typescript
// 검색 엔진 최적화 (SEO) 자동
export async function generateMetadata({ params }) {
  const { type } = await params;
  return {
    title: `Seoul ${type} - Oh my Seoul`,
    description: '...',
    openGraph: {
      images: [`/og/${type}.png`]
    }
  }
}
```

**바이럴 마케팅에 필수:**
- Instagram, Facebook 링크 공유 시 미리보기 이미지 표시
- 동적 OG 이미지 (타입별로 다른 이미지)

**2. App Router (Next.js 13+)**
```
app/
├── page.tsx                    # 랜딩
├── quiz/page.tsx               # 퀴즈
└── result/[type]/page.tsx      # 결과 (동적 라우팅)
```

**장점:**
- 파일 시스템 기반 라우팅 (폴더 = URL)
- Server/Client Component 명확한 분리
- 메타데이터 관리 용이

**3. Image Optimization**
```typescript
import Image from 'next/image';

<Image
  src="/images/types/trendsetter.webp"
  width={800}
  height={800}
  alt="Seoul Trendsetter"
  priority  // 첫 로드 우선
/>
```

**효과:**
- 자동 WebP 변환
- Lazy loading
- 반응형 srcset 생성

**4. API Routes**
```typescript
// app/api/save-result/route.ts
export async function POST(request: Request) {
  const { answers, type } = await request.json();
  // Supabase 저장
  return Response.json({ success: true });
}
```

**Phase 6에서 활용:**
- 클라이언트에서 `/api/save-result` 호출
- 서버에서 데이터 저장 (보안 강화)

**5. Vercel 최적화**
- Next.js 개발사 Vercel의 무료 호스팅
- 자동 배포 (git push → 배포 완료)
- Edge Network (전 세계 빠른 로딩)

### 4.2 Tailwind CSS 선택 이유

**1. Utility-First 방식**
```typescript
// ✅ Tailwind
<button className="bg-[#37BEB0] text-white px-4 py-2 rounded-lg hover:bg-[#2C9B8F]">
  시작하기
</button>

// ❌ CSS 파일 별도 작성
<button className="start-button">시작하기</button>
// styles.css: .start-button { background: #37BEB0; ... }
```

**장점:**
- CSS 파일 왔다갔다 안 해도 됨
- 클래스명 고민 불필요 (`.start-button` vs `.btn-start` vs `.cta-button`)
- 중복 스타일 자동 제거 (빌드 시)

**2. 반응형 디자인 간편**
```typescript
<div className="
  w-full           /* 모바일: 100% */
  md:w-1/2         /* 태블릿: 50% */
  lg:w-1/3         /* 데스크탑: 33% */
">
```

**바이럴 앱에 필수:**
- 모바일 퍼스트 (Instagram 공유는 주로 모바일)
- 다양한 화면 크기 대응

**3. shadcn/ui와 완벽한 호환**
```bash
npx shadcn@latest add button
```

**생성된 코드:**
```typescript
// components/ui/button.tsx
<Slot
  className={cn(
    "inline-flex items-center justify-center rounded-md text-sm",
    "bg-primary text-primary-foreground hover:bg-primary/90",
    className
  )}
/>
```

**장점:**
- Tailwind 기반 컴포넌트 라이브러리
- 코드를 직접 프로젝트에 복사 (의존성 최소화)
- 커스터마이징 자유도 100%

**4. 디자인 시스템 적용 용이**
```css
/* globals.css */
:root {
  --mint-primary: #37BEB0;
}

/* 자동으로 bg-[var(--mint-primary)] 사용 가능 */
```

**5. 빌드 최적화**
- 사용하지 않는 CSS 자동 제거
- 프로덕션 번들 크기 최소화

**Tailwind v4 추가 장점:**
- JavaScript 설정 파일 불필요 (`tailwind.config.js` 삭제)
- CSS 네이티브 변수 활용
- 빌드 속도 10배 향상

### 4.3 Next.js + Tailwind 조합의 시너지

**개발 속도 3배 향상:**
```typescript
// 10분 만에 완성되는 랜딩 페이지
export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#E8F7F5] to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-[#37BEB0]">Oh my Seoul</h1>
        <p className="mt-4 text-xl text-gray-600">당신의 서울 여행 스타일은?</p>
        <Button className="mt-8 bg-[#37BEB0] hover:bg-[#2C9B8F]">
          테스트 시작하기
        </Button>
      </motion.div>
    </main>
  );
}
```

**배포 1분 완성:**
```bash
git push origin main
# Vercel이 자동으로 빌드 + 배포
# https://oh-my-seoul.vercel.app 완성
```

**초보자에게 적합:**
- 학습 곡선 완만 (HTML/CSS 알면 시작 가능)
- AI가 Tailwind 클래스명 잘 알고 있음
- 커뮤니티 활발 (Stack Overflow, Discord)

---

## 5. 세션 1: 기획 문서를 코드로 (Chat 1)

**목표:** 외부 기획 문서를 이해하고 MVP 범위 정의, 실행 가능한 계획 수립

### 5.1 문서 검토 단계

**사용자 요청:**
```
"우리 프로젝트 폴더에 있는 문서들을 하나씩 읽어서 목적을 정리해봐."
```

**AI의 작업:**
1. `oh-my-seoul-design-system.md` 읽기 → 색상, 폰트, 간격 파악
2. `PRD (1).md` 읽기 → 제품 요구사항 이해
3. `PROJECT-PLAN.md` 읽기 → 기존 계획 확인 (타임라인 중심)
4. `interactive-travel-quiz-planning.md` → 초기 아이디어 파악
5. `travel-quiz-questions-and-types.md` → 20개 질문, 7가지 타입 확인

**결과:** AI가 프로젝트 전체 맥락을 파악함

### 5.2 비즈니스 맥락 이해

**사용자 설명:**
```
"우리 비즈니스에 대해 알고 있어?"
→ The Nines는 신흥 시장 인바운드 관광객 타겟 마케팅 에이전시...

"첫 번째 목적은 고객의 선호 여행 데이터 획득, 두 번째는 협력업체 홍보"
→ 하지만 데이터 정책이 엄격하기에 최소한의 수집만...
→ 게이미피케이션에 집중한다.
```

**AI의 이해:**
- 바이럴 마케팅이 1순위 (Instagram 공유)
- 데이터 수집은 2순위 (개인정보 최소화)
- 빠른 출시가 중요 (MVP 범위 축소 필요)

### 5.3 MVP 범위 재정의

**사용자의 명확한 요구사항:**
```
1. 질문은 8개로 가고, 랜덤으로 나와. ❌ (고정으로 변경됨)
2. 7가지 타입은 이미지 생성 대신, AI 일러스트 넣을 거야.
3. 바이럴 공유는 인스타만 일단 하자.
4. 다국어는 한/영 모드만 MVP 단계에서 하자.
5. 지도 연동은 후순위, 카카오톡 공유 대신 링크 공유만.
6. 개발 기간은 명시하지 마. 나 혼자 하는 거야.
```

**AI의 대응:**
- MVP 1.0 (PRD 기준) → MVP 2.0 (확정) 변경표 작성
- 타임라인 제거 (1인 개발은 일정 예측 불가)
- 의존성 기반 Phase 구조 도입 (Phase 0~7)

### 5.4 질문 선정 프로세스 (20개 → 8개)

**Step 1: 카테고리 분류**
```
Food: Q6, Q7, Q8, Q9 (4개)
Activity: Q10, Q11, Q13, Q14 (4개)
Vibe: Q12, Q16, Q17, Q19 (4개)
K-Culture: Q15 (1개)
Planning: Q1, Q2, Q3, Q4, Q5 (5개)
Discovery: Q18 (1개)
Purpose: Q20 (1개)
```

**Step 2: 각 카테고리에서 대표 질문 선택**
- Food → Q7 (이상적 음식 경험), Q9 (모험심)
- Activity → Q10 (이상적 활동)
- Vibe → Q12 (분위기)
- K-Culture → Q15 (K-문화 지식)
- Planning → Q2 (계획 스타일)
- Discovery → Q18 (장소 발견 방식)
- Purpose → Q20 (여행 후 기대)

**Step 3: 스코어 분포 검증**
```python
# 7가지 타입 모두 측정 가능한지 확인
types_coverage = {
    'trendsetter': 4개 질문,
    'heritage-explorer': 3개 질문,
    'foodie': 4개 질문,
    'kculture-fan': 2개 질문,
    'nature-seeker': 3개 질문,
    'social-butterfly': 2개 질문,
    'balanced-explorer': fallback
}
# 모든 타입이 2개 이상 질문으로 측정됨 ✅
```

### 5.5 PROJECT-PLAN.md 전면 재작성

**핵심 변경사항:**

**Before (타임라인 중심):**
```markdown
## Week 1-2: 프로젝트 설정
- Day 1-3: Next.js 설치
- Day 4-5: shadcn/ui 설정
```

**After (Phase 기반):**
```markdown
## Phase 0: 사전 준비
- 0.1 콘텐츠 확정 ✅
- 0.2 AI 일러스트 (외부 작업)
- 0.3 영어 번역 (보류)

## Phase 1: 프로젝트 기반
- 1.1 Next.js 생성
- 1.2 폴더 구조
- 1.3 디자인 시스템 적용

## Phase 2: UI 컴포넌트
...
```

**의존성 다이어그램 추가:**
```
Phase 0 → Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 7
                                                    ↘ Phase 6 (선택)
```

### 5.6 문서 구조화 (3개만 유지)

**AI의 실수 1: 과도한 문서 생성**
```
AI: [PHASE-0-GUIDE.md, SELECTED-QUESTIONS.md 생성]
사용자: "문서 많이 만들지 마. 필요한 것만 제한해서 만들어."
AI: [삭제] ✅
```

**AI의 실수 2: CLAUDE.md 중복 콘텐츠**
```
AI: [8개 질문 리스트, Phase 상세 설명 포함]
사용자: "claude.md에는 필수적인 내용만 넣어. 왜 자꾸 다른 문서에 기재되어 있는 것을 넣어?"
AI: [최소화 - 문서 네비게이션만 유지] ✅
```

**최종 문서 구조:**
```
oh-my-seoul/
├── CLAUDE.md                    # 문서 가이드 (어떤 문서를 언제 봐야 하는지)
├── PROJECT-PLAN.md              # Phase 0~7 실행 계획
├── oh-my-seoul-design-system.md # 디자인 토큰
└── LOG.md                       # 작업 로그 (날짜별)
```

**교훈: Single Source of Truth**
- 한 가지 정보는 한 곳에만 기록
- 문서 간 중복 최소화
- 각 문서의 명확한 역할 정의

### 5.7 Git 커밋

```bash
git add CLAUDE.md PROJECT-PLAN.md LOG.md
git commit -m "docs: MVP 범위 재정의 및 Phase 기반 계획 수립

- MVP 2.0: 8개 질문, 한/영만, Instagram만
- PROJECT-PLAN.md 전면 재작성 (Phase 0~7)
- CLAUDE.md, LOG.md 추가 (문서 네비게이션)
- 20개 질문 중 8개 선정 (스코어 분포 검증)

#phase0 #mvp-planning"
```

### 5.8 세션 1 교훈

**1. 명확한 의사소통**
```
❌ "퀴즈 앱 만들어줘"
✅ "질문 8개, 타입 7개, 한/영만, Instagram만, 혼자 개발"
```

**2. 문서 최소화 원칙**
- AI는 기본적으로 "상세한 문서"를 선호 → 과도한 문서 생성
- 인간 개발자가 "필요한 것만"이라고 명확히 제한해야 함

**3. 반복적 개선**
- 첫 시도에 완벽할 수 없음
- 사용자 피드백 → AI 수정 → 재검토 반복

**4. 의존성 기반 계획**
- 타임라인 대신 "무엇이 먼저 필요한가?" 중심

---

## 6. 세션 2: 프로젝트 구축 (Chat 2)

**목표:** Next.js 15 프로젝트 생성, TypeScript 데이터 구조 작성, 디자인 시스템 적용

### 6.1 현재 상태 파악

**사용자 요청:**
```
"지침 확인해봐. 현재 어떤 상태인지 파악하고 다음 단계 제안해봐."
```

**AI의 분석:**
```
✅ Phase 0.1 완료 (질문/타입 확정)
⏸️ Phase 0.2 대기 (AI 일러스트 - 외부 작업 필요)
⏸️ Phase 0.3 대기 (영어 번역)

옵션 A: AI 일러스트 없이도 개발 가능한 부분부터 시작
옵션 B: Phase 0 완료 후 개발 시작
```

**사용자 결정:**
```
"옵션 A 진행하고, phase 0 작업은 막히기 직전까지 미루자.
이미지 생성은 별도 작업으로 하면 되잖아."
```

**교훈:** 완벽한 준비보다 빠른 프로토타이핑
- 외부 의존성(AI 일러스트)을 기다리지 않음
- 더미 데이터로 진행, 나중에 교체

### 6.2 데이터 구조 작성 (TypeScript)

**data/questions.ts**
```typescript
export type Question = {
  id: number;
  category: 'profile' | 'food' | 'vibe' | 'activity' | 'kculture';
  question: { ko: string; en: string };
  options: QuestionOption[];
};

export type QuestionOption = {
  id: string;
  text: { ko: string; en: string };
  scores: ScoreWeights;
};

export type ScoreWeights = {
  trendsetter?: number;
  'heritage-explorer'?: number;
  foodie?: number;
  'kculture-fan'?: number;
  'nature-seeker'?: number;
  'social-butterfly'?: number;
  'balanced-explorer'?: number;
};
```

**예시: Q1 - 여행 목적**
```typescript
{
  id: 1,
  category: 'profile',
  question: {
    ko: '서울 여행의 주요 목적은?',
    en: "What's the main purpose of your Seoul trip?",
  },
  options: [
    {
      id: 'q1_a',
      text: {
        ko: '트렌디한 카페와 레스토랑 탐방',
        en: 'To explore trendy cafes and restaurants',
      },
      scores: {
        trendsetter: 3,
        foodie: 2,
        'social-butterfly': 2,
      },
    },
    // 3개 옵션 더...
  ]
}
```

**data/types.ts**
```typescript
export type TravelerType = {
  id: string;
  name: { ko: string; en: string };
  koreanName: string;  // "서울 트렌드세터"
  description: { ko: string; en: string };
  image: string;       // "/images/types/trendsetter.webp"
  color: string;       // "#37BEB0"
  courseIds: string[]; // ['trendsetter_1', 'trendsetter_2', ...]
};
```

**타입별 색상 매핑:**
```typescript
trendsetter → #37BEB0 (mint-primary)
heritage-explorer → #2C6170 (blue-midnight)
foodie → #C6B170 (gold-warm)
kculture-fan → #9B85FF (purple-soft)
nature-seeker → #7CB342 (green-nature)
social-butterfly → #FF6B6B (coral-vibrant)
balanced-explorer → #A4E5E0 (mint-light)
```

**data/courses.ts**
```typescript
export type Course = {
  id: string;
  name: { ko: string; en: string };
  address: { ko: string; en: string };
  description: { ko: string; en: string };
  category: 'cafe' | 'restaurant' | 'culture' | 'shopping' | 'nature' | 'nightlife';
};

// 21개 추천 코스 (7개 타입 × 3개)
export const courses: Course[] = [
  {
    id: 'trendsetter_1',
    name: { ko: '성수동 카페거리', en: 'Seongsu Cafe Street' },
    address: { ko: '서울시 성동구 성수동', en: 'Seongsu-dong, Seongdong-gu' },
    description: { ko: '힙한 카페와 갤러리가 밀집한 서울의 브루클린', en: 'Seoul\'s Brooklyn with trendy cafes' },
    category: 'cafe'
  },
  // 20개 더...
];
```

**Git 커밋:**
```bash
git add data/
git commit -m "feat: MVP 데이터 구조 완성 (Phase 0.1 + Phase 3.1)

- questions.ts: 8개 질문 TypeScript 구조
- types.ts: 7가지 타입 정의
- courses.ts: 21개 추천 코스 (더미 데이터)

#phase0 #phase3 #data-structure"
```

### 6.3 폴더명 이슈 해결

**문제 발생:**
```bash
npx create-next-app@latest .
Error: name can no longer contain capital letters
```

**원인:** 폴더명 `OhmySeoul`에 대문자 포함 (npm 규칙 위반)

**시도 1: 폴더명 변경 (실패)**
```bash
mv OhmySeoul ohmyseoul
# Error: Permission denied (Windows는 대소문자 구분 안함)
```

**시도 2: 임시 폴더 경유 (실패)**
```bash
mv OhmySeoul temp && mv temp ohmyseoul
# 여전히 같은 이름으로 인식
```

**최종 해결: 새 폴더 생성**
```bash
mkdir oh-my-seoul
cp -r OhmySeoul/* oh-my-seoul/
cd oh-my-seoul
git init
```

**교훈:**
- **처음부터 소문자 폴더명 사용**하는 것이 best practice
- Windows/macOS는 대소문자를 구분하지 않음
- npm 패키지 네이밍 규칙: 소문자만 허용

### 6.4 Next.js 15 프로젝트 생성

**충돌 문제:**
```
Error: The directory contains files that could conflict:
  CLAUDE.md, PROJECT-PLAN.md, data/, ...
```

**해결 과정:**
```bash
# 1. 백업
cp -r data/ CLAUDE.md PROJECT-PLAN.md /tmp/backup/

# 2. 폴더 비우기
rm -rf *

# 3. Next.js 생성
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --app \
  --eslint \
  --no-src-dir \
  --import-alias "@/*" \
  --turbopack

# 4. 백업 복원
cp -r /tmp/backup/* .
```

**설치 완료:**
```
✅ Next.js 15
✅ TypeScript
✅ Tailwind CSS v4
✅ ESLint
✅ Turbopack
```

**추가 패키지 설치:**
```bash
npm install framer-motion lucide-react next-intl
```

### 6.5 shadcn/ui 초기화

```bash
npx shadcn@latest init -d
```

**`-d` 플래그:** 기본 설정으로 자동 진행
- Style: Default
- Base color: Slate
- CSS variables: Yes

**결과:**
- `components.json` 생성
- `lib/utils.ts` 생성 (cn 함수)
- `app/globals.css` CSS 변수 추가

### 6.6 디자인 시스템 적용 (Tailwind v4)

**기존 (Next.js 기본):**
```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
}
```

**변경 후 (Oh my Seoul 디자인):**
```css
@import "tailwindcss";

:root {
  /* Oh my Seoul Design System Colors */
  --mint-primary: #37BEB0;
  --mint-light: #A4E5E0;
  --mint-pale: #E8F7F5;
  --mint-dark: #2C9B8F;

  --gold-warm: #C6B170;
  --blue-midnight: #2C6170;
  --coral-vibrant: #FF6B6B;
  --purple-soft: #9B85FF;

  /* shadcn/ui 토큰 매핑 */
  --primary: var(--mint-primary);
  --primary-foreground: #FFFFFF;
  --accent: var(--mint-light);
  --destructive: var(--coral-vibrant);
  --ring: var(--mint-primary);
}
```

**Tailwind v4 주요 변경사항:**
- `tailwind.config.js` 파일 불필요
- CSS 네이티브 변수 활용
- `@import "tailwindcss";`로 시작
- `@theme` 섹션에서 커스텀 설정

**폴더 구조 생성:**
```bash
mkdir -p components/quiz components/result components/shared components/ui \
         lib public/images/types public/images/og messages
```

### 6.7 문서 관리 피드백

**사용자:**
```
"프로젝트 플랜 파일과 log 파일 잘 업데이트하고 있지?"
```

**AI의 실수:** LOG.md 파일이 복원 시 누락됨

**해결:**
- LOG.md 재생성 (날짜별 작업 로그)
- PROJECT-PLAN.md 체크리스트 업데이트
```markdown
### Phase 0: 사전 준비
- [x] 8개 질문 확정 (2025-10-21)
- [x] 7가지 타입 정의 (2025-10-21)
- [ ] AI 일러스트 (보류)

### Phase 1: 프로젝트 기반
- [x] Next.js 프로젝트 생성 (2025-10-21)
- [x] 폴더 구조 생성 (2025-10-21)
- [x] 디자인 시스템 적용 (2025-10-21)
```

**교훈:** AI는 작업 진행에만 집중하면 문서 업데이트를 잊기 쉬움
- 주기적으로 "문서 업데이트했어?" 확인 필요

### 6.8 세션 2 교훈

**1. npm 네이밍 규칙**
```
✅ oh-my-seoul
❌ OhMySeoul, Ohmyseoul, oh_my_seoul
```

**2. 기존 파일이 있는 폴더에 Next.js 생성**
- 백업 → 폴더 비우기 → Next.js 생성 → 복원

**3. Tailwind v4 변경사항**
- JavaScript 설정 파일 불필요
- CSS 변수 직접 사용
- 더 빠른 빌드 속도

**4. TypeScript 타입 정의 우선**
```typescript
// ✅ 좋은 예
export type Question = { ... }
export const questions: Question[] = [...]

// ❌ 나쁜 예
export const questions: any[] = [...]
```

---

## 7. 세션 3: 테스트와 버그 수정 (Chat 3)

**목표:** Phase 3 완료 후 로컬 테스트 실행 및 발견된 버그 수정

### 7.1 Phase 3 완료 상태

**작성된 파일 (Chat 3 이전):**
- ✅ `lib/quiz-context.tsx` - 퀴즈 상태 관리
- ✅ `lib/scoring.ts` - 스코어링 알고리즘
- ✅ `app/[locale]/page.tsx` - 랜딩 페이지
- ✅ `app/[locale]/quiz/page.tsx` - 퀴즈 페이지
- ✅ `app/[locale]/result/[type]/page.tsx` - 결과 페이지
- ✅ `components/quiz/*` - QuestionCard, OptionButton, ProgressBar
- ✅ `components/result/*` - TravelerTypeBadge, CourseCard
- ✅ `components/shared/*` - Button, Loading

### 7.2 로컬 개발 서버 시작

```bash
npm run dev
```

**접속:** http://localhost:3000

**결과:** 화면이 표시되지 않음 😱

### 7.3 버그 1: 라우팅 구조 문제

**문제:**
- `app/[locale]/` 구조로 되어 있으나 `middleware.ts` 없음
- 다국어 라우팅이 작동하지 않음

**원인:**
- next-intl 설정을 Phase 5로 미뤘는데, 폴더 구조는 이미 다국어 방식
- 일관성 부족

**해결:**
```bash
# 파일 이동 (다국어 구조 제거)
mv app/[locale]/page.tsx app/page.tsx
mv app/[locale]/quiz/page.tsx app/quiz/page.tsx
mv app/[locale]/result/[type]/page.tsx app/result/[type]/page.tsx
rmdir app/[locale]
```

**app/layout.tsx에 QuizProvider 추가:**
```typescript
import { QuizProvider } from '@/lib/quiz-context';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <QuizProvider>
          {children}
        </QuizProvider>
      </body>
    </html>
  );
}
```

**교훈:**
- MVP는 한국어만 → 다국어 구조 불필요
- Phase별 작업 범위를 코드 구조에도 일관되게 적용

### 7.4 버그 2: 스코어 키/타입 ID 불일치 (치명적)

**문제:**
```typescript
// questions.ts - 잘못된 스코어 키
scores: {
  trendy: 3,        // ❌ 타입 ID와 불일치
  traditional: 3,   // ❌
  local: 2,         // ❌
}

// types.ts - 실제 타입 ID
id: 'trendsetter'        // ✅
id: 'heritage-explorer'  // ✅
id: 'foodie'            // ✅
```

**영향:**
- 스코어링 알고리즘이 스코어를 타입에 매핑하지 못함
- 항상 fallback 타입(`balanced-explorer`)만 반환

**발견 과정:**
```typescript
console.log('Calculated type:', travelerType);
// 출력: balanced-explorer (항상 같음)

console.log('Scores:', scores);
// 출력: { trendsetter: 0, foodie: 0, ... } (모두 0)
```

**해결:**
```typescript
// Before
scores: {
  trendy: 3,
  traditional: 3,
  local: 2,
}

// After
scores: {
  trendsetter: 3,
  'heritage-explorer': 3,
  foodie: 2,
}
```

**수정 범위:** 8개 질문 × 4개 선택지 = 32개 스코어 객체

**교훈:**
- 타입 정의와 데이터 구조의 일관성이 핵심
- TypeScript 타입 시스템만으로는 런타임 데이터 불일치 방지 불가
- **실제 테스트 없이는 발견 어려움**

### 7.5 버그 3: Tailwind v4 커스텀 컬러 미작동

**문제:**
```typescript
// ❌ 작동 안함
className="bg-mint-primary text-white"
```

**원인:**
- Tailwind v4는 CSS 변수만으로는 유틸리티 클래스 자동 생성 안됨
- `bg-[색상명]` 형태는 v3 방식

**해결: Arbitrary Values 사용**
```typescript
// Before
className="bg-mint-primary text-white"

// After
className="bg-[#37BEB0] text-white"
```

**수정 파일:**
- `components/quiz/OptionButton.tsx`
- `components/shared/Button.tsx`
- 기타 컬러 사용 컴포넌트

**교훈:**
- Tailwind v4는 완전히 다른 설정 방식
- Arbitrary values (`bg-[#37BEB0]`)는 정상 작동
- 프로덕션에서는 문제 없지만, 타입 세이프하지 않음

### 7.6 버그 4: Next.js 15 async params 에러

**문제:**
```
Error: Route '/result/[type]' used `params.type`.
`params` should be awaited before using its properties.
```

**원인:**
- Next.js 15에서 동적 라우트의 `params`가 Promise로 변경됨
- 기존: `params.type` 직접 접근 (Next.js 14)
- 변경: `await params` 필요 (Next.js 15)

**해결:**

**1. Server Component로 변경**
```typescript
// Before
export default function ResultPage({ params }: ResultPageProps) {
  const travelerType = getTravelerTypeById(params.type);

// After
export default async function ResultPage({ params }: ResultPageProps) {
  const { type } = await params;
  const travelerType = getTravelerTypeById(type);
```

**2. Client/Server 분리**
- `app/result/[type]/page.tsx` - Server Component (데이터 페칭)
- `app/result/[type]/ResultClient.tsx` - Client Component (인터랙션)

```typescript
// page.tsx (Server)
export default async function ResultPage({ params }: ResultPageProps) {
  const { type } = await params;
  const travelerType = getTravelerTypeById(type);

  return <ResultClient travelerType={travelerType} />;
}

// ResultClient.tsx (Client)
'use client';

export default function ResultClient({ travelerType }: { travelerType: TravelerType }) {
  const router = useRouter();
  // 인터랙션 로직
}
```

**교훈:**
- Next.js 15 Breaking Changes 이해 필수
- Server/Client Component 역할 명확히 분리
- `useRouter`, `useState` 등은 Client Component에서만 사용

### 7.7 디버깅 로그 추가

```typescript
// app/quiz/page.tsx
const handleNext = () => {
  if (currentQuestion === 7) {
    console.log('Last question - attempting to calculate type');
    console.log('Current answers:', answers);
    console.log('Answer count:', Object.keys(answers).length);

    try {
      const travelerType = calculateTravelerType(answers);
      console.log('Calculated type:', travelerType);
      console.log('Navigating to:', `/result/${travelerType}`);
      router.push(`/result/${travelerType}`);
    } catch (error) {
      console.error('Error calculating type:', error);
      alert('결과 계산 중 오류가 발생했습니다.');
    }
  }
};
```

**교훈:**
- 콘솔 로그는 디버깅의 기본
- 에러 핸들링으로 사용자 경험 개선
- try-catch로 예상치 못한 에러 대비

### 7.8 테스트 결과

**성공한 플로우:**

1. **랜딩 페이지** (http://localhost:3000)
   - ✅ "Oh my Seoul" 타이틀 표시
   - ✅ "테스트 시작하기" 버튼 작동
   - ✅ Framer Motion 애니메이션 정상

2. **퀴즈 진행** (http://localhost:3000/quiz)
   - ✅ 8개 질문 순차 표시
   - ✅ 진행률 바 업데이트 (1/8 → 8/8)
   - ✅ 선택지 클릭 시 체크 표시
   - ✅ 이전/다음 버튼 작동
   - ✅ 카테고리 뱃지 표시 (Food, Vibe, K-Culture 등)

3. **로딩 화면**
   - ✅ 2.5초 로딩 애니메이션
   - ✅ 로테이션 메시지 표시

4. **결과 페이지** (http://localhost:3000/result/nature-seeker)
   - ✅ 타입 정보 표시
   - ✅ 추천 코스 3개 표시
   - ✅ "결과 공유하기" 버튼
   - ✅ "다시 테스트하기" 버튼
   - ✅ 애니메이션 정상

**확인된 타입:** Nature Seeker (실제 답변 기반)

### 7.9 발견된 버그 요약

| 번호 | 버그 | 심각도 | 발견 방법 | 수정 |
|------|------|--------|----------|------|
| 1 | 라우팅 구조 문제 | P0 | 화면 안 뜸 | 다국어 구조 제거 |
| 2 | 스코어 키 불일치 | P0 | 콘솔 로그 | 32개 객체 수정 |
| 3 | Tailwind 커스텀 컬러 | P1 | 디자인 안 나옴 | Hex 직접 사용 |
| 4 | Next.js 15 async params | P0 | 서버 에러 | async/await 처리 |

**교훈:**
- **실제 테스트 없이는 숨겨진 버그 발견 불가**
- 로컬 개발 서버 실행이 가장 중요한 검증 단계
- AI가 작성한 코드도 반드시 테스트 필요

### 7.10 Git 커밋

```bash
git add .
git commit -m "fix: Phase 3 로컬 테스트 및 주요 버그 수정

- 라우팅 구조 단순화 (다국어 제거)
- 스코어 키/타입 ID 불일치 수정 (32개 객체)
- Tailwind v4 Arbitrary values 적용
- Next.js 15 async params 처리
- Server/Client 컴포넌트 분리

#phase3 #bugfix #testing"
```

### 7.11 세션 3 교훈

**1. 프로토타입 → 테스트 → 수정 사이클**
```
코드 작성 (AI) → 로컬 테스트 (인간) → 버그 발견 (인간) → 수정 (AI+인간)
```

**2. Next.js 15 Breaking Changes**
- Dynamic route params는 Promise
- Server Component에서만 `await params` 가능
- Client Component는 props로 데이터 전달

**3. Tailwind v4 마이그레이션**
- 커스텀 컬러는 Arbitrary values 사용
- `bg-[#37BEB0]` 형태

**4. TypeScript 한계**
- 타입 정의는 컴파일 타임 검사
- 런타임 데이터 불일치는 테스트로만 발견 가능

---

## 8. 세션 4: SEO 최적화 및 버전 관리 (Chat 4)

### 8.1 세션 개요

**목표:** MVP 출시 완료 후 검색엔진 최적화 및 버전 관리 시작

**완료 작업:**
- SEO 메타데이터 설정 (Open Graph, Twitter 카드)
- 커스텀 도메인 연결 (ohmyseoul.page)
- Google/네이버 검색엔진 등록
- 파비콘 및 OG 이미지 추가
- 버전 관리 시작 (v1.0.0)
- Footer 컴포넌트 (버전 표시)

### 8.2 주요 대화 흐름

#### A. SEO 최적화 작업

**사용자:** "지금부터 우리는 SEO 최적화 작업을 할거야"

**AI의 작업:**
1. ✅ `app/layout.tsx`: Open Graph, Twitter 카드 메타데이터 추가
2. ✅ `app/result/[type]/page.tsx`: 타입별 동적 메타데이터 생성
3. ✅ `app/sitemap.ts`: 9개 페이지 자동 사이트맵 생성
4. ✅ `app/robots.ts`: 검색엔진 크롤링 설정

**학습 포인트:**
- Next.js 13+ Metadata API 활용
- 동적 메타데이터 생성 (`generateMetadata`)
- 사이트맵 자동화

#### B. 커스텀 도메인 연결

**사용자:** "도메인 방식으로 구글진행했어 문제가 되는 상황알려줘"

**AI의 답변:**
- 도메인 방식 vs URL 접두어 방식 비교
- 도메인 방식이 더 좋음 (서브도메인 자동 포함)
- Cloudflare DNS 설정 방법 안내

**실제 작업:**
1. ✅ Cloudflare에서 `ohmyseoul.page` 도메인 구매
2. ✅ Vercel에 커스텀 도메인 추가
3. ✅ Cloudflare DNS A 레코드 설정 (216.198.79.1)
4. ✅ 코드의 모든 URL을 새 도메인으로 변경

**학습 포인트:**
- DNS 설정 (A 레코드, CNAME)
- SSL 인증 자동화
- 도메인 전파 시간 고려

#### C. 검색엔진 등록

**사용자:** "인증된 소유자라고 하네"

**AI의 작업:**
1. ✅ Google Search Console 인증 완료 (DNS TXT 레코드)
2. ✅ 네이버 서치어드바이저 인증 (HTML 메타 태그)
3. ✅ 사이트맵 제출 (구글/네이버)

**학습 포인트:**
- 구글: 도메인 방식 (TXT 레코드)
- 네이버: HTML 태그 방식
- 사이트맵 제출 URL 형식

#### D. 파비콘 및 OG 이미지

**사용자:** "둘다 넣었어"

**AI의 확인:**
- `app/icon.png` ✅ (자동 파비콘)
- `public/images/og/og-image.png` ✅ (새 OG 이미지)
- layout.tsx 경로 업데이트

**학습 포인트:**
- Next.js 자동 파비콘 처리
- OG 이미지 최적 크기 (1200x630)

#### E. 버전 관리 및 문서 정리

**대화 핵심:**

**사용자:** "우리 웹서비스 버전관리를 해야하는데 깃허브로 가능할까?"

**AI:** Git 태그와 WORK-LOG.md 활용 방안 제안

**사용자:** "깃허브 이슈는 뭐야?"

**AI:** GitHub Issues vs 문서 관리 비교
- Issues: 팀 협업용
- 문서: 1인 개발용
- 결론: 현재는 문서만 사용

**사용자:** "프로젝트플랜과 log 문서는 깃허브 이슈와 같이쓰면 조금이라도 장점이 잇는지 알려줘"

**AI의 솔직한 답변:**
- ❌ 중복이고 비효율적
- 1인 개발에는 문서가 더 효율적
- 팀 협업 시작하면 Issues 추가 고려

**최종 결정:**
- ✅ CLAUDE.md (AI 지시서)
- ✅ PROJECT-PLAN.md (Phase별 계획)
- ✅ WORK-LOG.md (작업 이력 + 버전 기록)
- ✅ 디자인/SEO 가이드 문서
- ❌ GitHub Issues (현재는 불필요)

**버전 관리 시작:**
1. ✅ Git 태그 v1.0.0 생성
2. ✅ WORK-LOG.md에 버전 정보 추가
3. ✅ Footer 컴포넌트로 웹사이트에 버전 표시

### 8.3 세션 4에서 배운 핵심

#### 1. SEO는 초기부터 중요
```typescript
// layout.tsx
export const metadata: Metadata = {
  openGraph: { ... },
  twitter: { ... },
  verification: { ... }
}
```

#### 2. 도메인 방식 인증의 장점
- 서브도메인 자동 포함
- http/https 구분 없음
- 장기적으로 더 편리

#### 3. 문서 관리의 명확한 역할
- **CLAUDE.md**: AI에게 작업 방식 알려주기
- **PROJECT-PLAN.md**: 전체 계획
- **WORK-LOG.md**: 시간순 이력 + 버전 기록

#### 4. 버전 관리 = Git 태그 + 문서 + UI
```
Git: v1.0.0 태그
문서: WORK-LOG.md에 버전 정보
웹: Footer에 버전 표시
```

### 8.4 실전 팁

**SEO 작업 순서:**
1. 메타데이터 설정
2. 사이트맵/robots.txt 생성
3. 도메인 연결
4. 검색엔진 등록
5. 사이트맵 제출
6. 노출 대기 (구글 1주, 네이버 2주)

**버전 관리 워크플로우:**
1. 주요 마일스톤 완료
2. Git 태그 생성 (`git tag -a v1.x.x`)
3. WORK-LOG.md 업데이트
4. Footer 버전 번호 수정
5. 커밋 및 푸시

**문서 vs Issues 선택 기준:**
- 1인 개발: 문서만 ✅
- 2-3명 팀: 문서 + Issues 고려
- 4명 이상: Issues 필수

### 8.5 타임라인

```
18:00 - SEO 작업 시작
19:00 - 커스텀 도메인 연결 완료
20:00 - 검색엔진 등록 완료
21:00 - 파비콘/OG 이미지 추가
22:00 - 버전 관리 시작 (v1.0.0)
23:00 - Footer 추가 및 문서 정리 완료
```

**총 소요 시간:** 약 5시간

### 8.6 결과물

**배포 정보:**
- Production: https://ohmyseoul.page
- Git Tag: v1.0.0
- SEO: 구글/네이버 등록 완료
- 파비콘 및 OG 이미지 최적화

**파일 변경:**
```
app/layout.tsx           (메타데이터 추가)
app/result/[type]/page.tsx  (동적 메타데이터)
app/sitemap.ts           (신규)
app/robots.ts            (신규)
app/icon.png             (신규)
components/Footer.tsx    (신규)
public/images/og/        (신규)
WORK-LOG.md              (버전 정보 추가)
```

---

## 9. 세션 5: 법적 문서 및 버전 관리 (Chat 5)

### 9.1 세션 개요

**목표:** 서비스 운영을 위한 법적 문서 작성 및 버전 관리 체계 확립

**완료 작업:**
- 문서 구조 개선 (AI-VIBE-CODING-TUTORIAL.md 재정렬)
- 개인정보처리방침 작성 (PRIVACY.md)
- 이용약관 작성 (TERMS.md)
- 법적 페이지 구현 (/privacy, /terms)
- Footer 링크 추가
- 버전 v1.0.0 → v1.1.0

### 9.2 주요 대화 흐름

#### A. 문서 구조 개선

**사용자:** "이전에 하던 작업 이어서 하려고 해. 이전 대화 정리해서 문서 업데이트 해줘"

**AI의 작업:**
1. ✅ WORK-LOG.md: 세션 4 작업 내용 추가
2. ✅ AI-VIBE-CODING-TUTORIAL.md: 세션 4 추가 및 구조 재정렬
   - 섹션 7 "왜 Next.js?" → 섹션 4로 이동 (기술 스택 선택 이유는 세션 전에)
   - 섹션 11 "세션 4" → 섹션 8로 이동 (세션들을 시간순 배치)
   - 목차 업데이트

**학습 포인트:**
- 문서 구조의 논리적 흐름 중요
- 기술 선택 → 실전 작업 → 고급 주제 순서
- Python 스크립트로 대규모 문서 재구성

---

#### B. 개인정보처리방침 필요성 분석

**사용자:** "먼저 지금 상태로 앱을 배포했을 때, 유저 데이터 수집에 관련된 개인정보처리방침을 세워야 해"

**AI의 분석:**

**현재 데이터 수집 현황:**
```
❌ Google Analytics      없음
❌ 쿠키                  없음
❌ localStorage          없음
❌ 사용자 계정/DB        없음
⚠️ Vercel 서버 로그     있음 (IP 주소 자동 수집)
```

**필요한 법적 문서:**
1. **개인정보처리방침 (필수)** ⚠️
   - IP 주소는 개인정보에 해당
   - 한국 개인정보보호법 준수 필요

2. **이용약관 (권장)** ✅
   - 법적 분쟁 방지
   - 서비스 보호

**학습 포인트:**
- Vercel 서버 로그에도 IP 주소 수집됨
- IP 주소는 한국법상 개인정보
- 최소한의 수집도 명시 필요

---

#### C. 비즈니스 모델 명확화

**사용자의 질문들:**
1. "이후에 사용자가 선택하는 로직에 따라 유형이 정해지고, 여행코스와 함께 서울의 명소, 행사, 사업장을 노출시킬 때 추가해야 하는 부분은?"
2. "고객으로부터 직접 정보를 받는 것은 없고, 우리 웹서비스 접속을 유도하는 광고, 선택 행동 정보, 마지막에 우리 제휴사의 사업장을 추가로 노출시키는 정도야. 이 정도로 리타게팅 광고가 필요해?"
3. "고객의 행동 데이터는 B2B 고객들에게 인사이트 정보로 사용되고 직접 데이터를 넘기지 않음"

**AI의 분석 결과:**

**비즈니스 모델:**
```
1. 광고로 유입 (Google/Meta Ads)
   ↓
2. 퀴즈 참여 → 행동 데이터 수집
   ↓
3. 결과 제공 + 제휴사 링크 노출
   ↓
4. 제휴사 사이트로 이동 (외부)
   ↓
5. SNS 공유 (바이럴)
```

**데이터 흐름:**
```
B2C 사용자 (행동 데이터 수집)
  ↓
익명화 & 집계 처리
  ↓
인사이트 리포트 (개인정보 제거)
  ↓
B2B 고객 (제휴 사업장)
```

**핵심 결론:**
- ✅ 리타게팅 불필요 (1회성 퀴즈)
- ✅ 개인정보 제3자 제공 없음 (익명화된 통계만)
- ✅ 간소화된 개인정보처리방침 가능

**학습 포인트:**
- 비즈니스 모델에 따라 법적 요구사항 달라짐
- 1회성 콘텐츠 + 바이럴 전략 → 리타게팅 불필요
- 익명화된 통계는 개인정보가 아님

---

#### D. 개인정보처리방침 작성

**핵심 내용:**

**1. 수집하는 정보 (최소화)**
```markdown
### 자동 수집 정보
- IP 주소 (개인정보)
- User-Agent (브라우저, OS, 기기)
- 페이지 조회, 클릭 기록 (행동 데이터)

### 수집하지 않는 정보
- 이름, 이메일, 전화번호
- 회원가입 정보
- 결제 정보
```

**2. 익명화 처리 방법**
```markdown
✅ IP 주소 해싱 (SHA-256)
   예: 123.456.789.0 → f3a8b2c... (복호화 불가)

✅ 시간 정보 집계
   예: 2025-10-23 15:34 → 2025년 10월 4주차

✅ 그룹 단위 통계
   예: 최소 100명 이상 데이터만 집계
```

**3. 제3자 제공 없음**
```markdown
제휴사에 제공하는 것:
✅ "트렌드세터 유형 70%가 강남 선호" (OK)
✅ "20-30대 여성 카페 클릭률 45%" (OK)

제공하지 않는 것:
❌ 특정 IP 주소 사용자의 클릭 이력 (NG)
❌ 개인 식별 가능한 정보 (NG)
```

**학습 포인트:**
- 익명화 = 재식별 불가능
- K-익명성 (최소 100명 그룹)
- 익명 정보는 개인정보보호법 적용 대상 아님

---

#### E. 이용약관 작성

**핵심 조항:**

**1. 외부 링크 면책**
```markdown
## 제6조 (제휴사 링크 및 외부 사이트)

면책 조항:
- 제휴사 및 외부 사이트는 회사가 운영하지 않습니다
- 외부 사이트의 개인정보 처리는 해당 사이트 정책 적용
- 외부 사이트 이용으로 발생하는 문제 책임 없음
```

**2. 저작권 보호**
```markdown
허용되는 사용:
✅ 개인적 목적의 결과 화면 캡처 및 SNS 공유
✅ 출처 표시를 통한 비상업적 인용

금지되는 사용:
❌ 상업적 목적의 무단 사용
❌ 2차 저작물 제작 (사전 승인 없이)
```

**학습 포인트:**
- 제휴사 링크 = 외부 사이트 = 면책 필요
- 저작권 조항으로 콘텐츠 보호
- SNS 공유는 허용 (바이럴 전략)

---

#### F. 기술적 구현

**1. Markdown → HTML 페이지**

**파일 구조:**
```
PRIVACY.md           (원본 문서)
  ↓
app/privacy/page.tsx (Next.js 페이지)
  ↓
https://ohmyseoul.page/privacy (배포)
```

**구현 방식:**
```typescript
// app/privacy/page.tsx
import fs from 'fs';
import path from 'path';

export default function PrivacyPage() {
  const filePath = path.join(process.cwd(), 'PRIVACY.md');
  const content = fs.readFileSync(filePath, 'utf8');

  // Markdown → HTML 변환
  const htmlContent = content
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // ... (추가 변환 규칙)

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
```

**2. Footer 링크 추가**
```typescript
// components/Footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      <Link href="/privacy">개인정보처리방침</Link>
      <span>|</span>
      <Link href="/terms">이용약관</Link>
      <p>Oh my Seoul v1.1.0 · © 2025</p>
    </footer>
  );
}
```

**학습 포인트:**
- 서버 컴포넌트에서 fs 모듈 사용 가능
- Markdown을 HTML로 간단히 변환
- Next.js <Link> 컴포넌트 사용 필수

---

#### G. 빌드 에러 수정

**문제 1: 정규식 플래그 에러**
```
Error: This regular expression flag is only available
       when targeting 'es2018' or later.

원인: /(<li.*<\/li>)/s ← /s 플래그 (dotAll)
해결: 정규식 제거 및 단순화
```

**문제 2: ESLint 에러**
```
Error: Do not use an `<a>` element to navigate to `/`.
       Use `<Link />` from `next/link` instead.

원인: <a href="/">홈으로</a>
해결: <Link href="/">홈으로</Link>
```

**수정 과정:**
```bash
npm run build  # 에러 발견
# 에러 수정
npm run build  # 성공 ✅
git commit
git push
```

**학습 포인트:**
- 로컬 빌드 테스트 필수
- Next.js 내부 링크는 항상 <Link> 사용
- ESLint 규칙 준수

---

#### H. 버전 관리

**사용자:** "수정했는데, 버전이 바뀌어야 하는 거 아니야? 우리 버전 변경 규칙이 뭐야?"

**버전 규칙 확인:**
```
Semantic Versioning (MAJOR.MINOR.PATCH)

v1.0.0 (2025-10-23) - MVP 출시
  ↓ 새 기능 추가
v1.1.0 (2025-10-24) - 법적 문서 추가 ✅

규칙:
- MAJOR: 호환되지 않는 API 변경
- MINOR: 하위 호환되는 새 기능 추가
- PATCH: 하위 호환되는 버그 수정
```

**변경 작업:**
1. ✅ Footer: v1.0.0 → v1.1.0
2. ✅ PRIVACY.md: 시행일 2025-01-01 → 2025-10-24
3. ✅ TERMS.md: 시행일 2025-01-01 → 2025-10-24
4. ✅ WORK-LOG.md: v1.1.0 섹션 추가
5. ✅ Git 태그: v1.1.0 생성 및 푸시

**학습 포인트:**
- 새 기능 추가 = MINOR 버전 증가
- 날짜 정확성 중요 (실제 작업일 기준)
- Git 태그로 버전 히스토리 관리

---

### 9.3 핵심 교훈

#### 1. 법적 문서는 비즈니스 모델에 맞춰 작성

**잘못된 접근:**
```
❌ 모든 가능한 데이터 수집 항목 나열
❌ 복잡한 동의 절차 (사용자 이탈 증가)
❌ 리타게팅 광고 포함 (불필요)
```

**올바른 접근:**
```
✅ 실제 수집하는 데이터만 명시
✅ 간소화된 쿠키 정책 (필수만)
✅ 비즈니스 모델에 맞는 최소 요구사항
```

---

#### 2. 익명화의 중요성

**익명 정보 = 개인정보 아님**
```
조건:
✅ 재식별 불가능
✅ 그룹 단위 집계 (K-익명성)
✅ 원본 데이터 접근 불가

효과:
- 제3자 제공 동의 불필요
- 법적 리스크 최소화
- 데이터 활용 자유도 증가
```

---

#### 3. Markdown 기반 법적 문서 관리

**장점:**
```
✅ Git으로 버전 관리
✅ 변경 이력 추적 용이
✅ 코드 리뷰 가능
✅ 자동 배포 (push → 즉시 반영)
```

**구조:**
```
PRIVACY.md (원본)
  ↓ 빌드 시
app/privacy/page.tsx (자동 렌더링)
  ↓ 배포 시
/privacy (사용자 접근)
```

---

#### 4. 빌드 에러 즉시 수정

**프로세스:**
```
1. 로컬 빌드 테스트 (npm run build)
2. 에러 발견 및 수정
3. 재빌드 확인
4. 커밋 및 푸시
```

**배운 점:**
- 로컬 테스트 없이 푸시하면 배포 실패
- TypeScript/ESLint 에러 사전 검증
- Next.js 컨벤션 준수 (Link 컴포넌트 등)

---

#### 5. 버전 관리의 일관성

**좋은 버전 관리:**
```
✅ Semantic Versioning 준수
✅ Git 태그 사용
✅ WORK-LOG에 변경 내역 기록
✅ Footer에 버전 표시
✅ 실제 작업 날짜 기준
```

**나쁜 버전 관리:**
```
❌ 임의의 숫자 증가
❌ 변경 내역 미기록
❌ 날짜 불일치
❌ 태그 누락
```

---

### 9.4 실전 팁

#### **법적 문서 작성 체크리스트**

**1단계: 현재 상태 파악**
```
□ 어떤 데이터를 수집하는가?
□ 어디에 저장되는가?
□ 누구와 공유하는가?
□ 얼마나 보관하는가?
```

**2단계: 비즈니스 모델 분석**
```
□ 회원가입이 있는가?
□ 결제가 있는가?
□ 제3자에게 데이터를 제공하는가?
□ 광고를 운영하는가?
```

**3단계: 필요한 문서 선택**
```
□ 개인정보처리방침 (IP 주소 수집 시 필수)
□ 이용약관 (권장)
□ 쿠키 정책 (광고 쿠키 사용 시)
```

**4단계: 간소화**
```
□ 실제로 하는 것만 명시
□ 복잡한 조항 제거
□ 쉬운 언어로 작성
```

---

#### **버전 관리 워크플로우**

```
1. 작업 완료
2. 버전 결정 (MAJOR/MINOR/PATCH)
3. 파일 업데이트
   - Footer 버전 번호
   - WORK-LOG.md 섹션 추가
   - 관련 문서 날짜 수정
4. 빌드 테스트 (npm run build)
5. 커밋
6. Git 태그 생성
   git tag -a v1.x.x -m "메시지"
7. 푸시 (코드 + 태그)
   git push origin master
   git push origin v1.x.x
```

---

### 9.5 타임라인

```
18:00 - 문서 구조 개선 시작
19:00 - 개인정보처리방침 필요성 논의
20:00 - 비즈니스 모델 명확화
21:00 - PRIVACY.md, TERMS.md 작성
22:00 - /privacy, /terms 페이지 구현
23:00 - 빌드 에러 발견 및 수정
23:30 - 버전 v1.1.0 업데이트
24:00 - Git 태그 생성 및 배포 완료
```

**총 소요 시간:** 약 6시간

---

### 9.6 결과물

**파일 변경:**
```
+ PRIVACY.md                    (개인정보처리방침)
+ TERMS.md                      (이용약관)
+ app/privacy/page.tsx          (/privacy 페이지)
+ app/terms/page.tsx            (/terms 페이지)
* components/Footer.tsx         (법적 링크 + v1.1.0)
* AI-VIBE-CODING-TUTORIAL.md    (구조 개선)
* WORK-LOG.md                   (v1.1.0 섹션 추가)
```

**배포 정보:**
- Production: https://ohmyseoul.page
- Version: v1.1.0
- Legal Pages: /privacy, /terms
- Git Tag: v1.1.0

**법적 준비 완료:**
- ✅ 개인정보보호법 준수
- ✅ 정보통신망법 준수
- ✅ 외부 링크 면책
- ✅ 저작권 보호

---

## 10. 개발 도구 활용: Chrome DevTools MCP

### 9.1 MCP(Model Context Protocol)란?

**MCP**: AI가 외부 도구와 소통하는 표준 프로토콜
- Anthropic이 개발한 오픈 소스 프로토콜
- AI가 브라우저, 데이터베이스, API 등과 직접 상호작용

**예시:**
```
사용자: "localhost:3000 화면 캡처해서 문제 찾아줘"
AI (MCP 사용): [Chrome DevTools 연결]
                [스크린샷 캡처]
                [HTML/CSS 분석]
                → "ProgressBar 컴포넌트가 렌더링 안 되고 있습니다"
```

### 9.2 Chrome DevTools MCP 설정

**설치:**
```bash
# Claude Code CLI 설정
git clone https://github.com/ChromeDevTools/chrome-devtools-mcp
cd chrome-devtools-mcp
npm install
npm run build
```

**설정 파일 (.clauderc):**
```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "node",
      "args": ["/path/to/chrome-devtools-mcp/build/index.js"]
    }
  }
}
```

### 9.3 실제 활용 사례 (Oh my Seoul 프로젝트)

**시나리오 1: 화면이 안 나올 때**

**Before (MCP 없이):**
```
사용자: "화면이 안 나와"
AI: "브라우저 콘솔 에러 메시지 복사해서 보내주세요"
사용자: [스크린샷 캡처 → 업로드]
AI: "에러를 보니..."
```

**After (MCP 사용):**
```
사용자: "localhost:3000 확인해줘"
AI (MCP): [Chrome 자동 연결]
          [콘솔 에러 자동 수집]
          "404 Not Found: /[locale] 라우팅 문제입니다.
           middleware.ts가 없어서 발생했습니다."
```

**시나리오 2: 스타일 깨질 때**

**Before:**
```
사용자: "버튼 색이 안 나와"
AI: "app/globals.css 파일 내용 보여주세요"
사용자: [파일 복사 → 붙여넣기]
AI: "이 부분이 문제입니다..."
```

**After (MCP):**
```
사용자: "버튼 스타일 확인해줘"
AI (MCP): [Elements 탭 자동 분석]
          [Computed styles 확인]
          "bg-mint-primary 클래스가 CSS에 없습니다.
           Tailwind v4는 Arbitrary values를 사용해야 합니다.
           bg-[#37BEB0]로 변경하세요."
```

**시나리오 3: 성능 분석**

```
사용자: "페이지 로딩 느린데 확인해줘"
AI (MCP): [Network 탭 분석]
          [Performance 프로파일링]
          "이미지 최적화 필요:
           - trendsetter.png (1.2MB) → WebP로 변환하면 300KB
           - 총 7개 이미지 최적화 시 5MB → 1.5MB 예상"
```

### 9.4 MCP의 장단점

**✅ 장점:**
- **실시간 디버깅**: 화면 캡처 → 분석 자동화
- **컨텍스트 유지**: AI가 브라우저 상태를 직접 확인
- **빠른 반복**: 수정 → 새로고침 → 확인을 AI가 자동 수행

**❌ 단점:**
- 설정 복잡 (초보자에게 어려움)
- 브라우저 권한 필요
- 아직 실험 단계 (2024년 말 기준)

### 9.5 Oh my Seoul 프로젝트에서 MCP 없이 해결한 방법

**우리가 사용한 방법:**
1. **콘솔 로그 적극 활용**
```typescript
console.log('Calculated type:', travelerType);
console.log('Scores:', scores);
```

2. **명확한 에러 메시지 복사**
```
Error: Route '/result/[type]' used `params.type`.
`params` should be awaited before using its properties.
```

3. **스크린샷 공유**
- 개발자 도구 스크린샷 캡처
- Claude에게 업로드

**교훈:** MCP가 없어도 충분히 개발 가능
- 초보자는 기본 디버깅 방법 먼저 익히는 것이 중요
- MCP는 고급 기능 (선택사항)

---

## 11. 배운 점과 교훈

### 11.1 AI 바이브 코딩 Best Practices

**1. 명확한 요구사항 전달**
```
❌ "퀴즈 앱 만들어줘"
✅ "8개 질문, 7개 타입, 한/영 2개 언어, Instagram 공유, Next.js + Tailwind"
```

**2. 문서 기반 소통**
```
❌ "저번에 말한 대로 해줘"
✅ "PROJECT-PLAN.md 보고 Phase 3 시작하자"
```

**3. 단계별 검증**
```
Phase 작성 → Git 커밋 → 테스트 → 다음 Phase
(한 번에 모든 Phase 작성하면 버그 발견 어려움)
```

**4. AI의 과도함 제어**
```
AI는 기본적으로 "상세"를 선호 → 문서 과다 생성
인간이 "필요한 것만"이라고 제한해야 함
```

**5. 실제 테스트 필수**
```
AI 작성 코드 → 로컬 테스트 → 버그 발견 → 수정
(테스트 없이는 숨겨진 버그 발견 불가)
```

### 11.2 프로젝트 관리 교훈

**1. 문서 최소화 원칙 (Single Source of Truth)**
```
✅ CLAUDE.md (문서 가이드)
✅ PROJECT-PLAN.md (실행 계획)
✅ oh-my-seoul-design-system.md (디자인 토큰)
❌ PHASE-0-GUIDE.md (중복 - 삭제)
❌ SELECTED-QUESTIONS.md (중복 - 삭제)
```

**2. MVP 범위 명확화**
```
비즈니스 목표 → 필수 기능 선별 → 나머지는 Phase 2로
(완벽한 제품보다 빠른 출시)
```

**3. 의존성 기반 계획**
```
타임라인 (Week 1-2) → ❌ 1인 개발은 일정 예측 불가
Phase (0 → 1 → 2 → 3) → ✅ 의존성 명확
```

**4. Git 커밋으로 진행 상황 추적**
```bash
git log --oneline
ae414b3 - docs: 프로젝트 초기 설정 완료 #phase0
632af47 - feat: MVP 데이터 구조 완성 #phase3
9e1f89f - chore: 소문자 폴더로 이관
```

### 11.3 기술 결정 교훈

**1. 최신 기술 채택의 위험**
- Next.js 15 (2024년 출시) → async params 에러
- Tailwind v4 (2024년 말 출시) → 커스텀 컬러 설정 변경

**대응:**
- Breaking Changes 문서 읽기
- 커뮤니티 활발한 기술 선택
- 에러 메시지 Google 검색

**2. TypeScript 타입 안전의 한계**
```typescript
// 컴파일 타임 ✅
scores: { trendy: 3 }  // 타입 에러 없음

// 런타임 ❌
// 'trendy' 타입 ID가 실제로 존재하지 않음 → 버그
```

**교훈:** 타입 정의와 실제 데이터의 일관성은 테스트로만 검증 가능

**3. 프로토타이핑 우선, 최적화는 나중에**
```
Phase 0 (AI 일러스트) 대기 → ❌ 막힘
더미 데이터로 진행 → ✅ 빠른 개발
```

### 11.4 디버깅 전략

**1. 서버 로그 먼저 확인**
```bash
npm run dev
# Next.js 개발 서버 로그에 모든 에러 표시
```

**2. 콘솔 로그 적극 활용**
```typescript
console.log('Answers:', answers);
console.log('Calculated type:', travelerType);
```

**3. try-catch로 에러 잡기**
```typescript
try {
  const result = calculateTravelerType(answers);
  router.push(`/result/${result}`);
} catch (error) {
  console.error('Error:', error);
  alert('결과 계산 중 오류가 발생했습니다.');
}
```

**4. 브라우저 개발자 도구 활용**
- Elements 탭: HTML/CSS 확인
- Console 탭: 에러 메시지
- Network 탭: API 요청 확인

### 11.5 AI와 협업 시 시행착오

**실수 1: 과도한 문서 생성**
```
AI: [PHASE-0-GUIDE.md, SELECTED-QUESTIONS.md 생성]
사용자: "문서 많이 만들지 마"
AI: [삭제] ✅
```

**실수 2: CLAUDE.md 중복 콘텐츠**
```
AI: [8개 질문 리스트, Phase 설명 포함]
사용자: "다른 문서에 있는 것을 왜 넣어?"
AI: [최소화] ✅
```

**실수 3: LOG.md 업데이트 누락**
```
사용자: "log 파일 잘 업데이트하고 있지?"
AI: "아니요, 재생성하겠습니다" ✅
```

**실수 4: 스코어 키 불일치**
```
AI: scores: { trendy: 3 }  (잘못된 키)
테스트: [모든 결과가 balanced-explorer]
수정: scores: { trendsetter: 3 }  ✅
```

**교훈:**
- AI도 실수함 (완벽하지 않음)
- 인간의 검토와 피드백 필수
- 반복적 개선이 핵심

---

## 12. 다음 단계

### 12.1 Oh my Seoul 프로젝트 완성하기

**현재 상태 (2025-10-21 종료 시점):**
- ✅ Phase 0.1 완료 (데이터 구조)
- ✅ Phase 1 완료 (Next.js 15 프로젝트)
- ✅ Phase 2 완료 (UI 컴포넌트)
- ✅ Phase 3 완료 (퀴즈 플로우)
- ⏭️ Phase 4 대기 (바이럴 기능)
- ⏭️ Phase 7 대기 (Vercel 배포)

**즉시 가능한 작업:**

**1. Phase 4 - 바이럴 기능**
```typescript
// lib/generate-share-image.ts
export function generateShareImage(type: TravelerType): Blob {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;   // Instagram story
  canvas.height = 1920;

  const ctx = canvas.getContext('2d')!;

  // 배경 그라디언트
  // 타입 일러스트
  // 타입 이름
  // "Oh my Seoul" 로고
  // QR 코드 (결과 페이지 링크)

  return canvas.toBlob(blob => blob!);
}
```

**2. Phase 7 - Vercel 배포**
```bash
git push origin main
# Vercel GitHub 연동
# 자동 배포 완료
# https://oh-my-seoul.vercel.app
```

**3. Phase 0.2 - AI 일러스트**
```
Midjourney 프롬프트:
"Seoul Trendsetter - modern Korean traveler,
 mint green and gold color palette,
 minimalist illustration, vector art,
 --ar 1:1 --v 6"

7개 타입 × 2-3개 생성 → 최적 선택
```

### 12.2 AI 바이브 코딩 실력 향상

**1. 작은 프로젝트부터 시작**
- Todo 앱 (Next.js + Tailwind)
- 날씨 앱 (API 연동)
- 포트폴리오 사이트

**2. AI와 대화 연습**
```
❌ "에러 났어"
✅ "Next.js에서 'params should be awaited' 에러가 나는데,
    Next.js 15 Breaking Changes 때문인가?"
```

**3. 문서 작성 습관**
- README.md (프로젝트 소개)
- PROJECT-PLAN.md (실행 계획)
- CLAUDE.md (AI 가이드)

**4. Git 커밋 메시지**
```bash
# ✅ 좋은 예
git commit -m "feat: Instagram 공유 이미지 생성 기능 추가

- Canvas API로 1080x1920 이미지 생성
- 타입별 배경 그라디언트 적용
- QR 코드 추가

#phase4 #viral"

# ❌ 나쁜 예
git commit -m "update"
```

**5. 커뮤니티 활용**
- Stack Overflow (기술 질문)
- Discord (Next.js, Tailwind 커뮤니티)
- GitHub (오픈소스 코드 읽기)

### 12.3 추천 학습 자료

**Next.js**
- 공식 문서: https://nextjs.org/docs
- Learn Next.js: https://nextjs.org/learn
- Vercel 유튜브: https://www.youtube.com/@Vercel

**Tailwind CSS**
- 공식 문서: https://tailwindcss.com/docs
- Tailwind Labs 유튜브
- shadcn/ui: https://ui.shadcn.com

**AI 바이브 코딩**
- Claude Code 문서: https://docs.claude.com/claude-code
- Cursor 튜토리얼
- GitHub Copilot 가이드

**TypeScript**
- TypeScript Handbook: https://www.typescriptlang.org/docs
- Total TypeScript (Matt Pocock)

### 12.4 실전 프로젝트 아이디어

**1. 포트폴리오 사이트**
- Next.js 15 + Tailwind
- MDX로 블로그 (Markdown + React)
- Vercel 배포

**2. 로컬 비즈니스 웹사이트**
- 카페, 레스토랑 소개
- 메뉴, 위치, 영업시간
- Kakao Map API 연동

**3. SaaS 랜딩 페이지**
- Framer Motion 애니메이션
- 이메일 뉴스레터 (Resend API)
- Stripe 결제 연동 (나중에)

**4. 간단한 대시보드**
- Supabase 데이터베이스
- Chart.js 그래프
- 관리자 인증 (NextAuth.js)

---

## 부록: 프로젝트 파일 구조

### 최종 폴더 구조 (Phase 3 완료 시점)

```
oh-my-seoul/
├── app/
│   ├── globals.css                    # 디자인 시스템 적용
│   ├── layout.tsx                     # QuizProvider 포함
│   ├── page.tsx                       # 랜딩 페이지
│   ├── quiz/
│   │   └── page.tsx                   # 퀴즈 페이지
│   └── result/
│       └── [type]/
│           ├── page.tsx               # Server Component
│           └── ResultClient.tsx       # Client Component
│
├── components/
│   ├── quiz/
│   │   ├── QuestionCard.tsx
│   │   ├── OptionButton.tsx
│   │   └── ProgressBar.tsx
│   ├── result/
│   │   ├── TravelerTypeBadge.tsx
│   │   ├── CourseCard.tsx
│   │   └── ShareButtons.tsx
│   ├── shared/
│   │   ├── Button.tsx
│   │   ├── Loading.tsx
│   │   └── LanguageToggle.tsx
│   └── ui/                            # shadcn 컴포넌트
│       ├── button.tsx
│       ├── card.tsx
│       ├── progress.tsx
│       └── badge.tsx
│
├── lib/
│   ├── quiz-context.tsx               # 퀴즈 상태 관리
│   ├── scoring.ts                     # 스코어링 알고리즘
│   └── utils.ts                       # cn 함수
│
├── data/
│   ├── questions.ts                   # 8개 질문
│   ├── types.ts                       # 7가지 타입
│   └── courses.ts                     # 21개 추천 코스
│
├── public/
│   └── images/
│       ├── types/                     # AI 일러스트 (예정)
│       └── og/                        # OG 이미지 (예정)
│
├── CLAUDE.md                          # 문서 가이드
├── PROJECT-PLAN.md                    # Phase 0~7 계획
├── oh-my-seoul-design-system.md       # 디자인 토큰
├── LOG.md                             # 작업 로그
├── AI-VIBE-CODING-TUTORIAL.md         # 이 문서
│
├── package.json
├── tsconfig.json
├── components.json                    # shadcn 설정
├── .gitignore
└── README.md
```

---

## 맺음말

이 튜토리얼은 **실제 프로젝트 개발 과정을 있는 그대로** 기록했습니다.

**우리가 경험한 것:**
- ✅ AI의 놀라운 생산성
- ✅ 실수와 시행착오
- ✅ 반복적 개선의 중요성
- ✅ 테스트의 필수성

**AI 바이브 코딩은:**
- 완벽한 도구가 아닙니다
- 하지만 **개발 속도를 3배 향상**시킵니다
- **초보자도 프로 수준의 결과물**을 만들 수 있습니다

**다음 프로젝트는 여러분 차례입니다.**

Good luck! 🚀

---

**문서 작성:** Claude (Sonnet 4.5) + 사용자 (mokka)
**작성일:** 2025-10-21
**버전:** 1.0
**라이선스:** MIT

**연락처:**
- GitHub: [@mokkachef](https://github.com/mokkachef)
- Email: mokkachef@thenines.io
- Project: https://github.com/mokkachef/oh-my-seoul
