import { db } from '@/lib/firebase/admin';
import { UserPreferences } from '@/types/preferences';

export class PreferencesService {
  private static DEFAULT_PREFERENCES: UserPreferences = {
    theme: 'light',
    language: 'en',
    defaultExportFormat: 'txt',
    emailNotifications: true,
    autoSave: true,
    displayDensity: 'comfortable',
    toolbarPosition: 'top',
    fontSize: 14,
    dateFormat: 'YYYY-MM-DD',
    timezone: 'UTC',
  };

  static async getUserPreferences(userId: string): Promise<UserPreferences> {
    const doc = await db.collection('userPreferences').doc(userId).get();
    return doc.exists ? doc.data() as UserPreferences : this.DEFAULT_PREFERENCES;
  }

  static async updateUserPreferences(
    userId: string, 
    preferences: Partial<UserPreferences>
  ): Promise<UserPreferences> {
    const existingPrefs = await this.getUserPreferences(userId);
    const updatedPrefs = { ...existingPrefs, ...preferences };
    
    await db.collection('userPreferences').doc(userId).set(updatedPrefs);
    return updatedPrefs;
  }
} 