'use client';

import { useState } from 'react';
import { useAuth } from '@/providers/auth-provider';
import { InternshipListing } from '@/lib/internship/types';
import { ListingCard } from './listing-card';
import { SearchBar } from './search-bar';

export function InternshipListings() {
  const { user } = useAuth();
  const [listings, setListings] = useState<InternshipListing[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleApply = (listingId: string) => {
    // Implement application logic
  };

  const handlePost = () => {
    // Implement posting logic
  };

  return (
    <div className="space-y-6">
      <SearchBar 
        value={searchTerm}
        onChange={setSearchTerm}
        onPost={handlePost}
        showPostButton={!!user}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <ListingCard 
            key={listing.id}
            listing={listing}
            onApply={handleApply}
          />
        ))}
      </div>
    </div>
  );
}