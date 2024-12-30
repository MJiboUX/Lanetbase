'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { UserRole } from '@/lib/auth/types';
import { setUserRole } from '@/lib/auth/roles';

interface User {
  id: string;
  email: string;
  role: UserRole;
  status: 'active' | 'suspended';
  createdAt: string;
}

export function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'role', header: 'Role' },
    { accessorKey: 'status', header: 'Status' },
    { accessorKey: 'createdAt', header: 'Created At' },
    {
      id: 'actions',
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => handleRoleChange(row.original.id)}
          >
            Change Role
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

  const handleRoleChange = async (userId: string) => {
    // Implement role change logic
  };

  const handleStatusChange = async (userId: string) => {
    // Implement status change logic
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Button>Export Data</Button>
        </div>
        <DataTable columns={columns} data={users} />
      </CardContent>
    </Card>
  );
}