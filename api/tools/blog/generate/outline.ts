// /api/tools/blog/generate/outline.ts
// API endpoint for generating structured blog post outlines

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/tools/blog/auth/firebase-config';

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { topic, depth, keywords } = await req.json();
    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);

    const outline = await generateOutline(topic, depth, keywords);
    return NextResponse.json(outline);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate outline' }, { status: 500 });
  }
}
