// /components/analytics/AnalyticsChart.tsx
// Reusable analytics chart component

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface DataPoint {
  label: string;
  value: number;
}

interface AnalyticsChartProps {
  data: DataPoint[];
  type: 'line' | 'bar' | 'pie';
  title: string;
  height?: number;
  color?: string;
}

export function AnalyticsChart({
  data,
  type,
  title,
  height = 300,
  color = '#3B82F6',
}: AnalyticsChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type,
      data: {
        labels: data.map(d => d.label),
        datasets: [
          {
            label: title,
            data: data.map(d => d.value),
            backgroundColor: color,
            borderColor: color,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: title,
          },
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, type, title, color]);

  return (
    <div style={{ height }}>
      <canvas ref={chartRef} />
    </div>
  );
} 