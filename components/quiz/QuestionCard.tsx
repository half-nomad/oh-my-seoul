// Oh my Seoul - Question Card Component
// Displays quiz question with category badge

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Question } from '@/data/questions';

interface QuestionCardProps {
  question: Question;
}

const categoryLabels: Record<string, string> = {
  profile: '프로필',
  food: '음식',
  activity: '활동',
  vibe: '분위기',
  kculture: 'K-컬처',
};

const categoryColors: Record<string, string> = {
  profile: 'bg-blue-midnight/10 text-blue-midnight',
  food: 'bg-gold-warm/10 text-gold-warm',
  activity: 'bg-mint-primary/10 text-mint-primary',
  vibe: 'bg-purple-soft/10 text-purple-soft',
  kculture: 'bg-coral-vibrant/10 text-coral-vibrant',
};

export function QuestionCard({ question }: QuestionCardProps) {
  const categoryLabel = categoryLabels[question.category] || question.category;
  const categoryColor = categoryColors[question.category] || 'bg-gray-100 text-gray-600';

  return (
    <Card className="border-2 border-mint-primary/20">
      <CardHeader className="space-y-4">
        <Badge className={`${categoryColor} w-fit`}>{categoryLabel}</Badge>
        <CardTitle className="text-2xl md:text-3xl">{question.question.ko}</CardTitle>
        {question.question.en && (
          <CardDescription className="text-base italic">
            {question.question.en}
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  );
}
