// /api/tools/blog/seo/analyze.ts
// API endpoint for comprehensive SEO analysis of blog content

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/tools/blog/auth/firebase-config';

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { content, keywords, locale } = await req.json();
    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);

    const seoAnalysis = await analyzeSEO(content, keywords, locale);
    return NextResponse.json(seoAnalysis);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to analyze SEO' }, { status: 500 });
  }
}