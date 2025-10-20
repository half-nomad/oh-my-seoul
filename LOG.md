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

## 🔄 현재 상태

**완료:** Phase 0.1, Phase 1, Phase 2, Phase 3

**대기 중:**
- Phase 0.2 - AI 일러스트 7개 생성 (외부 작업 진행 중)
- Phase 0.3 - 영어 번역 (나중에)

**다음 단계:** 테스트 실행 또는 Phase 4 (바이럴 기능)

---

## 📝 메모

- 기존 `OhmySeoul` 폴더는 폐기 가능
- MVP는 한국어만 먼저 진행 (영어는 나중에)
- AI 일러스트는 더미 이미지로 대체 후 개발 진행
