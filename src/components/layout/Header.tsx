import React from 'react';
import { SearchBar } from './header/SearchBar';
import { NotificationBell } from './header/NotificationBell';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center flex-1">
          <SearchBar />
        </div>
        <div className="flex items-center space-x-4">
          <NotificationBell />
        </div>
      </div>
    </header>
  );
};

export default Header;