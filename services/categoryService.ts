// /services/categoryService.ts
// Service for managing blog categories

import { apiClient } from '@/utils/apiClient';

interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
}

export const categoryService = {
  async getCategories(): Promise<Category[]> {
    return apiClient.request('/categories');
  },

  async createCategory(data: Omit<Category, 'id'>): Promise<Category> {
    return apiClient.request('/categories', {
      method: 'POST',
      body: data,
    });
  },

  async updateCategory(id: string, data: Partial<Category>): Promise<Category> {
    return apiClient.request(`/categories/${id}`, {
      method: 'PUT',
      body: data,
    });
  },

  async deleteCategory(id: string): Promise<void> {
    return apiClient.request(`/categories/${id}`, {
      method: 'DELETE',
    });
  },
}; 