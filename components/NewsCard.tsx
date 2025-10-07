interface NewsCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
}

export default function NewsCard({ title, description, category, date, tags }: NewsCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
            {category}
          </span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

