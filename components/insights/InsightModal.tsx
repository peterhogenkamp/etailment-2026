'use client';

import { useEffect } from 'react';
import { Insight } from '@/data/mockInsights';
import InsightCharts from './InsightCharts';

interface InsightModalProps {
  insight: Insight | null;
  onClose: () => void;
}

export default function InsightModal({ insight, onClose }: InsightModalProps) {
  useEffect(() => {
    if (insight) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [insight]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (insight) {
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [insight, onClose]);

  if (!insight) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-xl border-2 border-red-500 max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-xl font-bold text-slate-900">
            {insight.title}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4">
          {/* Value */}
          <div className="text-4xl font-bold text-red-600 mb-4">
            {insight.value}
          </div>

          {/* Description */}
          <p className="text-slate-600 mb-6">
            {insight.description}
          </p>

          {/* Chart */}
          {insight.chart && (
            <div className="mt-6 border-t border-slate-200 pt-6">
              <InsightCharts chartType={insight.chart} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

