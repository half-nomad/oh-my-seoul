// Oh my Seoul - Progress Bar Component
// Shows quiz progress with step indicator

import * as React from 'react';
import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  progress: number; // 0-100
}

export function ProgressBar({ currentStep, totalSteps, progress }: ProgressBarProps) {
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground/60">
          질문 {currentStep} / {totalSteps}
        </span>
        <span className="font-medium text-mint-primary">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}
