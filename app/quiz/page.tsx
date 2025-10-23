'use client';

// Oh my Seoul - Quiz Page
// Main quiz flow with 8 questions

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuiz } from '@/lib/quiz-context';
import { ProgressBar } from '@/components/quiz/ProgressBar';
import { QuestionCard } from '@/components/quiz/QuestionCard';
import { OptionButton } from '@/components/quiz/OptionButton';
import { Loading } from '@/components/shared/Loading';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { questions } from '@/data/questions';
import { calculateTravelerType } from '@/lib/scoring';

export default function QuizPage() {
  const router = useRouter();
  const {
    currentStep,
    answers,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    getTravelerType,
    getCurrentQuestion,
    getProgress,
  } = useQuiz();

  const [isLoading, setIsLoading] = React.useState(false);
  const currentQuestion = getCurrentQuestion();
  const progress = getProgress();
  const isLastQuestion = currentStep === questions.length;
  const canGoNext = answers[currentStep] !== undefined;

  const handleNext = () => {
    if (isLastQuestion) {
      // Show loading and navigate to result
      console.log('Last question - attempting to calculate type');
      console.log('Current answers:', answers);
      console.log('Answer count:', Object.keys(answers).length);

      setIsLoading(true);
      setTimeout(() => {
        try {
          // Calculate type directly from answers (don't rely on isComplete)
          const travelerType = calculateTravelerType(answers);
          console.log('Calculated type:', travelerType);

          if (travelerType) {
            console.log('Navigating to:', `/result/${travelerType}`);
            router.push(`/result/${travelerType}`);
          } else {
            console.error('Failed to calculate traveler type - returned null/undefined');
            alert('결과 계산에 실패했습니다. 모든 질문에 답변했는지 확인해주세요.');
            setIsLoading(false);
          }
        } catch (error) {
          console.error('Error calculating type:', error);
          alert('에러 발생: ' + error);
          setIsLoading(false);
        }
      }, 2500);
    } else {
      nextQuestion();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      previousQuestion();
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl space-y-8">
        {/* Progress Bar */}
        <ProgressBar
          currentStep={currentStep}
          totalSteps={questions.length}
          progress={progress}
        />

        {/* Question Card with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <QuestionCard question={currentQuestion} />
          </motion.div>
        </AnimatePresence>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <OptionButton
              key={option.id}
              option={option}
              isSelected={answers[currentStep] === option.id}
              onClick={() => selectAnswer(currentStep, option.id)}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            이전
          </Button>

          <Button
            onClick={handleNext}
            disabled={!canGoNext}
            className="flex items-center gap-2"
          >
            {isLastQuestion ? '결과 보기' : '다음'}
            {!isLastQuestion && <ChevronRight className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
