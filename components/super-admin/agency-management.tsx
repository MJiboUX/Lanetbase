'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';

interface Agency {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'pending' | 'suspended';
  verificationStatus: 'verified' | 'unverified';
  internshipsPosted: number;
}

export function AgencyManagement() {
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    { accessorKey: 'name', header: 'Agency Name' },
    { accessorKey: 'type', header: 'Type' },
    { accessorKey: 'status', header: 'Status' },
    { accessorKey: 'verificationStatus', header: 'Verification' },
    { accessorKey: 'internshipsPosted', header: 'Internships Posted' },
    {
      id: 'actions',
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => handleVerification(row.original.id)}
          >
            {row.original.verificationStatus === 'verified' ? 'Revoke' : 'Verify'}
          </Button>
          <Button 
            variant="destructive" 
            size="sm"
            onClick={() => handleStatusChange(row.original.id)}
          >
            {row.original.status === 'active' ? 'Suspend' : 'Activate'}
          </Button>
        </div>
      ),
    },
  ];

  const handleVerification = async (agencyId: string) => {
    // Implement verification logic
  };

  const handleStatusChange = async (agencyId: string) => {
    // Implement status change logic
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Agency Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Input
            placeholder="Search agencies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Button>Add New Agency</Button>
        </div>
        <DataTable columns={columns} data={agencies} />
      </CardContent>
    </Card>
  );
}