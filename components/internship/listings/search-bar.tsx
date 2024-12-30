'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onPost?: () => void;
  showPostButton?: boolean;
}

export function SearchBar({ value, onChange, onPost, showPostButton }: SearchBarProps) {
  return (
    <div className="flex justify-between items-center">
      <Input 
        placeholder="Search internships..." 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="max-w-sm"
      />
      {showPostButton && (
        <Button onClick={onPost}>Post Internship</Button>
      )}
    </div>
  );
}