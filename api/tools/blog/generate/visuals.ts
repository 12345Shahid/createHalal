// /api/tools/blog/generate/visuals.ts
// API route for visual content generation

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
    const { prompt, type, parameters } = body;

    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);
    
    const visual = await generateVisual(prompt, type, parameters);

    return NextResponse.json(visual);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate visual content' },
      { status: 500 }
    );
  }
}
