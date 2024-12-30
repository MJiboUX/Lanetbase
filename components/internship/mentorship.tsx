'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MentorshipProgram } from '@/lib/internship/types';

export function MentorshipPrograms() {
  const [programs, setPrograms] = useState<MentorshipProgram[]>([]);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <Card key={program.id}>
            <CardHeader>
              <CardTitle>{program.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Mentor: {program.mentorName}
              </p>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{program.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{program.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price:</span>
                  <span>${program.price}</span>
                </div>
                <Button className="w-full">Enroll Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}