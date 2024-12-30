'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserManagement } from '@/components/super-admin/user-management';
import { AgencyManagement } from '@/components/super-admin/agency-management';
import { BillingManagement } from '@/components/super-admin/billing-management';
import { SystemAnalytics } from '@/components/super-admin/system-analytics';

export default function SuperAdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Super Admin Dashboard</h1>
      
      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="agencies">Agency Management</TabsTrigger>
          <TabsTrigger value="billing">Billing & Subscriptions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <UserManagement />
        </TabsContent>

        <TabsContent value="agencies">
          <AgencyManagement />
        </TabsContent>

        <TabsContent value="billing">
          <BillingManagement />
        </TabsContent>

        <TabsContent value="analytics">
          <SystemAnalytics />
        </TabsContent>
      </Tabs>
    </div>
  );
}