// /services/notificationService.ts
// Service for handling user notifications

import { apiClient } from '@/utils/apiClient';

interface Notification {
  id: string;
  type: 'comment' | 'like' | 'mention' | 'follow';
  message: string;
  read: boolean;
  createdAt: Date;
  data?: Record<string, any>;
}

export const notificationService = {
  async getNotifications(): Promise<Notification[]> {
    return apiClient.request('/notifications');
  },

  async markAsRead(notificationId: string): Promise<void> {
    return apiClient.request(`/notifications/${notificationId}/read`, {
      method: 'POST',
    });
  },

  async markAllAsRead(): Promise<void> {
    return apiClient.request('/notifications/read-all', {
      method: 'POST',
    });
  },

  async updatePreferences(preferences: {
    email: boolean;
    push: boolean;
    types: string[];
  }): Promise<void> {
    return apiClient.request('/notifications/preferences', {
      method: 'PUT',
      body: preferences,
    });
  },
}; 