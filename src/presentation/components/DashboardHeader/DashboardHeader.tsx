import React from 'react';

interface DashboardHeaderProps {
  title?: string;
  subtitle?: string;
}

export function DashboardHeader({
  title = 'Demo Dashboard',
  subtitle = 'Drag panel headers to reorder, click icons to toggle',
}: DashboardHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
    </header>
  );
}
