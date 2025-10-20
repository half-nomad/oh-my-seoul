// Oh my Seoul - Scoring Algorithm
// Calculates traveler type based on quiz answers

import { questions } from '@/data/questions';
import { travelerTypes } from '@/data/types';

export function calculateTravelerType(answers: Record<number, string>): string {
  // Initialize scores for each type
  const scores: Record<string, number> = {};
  travelerTypes.forEach((type) => {
    scores[type.id] = 0;
  });

  // Calculate scores based on answers
  questions.forEach((question) => {
    const selectedOptionId = answers[question.id];
    if (!selectedOptionId) return;

    const selectedOption = question.options.find((opt) => opt.id === selectedOptionId);
    if (!selectedOption) return;

    // Add scores from the selected option
    Object.entries(selectedOption.scores).forEach(([typeId, score]) => {
      scores[typeId] = (scores[typeId] || 0) + score;
    });
  });

  // Find the type with the highest score
  let maxScore = -1;
  let resultType = 'balanced-explorer'; // fallback

  Object.entries(scores).forEach(([typeId, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = typeId;
    }
  });

  // Tie-breaking logic (priority order if scores are equal)
  const tieBreakingOrder = [
    'trendsetter',
    'social-butterfly',
    'kculture-fan',
    'foodie',
    'heritage-explorer',
    'nature-seeker',
    'balanced-explorer',
  ];

  // Check if there are ties
  const topScore = maxScore;
  const tiedTypes = Object.entries(scores)
    .filter(([, score]) => score === topScore)
    .map(([typeId]) => typeId);

  if (tiedTypes.length > 1) {
    // Return the first type in the tie-breaking order
    for (const typeId of tieBreakingOrder) {
      if (tiedTypes.includes(typeId)) {
        return typeId;
      }
    }
  }

  return resultType;
}

// Helper function for testing
export function getScoreBreakdown(answers: Record<number, string>): Record<string, number> {
  const scores: Record<string, number> = {};
  travelerTypes.forEach((type) => {
    scores[type.id] = 0;
  });

  questions.forEach((question) => {
    const selectedOptionId = answers[question.id];
    if (!selectedOptionId) return;

    const selectedOption = question.options.find((opt) => opt.id === selectedOptionId);
    if (!selectedOption) return;

    Object.entries(selectedOption.scores).forEach(([typeId, score]) => {
      scores[typeId] = (scores[typeId] || 0) + score;
    });
  });

  return scores;
}
