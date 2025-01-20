// /services/postService.ts
// Service for handling blog post operations

import { BlogPost } from '@/types/blog';
import { apiClient } from '@/utils/apiClient';

export const postService = {
  async getPosts(): Promise<BlogPost[]> {
    return apiClient.request('/posts');
  },

  async getPost(id: string): Promise<BlogPost> {
    return apiClient.request(`/posts/${id}`);
  },

  async createPost(data: Partial<BlogPost>): Promise<BlogPost> {
    return apiClient.request('/posts', {
      method: 'POST',
      body: data,
    });
  },

  async updatePost(id: string, data: Partial<BlogPost>): Promise<BlogPost> {
    return apiClient.request(`/posts/${id}`, {
      method: 'PUT',
      body: data,
    });
  },

  async deletePost(id: string): Promise<void> {
    return apiClient.request(`/posts/${id}`, {
      method: 'DELETE',
    });
  },
}; 