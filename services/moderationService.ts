// /services/moderationService.ts
// Service for handling content moderation

import { apiClient } from '@/utils/apiClient';

interface ModerationResult {
  isApproved: boolean;
  reason?: string;
  score: number;
  categories: {
    spam: number;
    offensive: number;
    inappropriate: number;
  };
}

export const moderationService = {
  async checkContent(content: string): Promise<ModerationResult> {
    return apiClient.request('/moderation/check', {
      method: 'POST',
      body: { content },
    });
  },

  async reportContent(contentId: string, reason: string): Promise<void> {
    return apiClient.request('/moderation/report', {
      method: 'POST',
      body: { contentId, reason },
    });
  },

  async getReportedContent(type: 'post' | 'comment'): Promise<any[]> {
    return apiClient.request(`/moderation/reported/${type}`);
  },

  async resolveReport(reportId: string, action: 'approve' | 'reject'): Promise<void> {
    return apiClient.request(`/moderation/reports/${reportId}`, {
      method: 'PUT',
      body: { action },
    });
  },
}; 