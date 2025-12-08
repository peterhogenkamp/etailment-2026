'use client';

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface InsightChartsProps {
  chartType: 'fees' | 'trust' | 'returns';
}

export default function InsightCharts({ chartType }: InsightChartsProps) {
  if (chartType === 'fees') {
    const feeTrend = [
      { day: 1, value: 0 },
      { day: 15, value: -2 },
      { day: 30, value: -4 },
      { day: 60, value: -6 },
      { day: 90, value: -7.8 },
    ];

    return (
      <div className="w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={feeTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="day" 
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
              label={{ value: '%', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              formatter={(value: number) => `${value}%`}
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#dc2626" 
              strokeWidth={2}
              dot={{ fill: '#dc2626', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (chartType === 'trust') {
    const trust = [
      { age: "18-29", value: 58 },
      { age: "30-49", value: 62 },
      { age: "50-64", value: 67 },
      { age: "65+", value: 71 },
    ];

    return (
      <div className="w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={trust}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="age" 
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
              label={{ value: '%', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              formatter={(value: number) => `${value}%`}
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Bar 
              dataKey="value" 
              fill="#dc2626"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return null;
}

