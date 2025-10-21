import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QuizProvider } from '@/lib/quiz-context';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oh my Seoul - 나만의 서울 여행 스타일 찾기",
  description: "8개의 질문으로 알아보는 나의 여행자 타입. 당신에게 딱 맞는 서울 여행 코스를 추천해드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QuizProvider>
          {children}
        </QuizProvider>
      </body>
    </html>
  );
}
