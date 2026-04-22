'use client';

import React from 'react';
import { type PanelIconType } from '@/domain/panel';
import { iconMap, XMarkIcon } from '@/infrastructure/icons';

interface PanelHeaderProps {
  iconType: PanelIconType;
  name: string;
  onClose: () => void;
  dragHandleAttributes?: Record<string, string>;
  dragHandleListeners?: Record<string, unknown>;
}

export function PanelHeader({
  iconType,
  name,
  onClose,
  dragHandleAttributes = {},
  dragHandleListeners = {},
}: PanelHeaderProps) {
  const IconComponent = iconMap[iconType];

  return (
    <div
      {...dragHandleAttributes}
      {...dragHandleListeners}
      className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-500 to-purple-500 cursor-grab active:cursor-grabbing"
    >
      <div className="flex items-center gap-2 text-white">
        {IconComponent && <IconComponent className="w-5 h-5 flex-shrink-0" />}
        <span className="text-sm font-medium whitespace-nowrap">{name}</span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="text-white/80 hover:text-white transition-colors flex-shrink-0"
        aria-label="Close panel"
      >
        <XMarkIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
