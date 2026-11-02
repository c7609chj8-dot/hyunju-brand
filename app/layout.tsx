import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HYUNJU — 안전교육 · AI 활용",
  description: "현주의 안전교육·AI 활용 개인브랜딩 공간입니다. 강의·협업 문의는 010-7259-2558로 연락해 주세요.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
