'use client';

import { EngagementChart } from '@/components/charts/engagement-chart';

const defaultData = [
  { name: 'Posts', total: 12 },
  { name: 'Comments', total: 45 },
  { name: 'Likes', total: 89 },
  { name: 'Groups', total: 3 },
  { name: 'Events', total: 2 },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Analytics</h2>
      <div className="grid gap-4">
        <EngagementChart data={defaultData} />
      </div>
    </div>
  );
}