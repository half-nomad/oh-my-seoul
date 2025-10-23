'use client';

// Oh my Seoul - Result Page
// Displays traveler type result and recommended courses

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { getTravelerTypeById } from '@/data/types';
import { courses } from '@/data/courses';
import { TravelerTypeBadge } from '@/components/result/TravelerTypeBadge';
import { CourseCard } from '@/components/result/CourseCard';
import { Button } from '@/components/ui/button';
import { RotateCcw, Share2 } from 'lucide-react';

interface ResultPageProps {
  params: {
    type: string;
  };
}

export default function ResultPage({ params }: ResultPageProps) {
  const router = useRouter();
  const travelerType = getTravelerTypeById(params.type);

  if (!travelerType) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">결과를 찾을 수 없습니다</h1>
          <Button onClick={() => router.push('/ko')}>처음으로 돌아가기</Button>
        </div>
      </div>
    );
  }

  // Get recommended courses for this type
  const recommendedCourses = travelerType.courseIds
    .map((courseId) => courses.find((c) => c.id === courseId))
    .filter(Boolean);

  const handleRetry = () => {
    router.push('/ko');
  };

  const handleShare = () => {
    // Copy link to clipboard
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('링크가 복사되었습니다!');
    });
  };

  return (
    <div className="min-h-screen px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <h1 className="text-4xl md:text-5xl font-bold">당신의 여행 스타일은?</h1>
          <p className="text-foreground/60">8개의 질문으로 찾은 당신만의 서울 여행 가이드</p>
        </motion.div>

        {/* Traveler Type Badge */}
        <TravelerTypeBadge travelerType={travelerType} />

        {/* Recommended Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold">추천 코스</h2>
            <p className="text-foreground/60">
              {travelerType.name.ko}를 위한 맞춤 서울 여행지
            </p>
          </div>

          <div className="grid gap-4">
            {recommendedCourses.map((course, index) => (
              course && (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <CourseCard course={course} index={index} />
                </motion.div>
              )
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            variant="outline"
            onClick={handleShare}
            className="flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            결과 공유하기
          </Button>

          <Button onClick={handleRetry} className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4" />
            다시 테스트하기
          </Button>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center text-sm text-foreground/40"
        >
          <p>Oh my Seoul과 함께 특별한 서울 여행을 만들어보세요</p>
        </motion.div>
      </div>
    </div>
  );
}
