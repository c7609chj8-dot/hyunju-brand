import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAFEMIND — 안전교육 · AI 활용교육",
  description: "SAFEMIND의 안전교육·AI 활용교육을 소개합니다. 강의·협업 문의는 010-7259-2558로 연락해 주세요.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
