'use client';

import { useAuth } from '@/providers/auth-provider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { DashboardLayout } from '@/components/dashboard/layout';

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userRole } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (userRole !== 'super_admin') {
      router.push('/dashboard');
    }
  }, [userRole, router]);

  if (userRole !== 'super_admin') return null;

  return <DashboardLayout>{children}</DashboardLayout>;
}