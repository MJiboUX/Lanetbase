'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/providers/auth-provider';

export default function MarketplacePage() {
  const { user } = useAuth();

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Digital Marketplace</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Browse and purchase digital products and services.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Find professional services and freelancers.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Access educational content and training materials.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}