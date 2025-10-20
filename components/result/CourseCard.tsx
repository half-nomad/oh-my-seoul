// Oh my Seoul - Course Card Component
// Displays recommended course information

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import type { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mint-primary/10 text-mint-primary font-bold flex-shrink-0">
            {index + 1}
          </div>
          <div className="flex-1 space-y-1">
            <CardTitle className="text-xl">{course.name.ko}</CardTitle>
            <CardDescription className="flex items-center gap-1 text-sm">
              <MapPin className="w-3 h-3" />
              {course.address.ko}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70">{course.description.ko}</p>
      </CardContent>
    </Card>
  );
}
