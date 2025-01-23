// /api/tools/blog/files/save.ts
// API route for saving generated content to user's storage

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/tools/blog/auth/firebase-config';

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
    const { content, fileName, type } = body;

    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);

    const fileData = await saveFile(userId.uid, content, fileName, type);

    return NextResponse.json({ file: fileData });
  } catch (error) {
    // Improved error handling
    console.error('Error saving file:', error);
    return NextResponse.json(
      { error: 'Failed to save file' },
      { status: 500 }
    );
  }
}

async function saveFile(userId: string, content: string, fileName: string, type: string) {
  // Implement file saving logic here
  // This is a mock implementation, replace with actual logic
  return { id: 'newfile', name: fileName, url: 'https://example.com/files/' + fileName };
}
