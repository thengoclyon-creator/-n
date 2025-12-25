
import React from 'react';
import { AppScreen } from '../types';

interface BottomNavProps {
  activeScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Trang chủ', icon: 'home' },
    { id: 'news', label: 'Tin tức', icon: 'article' },
    { id: 'favorite', label: 'Yêu thích', icon: 'favorite' },
    { id: 'support', label: 'Cá nhân', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-2 z-50 h-20 flex items-center justify-around">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id as AppScreen)}
          className={`flex flex-col items-center justify-center gap-1 w-16 group transition-colors ${
            activeScreen === item.id ? 'text-primary' : 'text-gray-400 dark:text-gray-500'
          }`}
        >
          <span className={`material-symbols-outlined text-[24px] ${activeScreen === item.id ? 'fill-1' : ''}`}>
            {item.icon}
          </span>
          <span className="text-[10px] font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
