'use client';

import React from 'react';

interface PanelContentProps {
  isOpen: boolean;
  panelName: string;
}

export function PanelContent({ isOpen: _isOpen, panelName }: PanelContentProps) {
  // if (!isOpen) {
  //   return null;
  // }

  return (
    <div className="flex-1 p-4 overflow-auto min-h-[200px]">
      <p className="text-gray-600 text-sm">Content for {panelName}</p>
    </div>
  );
}
