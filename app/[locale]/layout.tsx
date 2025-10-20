// Oh my Seoul - Locale Layout
// Layout wrapper for locale-specific pages with QuizProvider

import { QuizProvider } from '@/lib/quiz-context';

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QuizProvider>{children}</QuizProvider>;
}
