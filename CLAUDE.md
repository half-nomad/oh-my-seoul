# Oh my Seoul - Claude AI 작업 가이드

> 이 프로젝트 작업 시 참고할 문서와 핵심 정보만 기록

---

## 📁 프로젝트 문서 (3개만 유지)

```
OhmySeoul/
├── CLAUDE.md                    # 이 파일 - 문서 가이드
├── PROJECT-PLAN.md              # 개발 실행 계획 (Phase 0~7)
└── oh-my-seoul-design-system.md # 디자인 토큰
```

---

## 📋 각 문서 목적

### **CLAUDE.md** (이 파일)
- 어떤 문서를 언제 봐야 하는지 안내
- 프로젝트 핵심 정보 (비즈니스 목적, MVP 범위)

### **PROJECT-PLAN.md**
- Phase 0~7 작업 계획
- 기술 스택, 폴더 구조
- 각 Phase별 체크리스트

### **oh-my-seoul-design-system.md**
- 색상, 폰트, 간격 등 디자인 토큰
- 컴포넌트 스타일 가이드

---

## 🎯 프로젝트 핵심

**제품**: 8개 질문 여행 퀴즈 → 7가지 타입 결과 → Instagram 공유

**비즈니스 목적**:
1. 바이럴 확산 (MVP 최우선)
2. 고객 여정 데이터 수집 (장기)

**MVP 범위**:
- ✅ 8개 질문, 7가지 타입, 한/영만, Instagram 공유
- ❌ 나머지 언어, 지도, 카카오톡, 대시보드 (Phase 2)

**기술**: Next.js 14 + TypeScript + Tailwind + shadcn/ui

---

## 💡 작업 시 참고 순서

### 새 작업 시작할 때
1. **이 파일** 읽고 → 무슨 문서 봐야 할지 확인
2. **PROJECT-PLAN.md** → 해당 Phase 작업 확인
3. **디자인 필요 시** → oh-my-seoul-design-system.md

### 문서 생성 금지
- ❌ 추가 문서 만들지 말 것
- ❌ README, WORK-LOG 등 불필요

---

---

## 📝 작업 로그

### 2025-10-23 (오후)
- ✅ Button 컴포넌트 import 이슈 수정 (shared/Button → ui/button)
- ✅ ButtonProps 타입 문제 해결 (React.ComponentProps 사용)
- ✅ Vercel 프로덕션 배포 완료
- ✅ 배포 URL: https://oh-my-seoul-qr97pjg5m-mokkas-projects-8367cd87.vercel.app
- ✅ GitHub 저장소 자동 배포 연동 완료

### 2025-10-23 (오전)
- ✅ AI 일러스트 7개 추가 (PNG, 800KB, public/images/types/)
- ✅ TravelerTypeBadge 컴포넌트 이미지 표시 수정 (이모지 → 실제 이미지)
- ✅ GitHub 저장소 생성 및 연결 (https://github.com/half-nomad/oh-my-seoul)
- ✅ 첫 커밋 및 푸시 완료

### 2025-10-21
- ✅ PRD 및 비즈니스 플랜 검토
- ✅ PROJECT-PLAN.md 전면 업데이트 (MVP 2.0)
- ✅ CLAUDE.md 작성
- ✅ 불필요한 문서 삭제
- ✅ Phase 0~3 개발 완료 (퀴즈 플로우)

**현재 단계**: Phase 3 완료, Phase 7 배포 완료 → Phase 4 준비 (바이럴 기능)
