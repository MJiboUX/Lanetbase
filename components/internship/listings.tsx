'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/providers/auth-provider';
import { InternshipListing } from '@/lib/internship/types';

export function InternshipListings() {
  const { user } = useAuth();
  const [listings, setListings] = useState<InternshipListing[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Input 
          placeholder="Search internships..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        {user && (
          <Button>Post Internship</Button>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <Card key={listing.id}>
            <CardHeader>
              <CardTitle>{listing.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{listing.company}</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{listing.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {listing.duration} • {listing.type}
                </span>
                <Button>Apply Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}