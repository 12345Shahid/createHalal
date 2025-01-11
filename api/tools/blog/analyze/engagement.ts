// /api/tools/blog/analyze/engagement.ts
// API endpoint for analyzing content engagement metrics and providing optimization suggestions

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/tools/blog/auth/firebase-config';

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { content, target_audience } = await req.json();
    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);

    const analysis = await analyzeEngagement(content, target_audience);
    return NextResponse.json(analysis);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to analyze engagement' }, { status: 500 });
  }
}
