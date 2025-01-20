// /services/statisticsService.ts
// Service for handling blog statistics

import { apiClient } from '@/utils/apiClient';

interface PostStats {
  views: number;
  likes: number;
  comments: number;
  shares: number;
}

interface UserStats {
  totalPosts: number;
  totalViews: number;
  totalLikes: number;
  totalComments: number;
}

interface TimeRange {
  start: Date;
  end: Date;
}

export const statisticsService = {
  async getPostStats(postId: string): Promise<PostStats> {
    return apiClient.request(`/statistics/posts/${postId}`);
  },

  async getUserStats(userId: string): Promise<UserStats> {
    return apiClient.request(`/statistics/users/${userId}`);
  },

  async getViewsOverTime(postId: string, range: TimeRange): Promise<{ date: Date; views: number }[]> {
    return apiClient.request(`/statistics/posts/${postId}/views`, {
      method: 'POST',
      body: range,
    });
  },

  async recordView(postId: string): Promise<void> {
    return apiClient.request(`/statistics/posts/${postId}/view`, {
      method: 'POST',
    });
  },
}; 