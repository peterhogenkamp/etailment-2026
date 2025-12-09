'use client';

import { Newsletter } from '@/data/mockNewsletters';

interface NewsletterCardProps {
  newsletter: Newsletter;
}

export default function NewsletterCard({ newsletter }: NewsletterCardProps) {
  return (
    <article className="bg-red-600 text-white rounded-lg border-2 border-red-600 p-3 hover:border-red-700 hover:shadow-md transition-all">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="text-xs font-medium mb-1.5">
            MORNING BRIEFING von {newsletter.dateLabel} – {newsletter.itemCount} Meldungen
          </div>
          <h2 className="text-xs font-semibold">
            {newsletter.title}
          </h2>
        </div>
        <a
          href={newsletter.url}
          target="_blank"
          rel="noopener noreferrer"
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

