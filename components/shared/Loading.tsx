'use client';

// Oh my Seoul - Loading Animation Component
// Framer Motion-based loading indicator with rotating messages

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  messages?: string[];
}

const defaultMessages = [
  '당신의 서울 여행 스타일 분석 중...',
  '완벽한 여행지를 찾는 중...',
  '맞춤형 추천 코스 준비 중...',
];

export function Loading({ messages = defaultMessages }: LoadingProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <Loader2 className="h-12 w-12 text-mint-primary" />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.p
          key={currentMessageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-lg text-foreground/80 text-center max-w-md"
        >
          {messages[currentMessageIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
