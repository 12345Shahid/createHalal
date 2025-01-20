// /hooks/useSearch.ts
// Hook for handling search functionality

import { useState, useCallback } from 'react';

export function useSearch<T>(items: T[], searchFields: (keyof T)[]) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useCallback(() => {
    if (!searchTerm) return items;
    
    return items.filter(item =>
      searchFields.some(field =>
        String(item[field]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [items, searchTerm, searchFields]);

  return { searchTerm, setSearchTerm, filteredItems };
} 