'use client';

import { useState, useMemo, useEffect } from 'react';
import { mockArticles, Article, REPORTED_COMPANIES, COUNTRIES } from '@/data/mockArticles';
import FeaturedArticles from '@/components/FeaturedArticles';
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
  const [expandedNewsletters, setExpandedNewsletters] = useState<Set<string>>(() => {
    // Default: first 2 newsletters expanded
    return new Set(newsletters.slice(0, 2).map(nl => nl.id));
  });

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

  // Check if any filters are active
  const hasActiveFilters = useMemo(() => {
    return activeFilters.companies.length > 0 ||
           activeFilters.sources.length > 0 ||
           activeFilters.topics.length > 0 ||
           activeFilters.countries.length > 0;
  }, [activeFilters]);

  // Group articles by newsletter date
  const articlesByNewsletter = useMemo(() => {
    const grouped: Record<string, Article[]> = {};
    filteredArticles.forEach(article => {
      // Match articles to newsletters by date (same day)
      const articleDate = new Date(article.publishedAt).toISOString().split('T')[0];
      const newsletter = newsletters.find(nl => {
        const nlDate = new Date(nl.date).toISOString().split('T')[0];
        return nlDate === articleDate;
      });
      if (newsletter) {
        if (!grouped[newsletter.id]) {
          grouped[newsletter.id] = [];
        }
        grouped[newsletter.id].push(article);
      }
    });
    return grouped;
  }, [filteredArticles]);

  // Combine newsletters and articles, sorted by date
  // Hide newsletters when any filter is active
  const combinedFeed = useMemo(() => {
    if (hasActiveFilters) {
      // When filters are active, only show articles
      return filteredArticles.map(art => ({ type: 'article' as const, data: art, date: art.publishedAt }))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    // Group newsletters with their articles
    const items: Array<{ type: 'newsletter' | 'article'; data: any; date: string; newsletterId?: string }> = [];
    
    newsletters.forEach(newsletter => {
      items.push({ type: 'newsletter' as const, data: newsletter, date: newsletter.date, newsletterId: newsletter.id });
      // Add articles for this newsletter if expanded
      if (expandedNewsletters.has(newsletter.id) && articlesByNewsletter[newsletter.id]) {
        articlesByNewsletter[newsletter.id].forEach(article => {
          items.push({ type: 'article' as const, data: article, date: article.publishedAt, newsletterId: newsletter.id });
        });
      }
    });
    
    return items.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [filteredArticles, hasActiveFilters, expandedNewsletters, articlesByNewsletter]);

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

  const toggleNewsletter = (newsletterId: string) => {
    setExpandedNewsletters(prev => {
      const next = new Set(prev);
      if (next.has(newsletterId)) {
        next.delete(newsletterId);
      } else {
        next.add(newsletterId);
      }
      return next;
    });
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
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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

      {/* Featured Articles */}
      <FeaturedArticles articles={mockArticles} />

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
                      const isExpanded = expandedNewsletters.has(item.data.id);
                      const articleCount = articlesByNewsletter[item.data.id]?.length || 0;
                      return (
                        <div key={item.data.id} className="mb-3">
                          <NewsletterCard 
                            newsletter={item.data} 
                            isExpanded={isExpanded}
                            articleCount={articleCount}
                            onToggle={() => toggleNewsletter(item.data.id)}
                          />
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
            <div className="space-y-4 h-[910px] overflow-y-auto sticky top-[140px]">
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
