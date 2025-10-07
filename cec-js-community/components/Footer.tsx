interface FriendLink {
  name: string;
  url: string;
  description?: string;
}

const friendLinks: FriendLink[] = [
  { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', description: 'Web开发权威文档' },
  { name: 'React 官方文档', url: 'https://react.dev/', description: 'React官方文档' },
  { name: 'Vue.js', url: 'https://cn.vuejs.org/', description: 'Vue.js中文文档' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/', description: 'TypeScript官网' },
  { name: 'Node.js', url: 'https://nodejs.org/', description: 'Node.js官网' },
  { name: 'GitHub', url: 'https://github.com/', description: '开源代码托管平台' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16" id="links">
      <div className="container mx-auto px-4 py-12">
        {/* 友情链接 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-6">友情链接</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {friendLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                title={link.description}
              >
                <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300">
                  {link.name}
                </span>
                {link.description && (
                  <span className="text-xs text-gray-500 mt-1 hidden md:block">
                    {link.description}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* 底部信息 */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} CEC JS社区. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            专注于前端技术资讯分享 | JavaScript · TypeScript · React · Vue
          </p>
        </div>
      </div>
    </footer>
  );
}

