import React from 'react';
import { User } from '../../../types/auth';

interface UserProfileProps {
  user: User | null;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  if (!user) return null;

  return (
    <div className="flex items-center space-x-3 px-4">
      <img
        src={user.photoURL || `https://ui-avatars.com/api/?name=${user.email}`}
        alt="Profile"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">
          {user.displayName || user.email}
        </p>
        <p className="text-xs text-gray-500 truncate">
          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
        </p>
      </div>
    </div>
  );
};