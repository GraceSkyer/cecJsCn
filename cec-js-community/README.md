# CEC JS社区 - 前端技术资讯分享平台

这是一个基于 Next.js 15 构建的前端技术资讯展示网站，专注于 JavaScript 生态系统的最新动态和技术分享。

## 🚀 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **字体**: Geist Sans & Geist Mono

## ✨ 功能特性

- 📰 最新前端技术资讯展示
- 📚 精选技术教程推荐
- 🔗 友情链接模块
- 📱 完全响应式设计
- 🎨 现代化 UI 设计

## 🛠️ 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

## 📁 项目结构

```
cec-js-community/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Header.tsx         # 头部导航
│   ├── NewsCard.tsx       # 资讯卡片
│   └── Footer.tsx         # 页脚和友链
└── public/               # 静态资源

```

## 🎨 组件说明

### Header
网站头部导航组件，包含网站标题和导航链接。

### NewsCard
资讯卡片组件，用于展示技术资讯和教程，支持：
- 分类标签
- 发布日期
- 标签系统
- 悬浮效果

### Footer
页脚组件，包含：
- 友情链接展示
- 版权信息
- 社区简介

## 📝 自定义内容

### 修改资讯数据

编辑 `app/page.tsx` 中的 `newsData` 和 `tutorials` 数组来更新资讯内容。

### 修改友情链接

编辑 `components/Footer.tsx` 中的 `friendLinks` 数组来更新友情链接。

## 📄 License

MIT License

---

**CEC JS社区** - 专注于前端技术资讯分享 🚀
