// /hooks/useTags.ts
// Hook for managing blog post tags

import { useState, useCallback } from 'react';

export function useTags() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = useCallback((tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  }, []);

  return { selectedTags, toggleTag };
} 