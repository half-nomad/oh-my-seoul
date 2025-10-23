// Oh my Seoul - Result Page
// Displays traveler type result and recommended courses

import * as React from 'react';
import type { Metadata } from 'next';
import { getTravelerTypeById } from '@/data/types';
import { courses } from '@/data/courses';
import { ResultClient } from './ResultClient';
import { Button } from '@/components/ui/button';

interface ResultPageProps {
  params: Promise<{
    type: string;
  }>;
}

// Dynamic metadata for each traveler type
export async function generateMetadata({ params }: ResultPageProps): Promise<Metadata> {
  const { type } = await params;
  const travelerType = getTravelerTypeById(type);

  if (!travelerType) {
    return {
      title: '결과를 찾을 수 없습니다 - Oh my Seoul',
      description: '유효하지 않은 여행자 타입입니다.',
    };
  }

  const baseUrl = 'https://oh-my-seoul-qr97pjg5m-mokkas-projects-8367cd87.vercel.app';
  const imageUrl = `${baseUrl}/images/types/${type}.png`;
  const pageUrl = `${baseUrl}/result/${type}`;

  return {
    title: `${travelerType.koreanName} - Oh my Seoul`,
    description: travelerType.description.ko,
    keywords: ['서울 여행', '여행 스타일', travelerType.koreanName, travelerType.englishName],

    openGraph: {
      title: `${travelerType.koreanName} - Oh my Seoul`,
      description: travelerType.description.ko,
      url: pageUrl,
      siteName: 'Oh my Seoul',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 1200,
          alt: travelerType.koreanName,
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: `${travelerType.koreanName} - Oh my Seoul`,
      description: travelerType.description.ko,
      images: [imageUrl],
    },
  };
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { type } = await params;
  const travelerType = getTravelerTypeById(type);

  if (!travelerType) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">결과를 찾을 수 없습니다</h1>
          <p className="text-gray-600">유효하지 않은 타입: {type}</p>
          <Button onClick={() => window.location.href = '/'}>처음으로 돌아가기</Button>
        </div>
      </div>
    );
  }

  // Get recommended courses for this type
  const recommendedCourses = travelerType.courseIds
    .map((courseId) => courses.find((c) => c.id === courseId))
    .filter(Boolean);

  return <ResultClient travelerType={travelerType} recommendedCourses={recommendedCourses} />;
}
