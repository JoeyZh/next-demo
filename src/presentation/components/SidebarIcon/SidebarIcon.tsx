'use client';

import React from 'react';
import { Panel } from '@/domain/panel';
import { iconMap } from '@/infrastructure/icons';

interface SidebarIconProps {
  panel: Panel;
  index: number;
  onClick: () => void;
}

export function SidebarIcon({ panel, index, onClick }: SidebarIconProps) {
  const IconComponent = iconMap[panel.iconType];

  return (
    <div className="relative">
       {/* Order indicator */}
      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
        {index + 1}
      </span>
      <button
        onClick={onClick}
        className={`p-3 rounded-lg transition-all duration-200 ${
          panel.isOpen
            ? 'bg-blue-100 text-blue-600'
            : 'bg-gray-100 text-gray-300 hover:bg-gray-200 hover:text-gray-400'
        }`}
        title={panel.name}
      >
        <IconComponent className="w-6 h-6" />
      </button>
    </div>
  );
}
