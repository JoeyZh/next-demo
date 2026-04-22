/**
 * 图标组件配置
 */
import {
  MapIcon,
  MusicalNoteIcon,
  ChatBubbleBottomCenterIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

import type { PanelIconType } from '@/domain/panel';

export const iconMap: Record<PanelIconType, typeof MapIcon> = {
  map: MapIcon,
  music: MusicalNoteIcon,
  chat: ChatBubbleBottomCenterIcon,
};

export { XMarkIcon };
