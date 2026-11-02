import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HYUNJU — 나다운 시선, 의미 있는 연결",
  description: "현주의 생각과 경험, 그리고 새로운 가능성을 연결하는 개인브랜딩 공간입니다.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
