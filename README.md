# HYUNJU 개인브랜딩 홈페이지

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
