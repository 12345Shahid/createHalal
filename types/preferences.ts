export interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
  defaultExportFormat: 'txt' | 'pdf' | 'docx';
  emailNotifications: boolean;
  autoSave: boolean;
  displayDensity: 'comfortable' | 'compact';
  toolbarPosition: 'top' | 'side';
  fontSize: number;
  dateFormat: string;
  timezone: string;
}

export type PreferenceUpdatePayload = Partial<UserPreferences>; 