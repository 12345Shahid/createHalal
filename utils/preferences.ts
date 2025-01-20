import { UserPreferences } from '@/types/preferences';
import { PREFERENCE_CONSTANTS } from '@/constants/preferences';

export function validatePreferences(prefs: Partial<UserPreferences>): boolean {
  if (prefs.theme && !Object.values(PREFERENCE_CONSTANTS.THEME).includes(prefs.theme)) {
    return false;
  }
  if (prefs.fontSize && (
    prefs.fontSize < PREFERENCE_CONSTANTS.FONT_SIZE.MIN || 
    prefs.fontSize > PREFERENCE_CONSTANTS.FONT_SIZE.MAX
  )) {
    return false;
  }
  // Add other validations
  return true;
}

export function getDefaultPreferences(): UserPreferences {
  return {
    theme: PREFERENCE_CONSTANTS.THEME.LIGHT,
    language: 'en',
    defaultExportFormat: 'txt',
    emailNotifications: true,
    autoSave: true,
    displayDensity: PREFERENCE_CONSTANTS.DISPLAY_DENSITY.COMFORTABLE,
    toolbarPosition: PREFERENCE_CONSTANTS.TOOLBAR_POSITION.TOP,
    fontSize: PREFERENCE_CONSTANTS.FONT_SIZE.DEFAULT,
    dateFormat: 'YYYY-MM-DD',
    timezone: 'UTC',
  };
} 