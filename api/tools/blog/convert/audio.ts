// /api/tools/blog/convert/audio.ts
// API endpoint for converting audio content to blog posts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/tools/blog/auth/firebase-config';

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;
    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);

    const transcribedContent = await convertAudio(file);
    return NextResponse.json(transcribedContent);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to convert audio' }, { status: 500 });
  }
}
