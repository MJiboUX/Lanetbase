'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Course } from '@/lib/internship/types';

export function LearningDashboard() {
  const [courses, setCourses] = useState<Course[]>([]);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{course.instructor}</p>
            </CardHeader>
            <CardContent>
              <Progress value={course.progress} className="mb-4" />
              <p className="mb-4">{course.description}</p>
              <Button className="w-full">
                {course.progress === 100 ? 'View Certificate' : 'Continue Learning'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}