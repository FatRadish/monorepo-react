# AutoFetch

一个基于 Monorepo 架构的模版项目。

## 技术栈

### 前端 (apps/web)
- React 19 + TypeScript
- Vite (rolldown-vite)
- React Router v7
- Zustand (状态管理)
- TanStack Query (数据请求)
- UnoCSS (原子化 CSS)

### 后端 (apps/backend)
- Node.js + TypeScript
- Express 5
- Prisma + SQLite
- Winston (日志)
- Cron (任务调度)
- Zod (数据验证)

### 工具链
- pnpm (包管理)
- Turborepo (Monorepo 构建)
- ESLint + Prettier (代码规范)
- Vitest (测试)

## 项目结构

```
autoFetch/
├── apps/
│   ├── backend/          # 后端服务
│   └── web/              # 前端应用
├── packages/
│   ├── eslint-config/    # 共享 ESLint 配置
│   └── typescript-config/ # 共享 TypeScript 配置
├── turbo.json            # Turborepo 配置
├── pnpm-workspace.yaml   # pnpm 工作区配置
└── package.json
```

## 快速开始

### 环境要求

- Node.js 20+
- pnpm 10+

### 安装依赖

```bash
pnpm install
```

### 配置环境变量

```bash
# 后端配置
cp apps/backend/.env.example apps/backend/.env
# 根据需要修改 .env 文件
```

### 数据库初始化

```bash
cd apps/backend
pnpm prisma:generate
pnpm prisma:migrate
```

### 启动开发服务

```bash
# 在项目根目录执行，同时启动前后端
pnpm dev
```

- 前端: http://localhost:5173
- 后端: http://localhost:3000

### 构建项目

```bash
pnpm build
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动所有服务的开发模式 |
| `pnpm build` | 构建所有项目 |
| `pnpm --filter backend dev` | 仅启动后端 |
| `pnpm --filter web dev` | 仅启动前端 |

### 后端专属命令

```bash
cd apps/backend
pnpm prisma:studio    # 打开 Prisma Studio
pnpm prisma:migrate   # 运行数据库迁移
pnpm test             # 运行测试
```

## 许可证

[MIT](./LICENSE)
