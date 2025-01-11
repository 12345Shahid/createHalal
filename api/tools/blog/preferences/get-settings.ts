// /api/tools/blog/preferences/get-settings.ts
// API route for retrieving user preferences

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

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);
    
    const preferences = await getUserPreferences(userId.uid);

    return NextResponse.json(preferences);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to retrieve preferences' },
      { status: 500 }
    );
  }
}

async function getUserPreferences(userId: string): Promise<UserPreferences> {
  // Default preferences
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
    timezone: 'UTC'
  };
}

// Get specific preference
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
    const { key } = body;

    if (!key) {
      return NextResponse.json(
        { error: 'Preference key is required' },
        { status: 400 }
      );
    }

    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);
    
    const value = await getUserPreference(userId.uid, key);

    return NextResponse.json({ [key]: value });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to retrieve preference' },
      { status: 500 }
    );
  }
}

async function getUserPreference(userId: string, key: string): Promise<any> {
  // Implementation will be done in the backend
  return null;
}
