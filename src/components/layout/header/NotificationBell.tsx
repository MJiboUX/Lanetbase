import React from 'react';
import { Bell } from 'lucide-react';
import { useUIStore } from '../../../stores/uiStore';

export const NotificationBell: React.FC = () => {
  const { notifications } = useUIStore();
  
  return (
    <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
      <Bell className="w-5 h-5" />
      {notifications.length > 0 && (
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
      )}
    </button>
  );
};