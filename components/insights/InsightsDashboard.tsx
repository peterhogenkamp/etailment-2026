'use client';

import { useState, useEffect } from 'react';
import { insights } from '@/data/mockInsights';
import InsightCard from './InsightCard';
import InsightModal from './InsightModal';

export default function InsightsDashboard() {
  const [selectedInsight, setSelectedInsight] = useState<typeof insights[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Fade-in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div 
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {insights.map((insight) => (
          <InsightCard
            key={insight.id}
            insight={insight}
            onClick={() => setSelectedInsight(insight)}
          />
        ))}
      </div>

      <InsightModal
        insight={selectedInsight}
        onClose={() => setSelectedInsight(null)}
      />
    </>
  );
}

