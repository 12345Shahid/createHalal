// /api/tools/blog/optimize/content.ts
// API route for content optimization

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
    const { content, type, parameters } = body;

    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);
    
    const optimizedContent = await optimizeContent(content, type, parameters);

    return NextResponse.json(optimizedContent);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to optimize content' },
      { status: 500 }
    );
  }
}
