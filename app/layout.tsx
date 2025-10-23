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
  keywords: ['서울', '여행', '퀴즈', '여행 스타일', 'Seoul', 'travel quiz', '서울 여행', '여행자 타입'],
  authors: [{ name: 'Oh my Seoul' }],

  // 검색엔진 인증
  verification: {
    other: {
      'naver-site-verification': 'd4ca2a9cefd7e7f2a80a649427edec268527104b',
    },
  },

  // Open Graph (SNS 공유용)
  openGraph: {
    title: 'Oh my Seoul - 나만의 서울 여행 스타일 찾기',
    description: '8개의 질문으로 알아보는 나의 여행자 타입. 당신에게 딱 맞는 서울 여행 코스를 추천해드립니다.',
    url: 'https://ohmyseoul.page',
    siteName: 'Oh my Seoul',
    images: [
      {
        url: 'https://ohmyseoul.page/images/og/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Oh my Seoul - 서울 여행 퀴즈',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },

  // Twitter 카드
  twitter: {
    card: 'summary_large_image',
    title: 'Oh my Seoul - 나만의 서울 여행 스타일 찾기',
    description: '8개의 질문으로 알아보는 나의 여행자 타입. 당신에게 딱 맞는 서울 여행 코스를 추천해드립니다.',
    images: ['https://ohmyseoul.page/images/og/og-image.png'],
  },
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
