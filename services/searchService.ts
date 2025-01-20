// /services/searchService.ts
// Service for handling search functionality

import { apiClient } from '@/utils/apiClient';
import { BlogPost } from '@/types/blog';

interface SearchParams {
  query: string;
  filters?: {
    category?: string;
    author?: string;
    tags?: string[];
    dateRange?: {
      start: Date;
      end: Date;
    };
  };
  page?: number;
  limit?: number;
}

interface SearchResponse<T> {
  items: T[];
  total: number;
  page: number;
  totalPages: number;
}

export const searchService = {
  async searchPosts(params: SearchParams): Promise<SearchResponse<BlogPost>> {
    return apiClient.request('/search/posts', {
      method: 'POST',
      body: params,
    });
  },

  async getPopularSearches(): Promise<string[]> {
    return apiClient.request('/search/popular');
  },

  async getSuggestions(query: string): Promise<string[]> {
    return apiClient.request(`/search/suggestions?q=${query}`);
  },
}; 