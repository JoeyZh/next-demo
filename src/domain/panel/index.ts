/**
 * 面板实体 - 定义面板的基本属性和行为
 */
export interface Panel {
  id: string;
  name: string;
  isOpen: boolean;
  order: number;
  iconType: PanelIconType;
}

export type PanelIconType = 'map' | 'music' | 'chat';

/**
 * 面板仓储接口 - 定义面板数据操作契约
 */
export interface PanelRepository {
  getPanels(): Panel[];
  updatePanel(panel: Panel): void;
  togglePanel(id: string): void;
  reorderPanels(newOrder: string[]): void;
}

/**
 * 面板领域服务 - 处理面板业务逻辑
 */
export class PanelDomainService {
  private panels: Panel[];

  constructor(initialPanels: Panel[]) {
    this.panels = initialPanels;
  }

  getPanels(): Panel[] {
    return [...this.panels].sort((a, b) => a.order - b.order);
  }

  togglePanel(id: string): Panel[] {
    const index = this.panels.findIndex((p) => p.id === id);
    if (index === -1) return this.panels;

    this.panels[index] = {
      ...this.panels[index],
      isOpen: !this.panels[index].isOpen,
    };

    return [...this.panels];
  }

  reorderPanels(newOrder: string[]): Panel[] {
    const panelMap = new Map(this.panels.map((p) => [p.id, p]));
    this.panels = newOrder.map((id, index) => ({
      ...panelMap.get(id)!,
      order: index,
    }));
    return [...this.panels];
  }
}
