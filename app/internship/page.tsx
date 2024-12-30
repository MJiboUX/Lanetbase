'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { InternshipListings } from '@/components/internship/listings';
import { LearningDashboard } from '@/components/internship/learning';
import { MentorshipPrograms } from '@/components/internship/mentorship';
import { useAuth } from '@/providers/auth-provider';

export default function InternshipPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('listings');

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Virtual Internship Program</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full">
          <TabsTrigger value="listings">Internship Listings</TabsTrigger>
          <TabsTrigger value="learning">Learning & Development</TabsTrigger>
          <TabsTrigger value="mentorship">Mentorship Programs</TabsTrigger>
        </TabsList>

        <TabsContent value="listings">
          <InternshipListings />
        </TabsContent>

        <TabsContent value="learning">
          <LearningDashboard />
        </TabsContent>

        <TabsContent value="mentorship">
          <MentorshipPrograms />
        </TabsContent>
      </Tabs>
    </div>
  );
}