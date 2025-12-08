'use client';

import { useState, useMemo, useEffect } from 'react';
import { mockArticles, Article, REPORTED_COMPANIES, COUNTRIES } from '@/data/mockArticles';
import MarketPulse from '@/components/MarketPulse';
import StoryCard from '@/components/StoryCard';
import FilterDrawer from '@/components/FilterDrawer';
import InsightsGrid from '@/components/InsightsGrid';
import InsightsDashboard from '@/components/insights/InsightsDashboard';
import InsightModal from '@/components/insights/InsightModal';
import { insights } from '@/data/mockInsights';
import NewsletterCard from '@/components/NewsletterCard';
import { newsletters } from '@/data/mockNewsletters';
import CompanyIcons from '@/components/CompanyIcons';
import Image from 'next/image';

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<{
    companies: string[];
    sources: string[];
    topics: string[];
    countries: string[];
  }>({
    companies: [],
    sources: [],
    topics: [],
    countries: [],
  });
  const [highlightTag, setHighlightTag] = useState<string | null>(null);
  const [selectedInsight, setSelectedInsight] = useState<typeof insights[0] | null>(null);

  // Handle insight modal from sidebar
  useEffect(() => {
    const handleOpenInsight = (e: CustomEvent) => {
      setSelectedInsight(e.detail);
    };
    
    window.addEventListener('openInsight', handleOpenInsight as EventListener);
    return () => {
      window.removeEventListener('openInsight', handleOpenInsight as EventListener);
    };
  }, []);

  // Extract distinct values from articles
  const companies = useMemo(() => {
    const all = mockArticles.flatMap((a) => a.companies);
    return Array.from(new Set(all)).sort();
  }, []);

  const sources = useMemo(() => {
    const all = mockArticles.map((a) => a.source);
    return Array.from(new Set(all)).sort();
  }, []);

  const topics = useMemo(() => {
    const all = mockArticles.flatMap((a) => a.topics);
    return Array.from(new Set(all)).sort();
  }, []);

  // Filter articles
  const filteredArticles = useMemo(() => {
    let result = [...mockArticles];

    if (activeFilters.companies.length > 0) {
      result = result.filter((article) =>
        article.companies.some((c) => activeFilters.companies.includes(c))
      );
    }

    if (activeFilters.sources.length > 0) {
      result = result.filter((article) =>
        activeFilters.sources.includes(article.source)
      );
    }

    if (activeFilters.topics.length > 0) {
      result = result.filter((article) =>
        article.topics.some((t) => activeFilters.topics.includes(t))
      );
    }

    if (activeFilters.countries.length > 0) {
      result = result.filter((article) =>
        article.countries.some((c) => activeFilters.countries.includes(c))
      );
    }

    return result;
  }, [activeFilters]);

  // Combine newsletters and articles, sorted by date
  const combinedFeed = useMemo(() => {
    const items: Array<{ type: 'newsletter' | 'article'; data: any; date: string }> = [
      ...newsletters.map(nl => ({ type: 'newsletter' as const, data: nl, date: nl.date })),
      ...filteredArticles.map(art => ({ type: 'article' as const, data: art, date: art.publishedAt }))
    ];
    
    return items.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [filteredArticles]);

  const handleTagClick = (tag: string) => {
    setHighlightTag(highlightTag === tag ? null : tag);
  };

  const handleCompanyClick = (company: string) => {
    setActiveFilters(prev => {
      const companies = prev.companies.includes(company)
        ? prev.companies.filter(c => c !== company)
        : [...prev.companies, company];
      return { ...prev, companies };
    });
  };

  const isHighlighted = (article: Article) => {
    if (!highlightTag) return false;
    return article.tags.includes(highlightTag);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Red Banner */}
      <header className="bg-red-600 text-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left: Logo and Tagline */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold tracking-tight mb-1">
                e<span className="text-red-300">.</span>tailment
              </h1>
              <p className="text-sm text-red-100">
                Das Digital Commerce Magazin von <span className="font-semibold text-white">Der Handel</span>
              </p>
            </div>
            
            {/* Right: Social Icons, Login, Search */}
            <div className="flex items-center gap-4">
              {/* Social Media Icons */}
              <div className="hidden md:flex items-center gap-3">
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Xing">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.188 0c-.517 0-.741.325-.927 1.026l-5.755 13.197c-.185.7-.349 1.026-.84 1.026h-2.641c.185 0 .37-.325.37-.7 0-.35.185-.7.37-1.05L14.788 1.4c.185-.35.37-.7.555-1.05C15.328.35 15.328 0 14.788 0H9.22c-.37 0-.555.325-.74.7L2.641 14.252c-.185.35-.37.7-.37 1.05 0 .35.185.7.37.7h2.641c.37 0 .555-.325.74-.7l5.755-12.847c.185-.35.37-.7.555-1.05.185-.35.555-.7.925-.7h4.567zm-8.844 18.2c-.37 0-.555.325-.74.7l-1.665 3.85c-.185.35-.37.7-.37 1.05 0 .35.185.7.37.7h2.641c.37 0 .555-.325.74-.7l1.665-3.85c.185-.35.37-.7.37-1.05 0-.35-.185-.7-.37-.7H9.344z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="RSS">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.465 10.948 4.905 11.413 10.952h4.817c-.467-7.448-6.8-13.763-14.23-13.763zm0-7.18v4.812c9.88.956 17.912 8.978 18.868 18.858h4.817c-.957-11.848-10.829-21.67-22.685-21.67z"/>
                  </svg>
                </a>
              </div>
              
              {/* Login */}
              <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden sm:inline text-sm font-medium">LOGIN</span>
              </button>
              
              {/* Search */}
              <button className="hover:opacity-80 transition-opacity" aria-label="Search">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden ml-2 hover:opacity-80 transition-opacity"
                aria-label="Filter"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MarketPulse */}
      <MarketPulse articles={mockArticles} />

      {/* Main Content - 3 Column Layout */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-4">
          {/* Left Column: Filters */}
          <div className="hidden lg:block">
            <FilterDrawer
              isOpen={isFilterOpen}
              onToggle={() => setIsFilterOpen(!isFilterOpen)}
              companies={companies}
              sources={sources}
              topics={topics}
              countries={COUNTRIES}
              activeFilters={activeFilters}
              onChange={setActiveFilters}
            />
          </div>

          {/* Mobile Filter Drawer */}
          <div className="lg:hidden">
            <FilterDrawer
              isOpen={isFilterOpen}
              onToggle={() => setIsFilterOpen(!isFilterOpen)}
              companies={companies}
              sources={sources}
              topics={topics}
              countries={COUNTRIES}
              activeFilters={activeFilters}
              onChange={setActiveFilters}
            />
          </div>

          {/* Middle Column: Newsfeed */}
          <div className="flex-1 min-w-0">
            <section>
              <div className="mb-3">
                <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  Newsfeed
                </h2>
              </div>
              <div>
                {combinedFeed.length > 0 ? (
                  combinedFeed.map((item, index) => {
                    if (item.type === 'newsletter') {
                      return (
                        <div key={item.data.id} className="mb-3">
                          <NewsletterCard newsletter={item.data} />
                        </div>
                      );
                    } else {
                      // Check if next item is also an article (not newsletter) to show divider
                      const nextItem = combinedFeed[index + 1];
                      const showDivider = nextItem && nextItem.type === 'article';
                      return (
                        <StoryCard
                          key={item.data.id}
                          article={item.data}
                          onTagClick={handleTagClick}
                          onCompanyClick={handleCompanyClick}
                          highlight={isHighlighted(item.data)}
                          showDivider={showDivider}
                        />
                      );
                    }
                  })
                ) : (
                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 text-center">
                    <p className="text-slate-500">Keine Artikel gefunden. Bitte Filter anpassen.</p>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Right Column: Insights Dashboard */}
          <div className="hidden xl:block w-80 flex-shrink-0">
            <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
              {/* Zahlen des Tages */}
              <section>
                <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Zahlen des Tages
                </h2>
                <div className="space-y-2">
                  {insights.filter(i => !i.isTrend).slice(0, 3).map((insight) => (
                    <div
                      key={insight.id}
                      onClick={() => {
                        const event = new CustomEvent('openInsight', { detail: insight });
                        window.dispatchEvent(event);
                      }}
                      className="bg-white rounded-lg border-2 border-red-500 p-3 hover:border-red-600 hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs font-semibold text-slate-900 line-clamp-1">
                            {insight.title}
                          </h3>
                        </div>
                        {insight.trend !== undefined && (
                          <span className={`text-xs font-semibold flex-shrink-0 ml-1 ${
                            insight.trend > 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {insight.trend > 0 ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-lg font-bold text-red-600">
                          {insight.value}
                        </div>
                        {insight.companies && insight.companies.length > 0 && (
                          <CompanyIcons companies={insight.companies} />
                        )}
                      </div>
                      <p className="text-[10px] text-slate-600 line-clamp-2">
                        {insight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Trends */}
              <section>
                <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Trends
                </h2>
                <div className="space-y-2">
                  {insights.filter(i => i.isTrend).slice(0, 4).map((insight) => (
                    <div
                      key={insight.id}
                      onClick={() => {
                        const event = new CustomEvent('openInsight', { detail: insight });
                        window.dispatchEvent(event);
                      }}
                      className="bg-white rounded-lg border border-slate-300 p-2.5 hover:border-slate-400 hover:shadow-sm transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-[10px] font-semibold text-slate-700 line-clamp-1">
                            {insight.title}
                          </h3>
                        </div>
                        {insight.companies && insight.companies.length > 0 && (
                          <CompanyIcons companies={insight.companies} />
                        )}
                      </div>
                      <div className="text-base font-bold text-slate-700 mb-0.5">
                        {insight.value}
                      </div>
                      <p className="text-[10px] text-slate-500 line-clamp-2">
                        {insight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Full Insights Dashboard below on smaller screens */}
        <section className="xl:hidden mt-8">
          <InsightsDashboard />
        </section>
      </div>

      {/* Insight Modal */}
      <InsightModal
        insight={selectedInsight}
        onClose={() => setSelectedInsight(null)}
      />
    </div>
  );
}
