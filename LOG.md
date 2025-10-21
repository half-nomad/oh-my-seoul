# Oh my Seoul - 작업 로그

## 2025-10-21

### ✅ Phase 0.1 완료 (콘텐츠 확정)
- 20개 질문 중 MVP용 8개 선별
  * Profile: 1문 (여행 목적)
  * Food: 2문 (음식 경험, 카페 분위기)
  * Activity: 2문 (이상적 활동, 꿈의 경험)
  * Vibe: 1문 (선호 분위기)
  * K-Culture: 2문 (K-컬처 지식, 촬영지)
- 스코어링 가중치 조정 완료
- 타입별 추천 코스 21개 작성 (더미 데이터)

**산출물:**
- `data/questions.ts` (8개 질문, 한/영)
- `data/types.ts` (7가지 타입 정의)
- `data/courses.ts` (21개 코스)

### ✅ Phase 1 완료 (프로젝트 기반 구축)

#### Phase 1.1 - Next.js 프로젝트 생성
- Next.js 15 + TypeScript + Tailwind v4
- 폴더명 소문자로 변경: `OhmySeoul` → `oh-my-seoul`
- 패키지 설치:
  * framer-motion (애니메이션)
  * next-intl (다국어)
  * lucide-react (아이콘)
- shadcn/ui 초기화 완료

#### Phase 1.2 - 폴더 구조 생성
```
oh-my-seoul/
├── components/
│   ├── quiz/
│   ├── result/
│   ├── shared/
│   └── ui/
├── lib/
├── public/images/
│   ├── types/
│   └── og/
└── messages/
```

#### Phase 1.3 - 디자인 시스템 적용
- `app/globals.css`에 Oh my Seoul 색상 토큰 적용
  * Mint Primary: #37BEB0
  * Gold Warm: #C6B170
  * Blue Midnight: #2C6170
  * Coral Vibrant: #FF6B6B
  * Purple Soft: #9B85FF
- shadcn/ui 기본 컬러 매핑 완료

**Git 커밋:**
- `ae414b3` - docs: Oh my Seoul 프로젝트 초기 설정 완료
- `632af47` - feat: MVP 데이터 구조 완성 (Phase 0.1 + Phase 3.1)
- `9e1f89f` - chore: 소문자 폴더로 프로젝트 이관
- `f4ab5fa` - feat: Phase 1 완료 - Next.js 15 프로젝트 기반 구축

---

### ✅ Phase 2 완료 (UI 컴포넌트)

#### Phase 2.1 - shadcn/ui 기본 컴포넌트 설치
- button, card, progress, badge 컴포넌트 설치
- `components/ui/` 폴더에 4개 파일 생성

#### Phase 2.2 - 공통 컴포넌트 제작
- `components/shared/Button.tsx`
  • shadcn Button 래퍼
  • mint 컬러 기본 스타일 적용
- `components/shared/Loading.tsx`
  • Framer Motion 로딩 애니메이션
  • 메시지 로테이션 (3개 문구)
  • Loader2 아이콘 회전 효과
- `components/shared/LanguageToggle.tsx`
  • 한/영 전환 버튼
  • Globe 아이콘 + 현재 언어 표시

**Git 커밋:**
- `86bb232` - feat: Phase 2 완료 - UI 컴포넌트 구축

---

### ✅ Phase 3 완료 (퀴즈 플로우 구현)

#### Phase 3.1 - 상태 관리 & 스코어링
- `lib/quiz-context.tsx`
  • React Context로 퀴즈 상태 관리
  • currentStep, answers, isComplete 상태
  • selectAnswer, nextQuestion, previousQuestion 액션
  • getTravelerType, getProgress 헬퍼 함수
- `lib/scoring.ts`
  • 스코어링 알고리즘 구현
  • 8개 질문 답변 기반 타입 계산
  • 동점 시 우선순위 로직 (tie-breaking)

#### Phase 3.2 - 랜딩 페이지
- `app/[locale]/page.tsx`
  • Framer Motion 애니메이션
  • "테스트 시작하기" CTA 버튼
  • MapPin, Sparkles 아이콘
  • 그라디언트 배경

#### Phase 3.3 - 퀴즈 컴포넌트
- `components/quiz/ProgressBar.tsx`
  • shadcn Progress 사용
  • "질문 3/8" + 진행률 표시
- `components/quiz/QuestionCard.tsx`
  • 카테고리 뱃지 (food, vibe, kculture 등)
  • 질문 텍스트 (한/영)
- `components/quiz/OptionButton.tsx`
  • 선택 시 체크 아이콘 애니메이션
  • Framer Motion 호버/탭 효과

#### Phase 3.4 - 퀴즈 페이지
- `app/[locale]/quiz/page.tsx`
  • 8개 질문 순차 진행
  • 이전/다음 네비게이션
  • 마지막 질문 → 로딩 → 결과 이동
  • AnimatePresence 페이지 전환

#### Phase 3.5 - 결과 컴포넌트
- `components/result/TravelerTypeBadge.tsx`
  • 타입 일러스트 (임시 이모지)
  • 타입명, 한글 별명, 설명
  • 타입별 컬러 테마
- `components/result/CourseCard.tsx`
  • 추천 코스 3개 표시
  • 번호, 장소명, 주소, 설명

#### Phase 3.6 - 결과 페이지
- `app/[locale]/result/[type]/page.tsx`
  • 동적 라우팅 (/result/trendsetter 등)
  • 타입 뱃지 + 추천 코스
  • "결과 공유하기", "다시 테스트하기" 버튼

#### Phase 3.7 - 레이아웃 설정
- `app/[locale]/layout.tsx`
  • QuizProvider 래퍼 추가
  • 전역 상태 관리 활성화

**Git 커밋:**
- `86eb1f9` - feat: Phase 3 완료 - 퀴즈 플로우 구현

---

---

### ✅ Phase 3 로컬 테스트 & 버그 수정 (2025-10-21 저녁)

#### 이슈 1: 라우팅 구조 문제
- **문제:** `app/[locale]/` 구조로 되어있었으나 middleware 없어 작동 안함
- **해결:** 루트 레벨로 구조 변경
  * `app/page.tsx` - 랜딩 페이지
  * `app/quiz/page.tsx` - 퀴즈
  * `app/result/[type]/page.tsx` - 결과
  * `app/layout.tsx`에 QuizProvider 추가

#### 이슈 2: 스코어링 버그 (치명적)
- **문제:** 질문 스코어 키(`trendy`, `traditional`)와 타입 ID(`trendsetter`, `heritage-explorer`)가 불일치
- **원인:** 스코어가 타입에 매핑되지 않아 항상 fallback 타입만 반환
- **해결:** `data/questions.ts` 전체 수정
  * 모든 스코어 키를 실제 타입 ID로 변경
  * 예: `trendy: 3` → `trendsetter: 3`
  * 예: `traditional: 3` → `'heritage-explorer': 3`

#### 이슈 3: Tailwind v4 커스텀 컬러 미작동
- **문제:** `bg-mint-primary` 등 커스텀 컬러 클래스 작동 안함
- **원인:** Tailwind v4의 새로운 설정 방식
- **해결:** Hex 값으로 직접 사용
  * `bg-mint-primary` → `bg-[#37BEB0]`
  * `text-mint-primary` → `text-[#37BEB0]`
  * 모든 컴포넌트에 적용 (OptionButton, Button 등)

#### 이슈 4: Next.js 15 async params 에러
- **문제:** 결과 페이지 무한 로딩, `params.type` 접근 시 에러
- **원인:** Next.js 15에서 동적 라우트 params가 Promise로 변경됨
- **해결:** Server/Client 컴포넌트 분리
  * `app/result/[type]/page.tsx` - Server Component (async)
  * `app/result/[type]/ResultClient.tsx` - Client Component (useRouter 사용)
  * `params`를 `await`로 처리: `const { type } = await params;`

#### 테스트 결과
- ✅ 랜딩 → 퀴즈 (8문) → 로딩 (2.5초) → 결과 플로우 완벽 작동
- ✅ 스코어링 알고리즘 정상 작동 (Nature Seeker 타입 확인)
- ✅ 추천 코스 3개 정상 표시
- ✅ 모든 네비게이션 버튼 작동
- ✅ Framer Motion 애니메이션 정상

**Git 커밋:**
- (예정) `fix: Phase 3 테스트 및 주요 버그 수정`

---

## 🔄 현재 상태

**완료:** Phase 0.1, Phase 1, Phase 2, Phase 3 (테스트 완료)

**대기 중:**
- Phase 0.2 - AI 일러스트 7개 생성 (외부 작업)
- Phase 0.3 - 영어 번역 (보류)

**다음 단계:** Phase 4 (바이럴 기능) 또는 Phase 7 (Vercel 배포)

---

## 📝 메모

- MVP는 한국어만 먼저 진행 (영어는 Phase 5)
- AI 일러스트는 더미 이미지로 대체 중 (이모지)
- 로컬 테스트 완료, 프로덕션 준비 가능
