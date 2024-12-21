import React from 'react';
import { Home, BookOpen, ShoppingBag, Users, Calculator, Building2 } from 'lucide-react';
import { NavItem } from './NavItem';

export const navigationItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: BookOpen, label: 'Learning', path: '/learning' },
  { icon: ShoppingBag, label: 'E-commerce', path: '/ecommerce' },
  { icon: Users, label: 'Social', path: '/social' },
  { icon: Calculator, label: 'Accounting', path: '/accounting' },
  { icon: Building2, label: 'HR', path: '/hr' },
] as const;

export const NavigationItems: React.FC = () => {
  return (
    <nav className="p-4 space-y-2">
      {navigationItems.map((item) => (
        <NavItem key={item.path} {...item} />
      ))}
    </nav>
  );
};