'use client';

import { Article } from '@/data/mockArticles';
import { formatTimeDisplay } from '@/lib/timeUtils';

interface StoryCardProps {
  article: Article;
  onTagClick?: (tag: string) => void;
  onCompanyClick?: (company: string) => void;
  highlight?: boolean;
  showDivider?: boolean;
}

export default function StoryCard({ article, onTagClick, onCompanyClick, highlight = false, showDivider = true }: StoryCardProps) {
  // Check if company and source are the same (press releases)
  const isPressRelease = article.companies.length > 0 && 
    article.companies.some(company => company === article.source);
  
  // Only show source if it's different from companies
  const shouldShowSource = article.source && !isPressRelease;

  return (
    <>
      <article
        className={`
          bg-white rounded-lg p-3 transition-all
          ${highlight 
            ? 'ring-2 ring-red-100' 
            : 'hover:bg-slate-50'
          }
        `}
      >
        <h2 className="text-xs font-semibold text-slate-900 mb-1">
          {article.title}
        </h2>
        
        <p className="text-xs text-slate-600 mb-2">
          {article.summary}
        </p>

        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 flex-wrap">
          <span title={formatTimeDisplay(article.originalPublishedAt || article.publishedAt).tooltip}>
            {formatTimeDisplay(article.originalPublishedAt || article.publishedAt).display}
          </span>
          {article.originalPublishedAt && article.originalPublishedAt !== article.publishedAt && (
            <>
              <span className="text-slate-300">•</span>
              <span 
                className="text-slate-400 italic" 
                title={formatTimeDisplay(article.publishedAt).tooltip}
              >
                Newsletter: {formatTimeDisplay(article.publishedAt).display}
              </span>
            </>
          )}
          {article.companies.length > 0 && (
            <>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1 flex-wrap">
                {article.companies.map((company, idx) => (
                  <span key={company}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onCompanyClick?.(company);
                      }}
                      className="hover:underline cursor-pointer"
                    >
                      {company}
                    </button>
                    {idx < article.companies.length - 1 && <span>, </span>}
                  </span>
                ))}
              </span>
            </>
          )}
          {shouldShowSource && (
            <>
              <span className="text-slate-300">•</span>
              <a
                href={`https://${article.source.toLowerCase().replace(/\s+/g, '')}.de`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-0.5 hover:underline"
              >
                <span>{article.source}</span>
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </>
          )}
          {article.countries.length > 0 && (
            <>
              <span className="text-slate-300">•</span>
              <span>{article.countries.join(', ')}</span>
            </>
          )}
          {article.tags.length > 0 && (
            <>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1 flex-wrap">
                {article.tags.slice(0, 3).map((tag, idx) => (
                  <button
                    key={tag}
                    onClick={(e) => {
                      e.stopPropagation();
                      onTagClick?.(tag);
                    }}
                    className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </span>
            </>
          )}
        </div>
      </article>
      {showDivider && <div className="border-b border-slate-200 my-2" />}
    </>
  );
}

