'use client';

import { useState, useEffect, useRef } from 'react';
import { Insight } from '@/data/mockInsights';

interface InsightCardProps {
  insight: Insight;
  onClick: () => void;
}

export default function InsightCard({ insight, onClick }: InsightCardProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if card is visible for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating) {
            setIsAnimating(true);
            animateValue();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateValue = () => {
    const valueStr = insight.value.replace(/[^0-9.-]/g, '');
    const numericValue = parseFloat(valueStr);
    
    // For non-numeric values (like "2–4 Tage"), show immediately
    if (isNaN(numericValue) || insight.value.includes('Tage')) {
      setDisplayValue(insight.value);
      return;
    }

    const duration = 1000; // 1 second
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (numericValue - startValue) * easeOut;
      
      // Format based on original value format
      if (insight.value.includes('%')) {
        setDisplayValue(`${currentValue.toFixed(1)}%`);
      } else if (insight.value.includes('€')) {
        setDisplayValue(`€${currentValue.toFixed(0)}M`);
      } else {
        setDisplayValue(currentValue.toFixed(1));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(insight.value);
      }
    };

    requestAnimationFrame(animate);
  };

  const getTrendIcon = () => {
    if (insight.trend === undefined) return null;
    
    if (insight.trend > 0) {
      return (
        <span className="text-green-600 text-sm font-semibold">
          ↑
        </span>
      );
    } else if (insight.trend < 0) {
      return (
        <span className="text-red-600 text-sm font-semibold">
          ↓
        </span>
      );
    }
    return null;
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${insight.title}`}
      className="bg-white rounded-xl shadow-sm border-2 border-red-500 p-4 hover:shadow-md hover:border-red-600 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-sm font-semibold text-slate-900 pr-2">
          {insight.title}
        </h3>
        {getTrendIcon()}
      </div>
      
      <div className="text-2xl font-bold text-red-600 mb-2">
        {displayValue}
      </div>
      
      <p className="text-xs text-slate-600 line-clamp-2">
        {insight.description}
      </p>
    </div>
  );
}

