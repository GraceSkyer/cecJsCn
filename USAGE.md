# 使用指南

## 🎯 项目概述

这是一个基于 **Next.js 15** 构建的 CEC JS 社区前端技术资讯展示网站。

## 📦 已完成的功能

### ✅ 核心功能
- **响应式导航栏**: 包含网站标题和导航链接
- **资讯展示模块**: 以卡片形式展示前端技术资讯
- **教程展示模块**: 展示精选的前端技术教程
- **统计数据展示**: 社区规模和内容统计
- **友情链接**: 底部友情链接模块，包含主流前端技术网站

### 🎨 设计特点
- 现代化的渐变色设计
- 流畅的动画和过渡效果
- 完全响应式布局（支持手机、平板、桌面）
- 优雅的卡片悬浮效果
- 自定义滚动条样式
- 平滑滚动体验

## 🚀 如何运行

### 1. 安装依赖
```bash
cd cec-js-community
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

### 3. 访问网站
打开浏览器访问: **http://localhost:3000**

### 4. 构建生产版本
```bash
npm run build
npm start
```

## 📝 自定义修改

### 修改网站标题和描述
编辑 `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "你的网站标题",
  description: "你的网站描述",
};
```

### 添加或修改资讯
编辑 `app/page.tsx` 中的 `newsData` 数组:
```typescript
const newsData = [
  {
    id: 1,
    title: "你的资讯标题",
    description: "资讯描述",
    category: "分类",
    date: "2024-10-07",
    tags: ["标签1", "标签2"]
  },
  // 添加更多...
];
```

### 修改友情链接
编辑 `components/Footer.tsx` 中的 `friendLinks` 数组:
```typescript
const friendLinks: FriendLink[] = [
  { 
    name: '网站名称', 
    url: 'https://example.com', 
    description: '网站描述' 
  },
  // 添加更多...
];
```

### 修改主题颜色
编辑 `app/globals.css` 中的颜色变量，或直接修改组件中的 Tailwind 类名。

## 📱 响应式断点

- **手机**: < 768px
- **平板**: 768px - 1024px
- **桌面**: > 1024px

## 🔧 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 15.x | React 框架 |
| React | 19.x | UI 库 |
| TypeScript | 5.x | 类型安全 |
| Tailwind CSS | 4.x | 样式框架 |

## 📂 目录结构

```
cec-js-community/
├── app/                    
│   ├── layout.tsx         # 根布局，包含元数据
│   ├── page.tsx           # 首页，包含所有内容
│   └── globals.css        # 全局样式
├── components/            
│   ├── Header.tsx         # 顶部导航栏
│   ├── NewsCard.tsx       # 资讯卡片组件
│   └── Footer.tsx         # 页脚和友情链接
├── public/               # 静态资源
├── package.json          # 项目依赖
└── README.md            # 项目说明
```

## 🎯 下一步建议

如果要进一步扩展这个项目，可以考虑：

1. **数据库集成**: 使用 MongoDB 或 PostgreSQL 存储资讯数据
2. **CMS 系统**: 集成 Strapi 或 Sanity 作为内容管理系统
3. **用户系统**: 添加登录、评论功能
4. **搜索功能**: 实现资讯搜索和筛选
5. **深色模式**: 完善深色主题切换
6. **国际化**: 支持多语言
7. **RSS 订阅**: 添加 RSS feed
8. **分享功能**: 社交媒体分享按钮

## 📞 技术支持

如有问题，请参考 [Next.js 官方文档](https://nextjs.org/docs) 或在 GitHub 提交 Issue。

---

**祝你使用愉快！** 🎉

