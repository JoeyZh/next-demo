'use client';

import React from 'react';
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates, arrayMove } from '@dnd-kit/sortable';
import { Panel } from '@/domain/panel';
import { PanelsList } from './PanelsList';
import { DragOverlayPreview } from './DragOverlayPreview';
import { SortablePanel } from '@/presentation/components';

interface PanelsAreaProps {
  panels: Panel[];
  onClose: (id: string) => void;
  onReorderPanels: (panels: Panel[]) => void;
}

export function PanelsArea({
  panels,
  onClose,
  onReorderPanels,
}: PanelsAreaProps) {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = panels.findIndex((p) => p.id === active.id);
      const newIndex = panels.findIndex((p) => p.id === over.id);
      if (oldIndex !== -1 && newIndex !== -1) {
        const newPanels = arrayMove(panels, oldIndex, newIndex).map(
          (panel, index) => ({ ...panel, order: index })
        );
        onReorderPanels(newPanels);
      }
    }
    setActiveId(null);
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  const activePanel = activeId ? panels.find((p) => p.id === activeId) : undefined;

  // SSR fallback
  if (!isClient) {
    return (
      <section className="flex-1 overflow-x-auto overflow-y-hidden p-4">
        <div className="flex gap-2 h-full items-start">
          {panels
            .filter((p) => p.isOpen)
            .map((panel) => (
              <SortablePanel key={panel.id} panel={panel} onClose={onClose} />
            ))}
        </div>
      </section>
    );
  }

  return (
    <section className="flex-1 overflow-x-auto overflow-y-hidden p-4">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <PanelsList
          panels={panels}
          onClose={onClose}
        />
        <DragOverlay
          dropAnimation={{
            duration: 200,
            easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)',
          }}
        >
          <DragOverlayPreview activePanel={activePanel} />
        </DragOverlay>
      </DndContext>
    </section>
  );
}
