// /api/tools/blog/preferences/save-settings.ts
// API route for saving user preferences

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/tools/blog/auth/firebase-config';

interface UserPreferences {
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

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const preferences: Partial<UserPreferences> = body;

    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);
    
    const updatedPreferences = await saveUserPreferences(userId.uid, preferences);

    return NextResponse.json(updatedPreferences);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save preferences' },
      { status: 500 }
    );
  }
}

async function saveUserPreferences(userId: string, preferences: Partial<UserPreferences>): Promise<UserPreferences> {
  // Implementation will be done in the backend
  return {
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
    ...preferences
  };
}
