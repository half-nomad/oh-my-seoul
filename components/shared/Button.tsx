// Oh my Seoul - Custom Button Component
// Wrapper around shadcn Button with project-specific styling

import * as React from 'react';
import { Button as ShadcnButton, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export function Button({ className, children, ...props }: CustomButtonProps) {
  return (
    <ShadcnButton
      className={cn(
        'bg-[#37BEB0] hover:bg-[#2C9B8F]',
        'text-white font-medium',
        'transition-all duration-200',
        'shadow-sm hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
}
