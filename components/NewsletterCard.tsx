'use client';

import { Newsletter } from '@/data/mockNewsletters';

interface NewsletterCardProps {
  newsletter: Newsletter;
  isExpanded: boolean;
  articleCount: number;
  onToggle: () => void;
}

export default function NewsletterCard({ newsletter, isExpanded, articleCount, onToggle }: NewsletterCardProps) {
  return (
    <article className="bg-red-600 text-white rounded-lg border-2 border-red-600 p-3 hover:border-red-700 hover:shadow-md transition-all">
      <div className="flex items-start justify-between gap-3">
        <button
          onClick={onToggle}
          className="flex-1 min-w-0 text-left cursor-pointer"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div className="text-xs font-medium">
              MORNING BRIEFING von {newsletter.dateLabel} – {newsletter.itemCount} Meldungen
            </div>
            <svg 
              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <h2 className="text-xs font-semibold">
            {newsletter.title}
          </h2>
        </button>
        <a
          href={newsletter.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-shrink-0 text-white hover:text-red-100 transition-colors"
          aria-label="Open newsletter"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </article>
  );
}

