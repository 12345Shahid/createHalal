// /api/tools/blog/check/plagiarism.ts
// API route for plagiarism checking

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
    const { content } = body;

    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);
    
    const result = await checkPlagiarism(content);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to check plagiarism' },
      { status: 500 }
    );
  }
}
