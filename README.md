# React Demo 0422

基于 Next.js + DNDKit 的可拖拽面板 Demo 项目，采用 DDD（领域驱动设计）架构。

## 技术栈

- **框架**: Next.js 15 + React 19
- **样式**: Tailwind CSS
- **拖拽库**: @dnd-kit/core + @dnd-kit/sortable
- **图标**: Heroicons
- **包管理器**: pnpm
- **语言**: TypeScript
- **测试**: Vitest + Testing Library

## 项目结构

```
src/
├── app/                        # Next.js App 目录
│   ├── globals.css            # 全局样式
│   ├── layout.tsx             # 根布局
│   └── page.tsx               # 主页面
├── domain/                     # 领域层（DDD）
│   ├── panel/                 # 面板领域
│   │   ├── index.ts           # Panel 实体、PanelDomainService
│   │   └── panel.test.ts      # 领域服务测试
│   └── index.ts               # 领域层导出
├── infrastructure/             # 基础设施层（DDD）
│   ├── icons/                 # 图标组件
│   │   └── index.ts           # 图标映射配置
│   └── index.ts               # 基础设施层导出
├── presentation/               # 展示层（DDD）
│   ├── components/            # UI 组件
│   │   ├── DashboardHeader/   # 页面头部组件
│   │   ├── DashboardSidebar/  # 左侧图标栏组件
│   │   ├── DragOverlayPanel/  # 拖拽覆盖层组件
│   │   ├── PanelsArea/        # 面板区域组件
│   │   ├── SortablePanel/     # 可排序面板组件
│   │   ├── SidebarIcon/       # 侧边栏图标组件（含测试）
│   │   ├── PanelIcon/         # 面板图标组件
│   │   └── index.ts           # 组件导出
│   ├── hooks/                 # 自定义 Hooks
│   │   ├── usePanelManager/   # 面板管理 Hook（含测试）
│   │   └── index.ts           # Hooks 导出
│   └── index.ts               # 展示层导出
└── test/                       # 测试配置
    └── setup.ts               # 测试初始化文件
```

## DDD 架构说明

本项目采用经典的三层架构：

| 层级 | 职责 | 示例 |
|------|------|------|
| **Domain** | 核心业务逻辑、实体定义 | Panel 实体、PanelDomainService |
| **Infrastructure** | 外部依赖实现 | 图标组件、API 服务 |
| **Presentation** | UI 展示、用户交互 | React 组件、自定义 Hooks |

## 功能特性

1. **可拖拽面板**: 使用 @dnd-kit 实现面板的水平拖拽排序
2. **面板开关**: 点击左侧图标可打开/关闭对应面板
3. **响应式布局**: 左侧固定图标栏，右侧可滚动面板区
4. **拖拽动画**: 拖拽时显示缩放和阴影效果
5. **SSR 兼容**: 客户端渲染检测，避免水合错误

## 开发命令

```bash
pnpm dev       # 启动开发服务器 (http://localhost:3000)
pnpm build     # 构建生产版本
pnpm start     # 启动生产服务器 (http://localhost:3000)
pnpm lint      # 运行 ESLint 检查
pnpm test      # 运行单元测试
pnpm test:ui   # 运行测试 UI 模式
pnpm test:coverage  # 运行测试并生成覆盖率报告
```

## 组件说明

### 布局组件

| 组件 | 描述 |
|------|------|
| `DashboardHeader` | 页面头部，包含标题和副标题 |
| `DashboardSidebar` | 左侧固定图标栏，控制面板开关 |
| `PanelsArea` | 右侧可滚动面板区域，包含拖拽逻辑 |

### 面板组件

| 组件 | 描述 |
|------|------|
| `SortablePanel` | 可拖拽排序的面板组件 |
| `SidebarIcon` | 侧边栏图标按钮 |
| `PanelIcon` | 面板图标渲染组件 |
| `DragOverlayPanel` | 拖拽时的覆盖层预览 |

### Hooks

| Hook | 描述 |
|------|------|
| `usePanelManager` | 面板状态管理（开关、排序） |

## 图标说明

使用的 Heroicons 图标：
- `MapIcon` - 地图面板
- `MusicalNoteIcon` - 音乐面板
- `ChatBubbleBottomCenterIcon` - 聊天面板
- `XMarkIcon` - 关闭按钮

## 测试

当前测试覆盖：
- `PanelDomainService` - 8 个测试用例
- `usePanelManager` - 6 个测试用例
- `SidebarIcon` - 5 个测试用例

运行测试：
```bash
pnpm test -- --run
```

## 效果预览

参考 [doc/s.png](./doc/s.png)

## 运行示例

开发环境：
```bash
pnpm dev
# 访问 http://localhost:3000
```

生产环境：
```bash
pnpm build
pnpm start
# 访问 http://localhost:3000
```
