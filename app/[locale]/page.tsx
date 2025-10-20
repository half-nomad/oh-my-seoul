'use client';

// Oh my Seoul - Landing Page
// Entry point for the quiz experience

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/shared/Button';
import { MapPin, Sparkles } from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push('/ko/quiz');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-background to-mint-primary/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8 max-w-2xl"
      >
        {/* Logo & Title */}
        <div className="space-y-4">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            <MapPin className="h-12 w-12 text-mint-primary" />
            <Sparkles className="h-8 w-8 text-gold-warm" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Oh my Seoul
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70">
            당신만의 서울 여행 스타일을 찾아보세요
          </p>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <p className="text-lg text-foreground/60">
            8개의 질문으로 알아보는 나의 여행자 타입
          </p>
          <p className="text-base text-foreground/50">
            트렌디한 힙스터부터 전통을 사랑하는 탐험가까지<br />
            당신에게 딱 맞는 서울 여행 코스를 추천해드립니다
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            size="lg"
            onClick={handleStartQuiz}
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            테스트 시작하기
          </Button>
        </motion.div>

        {/* Meta Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm text-foreground/40"
        >
          소요 시간: 약 2분 | 7가지 여행자 타입
        </motion.p>
      </motion.div>
    </div>
  );
}
