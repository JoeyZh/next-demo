'use client';

import React from 'react';
import { horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { Panel } from '@/domain/panel';
import { SortablePanel } from '@/presentation/components';

interface PanelsListProps {
  panels: Panel[];
  onClose: (id: string) => void;
}

export function PanelsList({ panels, onClose }: PanelsListProps) {
  const openPanels = panels.filter((p) => p.isOpen);
  const openItemIds = openPanels.map((p) => p.id);

  if (openPanels.length === 0) {
    return null;
  }

  return (
    <SortableContext items={openItemIds} strategy={horizontalListSortingStrategy}>
      <div className="flex gap-2 h-full items-start">
        {openPanels.map((panel) => (
          <SortablePanel key={panel.id} panel={panel} onClose={onClose} />
        ))}
      </div>
    </SortableContext>
  );
}
