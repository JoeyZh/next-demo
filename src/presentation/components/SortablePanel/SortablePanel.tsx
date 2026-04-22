'use client';

import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Panel } from '@/domain/panel';
import { PanelHeader } from './PanelHeader';
import { PanelContent } from './PanelContent';

interface SortablePanelProps {
  panel: Panel;
  onClose: (id: string) => void;
}

export function SortablePanel({ panel, onClose }: SortablePanelProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: panel.id,
    data: {
      type: 'panel',
      panel,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex flex-col bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
        panel.isOpen ? 'w-72 opacity-100' : 'w-0 opacity-0'
      }`}
    >
      <PanelHeader
        iconType={panel.iconType}
        name={panel.name}
        onClose={() => onClose(panel.id)}
        dragHandleAttributes={attributes as any}
        dragHandleListeners={listeners as any}
      />
      <PanelContent isOpen={panel.isOpen} panelName={panel.name} />
    </div>
  );
}
