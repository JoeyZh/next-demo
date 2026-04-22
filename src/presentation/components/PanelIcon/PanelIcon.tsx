import React from 'react';
import { PanelIconType } from '@/domain/panel';
import { iconMap } from '@/infrastructure/icons';

interface PanelIconProps {
  iconType: PanelIconType;
  className?: string;
}

export function PanelIcon({ iconType, className = 'w-5 h-5' }: PanelIconProps) {
  const IconComponent = iconMap[iconType];
  return <IconComponent className={className} />;
}
