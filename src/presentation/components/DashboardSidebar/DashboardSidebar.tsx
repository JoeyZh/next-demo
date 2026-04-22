import React from 'react';
import { Panel } from '@/domain/panel';
import { SidebarIcon } from '@/presentation/components';

interface DashboardSidebarProps {
  panels: Panel[];
  onTogglePanel: (id: string) => void;
}

export function DashboardSidebar({ panels, onTogglePanel }: DashboardSidebarProps) {
  return (
    <aside className="w-20 bg-white border-r border-gray-200 p-3 flex flex-col gap-2 flex-shrink-0">
      {panels.map((panel, index) => (
        <SidebarIcon
          key={panel.id}
          panel={panel}
          index={index}
          onClick={() => onTogglePanel(panel.id)}
        />
      ))}
    </aside>
  );
}
