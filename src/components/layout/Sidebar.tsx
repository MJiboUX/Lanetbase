import React from 'react';
import { Settings } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import { NavigationItems } from './navigation/NavigationItems';
import { NavItem } from './navigation/NavItem';
import { UserProfile } from './navigation/UserProfile';

const Sidebar: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200">
      <NavigationItems />
      
      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
        <NavItem
          icon={Settings}
          label="Settings"
          path="/settings"
        />
        <div className="mt-4">
          <UserProfile user={user} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;