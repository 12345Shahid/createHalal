// File: /middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware function
export async function middleware(request: NextRequest) {
  const authHeader = request.headers.get('authorization');

  // Check for missing or invalid Bearer token
  if (!authHeader?.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized: Missing or invalid token' }, { status: 401 });
  }

  const token = authHeader.split('Bearer ')[1];

  // Pass the token to downstream requests using a custom header
  const modifiedHeaders = new Headers(request.headers);
  modifiedHeaders.set('x-auth-token', token);

  return NextResponse.next({
    request: {
      headers: modifiedHeaders,
    },
  });
}

// Enforce Node.js runtime to avoid Edge Runtime issues
export const config = {
  matcher: '/api/tools/blog/preferences/:path*',
  runtime: 'nodejs', // Ensures Node.js runtime
};
