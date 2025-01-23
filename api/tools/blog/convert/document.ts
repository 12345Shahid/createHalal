// /api/tools/blog/convert/document.ts
// API endpoint for converting document formats to blog content

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

    const convertedContent = await convertDocument(file);
    return NextResponse.json(convertedContent);
  } catch (error) {
    // Improved error handling with detailed error message
    console.error('Error converting document:', error);
    return NextResponse.json({ error: 'Failed to convert document', details: error.message }, { status: 500 });
  }
}
