# Oh my Seoul - Claude AI 작업 가이드

> 이 프로젝트 작업 시 참고할 문서와 핵심 정보만 기록

---

## 📁 프로젝트 문서

```
OhmySeoul/
├── CLAUDE.md                    # 이 파일 - 문서 가이드
├── PROJECT-PLAN.md              # 개발 실행 계획 (Phase 0~7)
├── WORK-LOG.md                  # 작업 이력 기록
├── oh-my-seoul-design-system.md # 디자인 토큰
└── oh-my-seoul-seo-guide.md     # SEO & 배포 가이드
```

---

## 📋 각 문서 목적

### **CLAUDE.md** (이 파일)
- 어떤 문서를 언제 봐야 하는지 안내
- 프로젝트 핵심 정보 (비즈니스 목적, MVP 범위)
- 현재 진행 상태 요약

### **PROJECT-PLAN.md**
- Phase 0~7 작업 계획
- 기술 스택, 폴더 구조
- 각 Phase별 체크리스트

### **WORK-LOG.md**
- 시간순 작업 이력 기록
- 완료된 작업의 상세 내용
- 버그 수정 및 이슈 해결 기록

### **oh-my-seoul-design-system.md**
- 색상, 폰트, 간격 등 디자인 토큰
- 컴포넌트 스타일 가이드

### **oh-my-seoul-seo-guide.md**
- SEO 최적화 가이드
- 도메인 구매 및 연결
- 구글/네이버 검색엔진 등록

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

### 작업 완료 시
1. **WORK-LOG.md** 업데이트 → 완료한 작업 상세 기록
2. **PROJECT-PLAN.md** 체크리스트 업데이트
3. **CLAUDE.md** 현재 상태 업데이트

### 문서 생성 금지
- ❌ 추가 문서 만들지 말 것 (위 5개 문서만 유지)
- ❌ README, 기타 중복 문서 불필요

---

## 📊 현재 진행 상태

**최종 업데이트**: 2025-10-23

**완료된 Phase**:
- ✅ Phase 0: 사전 준비 (콘텐츠, AI 일러스트)
- ✅ Phase 1: 프로젝트 기반 (Next.js, 디자인 시스템)
- ✅ Phase 2: UI 컴포넌트 (shadcn/ui, 공통 컴포넌트)
- ✅ Phase 3: 퀴즈 플로우 (전체 플로우 구현 완료)
- ✅ Phase 7: Vercel 배포 (프로덕션 환경)

**다음 작업**:
- Phase 4: 바이럴 기능 (게이미피케이션, Instagram 공유, OG 이미지)
- Phase 5: 다국어 & 최적화 (next-intl, 성능)
- Phase 7: 전체 플로우 테스트, 커스텀 도메인 (선택)

**배포 정보**:
- Production: https://oh-my-seoul-qr97pjg5m-mokkas-projects-8367cd87.vercel.app
- GitHub: https://github.com/half-nomad/oh-my-seoul

**상세 작업 이력**: WORK-LOG.md 참고
