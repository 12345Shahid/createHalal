// API route for deleting user's saved files

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/tools/blog/auth/firebase-config';

export async function DELETE(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { fileIds } = body;

    if (!Array.isArray(fileIds) || fileIds.length === 0) {
      return NextResponse.json(
        { error: 'Invalid file IDs' },
        { status: 400 }
      );
    }

    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);

    const deletedCount = await deleteUserFiles(userId.uid, fileIds);

    return NextResponse.json({
      success: true,
      deletedCount,
      message: `Successfully deleted ${deletedCount} files`
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete files' },
      { status: 500 }
    );
  }
}

async function deleteUserFiles(userId: string, fileIds: string[]): Promise<number> {
  // Implement file deletion logic here
  // This is a mock implementation, replace with actual logic
  return fileIds.length;
}

// Bulk delete handler
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
    const { query, type } = body;

    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);

    const deletedCount = await bulkDeleteUserFiles(userId.uid, query, type);

    return NextResponse.json({
      success: true,
      deletedCount,
      message: `Successfully deleted ${deletedCount} files`
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to bulk delete files' },
      { status: 500 }
    );
  }
}

async function bulkDeleteUserFiles(userId: string, query: string, type?: string): Promise<number> {
  // Implement bulk file deletion logic here
  // This is a mock implementation, replace with actual logic
  return 0;
}// /api/tools/blog/preferences/save-settings.ts
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
