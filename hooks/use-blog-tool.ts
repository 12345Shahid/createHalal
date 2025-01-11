// /hooks/use-blog-tool.ts
// Custom hook for managing blog tool state and operations

import { useState, useCallback } from 'react';

interface UseBlogToolOptions {
  toolType: string;
  initialState?: any;
}

export function useBlogTool({ toolType, initialState = {} }: UseBlogToolOptions) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  const generateContent = useCallback(async (prompt: string, parameters = {}) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/tools/blog/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: toolType, prompt, parameters })
      });

      const data = await response.json();
      
      if (!response.ok) throw new Error(data.error);
      
      setResult(data.content);
      return data.content;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [toolType]);

  return {
    loading,
    error,
    result,
    generateContent
  };
}
