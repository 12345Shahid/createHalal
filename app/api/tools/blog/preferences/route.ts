import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/firebase/admin';
import { PreferencesService } from '@/services/preferences';
import { handleAPIError } from '@/lib/api/errorHandler';

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await auth.verifyIdToken(token);
    const preferences = await PreferencesService.getUserPreferences(decodedToken.uid);

    return NextResponse.json(preferences);
  } catch (error) {
    return handleAPIError(error);
  }
} 