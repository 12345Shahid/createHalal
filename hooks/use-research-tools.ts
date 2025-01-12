// /hooks/use-research-tools.ts
// Custom hook for managing research and trend analysis tools

import { useState, useCallback } from 'react';
import { trendAnalyzer } from '@/lib/tools/blog/trends/analyzer';

export function useResearchTools() {
  const [researching, setResearching] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const conductResearch = useCallback(async (niche: string, timeframe: string) => {
    try {
      setResearching(true);
      setError(null);
      const trends = await trendAnalyzer.analyzeTrends(niche, timeframe);
      setResults(trends);
      return trends;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Research failed');
    } finally {
      setResearching(false);
    }
  }, []);

  return { researching, results, error, conductResearch };
}
