'use client';

import { Article } from '@/data/mockArticles';
import { formatTimeDisplay } from '@/lib/timeUtils';
import Link from 'next/link';

interface FeaturedArticlesProps {
  articles: Article[];
}

export default function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  // Get the three featured articles by their IDs or URLs
  const featuredIds = ['9', 'featured-ki-aussendienst', 'newsletter-5'];
  const featuredArticles = featuredIds
    .map(id => articles.find(a => a.id === id))
    .filter(Boolean) as Article[];

  if (featuredArticles.length === 0) return null;

  return (
    <div className="w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredArticles.map((article) => (
            <Link
              key={article.id}
              href={`https://etailment.de/news/stories/${article.id === '9' 
                ? 'cybersecurity-chatbots-koennen-einfallstore-sein-25317'
                : article.id === 'featured-ki-aussendienst'
                ? 'start-ups-ki-brieft-den-aussendienst-25315'
                : 'anzeige-grube-kg-so-sichert-ein-traditionsunternehmen-maximale-online-verfuegbarkeit-und-resilienten-handel-25319'
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg border border-slate-200 hover:border-red-500 hover:shadow-lg transition-all bg-white"
            >
              <div className="p-3 h-full flex flex-col">
                {/* Title */}
                <h2 className="text-xs font-bold text-red-600 mb-1.5 group-hover:text-red-700 transition-colors">
                  {article.title}
                </h2>

                {/* Summary */}
                <p className="text-[11px] text-slate-600">
                  {article.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

