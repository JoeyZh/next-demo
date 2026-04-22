'use client';

import { useState, useCallback } from 'react';
import { Panel, PanelIconType } from '@/domain/panel';

interface UsePanelManagerReturn {
  panels: Panel[];
  openPanel: (id: string) => void;
  closePanel: (id: string) => void;
  reorderPanels: (newOrder: Panel[]) => void;
}

const initialPanels: Panel[] = [
  { id: 'panel-1', name: 'Map', isOpen: true, order: 0, iconType: 'map' as PanelIconType },
  { id: 'panel-2', name: 'Music', isOpen: true, order: 1, iconType: 'music' as PanelIconType },
  { id: 'panel-3', name: 'Chat', isOpen: true, order: 2, iconType: 'chat' as PanelIconType },
];

export function usePanelManager(): UsePanelManagerReturn {
  const [panels, setPanels] = useState<Panel[]>(initialPanels);

  const openPanel = useCallback((id: string) => {
    setPanels((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isOpen: true } : p))
    );
  }, []);

  const closePanel = useCallback((id: string) => {
    setPanels((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isOpen: false } : p))
    );
  }, []);

  const reorderPanels = useCallback((newOrder: Panel[]) => {
    setPanels(newOrder);
  }, []);

  return {
    panels,
    openPanel,
    closePanel,
    reorderPanels,
  };
}
