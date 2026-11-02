# SAFEMIND 홈페이지

Next.js + TypeScript로 만든 반응형 한 페이지 프런트엔드 초안입니다.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 http://127.0.0.1:3000 을 엽니다.

```bash
npm run typecheck
npm run build
npm start
```

## 현재 기능

- 소개·포트폴리오·문의 섹션과 모바일 메뉴
- 포트폴리오 예시 클릭 시 내용 펼치기
- 브라우저 기본 입력 검증 및 문의 입력 확인 메시지
- 키보드 포커스, 본문 바로가기, 모션 감소 설정 지원

## 브랜드 로고와 연락처

- 최신 마크: `public/brand/safemind-logo-sm.png`. SM 약자를 방패·책·AI 회로에 통합한 이미지다. [제작 기록](./public/brand/safemind-logo-sm.md)

- 최신 표기는 **SAFEMIND**다. 로고: `public/brand/safemind-logo-en.png`. 설명 “안전교육 · AI 활용교육”은 한국어로 유지하며 로고에는 전화번호를 넣지 않는다.

- 확정 브랜드명: 세이프마인드. 최신 이미지 로고는 `public/brand/safemind-logo.png`이며 전화번호를 포함하지 않는다.
- [세이프마인드 로고 제작 설명·프롬프트](./public/brand/safemind-logo.md)

- `public/brand/hyunju-safety-ai-symbol.png`: 안전·교육·AI 연결을 표현하는 투명 PNG 심벌.
- `app/components/brand-logo.tsx`: 심벌과 HYUNJU, 안전교육·AI 활용 문구를 조합한 웹 로고.
- 강의·협업 문의: 010-7259-2558. 문의 영역과 푸터에 모바일 전화 링크 적용.
- [로고 생성 프롬프트와 설명](./public/brand/README.md)

## 실제 공개 전 교체할 내용

- `app/page.tsx`: 소개, 전문 분야, 실제 포트폴리오, 연락 수단
- `app/globals.css`: 색상과 스타일
- `app/layout.tsx`: 제목, 설명, 검색 노출 설정. 현재 초안이므로 검색 차단 메타태그 적용

포트폴리오 3건은 화면 구성용 예시이며 실제 경력·성과가 아닙니다.
문의는 서버로 전송되거나 저장되지 않습니다. Supabase와 관리자 기능은 연결하지 않았습니다.
Google Fonts가 차단되면 시스템 글꼴로 표시됩니다.

현재 구현 범위는 프런트엔드입니다. 작업 완료 후 검증한 변경사항을 GitHub에 커밋·push합니다. 외부 서비스 배포는 별도 작업입니다.

## 참고

- [Next.js 설치 공식 문서](https://nextjs.org/docs/app/getting-started/installation)
