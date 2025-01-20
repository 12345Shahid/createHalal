// /services/settingsService.ts
// Service for managing user settings

import { apiClient } from '@/utils/apiClient';

interface UserSettings {
  emailNotifications: boolean;
  newsletterSubscription: boolean;
  twoFactorAuth: boolean;
  theme: 'light' | 'dark' | 'system';
  language: string;
}

export const settingsService = {
  async getSettings(): Promise<UserSettings> {
    return apiClient.request('/settings');
  },

  async updateSettings(settings: Partial<UserSettings>): Promise<UserSettings> {
    return apiClient.request('/settings', {
      method: 'PUT',
      body: settings,
    });
  },

  async enableTwoFactor(): Promise<{ qrCode: string; backupCodes: string[] }> {
    return apiClient.request('/settings/2fa/enable', {
      method: 'POST',
    });
  },

  async disableTwoFactor(code: string): Promise<void> {
    return apiClient.request('/settings/2fa/disable', {
      method: 'POST',
      body: { code },
    });
  },
}; 