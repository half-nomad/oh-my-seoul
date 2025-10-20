# Oh my Seoul - Design System
## 🎨 완성형 디자인 시스템

**프로젝트**: Oh my Seoul - Interactive Travel Quiz
**콘셉트**: Modern Hanbok Meets Pop Culture
**타겟**: 해외 M-Z세대 여행자 (일본, 대만, 태국, 베트남, 인도, 중국)
**작성일**: 2025-10-20

---

## 1. 🌈 Color System (색상 시스템)

### Primary Colors (주요 색상)
```css
/* Mint Family - 브랜드 아이덴티티 */
--mint-primary: #37BEB0;      /* 메인 민트 - CTA, 강조 */
--mint-light: #A4E5E0;        /* 라이트 민트 - 배경, 호버 */
--mint-pale: #E8F7F5;         /* 페일 민트 - 섹션 배경 */
--mint-dark: #2C9B8F;         /* 다크 민트 - 액티브 상태 */
```

### Accent Colors (강조 색상)
```css
/* Korean Traditional + Modern */
--gold-warm: #C6B170;         /* 한복 금색 - 프리미엄 요소 */
--blue-midnight: #2C6170;     /* 미드나이트 블루 - 깊이감 */
--coral-vibrant: #FF6B6B;     /* 비비드 코랄 - 경고/강조 */
--purple-soft: #9B85FF;       /* 소프트 퍼플 - 서브 강조 */
```

### Neutral Colors (중립 색상)
```css
/* 텍스트 & 배경 */
--text-dark: #1A3940;         /* 메인 텍스트 */
--text-medium: #567882;       /* 서브 텍스트 */
--text-light: #8FA3AB;        /* 보조 텍스트 */
--bg-white: #FFFFFF;          /* 메인 배경 */
--bg-ivory: #F9FBFB;          /* 섹션 배경 */
--border-light: #D4E3E8;      /* 테두리 */
```

### Semantic Colors (의미론적 색상)
```css
--success: #4CAF50;           /* 성공 */
--warning: #FFA726;           /* 경고 */
--error: #EF5350;             /* 에러 */
--info: #29B6F6;              /* 정보 */
```

### Traveler Type Colors (여행자 타입별 색상)
```css
--type-trendsetter: #37BEB0;  /* 트렌드세터 */
--type-heritage: #2C6170;     /* 전통 탐험가 */
--type-foodie: #C6B170;       /* 푸디 */
--type-kculture: #9B85FF;     /* K-컬처 팬 */
--type-nature: #7CB342;       /* 자연 애호가 */
--type-social: #FF6B6B;       /* 소셜 버터플라이 */
--type-balanced: #A4E5E0;     /* 균형잡힌 탐험가 */
```

---

## 2. 📝 Typography (타이포그래피)

### Font Families
```css
/* Korean + Latin */
--font-primary: 'Pretendard Variable', -apple-system, sans-serif;

/* English Accent (제목용) */
--font-accent: 'Space Grotesk', 'Pretendard Variable', sans-serif;

/* Monospace (코드, 숫자) */
--font-mono: 'JetBrains Mono', monospace;
```

### Font Sizes (rem 단위)
```css
/* Display - 대형 제목 */
--text-display: 3.5rem;       /* 56px */
--text-display-mobile: 2.5rem; /* 40px */

/* Heading - 제목 계층 */
--text-h1: 2.5rem;            /* 40px */
--text-h2: 2rem;              /* 32px */
--text-h3: 1.5rem;            /* 24px */
--text-h4: 1.25rem;           /* 20px */

/* Body - 본문 */
--text-body-lg: 1.125rem;     /* 18px */
--text-body: 1rem;            /* 16px */
--text-body-sm: 0.875rem;     /* 14px */

/* Utility - 작은 텍스트 */
--text-caption: 0.75rem;      /* 12px */
--text-overline: 0.625rem;    /* 10px */
```

### Font Weights
```css
--weight-light: 300;
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
--weight-black: 900;
```

### Line Heights
```css
--leading-tight: 1.2;         /* 제목용 */
--leading-snug: 1.4;          /* 짧은 문장 */
--leading-normal: 1.6;        /* 본문 */
--leading-relaxed: 1.8;       /* 긴 본문 */
```

### Letter Spacing
```css
--tracking-tighter: -0.03em;  /* 큰 제목 */
--tracking-tight: -0.01em;    /* 일반 제목 */
--tracking-normal: 0;         /* 본문 */
--tracking-wide: 0.025em;     /* 버튼, 라벨 */
--tracking-wider: 0.05em;     /* UPPERCASE */
```

---

## 3. 📏 Spacing System (간격 시스템)

### Space Scale (4px 기준)
```css
--space-0: 0;
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.5rem;     /* 24px */
--space-6: 2rem;       /* 32px */
--space-7: 2.5rem;     /* 40px */
--space-8: 3rem;       /* 48px */
--space-10: 4rem;      /* 64px */
--space-12: 6rem;      /* 96px */
--space-16: 8rem;      /* 128px */
```

### Layout Spacing (화면 레이아웃)
```css
--container-max: 1280px;      /* 최대 컨텐츠 너비 */
--section-gap: 5rem;          /* 섹션 간격 (80px) */
--section-gap-mobile: 3rem;   /* 모바일 섹션 (48px) */
```

---

## 4. 🔲 Border & Radius (테두리 & 둥근 모서리)

### Border Width
```css
--border-thin: 1px;
--border-normal: 2px;
--border-thick: 4px;
```

### Border Radius
```css
--radius-none: 0;
--radius-sm: 0.375rem;        /* 6px - 작은 요소 */
--radius-md: 0.5rem;          /* 8px - 버튼, 입력 */
--radius-lg: 1rem;            /* 16px - 카드 */
--radius-xl: 1.5rem;          /* 24px - 큰 카드 */
--radius-2xl: 2rem;           /* 32px - 특별한 요소 */
--radius-full: 9999px;        /* 완전한 원형 */
```

---

## 5. 🎭 Shadow System (그림자)

```css
/* Elevation - 높이감 표현 */
--shadow-sm: 0 1px 2px rgba(26, 57, 64, 0.08);
--shadow-md: 0 4px 8px rgba(26, 57, 64, 0.12);
--shadow-lg: 0 8px 16px rgba(26, 57, 64, 0.16);
--shadow-xl: 0 16px 32px rgba(26, 57, 64, 0.20);
--shadow-2xl: 0 24px 48px rgba(26, 57, 64, 0.24);

/* Colored Shadows - 특별한 요소용 */
--shadow-mint: 0 8px 24px rgba(55, 190, 176, 0.25);
--shadow-gold: 0 8px 24px rgba(198, 177, 112, 0.25);
--shadow-purple: 0 8px 24px rgba(155, 133, 255, 0.25);
```

---

## 6. ✨ Animation & Transitions (애니메이션)

### Timing Functions
```css
--ease-linear: cubic-bezier(0, 0, 1, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
```

### Duration
```css
--duration-fast: 150ms;       /* 빠른 호버 */
--duration-normal: 250ms;     /* 일반 전환 */
--duration-slow: 400ms;       /* 부드러운 전환 */
--duration-slower: 600ms;     /* 화면 전환 */
```

### Animation Principles
1. **마이크로 인터랙션**: 모든 버튼, 링크에 호버 피드백
2. **페이지 전환**: 스무스한 fade-in + slide-up 조합
3. **로딩 상태**: Shimmer 효과 + 스피너
4. **결과 공개**: Reveal 애니메이션 (카드 플립 또는 fade-up)

---

## 7. 🧩 Component Styles (컴포넌트 스타일)

### Button Variants

#### Primary Button
```css
.btn-primary {
  background: var(--mint-primary);
  color: white;
  padding: 0.875rem 2rem;
  border-radius: var(--radius-md);
  font-weight: var(--weight-semibold);
  font-size: var(--text-body);
  letter-spacing: var(--tracking-wide);
  box-shadow: var(--shadow-mint);
  transition: all var(--duration-normal) var(--ease-out);
}

.btn-primary:hover {
  background: var(--mint-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-primary:active {
  transform: translateY(0);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: white;
  color: var(--mint-primary);
  border: 2px solid var(--mint-primary);
  padding: 0.875rem 2rem;
  border-radius: var(--radius-md);
  font-weight: var(--weight-semibold);
  transition: all var(--duration-normal) var(--ease-out);
}

.btn-secondary:hover {
  background: var(--mint-pale);
  border-color: var(--mint-dark);
}
```

#### Ghost Button
```css
.btn-ghost {
  background: transparent;
  color: var(--text-medium);
  padding: 0.875rem 2rem;
  border-radius: var(--radius-md);
  font-weight: var(--weight-medium);
  transition: all var(--duration-normal) var(--ease-out);
}

.btn-ghost:hover {
  background: var(--bg-ivory);
  color: var(--text-dark);
}
```

### Card Components

#### Question Card
```css
.question-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-light);
  transition: all var(--duration-slow) var(--ease-smooth);
}

.question-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}
```

#### Result Card
```css
.result-card {
  background: linear-gradient(135deg, var(--mint-pale) 0%, white 100%);
  border-radius: var(--radius-2xl);
  padding: var(--space-10);
  box-shadow: var(--shadow-xl);
  border: 2px solid var(--mint-light);
}
```

### Input Fields

#### Text Input
```css
.input-field {
  background: white;
  border: 2px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 0.875rem 1.25rem;
  font-size: var(--text-body);
  color: var(--text-dark);
  transition: all var(--duration-normal) var(--ease-out);
}

.input-field:focus {
  outline: none;
  border-color: var(--mint-primary);
  box-shadow: 0 0 0 4px rgba(55, 190, 176, 0.1);
}
```

### Progress Bar
```css
.progress-bar {
  height: 8px;
  background: var(--mint-pale);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--mint-primary), var(--mint-light));
  border-radius: var(--radius-full);
  transition: width var(--duration-slow) var(--ease-smooth);
}
```

---

## 8. 🖼️ Layout Patterns (레이아웃 패턴)

### Container
```css
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-4);
  }
}
```

### Grid System
```css
.grid-2col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.grid-3col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

@media (max-width: 768px) {
  .grid-2col,
  .grid-3col {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
```

---

## 9. 🎨 Decorative Elements (장식 요소)

### Korean Pattern Background
```css
.korean-pattern {
  background-image: url('data:image/svg+xml,...');
  background-size: 80px 80px;
  opacity: 0.05;
}
```

### Gradient Overlays
```css
.gradient-mint {
  background: linear-gradient(135deg, 
    var(--mint-light) 0%, 
    var(--mint-primary) 100%);
}

.gradient-gold {
  background: linear-gradient(135deg, 
    var(--gold-warm) 0%, 
    var(--mint-primary) 100%);
}

.gradient-midnight {
  background: linear-gradient(135deg, 
    var(--blue-midnight) 0%, 
    var(--mint-dark) 100%);
}
```

---

## 10. 📱 Responsive Breakpoints (반응형 중단점)

```css
--breakpoint-sm: 640px;       /* 모바일 */
--breakpoint-md: 768px;       /* 태블릿 */
--breakpoint-lg: 1024px;      /* 데스크탑 */
--breakpoint-xl: 1280px;      /* 큰 데스크탑 */
--breakpoint-2xl: 1536px;     /* 초대형 화면 */
```

---

## 11. ♿ Accessibility Guidelines (접근성 가이드)

### Color Contrast
- 모든 텍스트는 WCAG AA 기준 이상 (4.5:1)
- 중요 버튼은 WCAG AAA 기준 (7:1)

### Focus States
```css
*:focus-visible {
  outline: 3px solid var(--mint-primary);
  outline-offset: 2px;
}
```

### Interactive Element Sizes
- 최소 터치 영역: 44px × 44px
- 버튼 간 최소 간격: 8px

---

## 12. 🎯 Usage Examples (사용 예시)

### 스플래시 화면
```html
<div class="splash-screen">
  <h1 class="text-display gradient-text">Oh my Seoul</h1>
  <p class="text-body-lg text-medium">당신만의 서울 이야기를 찾아보세요</p>
  <button class="btn-primary">시작하기</button>
</div>
```

### 질문 화면
```html
<div class="question-card">
  <div class="progress-bar">
    <div class="progress-fill" style="width: 40%"></div>
  </div>
  <h2 class="text-h2">첫 서울 방문, 어디로 갈까요?</h2>
  <div class="options-grid">
    <button class="option-card">...</button>
  </div>
</div>
```

### 결과 화면
```html
<div class="result-card">
  <div class="result-icon">🎨</div>
  <h2 class="text-h1">Seoul Trendsetter</h2>
  <p class="text-body-lg">서울 트렌드세터</p>
  <button class="btn-primary">결과 공유하기</button>
</div>
```

---

## 📦 Next Steps (다음 단계)

1. **Tailwind Config 파일 생성** → 이 디자인 토큰들을 Tailwind에 통합
2. **컴포넌트 라이브러리 구축** → 재사용 가능한 React 컴포넌트
3. **Figma 디자인 파일** (선택) → UI 미리보기용

---

## 🔗 Quick Reference (빠른 참조)

**주요 색상**:
- Primary: `#37BEB0`
- Light: `#A4E5E0`
- Gold: `#C6B170`

**주요 폰트**:
- Display: 3.5rem / Bold
- H1: 2.5rem / Bold
- Body: 1rem / Regular

**간격**:
- 작음: 0.5rem (8px)
- 중간: 1rem (16px)
- 큼: 2rem (32px)

**애니메이션**:
- 빠름: 150ms
- 보통: 250ms
- 느림: 400ms
