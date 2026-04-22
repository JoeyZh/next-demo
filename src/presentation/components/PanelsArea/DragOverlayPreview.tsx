'use client';

import React from 'react';
import { Panel } from '@/domain/panel';
import { PanelHeader } from '../SortablePanel/PanelHeader';
import { PanelContent } from '../SortablePanel/PanelContent';

interface DragOverlayPreviewProps {
  activePanel?: Panel;
}

export function DragOverlayPreview({ activePanel }: DragOverlayPreviewProps) {
  if (!activePanel) {
    return null;
  }

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-[9999]">
      <PanelHeader
        iconType={activePanel.iconType}
        name={activePanel.name}
        onClose={() => {}}
        dragHandleAttributes={undefined}
        dragHandleListeners={undefined}
      />
      <PanelContent isOpen panelName={activePanel.name} />
    </div>
  );
}
