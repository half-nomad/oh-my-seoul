// Oh my Seoul - Result Page
// Displays traveler type result and recommended courses

import * as React from 'react';
import { getTravelerTypeById } from '@/data/types';
import { courses } from '@/data/courses';
import { ResultClient } from './ResultClient';
import { Button } from '@/components/ui/button';

interface ResultPageProps {
  params: Promise<{
    type: string;
  }>;
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
