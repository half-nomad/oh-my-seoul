// Oh my Seoul - Traveler Type Badge Component
// Displays the traveler type with illustration and description

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { TravelerType } from '@/data/types';
import Image from 'next/image';

interface TravelerTypeBadgeProps {
  travelerType: TravelerType;
}

export function TravelerTypeBadge({ travelerType }: TravelerTypeBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-2" style={{ borderColor: travelerType.color }}>
        <CardHeader className="text-center space-y-4">
          {/* Illustration */}
          <div className="flex justify-center">
            <div
              className="w-48 h-48 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${travelerType.color}20` }}
            >
              {/* Placeholder for AI illustration */}
              <div className="text-6xl">{travelerType.id === 'trendsetter' ? '🌟' :
                travelerType.id === 'heritage-explorer' ? '🏛️' :
                travelerType.id === 'foodie' ? '🍜' :
                travelerType.id === 'kculture-fan' ? '💜' :
                travelerType.id === 'nature-seeker' ? '🌿' :
                travelerType.id === 'social-butterfly' ? '🦋' :
                '⚖️'}</div>
            </div>
          </div>

          {/* Type Name */}
          <div className="space-y-2">
            <Badge
              className="text-white font-bold px-4 py-2 text-base"
              style={{ backgroundColor: travelerType.color }}
            >
              {travelerType.koreanName}
            </Badge>
            <CardTitle className="text-3xl md:text-4xl">
              {travelerType.name.ko}
            </CardTitle>
            <CardDescription className="text-lg italic text-foreground/60">
              {travelerType.name.en}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            {travelerType.description.ko}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
