'use client';

// Oh my Seoul - Option Button Component
// Interactive button for quiz answer options

import * as React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OptionButtonProps {
  option: {
    id: string;
    text: { ko: string; en: string };
  };
  isSelected: boolean;
  onClick: () => void;
}

export function OptionButton({ option, isSelected, onClick }: OptionButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        'w-full p-4 rounded-lg border-2 text-left transition-all duration-200',
        'flex items-center justify-between gap-3',
        isSelected
          ? 'border-[#37BEB0] bg-[#37BEB0]/10 shadow-md'
          : 'border-gray-200 hover:border-[#37BEB0]/50 hover:bg-[#37BEB0]/5'
      )}
    >
      <span
        className={cn(
          'text-base md:text-lg',
          isSelected ? 'text-[#37BEB0] font-medium' : 'text-gray-900'
        )}
      >
        {option.text.ko}
      </span>

      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#37BEB0]">
            <Check className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      )}
    </motion.button>
  );
}
