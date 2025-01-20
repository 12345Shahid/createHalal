// /api/tools/blog/files/list.ts
// API route for listing user's saved files

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/tools/blog/auth/firebase-config';

interface FileListParams {
  page?: number;
  limit?: number;
  type?: string;
  sortBy?: 'name' | 'date' | 'size';
  order?: 'asc' | 'desc';
}

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userId = await auth.verifyIdToken(authHeader.split('Bearer ')[1]);

    const url = new URL(req.url);
    const params: FileListParams = {
      page: parseInt(url.searchParams.get('page') || '1'),
      limit: parseInt(url.searchParams.get('limit') || '20'),
      type: url.searchParams.get('type') || undefined,
      sortBy: (url.searchParams.get('sortBy') as 'name' | 'date' | 'size') || 'date',
      order: (url.searchParams.get('order') as 'asc' | 'desc') || 'desc'
    };

    const { files, total } = await listUserFiles(userId.uid, params);

    return NextResponse.json({
      files,
      total,
      page: params.page,
      limit: params.limit
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to list files' },
      { status: 500 }
    );
  }
}

async function listUserFiles(userId: string, params: FileListParams) {
  // Implement file listing logic here
  // This is a mock implementation, replace with actual logic
  return {
    files: [
      { id: 'file1', name: 'File 1', date: '2025-01-01', size: 1234 },
      { id: 'file2', name: 'File 2', date: '2025-01-02', size: 5678 },
    ],
    total: 2
  };
}
