'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/providers/auth-provider';

export default function SmartSchoolPage() {
  const { user } = useAuth();

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Smart School Competition</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Active Competitions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Participate in ongoing educational challenges and competitions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leaderboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Track your progress and compare with other participants.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Earn certificates, badges, and prizes for your achievements.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}