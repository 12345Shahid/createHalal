// /api/tools/blog/analyze/readability.ts
// API endpoint for analyzing content readability scores and providing improvement suggestions

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/tools/blog/auth/firebase-config';

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { content, language = 'en' } = await req.json();
    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);

    const analysis = await analyzeReadability(content, language);
    return NextResponse.json(analysis);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to analyze readability' }, { status: 500 });
  }
}
