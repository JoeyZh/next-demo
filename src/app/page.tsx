'use client';

import { DashboardHeader, DashboardSidebar, PanelsArea } from '@/presentation/components';
import { usePanelManager } from '@/presentation/hooks';

export default function Home() {
  const { panels, openPanel, closePanel, reorderPanels } = usePanelManager();

  return (
    <main className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex h-[calc(100vh-80px)]">
        <DashboardSidebar panels={panels} onTogglePanel={openPanel} />
        <PanelsArea panels={panels} onClose={closePanel} onReorderPanels={reorderPanels} />
      </div>
    </main>
  );
}
