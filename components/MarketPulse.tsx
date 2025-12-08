'use client';

import { Article } from '@/data/mockArticles';
import { formatTimeDisplay } from '@/lib/timeUtils';

interface MarketPulseProps {
  articles: Article[];
}

export default function MarketPulse({ articles }: MarketPulseProps) {
  const recentArticles = articles.slice(0, 6);

  return (
    <div className="w-full bg-slate-100 border-b border-slate-200 py-1.5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
          {recentArticles.map((article) => (
            <div
              key={article.id}
              className="flex-shrink-0 bg-white rounded border-2 border-red-500 px-2 py-1.5 min-w-[200px] hover:border-red-600 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <h3 className="text-xs font-semibold text-slate-900 line-clamp-1 flex-1">
                  {article.title}
                </h3>
                <div className="flex items-center gap-1 text-[10px] text-slate-500 flex-shrink-0">
                  <span>{article.companies[0] || 'N/A'}</span>
                  <span>•</span>
                  <span title={formatTimeDisplay(article.publishedAt).tooltip}>
                    {formatTimeDisplay(article.publishedAt).display}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

