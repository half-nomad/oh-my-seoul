'use client';

// Oh my Seoul - Quiz State Management
// React Context for managing quiz state across components

import * as React from 'react';
import { questions, type Question } from '@/data/questions';
import { calculateTravelerType } from '@/lib/scoring';

interface QuizState {
  currentStep: number; // 1-8
  answers: Record<number, string>; // questionId -> optionId
  isComplete: boolean;
}

interface QuizContextType extends QuizState {
  selectAnswer: (questionId: number, optionId: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  resetQuiz: () => void;
  getTravelerType: () => string | null;
  getCurrentQuestion: () => Question | null;
  getProgress: () => number; // 0-100
}

const QuizContext = React.createContext<QuizContextType | undefined>(undefined);

const initialState: QuizState = {
  currentStep: 1,
  answers: {},
  isComplete: false,
};

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<QuizState>(initialState);

  const selectAnswer = React.useCallback((questionId: number, optionId: string) => {
    setState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: optionId,
      },
    }));
  }, []);

  const nextQuestion = React.useCallback(() => {
    setState((prev) => {
      const nextStep = prev.currentStep + 1;
      if (nextStep > questions.length) {
        return { ...prev, isComplete: true };
      }
      return { ...prev, currentStep: nextStep };
    });
  }, []);

  const previousQuestion = React.useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentStep: Math.max(1, prev.currentStep - 1),
    }));
  }, []);

  const resetQuiz = React.useCallback(() => {
    setState(initialState);
  }, []);

  const getTravelerType = React.useCallback((): string | null => {
    if (!state.isComplete) return null;
    return calculateTravelerType(state.answers);
  }, [state.isComplete, state.answers]);

  const getCurrentQuestion = React.useCallback((): Question | null => {
    return questions[state.currentStep - 1] || null;
  }, [state.currentStep]);

  const getProgress = React.useCallback((): number => {
    return Math.round((state.currentStep / questions.length) * 100);
  }, [state.currentStep]);

  const value: QuizContextType = {
    ...state,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    resetQuiz,
    getTravelerType,
    getCurrentQuestion,
    getProgress,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const context = React.useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
