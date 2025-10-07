import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";

// 模拟资讯数据
const newsData = [
  {
    id: 1,
    title: "React 19 正式发布：全新的编译器和并发特性",
    description: "React 19 带来了全新的编译器优化，自动处理记忆化，以及改进的并发渲染能力，让应用性能提升40%。",
    category: "React",
    date: "2024-10-05",
    tags: ["React", "性能优化", "新特性"]
  },
  {
    id: 2,
    title: "TypeScript 5.3 新特性解析",
    description: "TypeScript 5.3 引入了导入属性、switch(true) 缩窄、以及更智能的类型推断，开发体验大幅提升。",
    category: "TypeScript",
    date: "2024-10-03",
    tags: ["TypeScript", "编程语言", "类型系统"]
  },
  {
    id: 3,
    title: "Vue 3.4 性能提升详解",
    description: "Vue 3.4 通过重构响应式系统，实现了更快的组件初始化和更新速度，内存占用降低了30%。",
    category: "Vue",
    date: "2024-10-01",
    tags: ["Vue", "性能", "响应式"]
  },
  {
    id: 4,
    title: "Vite 5.0：下一代前端构建工具",
    description: "Vite 5.0 带来了更快的冷启动速度，支持全新的 Rollup 4，以及改进的插件 API。",
    category: "工具",
    date: "2024-09-28",
    tags: ["Vite", "构建工具", "开发体验"]
  },
  {
    id: 5,
    title: "Web Components 在现代前端的应用实践",
    description: "探索 Web Components 如何与现代框架结合，实现真正的组件复用和跨框架开发。",
    category: "Web标准",
    date: "2024-09-25",
    tags: ["Web Components", "标准", "组件化"]
  },
  {
    id: 6,
    title: "Next.js 15 App Router 最佳实践",
    description: "深入了解 Next.js 15 的 App Router，掌握服务端组件、流式渲染等核心概念。",
    category: "Next.js",
    date: "2024-09-20",
    tags: ["Next.js", "SSR", "全栈"]
  }
];

const tutorials = [
  {
    id: 7,
    title: "从零开始学习 Tailwind CSS",
    description: "全面的 Tailwind CSS 教程，从基础到进阶，掌握实用级的原子化 CSS 开发。",
    category: "CSS",
    date: "2024-09-18",
    tags: ["Tailwind", "CSS", "教程"]
  },
  {
    id: 8,
    title: "JavaScript 异步编程完全指南",
    description: "深入理解 Promise、async/await、以及事件循环机制，写出更优雅的异步代码。",
    category: "JavaScript",
    date: "2024-09-15",
    tags: ["JavaScript", "异步", "进阶"]
  },
  {
    id: 9,
    title: "Zustand 状态管理实战教程",
    description: "轻量级的 React 状态管理库 Zustand，比 Redux 更简单，比 Context 更强大。",
    category: "状态管理",
    date: "2024-09-10",
    tags: ["React", "状态管理", "Zustand"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            前端技术资讯中心
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            汇聚最新的前端技术动态、深度教程和实战经验，与千万开发者一起成长
          </p>
        </section>

        {/* 最新资讯 */}
        <section id="news" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📰 最新资讯</h2>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              查看更多 →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </section>

        {/* 精选教程 */}
        <section id="tutorials" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📚 精选教程</h2>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              查看更多 →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <NewsCard key={tutorial.id} {...tutorial} />
            ))}
          </div>
        </section>

        {/* 统计数据 */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">技术文章</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">实战教程</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">社区成员</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">技术专家</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
