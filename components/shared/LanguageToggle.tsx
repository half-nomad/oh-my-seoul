'use client';

// Oh my Seoul - Language Toggle Component
// Switch between Korean and English

import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
  currentLocale: string;
}

export function LanguageToggle({ currentLocale }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'ko' ? 'en' : 'ko';
    const currentPath = pathname.replace(/^\/(ko|en)/, '');
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className={cn(
        'flex items-center gap-2',
        'border-mint-primary/20 hover:border-mint-primary/40',
        'hover:bg-mint-primary/5'
      )}
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{currentLocale === 'ko' ? '한국어' : 'English'}</span>
    </Button>
  );
}
