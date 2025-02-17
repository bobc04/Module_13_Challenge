// TYPES FOR NAVIGATION ITEMS AND PROPS
type NavItem = {
  path: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

type NavProps = {
  onNavigate?: (path: string) => void;
};

import React, { useState } from 'react';
import { Search, UserCheck, AlertCircle } from 'lucide-react';

// MAIN NAVIGATION COMPONENT
const Nav: React.FC<NavProps> = ({ onNavigate }) => {
  // STATE TO TRACK ACTIVE PAGE
  const [activePath, setActivePath] = useState<string>('/');
  
  // NAVIGATION ITEMS CONFIGURATION
  const navItems: NavItem[] = [
    {
      path: '/',
      name: 'Candidate Search',
      icon: Search
    },
    {
      path: '/saved',
      name: 'Saved Candidates',
      icon: UserCheck
    },
    {
      path: '/error',
      name: 'Error Page',
      icon: AlertCircle
    }
  ];

  // HANDLE NAVIGATION CLICK EVENTS
  const handleNavigation = (path: string): void => {
    setActivePath(path);
    if (onNavigate) {
      onNavigate(path);
    }
  };

  // RENDER NAVIGATION BAR
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 hover:text-blue-600 hover:border-blue-600 ${
                  activePath === item.path
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500'
                }`}
              >
                <item.icon className="w-5 h-5 mr-1.5" />
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;