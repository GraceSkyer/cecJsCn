export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">CEC JS社区</h1>
            <p className="text-blue-100 text-sm mt-1">前端技术资讯分享平台</p>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#news" className="hover:text-blue-200 transition-colors">资讯</a>
            <a href="#tutorials" className="hover:text-blue-200 transition-colors">教程</a>
            <a href="#links" className="hover:text-blue-200 transition-colors">友链</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

