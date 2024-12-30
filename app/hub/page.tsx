'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/providers/auth-provider';

export default function HubPage() {
  const { user } = useAuth();

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Business Hub</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Collaboration Space</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Connect and collaborate with other professionals in your industry.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resource Center</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Access business tools, templates, and guides.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Networking Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Join virtual and physical networking events.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}