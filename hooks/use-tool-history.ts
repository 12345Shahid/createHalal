// /hooks/use-tool-history.ts
// Custom hook for managing tool usage history and recent operations

import { useState, useCallback } from 'react';

export interface ToolUsage {
  toolId: string;
  timestamp: number;
  result: any;
}

export function useToolHistory() {
  const [history, setHistory] = useState<ToolUsage[]>([]);
  const [loading, setLoading] = useState(false);

  const addToHistory = useCallback((usage: ToolUsage) => {
    setHistory(prev => [usage, ...prev].slice(0, 50));
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return { history, loading, addToHistory, clearHistory };
}
