'use client';

import { Article } from '@/data/mockArticles';

interface InsightsGridProps {
  articles: Article[];
}

export default function InsightsGrid({ articles }: InsightsGridProps) {
  const feeArticles = articles.filter((a) => 
    a.tags.some((tag) => tag.toLowerCase().includes('fee') || tag.toLowerCase().includes('gebühren'))
  ).length;

  const returnArticles = articles.filter((a) =>
    a.tags.some((tag) => tag.toLowerCase().includes('return') || tag.toLowerCase().includes('retour'))
  ).length;

  const fundingArticles = articles.filter((a) =>
    Object.keys(a.metrics || {}).some((key) => 
      key.toLowerCase().includes('funding') || 
      key.toLowerCase().includes('investment') ||
      key.toLowerCase().includes('revenue')
    )
  ).length;

  const aiArticles = articles.filter((a) =>
    a.tags.some((tag) => 
      tag.toLowerCase().includes('ai') || 
      tag.toLowerCase().includes('ki') ||
      tag.toLowerCase().includes('chatbot') ||
      tag.toLowerCase().includes('automation')
    ) || a.topics.includes('AI Tools')
  ).length;

  const insights = [
    {
      title: 'Fee Tracker',
      description: 'Artikel zu Gebühren und Kosten',
      count: feeArticles,
      color: 'blue'
    },
    {
      title: 'Returns Monitor',
      description: 'Retouren und Rückgabepolitik',
      count: returnArticles,
      color: 'orange'
    },
    {
      title: 'Funding & M&A',
      description: 'Investitionen und Unternehmensverkäufe',
      count: fundingArticles,
      color: 'green'
    },
    {
      title: 'AI & Tools',
      description: 'KI-Technologien und Automatisierung',
      count: aiArticles,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'orange':
        return 'bg-orange-50 border-orange-200 text-orange-700';
      case 'green':
        return 'bg-green-50 border-green-200 text-green-700';
      case 'purple':
        return 'bg-purple-50 border-purple-200 text-purple-700';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {insights.map((insight) => (
        <div
          key={insight.title}
          className={`bg-white rounded-xl shadow-sm border p-6 ${getColorClasses(insight.color)}`}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-1">
            {insight.title}
          </h3>
          <p className="text-xs text-slate-600 mb-3">
            {insight.description}
          </p>
          <div className="text-3xl font-bold">
            {insight.count}
          </div>
        </div>
      ))}
    </div>
  );
}

