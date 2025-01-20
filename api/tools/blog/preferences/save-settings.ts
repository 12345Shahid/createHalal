// /api/tools/blog/preferences/save-settings.ts
// API route for saving user preferences

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/tools/blog/auth/firebase-config';
import { getFirestore } from 'firebase-admin/firestore';

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

// Add input validation
const validatePreferences = (prefs: Partial<UserPreferences>): boolean => {
  if (prefs.theme && !['light', 'dark'].includes(prefs.theme)) return false;
  if (prefs.fontSize && (prefs.fontSize < 8 || prefs.fontSize > 32)) return false;
  if (prefs.displayDensity && !['comfortable', 'compact'].includes(prefs.displayDensity)) return false;
  if (prefs.toolbarPosition && !['top', 'side'].includes(prefs.toolbarPosition)) return false;
  return true;
};

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

    // Add validation
    if (!validatePreferences(preferences)) {
      return NextResponse.json(
        { error: 'Invalid preferences format' },
        { status: 400 }
      );
    }

    // Add error handling for token verification
    let userId;
    try {
      const decodedToken = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);
      userId = decodedToken.uid;
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid authentication token' },
        { status: 401 }
      );
    }

    const updatedPreferences = await saveUserPreferences(userId, preferences);

    return NextResponse.json(updatedPreferences);
  } catch (error) {
    console.error('Preference save error:', error);
    return NextResponse.json(
      { error: 'Failed to save preferences' },
      { status: 500 }
    );
  }
}

async function saveUserPreferences(userId: string, preferences: Partial<UserPreferences>): Promise<UserPreferences> {
  const db = getFirestore();
  const userPrefsRef = db.collection('userPreferences').doc(userId);
  
  // Get existing preferences
  const doc = await userPrefsRef.get();
  const existingPrefs = doc.exists ? doc.data() as UserPreferences : {
    theme: 'light' as const,
    language: 'en',
    defaultExportFormat: 'txt' as const,
    emailNotifications: true,
    autoSave: true,
    displayDensity: 'comfortable' as const,
    toolbarPosition: 'top' as const,
    fontSize: 14,
    dateFormat: 'YYYY-MM-DD',
    timezone: 'UTC',
  };

  // Merge new preferences with existing ones
  const updatedPrefs = {
    ...existingPrefs,
    ...preferences
  } as UserPreferences;

  // Save to Firestore
  await userPrefsRef.set(updatedPrefs);

  return updatedPrefs;
}
