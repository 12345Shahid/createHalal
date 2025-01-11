// /api/tools/blog/generate/titles.ts
// API route for title generation

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
    const { topic, parameters } = body;

    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);
    
    const titles = await generateTitles(topic, parameters);

    return NextResponse.json({ titles });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate titles' },
      { status: 500 }
    );
  }
}
