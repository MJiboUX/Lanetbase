'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InternshipListing } from '@/lib/internship/types';

interface ListingCardProps {
  listing: InternshipListing;
  onApply: (listingId: string) => void;
}

export function ListingCard({ listing, onApply }: ListingCardProps) {
  return (
    <Card>
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
          <Button onClick={() => onApply(listing.id)}>Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}